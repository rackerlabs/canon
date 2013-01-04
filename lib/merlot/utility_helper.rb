module Merlot
  # Utility methods for common UI needs such as random usernames, e-mail addresses, etc.
  module UtilityHelper
    def random_email
      email = "user.test" + rand(500).to_s + "@rackspace.com"
    end

    def random_first_name
      first_name = "John" + (0...50).map{ ('a'..'z').to_a[rand(26)] }.join
    end

    def random_last_name
      last_name = "Doe" + (0...50).map{ ('a'..'z').to_a[rand(26)] }.join
    end

    def random_phone
      phone = "555-555-" + rand(1000..9999).to_s
    end

    def random_user_name
      user = "test_user" + rand(500).to_s
    end
  end
end