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
* JobEnvironmentVariable service.
* @module api/JobEnvironmentVariableApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class JobEnvironmentVariableApi {

    /**
    * Constructs a new JobEnvironmentVariableApi. 
    * @alias module:api/JobEnvironmentVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createJobEnvironmentVariable operation.
     * @callback module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an environment variable to the job
     * - Add an environment variable to the job. 
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentVariableRequest} opts.environmentVariableRequest 
     * @param {module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createJobEnvironmentVariable(jobId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentVariableRequest'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobEnvironmentVariable");
      }

      let pathParams = {
        'jobId': jobId
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
        '/job/{jobId}/environmentVariable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createJobEnvironmentVariableAlias operation.
     * @callback module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable alias at the job level
     * - Allows you to add an alias at job level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at job level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - You can't create an alias on an alias 
     * @param {String} jobId Job ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createJobEnvironmentVariableAlias(jobId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobEnvironmentVariableAlias");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createJobEnvironmentVariableAlias");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/environmentVariable/{environmentVariableId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createJobEnvironmentVariableOverride operation.
     * @callback module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an environment variable override at the job level
     * - Allows you to override at job level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at job level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * @param {String} jobId Job ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/JobEnvironmentVariableApi~createJobEnvironmentVariableOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createJobEnvironmentVariableOverride(jobId, environmentVariableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobEnvironmentVariableOverride");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling createJobEnvironmentVariableOverride");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/environmentVariable/{environmentVariableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobEnvironmentVariable operation.
     * @callback module:api/JobEnvironmentVariableApi~deleteJobEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable from a job
     * - To delete an environment variable from an job you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * @param {String} jobId Job ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:api/JobEnvironmentVariableApi~deleteJobEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteJobEnvironmentVariable(jobId, environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJobEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteJobEnvironmentVariable");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/environmentVariable/{environmentVariableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editJobEnvironmentVariable operation.
     * @callback module:api/JobEnvironmentVariableApi~editJobEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment variable belonging to the job
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > CONTAINER) 
     * @param {String} jobId Job ID
     * @param {String} environmentVariableId Environment Variable ID
     * @param {module:model/EnvironmentVariableEditRequest} environmentVariableEditRequest 
     * @param {module:api/JobEnvironmentVariableApi~editJobEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    editJobEnvironmentVariable(jobId, environmentVariableId, environmentVariableEditRequest, callback) {
      let postBody = environmentVariableEditRequest;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling editJobEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling editJobEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableEditRequest' is set
      if (environmentVariableEditRequest === undefined || environmentVariableEditRequest === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditRequest' when calling editJobEnvironmentVariable");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/environmentVariable/{environmentVariableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importJobEnvironmentVariable operation.
     * @callback module:api/JobEnvironmentVariableApi~importJobEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import variables
     * Import environment variables in a defined scope, with a defined visibility.
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableImportRequest} opts.variableImportRequest 
     * @param {module:api/JobEnvironmentVariableApi~importJobEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableImport}
     */
    importJobEnvironmentVariable(jobId, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableImportRequest'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling importJobEnvironmentVariable");
      }

      let pathParams = {
        'jobId': jobId
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
        '/job/{jobId}/environmentVariable/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listJobEnvironmentVariable operation.
     * @callback module:api/JobEnvironmentVariableApi~listJobEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariableResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment variables
     * @param {String} jobId Job ID
     * @param {module:api/JobEnvironmentVariableApi~listJobEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariableResponseList}
     */
    listJobEnvironmentVariable(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling listJobEnvironmentVariable");
      }

      let pathParams = {
        'jobId': jobId
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
        '/job/{jobId}/environmentVariable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
