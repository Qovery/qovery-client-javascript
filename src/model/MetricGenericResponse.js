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
import MetricGenericDatapointResponse from './MetricGenericDatapointResponse';

/**
 * The MetricGenericResponse model module.
 * @module model/MetricGenericResponse
 * @version 1.0.2
 */
class MetricGenericResponse {
    /**
     * Constructs a new <code>MetricGenericResponse</code>.
     * @alias module:model/MetricGenericResponse
     * @param instanceName {String} 
     * @param data {Array.<module:model/MetricGenericDatapointResponse>} 
     */
    constructor(instanceName, data) { 
        
        MetricGenericResponse.initialize(this, instanceName, data);
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
     * Constructs a <code>MetricGenericResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricGenericResponse} obj Optional instance to populate.
     * @return {module:model/MetricGenericResponse} The populated <code>MetricGenericResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricGenericResponse();

            if (data.hasOwnProperty('instance_name')) {
                obj['instance_name'] = ApiClient.convertToType(data['instance_name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [MetricGenericDatapointResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} instance_name
 */
MetricGenericResponse.prototype['instance_name'] = undefined;

/**
 * @member {Array.<module:model/MetricGenericDatapointResponse>} data
 */
MetricGenericResponse.prototype['data'] = undefined;






export default MetricGenericResponse;

