feature 'Example Functional Test' do
  it 'displays a welcome message' do
    visit('/demos/')

    find('h1').text.should == 'Typography'
  end
end
