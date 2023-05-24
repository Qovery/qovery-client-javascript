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
 * The ProbeProbeHttp model module.
 * @module model/ProbeProbeHttp
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProbeProbeHttp {
    /**
     * Constructs a new <code>ProbeProbeHttp</code>.
     * @alias module:model/ProbeProbeHttp
     */
    constructor() { 
        
        ProbeProbeHttp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProbeProbeHttp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProbeProbeHttp} obj Optional instance to populate.
     * @return {module:model/ProbeProbeHttp} The populated <code>ProbeProbeHttp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProbeProbeHttp();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 * @default '/'
 */
ProbeProbeHttp.prototype['path'] = '/';

/**
 * @member {String} scheme
 * @default 'HTTP'
 */
ProbeProbeHttp.prototype['scheme'] = 'HTTP';






export default ProbeProbeHttp;

