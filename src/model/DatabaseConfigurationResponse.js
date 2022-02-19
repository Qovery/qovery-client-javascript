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
import DatabaseVersionMode from './DatabaseVersionMode';

/**
 * The DatabaseConfigurationResponse model module.
 * @module model/DatabaseConfigurationResponse
 * @version 1.0.2
 */
class DatabaseConfigurationResponse {
    /**
     * Constructs a new <code>DatabaseConfigurationResponse</code>.
     * @alias module:model/DatabaseConfigurationResponse
     */
    constructor() { 
        
        DatabaseConfigurationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatabaseConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/DatabaseConfigurationResponse} The populated <code>DatabaseConfigurationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseConfigurationResponse();

            if (data.hasOwnProperty('database_type')) {
                obj['database_type'] = ApiClient.convertToType(data['database_type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], [DatabaseVersionMode]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DatabaseConfigurationResponse.DatabaseTypeEnum} database_type
 */
DatabaseConfigurationResponse.prototype['database_type'] = undefined;

/**
 * @member {Array.<module:model/DatabaseVersionMode>} version
 */
DatabaseConfigurationResponse.prototype['version'] = undefined;





/**
 * Allowed values for the <code>database_type</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseConfigurationResponse['DatabaseTypeEnum'] = {

    /**
     * value: "POSTGRESQL"
     * @const
     */
    "POSTGRESQL": "POSTGRESQL",

    /**
     * value: "MYSQL"
     * @const
     */
    "MYSQL": "MYSQL",

    /**
     * value: "MONGODB"
     * @const
     */
    "MONGODB": "MONGODB",

    /**
     * value: "REDIS"
     * @const
     */
    "REDIS": "REDIS"
};



export default DatabaseConfigurationResponse;

