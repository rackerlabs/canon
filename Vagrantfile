# -*- mode: ruby -*-
# vi: set ft=ruby :

# Create an Ubuntu VM with everything necessary to build Rackspace Canon.
#
# Pre-requisites: Vagrant [1]
#
# To build Canon with Vagrant, open a terminal and enter:
#
#   vagrant up	    # this will take a while the first time
#   vagrant ssh -c 'cd /vagrant; grunt server'
#
# Any changes made to the Canon source files will now automatically be compiled
# and left in the `dist` directory on the host machine.
#
# When you are finished, type Control-C to kill the Grunt server, then enter:
#
#   vagrant halt
#
# [1] https://www.vagrantup.com/downloads.html

$provision_script = <<'ROOT_SCRIPT'
  export DEBIAN_FRONTEND=noninteractive
  apt-get update && apt-get install -y build-essential git libcurl4-openssl-dev libmagickwand-dev libreadline-dev libssl-dev libxml2-dev libxslt1-dev npm phantomjs

  npm install -g grunt-cli
  ln -fs "$(which nodejs)" /usr/local/bin/node

  sudo -iu vagrant "$SHELL" <<'USER_SCRIPT'

  git config --global url."https://".insteadOf git://

  git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
  git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build

  export PATH="$HOME/.rbenv/bin:$PATH"
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
  eval "$(rbenv init -)"
  echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

  rbenv install 2.1.2	# jekyll requires v=2.1.2
  rbenv shell 2.1.2

  cd /vagrant
  npm install --no-bin-links	# required when `/vagrant` is hosted in Windows
  ruby script/bootstrap
USER_SCRIPT
ROOT_SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 8000, host: 8000

  config.vm.provision "shell", inline: $provision_script
end
