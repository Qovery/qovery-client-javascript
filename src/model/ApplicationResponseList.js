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
import ApplicationResponse from './ApplicationResponse';

/**
 * The ApplicationResponseList model module.
 * @module model/ApplicationResponseList
 * @version 1.0.2
 */
class ApplicationResponseList {
    /**
     * Constructs a new <code>ApplicationResponseList</code>.
     * @alias module:model/ApplicationResponseList
     */
    constructor() { 
        
        ApplicationResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationResponseList} obj Optional instance to populate.
     * @return {module:model/ApplicationResponseList} The populated <code>ApplicationResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ApplicationResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ApplicationResponse>} results
 */
ApplicationResponseList.prototype['results'] = undefined;






export default ApplicationResponseList;

