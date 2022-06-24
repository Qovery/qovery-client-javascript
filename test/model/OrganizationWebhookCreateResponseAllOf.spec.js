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
    instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
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

  describe('OrganizationWebhookCreateResponseAllOf', function() {
    it('should create an instance of OrganizationWebhookCreateResponseAllOf', function() {
      // uncomment below and update the code to test OrganizationWebhookCreateResponseAllOf
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be.a(QoveryApi.OrganizationWebhookCreateResponseAllOf);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property targetUrl (base name: "target_url")', function() {
      // uncomment below and update the code to test the property targetUrl
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property targetSecretSet (base name: "target_secret_set")', function() {
      // uncomment below and update the code to test the property targetSecretSet
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property projectNamesFilter (base name: "project_names_filter")', function() {
      // uncomment below and update the code to test the property projectNamesFilter
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property environmentTypesFilter (base name: "environment_types_filter")', function() {
      // uncomment below and update the code to test the property environmentTypesFilter
      //var instance = new QoveryApi.OrganizationWebhookCreateResponseAllOf();
      //expect(instance).to.be();
    });

  });

}));