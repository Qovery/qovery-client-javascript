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
import ProjectStatsResponse from './ProjectStatsResponse';

/**
 * The ProjectStatsResponseList model module.
 * @module model/ProjectStatsResponseList
 * @version 1.0.0
 */
class ProjectStatsResponseList {
    /**
     * Constructs a new <code>ProjectStatsResponseList</code>.
     * @alias module:model/ProjectStatsResponseList
     */
    constructor() { 
        
        ProjectStatsResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectStatsResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatsResponseList} obj Optional instance to populate.
     * @return {module:model/ProjectStatsResponseList} The populated <code>ProjectStatsResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatsResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ProjectStatsResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProjectStatsResponse>} results
 */
ProjectStatsResponseList.prototype['results'] = undefined;






export default ProjectStatsResponseList;

