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
    instance = new QoveryApi.InviteMemberResponse();
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

  describe('InviteMemberResponse', function() {
    it('should create an instance of InviteMemberResponse', function() {
      // uncomment below and update the code to test InviteMemberResponse
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be.a(QoveryApi.InviteMemberResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property invitationLink (base name: "invitation_link")', function() {
      // uncomment below and update the code to test the property invitationLink
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property invitationStatus (base name: "invitation_status")', function() {
      // uncomment below and update the code to test the property invitationStatus
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property inviter (base name: "inviter")', function() {
      // uncomment below and update the code to test the property inviter
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logo_url")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instance = new QoveryApi.InviteMemberResponse();
      //expect(instance).to.be();
    });

  });

}));
