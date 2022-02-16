/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
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
    factory(root.expect, root.BetaQoveryApi);
  }
}(this, function(expect, BetaQoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
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

  describe('EnvironmentDatabasesCurrentMetricResponseMemory', function() {
    it('should create an instance of EnvironmentDatabasesCurrentMetricResponseMemory', function() {
      // uncomment below and update the code to test EnvironmentDatabasesCurrentMetricResponseMemory
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be.a(BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory);
    });

    it('should have the property requestedInMb (base name: "requested_in_mb")', function() {
      // uncomment below and update the code to test the property requestedInMb
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

    it('should have the property consumedInMb (base name: "consumed_in_mb")', function() {
      // uncomment below and update the code to test the property consumedInMb
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

    it('should have the property consumedInPercent (base name: "consumed_in_percent")', function() {
      // uncomment below and update the code to test the property consumedInPercent
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

    it('should have the property warningThresholdInPercent (base name: "warning_threshold_in_percent")', function() {
      // uncomment below and update the code to test the property warningThresholdInPercent
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

    it('should have the property alertThresholdInPercent (base name: "alert_threshold_in_percent")', function() {
      // uncomment below and update the code to test the property alertThresholdInPercent
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new BetaQoveryApi.EnvironmentDatabasesCurrentMetricResponseMemory();
      //expect(instance).to.be();
    });

  });

}));
