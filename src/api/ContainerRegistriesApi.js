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
import AvailableContainerRegistryResponseList from '../model/AvailableContainerRegistryResponseList';
import ContainerRegistryRequest from '../model/ContainerRegistryRequest';
import ContainerRegistryResponse from '../model/ContainerRegistryResponse';
import ContainerRegistryResponseList from '../model/ContainerRegistryResponseList';

/**
* ContainerRegistries service.
* @module api/ContainerRegistriesApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerRegistriesApi {

    /**
    * Constructs a new ContainerRegistriesApi. 
    * @alias module:api/ContainerRegistriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~createContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerRegistryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a container registry
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerRegistryRequest} [containerRegistryRequest] 
     * @param {module:api/ContainerRegistriesApi~createContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerRegistryResponse}
     */
    createContainerRegistry(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerRegistryRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createContainerRegistry");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContainerRegistryResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~deleteContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a container registry
     * @param {String} organizationId Organization ID
     * @param {String} containerRegistryId Container Registry ID
     * @param {module:api/ContainerRegistriesApi~deleteContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteContainerRegistry(organizationId, containerRegistryId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteContainerRegistry");
      }
      // verify the required parameter 'containerRegistryId' is set
      if (containerRegistryId === undefined || containerRegistryId === null) {
        throw new Error("Missing the required parameter 'containerRegistryId' when calling deleteContainerRegistry");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry/{containerRegistryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~editContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerRegistryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a container registry
     * @param {String} organizationId Organization ID
     * @param {String} containerRegistryId Container Registry ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerRegistryRequest} [containerRegistryRequest] 
     * @param {module:api/ContainerRegistriesApi~editContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerRegistryResponse}
     */
    editContainerRegistry(organizationId, containerRegistryId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerRegistryRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editContainerRegistry");
      }
      // verify the required parameter 'containerRegistryId' is set
      if (containerRegistryId === undefined || containerRegistryId === null) {
        throw new Error("Missing the required parameter 'containerRegistryId' when calling editContainerRegistry");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContainerRegistryResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry/{containerRegistryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~getContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerRegistryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a container registry
     * @param {String} organizationId Organization ID
     * @param {String} containerRegistryId Container Registry ID
     * @param {module:api/ContainerRegistriesApi~getContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerRegistryResponse}
     */
    getContainerRegistry(organizationId, containerRegistryId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getContainerRegistry");
      }
      // verify the required parameter 'containerRegistryId' is set
      if (containerRegistryId === undefined || containerRegistryId === null) {
        throw new Error("Missing the required parameter 'containerRegistryId' when calling getContainerRegistry");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContainerRegistryResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry/{containerRegistryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAvailableContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~listAvailableContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvailableContainerRegistryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List supported container registries
     * List supported container registries by Qovery and get the mandatory authentification configuration.
     * @param {module:api/ContainerRegistriesApi~listAvailableContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AvailableContainerRegistryResponseList}
     */
    listAvailableContainerRegistry(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AvailableContainerRegistryResponseList;
      return this.apiClient.callApi(
        '/availableContainerRegistry', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerRegistry operation.
     * @callback module:api/ContainerRegistriesApi~listContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerRegistryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization container registries
     * @param {String} organizationId Organization ID
     * @param {module:api/ContainerRegistriesApi~listContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerRegistryResponseList}
     */
    listContainerRegistry(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listContainerRegistry");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContainerRegistryResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
