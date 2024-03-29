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
import APIVariableScopeEnum from '../model/APIVariableScopeEnum';
import ServiceTypeForVariableEnum from '../model/ServiceTypeForVariableEnum';
import VariableAliasRequest from '../model/VariableAliasRequest';
import VariableEditRequest from '../model/VariableEditRequest';
import VariableImport from '../model/VariableImport';
import VariableImportRequest from '../model/VariableImportRequest';
import VariableOverrideRequest from '../model/VariableOverrideRequest';
import VariableRequest from '../model/VariableRequest';
import VariableResponse from '../model/VariableResponse';
import VariableResponseList from '../model/VariableResponseList';

/**
* VariableMainCalls service.
* @module api/VariableMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class VariableMainCallsApi {

    /**
    * Constructs a new VariableMainCallsApi. 
    * @alias module:api/VariableMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createVariable operation.
     * @callback module:api/VariableMainCallsApi~createVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a variable
     * - Create a variable with the scope defined in the request body. 
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableRequest} opts.variableRequest 
     * @param {module:api/VariableMainCallsApi~createVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableResponse}
     */
    createVariable(opts, callback) {
      opts = opts || {};
      let postBody = opts['variableRequest'];

      let pathParams = {
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
      let returnType = VariableResponse;
      return this.apiClient.callApi(
        '/variable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createVariableAlias operation.
     * @callback module:api/VariableMainCallsApi~createVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a variable alias
     * - Allows you to create an alias of one of the existing variables. - You have to specify an alias (key) in the request body, the scope and the parent id of the alias (project id, environment id or service id) - The system will create a new variable at the requested level with the same value as the one corresponding to the variable id passed as path parameter. - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" or in the \"aliased_secret\" field of the newly created variable - You can't create an alias on an alias 
     * @param {String} variableId Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableAliasRequest} opts.variableAliasRequest 
     * @param {module:api/VariableMainCallsApi~createVariableAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableResponse}
     */
    createVariableAlias(variableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableAliasRequest'];
      // verify the required parameter 'variableId' is set
      if (variableId === undefined || variableId === null) {
        throw new Error("Missing the required parameter 'variableId' when calling createVariableAlias");
      }

      let pathParams = {
        'variableId': variableId
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
      let returnType = VariableResponse;
      return this.apiClient.callApi(
        '/variable/{variableId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createVariableOverride operation.
     * @callback module:api/VariableMainCallsApi~createVariableOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a variable override
     * - Allows you to override a variable that has a higher scope. - You have to specify a value (override) in the request body and the scope and the parent id of the variable to override (project id, environment id or service id) - The system will create a new environment variable at the requested level with the same key as the one corresponding to the variable id passed as path parameter. - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" or in the \"overridden_secret\" field of the newly created variable 
     * @param {String} variableId Variable ID
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableOverrideRequest} opts.variableOverrideRequest 
     * @param {module:api/VariableMainCallsApi~createVariableOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableResponse}
     */
    createVariableOverride(variableId, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableOverrideRequest'];
      // verify the required parameter 'variableId' is set
      if (variableId === undefined || variableId === null) {
        throw new Error("Missing the required parameter 'variableId' when calling createVariableOverride");
      }

      let pathParams = {
        'variableId': variableId
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
      let returnType = VariableResponse;
      return this.apiClient.callApi(
        '/variable/{variableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVariable operation.
     * @callback module:api/VariableMainCallsApi~deleteVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a variable
     * - To delete a variable - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * @param {String} variableId Variable ID
     * @param {module:api/VariableMainCallsApi~deleteVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVariable(variableId, callback) {
      let postBody = null;
      // verify the required parameter 'variableId' is set
      if (variableId === undefined || variableId === null) {
        throw new Error("Missing the required parameter 'variableId' when calling deleteVariable");
      }

      let pathParams = {
        'variableId': variableId
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
        '/variable/{variableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editVariable operation.
     * @callback module:api/VariableMainCallsApi~editVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a variable
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value 
     * @param {String} variableId Variable ID
     * @param {module:model/VariableEditRequest} variableEditRequest 
     * @param {module:api/VariableMainCallsApi~editVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableResponse}
     */
    editVariable(variableId, variableEditRequest, callback) {
      let postBody = variableEditRequest;
      // verify the required parameter 'variableId' is set
      if (variableId === undefined || variableId === null) {
        throw new Error("Missing the required parameter 'variableId' when calling editVariable");
      }
      // verify the required parameter 'variableEditRequest' is set
      if (variableEditRequest === undefined || variableEditRequest === null) {
        throw new Error("Missing the required parameter 'variableEditRequest' when calling editVariable");
      }

      let pathParams = {
        'variableId': variableId
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
      let returnType = VariableResponse;
      return this.apiClient.callApi(
        '/variable/{variableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importEnvironmentVariables operation.
     * @callback module:api/VariableMainCallsApi~importEnvironmentVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import variables
     * Import environment variables in a defined scope, with a defined visibility.
     * @param {String} serviceId service id
     * @param {module:model/ServiceTypeForVariableEnum} serviceType service type
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableImportRequest} opts.variableImportRequest 
     * @param {module:api/VariableMainCallsApi~importEnvironmentVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableImport}
     */
    importEnvironmentVariables(serviceId, serviceType, opts, callback) {
      opts = opts || {};
      let postBody = opts['variableImportRequest'];
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling importEnvironmentVariables");
      }
      // verify the required parameter 'serviceType' is set
      if (serviceType === undefined || serviceType === null) {
        throw new Error("Missing the required parameter 'serviceType' when calling importEnvironmentVariables");
      }

      let pathParams = {
      };
      let queryParams = {
        'service_id': serviceId,
        'service_type': serviceType
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
        '/variable/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listVariables operation.
     * @callback module:api/VariableMainCallsApi~listVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List variables
     * Returns a list of variables. The result can be filtered by using the query parameters.
     * @param {String} parentId it filters the list by returning only the variables accessible by the selected parent_id. This field shall contain the id of a project, environment or service depending on the selected scope. Example, if scope = APPLICATION and parent_id=<application_id>, the result will contain any variable accessible by the application. The result will contain also any variable declared at an higher scope.
     * @param {module:model/APIVariableScopeEnum} scope the type of the parent_id (application, project, environment etc..).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isSecret 
     * @param {module:api/VariableMainCallsApi~listVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariableResponseList}
     */
    listVariables(parentId, scope, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling listVariables");
      }
      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling listVariables");
      }

      let pathParams = {
      };
      let queryParams = {
        'parent_id': parentId,
        'scope': scope,
        'is_secret': opts['isSecret']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VariableResponseList;
      return this.apiClient.callApi(
        '/variable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
