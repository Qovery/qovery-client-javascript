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
import DatabaseResponse from './DatabaseResponse';

/**
 * The DatabaseResponseList model module.
 * @module model/DatabaseResponseList
 * @version 1.0.3
 */
class DatabaseResponseList {
    /**
     * Constructs a new <code>DatabaseResponseList</code>.
     * @alias module:model/DatabaseResponseList
     */
    constructor() { 
        
        DatabaseResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatabaseResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseResponseList} obj Optional instance to populate.
     * @return {module:model/DatabaseResponseList} The populated <code>DatabaseResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DatabaseResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DatabaseResponse>} results
 */
DatabaseResponseList.prototype['results'] = undefined;






export default DatabaseResponseList;

