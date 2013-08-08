feature 'Menu' do
  let(:dropdown) { find('.rs-dropdown') }
  let(:menu) { find('.rs-dropdown-menu') }

  background do
    visit('/functional/menu.html')
  end

  context 'Unattached' do
    it 'menu is not visible after being attached' do
      click_button 'Attach'

      menu.should_not be_visible
    end
  end

  context 'Hidden' do
    background do
      click_button 'Attach'
    end

    it 'is visible after clicking toggle' do
      click_link "I'm the toggle."

      menu.should be_visible
    end
  end

  context 'Visible' do
    background do
      click_button 'Attach'
      click_link "I'm the toggle."
    end

    it 'is hidden after clicking body' do
      find('body').click

      menu.should_not be_visible
    end

    it 'is hidden after clicking toggle' do
      click_link "I'm the toggle."

      menu.should_not be_visible
    end

    it 'is hidden after clicking item' do
      menu.find('a').click

      menu.should_not be_visible
    end

    it 'is hidden after opening other menu' do
      click_link "I'm another toggle."

      all_menus = all('.rs-dropdown-menu')
      all_menus.first.should_not be_visible
      all_menus.last.should be_visible
    end

    it 'remains open after clicking category' do
      menu.find('.rs-dropdown-category').click

      menu.should be_visible
    end
  end
end
