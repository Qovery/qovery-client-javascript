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
import EnvironmentModeEnum from './EnvironmentModeEnum';
import OrganizationWebhookEventEnum from './OrganizationWebhookEventEnum';
import OrganizationWebhookKindEnum from './OrganizationWebhookKindEnum';

/**
 * The OrganizationWebhookCreateRequest model module.
 * @module model/OrganizationWebhookCreateRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationWebhookCreateRequest {
    /**
     * Constructs a new <code>OrganizationWebhookCreateRequest</code>.
     * @alias module:model/OrganizationWebhookCreateRequest
     * @param kind {module:model/OrganizationWebhookKindEnum} 
     * @param targetUrl {String} Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with `http://` or `https://` 
     * @param events {Array.<module:model/OrganizationWebhookEventEnum>} 
     */
    constructor(kind, targetUrl, events) { 
        
        OrganizationWebhookCreateRequest.initialize(this, kind, targetUrl, events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind, targetUrl, events) { 
        obj['kind'] = kind;
        obj['target_url'] = targetUrl;
        obj['events'] = events;
    }

    /**
     * Constructs a <code>OrganizationWebhookCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationWebhookCreateRequest} obj Optional instance to populate.
     * @return {module:model/OrganizationWebhookCreateRequest} The populated <code>OrganizationWebhookCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationWebhookCreateRequest();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = OrganizationWebhookKindEnum.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('target_url')) {
                obj['target_url'] = ApiClient.convertToType(data['target_url'], 'String');
            }
            if (data.hasOwnProperty('target_secret')) {
                obj['target_secret'] = ApiClient.convertToType(data['target_secret'], 'String');
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
            if (data.hasOwnProperty('project_id_filter')) {
                obj['project_id_filter'] = ApiClient.convertToType(data['project_id_filter'], ['String']);
            }
            if (data.hasOwnProperty('environment_types_filter')) {
                obj['environment_types_filter'] = ApiClient.convertToType(data['environment_types_filter'], [EnvironmentModeEnum]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OrganizationWebhookKindEnum} kind
 */
OrganizationWebhookCreateRequest.prototype['kind'] = undefined;

/**
 * Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with `http://` or `https://` 
 * @member {String} target_url
 */
OrganizationWebhookCreateRequest.prototype['target_url'] = undefined;

/**
 * Make sure you receive a payload to sign the Qovery request with your secret. Qovery will add a HTTP header `Qovery-Signature: <Your Secret>` to every webhook requests sent to your target URL. 
 * @member {String} target_secret
 */
OrganizationWebhookCreateRequest.prototype['target_secret'] = undefined;

/**
 * @member {String} description
 */
OrganizationWebhookCreateRequest.prototype['description'] = undefined;

/**
 * Turn on or off your endpoint.
 * @member {Boolean} enabled
 */
OrganizationWebhookCreateRequest.prototype['enabled'] = undefined;

/**
 * @member {Array.<module:model/OrganizationWebhookEventEnum>} events
 */
OrganizationWebhookCreateRequest.prototype['events'] = undefined;

/**
 * @member {Array.<String>} project_id_filter
 */
OrganizationWebhookCreateRequest.prototype['project_id_filter'] = undefined;

/**
 * Specify the environment modes you want to filter to. This webhook will be triggered only if the event is coming from an environment with the specified mode. 
 * @member {Array.<module:model/EnvironmentModeEnum>} environment_types_filter
 */
OrganizationWebhookCreateRequest.prototype['environment_types_filter'] = undefined;






export default OrganizationWebhookCreateRequest;

