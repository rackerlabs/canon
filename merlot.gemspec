Gem::Specification.new do |s|
  s.name = 'merlot'
  s.version = '2.0.0'
  s.date = '2012-12-06'
  s.summary = "Merlot Gem"
  s.description = "A framework for UI test automation built on Selenium WebDriver and Ruby."
  s.author = ["Michael Jackson"]
  s.email = 'michael.jackson@rackspace.com'
  s.homepage = 'https://github.rackspace.com/michael-jackson/merlot'
  s.files = Dir['lib/merlot.rb'] + Dir['lib/**/*.rb']
  s.require_paths = ["lib"]
  s.post_install_message = "Thank you for installing Merlot!  Test, drink, and be merry!"
  s.required_ruby_version = '>= 1.8.7'
  s.add_dependency 'selenium-webdriver', '>= 2.24.0'
  s.add_dependency 'require_relative'
end
