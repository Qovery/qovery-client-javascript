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
    instance = new QoveryApi.ApplicationsApi();
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

  describe('ApplicationsApi', function() {
    describe('createApplication', function() {
      it('should call createApplication successfully', function(done) {
        //uncomment below and update the code to test createApplication
        //instance.createApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentApplicationCurrentInstance', function() {
      it('should call getEnvironmentApplicationCurrentInstance successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentApplicationCurrentInstance
        //instance.getEnvironmentApplicationCurrentInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentApplicationCurrentScale', function() {
      it('should call getEnvironmentApplicationCurrentScale successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentApplicationCurrentScale
        //instance.getEnvironmentApplicationCurrentScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentApplicationCurrentStorage', function() {
      it('should call getEnvironmentApplicationCurrentStorage successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentApplicationCurrentStorage
        //instance.getEnvironmentApplicationCurrentStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentApplicationStatus', function() {
      it('should call getEnvironmentApplicationStatus successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentApplicationStatus
        //instance.getEnvironmentApplicationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironmentApplicationSupportedLanguages', function() {
      it('should call getEnvironmentApplicationSupportedLanguages successfully', function(done) {
        //uncomment below and update the code to test getEnvironmentApplicationSupportedLanguages
        //instance.getEnvironmentApplicationSupportedLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplication', function() {
      it('should call listApplication successfully', function(done) {
        //uncomment below and update the code to test listApplication
        //instance.listApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
