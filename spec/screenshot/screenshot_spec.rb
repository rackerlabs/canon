require 'yaml'

describe 'Screenshots' do
  config_path = File.expand_path('../screenshots.yml', __FILE__)
  config = YAML.load_file(config_path)
  host = config['host']
  port = config['port']

  config['screenshots'].each do |screenshot|
    url = "http://#{host}:#{port}/#{screenshot['url']}"

    it screenshot['name'] do
      GreenOnion.skin_visual_and_percentage(url)
    end
  end
end
