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
import ClusterAdvancedSettingsCloudProviderContainerRegistryTags from './ClusterAdvancedSettingsCloudProviderContainerRegistryTags';

/**
 * The ClusterAdvancedSettings model module.
 * @module model/ClusterAdvancedSettings
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterAdvancedSettings {
    /**
     * Constructs a new <code>ClusterAdvancedSettings</code>.
     * @alias module:model/ClusterAdvancedSettings
     */
    constructor() { 
        
        ClusterAdvancedSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterAdvancedSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterAdvancedSettings} obj Optional instance to populate.
     * @return {module:model/ClusterAdvancedSettings} The populated <code>ClusterAdvancedSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterAdvancedSettings();

            if (data.hasOwnProperty('aws.cloudwatch.eks_logs_retention_days')) {
                obj['aws.cloudwatch.eks_logs_retention_days'] = ApiClient.convertToType(data['aws.cloudwatch.eks_logs_retention_days'], 'Number');
            }
            if (data.hasOwnProperty('aws.vpc.enable_s3_flow_logs')) {
                obj['aws.vpc.enable_s3_flow_logs'] = ApiClient.convertToType(data['aws.vpc.enable_s3_flow_logs'], 'Boolean');
            }
            if (data.hasOwnProperty('aws.vpc.flow_logs_retention_days')) {
                obj['aws.vpc.flow_logs_retention_days'] = ApiClient.convertToType(data['aws.vpc.flow_logs_retention_days'], 'Number');
            }
            if (data.hasOwnProperty('database.postgresql.deny_public_access')) {
                obj['database.postgresql.deny_public_access'] = ApiClient.convertToType(data['database.postgresql.deny_public_access'], 'Boolean');
            }
            if (data.hasOwnProperty('database.postgresql.allowed_cidrs')) {
                obj['database.postgresql.allowed_cidrs'] = ApiClient.convertToType(data['database.postgresql.allowed_cidrs'], ['String']);
            }
            if (data.hasOwnProperty('database.mysql.deny_public_access')) {
                obj['database.mysql.deny_public_access'] = ApiClient.convertToType(data['database.mysql.deny_public_access'], 'Boolean');
            }
            if (data.hasOwnProperty('database.mysql.allowed_cidrs')) {
                obj['database.mysql.allowed_cidrs'] = ApiClient.convertToType(data['database.mysql.allowed_cidrs'], ['String']);
            }
            if (data.hasOwnProperty('database.mongodb.deny_public_access')) {
                obj['database.mongodb.deny_public_access'] = ApiClient.convertToType(data['database.mongodb.deny_public_access'], 'Boolean');
            }
            if (data.hasOwnProperty('database.mongodb.allowed_cidrs')) {
                obj['database.mongodb.allowed_cidrs'] = ApiClient.convertToType(data['database.mongodb.allowed_cidrs'], ['String']);
            }
            if (data.hasOwnProperty('database.redis.deny_public_access')) {
                obj['database.redis.deny_public_access'] = ApiClient.convertToType(data['database.redis.deny_public_access'], 'Boolean');
            }
            if (data.hasOwnProperty('database.redis.allowed_cidrs')) {
                obj['database.redis.allowed_cidrs'] = ApiClient.convertToType(data['database.redis.allowed_cidrs'], ['String']);
            }
            if (data.hasOwnProperty('registry.image_retention_time')) {
                obj['registry.image_retention_time'] = ApiClient.convertToType(data['registry.image_retention_time'], 'Number');
            }
            if (data.hasOwnProperty('loki.log_retention_in_week')) {
                obj['loki.log_retention_in_week'] = ApiClient.convertToType(data['loki.log_retention_in_week'], 'Number');
            }
            if (data.hasOwnProperty('cloud_provider_container_registry_tags')) {
                obj['cloud_provider_container_registry_tags'] = ClusterAdvancedSettingsCloudProviderContainerRegistryTags.constructFromObject(data['cloud_provider_container_registry_tags']);
            }
            if (data.hasOwnProperty('load_balancer.size')) {
                obj['load_balancer.size'] = ApiClient.convertToType(data['load_balancer.size'], 'String');
            }
            if (data.hasOwnProperty('pleco.resources_ttl')) {
                obj['pleco.resources_ttl'] = ApiClient.convertToType(data['pleco.resources_ttl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Set the number of retention days for EKS Cloudwatch logs
 * @member {Number} aws.cloudwatch.eks_logs_retention_days
 * @default 90
 */
ClusterAdvancedSettings.prototype['aws.cloudwatch.eks_logs_retention_days'] = 90;

/**
 * Enable flow logs for on the VPC and store them in an S3 bucket
 * @member {Boolean} aws.vpc.enable_s3_flow_logs
 * @default false
 */
ClusterAdvancedSettings.prototype['aws.vpc.enable_s3_flow_logs'] = false;

/**
 * Set the number of retention days for flow logs. Disable with value \"0\"
 * @member {Number} aws.vpc.flow_logs_retention_days
 * @default 365
 */
ClusterAdvancedSettings.prototype['aws.vpc.flow_logs_retention_days'] = 365;

/**
 * Deny public access to any PostgreSQL database
 * @member {Boolean} database.postgresql.deny_public_access
 * @default false
 */
ClusterAdvancedSettings.prototype['database.postgresql.deny_public_access'] = false;

/**
 * List of CIDRs allowed to access the PostgreSQL database
 * @member {Array.<String>} database.postgresql.allowed_cidrs
 */
ClusterAdvancedSettings.prototype['database.postgresql.allowed_cidrs'] = undefined;

/**
 * Deny public access to any MySql database
 * @member {Boolean} database.mysql.deny_public_access
 * @default false
 */
ClusterAdvancedSettings.prototype['database.mysql.deny_public_access'] = false;

/**
 * List of CIDRs allowed to access the MySql database
 * @member {Array.<String>} database.mysql.allowed_cidrs
 */
ClusterAdvancedSettings.prototype['database.mysql.allowed_cidrs'] = undefined;

/**
 * Deny public access to any MongoDB/DocumentDB database
 * @member {Boolean} database.mongodb.deny_public_access
 * @default false
 */
ClusterAdvancedSettings.prototype['database.mongodb.deny_public_access'] = false;

/**
 * List of CIDRs allowed to access the MongoDB/DocumentDB database
 * @member {Array.<String>} database.mongodb.allowed_cidrs
 */
ClusterAdvancedSettings.prototype['database.mongodb.allowed_cidrs'] = undefined;

/**
 * Deny public access to any Redis database
 * @member {Boolean} database.redis.deny_public_access
 * @default false
 */
ClusterAdvancedSettings.prototype['database.redis.deny_public_access'] = false;

/**
 * List of CIDRs allowed to access the Redis database
 * @member {Array.<String>} database.redis.allowed_cidrs
 */
ClusterAdvancedSettings.prototype['database.redis.allowed_cidrs'] = undefined;

/**
 * Configure the number of seconds before cleaning images in the registry
 * @member {Number} registry.image_retention_time
 * @default 31536000
 */
ClusterAdvancedSettings.prototype['registry.image_retention_time'] = 31536000;

/**
 * For how long in week loki is going to keep logs of your applications
 * @member {Number} loki.log_retention_in_week
 * @default 12
 */
ClusterAdvancedSettings.prototype['loki.log_retention_in_week'] = 12;

/**
 * @member {module:model/ClusterAdvancedSettingsCloudProviderContainerRegistryTags} cloud_provider_container_registry_tags
 */
ClusterAdvancedSettings.prototype['cloud_provider_container_registry_tags'] = undefined;

/**
 * Select the size of the main load_balancer (only effective for Scaleway)
 * @member {String} load_balancer.size
 * @default 'lb-s'
 */
ClusterAdvancedSettings.prototype['load_balancer.size'] = 'lb-s';

/**
 * @member {Number} pleco.resources_ttl
 * @default -1
 */
ClusterAdvancedSettings.prototype['pleco.resources_ttl'] = -1;






export default ClusterAdvancedSettings;

