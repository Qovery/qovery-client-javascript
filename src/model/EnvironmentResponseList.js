/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnvironmentResponse from './EnvironmentResponse';

/**
 * The EnvironmentResponseList model module.
 * @module model/EnvironmentResponseList
 * @version 1.0.0
 */
class EnvironmentResponseList {
    /**
     * Constructs a new <code>EnvironmentResponseList</code>.
     * @alias module:model/EnvironmentResponseList
     */
    constructor() { 
        
        EnvironmentResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentResponseList} obj Optional instance to populate.
     * @return {module:model/EnvironmentResponseList} The populated <code>EnvironmentResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [EnvironmentResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnvironmentResponse>} results
 */
EnvironmentResponseList.prototype['results'] = undefined;






export default EnvironmentResponseList;

