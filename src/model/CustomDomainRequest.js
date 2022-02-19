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
 * The CustomDomainRequest model module.
 * @module model/CustomDomainRequest
 * @version 1.0.3
 */
class CustomDomainRequest {
    /**
     * Constructs a new <code>CustomDomainRequest</code>.
     * @alias module:model/CustomDomainRequest
     * @param domain {String} your custom domain
     */
    constructor(domain) { 
        
        CustomDomainRequest.initialize(this, domain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, domain) { 
        obj['domain'] = domain;
    }

    /**
     * Constructs a <code>CustomDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomDomainRequest} obj Optional instance to populate.
     * @return {module:model/CustomDomainRequest} The populated <code>CustomDomainRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDomainRequest();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * your custom domain
 * @member {String} domain
 */
CustomDomainRequest.prototype['domain'] = undefined;






export default CustomDomainRequest;

