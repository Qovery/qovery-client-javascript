/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QoveryApi);
  }
}(this, function(expect, QoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QoveryApi.GitRepositoriesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GitRepositoriesApi', function() {
    describe('getBitbucketRepositories', function() {
      it('should call getBitbucketRepositories successfully', function(done) {
        //uncomment below and update the code to test getBitbucketRepositories
        //instance.getBitbucketRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBitbucketRepositoryBranches', function() {
      it('should call getBitbucketRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getBitbucketRepositoryBranches
        //instance.getBitbucketRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGitProviderAccount', function() {
      it('should call getGitProviderAccount successfully', function(done) {
        //uncomment below and update the code to test getGitProviderAccount
        //instance.getGitProviderAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGithubRepositories', function() {
      it('should call getGithubRepositories successfully', function(done) {
        //uncomment below and update the code to test getGithubRepositories
        //instance.getGithubRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGithubRepositoryBranches', function() {
      it('should call getGithubRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getGithubRepositoryBranches
        //instance.getGithubRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGitlabRepositories', function() {
      it('should call getGitlabRepositories successfully', function(done) {
        //uncomment below and update the code to test getGitlabRepositories
        //instance.getGitlabRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGitlabRepositoryBranches', function() {
      it('should call getGitlabRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getGitlabRepositoryBranches
        //instance.getGitlabRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
