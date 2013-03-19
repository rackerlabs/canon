feature 'Content Section' do
  let(:section) { find('.collapsible-section') }
  let(:header) { find('.content-section-header') }
  let(:content) { find('.content-section-body') }

  background do
    visit('/functional/content-section.html')
  end

  context 'Unattached' do
    it 'goes into loading state when attached' do
      click_button 'Attach'

      assert_section_is_loading
    end
  end

  context 'Loading' do
    background do
      click_button 'Attach'
    end

    it 'does not change when header is clicked' do
      header.click

      assert_section_is_loading
    end

    it 'collapses when "Collapse" is clicked' do
      click_button 'Collapse'

      assert_section_is_collapsed
    end

    it 'expands when "Expand" is clicked' do
      click_button 'Expand'

      assert_section_is_expanded
    end

    it 'expands when "Toggle" is clicked' do
      click_button 'Toggle'

      assert_section_is_expanded
    end
  end

  context 'Collapsed' do
    background do
      click_button 'Attach'
      click_button 'Collapse'
    end

    it 'expands when header is clicked' do
      header.click

      assert_section_is_expanded
    end

    it 'expands when "Expand" is clicked' do
      click_button 'Expand'

      assert_section_is_expanded
    end

    it 'expands when "Toggle" is clicked' do
      click_button 'Toggle'

      assert_section_is_expanded
    end
  end

  context 'Expanded' do
    background do
      click_button 'Attach'
      click_button 'Expand'
    end

    it 'collapses when header clicked' do
      header.click

      assert_section_is_collapsed
    end

    it 'collapses when "Collapse" is clicked' do
      click_button 'Collapse'

      assert_section_is_collapsed
    end

    it 'collapses when "Toggle" is clicked' do
      click_button 'Toggle'

      assert_section_is_collapsed
    end
  end

  def assert_section_is_loading
    page.should have_css('.collapsible-section.loading')
    page.should_not have_css('.collapsible-section.collapsed')
    content.should_not be_visible
  end

  def assert_section_is_expanded
    page.should_not have_css('.collapsible-section.loading')
    page.should_not have_css('.collapsible-section.collapsed')
    content.should be_visible
  end

  def assert_section_is_collapsed
    page.should_not have_css('.collapsible-section.loading')
    page.should have_css('.collapsible-section.collapsed')
    content.should_not be_visible
  end
end
