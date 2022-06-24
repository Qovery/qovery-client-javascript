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
import ThresholdMetricStatusEnum from './ThresholdMetricStatusEnum';

/**
 * The EnvironmentDatabasesCurrentMetricMemory model module.
 * @module model/EnvironmentDatabasesCurrentMetricMemory
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentDatabasesCurrentMetricMemory {
    /**
     * Constructs a new <code>EnvironmentDatabasesCurrentMetricMemory</code>.
     * @alias module:model/EnvironmentDatabasesCurrentMetricMemory
     */
    constructor() { 
        
        EnvironmentDatabasesCurrentMetricMemory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentDatabasesCurrentMetricMemory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDatabasesCurrentMetricMemory} obj Optional instance to populate.
     * @return {module:model/EnvironmentDatabasesCurrentMetricMemory} The populated <code>EnvironmentDatabasesCurrentMetricMemory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDatabasesCurrentMetricMemory();

            if (data.hasOwnProperty('requested_in_mb')) {
                obj['requested_in_mb'] = ApiClient.convertToType(data['requested_in_mb'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_mb')) {
                obj['consumed_in_mb'] = ApiClient.convertToType(data['consumed_in_mb'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_percent')) {
                obj['consumed_in_percent'] = ApiClient.convertToType(data['consumed_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('warning_threshold_in_percent')) {
                obj['warning_threshold_in_percent'] = ApiClient.convertToType(data['warning_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('alert_threshold_in_percent')) {
                obj['alert_threshold_in_percent'] = ApiClient.convertToType(data['alert_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ThresholdMetricStatusEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} requested_in_mb
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['requested_in_mb'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} consumed_in_mb
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['consumed_in_mb'] = undefined;

/**
 * @member {Number} consumed_in_percent
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['consumed_in_percent'] = undefined;

/**
 * @member {Number} warning_threshold_in_percent
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['warning_threshold_in_percent'] = undefined;

/**
 * @member {Number} alert_threshold_in_percent
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['alert_threshold_in_percent'] = undefined;

/**
 * @member {module:model/ThresholdMetricStatusEnum} status
 */
EnvironmentDatabasesCurrentMetricMemory.prototype['status'] = undefined;






export default EnvironmentDatabasesCurrentMetricMemory;
