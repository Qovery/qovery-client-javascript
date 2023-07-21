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
import VariableAliasRequest from '../model/VariableAliasRequest';
import VariableOverrideRequest from '../model/VariableOverrideRequest';
import VariableResponse from '../model/VariableResponse';

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
     * Callback function to receive the result of the createVariableAlias operation.
     * @callback module:api/VariableMainCallsApi~createVariableAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a variable alias
     * - Allows you to add an alias at the level defined in the request body on an existing variable having a higher scope, in order to customize its key. - You have to specify a key in the request body and the scope and the parent id of the alias - The system will create a new variable at the requested level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" or in the \"aliased_secret\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
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

      let authNames = ['bearerAuth'];
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
     * - Allows you to override a variable that has a higher scope. - You have to specify a value in the request body and the scope and the parent id of the variable to alias - The system will create a new environment variable at project level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" or in the \"overridden_secret\" field of the newly created variable 
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VariableResponse;
      return this.apiClient.callApi(
        '/variable/{variableId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
