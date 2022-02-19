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
    instance = new QoveryApi.DatabasesApi();
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

  describe('DatabasesApi', function() {
    describe('createDatabase', function() {
      it('should call createDatabase successfully', function(done) {
        //uncomment below and update the code to test createDatabase
        //instance.createDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentDatabaseStatus', function() {
      it('should call getEnvironmentDatabaseStatus successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentDatabaseStatus
        //instance.getEnvironmentDatabaseStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDatabase', function() {
      it('should call listDatabase successfully', function(done) {
        //uncomment below and update the code to test listDatabase
        //instance.listDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEnvironmentDatabaseConfig', function() {
      it('should call listEnvironmentDatabaseConfig successfully', function(done) {
        //uncomment below and update the code to test listEnvironmentDatabaseConfig
        //instance.listEnvironmentDatabaseConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEnvironmentDatabaseCurrentMetric', function() {
      it('should call listEnvironmentDatabaseCurrentMetric successfully', function(done) {
        //uncomment below and update the code to test listEnvironmentDatabaseCurrentMetric
        //instance.listEnvironmentDatabaseCurrentMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
