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
import WeekdayEnum from './WeekdayEnum';

/**
 * The EnvironmentDeploymentRuleResponseAllOf model module.
 * @module model/EnvironmentDeploymentRuleResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentDeploymentRuleResponseAllOf {
    /**
     * Constructs a new <code>EnvironmentDeploymentRuleResponseAllOf</code>.
     * @alias module:model/EnvironmentDeploymentRuleResponseAllOf
     * @param timezone {String} 
     * @param startTime {Date} 
     * @param stopTime {Date} 
     * @param weekdays {Array.<module:model/WeekdayEnum>} 
     */
    constructor(timezone, startTime, stopTime, weekdays) { 
        
        EnvironmentDeploymentRuleResponseAllOf.initialize(this, timezone, startTime, stopTime, weekdays);
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
     * Constructs a <code>EnvironmentDeploymentRuleResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDeploymentRuleResponseAllOf} obj Optional instance to populate.
     * @return {module:model/EnvironmentDeploymentRuleResponseAllOf} The populated <code>EnvironmentDeploymentRuleResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDeploymentRuleResponseAllOf();

            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_stop')) {
                obj['auto_stop'] = ApiClient.convertToType(data['auto_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_delete')) {
                obj['auto_delete'] = ApiClient.convertToType(data['auto_delete'], 'Boolean');
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
 * @member {Boolean} auto_deploy
 * @default true
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['auto_deploy'] = true;

/**
 * @member {Boolean} auto_stop
 * @default false
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['auto_stop'] = false;

/**
 * @member {Boolean} auto_delete
 * @default false
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['auto_delete'] = false;

/**
 * @member {Boolean} auto_preview
 * @default false
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['auto_preview'] = false;

/**
 * @member {String} timezone
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['timezone'] = undefined;

/**
 * @member {Date} start_time
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['start_time'] = undefined;

/**
 * @member {Date} stop_time
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['stop_time'] = undefined;

/**
 * @member {Array.<module:model/WeekdayEnum>} weekdays
 */
EnvironmentDeploymentRuleResponseAllOf.prototype['weekdays'] = undefined;






export default EnvironmentDeploymentRuleResponseAllOf;

