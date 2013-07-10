feature 'Tooltip' do
  let(:browser) { page.driver.browser }
  let(:tooltip) { find('.rs-tooltip') }

  background do
    visit('/functional/tooltip.html')
  end

  context 'Unattached' do
    it 'is not visible after being attached' do
      click_button 'Attach'

      tooltip.should_not be_visible
    end
  end

  context 'Hover' do
    background do
      click_button 'Attach'
      hover_over_toggle
    end

    it 'is visible when hovering over toggle' do
      tooltip.should be_visible
    end

    it 'is visible when hovering over tooltip' do
      hover_over_tooltip

      tooltip.should be_visible
    end
  end

  private

  def hover_over_toggle
    toggle = browser.find_element(:css, '.rs-icon-help')
    browser.action.move_to(toggle).perform

    sleep 0.5
  end

  def hover_over_tooltip
    tooltip = browser.find_element(:css, '.rs-tooltip')
    browser.action.move_to(tooltip).perform

    sleep 0.5
  end
end
