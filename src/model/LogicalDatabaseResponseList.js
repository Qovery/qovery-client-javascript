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
import LogicalDatabaseResponse from './LogicalDatabaseResponse';

/**
 * The LogicalDatabaseResponseList model module.
 * @module model/LogicalDatabaseResponseList
 * @version 1.0.2
 */
class LogicalDatabaseResponseList {
    /**
     * Constructs a new <code>LogicalDatabaseResponseList</code>.
     * @alias module:model/LogicalDatabaseResponseList
     */
    constructor() { 
        
        LogicalDatabaseResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogicalDatabaseResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogicalDatabaseResponseList} obj Optional instance to populate.
     * @return {module:model/LogicalDatabaseResponseList} The populated <code>LogicalDatabaseResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogicalDatabaseResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LogicalDatabaseResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LogicalDatabaseResponse>} results
 */
LogicalDatabaseResponseList.prototype['results'] = undefined;






export default LogicalDatabaseResponseList;

