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
import GitTokenAssociatedServicesResponseList from '../model/GitTokenAssociatedServicesResponseList';
import GitTokenRequest from '../model/GitTokenRequest';
import GitTokenResponse from '../model/GitTokenResponse';
import GitTokenResponseList from '../model/GitTokenResponseList';
import Organization from '../model/Organization';
import OrganizationAvailableRoleList from '../model/OrganizationAvailableRoleList';
import OrganizationEditRequest from '../model/OrganizationEditRequest';
import OrganizationRequest from '../model/OrganizationRequest';
import OrganizationResponseList from '../model/OrganizationResponseList';

/**
* OrganizationMainCalls service.
* @module api/OrganizationMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationMainCallsApi {

    /**
    * Constructs a new OrganizationMainCallsApi. 
    * @alias module:api/OrganizationMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createGitToken operation.
     * @callback module:api/OrganizationMainCallsApi~createGitTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a git token
     * Create a new git token to be used as a git provider by a service
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/GitTokenRequest} opts.gitTokenRequest 
     * @param {module:api/OrganizationMainCallsApi~createGitTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTokenResponse}
     */
    createGitToken(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['gitTokenRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createGitToken");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GitTokenResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/gitToken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~createOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationRequest} opts.organizationRequest 
     * @param {module:api/OrganizationMainCallsApi~createOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    createOrganization(opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationRequest'];

      let pathParams = {
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGitToken operation.
     * @callback module:api/OrganizationMainCallsApi~deleteGitTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a git token
     * @param {String} organizationId Organization ID
     * @param {String} gitTokenId Git Token ID
     * @param {module:api/OrganizationMainCallsApi~deleteGitTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGitToken(organizationId, gitTokenId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteGitToken");
      }
      // verify the required parameter 'gitTokenId' is set
      if (gitTokenId === undefined || gitTokenId === null) {
        throw new Error("Missing the required parameter 'gitTokenId' when calling deleteGitToken");
      }

      let pathParams = {
        'organizationId': organizationId,
        'gitTokenId': gitTokenId
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
        '/organization/{organizationId}/gitToken/{gitTokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~deleteOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization
     * To delete an organization you must have the admin permission
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~deleteOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganization");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editGitToken operation.
     * @callback module:api/OrganizationMainCallsApi~editGitTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a git token
     * @param {String} organizationId Organization ID
     * @param {String} gitTokenId Git Token ID
     * @param {Object} opts Optional parameters
     * @param {module:model/GitTokenRequest} opts.gitTokenRequest 
     * @param {module:api/OrganizationMainCallsApi~editGitTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTokenResponse}
     */
    editGitToken(organizationId, gitTokenId, opts, callback) {
      opts = opts || {};
      let postBody = opts['gitTokenRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editGitToken");
      }
      // verify the required parameter 'gitTokenId' is set
      if (gitTokenId === undefined || gitTokenId === null) {
        throw new Error("Missing the required parameter 'gitTokenId' when calling editGitToken");
      }

      let pathParams = {
        'organizationId': organizationId,
        'gitTokenId': gitTokenId
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
      let returnType = GitTokenResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/gitToken/{gitTokenId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~editOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an organization
     * To edit an organization you must have the admin permission
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationEditRequest} opts.organizationEditRequest 
     * @param {module:api/OrganizationMainCallsApi~editOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    editOrganization(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationEditRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editOrganization");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGitTokenAssociatedServices operation.
     * @callback module:api/OrganizationMainCallsApi~getGitTokenAssociatedServicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTokenAssociatedServicesResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization git token associated services
     * Get organization git tokens associated services
     * @param {String} organizationId Organization ID
     * @param {String} gitTokenId Git Token ID
     * @param {module:api/OrganizationMainCallsApi~getGitTokenAssociatedServicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTokenAssociatedServicesResponseList}
     */
    getGitTokenAssociatedServices(organizationId, gitTokenId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getGitTokenAssociatedServices");
      }
      // verify the required parameter 'gitTokenId' is set
      if (gitTokenId === undefined || gitTokenId === null) {
        throw new Error("Missing the required parameter 'gitTokenId' when calling getGitTokenAssociatedServices");
      }

      let pathParams = {
        'organizationId': organizationId,
        'gitTokenId': gitTokenId
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
      let returnType = GitTokenAssociatedServicesResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/gitToken/{gitTokenId}/associatedServices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~getOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization by ID
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~getOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    getOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganization");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGitToken operation.
     * @callback module:api/OrganizationMainCallsApi~getOrganizationGitTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization git token
     * Get organization git token
     * @param {String} organizationId Organization ID
     * @param {String} gitTokenId Git Token ID
     * @param {module:api/OrganizationMainCallsApi~getOrganizationGitTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTokenResponse}
     */
    getOrganizationGitToken(organizationId, gitTokenId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGitToken");
      }
      // verify the required parameter 'gitTokenId' is set
      if (gitTokenId === undefined || gitTokenId === null) {
        throw new Error("Missing the required parameter 'gitTokenId' when calling getOrganizationGitToken");
      }

      let pathParams = {
        'organizationId': organizationId,
        'gitTokenId': gitTokenId
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
      let returnType = GitTokenResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/gitToken/{gitTokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~listOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user organizations
     * @param {module:api/OrganizationMainCallsApi~listOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationResponseList}
     */
    listOrganization(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = OrganizationResponseList;
      return this.apiClient.callApi(
        '/organization', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationAvailableRoles operation.
     * @callback module:api/OrganizationMainCallsApi~listOrganizationAvailableRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationAvailableRoleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization available roles
     * List organization available roles
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~listOrganizationAvailableRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationAvailableRoleList}
     */
    listOrganizationAvailableRoles(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationAvailableRoles");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrganizationAvailableRoleList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/availableRole', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationGitTokens operation.
     * @callback module:api/OrganizationMainCallsApi~listOrganizationGitTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTokenResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization git tokens
     * List organization git tokens
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~listOrganizationGitTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTokenResponseList}
     */
    listOrganizationGitTokens(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationGitTokens");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GitTokenResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/gitToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
