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
    instance = new QoveryApi.ContainerRequestAllOf();
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

  describe('ContainerRequestAllOf', function() {
    it('should create an instance of ContainerRequestAllOf', function() {
      // uncomment below and update the code to test ContainerRequestAllOf
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be.a(QoveryApi.ContainerRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property registryId (base name: "registry_id")', function() {
      // uncomment below and update the code to test the property registryId
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property imageName (base name: "image_name")', function() {
      // uncomment below and update the code to test the property imageName
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property _arguments (base name: "arguments")', function() {
      // uncomment below and update the code to test the property _arguments
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property minRunningInstances (base name: "min_running_instances")', function() {
      // uncomment below and update the code to test the property minRunningInstances
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningInstances (base name: "max_running_instances")', function() {
      // uncomment below and update the code to test the property maxRunningInstances
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new QoveryApi.ContainerRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
