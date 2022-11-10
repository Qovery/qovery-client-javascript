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
     * You must provide a git commit id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Enable or Disable the force trigger of the job (default to false)
     * @param {module:model/JobDeployRequest} opts.jobDeployRequest 
     * @param {module:api/JobActionsApi~deployJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployJob(opts, callback) {
      opts = opts || {};
      let postBody = opts['jobDeployRequest'];

      let pathParams = {
      };
      let queryParams = {
        'force': opts['force']
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
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Enable or Disable the force trigger of the job (default to false)
     * @param {module:api/JobActionsApi~restartJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    restartJob(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'force': opts['force']
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
     * @param {module:api/JobActionsApi~stopJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    stopJob(callback) {
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
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/job/{jobId}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
