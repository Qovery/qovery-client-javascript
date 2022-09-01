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
    instance = new QoveryApi.ContainerRegistriesApi();
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

  describe('ContainerRegistriesApi', function() {
    describe('createContainerRegistry', function() {
      it('should call createContainerRegistry successfully', function(done) {
        //uncomment below and update the code to test createContainerRegistry
        //instance.createContainerRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContainerRegistry', function() {
      it('should call deleteContainerRegistry successfully', function(done) {
        //uncomment below and update the code to test deleteContainerRegistry
        //instance.deleteContainerRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContainerRegistry', function() {
      it('should call getContainerRegistry successfully', function(done) {
        //uncomment below and update the code to test getContainerRegistry
        //instance.getContainerRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAvailableContainerRegistry', function() {
      it('should call listAvailableContainerRegistry successfully', function(done) {
        //uncomment below and update the code to test listAvailableContainerRegistry
        //instance.listAvailableContainerRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContainerRegistry', function() {
      it('should call listContainerRegistry successfully', function(done) {
        //uncomment below and update the code to test listContainerRegistry
        //instance.listContainerRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
