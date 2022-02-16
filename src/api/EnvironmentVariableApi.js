/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EnvironmentVariableEditRequest from '../model/EnvironmentVariableEditRequest';
import EnvironmentVariableRequest from '../model/EnvironmentVariableRequest';
import EnvironmentVariableResponse from '../model/EnvironmentVariableResponse';
import EnvironmentVariableResponseList from '../model/EnvironmentVariableResponseList';
import Key from '../model/Key';
import Value from '../model/Value';

/**
* EnvironmentVariable service.
* @module api/EnvironmentVariableApi
* @version 1.0.0
*/
export default class EnvironmentVariableApi {

    /**
    * Constructs a new EnvironmentVariableApi. 
    * @alias module:api/EnvironmentVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEnvironmentEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an environment variable to the environment
     * - Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentVariableRequest} opts.environmentVariableRequest 
     * @param {module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponse}
     */
    createEnvironmentEnvironmentVariable(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentVariableRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentEnvironmentVariable");
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
      let returnType = EnvironmentVariableResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/environmentVariable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnvironmentEnvironmentVariableAlias operation.
     * @callback module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable alias at the environment level
     * - Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} environmentId Environment ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponse}
     */
    createEnvironmentEnvironmentVariableAlias(environmentId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentEnvironmentVariableAlias");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createEnvironmentEnvironmentVariableAlias");
      }

      let pathParams = {
        'environmentId': environmentId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariableResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/environmentVariable/{environmentVariableId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnvironmentEnvironmentVariableOverride operation.
     * @callback module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable override at the environment level
     * - Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * @param {String} environmentId Environment ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/EnvironmentVariableApi~createEnvironmentEnvironmentVariableOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponse}
     */
    createEnvironmentEnvironmentVariableOverride(environmentId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentEnvironmentVariableOverride");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createEnvironmentEnvironmentVariableOverride");
      }

      let pathParams = {
        'environmentId': environmentId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariableResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/environmentVariable/{environmentVariableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEnvironmentEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariableApi~deleteEnvironmentEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable from an environment
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * @param {String} environmentId Environment ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:api/EnvironmentVariableApi~deleteEnvironmentEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteEnvironmentEnvironmentVariable(environmentId, environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deleteEnvironmentEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteEnvironmentEnvironmentVariable");
      }

      let pathParams = {
        'environmentId': environmentId,
        'environmentVariableId': environmentVariableId
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
        '/environment/{environmentId}/environmentVariable/{environmentVariableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editEnvironmentEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariableApi~editEnvironmentEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment variable belonging to the environment
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * @param {String} environmentId Environment ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:model/EnvironmentVariableEditRequest} environmentVariableEditRequest 
     * @param {module:api/EnvironmentVariableApi~editEnvironmentEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponse}
     */
    editEnvironmentEnvironmentVariable(environmentId, environmentVariableId, environmentVariableEditRequest, callback) {
      let postBody = environmentVariableEditRequest;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling editEnvironmentEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling editEnvironmentEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableEditRequest' is set
      if (environmentVariableEditRequest === undefined || environmentVariableEditRequest === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditRequest' when calling editEnvironmentEnvironmentVariable");
      }

      let pathParams = {
        'environmentId': environmentId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariableResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/environmentVariable/{environmentVariableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariableApi~listEnvironmentEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment variables
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentVariableApi~listEnvironmentEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponseList}
     */
    listEnvironmentEnvironmentVariable(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentEnvironmentVariable");
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
      let returnType = EnvironmentVariableResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/environmentVariable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
