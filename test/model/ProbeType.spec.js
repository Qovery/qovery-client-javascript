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
    instance = new QoveryApi.ProbeType();
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

  describe('ProbeType', function() {
    it('should create an instance of ProbeType', function() {
      // uncomment below and update the code to test ProbeType
      //var instance = new QoveryApi.ProbeType();
      //expect(instance).to.be.a(QoveryApi.ProbeType);
    });

    it('should have the property tcp (base name: "tcp")', function() {
      // uncomment below and update the code to test the property tcp
      //var instance = new QoveryApi.ProbeType();
      //expect(instance).to.be();
    });

    it('should have the property http (base name: "http")', function() {
      // uncomment below and update the code to test the property http
      //var instance = new QoveryApi.ProbeType();
      //expect(instance).to.be();
    });

    it('should have the property exec (base name: "exec")', function() {
      // uncomment below and update the code to test the property exec
      //var instance = new QoveryApi.ProbeType();
      //expect(instance).to.be();
    });

    it('should have the property grpc (base name: "grpc")', function() {
      // uncomment below and update the code to test the property grpc
      //var instance = new QoveryApi.ProbeType();
      //expect(instance).to.be();
    });

  });

}));
