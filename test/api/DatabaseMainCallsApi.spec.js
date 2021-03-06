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
    instance = new QoveryApi.DatabaseMainCallsApi();
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

  describe('DatabaseMainCallsApi', function() {
    describe('deleteDatabase', function() {
      it('should call deleteDatabase successfully', function(done) {
        //uncomment below and update the code to test deleteDatabase
        //instance.deleteDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDatabase', function() {
      it('should call editDatabase successfully', function(done) {
        //uncomment below and update the code to test editDatabase
        //instance.editDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDatabaseCredentials', function() {
      it('should call editDatabaseCredentials successfully', function(done) {
        //uncomment below and update the code to test editDatabaseCredentials
        //instance.editDatabaseCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatabase', function() {
      it('should call getDatabase successfully', function(done) {
        //uncomment below and update the code to test getDatabase
        //instance.getDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatabaseMasterCredentials', function() {
      it('should call getDatabaseMasterCredentials successfully', function(done) {
        //uncomment below and update the code to test getDatabaseMasterCredentials
        //instance.getDatabaseMasterCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatabaseStatus', function() {
      it('should call getDatabaseStatus successfully', function(done) {
        //uncomment below and update the code to test getDatabaseStatus
        //instance.getDatabaseStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDatabaseVersion', function() {
      it('should call listDatabaseVersion successfully', function(done) {
        //uncomment below and update the code to test listDatabaseVersion
        //instance.listDatabaseVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
