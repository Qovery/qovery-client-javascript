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
    instance = new QoveryApi.EnvironmentActionsApi();
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

  describe('EnvironmentActionsApi', function() {
    describe('cancelEnvironmentDeployment', function() {
      it('should call cancelEnvironmentDeployment successfully', function(done) {
        //uncomment below and update the code to test cancelEnvironmentDeployment
        //instance.cancelEnvironmentDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneEnvironment', function() {
      it('should call cloneEnvironment successfully', function(done) {
        //uncomment below and update the code to test cloneEnvironment
        //instance.cloneEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployAllServices', function() {
      it('should call deployAllServices successfully', function(done) {
        //uncomment below and update the code to test deployAllServices
        //instance.deployAllServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployEnvironment', function() {
      it('should call deployEnvironment successfully', function(done) {
        //uncomment below and update the code to test deployEnvironment
        //instance.deployEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restartEnvironment', function() {
      it('should call restartEnvironment successfully', function(done) {
        //uncomment below and update the code to test restartEnvironment
        //instance.restartEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopEnvironment', function() {
      it('should call stopEnvironment successfully', function(done) {
        //uncomment below and update the code to test stopEnvironment
        //instance.stopEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
