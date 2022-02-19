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
import LogResponse from './LogResponse';

/**
 * The LogResponseList model module.
 * @module model/LogResponseList
 * @version 1.0.2
 */
class LogResponseList {
    /**
     * Constructs a new <code>LogResponseList</code>.
     * @alias module:model/LogResponseList
     */
    constructor() { 
        
        LogResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogResponseList} obj Optional instance to populate.
     * @return {module:model/LogResponseList} The populated <code>LogResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LogResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LogResponse>} results
 */
LogResponseList.prototype['results'] = undefined;






export default LogResponseList;

