/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
import EnvironmentApplicationsCurrentScaleResponse from './EnvironmentApplicationsCurrentScaleResponse';

/**
 * The EnvironmentApplicationsCurrentScaleResponseList model module.
 * @module model/EnvironmentApplicationsCurrentScaleResponseList
 * @version 1.0.0
 */
class EnvironmentApplicationsCurrentScaleResponseList {
    /**
     * Constructs a new <code>EnvironmentApplicationsCurrentScaleResponseList</code>.
     * @alias module:model/EnvironmentApplicationsCurrentScaleResponseList
     */
    constructor() { 
        
        EnvironmentApplicationsCurrentScaleResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentApplicationsCurrentScaleResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentApplicationsCurrentScaleResponseList} obj Optional instance to populate.
     * @return {module:model/EnvironmentApplicationsCurrentScaleResponseList} The populated <code>EnvironmentApplicationsCurrentScaleResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentApplicationsCurrentScaleResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [EnvironmentApplicationsCurrentScaleResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnvironmentApplicationsCurrentScaleResponse>} results
 */
EnvironmentApplicationsCurrentScaleResponseList.prototype['results'] = undefined;






export default EnvironmentApplicationsCurrentScaleResponseList;

