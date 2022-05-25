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
import EnvironmentVariable from '../model/EnvironmentVariable';
import EnvironmentVariableEditRequest from '../model/EnvironmentVariableEditRequest';
import EnvironmentVariableRequest from '../model/EnvironmentVariableRequest';
import EnvironmentVariableResponseList from '../model/EnvironmentVariableResponseList';
import Key from '../model/Key';
import Value from '../model/Value';
import VariableImport from '../model/VariableImport';
import VariableImportRequest from '../model/VariableImportRequest';

/**
* ContainerEnvironmentVariable service.
* @module api/ContainerEnvironmentVariableApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerEnvironmentVariableApi {

    /**
    * Constructs a new ContainerEnvironmentVariableApi. 
    * @alias module:api/ContainerEnvironmentVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createContainerEnvironmentVariable operation.
     * @callback module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an environment variable to the container
     * - Add an environment variable to the container. 
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentVariableRequest} opts.environmentVariableRequest 
     * @param {module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createContainerEnvironmentVariable(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentVariableRequest'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerEnvironmentVariable");
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContainerEnvironmentVariableAlias operation.
     * @callback module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable alias at the container level
     * - Allows you to add an alias at container level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at container level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} containerId Container ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createContainerEnvironmentVariableAlias(containerId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerEnvironmentVariableAlias");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createContainerEnvironmentVariableAlias");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable/{environmentVariableId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContainerEnvironmentVariableOverride operation.
     * @callback module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable override at the container level
     * - Allows you to override at container level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at container level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * @param {String} containerId Container ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/ContainerEnvironmentVariableApi~createContainerEnvironmentVariableOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createContainerEnvironmentVariableOverride(containerId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerEnvironmentVariableOverride");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createContainerEnvironmentVariableOverride");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable/{environmentVariableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContainerEnvironmentVariable operation.
     * @callback module:api/ContainerEnvironmentVariableApi~deleteContainerEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable from a container
     * - To delete an environment variable from an container you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * @param {String} containerId Container ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:api/ContainerEnvironmentVariableApi~deleteContainerEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteContainerEnvironmentVariable(containerId, environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteContainerEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteContainerEnvironmentVariable");
      }

      let pathParams = {
        'containerId': containerId,
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
        '/container/{containerId}/environmentVariable/{environmentVariableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editContainerEnvironmentVariable operation.
     * @callback module:api/ContainerEnvironmentVariableApi~editContainerEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment variable belonging to the container
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > CONTAINER) 
     * @param {String} containerId Container ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:model/EnvironmentVariableEditRequest} environmentVariableEditRequest 
     * @param {module:api/ContainerEnvironmentVariableApi~editContainerEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    editContainerEnvironmentVariable(containerId, environmentVariableId, environmentVariableEditRequest, callback) {
      let postBody = environmentVariableEditRequest;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling editContainerEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling editContainerEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableEditRequest' is set
      if (environmentVariableEditRequest === undefined || environmentVariableEditRequest === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditRequest' when calling editContainerEnvironmentVariable");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable/{environmentVariableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importContainerEnvironmentVariable operation.
     * @callback module:api/ContainerEnvironmentVariableApi~importContainerEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import variables
     * Import environment variables in a defined scope, with a defined visibility.
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableImportRequest} opts.variableImportRequest 
     * @param {module:api/ContainerEnvironmentVariableApi~importContainerEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableImport}
     */
    importContainerEnvironmentVariable(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableImportRequest'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling importContainerEnvironmentVariable");
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
      let returnType = VariableImport;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerEnvironmentVariable operation.
     * @callback module:api/ContainerEnvironmentVariableApi~listContainerEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment variables
     * @param {String} containerId Container ID
     * @param {module:api/ContainerEnvironmentVariableApi~listContainerEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponseList}
     */
    listContainerEnvironmentVariable(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerEnvironmentVariable");
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
      let returnType = EnvironmentVariableResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/environmentVariable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
