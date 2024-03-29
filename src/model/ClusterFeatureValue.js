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
import ClusterFeatureAwsExistingVpc from './ClusterFeatureAwsExistingVpc';
import ClusterFeatureGcpExistingVpc from './ClusterFeatureGcpExistingVpc';

/**
 * The ClusterFeatureValue model module.
 * @module model/ClusterFeatureValue
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterFeatureValue {
    /**
     * Constructs a new <code>ClusterFeatureValue</code>.
     * @alias module:model/ClusterFeatureValue
     * @implements module:model/ClusterFeatureAwsExistingVpc
     * @implements module:model/ClusterFeatureGcpExistingVpc
     * @param awsVpcEksId {String} 
     * @param eksSubnetsZoneAIds {Array.<String>} 
     * @param eksSubnetsZoneBIds {Array.<String>} 
     * @param eksSubnetsZoneCIds {Array.<String>} 
     * @param vpcName {String} 
     */
    constructor(awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds, vpcName) { 
        ClusterFeatureAwsExistingVpc.initialize(this, awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds);ClusterFeatureGcpExistingVpc.initialize(this, vpcName);
        ClusterFeatureValue.initialize(this, awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds, vpcName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, awsVpcEksId, eksSubnetsZoneAIds, eksSubnetsZoneBIds, eksSubnetsZoneCIds, vpcName) { 
        obj['aws_vpc_eks_id'] = awsVpcEksId;
        obj['eks_subnets_zone_a_ids'] = eksSubnetsZoneAIds;
        obj['eks_subnets_zone_b_ids'] = eksSubnetsZoneBIds;
        obj['eks_subnets_zone_c_ids'] = eksSubnetsZoneCIds;
        obj['vpc_name'] = vpcName;
    }

    /**
     * Constructs a <code>ClusterFeatureValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterFeatureValue} obj Optional instance to populate.
     * @return {module:model/ClusterFeatureValue} The populated <code>ClusterFeatureValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterFeatureValue();
            ClusterFeatureAwsExistingVpc.constructFromObject(data, obj);
            ClusterFeatureGcpExistingVpc.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('vpc_name')) {
                obj['vpc_name'] = ApiClient.convertToType(data['vpc_name'], 'String');
            }
            if (data.hasOwnProperty('vpc_project_id')) {
                obj['vpc_project_id'] = ApiClient.convertToType(data['vpc_project_id'], 'String');
            }
            if (data.hasOwnProperty('subnetwork_name')) {
                obj['subnetwork_name'] = ApiClient.convertToType(data['subnetwork_name'], 'String');
            }
            if (data.hasOwnProperty('ip_range_services_name')) {
                obj['ip_range_services_name'] = ApiClient.convertToType(data['ip_range_services_name'], 'String');
            }
            if (data.hasOwnProperty('ip_range_pods_name')) {
                obj['ip_range_pods_name'] = ApiClient.convertToType(data['ip_range_pods_name'], 'String');
            }
            if (data.hasOwnProperty('additional_ip_range_pods_names')) {
                obj['additional_ip_range_pods_names'] = ApiClient.convertToType(data['additional_ip_range_pods_names'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} aws_vpc_eks_id
 */
ClusterFeatureValue.prototype['aws_vpc_eks_id'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_a_ids
 */
ClusterFeatureValue.prototype['eks_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_b_ids
 */
ClusterFeatureValue.prototype['eks_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} eks_subnets_zone_c_ids
 */
ClusterFeatureValue.prototype['eks_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_a_ids
 */
ClusterFeatureValue.prototype['documentdb_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_b_ids
 */
ClusterFeatureValue.prototype['documentdb_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} documentdb_subnets_zone_c_ids
 */
ClusterFeatureValue.prototype['documentdb_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_a_ids
 */
ClusterFeatureValue.prototype['elasticache_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_b_ids
 */
ClusterFeatureValue.prototype['elasticache_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} elasticache_subnets_zone_c_ids
 */
ClusterFeatureValue.prototype['elasticache_subnets_zone_c_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_a_ids
 */
ClusterFeatureValue.prototype['rds_subnets_zone_a_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_b_ids
 */
ClusterFeatureValue.prototype['rds_subnets_zone_b_ids'] = undefined;

/**
 * @member {Array.<String>} rds_subnets_zone_c_ids
 */
ClusterFeatureValue.prototype['rds_subnets_zone_c_ids'] = undefined;

/**
 * @member {String} vpc_name
 */
ClusterFeatureValue.prototype['vpc_name'] = undefined;

/**
 * @member {String} vpc_project_id
 */
ClusterFeatureValue.prototype['vpc_project_id'] = undefined;

/**
 * @member {String} subnetwork_name
 */
ClusterFeatureValue.prototype['subnetwork_name'] = undefined;

/**
 * @member {String} ip_range_services_name
 */
ClusterFeatureValue.prototype['ip_range_services_name'] = undefined;

/**
 * @member {String} ip_range_pods_name
 */
ClusterFeatureValue.prototype['ip_range_pods_name'] = undefined;

/**
 * @member {Array.<String>} additional_ip_range_pods_names
 */
ClusterFeatureValue.prototype['additional_ip_range_pods_names'] = undefined;


// Implement ClusterFeatureAwsExistingVpc interface:
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
// Implement ClusterFeatureGcpExistingVpc interface:
/**
 * @member {String} vpc_name
 */
ClusterFeatureGcpExistingVpc.prototype['vpc_name'] = undefined;
/**
 * @member {String} vpc_project_id
 */
ClusterFeatureGcpExistingVpc.prototype['vpc_project_id'] = undefined;
/**
 * @member {String} subnetwork_name
 */
ClusterFeatureGcpExistingVpc.prototype['subnetwork_name'] = undefined;
/**
 * @member {String} ip_range_services_name
 */
ClusterFeatureGcpExistingVpc.prototype['ip_range_services_name'] = undefined;
/**
 * @member {String} ip_range_pods_name
 */
ClusterFeatureGcpExistingVpc.prototype['ip_range_pods_name'] = undefined;
/**
 * @member {Array.<String>} additional_ip_range_pods_names
 */
ClusterFeatureGcpExistingVpc.prototype['additional_ip_range_pods_names'] = undefined;




export default ClusterFeatureValue;

