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
 * The EnvironmentRestartRequest model module.
 * @module model/EnvironmentRestartRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentRestartRequest {
    /**
     * Constructs a new <code>EnvironmentRestartRequest</code>.
     * @alias module:model/EnvironmentRestartRequest
     */
    constructor() { 
        
        EnvironmentRestartRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentRestartRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentRestartRequest} obj Optional instance to populate.
     * @return {module:model/EnvironmentRestartRequest} The populated <code>EnvironmentRestartRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentRestartRequest();

            if (data.hasOwnProperty('restart_db')) {
                obj['restart_db'] = ApiClient.convertToType(data['restart_db'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} restart_db
 * @default false
 */
EnvironmentRestartRequest.prototype['restart_db'] = false;






export default EnvironmentRestartRequest;

