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
 * The EnvironmentLogResponseScope model module.
 * @module model/EnvironmentLogResponseScope
 * @version 1.0.0
 */
class EnvironmentLogResponseScope {
    /**
     * Constructs a new <code>EnvironmentLogResponseScope</code>.
     * @alias module:model/EnvironmentLogResponseScope
     */
    constructor() { 
        
        EnvironmentLogResponseScope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentLogResponseScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogResponseScope} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogResponseScope} The populated <code>EnvironmentLogResponseScope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogResponseScope();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnvironmentLogResponseScope.TypeEnum} type
 */
EnvironmentLogResponseScope.prototype['type'] = undefined;

/**
 * @member {String} name
 */
EnvironmentLogResponseScope.prototype['name'] = undefined;

/**
 * @member {String} id
 */
EnvironmentLogResponseScope.prototype['id'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentLogResponseScope['TypeEnum'] = {

    /**
     * value: "APPLICATION"
     * @const
     */
    "APPLICATION": "APPLICATION",

    /**
     * value: "DATABASE"
     * @const
     */
    "DATABASE": "DATABASE",

    /**
     * value: "ENVIRONMENT"
     * @const
     */
    "ENVIRONMENT": "ENVIRONMENT"
};



export default EnvironmentLogResponseScope;

