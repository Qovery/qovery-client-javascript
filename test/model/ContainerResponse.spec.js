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
    instance = new QoveryApi.ContainerResponse();
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

  describe('ContainerResponse', function() {
    it('should create an instance of ContainerResponse', function() {
      // uncomment below and update the code to test ContainerResponse
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be.a(QoveryApi.ContainerResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property registry (base name: "registry")', function() {
      // uncomment below and update the code to test the property registry
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property maximumCpu (base name: "maximum_cpu")', function() {
      // uncomment below and update the code to test the property maximumCpu
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property maximumMemory (base name: "maximum_memory")', function() {
      // uncomment below and update the code to test the property maximumMemory
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property imageName (base name: "image_name")', function() {
      // uncomment below and update the code to test the property imageName
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property _arguments (base name: "arguments")', function() {
      // uncomment below and update the code to test the property _arguments
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property minRunningInstances (base name: "min_running_instances")', function() {
      // uncomment below and update the code to test the property minRunningInstances
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningInstances (base name: "max_running_instances")', function() {
      // uncomment below and update the code to test the property maxRunningInstances
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new QoveryApi.ContainerResponse();
      //expect(instance).to.be();
    });

  });

}));
