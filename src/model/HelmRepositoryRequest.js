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
import HelmRepositoryRequestConfig from './HelmRepositoryRequestConfig';

/**
 * The HelmRepositoryRequest model module.
 * @module model/HelmRepositoryRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRepositoryRequest {
    /**
     * Constructs a new <code>HelmRepositoryRequest</code>.
     * @alias module:model/HelmRepositoryRequest
     * @param name {String} 
     * @param kind {module:model/HelmRepositoryKindEnum} 
     * @param config {module:model/HelmRepositoryRequestConfig} 
     */
    constructor(name, kind, config) { 
        
        HelmRepositoryRequest.initialize(this, name, kind, config);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, kind, config) { 
        obj['name'] = name;
        obj['kind'] = kind;
        obj['config'] = config;
    }

    /**
     * Constructs a <code>HelmRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRepositoryRequest} obj Optional instance to populate.
     * @return {module:model/HelmRepositoryRequest} The populated <code>HelmRepositoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRepositoryRequest();

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
            if (data.hasOwnProperty('config')) {
                obj['config'] = HelmRepositoryRequestConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
HelmRepositoryRequest.prototype['name'] = undefined;

/**
 * @member {module:model/HelmRepositoryKindEnum} kind
 */
HelmRepositoryRequest.prototype['kind'] = undefined;

/**
 * @member {String} description
 */
HelmRepositoryRequest.prototype['description'] = undefined;

/**
 * URL of the helm chart repository: * For `OCI`: it must start by oci:// * For `HTTPS`: it must be start by https:// 
 * @member {String} url
 */
HelmRepositoryRequest.prototype['url'] = undefined;

/**
 * @member {module:model/HelmRepositoryRequestConfig} config
 */
HelmRepositoryRequest.prototype['config'] = undefined;






export default HelmRepositoryRequest;
