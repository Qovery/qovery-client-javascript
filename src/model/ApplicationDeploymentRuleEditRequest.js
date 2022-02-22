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
import ApplicationDeploymentRestriction from './ApplicationDeploymentRestriction';

/**
 * The ApplicationDeploymentRuleEditRequest model module.
 * @module model/ApplicationDeploymentRuleEditRequest
 * @version 1.0.3
 */
class ApplicationDeploymentRuleEditRequest {
    /**
     * Constructs a new <code>ApplicationDeploymentRuleEditRequest</code>.
     * @alias module:model/ApplicationDeploymentRuleEditRequest
     */
    constructor() { 
        
        ApplicationDeploymentRuleEditRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationDeploymentRuleEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationDeploymentRuleEditRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationDeploymentRuleEditRequest} The populated <code>ApplicationDeploymentRuleEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationDeploymentRuleEditRequest();

            if (data.hasOwnProperty('deployment_restrictions')) {
                obj['deployment_restrictions'] = ApiClient.convertToType(data['deployment_restrictions'], [ApplicationDeploymentRestriction]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ApplicationDeploymentRestriction>} deployment_restrictions
 */
ApplicationDeploymentRuleEditRequest.prototype['deployment_restrictions'] = undefined;






export default ApplicationDeploymentRuleEditRequest;

