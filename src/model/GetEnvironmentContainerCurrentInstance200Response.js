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
 * The GetEnvironmentContainerCurrentInstance200Response model module.
 * @module model/GetEnvironmentContainerCurrentInstance200Response
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class GetEnvironmentContainerCurrentInstance200Response {
    /**
     * Constructs a new <code>GetEnvironmentContainerCurrentInstance200Response</code>.
     * @alias module:model/GetEnvironmentContainerCurrentInstance200Response
     */
    constructor() { 
        
        GetEnvironmentContainerCurrentInstance200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEnvironmentContainerCurrentInstance200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEnvironmentContainerCurrentInstance200Response} obj Optional instance to populate.
     * @return {module:model/GetEnvironmentContainerCurrentInstance200Response} The populated <code>GetEnvironmentContainerCurrentInstance200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEnvironmentContainerCurrentInstance200Response();

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
GetEnvironmentContainerCurrentInstance200Response.prototype['results'] = undefined;






export default GetEnvironmentContainerCurrentInstance200Response;

