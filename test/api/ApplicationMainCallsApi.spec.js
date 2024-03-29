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
    instance = new QoveryApi.ApplicationMainCallsApi();
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

  describe('ApplicationMainCallsApi', function() {
    describe('deleteApplication', function() {
      it('should call deleteApplication successfully', function(done) {
        //uncomment below and update the code to test deleteApplication
        //instance.deleteApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editApplication', function() {
      it('should call editApplication successfully', function(done) {
        //uncomment below and update the code to test editApplication
        //instance.editApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplication', function() {
      it('should call getApplication successfully', function(done) {
        //uncomment below and update the code to test getApplication
        //instance.getApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationStatus', function() {
      it('should call getApplicationStatus successfully', function(done) {
        //uncomment below and update the code to test getApplicationStatus
        //instance.getApplicationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicationCommit', function() {
      it('should call listApplicationCommit successfully', function(done) {
        //uncomment below and update the code to test listApplicationCommit
        //instance.listApplicationCommit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicationContributor', function() {
      it('should call listApplicationContributor successfully', function(done) {
        //uncomment below and update the code to test listApplicationContributor
        //instance.listApplicationContributor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicationLinks', function() {
      it('should call listApplicationLinks successfully', function(done) {
        //uncomment below and update the code to test listApplicationLinks
        //instance.listApplicationLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
