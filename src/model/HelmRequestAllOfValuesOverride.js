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
import HelmKeyValue from './HelmKeyValue';
import HelmRequestAllOfValuesOverrideFile from './HelmRequestAllOfValuesOverrideFile';

/**
 * The HelmRequestAllOfValuesOverride model module.
 * @module model/HelmRequestAllOfValuesOverride
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequestAllOfValuesOverride {
    /**
     * Constructs a new <code>HelmRequestAllOfValuesOverride</code>.
     * Specify helm values you want to set or override 
     * @alias module:model/HelmRequestAllOfValuesOverride
     */
    constructor() { 
        
        HelmRequestAllOfValuesOverride.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmRequestAllOfValuesOverride</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequestAllOfValuesOverride} obj Optional instance to populate.
     * @return {module:model/HelmRequestAllOfValuesOverride} The populated <code>HelmRequestAllOfValuesOverride</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequestAllOfValuesOverride();

            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], [HelmKeyValue]);
            }
            if (data.hasOwnProperty('set_string')) {
                obj['set_string'] = ApiClient.convertToType(data['set_string'], [HelmKeyValue]);
            }
            if (data.hasOwnProperty('set_json')) {
                obj['set_json'] = ApiClient.convertToType(data['set_json'], [HelmKeyValue]);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = HelmRequestAllOfValuesOverrideFile.constructFromObject(data['file']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/HelmKeyValue>} set
 */
HelmRequestAllOfValuesOverride.prototype['set'] = undefined;

/**
 * @member {Array.<module:model/HelmKeyValue>} set_string
 */
HelmRequestAllOfValuesOverride.prototype['set_string'] = undefined;

/**
 * @member {Array.<module:model/HelmKeyValue>} set_json
 */
HelmRequestAllOfValuesOverride.prototype['set_json'] = undefined;

/**
 * @member {module:model/HelmRequestAllOfValuesOverrideFile} file
 */
HelmRequestAllOfValuesOverride.prototype['file'] = undefined;






export default HelmRequestAllOfValuesOverride;

