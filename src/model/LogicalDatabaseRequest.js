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

/**
 * The LogicalDatabaseRequest model module.
 * @module model/LogicalDatabaseRequest
 * @version 1.0.3
 */
class LogicalDatabaseRequest {
    /**
     * Constructs a new <code>LogicalDatabaseRequest</code>.
     * @alias module:model/LogicalDatabaseRequest
     * @param name {String} name is case insensitive
     */
    constructor(name) { 
        
        LogicalDatabaseRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>LogicalDatabaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogicalDatabaseRequest} obj Optional instance to populate.
     * @return {module:model/LogicalDatabaseRequest} The populated <code>LogicalDatabaseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogicalDatabaseRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * name is case insensitive
 * @member {String} name
 */
LogicalDatabaseRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
LogicalDatabaseRequest.prototype['description'] = undefined;






export default LogicalDatabaseRequest;

