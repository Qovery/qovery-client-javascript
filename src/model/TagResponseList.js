/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TagResponse from './TagResponse';

/**
 * The TagResponseList model module.
 * @module model/TagResponseList
 * @version 1.0.0
 */
class TagResponseList {
    /**
     * Constructs a new <code>TagResponseList</code>.
     * @alias module:model/TagResponseList
     */
    constructor() { 
        
        TagResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagResponseList} obj Optional instance to populate.
     * @return {module:model/TagResponseList} The populated <code>TagResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [TagResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TagResponse>} results
 */
TagResponseList.prototype['results'] = undefined;






export default TagResponseList;

