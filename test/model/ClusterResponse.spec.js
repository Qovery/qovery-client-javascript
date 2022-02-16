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
    instance = new BetaQoveryApi.ClusterResponse();
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

  describe('ClusterResponse', function() {
    it('should create an instance of ClusterResponse', function() {
      // uncomment below and update the code to test ClusterResponse
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be.a(BetaQoveryApi.ClusterResponse);
    });

    it('should have the property estimatedCloudProviderCost (base name: "estimated_cloud_provider_cost")', function() {
      // uncomment below and update the code to test the property estimatedCloudProviderCost
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasAccess (base name: "has_access")', function() {
      // uncomment below and update the code to test the property hasAccess
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property cloudProvider (base name: "cloud_provider")', function() {
      // uncomment below and update the code to test the property cloudProvider
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property autoUpdate (base name: "auto_update")', function() {
      // uncomment below and update the code to test the property autoUpdate
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property minRunningNodes (base name: "min_running_nodes")', function() {
      // uncomment below and update the code to test the property minRunningNodes
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningNodes (base name: "max_running_nodes")', function() {
      // uncomment below and update the code to test the property maxRunningNodes
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property costPerMonthInCents (base name: "cost_per_month_in_cents")', function() {
      // uncomment below and update the code to test the property costPerMonthInCents
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property costPerMonth (base name: "cost_per_month")', function() {
      // uncomment below and update the code to test the property costPerMonth
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "value_type")', function() {
      // uncomment below and update the code to test the property valueType
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property isValueUpdatable (base name: "is_value_updatable")', function() {
      // uncomment below and update the code to test the property isValueUpdatable
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

    it('should have the property acceptedValues (base name: "accepted_values")', function() {
      // uncomment below and update the code to test the property acceptedValues
      //var instance = new BetaQoveryApi.ClusterResponse();
      //expect(instance).to.be();
    });

  });

}));
