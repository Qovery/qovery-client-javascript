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
 * The EditDeploymentStage200ResponseAllOfServicesInnerAllOf model module.
 * @module model/EditDeploymentStage200ResponseAllOfServicesInnerAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EditDeploymentStage200ResponseAllOfServicesInnerAllOf {
    /**
     * Constructs a new <code>EditDeploymentStage200ResponseAllOfServicesInnerAllOf</code>.
     * @alias module:model/EditDeploymentStage200ResponseAllOfServicesInnerAllOf
     */
    constructor() { 
        
        EditDeploymentStage200ResponseAllOfServicesInnerAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditDeploymentStage200ResponseAllOfServicesInnerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditDeploymentStage200ResponseAllOfServicesInnerAllOf} obj Optional instance to populate.
     * @return {module:model/EditDeploymentStage200ResponseAllOfServicesInnerAllOf} The populated <code>EditDeploymentStage200ResponseAllOfServicesInnerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditDeploymentStage200ResponseAllOfServicesInnerAllOf();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id of the service attached to the stage
 * @member {String} service_id
 */
EditDeploymentStage200ResponseAllOfServicesInnerAllOf.prototype['service_id'] = undefined;






export default EditDeploymentStage200ResponseAllOfServicesInnerAllOf;

