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
import EnvironmentDatabasesCurrentMetricResponse from './EnvironmentDatabasesCurrentMetricResponse';

/**
 * The EnvironmentDatabasesCurrentMetricResponseList model module.
 * @module model/EnvironmentDatabasesCurrentMetricResponseList
 * @version 1.0.3
 */
class EnvironmentDatabasesCurrentMetricResponseList {
    /**
     * Constructs a new <code>EnvironmentDatabasesCurrentMetricResponseList</code>.
     * @alias module:model/EnvironmentDatabasesCurrentMetricResponseList
     */
    constructor() { 
        
        EnvironmentDatabasesCurrentMetricResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentDatabasesCurrentMetricResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDatabasesCurrentMetricResponseList} obj Optional instance to populate.
     * @return {module:model/EnvironmentDatabasesCurrentMetricResponseList} The populated <code>EnvironmentDatabasesCurrentMetricResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDatabasesCurrentMetricResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [EnvironmentDatabasesCurrentMetricResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnvironmentDatabasesCurrentMetricResponse>} results
 */
EnvironmentDatabasesCurrentMetricResponseList.prototype['results'] = undefined;






export default EnvironmentDatabasesCurrentMetricResponseList;

