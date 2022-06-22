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
    instance = new QoveryApi.ClustersApi();
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

  describe('ClustersApi', function() {
    describe('createCluster', function() {
      it('should call createCluster successfully', function(done) {
        //uncomment below and update the code to test createCluster
        //instance.createCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCluster', function() {
      it('should call deleteCluster successfully', function(done) {
        //uncomment below and update the code to test deleteCluster
        //instance.deleteCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployCluster', function() {
      it('should call deployCluster successfully', function(done) {
        //uncomment below and update the code to test deployCluster
        //instance.deployCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editCluster', function() {
      it('should call editCluster successfully', function(done) {
        //uncomment below and update the code to test editCluster
        //instance.editCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editRoutingTable', function() {
      it('should call editRoutingTable successfully', function(done) {
        //uncomment below and update the code to test editRoutingTable
        //instance.editRoutingTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterReadinessStatus', function() {
      it('should call getClusterReadinessStatus successfully', function(done) {
        //uncomment below and update the code to test getClusterReadinessStatus
        //instance.getClusterReadinessStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterStatus', function() {
      it('should call getClusterStatus successfully', function(done) {
        //uncomment below and update the code to test getClusterStatus
        //instance.getClusterStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationCloudProviderInfo', function() {
      it('should call getOrganizationCloudProviderInfo successfully', function(done) {
        //uncomment below and update the code to test getOrganizationCloudProviderInfo
        //instance.getOrganizationCloudProviderInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationClusterStatus', function() {
      it('should call getOrganizationClusterStatus successfully', function(done) {
        //uncomment below and update the code to test getOrganizationClusterStatus
        //instance.getOrganizationClusterStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoutingTable', function() {
      it('should call getRoutingTable successfully', function(done) {
        //uncomment below and update the code to test getRoutingTable
        //instance.getRoutingTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listClusterLogs', function() {
      it('should call listClusterLogs successfully', function(done) {
        //uncomment below and update the code to test listClusterLogs
        //instance.listClusterLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationCluster', function() {
      it('should call listOrganizationCluster successfully', function(done) {
        //uncomment below and update the code to test listOrganizationCluster
        //instance.listOrganizationCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('specifyClusterCloudProviderInfo', function() {
      it('should call specifyClusterCloudProviderInfo successfully', function(done) {
        //uncomment below and update the code to test specifyClusterCloudProviderInfo
        //instance.specifyClusterCloudProviderInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopCluster', function() {
      it('should call stopCluster successfully', function(done) {
        //uncomment below and update the code to test stopCluster
        //instance.stopCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCluster', function() {
      it('should call updateCluster successfully', function(done) {
        //uncomment below and update the code to test updateCluster
        //instance.updateCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
