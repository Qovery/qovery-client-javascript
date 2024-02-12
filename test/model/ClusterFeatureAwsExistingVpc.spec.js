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
    instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
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

  describe('ClusterFeatureAwsExistingVpc', function() {
    it('should create an instance of ClusterFeatureAwsExistingVpc', function() {
      // uncomment below and update the code to test ClusterFeatureAwsExistingVpc
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be.a(QoveryApi.ClusterFeatureAwsExistingVpc);
    });

    it('should have the property awsVpcEksId (base name: "aws_vpc_eks_id")', function() {
      // uncomment below and update the code to test the property awsVpcEksId
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property eksSubnetsZoneAIds (base name: "eks_subnets_zone_a_ids")', function() {
      // uncomment below and update the code to test the property eksSubnetsZoneAIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property eksSubnetsZoneBIds (base name: "eks_subnets_zone_b_ids")', function() {
      // uncomment below and update the code to test the property eksSubnetsZoneBIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property eksSubnetsZoneCIds (base name: "eks_subnets_zone_c_ids")', function() {
      // uncomment below and update the code to test the property eksSubnetsZoneCIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property documentdbSubnetsZoneAIds (base name: "documentdb_subnets_zone_a_ids")', function() {
      // uncomment below and update the code to test the property documentdbSubnetsZoneAIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property documentdbSubnetsZoneBIds (base name: "documentdb_subnets_zone_b_ids")', function() {
      // uncomment below and update the code to test the property documentdbSubnetsZoneBIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property documentdbSubnetsZoneCIds (base name: "documentdb_subnets_zone_c_ids")', function() {
      // uncomment below and update the code to test the property documentdbSubnetsZoneCIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property elasticacheSubnetsZoneAIds (base name: "elasticache_subnets_zone_a_ids")', function() {
      // uncomment below and update the code to test the property elasticacheSubnetsZoneAIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property elasticacheSubnetsZoneBIds (base name: "elasticache_subnets_zone_b_ids")', function() {
      // uncomment below and update the code to test the property elasticacheSubnetsZoneBIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property elasticacheSubnetsZoneCIds (base name: "elasticache_subnets_zone_c_ids")', function() {
      // uncomment below and update the code to test the property elasticacheSubnetsZoneCIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property rdsSubnetsZoneAIds (base name: "rds_subnets_zone_a_ids")', function() {
      // uncomment below and update the code to test the property rdsSubnetsZoneAIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property rdsSubnetsZoneBIds (base name: "rds_subnets_zone_b_ids")', function() {
      // uncomment below and update the code to test the property rdsSubnetsZoneBIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

    it('should have the property rdsSubnetsZoneCIds (base name: "rds_subnets_zone_c_ids")', function() {
      // uncomment below and update the code to test the property rdsSubnetsZoneCIds
      //var instance = new QoveryApi.ClusterFeatureAwsExistingVpc();
      //expect(instance).to.be();
    });

  });

}));