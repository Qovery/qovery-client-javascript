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

import ApiClient from '../ApiClient';

/**
 * The ClusterFeatureAwsExistingVpc model module.
 * @module model/ClusterFeatureAwsExistingVpc
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterFeatureAwsExistingVpc {
    /**
     * Constructs a new <code>ClusterFeatureAwsExistingVpc</code>.
     * @alias module:model/ClusterFeatureAwsExistingVpc
     * @param awsVpcEksId {String} 
     * @param eksSubnetsZoneAIds {Array.<String>} 
     * @param eksSubnetsZoneBIds {Array.<String>} 
     * @param eksSubnetsZoneCIds {Array.<String>} 
     */
    constructor(awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds) { 
        
        ClusterFeatureAwsExistingVpc.initialize(this, awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds) { 
        obj['aws_vpc_eks_id'] = awsVpcEksId;
        obj['eks_subnets_zone_a_ids'] = eksSubnetsZoneAIds;
        obj['eks_subnets_zone_b_ids'] = eksSubnetsZoneBIds;
        obj['eks_subnets_zone_c_ids'] = eksSubnetsZoneCIds;
    }

    /**
     * Constructs a <code>ClusterFeatureAwsExistingVpc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterFeatureAwsExistingVpc} obj Optional instance to populate.
     * @return {module:model/ClusterFeatureAwsExistingVpc} The populated <code>ClusterFeatureAwsExistingVpc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterFeatureAwsExistingVpc();

            if (data.hasOwnProperty('aws_vpc_eks_id')) {
                obj['aws_vpc_eks_id'] = ApiClient.convertToType(data['aws_vpc_eks_id'], 'String');
            }
            if (data.hasOwnProperty('eks_subnets_zone_a_ids')) {
                obj['eks_subnets_zone_a_ids'] = ApiClient.convertToType(data['eks_subnets_zone_a_ids'], ['String']);
            }
            if (data.hasOwnProperty('eks_subnets_zone_b_ids')) {
                obj['eks_subnets_zone_b_ids'] = ApiClient.convertToType(data['eks_subnets_zone_b_ids'], ['String']);
            }
            if (data.hasOwnProperty('eks_subnets_zone_c_ids')) {
                obj['eks_subnets_zone_c_ids'] = ApiClient.convertToType(data['eks_subnets_zone_c_ids'], ['String']);
            }
            if (data.hasOwnProperty('documentdb_subnets_zone_a_ids')) {
                obj['documentdb_subnets_zone_a_ids'] = ApiClient.convertToType(data['documentdb_subnets_zone_a_ids'], ['String']);
            }
            if (data.hasOwnProperty('documentdb_subnets_zone_b_ids')) {
                obj['documentdb_subnets_zone_b_ids'] = ApiClient.convertToType(data['documentdb_subnets_zone_b_ids'], ['String']);
            }
            if (data.hasOwnProperty('documentdb_subnets_zone_c_ids')) {
                obj['documentdb_subnets_zone_c_ids'] = ApiClient.convertToType(data['documentdb_subnets_zone_c_ids'], ['String']);
            }
            if (data.hasOwnProperty('elasticache_subnets_zone_a_ids')) {
                obj['elasticache_subnets_zone_a_ids'] = ApiClient.convertToType(data['elasticache_subnets_zone_a_ids'], ['String']);
            }
            if (data.hasOwnProperty('elasticache_subnets_zone_b_ids')) {
                obj['elasticache_subnets_zone_b_ids'] = ApiClient.convertToType(data['elasticache_subnets_zone_b_ids'], ['String']);
            }
            if (data.hasOwnProperty('elasticache_subnets_zone_c_ids')) {
                obj['elasticache_subnets_zone_c_ids'] = ApiClient.convertToType(data['elasticache_subnets_zone_c_ids'], ['String']);
            }
            if (data.hasOwnProperty('rds_subnets_zone_a_ids')) {
                obj['rds_subnets_zone_a_ids'] = ApiClient.convertToType(data['rds_subnets_zone_a_ids'], ['String']);
            }
            if (data.hasOwnProperty('rds_subnets_zone_b_ids')) {
                obj['rds_subnets_zone_b_ids'] = ApiClient.convertToType(data['rds_subnets_zone_b_ids'], ['String']);
            }
            if (data.hasOwnProperty('rds_subnets_zone_c_ids')) {
                obj['rds_subnets_zone_c_ids'] = ApiClient.convertToType(data['rds_subnets_zone_c_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} aws_vpc_eks_id
 */
ClusterFeatureAwsExistingVpc.prototype['aws_vpc_eks_id'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_a_ids
 */
ClusterFeatureAwsExistingVpc.prototype['eks_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_b_ids
 */
ClusterFeatureAwsExistingVpc.prototype['eks_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_c_ids
 */
ClusterFeatureAwsExistingVpc.prototype['eks_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_a_ids
 */
ClusterFeatureAwsExistingVpc.prototype['documentdb_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_b_ids
 */
ClusterFeatureAwsExistingVpc.prototype['documentdb_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_c_ids
 */
ClusterFeatureAwsExistingVpc.prototype['documentdb_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_a_ids
 */
ClusterFeatureAwsExistingVpc.prototype['elasticache_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_b_ids
 */
ClusterFeatureAwsExistingVpc.prototype['elasticache_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_c_ids
 */
ClusterFeatureAwsExistingVpc.prototype['elasticache_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_a_ids
 */
ClusterFeatureAwsExistingVpc.prototype['rds_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_b_ids
 */
ClusterFeatureAwsExistingVpc.prototype['rds_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_c_ids
 */
ClusterFeatureAwsExistingVpc.prototype['rds_subnets_zone_c_ids'] = undefined;






export default ClusterFeatureAwsExistingVpc;

