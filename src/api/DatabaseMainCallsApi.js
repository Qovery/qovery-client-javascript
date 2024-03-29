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
import Credentials from '../model/Credentials';
import CredentialsRequest from '../model/CredentialsRequest';
import Database from '../model/Database';
import DatabaseEditRequest from '../model/DatabaseEditRequest';
import Status from '../model/Status';
import VersionResponseList from '../model/VersionResponseList';

/**
* DatabaseMainCalls service.
* @module api/DatabaseMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class DatabaseMainCallsApi {

    /**
    * Constructs a new DatabaseMainCallsApi. 
    * @alias module:api/DatabaseMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteDatabase operation.
     * @callback module:api/DatabaseMainCallsApi~deleteDatabaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a database 
     * To delete a database you must have the admin permission
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMainCallsApi~deleteDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDatabase(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling deleteDatabase");
      }

      let pathParams = {
        'databaseId': databaseId
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
        '/database/{databaseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editDatabase operation.
     * @callback module:api/DatabaseMainCallsApi~editDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Database} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a database 
     * To edit a database  you must have the admin permission
     * @param {String} databaseId Database ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DatabaseEditRequest} opts.databaseEditRequest 
     * @param {module:api/DatabaseMainCallsApi~editDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Database}
     */
    editDatabase(databaseId, opts, callback) {
      opts = opts || {};
      let postBody = opts['databaseEditRequest'];
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling editDatabase");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = Database;
      return this.apiClient.callApi(
        '/database/{databaseId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editDatabaseCredentials operation.
     * @callback module:api/DatabaseMainCallsApi~editDatabaseCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit database  master credentials
     * @param {String} databaseId Database ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsRequest} opts.credentialsRequest 
     * @param {module:api/DatabaseMainCallsApi~editDatabaseCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credentials}
     */
    editDatabaseCredentials(databaseId, opts, callback) {
      opts = opts || {};
      let postBody = opts['credentialsRequest'];
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling editDatabaseCredentials");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = Credentials;
      return this.apiClient.callApi(
        '/database/{databaseId}/masterCredentials', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabase operation.
     * @callback module:api/DatabaseMainCallsApi~getDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Database} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get database by ID
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMainCallsApi~getDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Database}
     */
    getDatabase(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabase");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = Database;
      return this.apiClient.callApi(
        '/database/{databaseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMasterCredentials operation.
     * @callback module:api/DatabaseMainCallsApi~getDatabaseMasterCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get master credentials of the database
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMainCallsApi~getDatabaseMasterCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credentials}
     */
    getDatabaseMasterCredentials(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMasterCredentials");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = Credentials;
      return this.apiClient.callApi(
        '/database/{databaseId}/masterCredentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseStatus operation.
     * @callback module:api/DatabaseMainCallsApi~getDatabaseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get database status
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMainCallsApi~getDatabaseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    getDatabaseStatus(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseStatus");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/database/{databaseId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDatabaseVersion operation.
     * @callback module:api/DatabaseMainCallsApi~listDatabaseVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List eligible versions for the database
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMainCallsApi~listDatabaseVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionResponseList}
     */
    listDatabaseVersion(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling listDatabaseVersion");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = VersionResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
