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
import GitAuthProviderResponseList from '../model/GitAuthProviderResponseList';
import GitRepositoryBranchResponseList from '../model/GitRepositoryBranchResponseList';
import GitRepositoryResponseList from '../model/GitRepositoryResponseList';

/**
* OrganizationAccountGitRepositories service.
* @module api/OrganizationAccountGitRepositoriesApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationAccountGitRepositoriesApi {

    /**
    * Constructs a new OrganizationAccountGitRepositoriesApi. 
    * @alias module:api/OrganizationAccountGitRepositoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getOrganizationBitbucketRepositories operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationBitbucketRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bitbucket repositories of the connected user
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationBitbucketRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getOrganizationBitbucketRepositories(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationBitbucketRepositories");
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/bitbucket/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationBitbucketRepositoryBranches operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationBitbucketRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bitbucket branches of the specified repository
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the repository where to retrieve the branches
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationBitbucketRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getOrganizationBitbucketRepositoryBranches(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationBitbucketRepositoryBranches");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GitRepositoryBranchResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/bitbucket/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGitProviderAccount operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitProviderAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitAuthProviderResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get git provider accounts
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitProviderAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitAuthProviderResponseList}
     */
    getOrganizationGitProviderAccount(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGitProviderAccount");
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
      let returnType = GitAuthProviderResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/gitAuthProvider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGithubRepositories operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGithubRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get github repositories of the connected user
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGithubRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getOrganizationGithubRepositories(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGithubRepositories");
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/github/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGithubRepositoryBranches operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGithubRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get github branches of the specified repository
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the repository where to retrieve the branches
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGithubRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getOrganizationGithubRepositoryBranches(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGithubRepositoryBranches");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GitRepositoryBranchResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/github/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGitlabRepositories operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitlabRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get gitlab repositories of the connected user
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitlabRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getOrganizationGitlabRepositories(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGitlabRepositories");
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/gitlab/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationGitlabRepositoryBranches operation.
     * @callback module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitlabRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get gitlab branches of the specified repository
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the repository to retrieve the branches
     * @param {module:api/OrganizationAccountGitRepositoriesApi~getOrganizationGitlabRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getOrganizationGitlabRepositoryBranches(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationGitlabRepositoryBranches");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GitRepositoryBranchResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/account/gitlab/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
