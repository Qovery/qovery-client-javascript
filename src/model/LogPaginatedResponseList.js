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
import LogResponse from './LogResponse';
import PaginationDataResponse from './PaginationDataResponse';

/**
 * The LogPaginatedResponseList model module.
 * @module model/LogPaginatedResponseList
 * @version 1.0.2
 */
class LogPaginatedResponseList {
    /**
     * Constructs a new <code>LogPaginatedResponseList</code>.
     * @alias module:model/LogPaginatedResponseList
     * @implements module:model/PaginationDataResponse
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationDataResponse.initialize(this, page, pageSize);
        LogPaginatedResponseList.initialize(this, page, pageSize);
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
     * Constructs a <code>LogPaginatedResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogPaginatedResponseList} obj Optional instance to populate.
     * @return {module:model/LogPaginatedResponseList} The populated <code>LogPaginatedResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogPaginatedResponseList();
            PaginationDataResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LogResponse]);
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
 * @member {Array.<module:model/LogResponse>} results
 */
LogPaginatedResponseList.prototype['results'] = undefined;

/**
 * @member {Number} page
 */
LogPaginatedResponseList.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
LogPaginatedResponseList.prototype['page_size'] = undefined;


// Implement PaginationDataResponse interface:
/**
 * @member {Number} page
 */
PaginationDataResponse.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationDataResponse.prototype['page_size'] = undefined;




export default LogPaginatedResponseList;

