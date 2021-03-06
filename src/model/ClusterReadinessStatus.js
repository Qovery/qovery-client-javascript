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

/**
 * The ClusterReadinessStatus model module.
 * @module model/ClusterReadinessStatus
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterReadinessStatus {
    /**
     * Constructs a new <code>ClusterReadinessStatus</code>.
     * @alias module:model/ClusterReadinessStatus
     */
    constructor() { 
        
        ClusterReadinessStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterReadinessStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterReadinessStatus} obj Optional instance to populate.
     * @return {module:model/ClusterReadinessStatus} The populated <code>ClusterReadinessStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterReadinessStatus();

            if (data.hasOwnProperty('is_ready')) {
                obj['is_ready'] = ApiClient.convertToType(data['is_ready'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_ready
 */
ClusterReadinessStatus.prototype['is_ready'] = undefined;






export default ClusterReadinessStatus;

