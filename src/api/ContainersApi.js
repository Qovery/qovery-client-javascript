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


import ApiClient from "../ApiClient";
import ContainerAdvancedSettings from '../model/ContainerAdvancedSettings';
import ContainerRequest from '../model/ContainerRequest';
import ContainerResponse from '../model/ContainerResponse';
import ContainerResponseList from '../model/ContainerResponseList';
import DeployAllRequest from '../model/DeployAllRequest';
import EnvironmentContainersCurrentScaleResponseList from '../model/EnvironmentContainersCurrentScaleResponseList';
import EnvironmentContainersStorageResponseList from '../model/EnvironmentContainersStorageResponseList';
import OrganizationContainerAutoDeployRequest from '../model/OrganizationContainerAutoDeployRequest';
import OrganizationContainerPreviewRequest from '../model/OrganizationContainerPreviewRequest';
import ReferenceObjectStatusResponseList from '../model/ReferenceObjectStatusResponseList';
import Status from '../model/Status';

/**
* Containers service.
* @module api/ContainersApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainersApi {

    /**
    * Constructs a new ContainersApi. 
    * @alias module:api/ContainersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the autoDeployContainerEnvironments operation.
     * @callback module:api/ContainersApi~autoDeployContainerEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Auto deploy containers
     * Triggers a new container deploy in each environment matching the following conditions - environment should have the auto-deploy enabled - the container should have the same image name and a different tag 
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationContainerAutoDeployRequest} opts.organizationContainerAutoDeployRequest 
     * @param {module:api/ContainersApi~autoDeployContainerEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    autoDeployContainerEnvironments(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationContainerAutoDeployRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling autoDeployContainerEnvironments");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/organization/{organizationId}/container/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContainer operation.
     * @callback module:api/ContainersApi~createContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a container
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerRequest} opts.containerRequest 
     * @param {module:api/ContainersApi~createContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerResponse}
     */
    createContainer(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createContainer");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContainerResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deployAllServices operation.
     * @callback module:api/ContainersApi~deployAllServicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy services
     * Update and deploy the selected services
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DeployAllRequest} opts.deployAllRequest 
     * @param {module:api/ContainersApi~deployAllServicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployAllServices(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['deployAllRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deployAllServices");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerRegistryContainerStatus operation.
     * @callback module:api/ContainersApi~getContainerRegistryContainerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferenceObjectStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all container registry container statuses
     * Returns a list of containers with only their id and status.
     * @param {String} organizationId Organization ID
     * @param {String} containerRegistryId Container Registry ID
     * @param {module:api/ContainersApi~getContainerRegistryContainerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferenceObjectStatusResponseList}
     */
    getContainerRegistryContainerStatus(organizationId, containerRegistryId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getContainerRegistryContainerStatus");
      }
      // verify the required parameter 'containerRegistryId' is set
      if (containerRegistryId === undefined || containerRegistryId === null) {
        throw new Error("Missing the required parameter 'containerRegistryId' when calling getContainerRegistryContainerStatus");
      }

      let pathParams = {
        'organizationId': organizationId,
        'containerRegistryId': containerRegistryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReferenceObjectStatusResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry/{containerRegistryId}/container/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDefaultContainerAdvancedSettings operation.
     * @callback module:api/ContainersApi~getDefaultContainerAdvancedSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerAdvancedSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List default container advanced settings
     * @param {module:api/ContainersApi~getDefaultContainerAdvancedSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerAdvancedSettings}
     */
    getDefaultContainerAdvancedSettings(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContainerAdvancedSettings;
      return this.apiClient.callApi(
        '/defaultContainerAdvancedSettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentContainerCurrentScale operation.
     * @callback module:api/ContainersApi~getEnvironmentContainerCurrentScaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentContainersCurrentScaleResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current scaling information for each container
     * Returns min, max, and running number of instances for each container
     * @param {String} environmentId Environment ID
     * @param {module:api/ContainersApi~getEnvironmentContainerCurrentScaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentContainersCurrentScaleResponseList}
     */
    getEnvironmentContainerCurrentScale(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentContainerCurrentScale");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentContainersCurrentScaleResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container/currentScale', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentContainerCurrentStorage operation.
     * @callback module:api/ContainersApi~getEnvironmentContainerCurrentStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentContainersStorageResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current storage disk usage for each containers
     * @param {String} environmentId Environment ID
     * @param {module:api/ContainersApi~getEnvironmentContainerCurrentStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentContainersStorageResponseList}
     */
    getEnvironmentContainerCurrentStorage(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentContainerCurrentStorage");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentContainersStorageResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container/currentStorage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentContainerStatus operation.
     * @callback module:api/ContainersApi~getEnvironmentContainerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferenceObjectStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all environment container statuses
     * Returns a list of containers with only their id and status.
     * @param {String} environmentId Environment ID
     * @param {module:api/ContainersApi~getEnvironmentContainerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferenceObjectStatusResponseList}
     */
    getEnvironmentContainerStatus(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentContainerStatus");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReferenceObjectStatusResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainer operation.
     * @callback module:api/ContainersApi~listContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List containers
     * @param {String} environmentId Environment ID
     * @param {module:api/ContainersApi~listContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerResponseList}
     */
    listContainer(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listContainer");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContainerResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/container', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the previewContainerEnvironments operation.
     * @callback module:api/ContainersApi~previewContainerEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Preview container environments
     * Triggers a new container preview for each environment matching the following conditions - preview environment feature should be enabled for the container - the container should have the same image name and a different tag 
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationContainerPreviewRequest} opts.organizationContainerPreviewRequest 
     * @param {module:api/ContainersApi~previewContainerEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    previewContainerEnvironments(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationContainerPreviewRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling previewContainerEnvironments");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/organization/{organizationId}/container/preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
