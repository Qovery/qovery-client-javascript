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
    instance = new QoveryApi.ProjectEnvironmentVariableApi();
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

  describe('ProjectEnvironmentVariableApi', function() {
    describe('createProjectEnvironmentVariable', function() {
      it('should call createProjectEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test createProjectEnvironmentVariable
        //instance.createProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProjectEnvironmentVariableAlias', function() {
      it('should call createProjectEnvironmentVariableAlias successfully', function(done) {
        //uncomment below and update the code to test createProjectEnvironmentVariableAlias
        //instance.createProjectEnvironmentVariableAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProjectEnvironmentVariableOverride', function() {
      it('should call createProjectEnvironmentVariableOverride successfully', function(done) {
        //uncomment below and update the code to test createProjectEnvironmentVariableOverride
        //instance.createProjectEnvironmentVariableOverride(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProjectEnvironmentVariable', function() {
      it('should call deleteProjectEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test deleteProjectEnvironmentVariable
        //instance.deleteProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editProjectEnvironmentVariable', function() {
      it('should call editProjectEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test editProjectEnvironmentVariable
        //instance.editProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProjectEnvironmentVariable', function() {
      it('should call listProjectEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test listProjectEnvironmentVariable
        //instance.listProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
