/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ClusterFeatureRequestFeatures model module.
 * @module model/ClusterFeatureRequestFeatures
 * @version 1.0.0
 */
class ClusterFeatureRequestFeatures {
    /**
     * Constructs a new <code>ClusterFeatureRequestFeatures</code>.
     * @alias module:model/ClusterFeatureRequestFeatures
     */
    constructor() { 
        
        ClusterFeatureRequestFeatures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterFeatureRequestFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterFeatureRequestFeatures} obj Optional instance to populate.
     * @return {module:model/ClusterFeatureRequestFeatures} The populated <code>ClusterFeatureRequestFeatures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterFeatureRequestFeatures();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ClusterFeatureRequestFeatures.prototype['id'] = undefined;

/**
 * @member {String} value
 */
ClusterFeatureRequestFeatures.prototype['value'] = undefined;






export default ClusterFeatureRequestFeatures;

