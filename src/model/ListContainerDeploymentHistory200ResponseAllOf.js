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
import ListContainerDeploymentHistory200ResponseAllOfResultsInner from './ListContainerDeploymentHistory200ResponseAllOfResultsInner';

/**
 * The ListContainerDeploymentHistory200ResponseAllOf model module.
 * @module model/ListContainerDeploymentHistory200ResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ListContainerDeploymentHistory200ResponseAllOf {
    /**
     * Constructs a new <code>ListContainerDeploymentHistory200ResponseAllOf</code>.
     * @alias module:model/ListContainerDeploymentHistory200ResponseAllOf
     */
    constructor() { 
        
        ListContainerDeploymentHistory200ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListContainerDeploymentHistory200ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListContainerDeploymentHistory200ResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ListContainerDeploymentHistory200ResponseAllOf} The populated <code>ListContainerDeploymentHistory200ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListContainerDeploymentHistory200ResponseAllOf();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ListContainerDeploymentHistory200ResponseAllOfResultsInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListContainerDeploymentHistory200ResponseAllOfResultsInner>} results
 */
ListContainerDeploymentHistory200ResponseAllOf.prototype['results'] = undefined;






export default ListContainerDeploymentHistory200ResponseAllOf;
