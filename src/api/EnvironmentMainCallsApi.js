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
import Environment from '../model/Environment';
import EnvironmentEditRequest from '../model/EnvironmentEditRequest';
import EnvironmentStatus from '../model/EnvironmentStatus';
import EnvironmentStatuses from '../model/EnvironmentStatuses';
import EnvironmentStatusesWithStages from '../model/EnvironmentStatusesWithStages';

/**
* EnvironmentMainCalls service.
* @module api/EnvironmentMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
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
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment
     * To edit an environment you must have the admin permission
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentEditRequest} opts.environmentEditRequest 
     * @param {module:api/EnvironmentMainCallsApi~editEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Environment;
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
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment by ID
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Environment;
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
     * @param {module:model/EnvironmentStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment status
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentStatus}
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentStatus;
      return this.apiClient.callApi(
        '/environment/{environmentId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentStatuses operation.
     * @callback module:api/EnvironmentMainCallsApi~getEnvironmentStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentStatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment statuses with services status
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentStatuses}
     */
    getEnvironmentStatuses(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentStatuses");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentStatuses;
      return this.apiClient.callApi(
        '/environment/{environmentId}/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentStatusesWithStages operation.
     * @callback module:api/EnvironmentMainCallsApi~getEnvironmentStatusesWithStagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentStatusesWithStages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment statuses with stages
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentMainCallsApi~getEnvironmentStatusesWithStagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentStatusesWithStages}
     */
    getEnvironmentStatusesWithStages(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentStatusesWithStages");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentStatusesWithStages;
      return this.apiClient.callApi(
        '/environment/{environmentId}/statusesWithStages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
