/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomDomainResponse from './CustomDomainResponse';

/**
 * The CustomDomainResponseList model module.
 * @module model/CustomDomainResponseList
 * @version 1.0.1
 */
class CustomDomainResponseList {
    /**
     * Constructs a new <code>CustomDomainResponseList</code>.
     * @alias module:model/CustomDomainResponseList
     */
    constructor() { 
        
        CustomDomainResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomDomainResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomDomainResponseList} obj Optional instance to populate.
     * @return {module:model/CustomDomainResponseList} The populated <code>CustomDomainResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDomainResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CustomDomainResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CustomDomainResponse>} results
 */
CustomDomainResponseList.prototype['results'] = undefined;






export default CustomDomainResponseList;

