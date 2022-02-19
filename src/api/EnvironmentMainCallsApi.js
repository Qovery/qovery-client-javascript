/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EnvironmentEditRequest from '../model/EnvironmentEditRequest';
import EnvironmentResponse from '../model/EnvironmentResponse';
import LinkResponseList from '../model/LinkResponseList';
import Status from '../model/Status';

/**
* EnvironmentMainCalls service.
* @module api/EnvironmentMainCallsApi
* @version 1.0.1
*/
export default class EnvironmentMainCallsApi {

    /**
    * Constructs a new EnvironmentMainCallsApi. 
    * @alias module:api/EnvironmentMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteEnvironment operation.
     * @callback module:api/EnvironmentMainCallsApi~deleteEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment
     * To delete an environment you must have the admin permission
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~deleteEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteEnvironment(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deleteEnvironment");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/environment/{environmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editEnvironment operation.
     * @callback module:api/EnvironmentMainCallsApi~editEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment
     * To edit an environment you must have the admin permission
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentEditRequest} opts.environmentEditRequest 
     * @param {module:api/EnvironmentMainCallsApi~editEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentResponse}
     */
    editEnvironment(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentEditRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling editEnvironment");
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
      let returnType = EnvironmentResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironment operation.
     * @callback module:api/EnvironmentMainCallsApi~getEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment by ID
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentResponse}
     */
    getEnvironment(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironment");
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
      let returnType = EnvironmentResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentStatus operation.
     * @callback module:api/EnvironmentMainCallsApi~getEnvironmentStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment status
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    getEnvironmentStatus(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentStatus");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentLinks operation.
     * @callback module:api/EnvironmentMainCallsApi~listEnvironmentLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all URLs of the environment
     * This will return all the custom domains and Qovery autogenerated domain for all the applications within this environment
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~listEnvironmentLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LinkResponseList}
     */
    listEnvironmentLinks(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentLinks");
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
      let returnType = LinkResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
