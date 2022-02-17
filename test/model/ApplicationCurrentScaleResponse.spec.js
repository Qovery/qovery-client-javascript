/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
    factory(root.expect, root.QoveryApi);
  }
}(this, function(expect, QoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QoveryApi.ApplicationCurrentScaleResponse();
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

  describe('ApplicationCurrentScaleResponse', function() {
    it('should create an instance of ApplicationCurrentScaleResponse', function() {
      // uncomment below and update the code to test ApplicationCurrentScaleResponse
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be.a(QoveryApi.ApplicationCurrentScaleResponse);
    });

    it('should have the property min (base name: "min")', function() {
      // uncomment below and update the code to test the property min
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property max (base name: "max")', function() {
      // uncomment below and update the code to test the property max
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property running (base name: "running")', function() {
      // uncomment below and update the code to test the property running
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property runningInPercent (base name: "running_in_percent")', function() {
      // uncomment below and update the code to test the property runningInPercent
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property warningThresholdInPercent (base name: "warning_threshold_in_percent")', function() {
      // uncomment below and update the code to test the property warningThresholdInPercent
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property alertThresholdInPercent (base name: "alert_threshold_in_percent")', function() {
      // uncomment below and update the code to test the property alertThresholdInPercent
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.ApplicationCurrentScaleResponse();
      //expect(instance).to.be();
    });

  });

}));
