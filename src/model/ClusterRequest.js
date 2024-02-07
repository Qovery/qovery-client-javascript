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
import CloudProviderEnum from './CloudProviderEnum';
import ClusterCloudProviderInfoRequest from './ClusterCloudProviderInfoRequest';
import ClusterRequestFeaturesInner from './ClusterRequestFeaturesInner';
import KubernetesEnum from './KubernetesEnum';

/**
 * The ClusterRequest model module.
 * @module model/ClusterRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterRequest {
    /**
     * Constructs a new <code>ClusterRequest</code>.
     * @alias module:model/ClusterRequest
     * @param name {String} name is case-insensitive
     * @param region {String} 
     * @param cloudProvider {module:model/CloudProviderEnum} 
     */
    constructor(name, region, cloudProvider) { 
        
        ClusterRequest.initialize(this, name, region, cloudProvider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, region, cloudProvider) { 
        obj['name'] = name;
        obj['region'] = region;
        obj['cloud_provider'] = cloudProvider;
    }

    /**
     * Constructs a <code>ClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRequest} obj Optional instance to populate.
     * @return {module:model/ClusterRequest} The populated <code>ClusterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRequest();

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
            if (data.hasOwnProperty('cloud_provider_credentials')) {
                obj['cloud_provider_credentials'] = ClusterCloudProviderInfoRequest.constructFromObject(data['cloud_provider_credentials']);
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
            if (data.hasOwnProperty('production')) {
                obj['production'] = ApiClient.convertToType(data['production'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh_keys')) {
                obj['ssh_keys'] = ApiClient.convertToType(data['ssh_keys'], ['String']);
            }
            if (data.hasOwnProperty('kubeconfig')) {
                obj['kubeconfig'] = ApiClient.convertToType(data['kubeconfig'], 'String');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [ClusterRequestFeaturesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClusterRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClusterRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClusterRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // validate the optional field `cloud_provider_credentials`
        if (data['cloud_provider_credentials']) { // data not null
          ClusterCloudProviderInfoRequest.validateJSON(data['cloud_provider_credentials']);
        }
        // ensure the json data is a string
        if (data['instance_type'] && !(typeof data['instance_type'] === 'string' || data['instance_type'] instanceof String)) {
            throw new Error("Expected the field `instance_type` to be a primitive type in the JSON string but got " + data['instance_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ssh_keys'])) {
            throw new Error("Expected the field `ssh_keys` to be an array in the JSON data but got " + data['ssh_keys']);
        }
        // ensure the json data is a string
        if (data['kubeconfig'] && !(typeof data['kubeconfig'] === 'string' || data['kubeconfig'] instanceof String)) {
            throw new Error("Expected the field `kubeconfig` to be a primitive type in the JSON string but got " + data['kubeconfig']);
        }
        if (data['features']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['features'])) {
                throw new Error("Expected the field `features` to be an array in the JSON data but got " + data['features']);
            }
            // validate the optional field `features` (array)
            for (const item of data['features']) {
                ClusterRequestFeaturesInner.validateJSON(item);
            };
        }

        return true;
    }


}

ClusterRequest.RequiredProperties = ["name", "region", "cloud_provider"];

/**
 * name is case-insensitive
 * @member {String} name
 */
ClusterRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ClusterRequest.prototype['description'] = undefined;

/**
 * @member {String} region
 */
ClusterRequest.prototype['region'] = undefined;

/**
 * @member {module:model/CloudProviderEnum} cloud_provider
 */
ClusterRequest.prototype['cloud_provider'] = undefined;

/**
 * @member {module:model/ClusterCloudProviderInfoRequest} cloud_provider_credentials
 */
ClusterRequest.prototype['cloud_provider_credentials'] = undefined;

/**
 * @member {Number} min_running_nodes
 * @default 1
 */
ClusterRequest.prototype['min_running_nodes'] = 1;

/**
 * @member {Number} max_running_nodes
 * @default 1
 */
ClusterRequest.prototype['max_running_nodes'] = 1;

/**
 * Unit is in GB. The disk size to be used for the node configuration
 * @member {Number} disk_size
 * @default 40
 */
ClusterRequest.prototype['disk_size'] = 40;

/**
 * the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType
 * @member {String} instance_type
 */
ClusterRequest.prototype['instance_type'] = undefined;

/**
 * @member {module:model/KubernetesEnum} kubernetes
 */
ClusterRequest.prototype['kubernetes'] = undefined;

/**
 * specific flag to indicate that this cluster is a production one
 * @member {Boolean} production
 */
ClusterRequest.prototype['production'] = undefined;

/**
 * Indicate your public ssh_key to remotely connect to your EC2 instance.
 * @member {Array.<String>} ssh_keys
 */
ClusterRequest.prototype['ssh_keys'] = undefined;

/**
 * If the cluster is a self managed one. The kubeconfig to use to connect to it
 * @member {String} kubeconfig
 */
ClusterRequest.prototype['kubeconfig'] = undefined;

/**
 * @member {Array.<module:model/ClusterRequestFeaturesInner>} features
 */
ClusterRequest.prototype['features'] = undefined;






export default ClusterRequest;

