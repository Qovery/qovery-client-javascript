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
 * The HelmRequestAllOfValuesOverrideFileRawValues model module.
 * @module model/HelmRequestAllOfValuesOverrideFileRawValues
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequestAllOfValuesOverrideFileRawValues {
    /**
     * Constructs a new <code>HelmRequestAllOfValuesOverrideFileRawValues</code>.
     * @alias module:model/HelmRequestAllOfValuesOverrideFileRawValues
     */
    constructor() { 
        
        HelmRequestAllOfValuesOverrideFileRawValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmRequestAllOfValuesOverrideFileRawValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequestAllOfValuesOverrideFileRawValues} obj Optional instance to populate.
     * @return {module:model/HelmRequestAllOfValuesOverrideFileRawValues} The populated <code>HelmRequestAllOfValuesOverrideFileRawValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequestAllOfValuesOverrideFileRawValues();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the value file
 * @member {String} name
 */
HelmRequestAllOfValuesOverrideFileRawValues.prototype['name'] = undefined;

/**
 * The content of the value file
 * @member {String} content
 */
HelmRequestAllOfValuesOverrideFileRawValues.prototype['content'] = undefined;






export default HelmRequestAllOfValuesOverrideFileRawValues;

