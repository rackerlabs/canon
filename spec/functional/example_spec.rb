describe 'Example Functional Test' do
  it 'displays a welcome message' do
    driver = Selenium::WebDriver.for(:firefox)
    driver.navigate.to('http://0.0.0.0:3000')

    title = driver.find_element(:tag_name, 'h1')
    title.text.should == 'Typography'

    driver.quit
  end
end
