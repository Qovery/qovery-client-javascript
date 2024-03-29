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
    instance = new QoveryApi.HelmRepositoriesApi();
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

  describe('HelmRepositoriesApi', function() {
    describe('createHelmRepository', function() {
      it('should call createHelmRepository successfully', function(done) {
        //uncomment below and update the code to test createHelmRepository
        //instance.createHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHelmRepository', function() {
      it('should call deleteHelmRepository successfully', function(done) {
        //uncomment below and update the code to test deleteHelmRepository
        //instance.deleteHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editHelmRepository', function() {
      it('should call editHelmRepository successfully', function(done) {
        //uncomment below and update the code to test editHelmRepository
        //instance.editHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHelmRepository', function() {
      it('should call getHelmRepository successfully', function(done) {
        //uncomment below and update the code to test getHelmRepository
        //instance.getHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAvailableHelmRepository', function() {
      it('should call listAvailableHelmRepository successfully', function(done) {
        //uncomment below and update the code to test listAvailableHelmRepository
        //instance.listAvailableHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listHelmRepository', function() {
      it('should call listHelmRepository successfully', function(done) {
        //uncomment below and update the code to test listHelmRepository
        //instance.listHelmRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
