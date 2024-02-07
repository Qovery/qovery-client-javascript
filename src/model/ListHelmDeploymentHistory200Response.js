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
import DeploymentHistoryHelmResponse from './DeploymentHistoryHelmResponse';
import PaginationData from './PaginationData';

/**
 * The ListHelmDeploymentHistory200Response model module.
 * @module model/ListHelmDeploymentHistory200Response
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ListHelmDeploymentHistory200Response {
    /**
     * Constructs a new <code>ListHelmDeploymentHistory200Response</code>.
     * @alias module:model/ListHelmDeploymentHistory200Response
     * @implements module:model/PaginationData
     * @param page {Number} 
     * @param pageSize {Number} 
     */
    constructor(page, pageSize) { 
        PaginationData.initialize(this, page, pageSize);
        ListHelmDeploymentHistory200Response.initialize(this, page, pageSize);
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
     * Constructs a <code>ListHelmDeploymentHistory200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHelmDeploymentHistory200Response} obj Optional instance to populate.
     * @return {module:model/ListHelmDeploymentHistory200Response} The populated <code>ListHelmDeploymentHistory200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHelmDeploymentHistory200Response();
            PaginationData.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DeploymentHistoryHelmResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListHelmDeploymentHistory200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListHelmDeploymentHistory200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListHelmDeploymentHistory200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                DeploymentHistoryHelmResponse.validateJSON(item);
            };
        }

        return true;
    }


}

ListHelmDeploymentHistory200Response.RequiredProperties = ["page", "page_size"];

/**
 * @member {Number} page
 */
ListHelmDeploymentHistory200Response.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
ListHelmDeploymentHistory200Response.prototype['page_size'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryHelmResponse>} results
 */
ListHelmDeploymentHistory200Response.prototype['results'] = undefined;


// Implement PaginationData interface:
/**
 * @member {Number} page
 */
PaginationData.prototype['page'] = undefined;
/**
 * @member {Number} page_size
 */
PaginationData.prototype['page_size'] = undefined;




export default ListHelmDeploymentHistory200Response;

