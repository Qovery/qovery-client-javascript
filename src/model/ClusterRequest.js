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
import ClusterFeatureRequest from './ClusterFeatureRequest';
import ClusterFeatureRequestFeatures from './ClusterFeatureRequestFeatures';
import Model1 from './Model1';

/**
 * The ClusterRequest model module.
 * @module model/ClusterRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterRequest {
    /**
     * Constructs a new <code>ClusterRequest</code>.
     * @alias module:model/ClusterRequest
     * @implements module:model/Model1
     * @implements module:model/ClusterFeatureRequest
     */
    constructor() { 
        ClusterFeatureRequest.initialize(this);
        ClusterRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRequest} obj Optional instance to populate.
     * @return {module:model/ClusterRequest} The populated <code>ClusterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRequest();
            Model1.constructFromObject(data, obj);
            ClusterFeatureRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [ClusterFeatureRequestFeatures]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ClusterFeatureRequestFeatures>} features
 */
ClusterRequest.prototype['features'] = undefined;


// Implement ClusterFeatureRequest interface:
/**
 * @member {Array.<module:model/ClusterFeatureRequestFeatures>} features
 */
ClusterFeatureRequest.prototype['features'] = undefined;




export default ClusterRequest;

