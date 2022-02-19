/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MetricMemoryDatapointResponse from './MetricMemoryDatapointResponse';

/**
 * The MetricMemoryResponse model module.
 * @module model/MetricMemoryResponse
 * @version 1.0.1
 */
class MetricMemoryResponse {
    /**
     * Constructs a new <code>MetricMemoryResponse</code>.
     * @alias module:model/MetricMemoryResponse
     * @param instanceName {String} 
     * @param data {Array.<module:model/MetricMemoryDatapointResponse>} 
     */
    constructor(instanceName, data) { 
        
        MetricMemoryResponse.initialize(this, instanceName, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instanceName, data) { 
        obj['instance_name'] = instanceName;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>MetricMemoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricMemoryResponse} obj Optional instance to populate.
     * @return {module:model/MetricMemoryResponse} The populated <code>MetricMemoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricMemoryResponse();

            if (data.hasOwnProperty('instance_name')) {
                obj['instance_name'] = ApiClient.convertToType(data['instance_name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [MetricMemoryDatapointResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} instance_name
 */
MetricMemoryResponse.prototype['instance_name'] = undefined;

/**
 * @member {Array.<module:model/MetricMemoryDatapointResponse>} data
 */
MetricMemoryResponse.prototype['data'] = undefined;






export default MetricMemoryResponse;

