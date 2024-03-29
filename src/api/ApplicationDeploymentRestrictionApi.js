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
import ApplicationDeploymentRestriction from '../model/ApplicationDeploymentRestriction';
import ApplicationDeploymentRestrictionRequest from '../model/ApplicationDeploymentRestrictionRequest';
import ApplicationDeploymentRestrictionResponseList from '../model/ApplicationDeploymentRestrictionResponseList';

/**
* ApplicationDeploymentRestriction service.
* @module api/ApplicationDeploymentRestrictionApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ApplicationDeploymentRestrictionApi {

    /**
    * Constructs a new ApplicationDeploymentRestrictionApi. 
    * @alias module:api/ApplicationDeploymentRestrictionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApplicationDeploymentRestriction operation.
     * @callback module:api/ApplicationDeploymentRestrictionApi~createApplicationDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationDeploymentRestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an application deployment restriction
     * Create an application deployment restriction
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationDeploymentRestrictionRequest} opts.applicationDeploymentRestrictionRequest 
     * @param {module:api/ApplicationDeploymentRestrictionApi~createApplicationDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationDeploymentRestriction}
     */
    createApplicationDeploymentRestriction(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationDeploymentRestrictionRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationDeploymentRestriction");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = ApplicationDeploymentRestriction;
      return this.apiClient.callApi(
        '/application/{applicationId}/deploymentRestriction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplicationDeploymentRestriction operation.
     * @callback module:api/ApplicationDeploymentRestrictionApi~deleteApplicationDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application deployment restriction
     * Delete an application deployment restriction
     * @param {String} applicationId Application ID
     * @param {String} deploymentRestrictionId Deployment Restriction ID
     * @param {module:api/ApplicationDeploymentRestrictionApi~deleteApplicationDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteApplicationDeploymentRestriction(applicationId, deploymentRestrictionId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteApplicationDeploymentRestriction");
      }
      // verify the required parameter 'deploymentRestrictionId' is set
      if (deploymentRestrictionId === undefined || deploymentRestrictionId === null) {
        throw new Error("Missing the required parameter 'deploymentRestrictionId' when calling deleteApplicationDeploymentRestriction");
      }

      let pathParams = {
        'applicationId': applicationId,
        'deploymentRestrictionId': deploymentRestrictionId
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
        '/application/{applicationId}/deploymentRestriction/{deploymentRestrictionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editApplicationDeploymentRestriction operation.
     * @callback module:api/ApplicationDeploymentRestrictionApi~editApplicationDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationDeploymentRestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an application deployment restriction
     * Edit an application deployment restriction
     * @param {String} applicationId Application ID
     * @param {String} deploymentRestrictionId Deployment Restriction ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationDeploymentRestrictionRequest} opts.applicationDeploymentRestrictionRequest 
     * @param {module:api/ApplicationDeploymentRestrictionApi~editApplicationDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationDeploymentRestriction}
     */
    editApplicationDeploymentRestriction(applicationId, deploymentRestrictionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationDeploymentRestrictionRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editApplicationDeploymentRestriction");
      }
      // verify the required parameter 'deploymentRestrictionId' is set
      if (deploymentRestrictionId === undefined || deploymentRestrictionId === null) {
        throw new Error("Missing the required parameter 'deploymentRestrictionId' when calling editApplicationDeploymentRestriction");
      }

      let pathParams = {
        'applicationId': applicationId,
        'deploymentRestrictionId': deploymentRestrictionId
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
      let returnType = ApplicationDeploymentRestriction;
      return this.apiClient.callApi(
        '/application/{applicationId}/deploymentRestriction/{deploymentRestrictionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationDeploymentRestrictions operation.
     * @callback module:api/ApplicationDeploymentRestrictionApi~getApplicationDeploymentRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationDeploymentRestrictionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application deployment restrictions
     * Get application deployment restrictions
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationDeploymentRestrictionApi~getApplicationDeploymentRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationDeploymentRestrictionResponseList}
     */
    getApplicationDeploymentRestrictions(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationDeploymentRestrictions");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = ApplicationDeploymentRestrictionResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/deploymentRestriction', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
