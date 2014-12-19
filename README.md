![http://92f886790563f0d2e9da-ca7505e8b565bfde1147b2852ab5bbdb.r79.cf1.rackcdn.com/canon-logo-black.png](http://92f886790563f0d2e9da-ca7505e8b565bfde1147b2852ab5bbdb.r79.cf1.rackcdn.com/canon-logo-black.png)

[![Build Status](https://travis-ci.org/rackerlabs/canon.png?branch=master)](https://travis-ci.org/rackerlabs/canon)

**This README contains information on setting up the Canon development environment
on your local machine.  Use these instructions if you intend to develop Canon
elements and contribute code back to the project.**

**For information on including Canon CSS and javascript in your application, see http://canon.rackspace.com.**

## SYSTEM REQUIREMENTS

- Ruby 2.x.x
- Node 0.6 or higher
- PhantomJS 1.7 or higher
- ImageMagick 6.5.x or 6.6.x
- [RVM](https://rvm.io) or [rbenv](https://github.com/sstephenson/rbenv) (Highly Recommended)

## SETUP

Setting up your Canon development environment is easy:

    $ git clone https://github.com/rackerlabs/canon.git
    $ script/bootstrap
    $ grunt server

The Canon server is now running at http://0.0.0.0:8000. Before running automated
tests, you'll need to set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment
variables. If you run into any issues, submit an issue.

### VAGRANT SUPPORT

If you are on Windows, or you don't already have a working Ruby and Node.js
development environment, it may be easier to run the development environment
inside of an automatically-configured Vagrant VM.

First install [Vagrant](https://www.vagrantup.com/downloads.html) and
[VirtualBox](https://www.virtualbox.org/wiki/Downloads), then from the command
line enter:

    $ vagrant up
    $ vagrant ssh -c 'cd /vagrant; grunt server'

Read the comments in the [Vagrantfile](Vagrantfile) for more details.

## CONTRIBUTING

We use [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html) as our
process for contributing. In short:

1. Fork Canon to your GitHub account and clone the forked repository.
2. `git checkout master` - Switch to the master branch.
3. `git pull origin master` - Pull the latest revision from GitHub.
4. `git checkout -b FEATURE_NAME` - Create a feature branch.
5. Make and commit changes to the feature branch.
6. `grunt` - Verify all tests are passing.
7. `git push origin FEATURE_NAME` - Push changes to GitHub.
8. Open a pull request and wait for your changes to be reviewed.
9. After addressing pull request feedback, your changes will be merged.

Commit messages should use the following format for easier changelog generation:

```
[TYPE][ID] Description

Body
```

Type can be: Feature, Bug, Style, Test, Maintenance
ID is the Trello card number being implemented.

