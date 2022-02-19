/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProjectDeploymentRuleResponse from './ProjectDeploymentRuleResponse';

/**
 * The ProjectDeploymentRuleResponseList model module.
 * @module model/ProjectDeploymentRuleResponseList
 * @version 1.0.1
 */
class ProjectDeploymentRuleResponseList {
    /**
     * Constructs a new <code>ProjectDeploymentRuleResponseList</code>.
     * @alias module:model/ProjectDeploymentRuleResponseList
     */
    constructor() { 
        
        ProjectDeploymentRuleResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectDeploymentRuleResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectDeploymentRuleResponseList} obj Optional instance to populate.
     * @return {module:model/ProjectDeploymentRuleResponseList} The populated <code>ProjectDeploymentRuleResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectDeploymentRuleResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ProjectDeploymentRuleResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProjectDeploymentRuleResponse>} results
 */
ProjectDeploymentRuleResponseList.prototype['results'] = undefined;






export default ProjectDeploymentRuleResponseList;

