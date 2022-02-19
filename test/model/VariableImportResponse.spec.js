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
    instance = new QoveryApi.VariableImportResponse();
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

  describe('VariableImportResponse', function() {
    it('should create an instance of VariableImportResponse', function() {
      // uncomment below and update the code to test VariableImportResponse
      //var instance = new QoveryApi.VariableImportResponse();
      //expect(instance).to.be.a(QoveryApi.VariableImportResponse);
    });

    it('should have the property totalVariablesToImport (base name: "total_variables_to_import")', function() {
      // uncomment below and update the code to test the property totalVariablesToImport
      //var instance = new QoveryApi.VariableImportResponse();
      //expect(instance).to.be();
    });

    it('should have the property successfulImportedVariables (base name: "successful_imported_variables")', function() {
      // uncomment below and update the code to test the property successfulImportedVariables
      //var instance = new QoveryApi.VariableImportResponse();
      //expect(instance).to.be();
    });

  });

}));
