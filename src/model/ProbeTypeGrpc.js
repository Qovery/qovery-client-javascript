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
 * The ProbeTypeGrpc model module.
 * @module model/ProbeTypeGrpc
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProbeTypeGrpc {
    /**
     * Constructs a new <code>ProbeTypeGrpc</code>.
     * @alias module:model/ProbeTypeGrpc
     */
    constructor() { 
        
        ProbeTypeGrpc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProbeTypeGrpc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProbeTypeGrpc} obj Optional instance to populate.
     * @return {module:model/ProbeTypeGrpc} The populated <code>ProbeTypeGrpc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProbeTypeGrpc();

            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service
 */
ProbeTypeGrpc.prototype['service'] = undefined;

/**
 * @member {Number} port
 */
ProbeTypeGrpc.prototype['port'] = undefined;






export default ProbeTypeGrpc;
