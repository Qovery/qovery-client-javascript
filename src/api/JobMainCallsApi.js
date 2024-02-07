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
import CommitResponseList from '../model/CommitResponseList';
import JobRequest from '../model/JobRequest';
import JobResponse from '../model/JobResponse';
import Status from '../model/Status';

/**
* JobMainCalls service.
* @module api/JobMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class JobMainCallsApi {

    /**
    * Constructs a new JobMainCallsApi. 
    * @alias module:api/JobMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteJob operation.
     * @callback module:api/JobMainCallsApi~deleteJobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete job
     * To delete the job you must have the admin permission
     * @param {String} jobId Job ID
     * @param {module:api/JobMainCallsApi~deleteJobCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteJob(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJob");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/job/{jobId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editJob operation.
     * @callback module:api/JobMainCallsApi~editJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit job
     * - To edit the job you must have the admin permission. 
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {module:model/JobRequest} [jobRequest] 
     * @param {module:api/JobMainCallsApi~editJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobResponse}
     */
    editJob(jobId, opts, callback) {
      opts = opts || {};
      let postBody = opts['jobRequest'];
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling editJob");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JobResponse;
      return this.apiClient.callApi(
        '/job/{jobId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJob operation.
     * @callback module:api/JobMainCallsApi~getJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job by ID
     * @param {String} jobId Job ID
     * @param {module:api/JobMainCallsApi~getJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobResponse}
     */
    getJob(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJob");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobResponse;
      return this.apiClient.callApi(
        '/job/{jobId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobStatus operation.
     * @callback module:api/JobMainCallsApi~getJobStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job status
     * @param {String} jobId Job ID
     * @param {module:api/JobMainCallsApi~getJobStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    getJobStatus(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJobStatus");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/job/{jobId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listJobCommit operation.
     * @callback module:api/JobMainCallsApi~listJobCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List last job commits
     * Returns list of the last 100 commits made on the repository linked to the job
     * @param {String} jobId Job ID
     * @param {Object} opts Optional parameters
     * @param {String} [startId] Starting point after which to return results
     * @param {String} [gitCommitId] Git Commit ID
     * @param {module:api/JobMainCallsApi~listJobCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitResponseList}
     */
    listJobCommit(jobId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling listJobCommit");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
        'startId': opts['startId'],
        'gitCommitId': opts['gitCommitId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommitResponseList;
      return this.apiClient.callApi(
        '/job/{jobId}/commit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
