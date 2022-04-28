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
    instance = new QoveryApi.ClusterAllOf();
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

  describe('ClusterAllOf', function() {
    it('should create an instance of ClusterAllOf', function() {
      // uncomment below and update the code to test ClusterAllOf
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be.a(QoveryApi.ClusterAllOf);
    });

    it('should have the property estimatedCloudProviderCost (base name: "estimated_cloud_provider_cost")', function() {
      // uncomment below and update the code to test the property estimatedCloudProviderCost
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

    it('should have the property hasAccess (base name: "has_access")', function() {
      // uncomment below and update the code to test the property hasAccess
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new QoveryApi.ClusterAllOf();
      //expect(instance).to.be();
    });

  });

}));
