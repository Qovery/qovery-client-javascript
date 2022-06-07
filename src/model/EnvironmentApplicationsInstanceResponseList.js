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
import GetEnvironmentContainerCurrentInstance200ResponseResultsInner from './GetEnvironmentContainerCurrentInstance200ResponseResultsInner';

/**
 * The EnvironmentApplicationsInstanceResponseList model module.
 * @module model/EnvironmentApplicationsInstanceResponseList
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentApplicationsInstanceResponseList {
    /**
     * Constructs a new <code>EnvironmentApplicationsInstanceResponseList</code>.
     * @alias module:model/EnvironmentApplicationsInstanceResponseList
     */
    constructor() { 
        
        EnvironmentApplicationsInstanceResponseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentApplicationsInstanceResponseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentApplicationsInstanceResponseList} obj Optional instance to populate.
     * @return {module:model/EnvironmentApplicationsInstanceResponseList} The populated <code>EnvironmentApplicationsInstanceResponseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentApplicationsInstanceResponseList();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [GetEnvironmentContainerCurrentInstance200ResponseResultsInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetEnvironmentContainerCurrentInstance200ResponseResultsInner>} results
 */
EnvironmentApplicationsInstanceResponseList.prototype['results'] = undefined;






export default EnvironmentApplicationsInstanceResponseList;

