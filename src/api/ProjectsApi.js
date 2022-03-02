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
import ProjectRequest from '../model/ProjectRequest';
import ProjectResponse from '../model/ProjectResponse';
import ProjectResponseList from '../model/ProjectResponseList';
import ProjectStatsResponseList from '../model/ProjectStatsResponseList';

/**
* Projects service.
* @module api/ProjectsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ProjectsApi {

    /**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProject operation.
     * @callback module:api/ProjectsApi~createProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectRequest} opts.projectRequest 
     * @param {module:api/ProjectsApi~createProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectResponse}
     */
    createProject(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['projectRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createProject");
      }

      let pathParams = {
        'organizationId': organizationId
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
        '/organization/{organizationId}/project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationProjectStats operation.
     * @callback module:api/ProjectsApi~getOrganizationProjectStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectStatsResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List total number of services and environments for each project of the organization
     * Returns a list of project ids, and for each its total numberof services and environments
     * @param {String} organizationId Organization ID
     * @param {module:api/ProjectsApi~getOrganizationProjectStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectStatsResponseList}
     */
    getOrganizationProjectStats(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationProjectStats");
      }

      let pathParams = {
        'organizationId': organizationId
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
      let returnType = ProjectStatsResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/project/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProject operation.
     * @callback module:api/ProjectsApi~listProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List projects
     * @param {String} organizationId Organization ID
     * @param {module:api/ProjectsApi~listProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectResponseList}
     */
    listProject(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listProject");
      }

      let pathParams = {
        'organizationId': organizationId
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
      let returnType = ProjectResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
