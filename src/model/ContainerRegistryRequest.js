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
import ContainerRegistryKindEnum from './ContainerRegistryKindEnum';

/**
 * The ContainerRegistryRequest model module.
 * @module model/ContainerRegistryRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerRegistryRequest {
    /**
     * Constructs a new <code>ContainerRegistryRequest</code>.
     * @alias module:model/ContainerRegistryRequest
     * @param name {String} 
     * @param kind {module:model/ContainerRegistryKindEnum} 
     * @param url {String} URL of the container registry
     * @param config {Object.<String, Object>} authentification configuration
     */
    constructor(name, kind, url, config) { 
        
        ContainerRegistryRequest.initialize(this, name, kind, url, config);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, kind, url, config) { 
        obj['name'] = name;
        obj['kind'] = kind;
        obj['url'] = url;
        obj['config'] = config;
    }

    /**
     * Constructs a <code>ContainerRegistryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerRegistryRequest} obj Optional instance to populate.
     * @return {module:model/ContainerRegistryRequest} The populated <code>ContainerRegistryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerRegistryRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ContainerRegistryKindEnum.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ContainerRegistryRequest.prototype['name'] = undefined;

/**
 * @member {module:model/ContainerRegistryKindEnum} kind
 */
ContainerRegistryRequest.prototype['kind'] = undefined;

/**
 * @member {String} description
 */
ContainerRegistryRequest.prototype['description'] = undefined;

/**
 * URL of the container registry
 * @member {String} url
 */
ContainerRegistryRequest.prototype['url'] = undefined;

/**
 * authentification configuration
 * @member {Object.<String, Object>} config
 */
ContainerRegistryRequest.prototype['config'] = undefined;






export default ContainerRegistryRequest;

