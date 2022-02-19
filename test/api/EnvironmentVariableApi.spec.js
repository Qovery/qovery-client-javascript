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
    instance = new QoveryApi.EnvironmentVariableApi();
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

  describe('EnvironmentVariableApi', function() {
    describe('createEnvironmentEnvironmentVariable', function() {
      it('should call createEnvironmentEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test createEnvironmentEnvironmentVariable
        //instance.createEnvironmentEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEnvironmentEnvironmentVariableAlias', function() {
      it('should call createEnvironmentEnvironmentVariableAlias successfully', function(done) {
        //uncomment below and update the code to test createEnvironmentEnvironmentVariableAlias
        //instance.createEnvironmentEnvironmentVariableAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEnvironmentEnvironmentVariableOverride', function() {
      it('should call createEnvironmentEnvironmentVariableOverride successfully', function(done) {
        //uncomment below and update the code to test createEnvironmentEnvironmentVariableOverride
        //instance.createEnvironmentEnvironmentVariableOverride(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEnvironmentEnvironmentVariable', function() {
      it('should call deleteEnvironmentEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test deleteEnvironmentEnvironmentVariable
        //instance.deleteEnvironmentEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editEnvironmentEnvironmentVariable', function() {
      it('should call editEnvironmentEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test editEnvironmentEnvironmentVariable
        //instance.editEnvironmentEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEnvironmentEnvironmentVariable', function() {
      it('should call listEnvironmentEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test listEnvironmentEnvironmentVariable
        //instance.listEnvironmentEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
