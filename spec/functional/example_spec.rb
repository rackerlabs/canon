feature 'Example Functional Test' do
  it 'displays a welcome message' do
    visit('/')

    find('h1').text.should == 'Typography'
  end
end
