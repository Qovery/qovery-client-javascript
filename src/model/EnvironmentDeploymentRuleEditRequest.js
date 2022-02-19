/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EnvironmentDeploymentRuleEditRequest model module.
 * @module model/EnvironmentDeploymentRuleEditRequest
 * @version 1.0.2
 */
class EnvironmentDeploymentRuleEditRequest {
    /**
     * Constructs a new <code>EnvironmentDeploymentRuleEditRequest</code>.
     * @alias module:model/EnvironmentDeploymentRuleEditRequest
     * @param timezone {String} 
     * @param startTime {Date} 
     * @param stopTime {Date} 
     * @param weekdays {Array.<module:model/EnvironmentDeploymentRuleEditRequest.WeekdaysEnum>} 
     */
    constructor(timezone, startTime, stopTime, weekdays) { 
        
        EnvironmentDeploymentRuleEditRequest.initialize(this, timezone, startTime, stopTime, weekdays);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, timezone, startTime, stopTime, weekdays) { 
        obj['timezone'] = timezone;
        obj['start_time'] = startTime;
        obj['stop_time'] = stopTime;
        obj['weekdays'] = weekdays;
    }

    /**
     * Constructs a <code>EnvironmentDeploymentRuleEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDeploymentRuleEditRequest} obj Optional instance to populate.
     * @return {module:model/EnvironmentDeploymentRuleEditRequest} The populated <code>EnvironmentDeploymentRuleEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDeploymentRuleEditRequest();

            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_delete')) {
                obj['auto_delete'] = ApiClient.convertToType(data['auto_delete'], 'Boolean');
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
                obj['weekdays'] = ApiClient.convertToType(data['weekdays'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auto_deploy
 * @default true
 */
EnvironmentDeploymentRuleEditRequest.prototype['auto_deploy'] = true;

/**
 * @member {Boolean} auto_delete
 * @default false
 */
EnvironmentDeploymentRuleEditRequest.prototype['auto_delete'] = false;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
EnvironmentDeploymentRuleEditRequest.prototype['auto_stop'] = false;

/**
 * @member {String} timezone
 */
EnvironmentDeploymentRuleEditRequest.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
EnvironmentDeploymentRuleEditRequest.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
EnvironmentDeploymentRuleEditRequest.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/EnvironmentDeploymentRuleEditRequest.WeekdaysEnum>} weekdays
 */
EnvironmentDeploymentRuleEditRequest.prototype['weekdays'] = undefined;





/**
 * Allowed values for the <code>weekdays</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentDeploymentRuleEditRequest['WeekdaysEnum'] = {

    /**
     * value: "MONDAY"
     * @const
     */
    "MONDAY": "MONDAY",

    /**
     * value: "TUESDAY"
     * @const
     */
    "TUESDAY": "TUESDAY",

    /**
     * value: "WEDNESDAY"
     * @const
     */
    "WEDNESDAY": "WEDNESDAY",

    /**
     * value: "THURSDAY"
     * @const
     */
    "THURSDAY": "THURSDAY",

    /**
     * value: "FRIDAY"
     * @const
     */
    "FRIDAY": "FRIDAY",

    /**
     * value: "SATURDAY"
     * @const
     */
    "SATURDAY": "SATURDAY",

    /**
     * value: "SUNDAY"
     * @const
     */
    "SUNDAY": "SUNDAY"
};



export default EnvironmentDeploymentRuleEditRequest;

