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
import ClusterResponse from './ClusterResponse';

/**
 * The ClusterResponseList model module.
 * @module model/ClusterResponseList
 * @version 1.0.3
 */
class ClusterResponseList {
    /**
     * Constructs a new <code>ClusterResponseList</code>.
     * @alias module:model/ClusterResponseList
     */
    constructor() { 
        
        ClusterResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterResponseList} obj Optional instance to populate.
     * @return {module:model/ClusterResponseList} The populated <code>ClusterResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ClusterResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ClusterResponse>} results
 */
ClusterResponseList.prototype['results'] = undefined;






export default ClusterResponseList;

