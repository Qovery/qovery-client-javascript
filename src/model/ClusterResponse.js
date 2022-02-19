/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AnyOfstringboolean from './AnyOfstringboolean';
import BaseResponse from './BaseResponse';
import Cluster from './Cluster';
import ClusterFeatureResponse from './ClusterFeatureResponse';

/**
 * The ClusterResponse model module.
 * @module model/ClusterResponse
 * @version 1.0.1
 */
class ClusterResponse {
    /**
     * Constructs a new <code>ClusterResponse</code>.
     * @alias module:model/ClusterResponse
     * @implements module:model/BaseResponse
     * @implements module:model/Cluster
     * @implements module:model/ClusterFeatureResponse
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case-insensitive
     * @param cloudProvider {module:model/ClusterResponse.CloudProviderEnum} 
     * @param region {String} 
     */
    constructor(id, createdAt, name, cloudProvider, region) { 
        BaseResponse.initialize(this, id, createdAt);Cluster.initialize(this, name, cloudProvider, region);ClusterFeatureResponse.initialize(this);
        ClusterResponse.initialize(this, id, createdAt, name, cloudProvider, region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, cloudProvider, region) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
        obj['cloud_provider'] = cloudProvider;
        obj['region'] = region;
    }

    /**
     * Constructs a <code>ClusterResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterResponse} obj Optional instance to populate.
     * @return {module:model/ClusterResponse} The populated <code>ClusterResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterResponse();
            BaseResponse.constructFromObject(data, obj);
            Cluster.constructFromObject(data, obj);
            ClusterFeatureResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('estimated_cloud_provider_cost')) {
                obj['estimated_cloud_provider_cost'] = ApiClient.convertToType(data['estimated_cloud_provider_cost'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('has_access')) {
                obj['has_access'] = ApiClient.convertToType(data['has_access'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cloud_provider')) {
                obj['cloud_provider'] = ApiClient.convertToType(data['cloud_provider'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('auto_update')) {
                obj['auto_update'] = ApiClient.convertToType(data['auto_update'], 'Boolean');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('min_running_nodes')) {
                obj['min_running_nodes'] = ApiClient.convertToType(data['min_running_nodes'], 'Number');
            }
            if (data.hasOwnProperty('max_running_nodes')) {
                obj['max_running_nodes'] = ApiClient.convertToType(data['max_running_nodes'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('cost_per_month_in_cents')) {
                obj['cost_per_month_in_cents'] = ApiClient.convertToType(data['cost_per_month_in_cents'], 'Number');
            }
            if (data.hasOwnProperty('cost_per_month')) {
                obj['cost_per_month'] = ApiClient.convertToType(data['cost_per_month'], 'Number');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('value_type')) {
                obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('is_value_updatable')) {
                obj['is_value_updatable'] = ApiClient.convertToType(data['is_value_updatable'], 'Boolean');
            }
            if (data.hasOwnProperty('accepted_values')) {
                obj['accepted_values'] = ApiClient.convertToType(data['accepted_values'], [AnyOfstringboolean]);
            }
        }
        return obj;
    }


}

/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
ClusterResponse.prototype['estimated_cloud_provider_cost'] = undefined;

/**
 * @member {module:model/ClusterResponse.StatusEnum} status
 */
ClusterResponse.prototype['status'] = undefined;

/**
 * @member {Boolean} has_access
 */
ClusterResponse.prototype['has_access'] = undefined;

/**
 * @member {String} version
 */
ClusterResponse.prototype['version'] = undefined;

/**
 * @member {Boolean} is_default
 */
ClusterResponse.prototype['is_default'] = undefined;

/**
 * @member {String} id
 */
ClusterResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
ClusterResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ClusterResponse.prototype['updated_at'] = undefined;

/**
 * name is case-insensitive
 * @member {String} name
 */
ClusterResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ClusterResponse.prototype['description'] = undefined;

/**
 * @member {module:model/ClusterResponse.CloudProviderEnum} cloud_provider
 */
ClusterResponse.prototype['cloud_provider'] = undefined;

/**
 * @member {String} region
 */
ClusterResponse.prototype['region'] = undefined;

/**
 * @member {Boolean} auto_update
 */
ClusterResponse.prototype['auto_update'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ClusterResponse.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ClusterResponse.prototype['memory'] = 256;

/**
 * @member {Number} min_running_nodes
 * @default 1
 */
ClusterResponse.prototype['min_running_nodes'] = 1;

/**
 * @member {Number} max_running_nodes
 * @default 1
 */
ClusterResponse.prototype['max_running_nodes'] = 1;

/**
 * @member {String} title
 */
ClusterResponse.prototype['title'] = undefined;

/**
 * @member {Number} cost_per_month_in_cents
 */
ClusterResponse.prototype['cost_per_month_in_cents'] = undefined;

/**
 * @member {Number} cost_per_month
 */
ClusterResponse.prototype['cost_per_month'] = undefined;

/**
 * @member {String} currency_code
 */
ClusterResponse.prototype['currency_code'] = undefined;

/**
 * @member {module:model/ClusterResponse.ValueTypeEnum} value_type
 */
ClusterResponse.prototype['value_type'] = undefined;

/**
 * @member {String} value
 */
ClusterResponse.prototype['value'] = undefined;

/**
 * @member {Boolean} is_value_updatable
 * @default false
 */
ClusterResponse.prototype['is_value_updatable'] = false;

/**
 * @member {Array.<module:model/AnyOfstringboolean>} accepted_values
 */
ClusterResponse.prototype['accepted_values'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;
// Implement Cluster interface:
/**
 * name is case-insensitive
 * @member {String} name
 */
Cluster.prototype['name'] = undefined;
/**
 * @member {String} description
 */
Cluster.prototype['description'] = undefined;
/**
 * @member {module:model/Cluster.CloudProviderEnum} cloud_provider
 */
Cluster.prototype['cloud_provider'] = undefined;
/**
 * @member {String} region
 */
Cluster.prototype['region'] = undefined;
/**
 * @member {Boolean} auto_update
 */
Cluster.prototype['auto_update'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
Cluster.prototype['cpu'] = 250;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
Cluster.prototype['memory'] = 256;
/**
 * @member {Number} min_running_nodes
 * @default 1
 */
Cluster.prototype['min_running_nodes'] = 1;
/**
 * @member {Number} max_running_nodes
 * @default 1
 */
Cluster.prototype['max_running_nodes'] = 1;
// Implement ClusterFeatureResponse interface:
/**
 * @member {String} id
 */
ClusterFeatureResponse.prototype['id'] = undefined;
/**
 * @member {String} title
 */
ClusterFeatureResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */
ClusterFeatureResponse.prototype['description'] = undefined;
/**
 * @member {Number} cost_per_month_in_cents
 */
ClusterFeatureResponse.prototype['cost_per_month_in_cents'] = undefined;
/**
 * @member {Number} cost_per_month
 */
ClusterFeatureResponse.prototype['cost_per_month'] = undefined;
/**
 * @member {String} currency_code
 */
ClusterFeatureResponse.prototype['currency_code'] = undefined;
/**
 * @member {module:model/ClusterFeatureResponse.ValueTypeEnum} value_type
 */
ClusterFeatureResponse.prototype['value_type'] = undefined;
/**
 * @member {String} value
 */
ClusterFeatureResponse.prototype['value'] = undefined;
/**
 * @member {Boolean} is_value_updatable
 * @default false
 */
ClusterFeatureResponse.prototype['is_value_updatable'] = false;
/**
 * @member {Array.<module:model/AnyOfstringboolean>} accepted_values
 */
ClusterFeatureResponse.prototype['accepted_values'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ClusterResponse['StatusEnum'] = {

    /**
     * value: "READY"
     * @const
     */
    "READY": "READY",

    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING",

    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING"
};


/**
 * Allowed values for the <code>cloud_provider</code> property.
 * @enum {String}
 * @readonly
 */
ClusterResponse['CloudProviderEnum'] = {

    /**
     * value: "AWS"
     * @const
     */
    "AWS": "AWS",

    /**
     * value: "DIGITAL_OCEAN"
     * @const
     */
    "DIGITAL_OCEAN": "DIGITAL_OCEAN",

    /**
     * value: "SCALEWAY"
     * @const
     */
    "SCALEWAY": "SCALEWAY"
};


/**
 * Allowed values for the <code>value_type</code> property.
 * @enum {String}
 * @readonly
 */
ClusterResponse['ValueTypeEnum'] = {

    /**
     * value: "BOOLEAN"
     * @const
     */
    "BOOLEAN": "BOOLEAN"
};



export default ClusterResponse;

