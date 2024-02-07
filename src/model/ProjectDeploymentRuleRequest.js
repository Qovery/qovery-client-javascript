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
import WeekdayEnum from './WeekdayEnum';

/**
 * The ProjectDeploymentRuleRequest model module.
 * @module model/ProjectDeploymentRuleRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProjectDeploymentRuleRequest {
    /**
     * Constructs a new <code>ProjectDeploymentRuleRequest</code>.
     * @alias module:model/ProjectDeploymentRuleRequest
     * @param name {String} name is case insensitive
     * @param mode {module:model/EnvironmentModeEnum} 
     * @param clusterId {String} 
     * @param timezone {String} 
     * @param startTime {Date} 
     * @param stopTime {Date} 
     * @param weekdays {Array.<module:model/WeekdayEnum>} 
     * @param wildcard {String} wildcard pattern composed of '?' and/or '*' used to target new created environments
     */
    constructor(name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard) { 
        
        ProjectDeploymentRuleRequest.initialize(this, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard) { 
        obj['name'] = name;
        obj['mode'] = mode;
        obj['cluster_id'] = clusterId;
        obj['timezone'] = timezone;
        obj['start_time'] = startTime;
        obj['stop_time'] = stopTime;
        obj['weekdays'] = weekdays;
        obj['wildcard'] = wildcard || '';
    }

    /**
     * Constructs a <code>ProjectDeploymentRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectDeploymentRuleRequest} obj Optional instance to populate.
     * @return {module:model/ProjectDeploymentRuleRequest} The populated <code>ProjectDeploymentRuleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectDeploymentRuleRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = EnvironmentModeEnum.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('auto_stop')) {
                obj['auto_stop'] = ApiClient.convertToType(data['auto_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('stop_time')) {
                obj['stop_time'] = ApiClient.convertToType(data['stop_time'], 'Date');
            }
            if (data.hasOwnProperty('weekdays')) {
                obj['weekdays'] = ApiClient.convertToType(data['weekdays'], [WeekdayEnum]);
            }
            if (data.hasOwnProperty('wildcard')) {
                obj['wildcard'] = ApiClient.convertToType(data['wildcard'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectDeploymentRuleRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectDeploymentRuleRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProjectDeploymentRuleRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['cluster_id'] && !(typeof data['cluster_id'] === 'string' || data['cluster_id'] instanceof String)) {
            throw new Error("Expected the field `cluster_id` to be a primitive type in the JSON string but got " + data['cluster_id']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['weekdays'])) {
            throw new Error("Expected the field `weekdays` to be an array in the JSON data but got " + data['weekdays']);
        }
        // ensure the json data is a string
        if (data['wildcard'] && !(typeof data['wildcard'] === 'string' || data['wildcard'] instanceof String)) {
            throw new Error("Expected the field `wildcard` to be a primitive type in the JSON string but got " + data['wildcard']);
        }

        return true;
    }


}

ProjectDeploymentRuleRequest.RequiredProperties = ["name", "mode", "cluster_id", "timezone", "start_time", "stop_time", "weekdays", "wildcard"];

/**
 * name is case insensitive
 * @member {String} name
 */
ProjectDeploymentRuleRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ProjectDeploymentRuleRequest.prototype['description'] = undefined;

/**
 * @member {module:model/EnvironmentModeEnum} mode
 */
ProjectDeploymentRuleRequest.prototype['mode'] = undefined;

/**
 * @member {String} cluster_id
 */
ProjectDeploymentRuleRequest.prototype['cluster_id'] = undefined;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
ProjectDeploymentRuleRequest.prototype['auto_stop'] = false;

/**
 * @member {String} timezone
 */
ProjectDeploymentRuleRequest.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
ProjectDeploymentRuleRequest.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
ProjectDeploymentRuleRequest.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/WeekdayEnum>} weekdays
 */
ProjectDeploymentRuleRequest.prototype['weekdays'] = undefined;

/**
 * wildcard pattern composed of '?' and/or '*' used to target new created environments
 * @member {String} wildcard
 * @default ''
 */
ProjectDeploymentRuleRequest.prototype['wildcard'] = '';






export default ProjectDeploymentRuleRequest;

