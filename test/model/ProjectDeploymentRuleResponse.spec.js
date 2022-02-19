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
    instance = new QoveryApi.ProjectDeploymentRuleResponse();
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

  describe('ProjectDeploymentRuleResponse', function() {
    it('should create an instance of ProjectDeploymentRuleResponse', function() {
      // uncomment below and update the code to test ProjectDeploymentRuleResponse
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be.a(QoveryApi.ProjectDeploymentRuleResponse);
    });

    it('should have the property priorityIndex (base name: "priority_index")', function() {
      // uncomment below and update the code to test the property priorityIndex
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property clusterId (base name: "cluster_id")', function() {
      // uncomment below and update the code to test the property clusterId
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property autoDeploy (base name: "auto_deploy")', function() {
      // uncomment below and update the code to test the property autoDeploy
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property autoStop (base name: "auto_stop")', function() {
      // uncomment below and update the code to test the property autoStop
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "start_time")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property stopTime (base name: "stop_time")', function() {
      // uncomment below and update the code to test the property stopTime
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property weekdays (base name: "weekdays")', function() {
      // uncomment below and update the code to test the property weekdays
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

    it('should have the property wildcard (base name: "wildcard")', function() {
      // uncomment below and update the code to test the property wildcard
      //var instance = new QoveryApi.ProjectDeploymentRuleResponse();
      //expect(instance).to.be();
    });

  });

}));
