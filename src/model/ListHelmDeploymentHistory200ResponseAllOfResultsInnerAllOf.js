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
 * The ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf model module.
 * @module model/ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf {
    /**
     * Constructs a new <code>ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf</code>.
     * @alias module:model/ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf
     */
    constructor() { 
        
        ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf} obj Optional instance to populate.
     * @return {module:model/ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf} The populated <code>ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * name of the helm
 * @member {String} name
 */
ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf.prototype['status'] = undefined;






export default ListHelmDeploymentHistory200ResponseAllOfResultsInnerAllOf;

