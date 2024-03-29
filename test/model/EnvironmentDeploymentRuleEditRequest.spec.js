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
    instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
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

  describe('EnvironmentDeploymentRuleEditRequest', function() {
    it('should create an instance of EnvironmentDeploymentRuleEditRequest', function() {
      // uncomment below and update the code to test EnvironmentDeploymentRuleEditRequest
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be.a(QoveryApi.EnvironmentDeploymentRuleEditRequest);
    });

    it('should have the property onDemandPreview (base name: "on_demand_preview")', function() {
      // uncomment below and update the code to test the property onDemandPreview
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property autoStop (base name: "auto_stop")', function() {
      // uncomment below and update the code to test the property autoStop
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "start_time")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property stopTime (base name: "stop_time")', function() {
      // uncomment below and update the code to test the property stopTime
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property weekdays (base name: "weekdays")', function() {
      // uncomment below and update the code to test the property weekdays
      //var instance = new QoveryApi.EnvironmentDeploymentRuleEditRequest();
      //expect(instance).to.be();
    });

  });

}));
