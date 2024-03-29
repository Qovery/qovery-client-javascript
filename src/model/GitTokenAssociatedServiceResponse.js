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
import GitTokenAssociatedServiceType from './GitTokenAssociatedServiceType';

/**
 * The GitTokenAssociatedServiceResponse model module.
 * @module model/GitTokenAssociatedServiceResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class GitTokenAssociatedServiceResponse {
    /**
     * Constructs a new <code>GitTokenAssociatedServiceResponse</code>.
     * @alias module:model/GitTokenAssociatedServiceResponse
     * @param projectId {String} 
     * @param projectName {String} 
     * @param environmentId {String} 
     * @param environmentName {String} 
     * @param serviceId {String} 
     * @param serviceName {String} 
     * @param serviceType {module:model/GitTokenAssociatedServiceType} 
     */
    constructor(projectId, projectName, environmentId, environmentName, serviceId, serviceName, serviceType) { 
        
        GitTokenAssociatedServiceResponse.initialize(this, projectId, projectName, environmentId, environmentName, serviceId, serviceName, serviceType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectId, projectName, environmentId, environmentName, serviceId, serviceName, serviceType) { 
        obj['project_id'] = projectId;
        obj['project_name'] = projectName;
        obj['environment_id'] = environmentId;
        obj['environment_name'] = environmentName;
        obj['service_id'] = serviceId;
        obj['service_name'] = serviceName;
        obj['service_type'] = serviceType;
    }

    /**
     * Constructs a <code>GitTokenAssociatedServiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTokenAssociatedServiceResponse} obj Optional instance to populate.
     * @return {module:model/GitTokenAssociatedServiceResponse} The populated <code>GitTokenAssociatedServiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitTokenAssociatedServiceResponse();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('project_name')) {
                obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
            if (data.hasOwnProperty('environment_name')) {
                obj['environment_name'] = ApiClient.convertToType(data['environment_name'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('service_type')) {
                obj['service_type'] = GitTokenAssociatedServiceType.constructFromObject(data['service_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} project_id
 */
GitTokenAssociatedServiceResponse.prototype['project_id'] = undefined;

/**
 * @member {String} project_name
 */
GitTokenAssociatedServiceResponse.prototype['project_name'] = undefined;

/**
 * @member {String} environment_id
 */
GitTokenAssociatedServiceResponse.prototype['environment_id'] = undefined;

/**
 * @member {String} environment_name
 */
GitTokenAssociatedServiceResponse.prototype['environment_name'] = undefined;

/**
 * @member {String} service_id
 */
GitTokenAssociatedServiceResponse.prototype['service_id'] = undefined;

/**
 * @member {String} service_name
 */
GitTokenAssociatedServiceResponse.prototype['service_name'] = undefined;

/**
 * @member {module:model/GitTokenAssociatedServiceType} service_type
 */
GitTokenAssociatedServiceResponse.prototype['service_type'] = undefined;






export default GitTokenAssociatedServiceResponse;

