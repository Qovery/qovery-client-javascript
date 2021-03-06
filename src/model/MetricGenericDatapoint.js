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
 * The MetricGenericDatapoint model module.
 * @module model/MetricGenericDatapoint
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class MetricGenericDatapoint {
    /**
     * Constructs a new <code>MetricGenericDatapoint</code>.
     * @alias module:model/MetricGenericDatapoint
     * @param createdAt {Date} 
     * @param value {Number} 
     */
    constructor(createdAt, value) { 
        
        MetricGenericDatapoint.initialize(this, createdAt, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, value) { 
        obj['created_at'] = createdAt;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>MetricGenericDatapoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricGenericDatapoint} obj Optional instance to populate.
     * @return {module:model/MetricGenericDatapoint} The populated <code>MetricGenericDatapoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricGenericDatapoint();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
MetricGenericDatapoint.prototype['created_at'] = undefined;

/**
 * @member {Number} value
 */
MetricGenericDatapoint.prototype['value'] = undefined;






export default MetricGenericDatapoint;

