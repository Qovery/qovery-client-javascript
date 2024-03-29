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
import HelmRepositoryKindEnum from './HelmRepositoryKindEnum';

/**
 * The HelmRepositoryResponseAllOf model module.
 * @module model/HelmRepositoryResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRepositoryResponseAllOf {
    /**
     * Constructs a new <code>HelmRepositoryResponseAllOf</code>.
     * @alias module:model/HelmRepositoryResponseAllOf
     * @param name {String} 
     */
    constructor(name) { 
        
        HelmRepositoryResponseAllOf.initialize(this, name);
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
     * Constructs a <code>HelmRepositoryResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRepositoryResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HelmRepositoryResponseAllOf} The populated <code>HelmRepositoryResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRepositoryResponseAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = HelmRepositoryKindEnum.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('skip_tls_verification')) {
                obj['skip_tls_verification'] = ApiClient.convertToType(data['skip_tls_verification'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
HelmRepositoryResponseAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/HelmRepositoryKindEnum} kind
 */
HelmRepositoryResponseAllOf.prototype['kind'] = undefined;

/**
 * @member {String} description
 */
HelmRepositoryResponseAllOf.prototype['description'] = undefined;

/**
 * URL of the helm repository
 * @member {String} url
 */
HelmRepositoryResponseAllOf.prototype['url'] = undefined;

/**
 * Bypass tls certificate verification when connecting to repository
 * @member {Boolean} skip_tls_verification
 */
HelmRepositoryResponseAllOf.prototype['skip_tls_verification'] = undefined;






export default HelmRepositoryResponseAllOf;

