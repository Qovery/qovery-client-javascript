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
 * The ProbeTypeHttp model module.
 * @module model/ProbeTypeHttp
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProbeTypeHttp {
    /**
     * Constructs a new <code>ProbeTypeHttp</code>.
     * @alias module:model/ProbeTypeHttp
     */
    constructor() { 
        
        ProbeTypeHttp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProbeTypeHttp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProbeTypeHttp} obj Optional instance to populate.
     * @return {module:model/ProbeTypeHttp} The populated <code>ProbeTypeHttp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProbeTypeHttp();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 * @default '/'
 */
ProbeTypeHttp.prototype['path'] = '/';

/**
 * @member {String} scheme
 * @default 'HTTP'
 */
ProbeTypeHttp.prototype['scheme'] = 'HTTP';

/**
 * @member {Number} port
 */
ProbeTypeHttp.prototype['port'] = undefined;






export default ProbeTypeHttp;
