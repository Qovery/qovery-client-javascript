/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeploymentRuleRequest model module.
 * @module model/DeploymentRuleRequest
 * @version 1.0.1
 */
class DeploymentRuleRequest {
    /**
     * Constructs a new <code>DeploymentRuleRequest</code>.
     * @alias module:model/DeploymentRuleRequest
     * @param name {String} name is case insensitive
     * @param mode {module:model/DeploymentRuleRequest.ModeEnum} 
     * @param cluster {String} 
     * @param autoStop {Boolean} 
     */
    constructor(name, mode, cluster, autoStop) { 
        
        DeploymentRuleRequest.initialize(this, name, mode, cluster, autoStop);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, mode, cluster, autoStop) { 
        obj['name'] = name;
        obj['mode'] = mode;
        obj['cluster'] = cluster;
        obj['auto_stop'] = autoStop || false;
    }

    /**
     * Constructs a <code>DeploymentRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentRuleRequest} obj Optional instance to populate.
     * @return {module:model/DeploymentRuleRequest} The populated <code>DeploymentRuleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentRuleRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = ApiClient.convertToType(data['cluster'], 'String');
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
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
 * name is case insensitive
 * @member {String} name
 */
DeploymentRuleRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
DeploymentRuleRequest.prototype['description'] = undefined;

/**
 * @member {module:model/DeploymentRuleRequest.ModeEnum} mode
 */
DeploymentRuleRequest.prototype['mode'] = undefined;

/**
 * @member {String} cluster
 */
DeploymentRuleRequest.prototype['cluster'] = undefined;

/**
 * @member {Boolean} auto_deploy
 * @default true
 */
DeploymentRuleRequest.prototype['auto_deploy'] = true;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
DeploymentRuleRequest.prototype['auto_stop'] = false;

/**
 * specify value only if auto_stop = false
 * @member {String} timezone
 * @default 'Europe/London'
 */
DeploymentRuleRequest.prototype['timezone'] = 'Europe/London';

/**
 * specify value only if auto_stop = false
 * @member {Date} start_time
 */
DeploymentRuleRequest.prototype['start_time'] = undefined;

/**
 * specify value only if auto_stop = false
 * @member {Date} stop_time
 */
DeploymentRuleRequest.prototype['stop_time'] = undefined;

/**
 * specify value only if auto_stop = false
 * @member {Array.<module:model/DeploymentRuleRequest.WeekdaysEnum>} weekdays
 */
DeploymentRuleRequest.prototype['weekdays'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentRuleRequest['ModeEnum'] = {

    /**
     * value: "PRODUCTION"
     * @const
     */
    "PRODUCTION": "PRODUCTION",

    /**
     * value: "DEVELOPMENT"
     * @const
     */
    "DEVELOPMENT": "DEVELOPMENT"
};


/**
 * Allowed values for the <code>weekdays</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentRuleRequest['WeekdaysEnum'] = {

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



export default DeploymentRuleRequest;

