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
import CommitResponse from './CommitResponse';
import PaginationDataResponse from './PaginationDataResponse';

/**
 * The CommitPaginatedResponseList model module.
 * @module model/CommitPaginatedResponseList
 * @version 1.0.1
 */
class CommitPaginatedResponseList {
    /**
     * Constructs a new <code>CommitPaginatedResponseList</code>.
     * @alias module:model/CommitPaginatedResponseList
     * @implements module:model/PaginationDataResponse
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationDataResponse.initialize(this, page, pageSize);
        CommitPaginatedResponseList.initialize(this, page, pageSize);
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
     * Constructs a <code>CommitPaginatedResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitPaginatedResponseList} obj Optional instance to populate.
     * @return {module:model/CommitPaginatedResponseList} The populated <code>CommitPaginatedResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitPaginatedResponseList();
            PaginationDataResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CommitResponse]);
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
 * @member {Array.<module:model/CommitResponse>} results
 */
CommitPaginatedResponseList.prototype['results'] = undefined;

/**
 * @member {Number} page
 */
CommitPaginatedResponseList.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
CommitPaginatedResponseList.prototype['page_size'] = undefined;


// Implement PaginationDataResponse interface:
/**
 * @member {Number} page
 */
PaginationDataResponse.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationDataResponse.prototype['page_size'] = undefined;




export default CommitPaginatedResponseList;

