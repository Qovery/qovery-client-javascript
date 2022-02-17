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
 * The DatabaseEditRequest model module.
 * @module model/DatabaseEditRequest
 * @version 1.0.0
 */
class DatabaseEditRequest {
    /**
     * Constructs a new <code>DatabaseEditRequest</code>.
     * @alias module:model/DatabaseEditRequest
     */
    constructor() { 
        
        DatabaseEditRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatabaseEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseEditRequest} obj Optional instance to populate.
     * @return {module:model/DatabaseEditRequest} The populated <code>DatabaseEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseEditRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * name is case-insensitive
 * @member {String} name
 */
DatabaseEditRequest.prototype['name'] = undefined;

/**
 * @member {String} version
 */
DatabaseEditRequest.prototype['version'] = undefined;

/**
 * @member {module:model/DatabaseEditRequest.AccessibilityEnum} accessibility
 */
DatabaseEditRequest.prototype['accessibility'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
DatabaseEditRequest.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
DatabaseEditRequest.prototype['memory'] = 256;

/**
 * unit is GB
 * @member {Number} storage
 */
DatabaseEditRequest.prototype['storage'] = undefined;





/**
 * Allowed values for the <code>accessibility</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseEditRequest['AccessibilityEnum'] = {

    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC",

    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE"
};



export default DatabaseEditRequest;

