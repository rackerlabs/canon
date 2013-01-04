feature 'Example Functional Test' do
  scenario 'displays a welcome message' do
    visit('/')

    title = find(:id, 'page-title')
    title.text.should == 'Welcome to Canon!'
  end
end
