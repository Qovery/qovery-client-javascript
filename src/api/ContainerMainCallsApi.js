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
import ContainerEditRequest from '../model/ContainerEditRequest';
import ContainerResponse from '../model/ContainerResponse';
import LinkResponseList from '../model/LinkResponseList';
import Status from '../model/Status';

/**
* ContainerMainCalls service.
* @module api/ContainerMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerMainCallsApi {

    /**
    * Constructs a new ContainerMainCallsApi. 
    * @alias module:api/ContainerMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteContainer operation.
     * @callback module:api/ContainerMainCallsApi~deleteContainerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete container
     * To delete the container you must have the admin permission
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMainCallsApi~deleteContainerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteContainer(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteContainer");
      }

      let pathParams = {
        'containerId': containerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/container/{containerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editContainer operation.
     * @callback module:api/ContainerMainCallsApi~editContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit container
     * - To edit the container you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerEditRequest} opts.containerEditRequest 
     * @param {module:api/ContainerMainCallsApi~editContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerResponse}
     */
    editContainer(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerEditRequest'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling editContainer");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainer operation.
     * @callback module:api/ContainerMainCallsApi~getContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get container by ID
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMainCallsApi~getContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerResponse}
     */
    getContainer(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainer");
      }

      let pathParams = {
        'containerId': containerId
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
      let returnType = ContainerResponse;
      return this.apiClient.callApi(
        '/container/{containerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerStatus operation.
     * @callback module:api/ContainerMainCallsApi~getContainerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get container status
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMainCallsApi~getContainerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    getContainerStatus(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerStatus");
      }

      let pathParams = {
        'containerId': containerId
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/container/{containerId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerLinks operation.
     * @callback module:api/ContainerMainCallsApi~listContainerLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all URLs of the container
     * This will return all the custom domains and Qovery autogenerated domain for the given container
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMainCallsApi~listContainerLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LinkResponseList}
     */
    listContainerLinks(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerLinks");
      }

      let pathParams = {
        'containerId': containerId
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
      let returnType = LinkResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
