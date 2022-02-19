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
    instance = new QoveryApi.ApplicationMetricsApi();
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

  describe('ApplicationMetricsApi', function() {
    describe('getApplicationCurrentInstance', function() {
      it('should call getApplicationCurrentInstance successfully', function(done) {
        //uncomment below and update the code to test getApplicationCurrentInstance
        //instance.getApplicationCurrentInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCurrentScale', function() {
      it('should call getApplicationCurrentScale successfully', function(done) {
        //uncomment below and update the code to test getApplicationCurrentScale
        //instance.getApplicationCurrentScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCurrentStorageDisk', function() {
      it('should call getApplicationCurrentStorageDisk successfully', function(done) {
        //uncomment below and update the code to test getApplicationCurrentStorageDisk
        //instance.getApplicationCurrentStorageDisk(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationMetricCpu', function() {
      it('should call getApplicationMetricCpu successfully', function(done) {
        //uncomment below and update the code to test getApplicationMetricCpu
        //instance.getApplicationMetricCpu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationMetricHealthCheck', function() {
      it('should call getApplicationMetricHealthCheck successfully', function(done) {
        //uncomment below and update the code to test getApplicationMetricHealthCheck
        //instance.getApplicationMetricHealthCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationMetricMemory', function() {
      it('should call getApplicationMetricMemory successfully', function(done) {
        //uncomment below and update the code to test getApplicationMetricMemory
        //instance.getApplicationMetricMemory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationMetricRestart', function() {
      it('should call getApplicationMetricRestart successfully', function(done) {
        //uncomment below and update the code to test getApplicationMetricRestart
        //instance.getApplicationMetricRestart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationMetricStorage', function() {
      it('should call getApplicationMetricStorage successfully', function(done) {
        //uncomment below and update the code to test getApplicationMetricStorage
        //instance.getApplicationMetricStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
