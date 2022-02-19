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
 * The DatabaseVersionMode model module.
 * @module model/DatabaseVersionMode
 * @version 1.0.2
 */
class DatabaseVersionMode {
    /**
     * Constructs a new <code>DatabaseVersionMode</code>.
     * @alias module:model/DatabaseVersionMode
     */
    constructor() { 
        
        DatabaseVersionMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatabaseVersionMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseVersionMode} obj Optional instance to populate.
     * @return {module:model/DatabaseVersionMode} The populated <code>DatabaseVersionMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseVersionMode();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('supported_mode')) {
                obj['supported_mode'] = ApiClient.convertToType(data['supported_mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DatabaseVersionMode.prototype['name'] = undefined;

/**
 * @member {module:model/DatabaseVersionMode.SupportedModeEnum} supported_mode
 */
DatabaseVersionMode.prototype['supported_mode'] = undefined;





/**
 * Allowed values for the <code>supported_mode</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseVersionMode['SupportedModeEnum'] = {

    /**
     * value: "CONTAINER"
     * @const
     */
    "CONTAINER": "CONTAINER",

    /**
     * value: "MANAGED"
     * @const
     */
    "MANAGED": "MANAGED"
};



export default DatabaseVersionMode;

