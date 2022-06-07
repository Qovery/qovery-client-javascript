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
import StorageTypeEnum from './StorageTypeEnum';

/**
 * The ApplicationStorageRequestStorageInner model module.
 * @module model/ApplicationStorageRequestStorageInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ApplicationStorageRequestStorageInner {
    /**
     * Constructs a new <code>ApplicationStorageRequestStorageInner</code>.
     * @alias module:model/ApplicationStorageRequestStorageInner
     * @param type {module:model/StorageTypeEnum} 
     * @param size {Number} unit is GB
     * @param mountPoint {String} 
     */
    constructor(type, size, mountPoint) { 
        
        ApplicationStorageRequestStorageInner.initialize(this, type, size, mountPoint);
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
     * Constructs a <code>ApplicationStorageRequestStorageInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationStorageRequestStorageInner} obj Optional instance to populate.
     * @return {module:model/ApplicationStorageRequestStorageInner} The populated <code>ApplicationStorageRequestStorageInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationStorageRequestStorageInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = StorageTypeEnum.constructFromObject(data['type']);
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
 * @member {module:model/StorageTypeEnum} type
 */
ApplicationStorageRequestStorageInner.prototype['type'] = undefined;

/**
 * unit is GB
 * @member {Number} size
 */
ApplicationStorageRequestStorageInner.prototype['size'] = undefined;

/**
 * @member {String} mount_point
 */
ApplicationStorageRequestStorageInner.prototype['mount_point'] = undefined;






export default ApplicationStorageRequestStorageInner;
