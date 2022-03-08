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
import ClusterStatusEnum from './ClusterStatusEnum';

/**
 * The ClusterResponseAllOf model module.
 * @module model/ClusterResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterResponseAllOf {
    /**
     * Constructs a new <code>ClusterResponseAllOf</code>.
     * @alias module:model/ClusterResponseAllOf
     */
    constructor() { 
        
        ClusterResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ClusterResponseAllOf} The populated <code>ClusterResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterResponseAllOf();

            if (data.hasOwnProperty('estimated_cloud_provider_cost')) {
                obj['estimated_cloud_provider_cost'] = ApiClient.convertToType(data['estimated_cloud_provider_cost'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ClusterStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('has_access')) {
                obj['has_access'] = ApiClient.convertToType(data['has_access'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
 * @member {Number} estimated_cloud_provider_cost
 */
ClusterResponseAllOf.prototype['estimated_cloud_provider_cost'] = undefined;

/**
 * @member {module:model/ClusterStatusEnum} status
 */
ClusterResponseAllOf.prototype['status'] = undefined;

/**
 * @member {Boolean} has_access
 */
ClusterResponseAllOf.prototype['has_access'] = undefined;

/**
 * @member {String} version
 */
ClusterResponseAllOf.prototype['version'] = undefined;

/**
 * @member {Boolean} is_default
 */
ClusterResponseAllOf.prototype['is_default'] = undefined;






export default ClusterResponseAllOf;

