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
    instance = new QoveryApi.ClusterAdvancedSettings();
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

  describe('ClusterAdvancedSettings', function() {
    it('should create an instance of ClusterAdvancedSettings', function() {
      // uncomment below and update the code to test ClusterAdvancedSettings
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be.a(QoveryApi.ClusterAdvancedSettings);
    });

    it('should have the property lokiLogRetentionInWeek (base name: "loki.log_retention_in_week")', function() {
      // uncomment below and update the code to test the property lokiLogRetentionInWeek
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property awsVpcEnableS3FlowLogs (base name: "aws.vpc.enable_s3_flow_logs")', function() {
      // uncomment below and update the code to test the property awsVpcEnableS3FlowLogs
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property registryImageRetentionTime (base name: "registry.image_retention_time")', function() {
      // uncomment below and update the code to test the property registryImageRetentionTime
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property cloudProviderContainerRegistryTags (base name: "cloud_provider_container_registry_tags")', function() {
      // uncomment below and update the code to test the property cloudProviderContainerRegistryTags
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerSize (base name: "load_balancer.size")', function() {
      // uncomment below and update the code to test the property loadBalancerSize
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property plecoResourcesTtl (base name: "pleco.resources_ttl")', function() {
      // uncomment below and update the code to test the property plecoResourcesTtl
      //var instance = new QoveryApi.ClusterAdvancedSettings();
      //expect(instance).to.be();
    });

  });

}));
