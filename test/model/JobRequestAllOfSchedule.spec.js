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
    instance = new QoveryApi.JobRequestAllOfSchedule();
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

  describe('JobRequestAllOfSchedule', function() {
    it('should create an instance of JobRequestAllOfSchedule', function() {
      // uncomment below and update the code to test JobRequestAllOfSchedule
      //var instance = new QoveryApi.JobRequestAllOfSchedule();
      //expect(instance).to.be.a(QoveryApi.JobRequestAllOfSchedule);
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new QoveryApi.JobRequestAllOfSchedule();
      //expect(instance).to.be();
    });

    it('should have the property scheduleAt (base name: "schedule_at")', function() {
      // uncomment below and update the code to test the property scheduleAt
      //var instance = new QoveryApi.JobRequestAllOfSchedule();
      //expect(instance).to.be();
    });

  });

}));