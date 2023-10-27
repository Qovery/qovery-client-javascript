/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.3
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
    instance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
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

  describe('OrganizationAccountGitRepositoriesApi', function() {
    describe('getOrganizationBitbucketRepositories', function() {
      it('should call getOrganizationBitbucketRepositories successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBitbucketRepositories
        //instance.getOrganizationBitbucketRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBitbucketRepositoriesTemp', function() {
      it('should call getOrganizationBitbucketRepositoriesTemp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBitbucketRepositoriesTemp
        //instance.getOrganizationBitbucketRepositoriesTemp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBitbucketRepositoryBranches', function() {
      it('should call getOrganizationBitbucketRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBitbucketRepositoryBranches
        //instance.getOrganizationBitbucketRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGitProviderAccount', function() {
      it('should call getOrganizationGitProviderAccount successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGitProviderAccount
        //instance.getOrganizationGitProviderAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGitProviderAccountTemp', function() {
      it('should call getOrganizationGitProviderAccountTemp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGitProviderAccountTemp
        //instance.getOrganizationGitProviderAccountTemp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGithubRepositories', function() {
      it('should call getOrganizationGithubRepositories successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGithubRepositories
        //instance.getOrganizationGithubRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGithubRepositoriesTemp', function() {
      it('should call getOrganizationGithubRepositoriesTemp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGithubRepositoriesTemp
        //instance.getOrganizationGithubRepositoriesTemp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGithubRepositoryBranches', function() {
      it('should call getOrganizationGithubRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGithubRepositoryBranches
        //instance.getOrganizationGithubRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGitlabRepositories', function() {
      it('should call getOrganizationGitlabRepositories successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGitlabRepositories
        //instance.getOrganizationGitlabRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGitlabRepositoriesTemp', function() {
      it('should call getOrganizationGitlabRepositoriesTemp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGitlabRepositoriesTemp
        //instance.getOrganizationGitlabRepositoriesTemp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationGitlabRepositoryBranches', function() {
      it('should call getOrganizationGitlabRepositoryBranches successfully', function(done) {
        //uncomment below and update the code to test getOrganizationGitlabRepositoryBranches
        //instance.getOrganizationGitlabRepositoryBranches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
