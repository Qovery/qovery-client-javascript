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

/**
 * The JobAdvancedSettings model module.
 * @module model/JobAdvancedSettings
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class JobAdvancedSettings {
    /**
     * Constructs a new <code>JobAdvancedSettings</code>.
     * @alias module:model/JobAdvancedSettings
     */
    constructor() { 
        
        JobAdvancedSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobAdvancedSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobAdvancedSettings} obj Optional instance to populate.
     * @return {module:model/JobAdvancedSettings} The populated <code>JobAdvancedSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobAdvancedSettings();

            if (data.hasOwnProperty('build.timeout_max_sec')) {
                obj['build.timeout_max_sec'] = ApiClient.convertToType(data['build.timeout_max_sec'], 'Number');
            }
            if (data.hasOwnProperty('build.cpu_max_in_milli')) {
                obj['build.cpu_max_in_milli'] = ApiClient.convertToType(data['build.cpu_max_in_milli'], 'Number');
            }
            if (data.hasOwnProperty('build.ram_max_in_gib')) {
                obj['build.ram_max_in_gib'] = ApiClient.convertToType(data['build.ram_max_in_gib'], 'Number');
            }
            if (data.hasOwnProperty('deployment.termination_grace_period_seconds')) {
                obj['deployment.termination_grace_period_seconds'] = ApiClient.convertToType(data['deployment.termination_grace_period_seconds'], 'Number');
            }
            if (data.hasOwnProperty('job.delete_ttl_seconds_after_finished')) {
                obj['job.delete_ttl_seconds_after_finished'] = ApiClient.convertToType(data['job.delete_ttl_seconds_after_finished'], 'Number');
            }
            if (data.hasOwnProperty('cronjob.concurrency_policy')) {
                obj['cronjob.concurrency_policy'] = ApiClient.convertToType(data['cronjob.concurrency_policy'], 'String');
            }
            if (data.hasOwnProperty('cronjob.failed_jobs_history_limit')) {
                obj['cronjob.failed_jobs_history_limit'] = ApiClient.convertToType(data['cronjob.failed_jobs_history_limit'], 'Number');
            }
            if (data.hasOwnProperty('cronjob.success_jobs_history_limit')) {
                obj['cronjob.success_jobs_history_limit'] = ApiClient.convertToType(data['cronjob.success_jobs_history_limit'], 'Number');
            }
            if (data.hasOwnProperty('security.service_account_name')) {
                obj['security.service_account_name'] = ApiClient.convertToType(data['security.service_account_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * define the max timeout for the build
 * @member {Number} build.timeout_max_sec
 * @default 1800
 */
JobAdvancedSettings.prototype['build.timeout_max_sec'] = 1800;

/**
 * define the max cpu resources (in milli)
 * @member {Number} build.cpu_max_in_milli
 * @default 4000
 */
JobAdvancedSettings.prototype['build.cpu_max_in_milli'] = 4000;

/**
 * define the max ram resources (in gib)
 * @member {Number} build.ram_max_in_gib
 * @default 8
 */
JobAdvancedSettings.prototype['build.ram_max_in_gib'] = 8;

/**
 * define how long in seconds an application is supposed to be stopped gracefully
 * @member {Number} deployment.termination_grace_period_seconds
 * @default 60
 */
JobAdvancedSettings.prototype['deployment.termination_grace_period_seconds'] = 60;

/**
 * @member {Number} job.delete_ttl_seconds_after_finished
 */
JobAdvancedSettings.prototype['job.delete_ttl_seconds_after_finished'] = undefined;

/**
 * @member {String} cronjob.concurrency_policy
 * @default 'Forbid'
 */
JobAdvancedSettings.prototype['cronjob.concurrency_policy'] = 'Forbid';

/**
 * @member {Number} cronjob.failed_jobs_history_limit
 * @default 1
 */
JobAdvancedSettings.prototype['cronjob.failed_jobs_history_limit'] = 1;

/**
 * @member {Number} cronjob.success_jobs_history_limit
 * @default 1
 */
JobAdvancedSettings.prototype['cronjob.success_jobs_history_limit'] = 1;

/**
 * Allows you to set an existing Kubernetes service account name 
 * @member {String} security.service_account_name
 * @default ''
 */
JobAdvancedSettings.prototype['security.service_account_name'] = '';






export default JobAdvancedSettings;

