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
    instance = new QoveryApi.ApplicationAdvancedSettings();
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

  describe('ApplicationAdvancedSettings', function() {
    it('should create an instance of ApplicationAdvancedSettings', function() {
      // uncomment below and update the code to test ApplicationAdvancedSettings
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be.a(QoveryApi.ApplicationAdvancedSettings);
    });

    it('should have the property deploymentCustomDomainCheckEnabled (base name: "deployment.custom_domain_check_enabled")', function() {
      // uncomment below and update the code to test the property deploymentCustomDomainCheckEnabled
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentTerminationGracePeriodSeconds (base name: "deployment.termination_grace_period_seconds")', function() {
      // uncomment below and update the code to test the property deploymentTerminationGracePeriodSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentAffinityNodeRequired (base name: "deployment.affinity.node.required")', function() {
      // uncomment below and update the code to test the property deploymentAffinityNodeRequired
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentAntiaffinityPod (base name: "deployment.antiaffinity.pod")', function() {
      // uncomment below and update the code to test the property deploymentAntiaffinityPod
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentUpdateStrategyType (base name: "deployment.update_strategy.type")', function() {
      // uncomment below and update the code to test the property deploymentUpdateStrategyType
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentUpdateStrategyRollingUpdateMaxUnavailablePercent (base name: "deployment.update_strategy.rolling_update.max_unavailable_percent")', function() {
      // uncomment below and update the code to test the property deploymentUpdateStrategyRollingUpdateMaxUnavailablePercent
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentUpdateStrategyRollingUpdateMaxSurgePercent (base name: "deployment.update_strategy.rolling_update.max_surge_percent")', function() {
      // uncomment below and update the code to test the property deploymentUpdateStrategyRollingUpdateMaxSurgePercent
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property buildTimeoutMaxSec (base name: "build.timeout_max_sec")', function() {
      // uncomment below and update the code to test the property buildTimeoutMaxSec
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property buildCpuMaxInMilli (base name: "build.cpu_max_in_milli")', function() {
      // uncomment below and update the code to test the property buildCpuMaxInMilli
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property buildRamMaxInGib (base name: "build.ram_max_in_gib")', function() {
      // uncomment below and update the code to test the property buildRamMaxInGib
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyBodySizeMb (base name: "network.ingress.proxy_body_size_mb")', function() {
      // uncomment below and update the code to test the property networkIngressProxyBodySizeMb
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressEnableCors (base name: "network.ingress.enable_cors")', function() {
      // uncomment below and update the code to test the property networkIngressEnableCors
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressCorsAllowOrigin (base name: "network.ingress.cors_allow_origin")', function() {
      // uncomment below and update the code to test the property networkIngressCorsAllowOrigin
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressCorsAllowMethods (base name: "network.ingress.cors_allow_methods")', function() {
      // uncomment below and update the code to test the property networkIngressCorsAllowMethods
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressCorsAllowHeaders (base name: "network.ingress.cors_allow_headers")', function() {
      // uncomment below and update the code to test the property networkIngressCorsAllowHeaders
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyBufferSizeKb (base name: "network.ingress.proxy_buffer_size_kb")', function() {
      // uncomment below and update the code to test the property networkIngressProxyBufferSizeKb
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressKeepaliveTimeSeconds (base name: "network.ingress.keepalive_time_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressKeepaliveTimeSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressKeepaliveTimeoutSeconds (base name: "network.ingress.keepalive_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressKeepaliveTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressSendTimeoutSeconds (base name: "network.ingress.send_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressSendTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyConnectTimeoutSeconds (base name: "network.ingress.proxy_connect_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressProxyConnectTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxySendTimeoutSeconds (base name: "network.ingress.proxy_send_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressProxySendTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyReadTimeoutSeconds (base name: "network.ingress.proxy_read_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressProxyReadTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyBuffering (base name: "network.ingress.proxy_buffering")', function() {
      // uncomment below and update the code to test the property networkIngressProxyBuffering
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressProxyRequestBuffering (base name: "network.ingress.proxy_request_buffering")', function() {
      // uncomment below and update the code to test the property networkIngressProxyRequestBuffering
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressWhitelistSourceRange (base name: "network.ingress.whitelist_source_range")', function() {
      // uncomment below and update the code to test the property networkIngressWhitelistSourceRange
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressDenylistSourceRange (base name: "network.ingress.denylist_source_range")', function() {
      // uncomment below and update the code to test the property networkIngressDenylistSourceRange
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressBasicAuthEnvVar (base name: "network.ingress.basic_auth_env_var")', function() {
      // uncomment below and update the code to test the property networkIngressBasicAuthEnvVar
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressEnableStickySession (base name: "network.ingress.enable_sticky_session")', function() {
      // uncomment below and update the code to test the property networkIngressEnableStickySession
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressGrpcSendTimeoutSeconds (base name: "network.ingress.grpc_send_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressGrpcSendTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressGrpcReadTimeoutSeconds (base name: "network.ingress.grpc_read_timeout_seconds")', function() {
      // uncomment below and update the code to test the property networkIngressGrpcReadTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property networkIngressExtraHeaders (base name: "network.ingress.extra_headers")', function() {
      // uncomment below and update the code to test the property networkIngressExtraHeaders
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property hpaCpuAverageUtilizationPercent (base name: "hpa.cpu.average_utilization_percent")', function() {
      // uncomment below and update the code to test the property hpaCpuAverageUtilizationPercent
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property securityServiceAccountName (base name: "security.service_account_name")', function() {
      // uncomment below and update the code to test the property securityServiceAccountName
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property securityReadOnlyRootFilesystem (base name: "security.read_only_root_filesystem")', function() {
      // uncomment below and update the code to test the property securityReadOnlyRootFilesystem
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

  });

}));
