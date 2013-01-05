canon
=====

## SYSTEM REQUIREMENTS

- Ruby 1.9.x
- Node 0.6 or higher
- ImageMagick 6.5.x or 6.6.x
- [RVM](https://rvm.io) or [rbenv](https://github.com/sstephenson/rbenv) (Highly Recommended)

## SETUP

Setting up your Canon development environment is easy:

    $ git clone https://github.rackspace.com/canon/canon.git
    $ script/bootstrap
    $ script/server

The Canon server is now running at http://0.0.0.0:3000. If you run into any issues, 
check the [wiki](https://github.rackspace.com/canon/canon/wiki) or send an email to 
canon@lists.rackspace.com.
 
## CONTRIBUTING

We use [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html) as our 
process for contributing. In short:

1) `git checkout master` - Switch to the master branch.
2) `git pull origin master` - Pull the latest revision from GitHub.
3) `git checkout -b FEATURE_NAME` - Create a feature branch.
4) Make and commit changes to the feature branch.
5) Verify all tests are passing by running:
   * `bundle exec rake lint`
   * `bundle exec rake spec:unit`
   * `bundle exec rake spec:screenshot`
   * `bundle exec rake spec:functional`
5) `git push origin FEATURE_NAME` - Push changes to GitHub.
6) Open a pull request and wait for your changes to be reviewed.
7) After addressing pull request feedback, merge your changes.
