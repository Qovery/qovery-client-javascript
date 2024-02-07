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
 * The JobRequestAllOfScheduleCronjob model module.
 * @module model/JobRequestAllOfScheduleCronjob
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class JobRequestAllOfScheduleCronjob {
    /**
     * Constructs a new <code>JobRequestAllOfScheduleCronjob</code>.
     * @alias module:model/JobRequestAllOfScheduleCronjob
     * @param scheduledAt {String} Can only be set if the event is CRON.   Represent the cron format for the job schedule without seconds.   For example: `* * * * *` represent the cron to launch the job every minute.   See https://crontab.guru/ to WISIWIG interface.   Timezone is UTC 
     */
    constructor(scheduledAt) { 
        
        JobRequestAllOfScheduleCronjob.initialize(this, scheduledAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scheduledAt) { 
        obj['scheduled_at'] = scheduledAt;
    }

    /**
     * Constructs a <code>JobRequestAllOfScheduleCronjob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobRequestAllOfScheduleCronjob} obj Optional instance to populate.
     * @return {module:model/JobRequestAllOfScheduleCronjob} The populated <code>JobRequestAllOfScheduleCronjob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobRequestAllOfScheduleCronjob();

            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('scheduled_at')) {
                obj['scheduled_at'] = ApiClient.convertToType(data['scheduled_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JobRequestAllOfScheduleCronjob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JobRequestAllOfScheduleCronjob</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JobRequestAllOfScheduleCronjob.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['arguments'])) {
            throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
        }
        // ensure the json data is a string
        if (data['entrypoint'] && !(typeof data['entrypoint'] === 'string' || data['entrypoint'] instanceof String)) {
            throw new Error("Expected the field `entrypoint` to be a primitive type in the JSON string but got " + data['entrypoint']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is a string
        if (data['scheduled_at'] && !(typeof data['scheduled_at'] === 'string' || data['scheduled_at'] instanceof String)) {
            throw new Error("Expected the field `scheduled_at` to be a primitive type in the JSON string but got " + data['scheduled_at']);
        }

        return true;
    }


}

JobRequestAllOfScheduleCronjob.RequiredProperties = ["scheduled_at"];

/**
 * @member {Array.<String>} arguments
 */
JobRequestAllOfScheduleCronjob.prototype['arguments'] = undefined;

/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
JobRequestAllOfScheduleCronjob.prototype['entrypoint'] = undefined;

/**
 * Specify a timezone identifier to run the schedule at. By default Etc/UTC
 * @member {String} timezone
 */
JobRequestAllOfScheduleCronjob.prototype['timezone'] = undefined;

/**
 * Can only be set if the event is CRON.   Represent the cron format for the job schedule without seconds.   For example: `* * * * *` represent the cron to launch the job every minute.   See https://crontab.guru/ to WISIWIG interface.   Timezone is UTC 
 * @member {String} scheduled_at
 */
JobRequestAllOfScheduleCronjob.prototype['scheduled_at'] = undefined;






export default JobRequestAllOfScheduleCronjob;

