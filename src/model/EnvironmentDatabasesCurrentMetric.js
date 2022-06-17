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
import EnvironmentDatabasesCurrentMetricCpu from './EnvironmentDatabasesCurrentMetricCpu';
import EnvironmentDatabasesCurrentMetricMemory from './EnvironmentDatabasesCurrentMetricMemory';
import EnvironmentDatabasesCurrentMetricStorage from './EnvironmentDatabasesCurrentMetricStorage';

/**
 * The EnvironmentDatabasesCurrentMetric model module.
 * @module model/EnvironmentDatabasesCurrentMetric
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentDatabasesCurrentMetric {
    /**
     * Constructs a new <code>EnvironmentDatabasesCurrentMetric</code>.
     * @alias module:model/EnvironmentDatabasesCurrentMetric
     */
    constructor() { 
        
        EnvironmentDatabasesCurrentMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentDatabasesCurrentMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentDatabasesCurrentMetric} obj Optional instance to populate.
     * @return {module:model/EnvironmentDatabasesCurrentMetric} The populated <code>EnvironmentDatabasesCurrentMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentDatabasesCurrentMetric();

            if (data.hasOwnProperty('database')) {
                obj['database'] = ApiClient.convertToType(data['database'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = EnvironmentDatabasesCurrentMetricCpu.constructFromObject(data['cpu']);
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = EnvironmentDatabasesCurrentMetricMemory.constructFromObject(data['memory']);
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = EnvironmentDatabasesCurrentMetricStorage.constructFromObject(data['storage']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} database
 */
EnvironmentDatabasesCurrentMetric.prototype['database'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricCpu} cpu
 */
EnvironmentDatabasesCurrentMetric.prototype['cpu'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricMemory} memory
 */
EnvironmentDatabasesCurrentMetric.prototype['memory'] = undefined;

/**
 * @member {module:model/EnvironmentDatabasesCurrentMetricStorage} storage
 */
EnvironmentDatabasesCurrentMetric.prototype['storage'] = undefined;






export default EnvironmentDatabasesCurrentMetric;

