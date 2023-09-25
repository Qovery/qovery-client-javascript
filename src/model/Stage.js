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
import StageStepMetrics from './StageStepMetrics';

/**
 * The Stage model module.
 * @module model/Stage
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Stage {
    /**
     * Constructs a new <code>Stage</code>.
     * @alias module:model/Stage
     * @param id {String} 
     * @param name {String} stage name
     */
    constructor(id, name) { 
        
        Stage.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Stage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stage} obj Optional instance to populate.
     * @return {module:model/Stage} The populated <code>Stage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = StageStepMetrics.constructFromObject(data['steps']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Stage.prototype['id'] = undefined;

/**
 * stage name
 * @member {String} name
 */
Stage.prototype['name'] = undefined;

/**
 * @member {module:model/StageStepMetrics} steps
 */
Stage.prototype['steps'] = undefined;






export default Stage;

