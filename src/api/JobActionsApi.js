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
import JobDeployRequest from '../model/JobDeployRequest';
import JobForceEvent from '../model/JobForceEvent';
import Status from '../model/Status';

/**
* JobActions service.
* @module api/JobActionsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class JobActionsApi {

    /**
    * Constructs a new JobActionsApi. 
    * @alias module:api/JobActionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deployJob operation.
     * @callback module:api/JobActionsApi~deployJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy job
     * You must provide a git commit id or an image tag depending on the source location of your code (git vs image repository).
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/JobForceEvent} opts.forceEvent When filled, it indicates the target event to be deployed.   If the concerned job hasn't the target event provided, the job won't be deployed. 
     * @param {module:model/JobDeployRequest} opts.jobDeployRequest 
     * @param {module:api/JobActionsApi~deployJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployJob(jobId, opts, callback) {
      opts = opts || {};
      let postBody = opts['jobDeployRequest'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deployJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
        'forceEvent': opts['forceEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/job/{jobId}/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restartJob operation.
     * @callback module:api/JobActionsApi~restartJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restart job
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/JobForceEvent} opts.forceEvent When filled, it indicates the target event to be deployed.   If the concerned job hasn't the target event provided, the job won't be deployed. 
     * @param {module:api/JobActionsApi~restartJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    restartJob(jobId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling restartJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
        'forceEvent': opts['forceEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/job/{jobId}/restart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopJob operation.
     * @callback module:api/JobActionsApi~stopJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop job
     * @param {String} jobId Job ID
     * @param {module:api/JobActionsApi~stopJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    stopJob(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling stopJob");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/job/{jobId}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
