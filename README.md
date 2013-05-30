![http://92f886790563f0d2e9da-ca7505e8b565bfde1147b2852ab5bbdb.r79.cf1.rackcdn.com/canon-logo-black.png](http://92f886790563f0d2e9da-ca7505e8b565bfde1147b2852ab5bbdb.r79.cf1.rackcdn.com/canon-logo-black.png)

**This README contains information on setting up the Canon development environment 
on your local machine.  Use these instructions if you intend to develop Canon 
elements and contribute code back to the project.**

**For information on including Canon CSS and javascript in your application, see http://canon.rackspace.com.**

## SYSTEM REQUIREMENTS

- Ruby 1.9.x
- Node 0.6 or higher
- PhantomJS 1.7 or higher
- ImageMagick 6.5.x or 6.6.x
- [RVM](https://rvm.io) or [rbenv](https://github.com/sstephenson/rbenv) (Highly Recommended)

## SETUP

Setting up your Canon development environment is easy:

    $ git clone https://github.rackspace.com/canon/canon.git
    $ script/bootstrap
    $ script/server

The Canon server is now running at http://0.0.0.0:3000. Before running automated
tests, you'll need to set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment
variables. See [Environment Configuration](https://github.rackspace.com/canon/canon/wiki/Environment-Configuration)
for more information on environment variables used by Canon. If you run into any 
issues, check the [wiki](https://github.rackspace.com/canon/canon/wiki) or send 
an email to canon@lists.rackspace.com.
 
## CONTRIBUTING

We use [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html) as our 
process for contributing. In short:

1. `git checkout master` - Switch to the master branch.
2. `git pull origin master` - Pull the latest revision from GitHub.
3. `git checkout -b FEATURE_NAME` - Create a feature branch.
4. Make and commit changes to the feature branch.
5. `bundle exec rake` - Verify all tests are passing.
5. `git push origin FEATURE_NAME` - Push changes to GitHub.
6. Open a pull request and wait for your changes to be reviewed.
7. After addressing pull request feedback, merge your changes.

Commit messages should use the following format for easier changelog generation:

```
[TYPE][ID] Description

Body
```

Type can be: Feature, Bug, Style, Test, Maintenance
ID is the Trello card number being implemented.
