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
import Key from '../model/Key';
import SecretEditRequest from '../model/SecretEditRequest';
import SecretRequest from '../model/SecretRequest';
import SecretResponse from '../model/SecretResponse';
import SecretResponseList from '../model/SecretResponseList';
import Value from '../model/Value';

/**
* ApplicationSecret service.
* @module api/ApplicationSecretApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ApplicationSecretApi {

    /**
    * Constructs a new ApplicationSecretApi. 
    * @alias module:api/ApplicationSecretApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApplicationSecret operation.
     * @callback module:api/ApplicationSecretApi~createApplicationSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a secret to the application
     * - Add a secret to the application. 
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretRequest} opts.secretRequest 
     * @param {module:api/ApplicationSecretApi~createApplicationSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createApplicationSecret(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['secretRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationSecret");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SecretResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createApplicationSecretAlias operation.
     * @callback module:api/ApplicationSecretApi~createApplicationSecretAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret alias at the application level
     * - Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} applicationId Application ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/ApplicationSecretApi~createApplicationSecretAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createApplicationSecretAlias(applicationId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationSecretAlias");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createApplicationSecretAlias");
      }

      let pathParams = {
        'applicationId': applicationId,
        'secretId': secretId
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
      let returnType = SecretResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/secret/{secretId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createApplicationSecretOverride operation.
     * @callback module:api/ApplicationSecretApi~createApplicationSecretOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret override at the application level
     * - Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * @param {String} applicationId Application ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/ApplicationSecretApi~createApplicationSecretOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createApplicationSecretOverride(applicationId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationSecretOverride");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createApplicationSecretOverride");
      }

      let pathParams = {
        'applicationId': applicationId,
        'secretId': secretId
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
      let returnType = SecretResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/secret/{secretId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplicationSecret operation.
     * @callback module:api/ApplicationSecretApi~deleteApplicationSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a secret from an application
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * @param {String} applicationId Application ID
     * @param {String} secretId Secret ID
     * @param {module:api/ApplicationSecretApi~deleteApplicationSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteApplicationSecret(applicationId, secretId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteApplicationSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling deleteApplicationSecret");
      }

      let pathParams = {
        'applicationId': applicationId,
        'secretId': secretId
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
        '/application/{applicationId}/secret/{secretId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editApplicationSecret operation.
     * @callback module:api/ApplicationSecretApi~editApplicationSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a secret belonging to the application
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * @param {String} applicationId Application ID
     * @param {String} secretId Secret ID
     * @param {module:model/SecretEditRequest} secretEditRequest 
     * @param {module:api/ApplicationSecretApi~editApplicationSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    editApplicationSecret(applicationId, secretId, secretEditRequest, callback) {
      let postBody = secretEditRequest;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editApplicationSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling editApplicationSecret");
      }
      // verify the required parameter 'secretEditRequest' is set
      if (secretEditRequest === undefined || secretEditRequest === null) {
        throw new Error("Missing the required parameter 'secretEditRequest' when calling editApplicationSecret");
      }

      let pathParams = {
        'applicationId': applicationId,
        'secretId': secretId
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
      let returnType = SecretResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/secret/{secretId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationSecrets operation.
     * @callback module:api/ApplicationSecretApi~listApplicationSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List application secrets
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationSecretApi~listApplicationSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponseList}
     */
    listApplicationSecrets(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationSecrets");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SecretResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/secret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
