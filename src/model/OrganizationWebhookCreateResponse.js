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
import Base from './Base';
import EnvironmentModeEnum from './EnvironmentModeEnum';
import OrganizationWebhookEventEnum from './OrganizationWebhookEventEnum';
import OrganizationWebhookKindEnum from './OrganizationWebhookKindEnum';

/**
 * The OrganizationWebhookCreateResponse model module.
 * @module model/OrganizationWebhookCreateResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationWebhookCreateResponse {
    /**
     * Constructs a new <code>OrganizationWebhookCreateResponse</code>.
     * @alias module:model/OrganizationWebhookCreateResponse
     * @implements module:model/Base
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);
        OrganizationWebhookCreateResponse.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>OrganizationWebhookCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationWebhookCreateResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationWebhookCreateResponse} The populated <code>OrganizationWebhookCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationWebhookCreateResponse();
            Base.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = OrganizationWebhookKindEnum.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('target_url')) {
                obj['target_url'] = ApiClient.convertToType(data['target_url'], 'String');
            }
            if (data.hasOwnProperty('target_secret_set')) {
                obj['target_secret_set'] = ApiClient.convertToType(data['target_secret_set'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [OrganizationWebhookEventEnum]);
            }
            if (data.hasOwnProperty('project_names_filter')) {
                obj['project_names_filter'] = ApiClient.convertToType(data['project_names_filter'], ['String']);
            }
            if (data.hasOwnProperty('environment_types_filter')) {
                obj['environment_types_filter'] = ApiClient.convertToType(data['environment_types_filter'], [EnvironmentModeEnum]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationWebhookCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationWebhookCreateResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationWebhookCreateResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['target_url'] && !(typeof data['target_url'] === 'string' || data['target_url'] instanceof String)) {
            throw new Error("Expected the field `target_url` to be a primitive type in the JSON string but got " + data['target_url']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['events'])) {
            throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['project_names_filter'])) {
            throw new Error("Expected the field `project_names_filter` to be an array in the JSON data but got " + data['project_names_filter']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['environment_types_filter'])) {
            throw new Error("Expected the field `environment_types_filter` to be an array in the JSON data but got " + data['environment_types_filter']);
        }

        return true;
    }


}

OrganizationWebhookCreateResponse.RequiredProperties = ["id", "created_at"];

/**
 * @member {String} id
 */
OrganizationWebhookCreateResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
OrganizationWebhookCreateResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
OrganizationWebhookCreateResponse.prototype['updated_at'] = undefined;

/**
 * @member {module:model/OrganizationWebhookKindEnum} kind
 */
OrganizationWebhookCreateResponse.prototype['kind'] = undefined;

/**
 * Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with `http://` or `https://` 
 * @member {String} target_url
 */
OrganizationWebhookCreateResponse.prototype['target_url'] = undefined;

/**
 * @member {Boolean} target_secret_set
 */
OrganizationWebhookCreateResponse.prototype['target_secret_set'] = undefined;

/**
 * @member {String} description
 */
OrganizationWebhookCreateResponse.prototype['description'] = undefined;

/**
 * Turn on or off your endpoint.
 * @member {Boolean} enabled
 */
OrganizationWebhookCreateResponse.prototype['enabled'] = undefined;

/**
 * @member {Array.<module:model/OrganizationWebhookEventEnum>} events
 */
OrganizationWebhookCreateResponse.prototype['events'] = undefined;

/**
 * Specify the project names you want to filter to.  This webhook will be triggered only if the event is coming from the specified Project IDs. Notes: 1. Wildcard is accepted E.g. `product*`. 2. Name is case insensitive. 
 * @member {Array.<String>} project_names_filter
 */
OrganizationWebhookCreateResponse.prototype['project_names_filter'] = undefined;

/**
 * Specify the environment modes you want to filter to. This webhook will be triggered only if the event is coming from an environment with the specified mode. 
 * @member {Array.<module:model/EnvironmentModeEnum>} environment_types_filter
 */
OrganizationWebhookCreateResponse.prototype['environment_types_filter'] = undefined;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;




export default OrganizationWebhookCreateResponse;

