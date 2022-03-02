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
import ReferenceObject from './ReferenceObject';
import ServiceTotalNumber from './ServiceTotalNumber';

/**
 * The EnvironmentStatsResponse model module.
 * @module model/EnvironmentStatsResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentStatsResponse {
    /**
     * Constructs a new <code>EnvironmentStatsResponse</code>.
     * @alias module:model/EnvironmentStatsResponse
     * @implements module:model/ReferenceObject
     * @implements module:model/ServiceTotalNumber
     * @param id {String} 
     */
    constructor(id) { 
        ReferenceObject.initialize(this, id);ServiceTotalNumber.initialize(this);
        EnvironmentStatsResponse.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>EnvironmentStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentStatsResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentStatsResponse} The populated <code>EnvironmentStatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentStatsResponse();
            ReferenceObject.constructFromObject(data, obj);
            ServiceTotalNumber.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('service_total_number')) {
                obj['service_total_number'] = ApiClient.convertToType(data['service_total_number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EnvironmentStatsResponse.prototype['id'] = undefined;

/**
 * @member {Number} service_total_number
 */
EnvironmentStatsResponse.prototype['service_total_number'] = undefined;


// Implement ReferenceObject interface:
/**
 * @member {String} id
 */
ReferenceObject.prototype['id'] = undefined;
// Implement ServiceTotalNumber interface:
/**
 * @member {Number} service_total_number
 */
ServiceTotalNumber.prototype['service_total_number'] = undefined;




export default EnvironmentStatsResponse;

