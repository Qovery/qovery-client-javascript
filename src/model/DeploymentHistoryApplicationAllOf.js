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
import Commit from './Commit';
import StateEnum from './StateEnum';

/**
 * The DeploymentHistoryApplicationAllOf model module.
 * @module model/DeploymentHistoryApplicationAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryApplicationAllOf {
    /**
     * Constructs a new <code>DeploymentHistoryApplicationAllOf</code>.
     * @alias module:model/DeploymentHistoryApplicationAllOf
     */
    constructor() { 
        
        DeploymentHistoryApplicationAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentHistoryApplicationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryApplicationAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryApplicationAllOf} The populated <code>DeploymentHistoryApplicationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryApplicationAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeploymentHistoryApplicationAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
DeploymentHistoryApplicationAllOf.prototype['commit'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryApplicationAllOf.prototype['status'] = undefined;






export default DeploymentHistoryApplicationAllOf;

