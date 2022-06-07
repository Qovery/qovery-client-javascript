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
import Cost from './Cost';
import GenericObjectCurrentCost from './GenericObjectCurrentCost';
import ProjectCurrentCostAllOf from './ProjectCurrentCostAllOf';

/**
 * The ProjectCurrentCost model module.
 * @module model/ProjectCurrentCost
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ProjectCurrentCost {
    /**
     * Constructs a new <code>ProjectCurrentCost</code>.
     * @alias module:model/ProjectCurrentCost
     * @implements module:model/GenericObjectCurrentCost
     * @implements module:model/ProjectCurrentCostAllOf
     * @param id {String} 
     * @param name {String} 
     * @param consumedTimeInSeconds {Number} 
     * @param cost {module:model/Cost} 
     */
    constructor(id, name, consumedTimeInSeconds, cost) { 
        GenericObjectCurrentCost.initialize(this, id, name, consumedTimeInSeconds, cost);ProjectCurrentCostAllOf.initialize(this);
        ProjectCurrentCost.initialize(this, id, name, consumedTimeInSeconds, cost);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, consumedTimeInSeconds, cost) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['consumed_time_in_seconds'] = consumedTimeInSeconds;
        obj['cost'] = cost;
    }

    /**
     * Constructs a <code>ProjectCurrentCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCurrentCost} obj Optional instance to populate.
     * @return {module:model/ProjectCurrentCost} The populated <code>ProjectCurrentCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectCurrentCost();
            GenericObjectCurrentCost.constructFromObject(data, obj);
            ProjectCurrentCostAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('consumed_time_in_seconds')) {
                obj['consumed_time_in_seconds'] = ApiClient.convertToType(data['consumed_time_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Cost.constructFromObject(data['cost']);
            }
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [GenericObjectCurrentCost]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ProjectCurrentCost.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProjectCurrentCost.prototype['name'] = undefined;

/**
 * @member {Number} consumed_time_in_seconds
 */
ProjectCurrentCost.prototype['consumed_time_in_seconds'] = undefined;

/**
 * @member {module:model/Cost} cost
 */
ProjectCurrentCost.prototype['cost'] = undefined;

/**
 * @member {Array.<module:model/GenericObjectCurrentCost>} environments
 */
ProjectCurrentCost.prototype['environments'] = undefined;


// Implement GenericObjectCurrentCost interface:
/**
 * @member {String} id
 */
GenericObjectCurrentCost.prototype['id'] = undefined;
/**
 * @member {String} name
 */
GenericObjectCurrentCost.prototype['name'] = undefined;
/**
 * @member {Number} consumed_time_in_seconds
 */
GenericObjectCurrentCost.prototype['consumed_time_in_seconds'] = undefined;
/**
 * @member {module:model/Cost} cost
 */
GenericObjectCurrentCost.prototype['cost'] = undefined;
// Implement ProjectCurrentCostAllOf interface:
/**
 * @member {Array.<module:model/GenericObjectCurrentCost>} environments
 */
ProjectCurrentCostAllOf.prototype['environments'] = undefined;




export default ProjectCurrentCost;
