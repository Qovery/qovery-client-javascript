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
 * The CloneRequest model module.
 * @module model/CloneRequest
 * @version 1.0.3
 */
class CloneRequest {
    /**
     * Constructs a new <code>CloneRequest</code>.
     * @alias module:model/CloneRequest
     * @param name {String} name is case insensitive
     */
    constructor(name) { 
        
        CloneRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CloneRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloneRequest} obj Optional instance to populate.
     * @return {module:model/CloneRequest} The populated <code>CloneRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloneRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * name is case insensitive
 * @member {String} name
 */
CloneRequest.prototype['name'] = undefined;

/**
 * @member {String} cluster_id
 */
CloneRequest.prototype['cluster_id'] = undefined;

/**
 * @member {module:model/CloneRequest.ModeEnum} mode
 */
CloneRequest.prototype['mode'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
CloneRequest['ModeEnum'] = {

    /**
     * value: "PRODUCTION"
     * @const
     */
    "PRODUCTION": "PRODUCTION",

    /**
     * value: "DEVELOPMENT"
     * @const
     */
    "DEVELOPMENT": "DEVELOPMENT",

    /**
     * value: "STAGING"
     * @const
     */
    "STAGING": "STAGING",

    /**
     * value: "PREVIEW"
     * @const
     */
    "PREVIEW": "PREVIEW"
};



export default CloneRequest;

