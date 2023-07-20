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
import ProbeType from './ProbeType';

/**
 * The Probe model module.
 * @module model/Probe
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Probe {
    /**
     * Constructs a new <code>Probe</code>.
     * @alias module:model/Probe
     */
    constructor() { 
        
        Probe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Probe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Probe} obj Optional instance to populate.
     * @return {module:model/Probe} The populated <code>Probe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Probe();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ProbeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('initial_delay_seconds')) {
                obj['initial_delay_seconds'] = ApiClient.convertToType(data['initial_delay_seconds'], 'Number');
            }
            if (data.hasOwnProperty('period_seconds')) {
                obj['period_seconds'] = ApiClient.convertToType(data['period_seconds'], 'Number');
            }
            if (data.hasOwnProperty('timeout_seconds')) {
                obj['timeout_seconds'] = ApiClient.convertToType(data['timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('success_threshold')) {
                obj['success_threshold'] = ApiClient.convertToType(data['success_threshold'], 'Number');
            }
            if (data.hasOwnProperty('failure_threshold')) {
                obj['failure_threshold'] = ApiClient.convertToType(data['failure_threshold'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProbeType} type
 */
Probe.prototype['type'] = undefined;

/**
 * @member {Number} initial_delay_seconds
 * @default 30
 */
Probe.prototype['initial_delay_seconds'] = 30;

/**
 * @member {Number} period_seconds
 * @default 10
 */
Probe.prototype['period_seconds'] = 10;

/**
 * @member {Number} timeout_seconds
 * @default 5
 */
Probe.prototype['timeout_seconds'] = 5;

/**
 * @member {Number} success_threshold
 * @default 1
 */
Probe.prototype['success_threshold'] = 1;

/**
 * @member {Number} failure_threshold
 * @default 9
 */
Probe.prototype['failure_threshold'] = 9;






export default Probe;
