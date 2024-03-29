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
    instance = new QoveryApi.BillingApi();
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

  describe('BillingApi', function() {
    describe('addCreditCard', function() {
      it('should call addCreditCard successfully', function(done) {
        //uncomment below and update the code to test addCreditCard
        //instance.addCreditCard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCreditCode', function() {
      it('should call addCreditCode successfully', function(done) {
        //uncomment below and update the code to test addCreditCode
        //instance.addCreditCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changePlan', function() {
      it('should call changePlan successfully', function(done) {
        //uncomment below and update the code to test changePlan
        //instance.changePlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCreditCard', function() {
      it('should call deleteCreditCard successfully', function(done) {
        //uncomment below and update the code to test deleteCreditCard
        //instance.deleteCreditCard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editOrganizationBillingInfo', function() {
      it('should call editOrganizationBillingInfo successfully', function(done) {
        //uncomment below and update the code to test editOrganizationBillingInfo
        //instance.editOrganizationBillingInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateBillingUsageReport', function() {
      it('should call generateBillingUsageReport successfully', function(done) {
        //uncomment below and update the code to test generateBillingUsageReport
        //instance.generateBillingUsageReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterCurrentCost', function() {
      it('should call getClusterCurrentCost successfully', function(done) {
        //uncomment below and update the code to test getClusterCurrentCost
        //instance.getClusterCurrentCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBillingExternalId', function() {
      it('should call getOrganizationBillingExternalId successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBillingExternalId
        //instance.getOrganizationBillingExternalId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBillingInfo', function() {
      it('should call getOrganizationBillingInfo successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBillingInfo
        //instance.getOrganizationBillingInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBillingStatus', function() {
      it('should call getOrganizationBillingStatus successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBillingStatus
        //instance.getOrganizationBillingStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationCurrentCost', function() {
      it('should call getOrganizationCurrentCost successfully', function(done) {
        //uncomment below and update the code to test getOrganizationCurrentCost
        //instance.getOrganizationCurrentCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationInvoice', function() {
      it('should call getOrganizationInvoice successfully', function(done) {
        //uncomment below and update the code to test getOrganizationInvoice
        //instance.getOrganizationInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationInvoicePDF', function() {
      it('should call getOrganizationInvoicePDF successfully', function(done) {
        //uncomment below and update the code to test getOrganizationInvoicePDF
        //instance.getOrganizationInvoicePDF(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationCreditCards', function() {
      it('should call listOrganizationCreditCards successfully', function(done) {
        //uncomment below and update the code to test listOrganizationCreditCards
        //instance.listOrganizationCreditCards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationInvoice', function() {
      it('should call listOrganizationInvoice successfully', function(done) {
        //uncomment below and update the code to test listOrganizationInvoice
        //instance.listOrganizationInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationDownloadAllInvoices', function() {
      it('should call organizationDownloadAllInvoices successfully', function(done) {
        //uncomment below and update the code to test organizationDownloadAllInvoices
        //instance.organizationDownloadAllInvoices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
