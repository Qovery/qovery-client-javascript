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
import ProbeTypeExec from './ProbeTypeExec';
import ProbeTypeGrpc from './ProbeTypeGrpc';
import ProbeTypeHttp from './ProbeTypeHttp';
import ProbeTypeTcp from './ProbeTypeTcp';

/**
 * The ProbeType model module.
 * @module model/ProbeType
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProbeType {
    /**
     * Constructs a new <code>ProbeType</code>.
     * @alias module:model/ProbeType
     */
    constructor() { 
        
        ProbeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProbeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProbeType} obj Optional instance to populate.
     * @return {module:model/ProbeType} The populated <code>ProbeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProbeType();

            if (data.hasOwnProperty('tcp')) {
                obj['tcp'] = ProbeTypeTcp.constructFromObject(data['tcp']);
            }
            if (data.hasOwnProperty('http')) {
                obj['http'] = ProbeTypeHttp.constructFromObject(data['http']);
            }
            if (data.hasOwnProperty('exec')) {
                obj['exec'] = ProbeTypeExec.constructFromObject(data['exec']);
            }
            if (data.hasOwnProperty('grpc')) {
                obj['grpc'] = ProbeTypeGrpc.constructFromObject(data['grpc']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProbeTypeTcp} tcp
 */
ProbeType.prototype['tcp'] = undefined;

/**
 * @member {module:model/ProbeTypeHttp} http
 */
ProbeType.prototype['http'] = undefined;

/**
 * @member {module:model/ProbeTypeExec} exec
 */
ProbeType.prototype['exec'] = undefined;

/**
 * @member {module:model/ProbeTypeGrpc} grpc
 */
ProbeType.prototype['grpc'] = undefined;






export default ProbeType;

