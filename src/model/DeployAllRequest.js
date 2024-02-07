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
import DeployAllRequestApplicationsInner from './DeployAllRequestApplicationsInner';
import DeployAllRequestContainersInner from './DeployAllRequestContainersInner';
import DeployAllRequestHelmsInner from './DeployAllRequestHelmsInner';
import DeployAllRequestJobsInner from './DeployAllRequestJobsInner';

/**
 * The DeployAllRequest model module.
 * @module model/DeployAllRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeployAllRequest {
    /**
     * Constructs a new <code>DeployAllRequest</code>.
     * @alias module:model/DeployAllRequest
     */
    constructor() { 
        
        DeployAllRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeployAllRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployAllRequest} obj Optional instance to populate.
     * @return {module:model/DeployAllRequest} The populated <code>DeployAllRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployAllRequest();

            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], [DeployAllRequestApplicationsInner]);
            }
            if (data.hasOwnProperty('databases')) {
                obj['databases'] = ApiClient.convertToType(data['databases'], ['String']);
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [DeployAllRequestContainersInner]);
            }
            if (data.hasOwnProperty('jobs')) {
                obj['jobs'] = ApiClient.convertToType(data['jobs'], [DeployAllRequestJobsInner]);
            }
            if (data.hasOwnProperty('helms')) {
                obj['helms'] = ApiClient.convertToType(data['helms'], [DeployAllRequestHelmsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeployAllRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeployAllRequest</code>.
     */
    static validateJSON(data) {
        if (data['applications']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['applications'])) {
                throw new Error("Expected the field `applications` to be an array in the JSON data but got " + data['applications']);
            }
            // validate the optional field `applications` (array)
            for (const item of data['applications']) {
                DeployAllRequestApplicationsInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['databases'])) {
            throw new Error("Expected the field `databases` to be an array in the JSON data but got " + data['databases']);
        }
        if (data['containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containers'])) {
                throw new Error("Expected the field `containers` to be an array in the JSON data but got " + data['containers']);
            }
            // validate the optional field `containers` (array)
            for (const item of data['containers']) {
                DeployAllRequestContainersInner.validateJSON(item);
            };
        }
        if (data['jobs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['jobs'])) {
                throw new Error("Expected the field `jobs` to be an array in the JSON data but got " + data['jobs']);
            }
            // validate the optional field `jobs` (array)
            for (const item of data['jobs']) {
                DeployAllRequestJobsInner.validateJSON(item);
            };
        }
        if (data['helms']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['helms'])) {
                throw new Error("Expected the field `helms` to be an array in the JSON data but got " + data['helms']);
            }
            // validate the optional field `helms` (array)
            for (const item of data['helms']) {
                DeployAllRequestHelmsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/DeployAllRequestApplicationsInner>} applications
 */
DeployAllRequest.prototype['applications'] = undefined;

/**
 * @member {Array.<String>} databases
 */
DeployAllRequest.prototype['databases'] = undefined;

/**
 * @member {Array.<module:model/DeployAllRequestContainersInner>} containers
 */
DeployAllRequest.prototype['containers'] = undefined;

/**
 * @member {Array.<module:model/DeployAllRequestJobsInner>} jobs
 */
DeployAllRequest.prototype['jobs'] = undefined;

/**
 * @member {Array.<module:model/DeployAllRequestHelmsInner>} helms
 */
DeployAllRequest.prototype['helms'] = undefined;






export default DeployAllRequest;

