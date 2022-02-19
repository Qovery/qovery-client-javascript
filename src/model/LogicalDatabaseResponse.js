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
import BaseResponse from './BaseResponse';
import LogicalDatabaseRequest from './LogicalDatabaseRequest';
import ReferenceObject from './ReferenceObject';

/**
 * The LogicalDatabaseResponse model module.
 * @module model/LogicalDatabaseResponse
 * @version 1.0.1
 */
class LogicalDatabaseResponse {
    /**
     * Constructs a new <code>LogicalDatabaseResponse</code>.
     * @alias module:model/LogicalDatabaseResponse
     * @implements module:model/BaseResponse
     * @implements module:model/LogicalDatabaseRequest
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case insensitive
     */
    constructor(id, createdAt, name) { 
        BaseResponse.initialize(this, id, createdAt);LogicalDatabaseRequest.initialize(this, name);
        LogicalDatabaseResponse.initialize(this, id, createdAt, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>LogicalDatabaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogicalDatabaseResponse} obj Optional instance to populate.
     * @return {module:model/LogicalDatabaseResponse} The populated <code>LogicalDatabaseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogicalDatabaseResponse();
            BaseResponse.constructFromObject(data, obj);
            LogicalDatabaseRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('database')) {
                obj['database'] = ReferenceObject.constructFromObject(data['database']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * @member {module:model/ReferenceObject} database
 */
LogicalDatabaseResponse.prototype['database'] = undefined;

/**
 * @member {String} id
 */
LogicalDatabaseResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
LogicalDatabaseResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
LogicalDatabaseResponse.prototype['updated_at'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
LogicalDatabaseResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
LogicalDatabaseResponse.prototype['description'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;
// Implement LogicalDatabaseRequest interface:
/**
 * name is case insensitive
 * @member {String} name
 */
LogicalDatabaseRequest.prototype['name'] = undefined;
/**
 * @member {String} description
 */
LogicalDatabaseRequest.prototype['description'] = undefined;




export default LogicalDatabaseResponse;

