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
import EditDeploymentStage200Response from '../model/EditDeploymentStage200Response';
import EditDeploymentStageRequest from '../model/EditDeploymentStageRequest';
import ListEnvironmentDeploymentStage200Response from '../model/ListEnvironmentDeploymentStage200Response';

/**
* DeploymentStageMainCalls service.
* @module api/DeploymentStageMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class DeploymentStageMainCallsApi {

    /**
    * Constructs a new DeploymentStageMainCallsApi. 
    * @alias module:api/DeploymentStageMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the attachServiceToDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~attachServiceToDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach service to deployment stage
     * @param {String} serviceId Service ID of an application/job/container/database
     * @param {module:api/DeploymentStageMainCallsApi~attachServiceToDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    attachServiceToDeploymentStage(serviceId, callback) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling attachServiceToDeploymentStage");
      }

      let pathParams = {
        'serviceId': serviceId
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
        '/deploymentStage/{deploymentStageId}/service/{serviceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnvironmentDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~createEnvironmentDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create environment deployment stage
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/DeploymentStageMainCallsApi~createEnvironmentDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createEnvironmentDeploymentStage(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createEnvironmentDeploymentStage");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/environment/{environmentId}/deploymentStage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~deleteDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete deployment stage
     * @param {module:api/DeploymentStageMainCallsApi~deleteDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDeploymentStage(callback) {
      let postBody = null;

      let pathParams = {
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
        '/deploymentStage/{deploymentStageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~editDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditDeploymentStage200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit deployment stage
     * @param {String} deploymentStageId Deployment Stage ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EditDeploymentStageRequest} opts.editDeploymentStageRequest 
     * @param {module:api/DeploymentStageMainCallsApi~editDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditDeploymentStage200Response}
     */
    editDeploymentStage(deploymentStageId, opts, callback) {
      opts = opts || {};
      let postBody = opts['editDeploymentStageRequest'];
      // verify the required parameter 'deploymentStageId' is set
      if (deploymentStageId === undefined || deploymentStageId === null) {
        throw new Error("Missing the required parameter 'deploymentStageId' when calling editDeploymentStage");
      }

      let pathParams = {
        'deploymentStageId': deploymentStageId
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
      let returnType = EditDeploymentStage200Response;
      return this.apiClient.callApi(
        '/deploymentStage/{deploymentStageId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~listEnvironmentDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListEnvironmentDeploymentStage200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment deployment stage
     * @param {String} environmentId Environment ID
     * @param {module:api/DeploymentStageMainCallsApi~listEnvironmentDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListEnvironmentDeploymentStage200Response}
     */
    listEnvironmentDeploymentStage(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentDeploymentStage");
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
      let returnType = ListEnvironmentDeploymentStage200Response;
      return this.apiClient.callApi(
        '/environment/{environmentId}/deploymentStage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the moveDeploymentStage operation.
     * @callback module:api/DeploymentStageMainCallsApi~moveDeploymentStageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move deployment stage before requested stage
     * @param {String} stageId Deployment Stage ID
     * @param {module:api/DeploymentStageMainCallsApi~moveDeploymentStageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    moveDeploymentStage(stageId, callback) {
      let postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling moveDeploymentStage");
      }

      let pathParams = {
        'stageId': stageId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/deploymentStage/{deploymentStageId}/moveBefore/{stageId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
