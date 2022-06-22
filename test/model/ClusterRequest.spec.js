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
    instance = new QoveryApi.ClusterRequest();
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

  describe('ClusterRequest', function() {
    it('should create an instance of ClusterRequest', function() {
      // uncomment below and update the code to test ClusterRequest
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be.a(QoveryApi.ClusterRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property cloudProvider (base name: "cloud_provider")', function() {
      // uncomment below and update the code to test the property cloudProvider
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property minRunningNodes (base name: "min_running_nodes")', function() {
      // uncomment below and update the code to test the property minRunningNodes
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxRunningNodes (base name: "max_running_nodes")', function() {
      // uncomment below and update the code to test the property maxRunningNodes
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property diskSize (base name: "disk_size")', function() {
      // uncomment below and update the code to test the property diskSize
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property instanceType (base name: "instance_type")', function() {
      // uncomment below and update the code to test the property instanceType
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property kubernetes (base name: "kubernetes")', function() {
      // uncomment below and update the code to test the property kubernetes
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property production (base name: "production")', function() {
      // uncomment below and update the code to test the property production
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property sshKeys (base name: "ssh_keys")', function() {
      // uncomment below and update the code to test the property sshKeys
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new QoveryApi.ClusterRequest();
      //expect(instance).to.be();
    });

  });

}));
