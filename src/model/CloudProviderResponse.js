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
import ClusterRegionResponse from './ClusterRegionResponse';

/**
 * The CloudProviderResponse model module.
 * @module model/CloudProviderResponse
 * @version 1.0.1
 */
class CloudProviderResponse {
    /**
     * Constructs a new <code>CloudProviderResponse</code>.
     * @alias module:model/CloudProviderResponse
     */
    constructor() { 
        
        CloudProviderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CloudProviderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudProviderResponse} obj Optional instance to populate.
     * @return {module:model/CloudProviderResponse} The populated <code>CloudProviderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudProviderResponse();

            if (data.hasOwnProperty('short_name')) {
                obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], [ClusterRegionResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} short_name
 */
CloudProviderResponse.prototype['short_name'] = undefined;

/**
 * @member {String} name
 */
CloudProviderResponse.prototype['name'] = undefined;

/**
 * @member {String} logo_url
 */
CloudProviderResponse.prototype['logo_url'] = undefined;

/**
 * @member {Array.<module:model/ClusterRegionResponse>} regions
 */
CloudProviderResponse.prototype['regions'] = undefined;






export default CloudProviderResponse;

