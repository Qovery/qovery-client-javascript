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
import ClusterRegionResponse from './ClusterRegionResponse';

/**
 * The ClusterRegionResponseList model module.
 * @module model/ClusterRegionResponseList
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterRegionResponseList {
    /**
     * Constructs a new <code>ClusterRegionResponseList</code>.
     * @alias module:model/ClusterRegionResponseList
     */
    constructor() { 
        
        ClusterRegionResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterRegionResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRegionResponseList} obj Optional instance to populate.
     * @return {module:model/ClusterRegionResponseList} The populated <code>ClusterRegionResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRegionResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ClusterRegionResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ClusterRegionResponse>} results
 */
ClusterRegionResponseList.prototype['results'] = undefined;






export default ClusterRegionResponseList;

