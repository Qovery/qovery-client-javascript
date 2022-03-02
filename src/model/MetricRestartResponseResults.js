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
 * The MetricRestartResponseResults model module.
 * @module model/MetricRestartResponseResults
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class MetricRestartResponseResults {
    /**
     * Constructs a new <code>MetricRestartResponseResults</code>.
     * @alias module:model/MetricRestartResponseResults
     * @param datetime {Date} 
     * @param message {String} 
     */
    constructor(datetime, message) { 
        
        MetricRestartResponseResults.initialize(this, datetime, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, datetime, message) { 
        obj['datetime'] = datetime;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>MetricRestartResponseResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricRestartResponseResults} obj Optional instance to populate.
     * @return {module:model/MetricRestartResponseResults} The populated <code>MetricRestartResponseResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricRestartResponseResults();

            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} datetime
 */
MetricRestartResponseResults.prototype['datetime'] = undefined;

/**
 * @member {String} message
 */
MetricRestartResponseResults.prototype['message'] = undefined;






export default MetricRestartResponseResults;

