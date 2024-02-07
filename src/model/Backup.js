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
import BackupRequest from './BackupRequest';
import Base from './Base';
import Status from './Status';

/**
 * The Backup model module.
 * @module model/Backup
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Backup {
    /**
     * Constructs a new <code>Backup</code>.
     * @alias module:model/Backup
     * @implements module:model/Base
     * @implements module:model/BackupRequest
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} 
     * @param message {String} 
     */
    constructor(id, createdAt, name, message) { 
        Base.initialize(this, id, createdAt);BackupRequest.initialize(this, name, message);
        Backup.initialize(this, id, createdAt, name, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, message) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>Backup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Backup} obj Optional instance to populate.
     * @return {module:model/Backup} The populated <code>Backup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Backup();
            Base.constructFromObject(data, obj);
            BackupRequest.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Backup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Backup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Backup.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          Status.validateJSON(data['status']);
        }

        return true;
    }


}

Backup.RequiredProperties = ["id", "created_at", "name", "message"];

/**
 * @member {String} id
 */
Backup.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Backup.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Backup.prototype['updated_at'] = undefined;

/**
 * @member {String} name
 */
Backup.prototype['name'] = undefined;

/**
 * @member {String} message
 */
Backup.prototype['message'] = undefined;

/**
 * @member {module:model/Status} status
 */
Backup.prototype['status'] = undefined;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;
// Implement BackupRequest interface:
/**
 * @member {String} name
 */
BackupRequest.prototype['name'] = undefined;
/**
 * @member {String} message
 */
BackupRequest.prototype['message'] = undefined;




export default Backup;

