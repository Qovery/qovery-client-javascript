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
import EnvironmentLogsDetailsStage from './EnvironmentLogsDetailsStage';
import EnvironmentLogsDetailsTransmitter from './EnvironmentLogsDetailsTransmitter';

/**
 * The EnvironmentLogsDetails model module.
 * @module model/EnvironmentLogsDetails
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentLogsDetails {
    /**
     * Constructs a new <code>EnvironmentLogsDetails</code>.
     * @alias module:model/EnvironmentLogsDetails
     */
    constructor() { 
        
        EnvironmentLogsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentLogsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogsDetails} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogsDetails} The populated <code>EnvironmentLogsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogsDetails();

            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('execution_id')) {
                obj['execution_id'] = ApiClient.convertToType(data['execution_id'], 'String');
            }
            if (data.hasOwnProperty('transmitter')) {
                obj['transmitter'] = EnvironmentLogsDetailsTransmitter.constructFromObject(data['transmitter']);
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = EnvironmentLogsDetailsStage.constructFromObject(data['stage']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvironmentLogsDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentLogsDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }
        // ensure the json data is a string
        if (data['cluster_id'] && !(typeof data['cluster_id'] === 'string' || data['cluster_id'] instanceof String)) {
            throw new Error("Expected the field `cluster_id` to be a primitive type in the JSON string but got " + data['cluster_id']);
        }
        // ensure the json data is a string
        if (data['execution_id'] && !(typeof data['execution_id'] === 'string' || data['execution_id'] instanceof String)) {
            throw new Error("Expected the field `execution_id` to be a primitive type in the JSON string but got " + data['execution_id']);
        }
        // validate the optional field `transmitter`
        if (data['transmitter']) { // data not null
          EnvironmentLogsDetailsTransmitter.validateJSON(data['transmitter']);
        }
        // validate the optional field `stage`
        if (data['stage']) { // data not null
          EnvironmentLogsDetailsStage.validateJSON(data['stage']);
        }

        return true;
    }


}



/**
 * @member {String} organization_id
 */
EnvironmentLogsDetails.prototype['organization_id'] = undefined;

/**
 * @member {String} cluster_id
 */
EnvironmentLogsDetails.prototype['cluster_id'] = undefined;

/**
 * @member {String} execution_id
 */
EnvironmentLogsDetails.prototype['execution_id'] = undefined;

/**
 * @member {module:model/EnvironmentLogsDetailsTransmitter} transmitter
 */
EnvironmentLogsDetails.prototype['transmitter'] = undefined;

/**
 * @member {module:model/EnvironmentLogsDetailsStage} stage
 */
EnvironmentLogsDetails.prototype['stage'] = undefined;






export default EnvironmentLogsDetails;

