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
    instance = new QoveryApi.VariableResponse();
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

  describe('VariableResponse', function() {
    it('should create an instance of VariableResponse', function() {
      // uncomment below and update the code to test VariableResponse
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be.a(QoveryApi.VariableResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property overriddenVariable (base name: "overridden_variable")', function() {
      // uncomment below and update the code to test the property overriddenVariable
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property aliasedVariable (base name: "aliased_variable")', function() {
      // uncomment below and update the code to test the property aliasedVariable
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property overriddenSecret (base name: "overridden_secret")', function() {
      // uncomment below and update the code to test the property overriddenSecret
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property aliasedSecret (base name: "aliased_secret")', function() {
      // uncomment below and update the code to test the property aliasedSecret
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property variableType (base name: "variable_type")', function() {
      // uncomment below and update the code to test the property variableType
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceName (base name: "service_name")', function() {
      // uncomment below and update the code to test the property serviceName
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "service_type")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

    it('should have the property ownedBy (base name: "owned_by")', function() {
      // uncomment below and update the code to test the property ownedBy
      //var instance = new QoveryApi.VariableResponse();
      //expect(instance).to.be();
    });

  });

}));
