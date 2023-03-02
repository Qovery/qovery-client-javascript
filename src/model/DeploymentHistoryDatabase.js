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
import DeploymentHistoryDatabaseAllOf from './DeploymentHistoryDatabaseAllOf';
import StateEnum from './StateEnum';

/**
 * The DeploymentHistoryDatabase model module.
 * @module model/DeploymentHistoryDatabase
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryDatabase {
    /**
     * Constructs a new <code>DeploymentHistoryDatabase</code>.
     * @alias module:model/DeploymentHistoryDatabase
     * @implements module:model/Base
     * @implements module:model/DeploymentHistoryDatabaseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);DeploymentHistoryDatabaseAllOf.initialize(this);
        DeploymentHistoryDatabase.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>DeploymentHistoryDatabase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryDatabase} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryDatabase} The populated <code>DeploymentHistoryDatabase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryDatabase();
            Base.constructFromObject(data, obj);
            DeploymentHistoryDatabaseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
DeploymentHistoryDatabase.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
DeploymentHistoryDatabase.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DeploymentHistoryDatabase.prototype['updated_at'] = undefined;

/**
 * name of the service
 * @member {String} name
 */
DeploymentHistoryDatabase.prototype['name'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryDatabase.prototype['status'] = undefined;


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
// Implement DeploymentHistoryDatabaseAllOf interface:
/**
 * name of the service
 * @member {String} name
 */
DeploymentHistoryDatabaseAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryDatabaseAllOf.prototype['status'] = undefined;




export default DeploymentHistoryDatabase;

