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
    instance = new QoveryApi.OrganizationEditRequest();
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

  describe('OrganizationEditRequest', function() {
    it('should create an instance of OrganizationEditRequest', function() {
      // uncomment below and update the code to test OrganizationEditRequest
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be.a(QoveryApi.OrganizationEditRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property websiteUrl (base name: "website_url")', function() {
      // uncomment below and update the code to test the property websiteUrl
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property repository (base name: "repository")', function() {
      // uncomment below and update the code to test the property repository
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logo_url")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property iconUrl (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property iconUrl
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

    it('should have the property adminEmails (base name: "admin_emails")', function() {
      // uncomment below and update the code to test the property adminEmails
      //var instance = new QoveryApi.OrganizationEditRequest();
      //expect(instance).to.be();
    });

  });

}));
