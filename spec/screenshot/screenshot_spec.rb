require 'yaml'

describe 'Screenshots' do
  config_path = File.expand_path('../screenshots.yml', __FILE__)
  config = YAML.load_file(config_path)

  config['screenshots'].each do |screenshot|
    it screenshot['name'] do
      GreenOnion.skin_visual_and_percentage("#{url}/screenshots/#{screenshot['url']}")
    end
  end
end
