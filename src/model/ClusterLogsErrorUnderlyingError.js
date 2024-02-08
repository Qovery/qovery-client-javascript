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
 * The ClusterLogsErrorUnderlyingError model module.
 * @module model/ClusterLogsErrorUnderlyingError
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterLogsErrorUnderlyingError {
    /**
     * Constructs a new <code>ClusterLogsErrorUnderlyingError</code>.
     * @alias module:model/ClusterLogsErrorUnderlyingError
     */
    constructor() { 
        
        ClusterLogsErrorUnderlyingError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterLogsErrorUnderlyingError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterLogsErrorUnderlyingError} obj Optional instance to populate.
     * @return {module:model/ClusterLogsErrorUnderlyingError} The populated <code>ClusterLogsErrorUnderlyingError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterLogsErrorUnderlyingError();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * technical details about the error
 * @member {String} message
 */
ClusterLogsErrorUnderlyingError.prototype['message'] = undefined;






export default ClusterLogsErrorUnderlyingError;

