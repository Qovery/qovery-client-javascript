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
 * The ApplicationDeploymentRestrictionResponseList model module.
 * @module model/ApplicationDeploymentRestrictionResponseList
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ApplicationDeploymentRestrictionResponseList {
    /**
     * Constructs a new <code>ApplicationDeploymentRestrictionResponseList</code>.
     * @alias module:model/ApplicationDeploymentRestrictionResponseList
     */
    constructor() { 
        
        ApplicationDeploymentRestrictionResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationDeploymentRestrictionResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationDeploymentRestrictionResponseList} obj Optional instance to populate.
     * @return {module:model/ApplicationDeploymentRestrictionResponseList} The populated <code>ApplicationDeploymentRestrictionResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationDeploymentRestrictionResponseList();

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
ApplicationDeploymentRestrictionResponseList.prototype['deployment_restrictions'] = undefined;






export default ApplicationDeploymentRestrictionResponseList;

