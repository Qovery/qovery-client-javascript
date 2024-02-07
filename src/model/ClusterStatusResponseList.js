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
import ClusterStatusGet from './ClusterStatusGet';

/**
 * The ClusterStatusResponseList model module.
 * @module model/ClusterStatusResponseList
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterStatusResponseList {
    /**
     * Constructs a new <code>ClusterStatusResponseList</code>.
     * @alias module:model/ClusterStatusResponseList
     */
    constructor() { 
        
        ClusterStatusResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterStatusResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterStatusResponseList} obj Optional instance to populate.
     * @return {module:model/ClusterStatusResponseList} The populated <code>ClusterStatusResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterStatusResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ClusterStatusGet]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClusterStatusResponseList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClusterStatusResponseList</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                ClusterStatusGet.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ClusterStatusGet>} results
 */
ClusterStatusResponseList.prototype['results'] = undefined;






export default ClusterStatusResponseList;

