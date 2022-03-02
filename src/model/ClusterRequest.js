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
import Cluster from './Cluster';
import ClusterFeatureRequest from './ClusterFeatureRequest';
import ClusterFeatureRequestFeatures from './ClusterFeatureRequestFeatures';

/**
 * The ClusterRequest model module.
 * @module model/ClusterRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterRequest {
    /**
     * Constructs a new <code>ClusterRequest</code>.
     * @alias module:model/ClusterRequest
     * @implements module:model/Cluster
     * @implements module:model/ClusterFeatureRequest
     * @param name {String} name is case-insensitive
     * @param cloudProvider {module:model/ClusterRequest.CloudProviderEnum} 
     * @param region {String} 
     */
    constructor(name, cloudProvider, region) { 
        Cluster.initialize(this, name, cloudProvider, region);ClusterFeatureRequest.initialize(this);
        ClusterRequest.initialize(this, name, cloudProvider, region);
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
     * Constructs a <code>ClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRequest} obj Optional instance to populate.
     * @return {module:model/ClusterRequest} The populated <code>ClusterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRequest();
            Cluster.constructFromObject(data, obj);
            ClusterFeatureRequest.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [ClusterFeatureRequestFeatures]);
            }
        }
        return obj;
    }


}

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
 * @member {module:model/ClusterRequest.CloudProviderEnum} cloud_provider
 */
ClusterRequest.prototype['cloud_provider'] = undefined;

/**
 * @member {String} region
 */
ClusterRequest.prototype['region'] = undefined;

/**
 * @member {Boolean} auto_update
 */
ClusterRequest.prototype['auto_update'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ClusterRequest.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ClusterRequest.prototype['memory'] = 256;

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
 * @member {Array.<module:model/ClusterFeatureRequestFeatures>} features
 */
ClusterRequest.prototype['features'] = undefined;


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
// Implement ClusterFeatureRequest interface:
/**
 * @member {Array.<module:model/ClusterFeatureRequestFeatures>} features
 */
ClusterFeatureRequest.prototype['features'] = undefined;



/**
 * Allowed values for the <code>cloud_provider</code> property.
 * @enum {String}
 * @readonly
 */
ClusterRequest['CloudProviderEnum'] = {

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



export default ClusterRequest;

