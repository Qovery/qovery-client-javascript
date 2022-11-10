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
 * The ListEnvironmentLogs200ResponseInnerDetailsStage model module.
 * @module model/ListEnvironmentLogs200ResponseInnerDetailsStage
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ListEnvironmentLogs200ResponseInnerDetailsStage {
    /**
     * Constructs a new <code>ListEnvironmentLogs200ResponseInnerDetailsStage</code>.
     * @alias module:model/ListEnvironmentLogs200ResponseInnerDetailsStage
     */
    constructor() { 
        
        ListEnvironmentLogs200ResponseInnerDetailsStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListEnvironmentLogs200ResponseInnerDetailsStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListEnvironmentLogs200ResponseInnerDetailsStage} obj Optional instance to populate.
     * @return {module:model/ListEnvironmentLogs200ResponseInnerDetailsStage} The populated <code>ListEnvironmentLogs200ResponseInnerDetailsStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListEnvironmentLogs200ResponseInnerDetailsStage();

            if (data.hasOwnProperty('step')) {
                obj['step'] = ApiClient.convertToType(data['step'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} step
 */
ListEnvironmentLogs200ResponseInnerDetailsStage.prototype['step'] = undefined;






export default ListEnvironmentLogs200ResponseInnerDetailsStage;

