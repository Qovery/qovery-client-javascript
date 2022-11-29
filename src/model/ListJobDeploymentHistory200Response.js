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
import DeploymentHistoryJobResponse from './DeploymentHistoryJobResponse';
import ListJobDeploymentHistory200ResponseAllOf from './ListJobDeploymentHistory200ResponseAllOf';
import PaginationData from './PaginationData';

/**
 * The ListJobDeploymentHistory200Response model module.
 * @module model/ListJobDeploymentHistory200Response
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ListJobDeploymentHistory200Response {
    /**
     * Constructs a new <code>ListJobDeploymentHistory200Response</code>.
     * @alias module:model/ListJobDeploymentHistory200Response
     * @implements module:model/PaginationData
     * @implements module:model/ListJobDeploymentHistory200ResponseAllOf
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationData.initialize(this, page, pageSize);ListJobDeploymentHistory200ResponseAllOf.initialize(this);
        ListJobDeploymentHistory200Response.initialize(this, page, pageSize);
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
     * Constructs a <code>ListJobDeploymentHistory200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListJobDeploymentHistory200Response} obj Optional instance to populate.
     * @return {module:model/ListJobDeploymentHistory200Response} The populated <code>ListJobDeploymentHistory200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListJobDeploymentHistory200Response();
            PaginationData.constructFromObject(data, obj);
            ListJobDeploymentHistory200ResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DeploymentHistoryJobResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} page
 */
ListJobDeploymentHistory200Response.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
ListJobDeploymentHistory200Response.prototype['page_size'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryJobResponse>} results
 */
ListJobDeploymentHistory200Response.prototype['results'] = undefined;


// Implement PaginationData interface:
/**
 * @member {Number} page
 */
PaginationData.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationData.prototype['page_size'] = undefined;
// Implement ListJobDeploymentHistory200ResponseAllOf interface:
/**
 * @member {Array.<module:model/DeploymentHistoryJobResponse>} results
 */
ListJobDeploymentHistory200ResponseAllOf.prototype['results'] = undefined;




export default ListJobDeploymentHistory200Response;
