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
* GitRepositories service.
* @module api/GitRepositoriesApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class GitRepositoriesApi {

    /**
    * Constructs a new GitRepositoriesApi. 
    * @alias module:api/GitRepositoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getBitbucketRepositories operation.
     * @callback module:api/GitRepositoriesApi~getBitbucketRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bitbucket repositories of the connected user
     * @param {module:api/GitRepositoriesApi~getBitbucketRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getBitbucketRepositories(callback) {
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/account/bitbucket/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBitbucketRepositoryBranches operation.
     * @callback module:api/GitRepositoriesApi~getBitbucketRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bitbucket branches of the specified repository
     * @param {Object} opts Optional parameters
     * @param {String} [name] The name of the repository where to retrieve the branches
     * @param {module:api/GitRepositoriesApi~getBitbucketRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getBitbucketRepositoryBranches(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
        '/account/bitbucket/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGitProviderAccount operation.
     * @callback module:api/GitRepositoriesApi~getGitProviderAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitAuthProviderResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get git provider accounts
     * @param {module:api/GitRepositoriesApi~getGitProviderAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitAuthProviderResponseList}
     */
    getGitProviderAccount(callback) {
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
      let returnType = GitAuthProviderResponseList;
      return this.apiClient.callApi(
        '/account/gitAuthProvider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGithubRepositories operation.
     * @callback module:api/GitRepositoriesApi~getGithubRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get github repositories of the connected user
     * @param {module:api/GitRepositoriesApi~getGithubRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getGithubRepositories(callback) {
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/account/github/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGithubRepositoryBranches operation.
     * @callback module:api/GitRepositoriesApi~getGithubRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get github branches of the specified repository
     * @param {Object} opts Optional parameters
     * @param {String} [name] The name of the repository where to retrieve the branches
     * @param {module:api/GitRepositoriesApi~getGithubRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getGithubRepositoryBranches(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
        '/account/github/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGitlabRepositories operation.
     * @callback module:api/GitRepositoriesApi~getGitlabRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get gitlab repositories of the connected user
     * @param {module:api/GitRepositoriesApi~getGitlabRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryResponseList}
     */
    getGitlabRepositories(callback) {
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
      let returnType = GitRepositoryResponseList;
      return this.apiClient.callApi(
        '/account/gitlab/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGitlabRepositoryBranches operation.
     * @callback module:api/GitRepositoriesApi~getGitlabRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRepositoryBranchResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get gitlab branches of the specified repository
     * @param {Object} opts Optional parameters
     * @param {String} [name] The name of the repository to retrieve the branches
     * @param {module:api/GitRepositoriesApi~getGitlabRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRepositoryBranchResponseList}
     */
    getGitlabRepositoryBranches(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
        '/account/gitlab/repository/branch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
