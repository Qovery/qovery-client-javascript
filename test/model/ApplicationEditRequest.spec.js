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
    instance = new QoveryApi.ApplicationEditRequest();
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

  describe('ApplicationEditRequest', function() {
    it('should create an instance of ApplicationEditRequest', function() {
      // uncomment below and update the code to test ApplicationEditRequest
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be.a(QoveryApi.ApplicationEditRequest);
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property gitRepository (base name: "git_repository")', function() {
      // uncomment below and update the code to test the property gitRepository
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property buildMode (base name: "build_mode")', function() {
      // uncomment below and update the code to test the property buildMode
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property dockerfilePath (base name: "dockerfile_path")', function() {
      // uncomment below and update the code to test the property dockerfilePath
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property buildpackLanguage (base name: "buildpack_language")', function() {
      // uncomment below and update the code to test the property buildpackLanguage
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property minRunningInstances (base name: "min_running_instances")', function() {
      // uncomment below and update the code to test the property minRunningInstances
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningInstances (base name: "max_running_instances")', function() {
      // uncomment below and update the code to test the property maxRunningInstances
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property healthcheck (base name: "healthcheck")', function() {
      // uncomment below and update the code to test the property healthcheck
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property stickySession (base name: "sticky_session")', function() {
      // uncomment below and update the code to test the property stickySession
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property ports (base name: "ports")', function() {
      // uncomment below and update the code to test the property ports
      //var instance = new QoveryApi.ApplicationEditRequest();
      //expect(instance).to.be();
    });

  });

}));
