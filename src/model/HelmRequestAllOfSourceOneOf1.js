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
import HelmRequestAllOfSourceOneOf1HelmRepository from './HelmRequestAllOfSourceOneOf1HelmRepository';

/**
 * The HelmRequestAllOfSourceOneOf1 model module.
 * @module model/HelmRequestAllOfSourceOneOf1
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequestAllOfSourceOneOf1 {
    /**
     * Constructs a new <code>HelmRequestAllOfSourceOneOf1</code>.
     * @alias module:model/HelmRequestAllOfSourceOneOf1
     */
    constructor() { 
        
        HelmRequestAllOfSourceOneOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmRequestAllOfSourceOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequestAllOfSourceOneOf1} obj Optional instance to populate.
     * @return {module:model/HelmRequestAllOfSourceOneOf1} The populated <code>HelmRequestAllOfSourceOneOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequestAllOfSourceOneOf1();

            if (data.hasOwnProperty('helm_repository')) {
                obj['helm_repository'] = HelmRequestAllOfSourceOneOf1HelmRepository.constructFromObject(data['helm_repository']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelmRequestAllOfSourceOneOf1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelmRequestAllOfSourceOneOf1</code>.
     */
    static validateJSON(data) {
        // validate the optional field `helm_repository`
        if (data['helm_repository']) { // data not null
          HelmRequestAllOfSourceOneOf1HelmRepository.validateJSON(data['helm_repository']);
        }

        return true;
    }


}



/**
 * @member {module:model/HelmRequestAllOfSourceOneOf1HelmRepository} helm_repository
 */
HelmRequestAllOfSourceOneOf1.prototype['helm_repository'] = undefined;






export default HelmRequestAllOfSourceOneOf1;

