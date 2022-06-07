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
    instance = new QoveryApi.SignUpRequest();
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

  describe('SignUpRequest', function() {
    it('should create an instance of SignUpRequest', function() {
      // uncomment below and update the code to test SignUpRequest
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be.a(QoveryApi.SignUpRequest);
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property userEmail (base name: "user_email")', function() {
      // uncomment below and update the code to test the property userEmail
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property typeOfUse (base name: "type_of_use")', function() {
      // uncomment below and update the code to test the property typeOfUse
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property qoveryUsage (base name: "qovery_usage")', function() {
      // uncomment below and update the code to test the property qoveryUsage
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property companySize (base name: "company_size")', function() {
      // uncomment below and update the code to test the property companySize
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property userRole (base name: "user_role")', function() {
      // uncomment below and update the code to test the property userRole
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property qoveryUsageOther (base name: "qovery_usage_other")', function() {
      // uncomment below and update the code to test the property qoveryUsageOther
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property userQuestions (base name: "user_questions")', function() {
      // uncomment below and update the code to test the property userQuestions
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentStep (base name: "current_step")', function() {
      // uncomment below and update the code to test the property currentStep
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

    it('should have the property dxAuth (base name: "dx_auth")', function() {
      // uncomment below and update the code to test the property dxAuth
      //var instance = new QoveryApi.SignUpRequest();
      //expect(instance).to.be();
    });

  });

}));