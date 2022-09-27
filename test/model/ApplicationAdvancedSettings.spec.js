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

    it('should have the property deploymentDelayStartTimeSec (base name: "deployment.delay_start_time_sec")', function() {
      // uncomment below and update the code to test the property deploymentDelayStartTimeSec
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property deploymentCustomDomainCheckEnabled (base name: "deployment.custom_domain_check_enabled")', function() {
      // uncomment below and update the code to test the property deploymentCustomDomainCheckEnabled
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property buildTimeoutMaxSec (base name: "build.timeout_max_sec")', function() {
      // uncomment below and update the code to test the property buildTimeoutMaxSec
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

    it('should have the property networkIngressWhitelistSourceRange (base name: "network.ingress.whitelist_source_range")', function() {
      // uncomment below and update the code to test the property networkIngressWhitelistSourceRange
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeType (base name: "readiness_probe.type")', function() {
      // uncomment below and update the code to test the property readinessProbeType
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeHttpGetPath (base name: "readiness_probe.http_get.path")', function() {
      // uncomment below and update the code to test the property readinessProbeHttpGetPath
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeInitialDelaySeconds (base name: "readiness_probe.initial_delay_seconds")', function() {
      // uncomment below and update the code to test the property readinessProbeInitialDelaySeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbePeriodSeconds (base name: "readiness_probe.period_seconds")', function() {
      // uncomment below and update the code to test the property readinessProbePeriodSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeTimeoutSeconds (base name: "readiness_probe.timeout_seconds")', function() {
      // uncomment below and update the code to test the property readinessProbeTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeSuccessThreshold (base name: "readiness_probe.success_threshold")', function() {
      // uncomment below and update the code to test the property readinessProbeSuccessThreshold
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbeFailureThreshold (base name: "readiness_probe.failure_threshold")', function() {
      // uncomment below and update the code to test the property readinessProbeFailureThreshold
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeType (base name: "liveness_probe.type")', function() {
      // uncomment below and update the code to test the property livenessProbeType
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeHttpGetPath (base name: "liveness_probe.http_get.path")', function() {
      // uncomment below and update the code to test the property livenessProbeHttpGetPath
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeInitialDelaySeconds (base name: "liveness_probe.initial_delay_seconds")', function() {
      // uncomment below and update the code to test the property livenessProbeInitialDelaySeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbePeriodSeconds (base name: "liveness_probe.period_seconds")', function() {
      // uncomment below and update the code to test the property livenessProbePeriodSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeTimeoutSeconds (base name: "liveness_probe.timeout_seconds")', function() {
      // uncomment below and update the code to test the property livenessProbeTimeoutSeconds
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeSuccessThreshold (base name: "liveness_probe.success_threshold")', function() {
      // uncomment below and update the code to test the property livenessProbeSuccessThreshold
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbeFailureThreshold (base name: "liveness_probe.failure_threshold")', function() {
      // uncomment below and update the code to test the property livenessProbeFailureThreshold
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

    it('should have the property hpaCpuAverageUtilizationPercent (base name: "hpa.cpu.average_utilization_percent")', function() {
      // uncomment below and update the code to test the property hpaCpuAverageUtilizationPercent
      //var instance = new QoveryApi.ApplicationAdvancedSettings();
      //expect(instance).to.be();
    });

  });

}));
