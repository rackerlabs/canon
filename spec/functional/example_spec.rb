describe 'Example Functional Test' do
  it 'displays a welcome message' do
    driver = Selenium::WebDriver.for(:firefox)
    driver.navigate.to('http://0.0.0.0:3000')

    title = driver.find_element(:id, 'page-title')
    title.text.should == 'Welcome to Canon!'

    driver.quit
  end
end
