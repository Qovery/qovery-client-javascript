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
 * The ApplicationStorageResponseStorage model module.
 * @module model/ApplicationStorageResponseStorage
 * @version 1.0.3
 */
class ApplicationStorageResponseStorage {
    /**
     * Constructs a new <code>ApplicationStorageResponseStorage</code>.
     * @alias module:model/ApplicationStorageResponseStorage
     * @param type {module:model/ApplicationStorageResponseStorage.TypeEnum} 
     * @param size {Number} unit is GB
     * @param mountPoint {String} 
     */
    constructor(type, size, mountPoint) { 
        
        ApplicationStorageResponseStorage.initialize(this, type, size, mountPoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, size, mountPoint) { 
        obj['type'] = type;
        obj['size'] = size;
        obj['mount_point'] = mountPoint;
    }

    /**
     * Constructs a <code>ApplicationStorageResponseStorage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationStorageResponseStorage} obj Optional instance to populate.
     * @return {module:model/ApplicationStorageResponseStorage} The populated <code>ApplicationStorageResponseStorage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationStorageResponseStorage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('mount_point')) {
                obj['mount_point'] = ApiClient.convertToType(data['mount_point'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ApplicationStorageResponseStorage.prototype['id'] = undefined;

/**
 * @member {module:model/ApplicationStorageResponseStorage.TypeEnum} type
 */
ApplicationStorageResponseStorage.prototype['type'] = undefined;

/**
 * unit is GB
 * @member {Number} size
 */
ApplicationStorageResponseStorage.prototype['size'] = undefined;

/**
 * @member {String} mount_point
 */
ApplicationStorageResponseStorage.prototype['mount_point'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationStorageResponseStorage['TypeEnum'] = {

    /**
     * value: "SLOW_HDD"
     * @const
     */
    "SLOW_HDD": "SLOW_HDD",

    /**
     * value: "HDD"
     * @const
     */
    "HDD": "HDD",

    /**
     * value: "SSD"
     * @const
     */
    "SSD": "SSD",

    /**
     * value: "FAST_SSD"
     * @const
     */
    "FAST_SSD": "FAST_SSD"
};



export default ApplicationStorageResponseStorage;

