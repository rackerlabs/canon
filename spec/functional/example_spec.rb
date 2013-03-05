describe 'Example Functional Test' do
  it 'displays a welcome message' do
    driver = create_driver
    driver.navigate.to(base_url)

    title = driver.find_element(:tag_name, 'h1')
    title.text.should == 'Typography'

    driver.quit
  end
end
