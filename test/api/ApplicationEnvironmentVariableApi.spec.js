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
    instance = new QoveryApi.ApplicationEnvironmentVariableApi();
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

  describe('ApplicationEnvironmentVariableApi', function() {
    describe('createApplicationEnvironmentVariable', function() {
      it('should call createApplicationEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test createApplicationEnvironmentVariable
        //instance.createApplicationEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplicationEnvironmentVariableAlias', function() {
      it('should call createApplicationEnvironmentVariableAlias successfully', function(done) {
        //uncomment below and update the code to test createApplicationEnvironmentVariableAlias
        //instance.createApplicationEnvironmentVariableAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplicationEnvironmentVariableOverride', function() {
      it('should call createApplicationEnvironmentVariableOverride successfully', function(done) {
        //uncomment below and update the code to test createApplicationEnvironmentVariableOverride
        //instance.createApplicationEnvironmentVariableOverride(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApplicationEnvironmentVariable', function() {
      it('should call deleteApplicationEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test deleteApplicationEnvironmentVariable
        //instance.deleteApplicationEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editApplicationEnvironmentVariable', function() {
      it('should call editApplicationEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test editApplicationEnvironmentVariable
        //instance.editApplicationEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importEnvironmentVariable', function() {
      it('should call importEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test importEnvironmentVariable
        //instance.importEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicationEnvironmentVariable', function() {
      it('should call listApplicationEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test listApplicationEnvironmentVariable
        //instance.listApplicationEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
