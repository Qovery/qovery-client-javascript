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
import MetricCPUDatapointResponse from './MetricCPUDatapointResponse';

/**
 * The MetricCPUResponse model module.
 * @module model/MetricCPUResponse
 * @version 1.0.2
 */
class MetricCPUResponse {
    /**
     * Constructs a new <code>MetricCPUResponse</code>.
     * @alias module:model/MetricCPUResponse
     * @param instanceName {String} 
     * @param data {Array.<module:model/MetricCPUDatapointResponse>} 
     */
    constructor(instanceName, data) { 
        
        MetricCPUResponse.initialize(this, instanceName, data);
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
     * Constructs a <code>MetricCPUResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricCPUResponse} obj Optional instance to populate.
     * @return {module:model/MetricCPUResponse} The populated <code>MetricCPUResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricCPUResponse();

            if (data.hasOwnProperty('instance_name')) {
                obj['instance_name'] = ApiClient.convertToType(data['instance_name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [MetricCPUDatapointResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} instance_name
 */
MetricCPUResponse.prototype['instance_name'] = undefined;

/**
 * @member {Array.<module:model/MetricCPUDatapointResponse>} data
 */
MetricCPUResponse.prototype['data'] = undefined;






export default MetricCPUResponse;

