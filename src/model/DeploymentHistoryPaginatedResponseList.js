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
import DeploymentHistoryResponse from './DeploymentHistoryResponse';
import PaginationDataResponse from './PaginationDataResponse';

/**
 * The DeploymentHistoryPaginatedResponseList model module.
 * @module model/DeploymentHistoryPaginatedResponseList
 * @version 1.0.0
 */
class DeploymentHistoryPaginatedResponseList {
    /**
     * Constructs a new <code>DeploymentHistoryPaginatedResponseList</code>.
     * @alias module:model/DeploymentHistoryPaginatedResponseList
     * @implements module:model/PaginationDataResponse
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationDataResponse.initialize(this, page, pageSize);
        DeploymentHistoryPaginatedResponseList.initialize(this, page, pageSize);
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
     * Constructs a <code>DeploymentHistoryPaginatedResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryPaginatedResponseList} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryPaginatedResponseList} The populated <code>DeploymentHistoryPaginatedResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryPaginatedResponseList();
            PaginationDataResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DeploymentHistoryResponse]);
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
 * @member {Array.<module:model/DeploymentHistoryResponse>} results
 */
DeploymentHistoryPaginatedResponseList.prototype['results'] = undefined;

/**
 * @member {Number} page
 */
DeploymentHistoryPaginatedResponseList.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
DeploymentHistoryPaginatedResponseList.prototype['page_size'] = undefined;


// Implement PaginationDataResponse interface:
/**
 * @member {Number} page
 */
PaginationDataResponse.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationDataResponse.prototype['page_size'] = undefined;




export default DeploymentHistoryPaginatedResponseList;

