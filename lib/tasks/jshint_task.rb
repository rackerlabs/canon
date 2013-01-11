require 'rake/tasklib'

class JSHintTask < Rake::TaskLib
  attr_accessor :binary
  attr_accessor :pattern
  attr_accessor :config
  attr_accessor :reporter
  attr_accessor :show_non_errors
  attr_accessor :output

  def initialize(name, *args, &block)
    @binary = 'jshint'
    @pattern = '**/*.js'
    @show_non_errors = false

    yield self if block_given?

    desc 'Lint javascripts with JSHint'
    task name, *args do |t, task_args|
      log("Linting #{@pattern}") { system(command) }
    end
  end

  private

  def command
    command = "#{binary} #{pattern}"
    command += reporter
    command += " --config #{@config}" unless @config.nil?
    command += " --show-non-errors" if @show_non_errors
    command += " > #{output}" unless @output.nil?
    command
  end

  def reporter
    built_in_reporters = ['checkstyle-reporter', 'jslint-reporter']

    if built_in_reporters.include?(@reporter)
      return " --#{@reporter}"
    elsif @reporter
      return " --reporter #{@reporter}"
    else
      return ''
    end
  end
end
