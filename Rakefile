require 'fog'

require File.expand_path('../lib/canon', __FILE__)
require File.expand_path('../lib/tasks/log', __FILE__)

task :release do
  if !Canon.test?
    puts "\e[31mRelease should only happen in the test environment!\e[0m"
    exit
  end

  log('Creating Canon packages') do
    FileUtils.remove_dir(Canon.package_path, true)
    FileUtils.mkdir(Canon.package_path)
    FileUtils.copy_entry(Canon.dist_path, File.join(Canon.package_path, 'canon'))

    system("cd #{Canon.package_path} && tar -czf canon.tar.gz canon")
    system("cd #{Canon.package_path} && zip -q canon.zip canon/*")
  end

  connection = Fog::Storage.new(:provider => 'Rackspace', :rackspace_username => ENV['RACKSPACE_USERNAME'], :rackspace_api_key => ENV['RACKSPACE_API_KEY'])
  directory = connection.directories.get('cdn.canon.rackspace.com')

  files_to_upload = Dir.glob('{dist,package}/*.{eot,svg,ttf,woff,js,css,png,gif,tar.gz,zip}')
  files_to_upload.each do |file|
    contents = File.open(file)
    base_name = File.basename(file)
    latest_name = "v#{Canon::MAJOR}-latest/#{base_name}"
    versioned_name = "v#{Canon.version}/#{base_name}"

    log("Uploading #{versioned_name} to CDN") do
      raise "#{versioned_name} already exists!" if directory.files.head(versioned_name)

      directory.files.create(
        :key => versioned_name,
        :body => contents,
        :public => true,
        :access_control_allow_origin => '*'
      )
    end

    log("Uploading #{latest_name} to CDN") do
      if directory.files.head(latest_name)
        file = directory.files.get(latest_name)
        file.body = contents
        file.save
      else
        directory.files.create(
          :key => latest_name,
          :body => contents,
          :public => true,
          :access_control_allow_origin => '*'
        )
      end
    end
  end
end

task :default => ['compile', 'lint', 'spec:unit', 'spec:functional', 'spec:screenshot']
