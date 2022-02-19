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
import CostResponse from './CostResponse';

/**
 * The GenericObjectCurrentCostResponse model module.
 * @module model/GenericObjectCurrentCostResponse
 * @version 1.0.3
 */
class GenericObjectCurrentCostResponse {
    /**
     * Constructs a new <code>GenericObjectCurrentCostResponse</code>.
     * @alias module:model/GenericObjectCurrentCostResponse
     * @param id {String} 
     * @param name {String} 
     * @param consumedTimeInSeconds {Number} 
     * @param cost {module:model/CostResponse} 
     */
    constructor(id, name, consumedTimeInSeconds, cost) { 
        
        GenericObjectCurrentCostResponse.initialize(this, id, name, consumedTimeInSeconds, cost);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, consumedTimeInSeconds, cost) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['consumed_time_in_seconds'] = consumedTimeInSeconds;
        obj['cost'] = cost;
    }

    /**
     * Constructs a <code>GenericObjectCurrentCostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericObjectCurrentCostResponse} obj Optional instance to populate.
     * @return {module:model/GenericObjectCurrentCostResponse} The populated <code>GenericObjectCurrentCostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericObjectCurrentCostResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('consumed_time_in_seconds')) {
                obj['consumed_time_in_seconds'] = ApiClient.convertToType(data['consumed_time_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = CostResponse.constructFromObject(data['cost']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GenericObjectCurrentCostResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GenericObjectCurrentCostResponse.prototype['name'] = undefined;

/**
 * @member {Number} consumed_time_in_seconds
 */
GenericObjectCurrentCostResponse.prototype['consumed_time_in_seconds'] = undefined;

/**
 * @member {module:model/CostResponse} cost
 */
GenericObjectCurrentCostResponse.prototype['cost'] = undefined;






export default GenericObjectCurrentCostResponse;

