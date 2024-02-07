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
import OrganizationEventResponse from './OrganizationEventResponse';
import OrganizationEventResponseListLinks from './OrganizationEventResponseListLinks';

/**
 * The OrganizationEventResponseList model module.
 * @module model/OrganizationEventResponseList
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationEventResponseList {
    /**
     * Constructs a new <code>OrganizationEventResponseList</code>.
     * @alias module:model/OrganizationEventResponseList
     */
    constructor() { 
        
        OrganizationEventResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationEventResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationEventResponseList} obj Optional instance to populate.
     * @return {module:model/OrganizationEventResponseList} The populated <code>OrganizationEventResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationEventResponseList();

            if (data.hasOwnProperty('links')) {
                obj['links'] = OrganizationEventResponseListLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [OrganizationEventResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationEventResponseList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationEventResponseList</code>.
     */
    static validateJSON(data) {
        // validate the optional field `links`
        if (data['links']) { // data not null
          OrganizationEventResponseListLinks.validateJSON(data['links']);
        }
        if (data['events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['events'])) {
                throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
            }
            // validate the optional field `events` (array)
            for (const item of data['events']) {
                OrganizationEventResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/OrganizationEventResponseListLinks} links
 */
OrganizationEventResponseList.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/OrganizationEventResponse>} events
 */
OrganizationEventResponseList.prototype['events'] = undefined;






export default OrganizationEventResponseList;

