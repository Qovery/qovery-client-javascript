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
import EnvironmentLogsDetails from './EnvironmentLogsDetails';
import EnvironmentLogsError from './EnvironmentLogsError';
import EnvironmentLogsMessage from './EnvironmentLogsMessage';

/**
 * The EnvironmentLogs model module.
 * @module model/EnvironmentLogs
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentLogs {
    /**
     * Constructs a new <code>EnvironmentLogs</code>.
     * @alias module:model/EnvironmentLogs
     * @param type {String} 
     * @param timestamp {Date} 
     * @param details {module:model/EnvironmentLogsDetails} 
     */
    constructor(type, timestamp, details) { 
        
        EnvironmentLogs.initialize(this, type, timestamp, details);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, timestamp, details) { 
        obj['type'] = type;
        obj['timestamp'] = timestamp;
        obj['details'] = details;
    }

    /**
     * Constructs a <code>EnvironmentLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogs} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogs} The populated <code>EnvironmentLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogs();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = EnvironmentLogsDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = EnvironmentLogsError.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = EnvironmentLogsMessage.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvironmentLogs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentLogs</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EnvironmentLogs.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `details`
        if (data['details']) { // data not null
          EnvironmentLogsDetails.validateJSON(data['details']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          EnvironmentLogsError.validateJSON(data['error']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          EnvironmentLogsMessage.validateJSON(data['message']);
        }

        return true;
    }


}

EnvironmentLogs.RequiredProperties = ["type", "timestamp", "details"];

/**
 * @member {String} type
 */
EnvironmentLogs.prototype['type'] = undefined;

/**
 * @member {Date} timestamp
 */
EnvironmentLogs.prototype['timestamp'] = undefined;

/**
 * @member {module:model/EnvironmentLogsDetails} details
 */
EnvironmentLogs.prototype['details'] = undefined;

/**
 * @member {module:model/EnvironmentLogsError} error
 */
EnvironmentLogs.prototype['error'] = undefined;

/**
 * @member {module:model/EnvironmentLogsMessage} message
 */
EnvironmentLogs.prototype['message'] = undefined;






export default EnvironmentLogs;

