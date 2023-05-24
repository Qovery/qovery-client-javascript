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
    instance = new QoveryApi.JobResponse();
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

  describe('JobResponse', function() {
    it('should create an instance of JobResponse', function() {
      // uncomment below and update the code to test JobResponse
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be.a(QoveryApi.JobResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property registry (base name: "registry")', function() {
      // uncomment below and update the code to test the property registry
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property maximumCpu (base name: "maximum_cpu")', function() {
      // uncomment below and update the code to test the property maximumCpu
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property maximumMemory (base name: "maximum_memory")', function() {
      // uncomment below and update the code to test the property maximumMemory
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxNbRestart (base name: "max_nb_restart")', function() {
      // uncomment below and update the code to test the property maxNbRestart
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDurationSeconds (base name: "max_duration_seconds")', function() {
      // uncomment below and update the code to test the property maxDurationSeconds
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property autoPreview (base name: "auto_preview")', function() {
      // uncomment below and update the code to test the property autoPreview
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property healthchecks (base name: "healthchecks")', function() {
      // uncomment below and update the code to test the property healthchecks
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new QoveryApi.JobResponse();
      //expect(instance).to.be();
    });

  });

}));
