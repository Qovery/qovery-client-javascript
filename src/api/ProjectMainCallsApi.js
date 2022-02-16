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
import ProjectRequest from '../model/ProjectRequest';
import ProjectResponse from '../model/ProjectResponse';

/**
* ProjectMainCalls service.
* @module api/ProjectMainCallsApi
* @version 1.0.0
*/
export default class ProjectMainCallsApi {

    /**
    * Constructs a new ProjectMainCallsApi. 
    * @alias module:api/ProjectMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteProject operation.
     * @callback module:api/ProjectMainCallsApi~deleteProjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project
     * To delete a project you must have the admin permission
     * @param {String} projectId Project ID
     * @param {module:api/ProjectMainCallsApi~deleteProjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProject(projectId, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling deleteProject");
      }

      let pathParams = {
        'projectId': projectId
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
        '/project/{projectId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editProject operation.
     * @callback module:api/ProjectMainCallsApi~editProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a project
     * To edit a project you must have the admin permission
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectRequest} opts.projectRequest 
     * @param {module:api/ProjectMainCallsApi~editProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectResponse}
     */
    editProject(projectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['projectRequest'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling editProject");
      }

      let pathParams = {
        'projectId': projectId
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
      let returnType = ProjectResponse;
      return this.apiClient.callApi(
        '/project/{projectId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProject operation.
     * @callback module:api/ProjectMainCallsApi~getProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project by ID
     * @param {String} projectId Project ID
     * @param {module:api/ProjectMainCallsApi~getProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectResponse}
     */
    getProject(projectId, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getProject");
      }

      let pathParams = {
        'projectId': projectId
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
      let returnType = ProjectResponse;
      return this.apiClient.callApi(
        '/project/{projectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
