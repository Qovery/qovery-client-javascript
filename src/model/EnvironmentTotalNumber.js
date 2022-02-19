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
 * The EnvironmentTotalNumber model module.
 * @module model/EnvironmentTotalNumber
 * @version 1.0.3
 */
class EnvironmentTotalNumber {
    /**
     * Constructs a new <code>EnvironmentTotalNumber</code>.
     * @alias module:model/EnvironmentTotalNumber
     */
    constructor() { 
        
        EnvironmentTotalNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentTotalNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentTotalNumber} obj Optional instance to populate.
     * @return {module:model/EnvironmentTotalNumber} The populated <code>EnvironmentTotalNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentTotalNumber();

            if (data.hasOwnProperty('environment_total_number')) {
                obj['environment_total_number'] = ApiClient.convertToType(data['environment_total_number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} environment_total_number
 */
EnvironmentTotalNumber.prototype['environment_total_number'] = undefined;






export default EnvironmentTotalNumber;

