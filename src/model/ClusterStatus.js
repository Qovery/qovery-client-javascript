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
import StateEnum from './StateEnum';

/**
 * The ClusterStatus model module.
 * @module model/ClusterStatus
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterStatus {
    /**
     * Constructs a new <code>ClusterStatus</code>.
     * @alias module:model/ClusterStatus
     */
    constructor() { 
        
        ClusterStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterStatus} obj Optional instance to populate.
     * @return {module:model/ClusterStatus} The populated <code>ClusterStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterStatus();

            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('is_deployed')) {
                obj['is_deployed'] = ApiClient.convertToType(data['is_deployed'], 'Boolean');
            }
            if (data.hasOwnProperty('last_execution_id')) {
                obj['last_execution_id'] = ApiClient.convertToType(data['last_execution_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cluster_id
 */
ClusterStatus.prototype['cluster_id'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
ClusterStatus.prototype['status'] = undefined;

/**
 * @member {Boolean} is_deployed
 */
ClusterStatus.prototype['is_deployed'] = undefined;

/**
 * Only set for /organization/{organizationId}/cluster/status
 * @member {String} last_execution_id
 */
ClusterStatus.prototype['last_execution_id'] = undefined;






export default ClusterStatus;

