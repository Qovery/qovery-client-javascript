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
import Secret from '../model/Secret';
import SecretEditRequest from '../model/SecretEditRequest';
import SecretRequest from '../model/SecretRequest';
import SecretResponseList from '../model/SecretResponseList';
import Value from '../model/Value';

/**
* ContainerSecret service.
* @module api/ContainerSecretApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerSecretApi {

    /**
    * Constructs a new ContainerSecretApi. 
    * @alias module:api/ContainerSecretApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createContainerSecret operation.
     * @callback module:api/ContainerSecretApi~createContainerSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a secret to the container
     * - Add a secret to the container. 
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretRequest} opts.secretRequest 
     * @param {module:api/ContainerSecretApi~createContainerSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createContainerSecret(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['secretRequest'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerSecret");
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
      let returnType = Secret;
      return this.apiClient.callApi(
        '/container/{containerId}/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContainerSecretAlias operation.
     * @callback module:api/ContainerSecretApi~createContainerSecretAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret alias at the container level
     * - Allows you to add an alias at container level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at container level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} containerId Container ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/ContainerSecretApi~createContainerSecretAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createContainerSecretAlias(containerId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerSecretAlias");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createContainerSecretAlias");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = Secret;
      return this.apiClient.callApi(
        '/container/{containerId}/secret/{secretId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContainerSecretOverride operation.
     * @callback module:api/ContainerSecretApi~createContainerSecretOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret override at the container level
     * - Allows you to override at container level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at container level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * @param {String} containerId Container ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/ContainerSecretApi~createContainerSecretOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createContainerSecretOverride(containerId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createContainerSecretOverride");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createContainerSecretOverride");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = Secret;
      return this.apiClient.callApi(
        '/container/{containerId}/secret/{secretId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContainerSecret operation.
     * @callback module:api/ContainerSecretApi~deleteContainerSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a secret from an container
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * @param {String} containerId Container ID
     * @param {String} secretId Secret ID
     * @param {module:api/ContainerSecretApi~deleteContainerSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteContainerSecret(containerId, secretId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteContainerSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling deleteContainerSecret");
      }

      let pathParams = {
        'containerId': containerId,
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
        '/container/{containerId}/secret/{secretId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editContainerSecret operation.
     * @callback module:api/ContainerSecretApi~editContainerSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a secret belonging to the container
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > CONTAINER) 
     * @param {String} containerId Container ID
     * @param {String} secretId Secret ID
     * @param {module:model/SecretEditRequest} secretEditRequest 
     * @param {module:api/ContainerSecretApi~editContainerSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    editContainerSecret(containerId, secretId, secretEditRequest, callback) {
      let postBody = secretEditRequest;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling editContainerSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling editContainerSecret");
      }
      // verify the required parameter 'secretEditRequest' is set
      if (secretEditRequest === undefined || secretEditRequest === null) {
        throw new Error("Missing the required parameter 'secretEditRequest' when calling editContainerSecret");
      }

      let pathParams = {
        'containerId': containerId,
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
      let returnType = Secret;
      return this.apiClient.callApi(
        '/container/{containerId}/secret/{secretId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerSecrets operation.
     * @callback module:api/ContainerSecretApi~listContainerSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List container secrets
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * @param {String} containerId Container ID
     * @param {module:api/ContainerSecretApi~listContainerSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponseList}
     */
    listContainerSecrets(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerSecrets");
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
      let returnType = SecretResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/secret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
