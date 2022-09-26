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
import OrganizationCustomRole from '../model/OrganizationCustomRole';
import OrganizationCustomRoleCreateRequest from '../model/OrganizationCustomRoleCreateRequest';
import OrganizationCustomRoleList from '../model/OrganizationCustomRoleList';
import OrganizationCustomRoleUpdateRequest from '../model/OrganizationCustomRoleUpdateRequest';

/**
* OrganizationCustomRole service.
* @module api/OrganizationCustomRoleApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationCustomRoleApi {

    /**
    * Constructs a new OrganizationCustomRoleApi. 
    * @alias module:api/OrganizationCustomRoleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createOrganizationCustomRole operation.
     * @callback module:api/OrganizationCustomRoleApi~createOrganizationCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationCustomRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization custom role
     * Create an organization custom role
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationCustomRoleCreateRequest} opts.organizationCustomRoleCreateRequest 
     * @param {module:api/OrganizationCustomRoleApi~createOrganizationCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationCustomRole}
     */
    createOrganizationCustomRole(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationCustomRoleCreateRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createOrganizationCustomRole");
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
      let returnType = OrganizationCustomRole;
      return this.apiClient.callApi(
        '/organization/{organizationId}/customRole', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrganizationCustomRole operation.
     * @callback module:api/OrganizationCustomRoleApi~deleteOrganizationCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete organization custom role
     * Delete organization custom role
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationCustomRoleApi~deleteOrganizationCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganizationCustomRole(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganizationCustomRole");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/customRole/{customRoleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editOrganizationCustomRole operation.
     * @callback module:api/OrganizationCustomRoleApi~editOrganizationCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationCustomRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an organization custom role
     * Edit an organization custom role
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationCustomRoleUpdateRequest} opts.organizationCustomRoleUpdateRequest 
     * @param {module:api/OrganizationCustomRoleApi~editOrganizationCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationCustomRole}
     */
    editOrganizationCustomRole(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationCustomRoleUpdateRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editOrganizationCustomRole");
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
      let returnType = OrganizationCustomRole;
      return this.apiClient.callApi(
        '/organization/{organizationId}/customRole/{customRoleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationCustomRole operation.
     * @callback module:api/OrganizationCustomRoleApi~getOrganizationCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationCustomRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization custom role 
     * Get an organization custom role 
     * @param {String} organizationId Organization ID
     * @param {String} customRoleId Custom Role ID
     * @param {module:api/OrganizationCustomRoleApi~getOrganizationCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationCustomRole}
     */
    getOrganizationCustomRole(organizationId, customRoleId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationCustomRole");
      }
      // verify the required parameter 'customRoleId' is set
      if (customRoleId === undefined || customRoleId === null) {
        throw new Error("Missing the required parameter 'customRoleId' when calling getOrganizationCustomRole");
      }

      let pathParams = {
        'organizationId': organizationId,
        'customRoleId': customRoleId
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
      let returnType = OrganizationCustomRole;
      return this.apiClient.callApi(
        '/organization/{organizationId}/customRole/{customRoleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationCustomRoles operation.
     * @callback module:api/OrganizationCustomRoleApi~listOrganizationCustomRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationCustomRoleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization custom roles
     * List organization custom roles
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationCustomRoleApi~listOrganizationCustomRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationCustomRoleList}
     */
    listOrganizationCustomRoles(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationCustomRoles");
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
      let returnType = OrganizationCustomRoleList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/customRole', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
