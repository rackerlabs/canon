require 'rake/tasklib'

class ReleaseTask < Rake::TaskLib
  attr_accessor :file
  attr_accessor :directory
  attr_accessor :key


  # Upload to CDN.
end
