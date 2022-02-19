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
import ProjectCurrentCostResponse from './ProjectCurrentCostResponse';
import ProjectCurrentCostResponseList from './ProjectCurrentCostResponseList';

/**
 * The CommunityUsageResponse model module.
 * @module model/CommunityUsageResponse
 * @version 1.0.1
 */
class CommunityUsageResponse {
    /**
     * Constructs a new <code>CommunityUsageResponse</code>.
     * @alias module:model/CommunityUsageResponse
     * @implements module:model/ProjectCurrentCostResponseList
     */
    constructor() { 
        ProjectCurrentCostResponseList.initialize(this);
        CommunityUsageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommunityUsageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommunityUsageResponse} obj Optional instance to populate.
     * @return {module:model/CommunityUsageResponse} The populated <code>CommunityUsageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunityUsageResponse();
            ProjectCurrentCostResponseList.constructFromObject(data, obj);

            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectCurrentCostResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProjectCurrentCostResponse>} projects
 */
CommunityUsageResponse.prototype['projects'] = undefined;


// Implement ProjectCurrentCostResponseList interface:
/**
 * @member {Array.<module:model/ProjectCurrentCostResponse>} projects
 */
ProjectCurrentCostResponseList.prototype['projects'] = undefined;




export default CommunityUsageResponse;

