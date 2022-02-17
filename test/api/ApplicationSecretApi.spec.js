/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
    factory(root.expect, root.QoveryApi);
  }
}(this, function(expect, QoveryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QoveryApi.ApplicationSecretApi();
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

  describe('ApplicationSecretApi', function() {
    describe('createApplicationSecret', function() {
      it('should call createApplicationSecret successfully', function(done) {
        //uncomment below and update the code to test createApplicationSecret
        //instance.createApplicationSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplicationSecretAlias', function() {
      it('should call createApplicationSecretAlias successfully', function(done) {
        //uncomment below and update the code to test createApplicationSecretAlias
        //instance.createApplicationSecretAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplicationSecretOverride', function() {
      it('should call createApplicationSecretOverride successfully', function(done) {
        //uncomment below and update the code to test createApplicationSecretOverride
        //instance.createApplicationSecretOverride(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApplicationSecret', function() {
      it('should call deleteApplicationSecret successfully', function(done) {
        //uncomment below and update the code to test deleteApplicationSecret
        //instance.deleteApplicationSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editApplicationSecret', function() {
      it('should call editApplicationSecret successfully', function(done) {
        //uncomment below and update the code to test editApplicationSecret
        //instance.editApplicationSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicationSecrets', function() {
      it('should call listApplicationSecrets successfully', function(done) {
        //uncomment below and update the code to test listApplicationSecrets
        //instance.listApplicationSecrets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
