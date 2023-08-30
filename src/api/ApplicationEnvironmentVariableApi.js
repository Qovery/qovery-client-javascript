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
* ApplicationEnvironmentVariable service.
* @module api/ApplicationEnvironmentVariableApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ApplicationEnvironmentVariableApi {

    /**
    * Constructs a new ApplicationEnvironmentVariableApi. 
    * @alias module:api/ApplicationEnvironmentVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApplicationEnvironmentVariable operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an environment variable to the application
     * - Add an environment variable to the application. 
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentVariableRequest} opts.environmentVariableRequest 
     * @param {module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createApplicationEnvironmentVariable(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentVariableRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationEnvironmentVariable");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createApplicationEnvironmentVariableAlias operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable alias at the application level
     * - Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - You can't create an alias on an alias 
     * @param {String} applicationId Application ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createApplicationEnvironmentVariableAlias(applicationId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationEnvironmentVariableAlias");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createApplicationEnvironmentVariableAlias");
      }

      let pathParams = {
        'applicationId': applicationId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable/{environmentVariableId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createApplicationEnvironmentVariableOverride operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable override at the application level
     * - Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * @param {String} applicationId Application ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/ApplicationEnvironmentVariableApi~createApplicationEnvironmentVariableOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createApplicationEnvironmentVariableOverride(applicationId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationEnvironmentVariableOverride");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createApplicationEnvironmentVariableOverride");
      }

      let pathParams = {
        'applicationId': applicationId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable/{environmentVariableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplicationEnvironmentVariable operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~deleteApplicationEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable from an application
     * - To delete an environment variable from an application you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * @param {String} applicationId Application ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:api/ApplicationEnvironmentVariableApi~deleteApplicationEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteApplicationEnvironmentVariable(applicationId, environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteApplicationEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteApplicationEnvironmentVariable");
      }

      let pathParams = {
        'applicationId': applicationId,
        'environmentVariableId': environmentVariableId
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
        '/application/{applicationId}/environmentVariable/{environmentVariableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editApplicationEnvironmentVariable operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~editApplicationEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment variable belonging to the application
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * @param {String} applicationId Application ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:model/EnvironmentVariableEditRequest} environmentVariableEditRequest 
     * @param {module:api/ApplicationEnvironmentVariableApi~editApplicationEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    editApplicationEnvironmentVariable(applicationId, environmentVariableId, environmentVariableEditRequest, callback) {
      let postBody = environmentVariableEditRequest;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editApplicationEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling editApplicationEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableEditRequest' is set
      if (environmentVariableEditRequest === undefined || environmentVariableEditRequest === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditRequest' when calling editApplicationEnvironmentVariable");
      }

      let pathParams = {
        'applicationId': applicationId,
        'environmentVariableId': environmentVariableId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable/{environmentVariableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importEnvironmentVariable operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~importEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import variables
     * Import environment variables in a defined scope, with a defined visibility.
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableImportRequest} opts.variableImportRequest 
     * @param {module:api/ApplicationEnvironmentVariableApi~importEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableImport}
     */
    importEnvironmentVariable(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableImportRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling importEnvironmentVariable");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = VariableImport;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationEnvironmentVariable operation.
     * @callback module:api/ApplicationEnvironmentVariableApi~listApplicationEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment variables
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationEnvironmentVariableApi~listApplicationEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponseList}
     */
    listApplicationEnvironmentVariable(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationEnvironmentVariable");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = EnvironmentVariableResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/environmentVariable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
