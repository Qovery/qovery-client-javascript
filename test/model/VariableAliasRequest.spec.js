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
    instance = new QoveryApi.VariableAliasRequest();
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

  describe('VariableAliasRequest', function() {
    it('should create an instance of VariableAliasRequest', function() {
      // uncomment below and update the code to test VariableAliasRequest
      //var instance = new QoveryApi.VariableAliasRequest();
      //expect(instance).to.be.a(QoveryApi.VariableAliasRequest);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new QoveryApi.VariableAliasRequest();
      //expect(instance).to.be();
    });

    it('should have the property aliasScope (base name: "alias_scope")', function() {
      // uncomment below and update the code to test the property aliasScope
      //var instance = new QoveryApi.VariableAliasRequest();
      //expect(instance).to.be();
    });

    it('should have the property aliasParentId (base name: "alias_parent_id")', function() {
      // uncomment below and update the code to test the property aliasParentId
      //var instance = new QoveryApi.VariableAliasRequest();
      //expect(instance).to.be();
    });

  });

}));
