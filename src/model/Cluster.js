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
import Base from './Base';
import CloudProviderEnum from './CloudProviderEnum';
import ClusterAllOf from './ClusterAllOf';
import ClusterBase from './ClusterBase';
import ClusterFeature from './ClusterFeature';
import StateEnum from './StateEnum';

/**
 * The Cluster model module.
 * @module model/Cluster
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Cluster {
    /**
     * Constructs a new <code>Cluster</code>.
     * @alias module:model/Cluster
     * @implements module:model/Base
     * @implements module:model/ClusterBase
     * @implements module:model/ClusterAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case-insensitive
     * @param cloudProvider {module:model/CloudProviderEnum} 
     * @param region {String} 
     */
    constructor(id, createdAt, name, cloudProvider, region) { 
        Base.initialize(this, id, createdAt);ClusterBase.initialize(this, name, cloudProvider, region);ClusterAllOf.initialize(this);
        Cluster.initialize(this, id, createdAt, name, cloudProvider, region);
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
     * Constructs a <code>Cluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cluster} obj Optional instance to populate.
     * @return {module:model/Cluster} The populated <code>Cluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cluster();
            Base.constructFromObject(data, obj);
            ClusterBase.constructFromObject(data, obj);
            ClusterAllOf.constructFromObject(data, obj);

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
                obj['cloud_provider'] = CloudProviderEnum.constructFromObject(data['cloud_provider']);
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
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('disk_size')) {
                obj['disk_size'] = ApiClient.convertToType(data['disk_size'], 'Number');
            }
            if (data.hasOwnProperty('estimated_cloud_provider_cost')) {
                obj['estimated_cloud_provider_cost'] = ApiClient.convertToType(data['estimated_cloud_provider_cost'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [ClusterFeature]);
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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Cluster.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Cluster.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Cluster.prototype['updated_at'] = undefined;

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
 * @member {module:model/CloudProviderEnum} cloud_provider
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

/**
 * the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType
 * @member {String} instance_type
 */
Cluster.prototype['instance_type'] = undefined;

/**
 * the disk size to be used for the node configuration
 * @member {Number} disk_size
 * @default 20
 */
Cluster.prototype['disk_size'] = 20;

/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
Cluster.prototype['estimated_cloud_provider_cost'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
Cluster.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/ClusterFeature>} features
 */
Cluster.prototype['features'] = undefined;

/**
 * @member {Boolean} has_access
 */
Cluster.prototype['has_access'] = undefined;

/**
 * @member {String} version
 */
Cluster.prototype['version'] = undefined;

/**
 * @member {Boolean} is_default
 */
Cluster.prototype['is_default'] = undefined;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;
// Implement ClusterBase interface:
/**
 * name is case-insensitive
 * @member {String} name
 */
ClusterBase.prototype['name'] = undefined;
/**
 * @member {String} description
 */
ClusterBase.prototype['description'] = undefined;
/**
 * @member {module:model/CloudProviderEnum} cloud_provider
 */
ClusterBase.prototype['cloud_provider'] = undefined;
/**
 * @member {String} region
 */
ClusterBase.prototype['region'] = undefined;
/**
 * @member {Boolean} auto_update
 */
ClusterBase.prototype['auto_update'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ClusterBase.prototype['cpu'] = 250;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ClusterBase.prototype['memory'] = 256;
/**
 * @member {Number} min_running_nodes
 * @default 1
 */
ClusterBase.prototype['min_running_nodes'] = 1;
/**
 * @member {Number} max_running_nodes
 * @default 1
 */
ClusterBase.prototype['max_running_nodes'] = 1;
/**
 * the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType
 * @member {String} instance_type
 */
ClusterBase.prototype['instance_type'] = undefined;
/**
 * the disk size to be used for the node configuration
 * @member {Number} disk_size
 * @default 20
 */
ClusterBase.prototype['disk_size'] = 20;
// Implement ClusterAllOf interface:
/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
ClusterAllOf.prototype['estimated_cloud_provider_cost'] = undefined;
/**
 * @member {module:model/StateEnum} status
 */
ClusterAllOf.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/ClusterFeature>} features
 */
ClusterAllOf.prototype['features'] = undefined;
/**
 * @member {Boolean} has_access
 */
ClusterAllOf.prototype['has_access'] = undefined;
/**
 * @member {String} version
 */
ClusterAllOf.prototype['version'] = undefined;
/**
 * @member {Boolean} is_default
 */
ClusterAllOf.prototype['is_default'] = undefined;




export default Cluster;

