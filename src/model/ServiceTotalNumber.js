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
 * The ServiceTotalNumber model module.
 * @module model/ServiceTotalNumber
 * @version 1.0.2
 */
class ServiceTotalNumber {
    /**
     * Constructs a new <code>ServiceTotalNumber</code>.
     * @alias module:model/ServiceTotalNumber
     */
    constructor() { 
        
        ServiceTotalNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceTotalNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceTotalNumber} obj Optional instance to populate.
     * @return {module:model/ServiceTotalNumber} The populated <code>ServiceTotalNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceTotalNumber();

            if (data.hasOwnProperty('service_total_number')) {
                obj['service_total_number'] = ApiClient.convertToType(data['service_total_number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} service_total_number
 */
ServiceTotalNumber.prototype['service_total_number'] = undefined;






export default ServiceTotalNumber;

