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
import EnvironmentStatsResponse from './EnvironmentStatsResponse';

/**
 * The EnvironmentStatsResponseList model module.
 * @module model/EnvironmentStatsResponseList
 * @version 1.0.3
 */
class EnvironmentStatsResponseList {
    /**
     * Constructs a new <code>EnvironmentStatsResponseList</code>.
     * @alias module:model/EnvironmentStatsResponseList
     */
    constructor() { 
        
        EnvironmentStatsResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentStatsResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentStatsResponseList} obj Optional instance to populate.
     * @return {module:model/EnvironmentStatsResponseList} The populated <code>EnvironmentStatsResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentStatsResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [EnvironmentStatsResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnvironmentStatsResponse>} results
 */
EnvironmentStatsResponseList.prototype['results'] = undefined;






export default EnvironmentStatsResponseList;

