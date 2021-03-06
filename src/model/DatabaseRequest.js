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
import DatabaseAccessibilityEnum from './DatabaseAccessibilityEnum';
import DatabaseModeEnum from './DatabaseModeEnum';
import DatabaseTypeEnum from './DatabaseTypeEnum';

/**
 * The DatabaseRequest model module.
 * @module model/DatabaseRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DatabaseRequest {
    /**
     * Constructs a new <code>DatabaseRequest</code>.
     * @alias module:model/DatabaseRequest
     * @param name {String} name is case insensitive
     * @param type {module:model/DatabaseTypeEnum} 
     * @param version {String} 
     * @param mode {module:model/DatabaseModeEnum} 
     */
    constructor(name, type, version, mode) { 
        
        DatabaseRequest.initialize(this, name, type, version, mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, version, mode) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['version'] = version;
        obj['mode'] = mode;
    }

    /**
     * Constructs a <code>DatabaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseRequest} obj Optional instance to populate.
     * @return {module:model/DatabaseRequest} The populated <code>DatabaseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * name is case insensitive
 * @member {String} name
 */
DatabaseRequest.prototype['name'] = undefined;

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
 * unit is GB
 * @member {Number} storage
 * @default 10
 */
DatabaseRequest.prototype['storage'] = 10;






export default DatabaseRequest;

