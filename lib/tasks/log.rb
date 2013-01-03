def log(description, &block)
  print "\e[37m>> #{description}...\e[0m"

  if try_task(&block)
    puts "\e[32m Complete!\e[0m"
  else
    puts "\e[31m Failed!\e[0m"
  end
end

def try_task(&block)
  begin
    return block.call != false
  rescue Exception => e
    false
  end
end
