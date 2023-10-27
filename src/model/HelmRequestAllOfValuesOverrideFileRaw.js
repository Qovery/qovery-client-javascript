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
import HelmRequestAllOfValuesOverrideFileRawValues from './HelmRequestAllOfValuesOverrideFileRawValues';

/**
 * The HelmRequestAllOfValuesOverrideFileRaw model module.
 * @module model/HelmRequestAllOfValuesOverrideFileRaw
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequestAllOfValuesOverrideFileRaw {
    /**
     * Constructs a new <code>HelmRequestAllOfValuesOverrideFileRaw</code>.
     * @alias module:model/HelmRequestAllOfValuesOverrideFileRaw
     */
    constructor() { 
        
        HelmRequestAllOfValuesOverrideFileRaw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmRequestAllOfValuesOverrideFileRaw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequestAllOfValuesOverrideFileRaw} obj Optional instance to populate.
     * @return {module:model/HelmRequestAllOfValuesOverrideFileRaw} The populated <code>HelmRequestAllOfValuesOverrideFileRaw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequestAllOfValuesOverrideFileRaw();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [HelmRequestAllOfValuesOverrideFileRawValues]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/HelmRequestAllOfValuesOverrideFileRawValues>} values
 */
HelmRequestAllOfValuesOverrideFileRaw.prototype['values'] = undefined;






export default HelmRequestAllOfValuesOverrideFileRaw;
