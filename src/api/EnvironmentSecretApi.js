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
import Key from '../model/Key';
import SecretEditRequest from '../model/SecretEditRequest';
import SecretRequest from '../model/SecretRequest';
import SecretResponse from '../model/SecretResponse';
import SecretResponseList from '../model/SecretResponseList';
import Value from '../model/Value';

/**
* EnvironmentSecret service.
* @module api/EnvironmentSecretApi
* @version 1.0.0
*/
export default class EnvironmentSecretApi {

    /**
    * Constructs a new EnvironmentSecretApi. 
    * @alias module:api/EnvironmentSecretApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEnvironmentSecret operation.
     * @callback module:api/EnvironmentSecretApi~createEnvironmentSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a secret to the environment
     * - Add a secret to the environment.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretRequest} opts.secretRequest 
     * @param {module:api/EnvironmentSecretApi~createEnvironmentSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createEnvironmentSecret(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['secretRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentSecret");
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
      let returnType = SecretResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnvironmentSecretAlias operation.
     * @callback module:api/EnvironmentSecretApi~createEnvironmentSecretAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret alias at the environment level
     * - Allows you to add an alias at environment level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at environment level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} environmentId Environment ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/EnvironmentSecretApi~createEnvironmentSecretAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createEnvironmentSecretAlias(environmentId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentSecretAlias");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createEnvironmentSecretAlias");
      }

      let pathParams = {
        'environmentId': environmentId,
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
        '/environment/{environmentId}/secret/{secretId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnvironmentSecretOverride operation.
     * @callback module:api/EnvironmentSecretApi~createEnvironmentSecretOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret override at the environment level
     * - Allows you to override at environment level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at environment level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * @param {String} environmentId Environment ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/EnvironmentSecretApi~createEnvironmentSecretOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    createEnvironmentSecretOverride(environmentId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentSecretOverride");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createEnvironmentSecretOverride");
      }

      let pathParams = {
        'environmentId': environmentId,
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
        '/environment/{environmentId}/secret/{secretId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editEnvironmentSecret operation.
     * @callback module:api/EnvironmentSecretApi~editEnvironmentSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a secret belonging to the environment
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * @param {String} environmentId Environment ID
     * @param {String} secretId Secret ID
     * @param {module:model/SecretEditRequest} secretEditRequest 
     * @param {module:api/EnvironmentSecretApi~editEnvironmentSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponse}
     */
    editEnvironmentSecret(environmentId, secretId, secretEditRequest, callback) {
      let postBody = secretEditRequest;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling editEnvironmentSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling editEnvironmentSecret");
      }
      // verify the required parameter 'secretEditRequest' is set
      if (secretEditRequest === undefined || secretEditRequest === null) {
        throw new Error("Missing the required parameter 'secretEditRequest' when calling editEnvironmentSecret");
      }

      let pathParams = {
        'environmentId': environmentId,
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
        '/environment/{environmentId}/secret/{secretId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the environmentEnvironmentIdSecretSecretIdDelete operation.
     * @callback module:api/EnvironmentSecretApi~environmentEnvironmentIdSecretSecretIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a secret from the environment
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteEnvironmentSecret 
     * @param {String} environmentId Environment ID
     * @param {String} secretId Secret ID
     * @param {module:api/EnvironmentSecretApi~environmentEnvironmentIdSecretSecretIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    environmentEnvironmentIdSecretSecretIdDelete(environmentId, secretId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling environmentEnvironmentIdSecretSecretIdDelete");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling environmentEnvironmentIdSecretSecretIdDelete");
      }

      let pathParams = {
        'environmentId': environmentId,
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
        '/environment/{environmentId}/secret/{secretId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentSecrets operation.
     * @callback module:api/EnvironmentSecretApi~listEnvironmentSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment secrets
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentSecretApi~listEnvironmentSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponseList}
     */
    listEnvironmentSecrets(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentSecrets");
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
      let returnType = SecretResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/secret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
