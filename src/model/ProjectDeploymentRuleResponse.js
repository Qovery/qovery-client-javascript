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
import ProjectDeploymentRuleRequest from './ProjectDeploymentRuleRequest';
import ProjectDeploymentRuleResponseAllOf from './ProjectDeploymentRuleResponseAllOf';

/**
 * The ProjectDeploymentRuleResponse model module.
 * @module model/ProjectDeploymentRuleResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProjectDeploymentRuleResponse {
    /**
     * Constructs a new <code>ProjectDeploymentRuleResponse</code>.
     * @alias module:model/ProjectDeploymentRuleResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ProjectDeploymentRuleRequest
     * @implements module:model/ProjectDeploymentRuleResponseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param name {String} name is case insensitive
     * @param mode {module:model/ProjectDeploymentRuleResponse.ModeEnum} 
     * @param clusterId {String} 
     * @param timezone {String} 
     * @param startTime {Date} 
     * @param stopTime {Date} 
     * @param weekdays {Array.<module:model/ProjectDeploymentRuleResponse.WeekdaysEnum>} 
     * @param wildcard {String} wildcard pattern composed of '?' and/or '*' used to target new created environments
     */
    constructor(id, createdAt, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard) { 
        BaseResponse.initialize(this, id, createdAt);ProjectDeploymentRuleRequest.initialize(this, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard);ProjectDeploymentRuleResponseAllOf.initialize(this);
        ProjectDeploymentRuleResponse.initialize(this, id, createdAt, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, name, mode, clusterId, timezone, startTime, stopTime, weekdays, wildcard) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
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
     * Constructs a <code>ProjectDeploymentRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectDeploymentRuleResponse} obj Optional instance to populate.
     * @return {module:model/ProjectDeploymentRuleResponse} The populated <code>ProjectDeploymentRuleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectDeploymentRuleResponse();
            BaseResponse.constructFromObject(data, obj);
            ProjectDeploymentRuleRequest.constructFromObject(data, obj);
            ProjectDeploymentRuleResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_stop')) {
                obj['auto_stop'] = ApiClient.convertToType(data['auto_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_delete')) {
                obj['auto_delete'] = ApiClient.convertToType(data['auto_delete'], 'Boolean');
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
            if (data.hasOwnProperty('wildcard')) {
                obj['wildcard'] = ApiClient.convertToType(data['wildcard'], 'String');
            }
            if (data.hasOwnProperty('priority_index')) {
                obj['priority_index'] = ApiClient.convertToType(data['priority_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ProjectDeploymentRuleResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
ProjectDeploymentRuleResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ProjectDeploymentRuleResponse.prototype['updated_at'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ProjectDeploymentRuleResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ProjectDeploymentRuleResponse.prototype['description'] = undefined;

/**
 * @member {module:model/ProjectDeploymentRuleResponse.ModeEnum} mode
 */
ProjectDeploymentRuleResponse.prototype['mode'] = undefined;

/**
 * @member {String} cluster_id
 */
ProjectDeploymentRuleResponse.prototype['cluster_id'] = undefined;

/**
 * @member {Boolean} auto_deploy
 * @default false
 */
ProjectDeploymentRuleResponse.prototype['auto_deploy'] = false;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
ProjectDeploymentRuleResponse.prototype['auto_stop'] = false;

/**
 * @member {Boolean} auto_delete
 * @default false
 */
ProjectDeploymentRuleResponse.prototype['auto_delete'] = false;

/**
 * @member {String} timezone
 */
ProjectDeploymentRuleResponse.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
ProjectDeploymentRuleResponse.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
ProjectDeploymentRuleResponse.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/ProjectDeploymentRuleResponse.WeekdaysEnum>} weekdays
 */
ProjectDeploymentRuleResponse.prototype['weekdays'] = undefined;

/**
 * wildcard pattern composed of '?' and/or '*' used to target new created environments
 * @member {String} wildcard
 * @default ''
 */
ProjectDeploymentRuleResponse.prototype['wildcard'] = '';

/**
 * used to select the first deployment rule to match new created environments
 * @member {Number} priority_index
 */
ProjectDeploymentRuleResponse.prototype['priority_index'] = undefined;


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
// Implement ProjectDeploymentRuleRequest interface:
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
 * @member {module:model/ProjectDeploymentRuleRequest.ModeEnum} mode
 */
ProjectDeploymentRuleRequest.prototype['mode'] = undefined;
/**
 * @member {String} cluster_id
 */
ProjectDeploymentRuleRequest.prototype['cluster_id'] = undefined;
/**
 * @member {Boolean} auto_deploy
 * @default false
 */
ProjectDeploymentRuleRequest.prototype['auto_deploy'] = false;
/**
 * @member {Boolean} auto_stop
 * @default false
 */
ProjectDeploymentRuleRequest.prototype['auto_stop'] = false;
/**
 * @member {Boolean} auto_delete
 * @default false
 */
ProjectDeploymentRuleRequest.prototype['auto_delete'] = false;
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
 * @member {Array.<module:model/ProjectDeploymentRuleRequest.WeekdaysEnum>} weekdays
 */
ProjectDeploymentRuleRequest.prototype['weekdays'] = undefined;
/**
 * wildcard pattern composed of '?' and/or '*' used to target new created environments
 * @member {String} wildcard
 * @default ''
 */
ProjectDeploymentRuleRequest.prototype['wildcard'] = '';
// Implement ProjectDeploymentRuleResponseAllOf interface:
/**
 * used to select the first deployment rule to match new created environments
 * @member {Number} priority_index
 */
ProjectDeploymentRuleResponseAllOf.prototype['priority_index'] = undefined;



/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ProjectDeploymentRuleResponse['ModeEnum'] = {

    /**
     * value: "DEVELOPMENT"
     * @const
     */
    "DEVELOPMENT": "DEVELOPMENT",

    /**
     * value: "STAGING"
     * @const
     */
    "STAGING": "STAGING",

    /**
     * value: "PRODUCTION"
     * @const
     */
    "PRODUCTION": "PRODUCTION"
};


/**
 * Allowed values for the <code>weekdays</code> property.
 * @enum {String}
 * @readonly
 */
ProjectDeploymentRuleResponse['WeekdaysEnum'] = {

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



export default ProjectDeploymentRuleResponse;

