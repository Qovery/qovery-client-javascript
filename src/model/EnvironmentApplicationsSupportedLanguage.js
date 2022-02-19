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

/**
 * The EnvironmentApplicationsSupportedLanguage model module.
 * @module model/EnvironmentApplicationsSupportedLanguage
 * @version 1.0.1
 */
class EnvironmentApplicationsSupportedLanguage {
    /**
     * Constructs a new <code>EnvironmentApplicationsSupportedLanguage</code>.
     * @alias module:model/EnvironmentApplicationsSupportedLanguage
     * @param name {String} 
     */
    constructor(name) { 
        
        EnvironmentApplicationsSupportedLanguage.initialize(this, name);
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
     * Constructs a <code>EnvironmentApplicationsSupportedLanguage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentApplicationsSupportedLanguage} obj Optional instance to populate.
     * @return {module:model/EnvironmentApplicationsSupportedLanguage} The populated <code>EnvironmentApplicationsSupportedLanguage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentApplicationsSupportedLanguage();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
EnvironmentApplicationsSupportedLanguage.prototype['name'] = undefined;






export default EnvironmentApplicationsSupportedLanguage;

