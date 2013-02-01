require 'rake/tasklib'

class MochaTask < Rake::TaskLib
  attr_accessor :binary
  attr_accessor :url
  attr_accessor :reporter
  attr_accessor :timeout
  attr_accessor :agent
  attr_accessor :cookie
  attr_accessor :header
  attr_accessor :setting
  attr_accessor :view
  attr_accessor :output

  def initialize(name, *args, &block)
    @binary = 'mocha-phantomjs'

    yield self if block_given?

    desc 'Lint javascripts with JSHint'
    task name, *args do |t, task_args|
      log("Linting #{@pattern}") { system(command) }
    end
  end

  private

  def command
    command = "#{binary} #{url}"

    # attr_accessor :reporter
    # attr_accessor :timeout
    # attr_accessor :agent
    # attr_accessor :cookie
    # attr_accessor :header
    # attr_accessor :setting
    # attr_accessor :view

    command += " > #{output}" unless @output.nil?
    command
  end
end
