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
 * The EnvironmentApplicationsCurrentScaleResponse model module.
 * @module model/EnvironmentApplicationsCurrentScaleResponse
 * @version 1.0.1
 */
class EnvironmentApplicationsCurrentScaleResponse {
    /**
     * Constructs a new <code>EnvironmentApplicationsCurrentScaleResponse</code>.
     * @alias module:model/EnvironmentApplicationsCurrentScaleResponse
     */
    constructor() { 
        
        EnvironmentApplicationsCurrentScaleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentApplicationsCurrentScaleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentApplicationsCurrentScaleResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentApplicationsCurrentScaleResponse} The populated <code>EnvironmentApplicationsCurrentScaleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentApplicationsCurrentScaleResponse();

            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('running')) {
                obj['running'] = ApiClient.convertToType(data['running'], 'Number');
            }
            if (data.hasOwnProperty('running_in_percent')) {
                obj['running_in_percent'] = ApiClient.convertToType(data['running_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('warning_threshold_in_percent')) {
                obj['warning_threshold_in_percent'] = ApiClient.convertToType(data['warning_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('alert_threshold_in_percent')) {
                obj['alert_threshold_in_percent'] = ApiClient.convertToType(data['alert_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} application
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['application'] = undefined;

/**
 * @member {Number} min
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['min'] = undefined;

/**
 * @member {Number} max
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['max'] = undefined;

/**
 * @member {Number} running
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['running'] = undefined;

/**
 * @member {Number} running_in_percent
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['running_in_percent'] = undefined;

/**
 * @member {Number} warning_threshold_in_percent
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['warning_threshold_in_percent'] = undefined;

/**
 * @member {Number} alert_threshold_in_percent
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['alert_threshold_in_percent'] = undefined;

/**
 * @member {module:model/EnvironmentApplicationsCurrentScaleResponse.StatusEnum} status
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentApplicationsCurrentScaleResponse.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentApplicationsCurrentScaleResponse['StatusEnum'] = {

    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",

    /**
     * value: "Warning"
     * @const
     */
    "Warning": "Warning",

    /**
     * value: "Alert"
     * @const
     */
    "Alert": "Alert"
};



export default EnvironmentApplicationsCurrentScaleResponse;

