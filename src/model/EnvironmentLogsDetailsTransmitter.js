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
 * The EnvironmentLogsDetailsTransmitter model module.
 * @module model/EnvironmentLogsDetailsTransmitter
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentLogsDetailsTransmitter {
    /**
     * Constructs a new <code>EnvironmentLogsDetailsTransmitter</code>.
     * @alias module:model/EnvironmentLogsDetailsTransmitter
     */
    constructor() { 
        
        EnvironmentLogsDetailsTransmitter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentLogsDetailsTransmitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogsDetailsTransmitter} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogsDetailsTransmitter} The populated <code>EnvironmentLogsDetailsTransmitter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogsDetailsTransmitter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EnvironmentLogsDetailsTransmitter.prototype['id'] = undefined;

/**
 * @member {String} name
 */
EnvironmentLogsDetailsTransmitter.prototype['name'] = undefined;

/**
 * @member {String} type
 */
EnvironmentLogsDetailsTransmitter.prototype['type'] = undefined;






export default EnvironmentLogsDetailsTransmitter;

