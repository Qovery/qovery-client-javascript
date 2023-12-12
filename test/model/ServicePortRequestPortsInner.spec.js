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
    instance = new QoveryApi.ServicePortRequestPortsInner();
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

  describe('ServicePortRequestPortsInner', function() {
    it('should create an instance of ServicePortRequestPortsInner', function() {
      // uncomment below and update the code to test ServicePortRequestPortsInner
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be.a(QoveryApi.ServicePortRequestPortsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property internalPort (base name: "internal_port")', function() {
      // uncomment below and update the code to test the property internalPort
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property externalPort (base name: "external_port")', function() {
      // uncomment below and update the code to test the property externalPort
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property publiclyAccessible (base name: "publicly_accessible")', function() {
      // uncomment below and update the code to test the property publiclyAccessible
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new QoveryApi.ServicePortRequestPortsInner();
      //expect(instance).to.be();
    });

  });

}));
