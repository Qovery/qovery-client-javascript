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
import HelmPortProtocolEnum from './HelmPortProtocolEnum';

/**
 * The HelmPortRequestPortsInner model module.
 * @module model/HelmPortRequestPortsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmPortRequestPortsInner {
    /**
     * Constructs a new <code>HelmPortRequestPortsInner</code>.
     * @alias module:model/HelmPortRequestPortsInner
     * @param internalPort {Number} The listening port of your service.
     * @param serviceName {String} 
     */
    constructor(internalPort, serviceName) { 
        
        HelmPortRequestPortsInner.initialize(this, internalPort, serviceName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, internalPort, serviceName) { 
        obj['internal_port'] = internalPort;
        obj['service_name'] = serviceName;
    }

    /**
     * Constructs a <code>HelmPortRequestPortsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmPortRequestPortsInner} obj Optional instance to populate.
     * @return {module:model/HelmPortRequestPortsInner} The populated <code>HelmPortRequestPortsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmPortRequestPortsInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('internal_port')) {
                obj['internal_port'] = ApiClient.convertToType(data['internal_port'], 'Number');
            }
            if (data.hasOwnProperty('external_port')) {
                obj['external_port'] = ApiClient.convertToType(data['external_port'], 'Number');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = HelmPortProtocolEnum.constructFromObject(data['protocol']);
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
HelmPortRequestPortsInner.prototype['name'] = undefined;

/**
 * The listening port of your service.
 * @member {Number} internal_port
 */
HelmPortRequestPortsInner.prototype['internal_port'] = undefined;

/**
 * The exposed port for your service. This is optional. If not set a default port will be used.
 * @member {Number} external_port
 */
HelmPortRequestPortsInner.prototype['external_port'] = undefined;

/**
 * @member {String} service_name
 */
HelmPortRequestPortsInner.prototype['service_name'] = undefined;

/**
 * @member {String} namespace
 */
HelmPortRequestPortsInner.prototype['namespace'] = undefined;

/**
 * @member {module:model/HelmPortProtocolEnum} protocol
 */
HelmPortRequestPortsInner.prototype['protocol'] = undefined;

/**
 * is the default port to use for domain
 * @member {Boolean} is_default
 */
HelmPortRequestPortsInner.prototype['is_default'] = undefined;






export default HelmPortRequestPortsInner;

