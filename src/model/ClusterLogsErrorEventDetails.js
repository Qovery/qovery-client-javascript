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
import ClusterLogsErrorEventDetailsTransmitter from './ClusterLogsErrorEventDetailsTransmitter';
import ClusterLogsErrorEventDetailsUnderlyingError from './ClusterLogsErrorEventDetailsUnderlyingError';

/**
 * The ClusterLogsErrorEventDetails model module.
 * @module model/ClusterLogsErrorEventDetails
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterLogsErrorEventDetails {
    /**
     * Constructs a new <code>ClusterLogsErrorEventDetails</code>.
     * @alias module:model/ClusterLogsErrorEventDetails
     */
    constructor() { 
        
        ClusterLogsErrorEventDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterLogsErrorEventDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterLogsErrorEventDetails} obj Optional instance to populate.
     * @return {module:model/ClusterLogsErrorEventDetails} The populated <code>ClusterLogsErrorEventDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterLogsErrorEventDetails();

            if (data.hasOwnProperty('provider_kind')) {
                obj['provider_kind'] = ApiClient.convertToType(data['provider_kind'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('transmitter')) {
                obj['transmitter'] = ClusterLogsErrorEventDetailsTransmitter.constructFromObject(data['transmitter']);
            }
            if (data.hasOwnProperty('underlying_error')) {
                obj['underlying_error'] = ClusterLogsErrorEventDetailsUnderlyingError.constructFromObject(data['underlying_error']);
            }
        }
        return obj;
    }


}

/**
 * cloud provider used
 * @member {String} provider_kind
 */
ClusterLogsErrorEventDetails.prototype['provider_kind'] = undefined;

/**
 * @member {String} region
 */
ClusterLogsErrorEventDetails.prototype['region'] = undefined;

/**
 * @member {module:model/ClusterLogsErrorEventDetailsTransmitter} transmitter
 */
ClusterLogsErrorEventDetails.prototype['transmitter'] = undefined;

/**
 * @member {module:model/ClusterLogsErrorEventDetailsUnderlyingError} underlying_error
 */
ClusterLogsErrorEventDetails.prototype['underlying_error'] = undefined;






export default ClusterLogsErrorEventDetails;

