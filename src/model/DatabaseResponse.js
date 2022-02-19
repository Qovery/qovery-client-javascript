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
import BaseResponse from './BaseResponse';
import DatabaseRequest from './DatabaseRequest';
import ReferenceObject from './ReferenceObject';

/**
 * The DatabaseResponse model module.
 * @module model/DatabaseResponse
 * @version 1.0.3
 */
class DatabaseResponse {
    /**
     * Constructs a new <code>DatabaseResponse</code>.
     * @alias module:model/DatabaseResponse
     * @implements module:model/BaseResponse
     * @implements module:model/DatabaseRequest
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case insensitive
     * @param type {module:model/DatabaseResponse.TypeEnum} 
     * @param version {String} 
     * @param mode {module:model/DatabaseResponse.ModeEnum} 
     */
    constructor(id, createdAt, name, type, version, mode) { 
        BaseResponse.initialize(this, id, createdAt);DatabaseRequest.initialize(this, name, type, version, mode);
        DatabaseResponse.initialize(this, id, createdAt, name, type, version, mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, type, version, mode) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
        obj['type'] = type;
        obj['version'] = version;
        obj['mode'] = mode;
    }

    /**
     * Constructs a <code>DatabaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseResponse} obj Optional instance to populate.
     * @return {module:model/DatabaseResponse} The populated <code>DatabaseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseResponse();
            BaseResponse.constructFromObject(data, obj);
            DatabaseRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('maximum_cpu')) {
                obj['maximum_cpu'] = ApiClient.convertToType(data['maximum_cpu'], 'Number');
            }
            if (data.hasOwnProperty('maximum_memory')) {
                obj['maximum_memory'] = ApiClient.convertToType(data['maximum_memory'], 'Number');
            }
            if (data.hasOwnProperty('disk_encrypted')) {
                obj['disk_encrypted'] = ApiClient.convertToType(data['disk_encrypted'], 'Boolean');
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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReferenceObject} environment
 */
DatabaseResponse.prototype['environment'] = undefined;

/**
 * @member {String} host
 */
DatabaseResponse.prototype['host'] = undefined;

/**
 * @member {Number} port
 */
DatabaseResponse.prototype['port'] = undefined;

/**
 * Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 * @default 250
 */
DatabaseResponse.prototype['maximum_cpu'] = 250;

/**
 * Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 * @default 256
 */
DatabaseResponse.prototype['maximum_memory'] = 256;

/**
 * indicates if the database disk is encrypted or not
 * @member {Boolean} disk_encrypted
 */
DatabaseResponse.prototype['disk_encrypted'] = undefined;

/**
 * @member {String} id
 */
DatabaseResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
DatabaseResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DatabaseResponse.prototype['updated_at'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
DatabaseResponse.prototype['name'] = undefined;

/**
 * @member {module:model/DatabaseResponse.TypeEnum} type
 */
DatabaseResponse.prototype['type'] = undefined;

/**
 * @member {String} version
 */
DatabaseResponse.prototype['version'] = undefined;

/**
 * @member {module:model/DatabaseResponse.ModeEnum} mode
 */
DatabaseResponse.prototype['mode'] = undefined;

/**
 * @member {module:model/DatabaseResponse.AccessibilityEnum} accessibility
 * @default 'PRIVATE'
 */
DatabaseResponse.prototype['accessibility'] = 'PRIVATE';

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
DatabaseResponse.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
DatabaseResponse.prototype['memory'] = 256;

/**
 * unit is MB
 * @member {Number} storage
 * @default 10240
 */
DatabaseResponse.prototype['storage'] = 10240;


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
// Implement DatabaseRequest interface:
/**
 * name is case insensitive
 * @member {String} name
 */
DatabaseRequest.prototype['name'] = undefined;
/**
 * @member {module:model/DatabaseRequest.TypeEnum} type
 */
DatabaseRequest.prototype['type'] = undefined;
/**
 * @member {String} version
 */
DatabaseRequest.prototype['version'] = undefined;
/**
 * @member {module:model/DatabaseRequest.ModeEnum} mode
 */
DatabaseRequest.prototype['mode'] = undefined;
/**
 * @member {module:model/DatabaseRequest.AccessibilityEnum} accessibility
 * @default 'PRIVATE'
 */
DatabaseRequest.prototype['accessibility'] = 'PRIVATE';
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
DatabaseRequest.prototype['cpu'] = 250;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
DatabaseRequest.prototype['memory'] = 256;
/**
 * unit is MB
 * @member {Number} storage
 * @default 10240
 */
DatabaseRequest.prototype['storage'] = 10240;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseResponse['TypeEnum'] = {

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


/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseResponse['ModeEnum'] = {

    /**
     * value: "MANAGED"
     * @const
     */
    "MANAGED": "MANAGED",

    /**
     * value: "CONTAINER"
     * @const
     */
    "CONTAINER": "CONTAINER"
};


/**
 * Allowed values for the <code>accessibility</code> property.
 * @enum {String}
 * @readonly
 */
DatabaseResponse['AccessibilityEnum'] = {

    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC",

    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE"
};



export default DatabaseResponse;

