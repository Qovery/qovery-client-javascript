/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
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
    factory(root.expect, root.BetaQoveryApi);
  }
}(this, function(expect, BetaQoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BetaQoveryApi.ApplicationStorageRequestStorage();
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

  describe('ApplicationStorageRequestStorage', function() {
    it('should create an instance of ApplicationStorageRequestStorage', function() {
      // uncomment below and update the code to test ApplicationStorageRequestStorage
      //var instance = new BetaQoveryApi.ApplicationStorageRequestStorage();
      //expect(instance).to.be.a(BetaQoveryApi.ApplicationStorageRequestStorage);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new BetaQoveryApi.ApplicationStorageRequestStorage();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new BetaQoveryApi.ApplicationStorageRequestStorage();
      //expect(instance).to.be();
    });

    it('should have the property mountPoint (base name: "mount_point")', function() {
      // uncomment below and update the code to test the property mountPoint
      //var instance = new BetaQoveryApi.ApplicationStorageRequestStorage();
      //expect(instance).to.be();
    });

  });

}));
