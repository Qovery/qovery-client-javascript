/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
import InlineObject from '../model/InlineObject';
import ProjectDeploymentRuleRequest from '../model/ProjectDeploymentRuleRequest';
import ProjectDeploymentRuleResponse from '../model/ProjectDeploymentRuleResponse';
import ProjectDeploymentRuleResponseList from '../model/ProjectDeploymentRuleResponseList';

/**
* ProjectDeploymentRule service.
* @module api/ProjectDeploymentRuleApi
* @version 1.0.0
*/
export default class ProjectDeploymentRuleApi {

    /**
    * Constructs a new ProjectDeploymentRuleApi. 
    * @alias module:api/ProjectDeploymentRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDeploymentRule operation.
     * @callback module:api/ProjectDeploymentRuleApi~createDeploymentRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectDeploymentRuleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a deployment rule
     * Create a deployment rule
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectDeploymentRuleRequest} opts.projectDeploymentRuleRequest 
     * @param {module:api/ProjectDeploymentRuleApi~createDeploymentRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectDeploymentRuleResponse}
     */
    createDeploymentRule(projectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['projectDeploymentRuleRequest'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling createDeploymentRule");
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
      let returnType = ProjectDeploymentRuleResponse;
      return this.apiClient.callApi(
        '/project/{projectId}/deploymentRule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProjectDeploymentRule operation.
     * @callback module:api/ProjectDeploymentRuleApi~deleteProjectDeploymentRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project deployment rule
     * Delete a project deployment rule
     * @param {String} projectId Project ID
     * @param {String} deploymentRuleId Deployment Rule ID
     * @param {module:api/ProjectDeploymentRuleApi~deleteProjectDeploymentRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProjectDeploymentRule(projectId, deploymentRuleId, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling deleteProjectDeploymentRule");
      }
      // verify the required parameter 'deploymentRuleId' is set
      if (deploymentRuleId === undefined || deploymentRuleId === null) {
        throw new Error("Missing the required parameter 'deploymentRuleId' when calling deleteProjectDeploymentRule");
      }

      let pathParams = {
        'projectId': projectId,
        'deploymentRuleId': deploymentRuleId
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
        '/project/{projectId}/deploymentRule/{deploymentRuleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editProjectDeployemtnRule operation.
     * @callback module:api/ProjectDeploymentRuleApi~editProjectDeployemtnRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectDeploymentRuleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a project deployment rule
     * Edit a project deployment rule
     * @param {String} projectId Project ID
     * @param {String} deploymentRuleId Deployment Rule ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectDeploymentRuleRequest} opts.projectDeploymentRuleRequest 
     * @param {module:api/ProjectDeploymentRuleApi~editProjectDeployemtnRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectDeploymentRuleResponse}
     */
    editProjectDeployemtnRule(projectId, deploymentRuleId, opts, callback) {
      opts = opts || {};
      let postBody = opts['projectDeploymentRuleRequest'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling editProjectDeployemtnRule");
      }
      // verify the required parameter 'deploymentRuleId' is set
      if (deploymentRuleId === undefined || deploymentRuleId === null) {
        throw new Error("Missing the required parameter 'deploymentRuleId' when calling editProjectDeployemtnRule");
      }

      let pathParams = {
        'projectId': projectId,
        'deploymentRuleId': deploymentRuleId
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
      let returnType = ProjectDeploymentRuleResponse;
      return this.apiClient.callApi(
        '/project/{projectId}/deploymentRule/{deploymentRuleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectDeploymentRule operation.
     * @callback module:api/ProjectDeploymentRuleApi~getProjectDeploymentRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectDeploymentRuleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project deployment rule
     * Get a project deployment rule
     * @param {String} projectId Project ID
     * @param {String} deploymentRuleId Deployment Rule ID
     * @param {module:api/ProjectDeploymentRuleApi~getProjectDeploymentRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectDeploymentRuleResponse}
     */
    getProjectDeploymentRule(projectId, deploymentRuleId, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getProjectDeploymentRule");
      }
      // verify the required parameter 'deploymentRuleId' is set
      if (deploymentRuleId === undefined || deploymentRuleId === null) {
        throw new Error("Missing the required parameter 'deploymentRuleId' when calling getProjectDeploymentRule");
      }

      let pathParams = {
        'projectId': projectId,
        'deploymentRuleId': deploymentRuleId
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
      let returnType = ProjectDeploymentRuleResponse;
      return this.apiClient.callApi(
        '/project/{projectId}/deploymentRule/{deploymentRuleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectDeploymentRules operation.
     * @callback module:api/ProjectDeploymentRuleApi~listProjectDeploymentRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectDeploymentRuleResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project deployment rules
     * List project deployment rules
     * @param {String} projectId Project ID
     * @param {module:api/ProjectDeploymentRuleApi~listProjectDeploymentRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectDeploymentRuleResponseList}
     */
    listProjectDeploymentRules(projectId, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listProjectDeploymentRules");
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
      let returnType = ProjectDeploymentRuleResponseList;
      return this.apiClient.callApi(
        '/project/{projectId}/deploymentRule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeploymentRulesPriorityOrder operation.
     * @callback module:api/ProjectDeploymentRuleApi~updateDeploymentRulesPriorityOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update deployment rules priority order
     * Update deployment rules priority order
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/ProjectDeploymentRuleApi~updateDeploymentRulesPriorityOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateDeploymentRulesPriorityOrder(projectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling updateDeploymentRulesPriorityOrder");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/project/{projectId}/deploymentRule/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
