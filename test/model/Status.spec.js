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
    instance = new QoveryApi.Status();
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

  describe('Status', function() {
    it('should create an instance of Status', function() {
      // uncomment below and update the code to test Status
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be.a(QoveryApi.Status);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

    it('should have the property serviceDeploymentStatus (base name: "service_deployment_status")', function() {
      // uncomment below and update the code to test the property serviceDeploymentStatus
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

    it('should have the property lastDeploymentDate (base name: "last_deployment_date")', function() {
      // uncomment below and update the code to test the property lastDeploymentDate
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

    it('should have the property isPartLastDeployment (base name: "is_part_last_deployment")', function() {
      // uncomment below and update the code to test the property isPartLastDeployment
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instance = new QoveryApi.Status();
      //expect(instance).to.be();
    });

  });

}));
