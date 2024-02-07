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
import CompanySizeEnum from './CompanySizeEnum';
import TypeOfUseEnum from './TypeOfUseEnum';

/**
 * The SignUpRequest model module.
 * @module model/SignUpRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class SignUpRequest {
    /**
     * Constructs a new <code>SignUpRequest</code>.
     * @alias module:model/SignUpRequest
     * @param firstName {String} 
     * @param lastName {String} 
     * @param userEmail {String} 
     * @param typeOfUse {module:model/TypeOfUseEnum} 
     * @param qoveryUsage {String} 
     */
    constructor(firstName, lastName, userEmail, typeOfUse, qoveryUsage) { 
        
        SignUpRequest.initialize(this, firstName, lastName, userEmail, typeOfUse, qoveryUsage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, userEmail, typeOfUse, qoveryUsage) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['user_email'] = userEmail;
        obj['type_of_use'] = typeOfUse;
        obj['qovery_usage'] = qoveryUsage;
    }

    /**
     * Constructs a <code>SignUpRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignUpRequest} obj Optional instance to populate.
     * @return {module:model/SignUpRequest} The populated <code>SignUpRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignUpRequest();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('user_email')) {
                obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
            }
            if (data.hasOwnProperty('type_of_use')) {
                obj['type_of_use'] = TypeOfUseEnum.constructFromObject(data['type_of_use']);
            }
            if (data.hasOwnProperty('qovery_usage')) {
                obj['qovery_usage'] = ApiClient.convertToType(data['qovery_usage'], 'String');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('company_size')) {
                obj['company_size'] = CompanySizeEnum.constructFromObject(data['company_size']);
            }
            if (data.hasOwnProperty('user_role')) {
                obj['user_role'] = ApiClient.convertToType(data['user_role'], 'String');
            }
            if (data.hasOwnProperty('qovery_usage_other')) {
                obj['qovery_usage_other'] = ApiClient.convertToType(data['qovery_usage_other'], 'String');
            }
            if (data.hasOwnProperty('user_questions')) {
                obj['user_questions'] = ApiClient.convertToType(data['user_questions'], 'String');
            }
            if (data.hasOwnProperty('current_step')) {
                obj['current_step'] = ApiClient.convertToType(data['current_step'], 'String');
            }
            if (data.hasOwnProperty('dx_auth')) {
                obj['dx_auth'] = ApiClient.convertToType(data['dx_auth'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignUpRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignUpRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignUpRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['user_email'] && !(typeof data['user_email'] === 'string' || data['user_email'] instanceof String)) {
            throw new Error("Expected the field `user_email` to be a primitive type in the JSON string but got " + data['user_email']);
        }
        // ensure the json data is a string
        if (data['qovery_usage'] && !(typeof data['qovery_usage'] === 'string' || data['qovery_usage'] instanceof String)) {
            throw new Error("Expected the field `qovery_usage` to be a primitive type in the JSON string but got " + data['qovery_usage']);
        }
        // ensure the json data is a string
        if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
            throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
        }
        // ensure the json data is a string
        if (data['user_role'] && !(typeof data['user_role'] === 'string' || data['user_role'] instanceof String)) {
            throw new Error("Expected the field `user_role` to be a primitive type in the JSON string but got " + data['user_role']);
        }
        // ensure the json data is a string
        if (data['qovery_usage_other'] && !(typeof data['qovery_usage_other'] === 'string' || data['qovery_usage_other'] instanceof String)) {
            throw new Error("Expected the field `qovery_usage_other` to be a primitive type in the JSON string but got " + data['qovery_usage_other']);
        }
        // ensure the json data is a string
        if (data['user_questions'] && !(typeof data['user_questions'] === 'string' || data['user_questions'] instanceof String)) {
            throw new Error("Expected the field `user_questions` to be a primitive type in the JSON string but got " + data['user_questions']);
        }
        // ensure the json data is a string
        if (data['current_step'] && !(typeof data['current_step'] === 'string' || data['current_step'] instanceof String)) {
            throw new Error("Expected the field `current_step` to be a primitive type in the JSON string but got " + data['current_step']);
        }

        return true;
    }


}

SignUpRequest.RequiredProperties = ["first_name", "last_name", "user_email", "type_of_use", "qovery_usage"];

/**
 * @member {String} first_name
 */
SignUpRequest.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
SignUpRequest.prototype['last_name'] = undefined;

/**
 * @member {String} user_email
 */
SignUpRequest.prototype['user_email'] = undefined;

/**
 * @member {module:model/TypeOfUseEnum} type_of_use
 */
SignUpRequest.prototype['type_of_use'] = undefined;

/**
 * @member {String} qovery_usage
 */
SignUpRequest.prototype['qovery_usage'] = undefined;

/**
 * @member {String} company_name
 */
SignUpRequest.prototype['company_name'] = undefined;

/**
 * @member {module:model/CompanySizeEnum} company_size
 */
SignUpRequest.prototype['company_size'] = undefined;

/**
 * @member {String} user_role
 */
SignUpRequest.prototype['user_role'] = undefined;

/**
 * @member {String} qovery_usage_other
 */
SignUpRequest.prototype['qovery_usage_other'] = undefined;

/**
 * @member {String} user_questions
 */
SignUpRequest.prototype['user_questions'] = undefined;

/**
 * @member {String} current_step
 */
SignUpRequest.prototype['current_step'] = undefined;

/**
 * @member {Boolean} dx_auth
 */
SignUpRequest.prototype['dx_auth'] = undefined;






export default SignUpRequest;

