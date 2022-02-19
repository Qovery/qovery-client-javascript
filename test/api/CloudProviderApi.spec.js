/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
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
    instance = new QoveryApi.CloudProviderApi();
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

  describe('CloudProviderApi', function() {
    describe('listAWSFeatures', function() {
      it('should call listAWSFeatures successfully', function(done) {
        //uncomment below and update the code to test listAWSFeatures
        //instance.listAWSFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAWSRegions', function() {
      it('should call listAWSRegions successfully', function(done) {
        //uncomment below and update the code to test listAWSRegions
        //instance.listAWSRegions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCloudProvider', function() {
      it('should call listCloudProvider successfully', function(done) {
        //uncomment below and update the code to test listCloudProvider
        //instance.listCloudProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDOFeatures', function() {
      it('should call listDOFeatures successfully', function(done) {
        //uncomment below and update the code to test listDOFeatures
        //instance.listDOFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDORegions', function() {
      it('should call listDORegions successfully', function(done) {
        //uncomment below and update the code to test listDORegions
        //instance.listDORegions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listScalewayFeatures', function() {
      it('should call listScalewayFeatures successfully', function(done) {
        //uncomment below and update the code to test listScalewayFeatures
        //instance.listScalewayFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listScalewayRegions', function() {
      it('should call listScalewayRegions successfully', function(done) {
        //uncomment below and update the code to test listScalewayRegions
        //instance.listScalewayRegions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
