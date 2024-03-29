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
import EnvironmentDeploymentRuleAllOf from './EnvironmentDeploymentRuleAllOf';
import WeekdayEnum from './WeekdayEnum';

/**
 * The EnvironmentDeploymentRule model module.
 * @module model/EnvironmentDeploymentRule
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentDeploymentRule {
    /**
     * Constructs a new <code>EnvironmentDeploymentRule</code>.
     * @alias module:model/EnvironmentDeploymentRule
     * @implements module:model/Base
     * @implements module:model/EnvironmentDeploymentRuleAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param timezone {String} 
     * @param startTime {Date} 
     * @param stopTime {Date} 
     * @param weekdays {Array.<module:model/WeekdayEnum>} 
     */
    constructor(id, createdAt, timezone, startTime, stopTime, weekdays) { 
        Base.initialize(this, id, createdAt);EnvironmentDeploymentRuleAllOf.initialize(this, timezone, startTime, stopTime, weekdays);
        EnvironmentDeploymentRule.initialize(this, id, createdAt, timezone, startTime, stopTime, weekdays);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, timezone, startTime, stopTime, weekdays) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['timezone'] = timezone;
        obj['start_time'] = startTime;
        obj['stop_time'] = stopTime;
        obj['weekdays'] = weekdays;
    }

    /**
     * Constructs a <code>EnvironmentDeploymentRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDeploymentRule} obj Optional instance to populate.
     * @return {module:model/EnvironmentDeploymentRule} The populated <code>EnvironmentDeploymentRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDeploymentRule();
            Base.constructFromObject(data, obj);
            EnvironmentDeploymentRuleAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('on_demand_preview')) {
                obj['on_demand_preview'] = ApiClient.convertToType(data['on_demand_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_stop')) {
                obj['auto_stop'] = ApiClient.convertToType(data['auto_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EnvironmentDeploymentRule.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentDeploymentRule.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentDeploymentRule.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} on_demand_preview
 * @default false
 */
EnvironmentDeploymentRule.prototype['on_demand_preview'] = false;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
EnvironmentDeploymentRule.prototype['auto_stop'] = false;

/**
 * @member {Boolean} auto_preview
 * @default false
 */
EnvironmentDeploymentRule.prototype['auto_preview'] = false;

/**
 * @member {String} timezone
 */
EnvironmentDeploymentRule.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
EnvironmentDeploymentRule.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
EnvironmentDeploymentRule.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/WeekdayEnum>} weekdays
 */
EnvironmentDeploymentRule.prototype['weekdays'] = undefined;


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
// Implement EnvironmentDeploymentRuleAllOf interface:
/**
 * @member {Boolean} on_demand_preview
 * @default false
 */
EnvironmentDeploymentRuleAllOf.prototype['on_demand_preview'] = false;
/**
 * @member {Boolean} auto_stop
 * @default false
 */
EnvironmentDeploymentRuleAllOf.prototype['auto_stop'] = false;
/**
 * @member {Boolean} auto_preview
 * @default false
 */
EnvironmentDeploymentRuleAllOf.prototype['auto_preview'] = false;
/**
 * @member {String} timezone
 */
EnvironmentDeploymentRuleAllOf.prototype['timezone'] = undefined;
/**
 * @member {Date} start_time
 */
EnvironmentDeploymentRuleAllOf.prototype['start_time'] = undefined;
/**
 * @member {Date} stop_time
 */
EnvironmentDeploymentRuleAllOf.prototype['stop_time'] = undefined;
/**
 * @member {Array.<module:model/WeekdayEnum>} weekdays
 */
EnvironmentDeploymentRuleAllOf.prototype['weekdays'] = undefined;




export default EnvironmentDeploymentRule;

