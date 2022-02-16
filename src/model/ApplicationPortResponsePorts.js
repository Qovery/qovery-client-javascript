/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApplicationPortResponsePorts model module.
 * @module model/ApplicationPortResponsePorts
 * @version 1.0.0
 */
class ApplicationPortResponsePorts {
    /**
     * Constructs a new <code>ApplicationPortResponsePorts</code>.
     * @alias module:model/ApplicationPortResponsePorts
     * @param internalPort {Number} The listening port of your application
     * @param publiclyAccessible {Boolean} Expose the port to the world
     */
    constructor(internalPort, publiclyAccessible) { 
        
        ApplicationPortResponsePorts.initialize(this, internalPort, publiclyAccessible);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, internalPort, publiclyAccessible) { 
        obj['internal_port'] = internalPort;
        obj['publicly_accessible'] = publiclyAccessible;
    }

    /**
     * Constructs a <code>ApplicationPortResponsePorts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationPortResponsePorts} obj Optional instance to populate.
     * @return {module:model/ApplicationPortResponsePorts} The populated <code>ApplicationPortResponsePorts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationPortResponsePorts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('internal_port')) {
                obj['internal_port'] = ApiClient.convertToType(data['internal_port'], 'Number');
            }
            if (data.hasOwnProperty('external_port')) {
                obj['external_port'] = ApiClient.convertToType(data['external_port'], 'Number');
            }
            if (data.hasOwnProperty('publicly_accessible')) {
                obj['publicly_accessible'] = ApiClient.convertToType(data['publicly_accessible'], 'Boolean');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ApplicationPortResponsePorts.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ApplicationPortResponsePorts.prototype['name'] = undefined;

/**
 * The listening port of your application
 * @member {Number} internal_port
 */
ApplicationPortResponsePorts.prototype['internal_port'] = undefined;

/**
 * The exposed port for your application. This is optional. If not set a default port will be used.
 * @member {Number} external_port
 */
ApplicationPortResponsePorts.prototype['external_port'] = undefined;

/**
 * Expose the port to the world
 * @member {Boolean} publicly_accessible
 */
ApplicationPortResponsePorts.prototype['publicly_accessible'] = undefined;

/**
 * @member {module:model/ApplicationPortResponsePorts.ProtocolEnum} protocol
 * @default 'HTTP'
 */
ApplicationPortResponsePorts.prototype['protocol'] = 'HTTP';





/**
 * Allowed values for the <code>protocol</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationPortResponsePorts['ProtocolEnum'] = {

    /**
     * value: "HTTPS"
     * @const
     */
    "HTTPS": "HTTPS",

    /**
     * value: "HTTP"
     * @const
     */
    "HTTP": "HTTP",

    /**
     * value: "TCP"
     * @const
     */
    "TCP": "TCP",

    /**
     * value: "UDP"
     * @const
     */
    "UDP": "UDP"
};



export default ApplicationPortResponsePorts;

