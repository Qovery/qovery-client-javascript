/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
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
    instance = new QoveryApi.EnvironmentMainCallsApi();
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

  describe('EnvironmentMainCallsApi', function() {
    describe('deleteEnvironment', function() {
      it('should call deleteEnvironment successfully', function(done) {
        //uncomment below and update the code to test deleteEnvironment
        //instance.deleteEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editEnvironment', function() {
      it('should call editEnvironment successfully', function(done) {
        //uncomment below and update the code to test editEnvironment
        //instance.editEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironment', function() {
      it('should call getEnvironment successfully', function(done) {
        //uncomment below and update the code to test getEnvironment
        //instance.getEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentStatus', function() {
      it('should call getEnvironmentStatus successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentStatus
        //instance.getEnvironmentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEnvironmentLinks', function() {
      it('should call listEnvironmentLinks successfully', function(done) {
        //uncomment below and update the code to test listEnvironmentLinks
        //instance.listEnvironmentLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
