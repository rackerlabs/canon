feature 'Menu' do
  let(:dropdown) { find('.rs-dropdown') }
  let(:toggle) { find('.rs-dropdown-toggle') }
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
      toggle.click

      menu.should be_visible
    end
  end

  context 'Visible' do
    background do
      click_button 'Attach'
      toggle.click
    end

    it 'is hidden after clicking body' do
      find('body').click

      menu.should_not be_visible
    end

    it 'is hidden after clicking toggle' do
      toggle.click

      menu.should_not be_visible
    end

    it 'is hidden after clicking item' do
      menu.find('a').click

      menu.should_not be_visible
    end

    it 'remains open after clicking category' do
      menu.find('.rs-dropdown-category').click

      menu.should be_visible
    end
  end

  # context 'Loading' do
  #   background do
  #     click_button 'Attach'
  #   end

  #   it 'does not change when header is clicked' do
  #     header.click

  #     assert_section_is_loading
  #   end

  #   it 'collapses when "Collapse" is clicked' do
  #     click_button 'Collapse'

  #     assert_section_is_collapsed
  #   end

  #   it 'expands when "Expand" is clicked' do
  #     click_button 'Expand'

  #     assert_section_is_expanded
  #   end

  #   it 'expands when "Toggle" is clicked' do
  #     click_button 'Toggle'

  #     assert_section_is_expanded
  #   end
  # end

  # context 'Collapsed' do
  #   background do
  #     click_button 'Attach'
  #     click_button 'Collapse'
  #   end

  #   it 'expands when header is clicked' do
  #     header.click

  #     assert_section_is_expanded
  #   end

  #   it 'expands when "Expand" is clicked' do
  #     click_button 'Expand'

  #     assert_section_is_expanded
  #   end

  #   it 'expands when "Toggle" is clicked' do
  #     click_button 'Toggle'

  #     assert_section_is_expanded
  #   end
  # end

  # context 'Expanded' do
  #   background do
  #     click_button 'Attach'
  #     click_button 'Expand'
  #   end

  #   it 'collapses when header clicked' do
  #     header.click

  #     assert_section_is_collapsed
  #   end

  #   it 'collapses when "Collapse" is clicked' do
  #     click_button 'Collapse'

  #     assert_section_is_collapsed
  #   end

  #   it 'collapses when "Toggle" is clicked' do
  #     click_button 'Toggle'

  #     assert_section_is_collapsed
  #   end
  # end

  # def assert_section_is_loading
  #   page.should have_css('.collapsible-section.loading')
  #   page.should_not have_css('.collapsible-section.collapsed')
  #   content.should_not be_visible
  # end

  # def assert_section_is_expanded
  #   page.should_not have_css('.collapsible-section.loading')
  #   page.should_not have_css('.collapsible-section.collapsed')
  #   content.should be_visible
  # end

  # def assert_section_is_collapsed
  #   page.should_not have_css('.collapsible-section.loading')
  #   page.should have_css('.collapsible-section.collapsed')
  #   content.should_not be_visible
  # end
end
