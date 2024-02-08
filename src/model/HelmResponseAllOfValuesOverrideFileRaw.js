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
import HelmResponseAllOfValuesOverrideFileRawValues from './HelmResponseAllOfValuesOverrideFileRawValues';

/**
 * The HelmResponseAllOfValuesOverrideFileRaw model module.
 * @module model/HelmResponseAllOfValuesOverrideFileRaw
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmResponseAllOfValuesOverrideFileRaw {
    /**
     * Constructs a new <code>HelmResponseAllOfValuesOverrideFileRaw</code>.
     * @alias module:model/HelmResponseAllOfValuesOverrideFileRaw
     * @param values {Array.<module:model/HelmResponseAllOfValuesOverrideFileRawValues>} 
     */
    constructor(values) { 
        
        HelmResponseAllOfValuesOverrideFileRaw.initialize(this, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, values) { 
        obj['values'] = values;
    }

    /**
     * Constructs a <code>HelmResponseAllOfValuesOverrideFileRaw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmResponseAllOfValuesOverrideFileRaw} obj Optional instance to populate.
     * @return {module:model/HelmResponseAllOfValuesOverrideFileRaw} The populated <code>HelmResponseAllOfValuesOverrideFileRaw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmResponseAllOfValuesOverrideFileRaw();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [HelmResponseAllOfValuesOverrideFileRawValues]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/HelmResponseAllOfValuesOverrideFileRawValues>} values
 */
HelmResponseAllOfValuesOverrideFileRaw.prototype['values'] = undefined;






export default HelmResponseAllOfValuesOverrideFileRaw;

