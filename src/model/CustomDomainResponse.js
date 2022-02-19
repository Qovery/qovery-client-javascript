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
import BaseResponse from './BaseResponse';
import CustomDomainRequest from './CustomDomainRequest';

/**
 * The CustomDomainResponse model module.
 * @module model/CustomDomainResponse
 * @version 1.0.3
 */
class CustomDomainResponse {
    /**
     * Constructs a new <code>CustomDomainResponse</code>.
     * @alias module:model/CustomDomainResponse
     * @implements module:model/BaseResponse
     * @implements module:model/CustomDomainRequest
     * @param id {String} 
     * @param createdAt {Date} 
     * @param domain {String} your custom domain
     */
    constructor(id, createdAt, domain) { 
        BaseResponse.initialize(this, id, createdAt);CustomDomainRequest.initialize(this, domain);
        CustomDomainResponse.initialize(this, id, createdAt, domain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, domain) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['domain'] = domain;
    }

    /**
     * Constructs a <code>CustomDomainResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomDomainResponse} obj Optional instance to populate.
     * @return {module:model/CustomDomainResponse} The populated <code>CustomDomainResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDomainResponse();
            BaseResponse.constructFromObject(data, obj);
            CustomDomainRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('validation_domain')) {
                obj['validation_domain'] = ApiClient.convertToType(data['validation_domain'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * URL provided by Qovery. You must create a CNAME on your DNS provider using that URL
 * @member {String} validation_domain
 */
CustomDomainResponse.prototype['validation_domain'] = undefined;

/**
 * @member {module:model/CustomDomainResponse.StatusEnum} status
 */
CustomDomainResponse.prototype['status'] = undefined;

/**
 * @member {String} id
 */
CustomDomainResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
CustomDomainResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
CustomDomainResponse.prototype['updated_at'] = undefined;

/**
 * your custom domain
 * @member {String} domain
 */
CustomDomainResponse.prototype['domain'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;
// Implement CustomDomainRequest interface:
/**
 * your custom domain
 * @member {String} domain
 */
CustomDomainRequest.prototype['domain'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CustomDomainResponse['StatusEnum'] = {

    /**
     * value: "deploying"
     * @const
     */
    "deploying": "deploying",

    /**
     * value: "checking"
     * @const
     */
    "checking": "checking",

    /**
     * value: "ready"
     * @const
     */
    "ready": "ready",

    /**
     * value: "error"
     * @const
     */
    "error": "error"
};



export default CustomDomainResponse;

