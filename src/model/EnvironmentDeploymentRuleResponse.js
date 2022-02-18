/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResponse from './BaseResponse';

/**
 * The EnvironmentDeploymentRuleResponse model module.
 * @module model/EnvironmentDeploymentRuleResponse
 * @version 1.0.0
 */
class EnvironmentDeploymentRuleResponse {
    /**
     * Constructs a new <code>EnvironmentDeploymentRuleResponse</code>.
     * @alias module:model/EnvironmentDeploymentRuleResponse
     * @implements module:model/BaseResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);
        EnvironmentDeploymentRuleResponse.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['timezone'] = timezone;
        obj['start_time'] = startTime;
        obj['stop_time'] = stopTime;
        obj['weekdays'] = weekdays;
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>EnvironmentDeploymentRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDeploymentRuleResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentDeploymentRuleResponse} The populated <code>EnvironmentDeploymentRuleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDeploymentRuleResponse();
            BaseResponse.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auto_deploy
 * @default true
 */
EnvironmentDeploymentRuleResponse.prototype['auto_deploy'] = true;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
EnvironmentDeploymentRuleResponse.prototype['auto_stop'] = false;

/**
 * @member {String} timezone
 */
EnvironmentDeploymentRuleResponse.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
EnvironmentDeploymentRuleResponse.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
EnvironmentDeploymentRuleResponse.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/EnvironmentDeploymentRuleResponse.WeekdaysEnum>} weekdays
 */
EnvironmentDeploymentRuleResponse.prototype['weekdays'] = undefined;

/**
 * @member {String} id
 */
EnvironmentDeploymentRuleResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentDeploymentRuleResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentDeploymentRuleResponse.prototype['updated_at'] = undefined;


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



/**
 * Allowed values for the <code>weekdays</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentDeploymentRuleResponse['WeekdaysEnum'] = {

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



export default EnvironmentDeploymentRuleResponse;

