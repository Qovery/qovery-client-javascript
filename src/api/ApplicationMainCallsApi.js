/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApplicationEditRequest from '../model/ApplicationEditRequest';
import ApplicationResponse from '../model/ApplicationResponse';
import CommitResponseList from '../model/CommitResponseList';
import LinkResponseList from '../model/LinkResponseList';
import Status from '../model/Status';
import TagRequest from '../model/TagRequest';
import TagResponseList from '../model/TagResponseList';
import UserResponseList from '../model/UserResponseList';

/**
* ApplicationMainCalls service.
* @module api/ApplicationMainCallsApi
* @version 1.0.2
*/
export default class ApplicationMainCallsApi {

    /**
    * Constructs a new ApplicationMainCallsApi. 
    * @alias module:api/ApplicationMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApplicationTag operation.
     * @callback module:api/ApplicationMainCallsApi~createApplicationTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add application tag
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TagRequest} opts.tagRequest 
     * @param {module:api/ApplicationMainCallsApi~createApplicationTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagResponseList}
     */
    createApplicationTag(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['tagRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationTag");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TagResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplication operation.
     * @callback module:api/ApplicationMainCallsApi~deleteApplicationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete application
     * To delete the application you must have the admin permission
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~deleteApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteApplication(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/application/{applicationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplicationTag operation.
     * @callback module:api/ApplicationMainCallsApi~deleteApplicationTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete application tag
     * @param {String} applicationId Application ID
     * @param {String} tagId Tag ID
     * @param {module:api/ApplicationMainCallsApi~deleteApplicationTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteApplicationTag(applicationId, tagId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteApplicationTag");
      }
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteApplicationTag");
      }

      let pathParams = {
        'applicationId': applicationId,
        'tagId': tagId
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
        '/application/{applicationId}/tag/{tagId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editApplication operation.
     * @callback module:api/ApplicationMainCallsApi~editApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit application
     * - To edit the application you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationEditRequest} opts.applicationEditRequest 
     * @param {module:api/ApplicationMainCallsApi~editApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponse}
     */
    editApplication(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationEditRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApplicationResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplication operation.
     * @callback module:api/ApplicationMainCallsApi~getApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application by ID
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~getApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponse}
     */
    getApplication(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApplicationResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationStatus operation.
     * @callback module:api/ApplicationMainCallsApi~getApplicationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application status
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~getApplicationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    getApplicationStatus(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationStatus");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/application/{applicationId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationCommit operation.
     * @callback module:api/ApplicationMainCallsApi~listApplicationCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List last commits
     * Returns list of the last 100 commits made on the repository linked to the application
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startId Starting point after which to return results
     * @param {String} opts.gitCommitId Git Commit ID
     * @param {module:api/ApplicationMainCallsApi~listApplicationCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitResponseList}
     */
    listApplicationCommit(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationCommit");
      }

      let pathParams = {
        'applicationId': applicationId
      };
      let queryParams = {
        'startId': opts['startId'],
        'gitCommitId': opts['gitCommitId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommitResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/commit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationContributor operation.
     * @callback module:api/ApplicationMainCallsApi~listApplicationContributorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List contributors
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~listApplicationContributorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponseList}
     */
    listApplicationContributor(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationContributor");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/contributor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationLinks operation.
     * @callback module:api/ApplicationMainCallsApi~listApplicationLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all URLs of the application
     * This will return all the custom domains and Qovery autogenerated domain for the given application
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~listApplicationLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LinkResponseList}
     */
    listApplicationLinks(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationLinks");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LinkResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationTag operation.
     * @callback module:api/ApplicationMainCallsApi~listApplicationTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tags
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMainCallsApi~listApplicationTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagResponseList}
     */
    listApplicationTag(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationTag");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TagResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
