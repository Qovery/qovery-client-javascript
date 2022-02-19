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
 * The ClusterRoutingTableRequestRoutes model module.
 * @module model/ClusterRoutingTableRequestRoutes
 * @version 1.0.3
 */
class ClusterRoutingTableRequestRoutes {
    /**
     * Constructs a new <code>ClusterRoutingTableRequestRoutes</code>.
     * @alias module:model/ClusterRoutingTableRequestRoutes
     * @param destination {String} 
     * @param target {String} 
     * @param description {String} 
     */
    constructor(destination, target, description) { 
        
        ClusterRoutingTableRequestRoutes.initialize(this, destination, target, description);
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
     * Constructs a <code>ClusterRoutingTableRequestRoutes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterRoutingTableRequestRoutes} obj Optional instance to populate.
     * @return {module:model/ClusterRoutingTableRequestRoutes} The populated <code>ClusterRoutingTableRequestRoutes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterRoutingTableRequestRoutes();

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


}

/**
 * @member {String} destination
 */
ClusterRoutingTableRequestRoutes.prototype['destination'] = undefined;

/**
 * @member {String} target
 */
ClusterRoutingTableRequestRoutes.prototype['target'] = undefined;

/**
 * @member {String} description
 */
ClusterRoutingTableRequestRoutes.prototype['description'] = undefined;






export default ClusterRoutingTableRequestRoutes;

