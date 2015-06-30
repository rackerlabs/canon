module Canon
  MAJOR = 1
  MINOR = 8
  PATCH = 1
  PRE = nil

  class << self
    def version
      version = [MAJOR, MINOR, PATCH].join('.')
      if PRE
        version += "-#{PRE}"
      end

      version
    end

    def environment
      ENV['CANON_ENV'] || 'development'
    end

    def test?
      environment == 'test'
    end

    def root_path
      File.expand_path('../..', __FILE__)
    end

    def dist_path
      File.join(root_path, 'dist')
    end

    def package_path
      File.join(root_path, 'package')
    end
  end
end
