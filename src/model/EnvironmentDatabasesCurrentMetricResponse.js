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
import EnvironmentDatabasesCurrentMetricResponseCpu from './EnvironmentDatabasesCurrentMetricResponseCpu';
import EnvironmentDatabasesCurrentMetricResponseMemory from './EnvironmentDatabasesCurrentMetricResponseMemory';
import EnvironmentDatabasesCurrentMetricResponseStorage from './EnvironmentDatabasesCurrentMetricResponseStorage';

/**
 * The EnvironmentDatabasesCurrentMetricResponse model module.
 * @module model/EnvironmentDatabasesCurrentMetricResponse
 * @version 1.0.1
 */
class EnvironmentDatabasesCurrentMetricResponse {
    /**
     * Constructs a new <code>EnvironmentDatabasesCurrentMetricResponse</code>.
     * @alias module:model/EnvironmentDatabasesCurrentMetricResponse
     */
    constructor() { 
        
        EnvironmentDatabasesCurrentMetricResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentDatabasesCurrentMetricResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDatabasesCurrentMetricResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentDatabasesCurrentMetricResponse} The populated <code>EnvironmentDatabasesCurrentMetricResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDatabasesCurrentMetricResponse();

            if (data.hasOwnProperty('database')) {
                obj['database'] = ApiClient.convertToType(data['database'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = EnvironmentDatabasesCurrentMetricResponseCpu.constructFromObject(data['cpu']);
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = EnvironmentDatabasesCurrentMetricResponseMemory.constructFromObject(data['memory']);
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = EnvironmentDatabasesCurrentMetricResponseStorage.constructFromObject(data['storage']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} database
 */
EnvironmentDatabasesCurrentMetricResponse.prototype['database'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricResponseCpu} cpu
 */
EnvironmentDatabasesCurrentMetricResponse.prototype['cpu'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricResponseMemory} memory
 */
EnvironmentDatabasesCurrentMetricResponse.prototype['memory'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricResponseStorage} storage
 */
EnvironmentDatabasesCurrentMetricResponse.prototype['storage'] = undefined;






export default EnvironmentDatabasesCurrentMetricResponse;

