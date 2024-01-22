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
import ClusterDeploymentStatusEnum from './ClusterDeploymentStatusEnum';
import ClusterFeature from './ClusterFeature';
import ClusterStateEnum from './ClusterStateEnum';
import KubernetesEnum from './KubernetesEnum';
import ReferenceObject from './ReferenceObject';

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
     * @implements module:model/ClusterAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case-insensitive
     * @param region {String} 
     * @param cloudProvider {module:model/CloudProviderEnum} 
     */
    constructor(id, createdAt, name, region, cloudProvider) { 
        Base.initialize(this, id, createdAt);ClusterAllOf.initialize(this, name, region, cloudProvider);
        Cluster.initialize(this, id, createdAt, name, region, cloudProvider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, region, cloudProvider) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
        obj['region'] = region;
        obj['cloud_provider'] = cloudProvider;
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
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ReferenceObject.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('cloud_provider')) {
                obj['cloud_provider'] = CloudProviderEnum.constructFromObject(data['cloud_provider']);
            }
            if (data.hasOwnProperty('min_running_nodes')) {
                obj['min_running_nodes'] = ApiClient.convertToType(data['min_running_nodes'], 'Number');
            }
            if (data.hasOwnProperty('max_running_nodes')) {
                obj['max_running_nodes'] = ApiClient.convertToType(data['max_running_nodes'], 'Number');
            }
            if (data.hasOwnProperty('disk_size')) {
                obj['disk_size'] = ApiClient.convertToType(data['disk_size'], 'Number');
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('kubernetes')) {
                obj['kubernetes'] = KubernetesEnum.constructFromObject(data['kubernetes']);
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('estimated_cloud_provider_cost')) {
                obj['estimated_cloud_provider_cost'] = ApiClient.convertToType(data['estimated_cloud_provider_cost'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ClusterStateEnum.constructFromObject(data['status']);
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
            if (data.hasOwnProperty('production')) {
                obj['production'] = ApiClient.convertToType(data['production'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh_keys')) {
                obj['ssh_keys'] = ApiClient.convertToType(data['ssh_keys'], ['String']);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [ClusterFeature]);
            }
            if (data.hasOwnProperty('deployment_status')) {
                obj['deployment_status'] = ClusterDeploymentStatusEnum.constructFromObject(data['deployment_status']);
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
 * @member {module:model/ReferenceObject} organization
 */
Cluster.prototype['organization'] = undefined;

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
 * @member {String} region
 */
Cluster.prototype['region'] = undefined;

/**
 * @member {module:model/CloudProviderEnum} cloud_provider
 */
Cluster.prototype['cloud_provider'] = undefined;

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
 * Unit is in GB. The disk size to be used for the node configuration
 * @member {Number} disk_size
 * @default 20
 */
Cluster.prototype['disk_size'] = 20;

/**
 * the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType
 * @member {String} instance_type
 */
Cluster.prototype['instance_type'] = undefined;

/**
 * @member {module:model/KubernetesEnum} kubernetes
 */
Cluster.prototype['kubernetes'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
Cluster.prototype['cpu'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
Cluster.prototype['memory'] = undefined;

/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
Cluster.prototype['estimated_cloud_provider_cost'] = undefined;

/**
 * @member {module:model/ClusterStateEnum} status
 */
Cluster.prototype['status'] = undefined;

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

/**
 * specific flag to indicate that this cluster is a production one
 * @member {Boolean} production
 */
Cluster.prototype['production'] = undefined;

/**
 * Indicate your public ssh_key to remotely connect to your EC2 instance.
 * @member {Array.<String>} ssh_keys
 */
Cluster.prototype['ssh_keys'] = undefined;

/**
 * @member {Array.<module:model/ClusterFeature>} features
 */
Cluster.prototype['features'] = undefined;

/**
 * @member {module:model/ClusterDeploymentStatusEnum} deployment_status
 */
Cluster.prototype['deployment_status'] = undefined;


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
// Implement ClusterAllOf interface:
/**
 * @member {module:model/ReferenceObject} organization
 */
ClusterAllOf.prototype['organization'] = undefined;
/**
 * name is case-insensitive
 * @member {String} name
 */
ClusterAllOf.prototype['name'] = undefined;
/**
 * @member {String} description
 */
ClusterAllOf.prototype['description'] = undefined;
/**
 * @member {String} region
 */
ClusterAllOf.prototype['region'] = undefined;
/**
 * @member {module:model/CloudProviderEnum} cloud_provider
 */
ClusterAllOf.prototype['cloud_provider'] = undefined;
/**
 * @member {Number} min_running_nodes
 * @default 1
 */
ClusterAllOf.prototype['min_running_nodes'] = 1;
/**
 * @member {Number} max_running_nodes
 * @default 1
 */
ClusterAllOf.prototype['max_running_nodes'] = 1;
/**
 * Unit is in GB. The disk size to be used for the node configuration
 * @member {Number} disk_size
 * @default 20
 */
ClusterAllOf.prototype['disk_size'] = 20;
/**
 * the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType
 * @member {String} instance_type
 */
ClusterAllOf.prototype['instance_type'] = undefined;
/**
 * @member {module:model/KubernetesEnum} kubernetes
 */
ClusterAllOf.prototype['kubernetes'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
ClusterAllOf.prototype['cpu'] = undefined;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
ClusterAllOf.prototype['memory'] = undefined;
/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
ClusterAllOf.prototype['estimated_cloud_provider_cost'] = undefined;
/**
 * @member {module:model/ClusterStateEnum} status
 */
ClusterAllOf.prototype['status'] = undefined;
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
/**
 * specific flag to indicate that this cluster is a production one
 * @member {Boolean} production
 */
ClusterAllOf.prototype['production'] = undefined;
/**
 * Indicate your public ssh_key to remotely connect to your EC2 instance.
 * @member {Array.<String>} ssh_keys
 */
ClusterAllOf.prototype['ssh_keys'] = undefined;
/**
 * @member {Array.<module:model/ClusterFeature>} features
 */
ClusterAllOf.prototype['features'] = undefined;
/**
 * @member {module:model/ClusterDeploymentStatusEnum} deployment_status
 */
ClusterAllOf.prototype['deployment_status'] = undefined;




export default Cluster;

