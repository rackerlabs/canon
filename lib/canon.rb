module Canon
  MAJOR = 1
  MINOR = 3
  PATCH = 0
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

    def dist_path
      File.join(root_path, 'dist')
    end

    def package_path
      File.join(root_path, 'package')
    end
  end
end
