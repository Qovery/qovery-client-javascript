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
 * The EnvironmentLogsMessage model module.
 * @module model/EnvironmentLogsMessage
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentLogsMessage {
    /**
     * Constructs a new <code>EnvironmentLogsMessage</code>.
     * @alias module:model/EnvironmentLogsMessage
     */
    constructor() { 
        
        EnvironmentLogsMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentLogsMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogsMessage} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogsMessage} The populated <code>EnvironmentLogsMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogsMessage();

            if (data.hasOwnProperty('safe_message')) {
                obj['safe_message'] = ApiClient.convertToType(data['safe_message'], 'String');
            }
            if (data.hasOwnProperty('full_details')) {
                obj['full_details'] = ApiClient.convertToType(data['full_details'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvironmentLogsMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentLogsMessage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['safe_message'] && !(typeof data['safe_message'] === 'string' || data['safe_message'] instanceof String)) {
            throw new Error("Expected the field `safe_message` to be a primitive type in the JSON string but got " + data['safe_message']);
        }
        // ensure the json data is a string
        if (data['full_details'] && !(typeof data['full_details'] === 'string' || data['full_details'] instanceof String)) {
            throw new Error("Expected the field `full_details` to be a primitive type in the JSON string but got " + data['full_details']);
        }

        return true;
    }


}



/**
 * @member {String} safe_message
 */
EnvironmentLogsMessage.prototype['safe_message'] = undefined;

/**
 * @member {String} full_details
 */
EnvironmentLogsMessage.prototype['full_details'] = undefined;






export default EnvironmentLogsMessage;

