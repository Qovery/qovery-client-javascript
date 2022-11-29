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
* JobSecret service.
* @module api/JobSecretApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class JobSecretApi {

    /**
    * Constructs a new JobSecretApi. 
    * @alias module:api/JobSecretApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createJobSecret operation.
     * @callback module:api/JobSecretApi~createJobSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a secret to the job
     * - Add a secret to the job. 
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretRequest} opts.secretRequest 
     * @param {module:api/JobSecretApi~createJobSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createJobSecret(jobId, opts, callback) {
      opts = opts || {};
      let postBody = opts['secretRequest'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobSecret");
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
      let returnType = Secret;
      return this.apiClient.callApi(
        '/job/{jobId}/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createJobSecretAlias operation.
     * @callback module:api/JobSecretApi~createJobSecretAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret alias at the job level
     * - Allows you to add an alias at job level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at job level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * @param {String} jobId Job ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Key} opts.key 
     * @param {module:api/JobSecretApi~createJobSecretAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createJobSecretAlias(jobId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['key'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobSecretAlias");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createJobSecretAlias");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/secret/{secretId}/alias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createJobSecretOverride operation.
     * @callback module:api/JobSecretApi~createJobSecretOverrideCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a secret override at the job level
     * - Allows you to override at job level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at job level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * @param {String} jobId Job ID
     * @param {String} secretId Secret ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Value} opts.value 
     * @param {module:api/JobSecretApi~createJobSecretOverrideCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    createJobSecretOverride(jobId, secretId, opts, callback) {
      opts = opts || {};
      let postBody = opts['value'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling createJobSecretOverride");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling createJobSecretOverride");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/secret/{secretId}/override', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobSecret operation.
     * @callback module:api/JobSecretApi~deleteJobSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a secret from an job
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * @param {String} jobId Job ID
     * @param {String} secretId Secret ID
     * @param {module:api/JobSecretApi~deleteJobSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteJobSecret(jobId, secretId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJobSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling deleteJobSecret");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/secret/{secretId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editJobSecret operation.
     * @callback module:api/JobSecretApi~editJobSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a secret belonging to the job
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > CONTAINER) 
     * @param {String} jobId Job ID
     * @param {String} secretId Secret ID
     * @param {module:model/SecretEditRequest} secretEditRequest 
     * @param {module:api/JobSecretApi~editJobSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */
    editJobSecret(jobId, secretId, secretEditRequest, callback) {
      let postBody = secretEditRequest;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling editJobSecret");
      }
      // verify the required parameter 'secretId' is set
      if (secretId === undefined || secretId === null) {
        throw new Error("Missing the required parameter 'secretId' when calling editJobSecret");
      }
      // verify the required parameter 'secretEditRequest' is set
      if (secretEditRequest === undefined || secretEditRequest === null) {
        throw new Error("Missing the required parameter 'secretEditRequest' when calling editJobSecret");
      }

      let pathParams = {
        'jobId': jobId,
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
        '/job/{jobId}/secret/{secretId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listJobSecrets operation.
     * @callback module:api/JobSecretApi~listJobSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List job secrets
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * @param {String} jobId Job ID
     * @param {module:api/JobSecretApi~listJobSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretResponseList}
     */
    listJobSecrets(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling listJobSecrets");
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
      let returnType = SecretResponseList;
      return this.apiClient.callApi(
        '/job/{jobId}/secret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}