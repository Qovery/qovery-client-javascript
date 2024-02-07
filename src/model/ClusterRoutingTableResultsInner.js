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
 * The ClusterRoutingTableResultsInner model module.
 * @module model/ClusterRoutingTableResultsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ClusterRoutingTableResultsInner {
    /**
     * Constructs a new <code>ClusterRoutingTableResultsInner</code>.
     * @alias module:model/ClusterRoutingTableResultsInner
     * @param destination {String} 
     * @param target {String} 
     * @param description {String} 
     */
    constructor(destination, target, description) { 
        
        ClusterRoutingTableResultsInner.initialize(this, destination, target, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination, target, description) { 
        obj['destination'] = destination;
        obj['target'] = target;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>ClusterRoutingTableResultsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRoutingTableResultsInner} obj Optional instance to populate.
     * @return {module:model/ClusterRoutingTableResultsInner} The populated <code>ClusterRoutingTableResultsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRoutingTableResultsInner();

            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClusterRoutingTableResultsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClusterRoutingTableResultsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClusterRoutingTableResultsInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

ClusterRoutingTableResultsInner.RequiredProperties = ["destination", "target", "description"];

/**
 * @member {String} destination
 */
ClusterRoutingTableResultsInner.prototype['destination'] = undefined;

/**
 * @member {String} target
 */
ClusterRoutingTableResultsInner.prototype['target'] = undefined;

/**
 * @member {String} description
 */
ClusterRoutingTableResultsInner.prototype['description'] = undefined;






export default ClusterRoutingTableResultsInner;

