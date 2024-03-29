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
import Base from './Base';
import DatabaseAccessibilityEnum from './DatabaseAccessibilityEnum';
import DatabaseAllOf from './DatabaseAllOf';
import DatabaseModeEnum from './DatabaseModeEnum';
import DatabaseRequest from './DatabaseRequest';
import DatabaseTypeEnum from './DatabaseTypeEnum';
import ReferenceObject from './ReferenceObject';

/**
 * The Database model module.
 * @module model/Database
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Database {
    /**
     * Constructs a new <code>Database</code>.
     * @alias module:model/Database
     * @implements module:model/Base
     * @implements module:model/DatabaseRequest
     * @implements module:model/DatabaseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case insensitive
     * @param type {module:model/DatabaseTypeEnum} 
     * @param version {String} 
     * @param mode {module:model/DatabaseModeEnum} 
     * @param environment {module:model/ReferenceObject} 
     */
    constructor(id, createdAt, name, type, version, mode, environment) { 
        Base.initialize(this, id, createdAt);DatabaseRequest.initialize(this, name, type, version, mode);DatabaseAllOf.initialize(this, environment);
        Database.initialize(this, id, createdAt, name, type, version, mode, environment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, type, version, mode, environment) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['name'] = name;
        obj['type'] = type;
        obj['version'] = version;
        obj['mode'] = mode;
        obj['environment'] = environment;
    }

    /**
     * Constructs a <code>Database</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Database} obj Optional instance to populate.
     * @return {module:model/Database} The populated <code>Database</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Database();
            Base.constructFromObject(data, obj);
            DatabaseRequest.constructFromObject(data, obj);
            DatabaseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('type')) {
                obj['type'] = DatabaseTypeEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = DatabaseModeEnum.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = DatabaseAccessibilityEnum.constructFromObject(data['accessibility']);
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'Number');
            }
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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Database.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Database.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Database.prototype['updated_at'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
Database.prototype['name'] = undefined;

/**
 * give a description to this database
 * @member {String} description
 */
Database.prototype['description'] = undefined;

/**
 * @member {module:model/DatabaseTypeEnum} type
 */
Database.prototype['type'] = undefined;

/**
 * @member {String} version
 */
Database.prototype['version'] = undefined;

/**
 * @member {module:model/DatabaseModeEnum} mode
 */
Database.prototype['mode'] = undefined;

/**
 * @member {module:model/DatabaseAccessibilityEnum} accessibility
 */
Database.prototype['accessibility'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu This field will be ignored for managed DB (instance type will be used instead). 
 * @member {Number} cpu
 * @default 250
 */
Database.prototype['cpu'] = 250;

/**
 * Database instance type to be used for this database. The list of values can be retrieved via the endpoint /{CloudProvider}/managedDatabase/instanceType/{region}/{dbType}. This field is null for container DB.
 * @member {String} instance_type
 */
Database.prototype['instance_type'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB This field will be ignored for managed DB (instance type will be used instead). Default value is linked to the database type: - MANAGED: `100` - CONTAINER   - POSTGRES: `100`   - REDIS: `100`   - MYSQL: `512`   - MONGODB: `256` 
 * @member {Number} memory
 */
Database.prototype['memory'] = undefined;

/**
 * unit is GB
 * @member {Number} storage
 * @default 10
 */
Database.prototype['storage'] = 10;

/**
 * @member {module:model/ReferenceObject} environment
 */
Database.prototype['environment'] = undefined;

/**
 * @member {String} host
 */
Database.prototype['host'] = undefined;

/**
 * @member {Number} port
 */
Database.prototype['port'] = undefined;

/**
 * Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
Database.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
Database.prototype['maximum_memory'] = undefined;

/**
 * indicates if the database disk is encrypted or not
 * @member {Boolean} disk_encrypted
 */
Database.prototype['disk_encrypted'] = undefined;


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
// Implement DatabaseRequest interface:
/**
 * name is case insensitive
 * @member {String} name
 */
DatabaseRequest.prototype['name'] = undefined;
/**
 * give a description to this database
 * @member {String} description
 */
DatabaseRequest.prototype['description'] = undefined;
/**
 * @member {module:model/DatabaseTypeEnum} type
 */
DatabaseRequest.prototype['type'] = undefined;
/**
 * @member {String} version
 */
DatabaseRequest.prototype['version'] = undefined;
/**
 * @member {module:model/DatabaseModeEnum} mode
 */
DatabaseRequest.prototype['mode'] = undefined;
/**
 * @member {module:model/DatabaseAccessibilityEnum} accessibility
 */
DatabaseRequest.prototype['accessibility'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu This field will be ignored for managed DB (instance type will be used instead). 
 * @member {Number} cpu
 * @default 250
 */
DatabaseRequest.prototype['cpu'] = 250;
/**
 * Database instance type to be used for this database. The list of values can be retrieved via the endpoint /{CloudProvider}/managedDatabase/instanceType/{region}/{dbType}. This field SHOULD NOT be set for container DB.
 * @member {String} instance_type
 */
DatabaseRequest.prototype['instance_type'] = undefined;
/**
 * unit is MB. 1024 MB = 1GB This field will be ignored for managed DB (instance type will be used instead). Default value is linked to the database type: - MANAGED: `100` - CONTAINER   - POSTGRES: `100`   - REDIS: `100`   - MYSQL: `512`   - MONGODB: `256` 
 * @member {Number} memory
 */
DatabaseRequest.prototype['memory'] = undefined;
/**
 * unit is GB
 * @member {Number} storage
 * @default 10
 */
DatabaseRequest.prototype['storage'] = 10;
// Implement DatabaseAllOf interface:
/**
 * @member {module:model/ReferenceObject} environment
 */
DatabaseAllOf.prototype['environment'] = undefined;
/**
 * @member {String} host
 */
DatabaseAllOf.prototype['host'] = undefined;
/**
 * @member {Number} port
 */
DatabaseAllOf.prototype['port'] = undefined;
/**
 * Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
DatabaseAllOf.prototype['maximum_cpu'] = undefined;
/**
 * Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
DatabaseAllOf.prototype['maximum_memory'] = undefined;
/**
 * indicates if the database disk is encrypted or not
 * @member {Boolean} disk_encrypted
 */
DatabaseAllOf.prototype['disk_encrypted'] = undefined;
/**
 * Database instance type to be used for this database. The list of values can be retrieved via the endpoint /{CloudProvider}/managedDatabase/instanceType/{region}/{dbType}. This field is null for container DB.
 * @member {String} instance_type
 */
DatabaseAllOf.prototype['instance_type'] = undefined;




export default Database;

