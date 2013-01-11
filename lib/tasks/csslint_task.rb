require 'rake/tasklib'

class CSSLintTask < Rake::TaskLib
  attr_accessor :binary
  attr_accessor :pattern
  attr_accessor :format
  attr_accessor :quiet
  attr_accessor :errors
  attr_accessor :warnings
  attr_accessor :ignore
  attr_accessor :output

  def initialize(name, *args, &block)
    @binary = 'csslint'
    @pattern = '**/*.css'
    @format = 'text'
    @quiet = false
    @errors = []
    @warnings = []
    @ignore = []

    yield self if block_given?

    desc 'Lint stylesheets with CSS Lint'
    task name, *args do |t, task_args|
      log("Linting #{@pattern}") { system(command) }
    end
  end

  private

  def command
    command = "#{binary} #{pattern}"
    command += " --quiet" if @quiet
    command += " --errors=#{rule_list(@errors)}" unless @errors.empty?
    command += " --warnings=#{rule_list(@warnings)}" unless @warnings.empty?
    command += " --ignore=#{rule_list(@ignore)}" unless @ignore.empty?
    command += " > #{@output}" unless @output.nil?
    command
  end

  def rule_list(rules)
    rules.join(',')
  end
end
