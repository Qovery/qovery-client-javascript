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
 * The ClusterLogsMessage model module.
 * @module model/ClusterLogsMessage
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterLogsMessage {
    /**
     * Constructs a new <code>ClusterLogsMessage</code>.
     * @alias module:model/ClusterLogsMessage
     */
    constructor() { 
        
        ClusterLogsMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterLogsMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterLogsMessage} obj Optional instance to populate.
     * @return {module:model/ClusterLogsMessage} The populated <code>ClusterLogsMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterLogsMessage();

            if (data.hasOwnProperty('safe_message')) {
                obj['safe_message'] = ApiClient.convertToType(data['safe_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * log global message
 * @member {String} safe_message
 */
ClusterLogsMessage.prototype['safe_message'] = undefined;






export default ClusterLogsMessage;
