/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
    factory(root.expect, root.QoveryApi);
  }
}(this, function(expect, QoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QoveryApi.ServiceResponse();
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

  describe('ServiceResponse', function() {
    it('should create an instance of ServiceResponse', function() {
      // uncomment below and update the code to test ServiceResponse
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be.a(QoveryApi.ServiceResponse);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property deployedCommitId (base name: "deployed_commit_id")', function() {
      // uncomment below and update the code to test the property deployedCommitId
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedBy (base name: "last_updated_by")', function() {
      // uncomment below and update the code to test the property lastUpdatedBy
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property consumedResourcesInPercent (base name: "consumed_resources_in_percent")', function() {
      // uncomment below and update the code to test the property consumedResourcesInPercent
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceTypology (base name: "service_typology")', function() {
      // uncomment below and update the code to test the property serviceTypology
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceVersion (base name: "service_version")', function() {
      // uncomment below and update the code to test the property serviceVersion
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property toUpdate (base name: "to_update")', function() {
      // uncomment below and update the code to test the property toUpdate
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.ServiceResponse();
      //expect(instance).to.be();
    });

  });

}));
