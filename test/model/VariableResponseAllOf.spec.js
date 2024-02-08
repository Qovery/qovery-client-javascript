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
    instance = new QoveryApi.VariableResponseAllOf();
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

  describe('VariableResponseAllOf', function() {
    it('should create an instance of VariableResponseAllOf', function() {
      // uncomment below and update the code to test VariableResponseAllOf
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be.a(QoveryApi.VariableResponseAllOf);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property mountPath (base name: "mount_path")', function() {
      // uncomment below and update the code to test the property mountPath
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property overriddenVariable (base name: "overridden_variable")', function() {
      // uncomment below and update the code to test the property overriddenVariable
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property aliasedVariable (base name: "aliased_variable")', function() {
      // uncomment below and update the code to test the property aliasedVariable
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property variableType (base name: "variable_type")', function() {
      // uncomment below and update the code to test the property variableType
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property serviceName (base name: "service_name")', function() {
      // uncomment below and update the code to test the property serviceName
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "service_type")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property ownedBy (base name: "owned_by")', function() {
      // uncomment below and update the code to test the property ownedBy
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property isSecret (base name: "is_secret")', function() {
      // uncomment below and update the code to test the property isSecret
      //var instance = new QoveryApi.VariableResponseAllOf();
      //expect(instance).to.be();
    });

  });

}));
