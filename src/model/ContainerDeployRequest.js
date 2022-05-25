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
 * The ContainerDeployRequest model module.
 * @module model/ContainerDeployRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerDeployRequest {
    /**
     * Constructs a new <code>ContainerDeployRequest</code>.
     * @alias module:model/ContainerDeployRequest
     * @param imageTag {String} Image tag to deploy
     */
    constructor(imageTag) { 
        
        ContainerDeployRequest.initialize(this, imageTag);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, imageTag) { 
        obj['image_tag'] = imageTag;
    }

    /**
     * Constructs a <code>ContainerDeployRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerDeployRequest} obj Optional instance to populate.
     * @return {module:model/ContainerDeployRequest} The populated <code>ContainerDeployRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerDeployRequest();

            if (data.hasOwnProperty('image_tag')) {
                obj['image_tag'] = ApiClient.convertToType(data['image_tag'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Image tag to deploy
 * @member {String} image_tag
 */
ContainerDeployRequest.prototype['image_tag'] = undefined;






export default ContainerDeployRequest;

