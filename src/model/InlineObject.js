/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder from './ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.0.2
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     */
    constructor() { 
        
        InlineObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('project_deployment_rule_ids_in_order')) {
                obj['project_deployment_rule_ids_in_order'] = ApiClient.convertToType(data['project_deployment_rule_ids_in_order'], [ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder>} project_deployment_rule_ids_in_order
 */
InlineObject.prototype['project_deployment_rule_ids_in_order'] = undefined;






export default InlineObject;

