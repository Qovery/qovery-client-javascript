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

/**
 * The MetricCPUDatapointResponse model module.
 * @module model/MetricCPUDatapointResponse
 * @version 1.0.2
 */
class MetricCPUDatapointResponse {
    /**
     * Constructs a new <code>MetricCPUDatapointResponse</code>.
     * @alias module:model/MetricCPUDatapointResponse
     * @param createdAt {Date} 
     * @param consumedInNumber {Number} 
     * @param consumedInPercent {Number} 
     */
    constructor(createdAt, consumedInNumber, consumedInPercent) { 
        
        MetricCPUDatapointResponse.initialize(this, createdAt, consumedInNumber, consumedInPercent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, consumedInNumber, consumedInPercent) { 
        obj['created_at'] = createdAt;
        obj['consumed_in_number'] = consumedInNumber;
        obj['consumed_in_percent'] = consumedInPercent;
    }

    /**
     * Constructs a <code>MetricCPUDatapointResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricCPUDatapointResponse} obj Optional instance to populate.
     * @return {module:model/MetricCPUDatapointResponse} The populated <code>MetricCPUDatapointResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricCPUDatapointResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('requested_in_number')) {
                obj['requested_in_number'] = ApiClient.convertToType(data['requested_in_number'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_number')) {
                obj['consumed_in_number'] = ApiClient.convertToType(data['consumed_in_number'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_percent')) {
                obj['consumed_in_percent'] = ApiClient.convertToType(data['consumed_in_percent'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
MetricCPUDatapointResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} requested_in_number
 */
MetricCPUDatapointResponse.prototype['requested_in_number'] = undefined;

/**
 * @member {Number} consumed_in_number
 */
MetricCPUDatapointResponse.prototype['consumed_in_number'] = undefined;

/**
 * @member {Number} consumed_in_percent
 */
MetricCPUDatapointResponse.prototype['consumed_in_percent'] = undefined;






export default MetricCPUDatapointResponse;

