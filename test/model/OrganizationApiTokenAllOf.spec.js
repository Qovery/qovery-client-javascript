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
    instance = new QoveryApi.OrganizationApiTokenAllOf();
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

  describe('OrganizationApiTokenAllOf', function() {
    it('should create an instance of OrganizationApiTokenAllOf', function() {
      // uncomment below and update the code to test OrganizationApiTokenAllOf
      //var instance = new QoveryApi.OrganizationApiTokenAllOf();
      //expect(instance).to.be.a(QoveryApi.OrganizationApiTokenAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.OrganizationApiTokenAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.OrganizationApiTokenAllOf();
      //expect(instance).to.be();
    });

    it('should have the property roleName (base name: "role_name")', function() {
      // uncomment below and update the code to test the property roleName
      //var instance = new QoveryApi.OrganizationApiTokenAllOf();
      //expect(instance).to.be();
    });

    it('should have the property roleId (base name: "role_id")', function() {
      // uncomment below and update the code to test the property roleId
      //var instance = new QoveryApi.OrganizationApiTokenAllOf();
      //expect(instance).to.be();
    });

  });

}));
