/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Cluster model module.
 * @module model/Cluster
 * @version 1.0.2
 */
class Cluster {
    /**
     * Constructs a new <code>Cluster</code>.
     * @alias module:model/Cluster
     * @param name {String} name is case-insensitive
     * @param cloudProvider {module:model/Cluster.CloudProviderEnum} 
     * @param region {String} 
     */
    constructor(name, cloudProvider, region) { 
        
        Cluster.initialize(this, name, cloudProvider, region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, cloudProvider, region) { 
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
        }
        return obj;
    }


}

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





/**
 * Allowed values for the <code>cloud_provider</code> property.
 * @enum {String}
 * @readonly
 */
Cluster['CloudProviderEnum'] = {

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



export default Cluster;

