/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.BetaQoveryApi);
  }
}(this, function(expect, BetaQoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BetaQoveryApi.LogicalDatabaseApi();
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

  describe('LogicalDatabaseApi', function() {
    describe('deleteLogicalDatabase', function() {
      it('should call deleteLogicalDatabase successfully', function(done) {
        //uncomment below and update the code to test deleteLogicalDatabase
        //instance.deleteLogicalDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editLogicalDatabase', function() {
      it('should call editLogicalDatabase successfully', function(done) {
        //uncomment below and update the code to test editLogicalDatabase
        //instance.editLogicalDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editLogicalDatabaseCredentials', function() {
      it('should call editLogicalDatabaseCredentials successfully', function(done) {
        //uncomment below and update the code to test editLogicalDatabaseCredentials
        //instance.editLogicalDatabaseCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLogicalDatabase', function() {
      it('should call getLogicalDatabase successfully', function(done) {
        //uncomment below and update the code to test getLogicalDatabase
        //instance.getLogicalDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLogicalDatabaseCredentials', function() {
      it('should call getLogicalDatabaseCredentials successfully', function(done) {
        //uncomment below and update the code to test getLogicalDatabaseCredentials
        //instance.getLogicalDatabaseCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLogicalDatabaseApplication', function() {
      it('should call listLogicalDatabaseApplication successfully', function(done) {
        //uncomment below and update the code to test listLogicalDatabaseApplication
        //instance.listLogicalDatabaseApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLogicalDatabaseDatabase', function() {
      it('should call listLogicalDatabaseDatabase successfully', function(done) {
        //uncomment below and update the code to test listLogicalDatabaseDatabase
        //instance.listLogicalDatabaseDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
