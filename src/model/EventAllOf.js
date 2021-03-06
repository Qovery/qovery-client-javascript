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
import Commit from './Commit';
import ReferenceObject from './ReferenceObject';
import Status from './Status';
import User from './User';

/**
 * The EventAllOf model module.
 * @module model/EventAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EventAllOf {
    /**
     * Constructs a new <code>EventAllOf</code>.
     * @alias module:model/EventAllOf
     */
    constructor() { 
        
        EventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAllOf} obj Optional instance to populate.
     * @return {module:model/EventAllOf} The populated <code>EventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAllOf();

            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ReferenceObject.constructFromObject(data['log']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} user
 */
EventAllOf.prototype['user'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
EventAllOf.prototype['commit'] = undefined;

/**
 * @member {module:model/Status} status
 */
EventAllOf.prototype['status'] = undefined;

/**
 * DRAFT - we have to specify here all the possible events
 * @member {String} type
 */
EventAllOf.prototype['type'] = undefined;

/**
 * @member {module:model/ReferenceObject} log
 */
EventAllOf.prototype['log'] = undefined;






export default EventAllOf;

