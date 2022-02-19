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
import DeploymentHistoryEnvironmentResponse from './DeploymentHistoryEnvironmentResponse';
import PaginationDataResponse from './PaginationDataResponse';

/**
 * The DeploymentHistoryEnvironmentPaginatedResponseList model module.
 * @module model/DeploymentHistoryEnvironmentPaginatedResponseList
 * @version 1.0.2
 */
class DeploymentHistoryEnvironmentPaginatedResponseList {
    /**
     * Constructs a new <code>DeploymentHistoryEnvironmentPaginatedResponseList</code>.
     * @alias module:model/DeploymentHistoryEnvironmentPaginatedResponseList
     * @implements module:model/PaginationDataResponse
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationDataResponse.initialize(this, page, pageSize);
        DeploymentHistoryEnvironmentPaginatedResponseList.initialize(this, page, pageSize);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, page, pageSize) { 
        obj['page'] = page;
        obj['page_size'] = pageSize;
    }

    /**
     * Constructs a <code>DeploymentHistoryEnvironmentPaginatedResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryEnvironmentPaginatedResponseList} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryEnvironmentPaginatedResponseList} The populated <code>DeploymentHistoryEnvironmentPaginatedResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryEnvironmentPaginatedResponseList();
            PaginationDataResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DeploymentHistoryEnvironmentResponse]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DeploymentHistoryEnvironmentResponse>} results
 */
DeploymentHistoryEnvironmentPaginatedResponseList.prototype['results'] = undefined;

/**
 * @member {Number} page
 */
DeploymentHistoryEnvironmentPaginatedResponseList.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
DeploymentHistoryEnvironmentPaginatedResponseList.prototype['page_size'] = undefined;


// Implement PaginationDataResponse interface:
/**
 * @member {Number} page
 */
PaginationDataResponse.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationDataResponse.prototype['page_size'] = undefined;




export default DeploymentHistoryEnvironmentPaginatedResponseList;

