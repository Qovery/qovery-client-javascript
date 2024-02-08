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
import EnvironmentLogTypeEnum from './EnvironmentLogTypeEnum';

/**
 * The EnvironmentLogScope model module.
 * @module model/EnvironmentLogScope
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentLogScope {
    /**
     * Constructs a new <code>EnvironmentLogScope</code>.
     * @alias module:model/EnvironmentLogScope
     */
    constructor() { 
        
        EnvironmentLogScope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentLogScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentLogScope} obj Optional instance to populate.
     * @return {module:model/EnvironmentLogScope} The populated <code>EnvironmentLogScope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentLogScope();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnvironmentLogTypeEnum.constructFromObject(data['type']);
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
 * @member {module:model/EnvironmentLogTypeEnum} type
 */
EnvironmentLogScope.prototype['type'] = undefined;

/**
 * @member {String} name
 */
EnvironmentLogScope.prototype['name'] = undefined;

/**
 * @member {String} id
 */
EnvironmentLogScope.prototype['id'] = undefined;






export default EnvironmentLogScope;

