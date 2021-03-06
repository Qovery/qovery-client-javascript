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
 * The RewardClaim model module.
 * @module model/RewardClaim
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class RewardClaim {
    /**
     * Constructs a new <code>RewardClaim</code>.
     * @alias module:model/RewardClaim
     */
    constructor() { 
        
        RewardClaim.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RewardClaim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardClaim} obj Optional instance to populate.
     * @return {module:model/RewardClaim} The populated <code>RewardClaim</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardClaim();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RewardClaim.TypeEnum} type
 */
RewardClaim.prototype['type'] = undefined;

/**
 * @member {String} code
 */
RewardClaim.prototype['code'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RewardClaim['TypeEnum'] = {

    /**
     * value: "INVITATION"
     * @const
     */
    "INVITATION": "INVITATION"
};



export default RewardClaim;

