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
    instance = new BetaQoveryApi.ApplicationRequest();
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

  describe('ApplicationRequest', function() {
    it('should create an instance of ApplicationRequest', function() {
      // uncomment below and update the code to test ApplicationRequest
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be.a(BetaQoveryApi.ApplicationRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property gitRepository (base name: "git_repository")', function() {
      // uncomment below and update the code to test the property gitRepository
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property buildMode (base name: "build_mode")', function() {
      // uncomment below and update the code to test the property buildMode
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property dockerfilePath (base name: "dockerfile_path")', function() {
      // uncomment below and update the code to test the property dockerfilePath
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property buildpackLanguage (base name: "buildpack_language")', function() {
      // uncomment below and update the code to test the property buildpackLanguage
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property minRunningInstances (base name: "min_running_instances")', function() {
      // uncomment below and update the code to test the property minRunningInstances
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningInstances (base name: "max_running_instances")', function() {
      // uncomment below and update the code to test the property maxRunningInstances
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property healthcheck (base name: "healthcheck")', function() {
      // uncomment below and update the code to test the property healthcheck
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property ports (base name: "ports")', function() {
      // uncomment below and update the code to test the property ports
      //var instance = new BetaQoveryApi.ApplicationRequest();
      //expect(instance).to.be();
    });

  });

}));
