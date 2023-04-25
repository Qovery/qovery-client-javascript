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
import OrganizationEventOrigin from './OrganizationEventOrigin';
import OrganizationEventSubTargetType from './OrganizationEventSubTargetType';
import OrganizationEventTargetType from './OrganizationEventTargetType';
import OrganizationEventType from './OrganizationEventType';

/**
 * The OrganizationEventResponse model module.
 * @module model/OrganizationEventResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationEventResponse {
    /**
     * Constructs a new <code>OrganizationEventResponse</code>.
     * @alias module:model/OrganizationEventResponse
     */
    constructor() { 
        
        OrganizationEventResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationEventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationEventResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationEventResponse} The populated <code>OrganizationEventResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationEventResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = OrganizationEventType.constructFromObject(data['event_type']);
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'String');
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
            if (data.hasOwnProperty('target_type')) {
                obj['target_type'] = OrganizationEventTargetType.constructFromObject(data['target_type']);
            }
            if (data.hasOwnProperty('sub_target_type')) {
                obj['sub_target_type'] = OrganizationEventSubTargetType.constructFromObject(data['sub_target_type']);
            }
            if (data.hasOwnProperty('change')) {
                obj['change'] = ApiClient.convertToType(data['change'], 'String');
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = OrganizationEventOrigin.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('triggered_by')) {
                obj['triggered_by'] = ApiClient.convertToType(data['triggered_by'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
OrganizationEventResponse.prototype['id'] = undefined;

/**
 * @member {Date} timestamp
 */
OrganizationEventResponse.prototype['timestamp'] = undefined;

/**
 * @member {module:model/OrganizationEventType} event_type
 */
OrganizationEventResponse.prototype['event_type'] = undefined;

/**
 * @member {String} target_id
 */
OrganizationEventResponse.prototype['target_id'] = undefined;

/**
 * @member {String} target_name
 */
OrganizationEventResponse.prototype['target_name'] = undefined;

/**
 * @member {module:model/OrganizationEventTargetType} target_type
 */
OrganizationEventResponse.prototype['target_type'] = undefined;

/**
 * @member {module:model/OrganizationEventSubTargetType} sub_target_type
 */
OrganizationEventResponse.prototype['sub_target_type'] = undefined;

/**
 * @member {String} change
 */
OrganizationEventResponse.prototype['change'] = undefined;

/**
 * @member {module:model/OrganizationEventOrigin} origin
 */
OrganizationEventResponse.prototype['origin'] = undefined;

/**
 * @member {String} triggered_by
 */
OrganizationEventResponse.prototype['triggered_by'] = undefined;

/**
 * @member {String} project_id
 */
OrganizationEventResponse.prototype['project_id'] = undefined;

/**
 * @member {String} environment_id
 */
OrganizationEventResponse.prototype['environment_id'] = undefined;






export default OrganizationEventResponse;

