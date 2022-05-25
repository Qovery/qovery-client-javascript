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
import ApplicationResponseList from '../model/ApplicationResponseList';
import ContainerResponseList from '../model/ContainerResponseList';
import Credentials from '../model/Credentials';
import CredentialsRequest from '../model/CredentialsRequest';
import LogicalDatabase from '../model/LogicalDatabase';
import LogicalDatabaseRequest from '../model/LogicalDatabaseRequest';
import LogicalDatabaseResponseList from '../model/LogicalDatabaseResponseList';

/**
* LogicalDatabase service.
* @module api/LogicalDatabaseApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class LogicalDatabaseApi {

    /**
    * Constructs a new LogicalDatabaseApi. 
    * @alias module:api/LogicalDatabaseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLogicalDatabaseOnDatabase operation.
     * @callback module:api/LogicalDatabaseApi~createLogicalDatabaseOnDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a logical database on the database
     * If you don't specify credentials, Qovery will autogenerate them.
     * @param {String} databaseId Database ID
     * @param {Object} opts Optional parameters
     * @param {module:model/LogicalDatabaseRequest} opts.logicalDatabaseRequest 
     * @param {module:api/LogicalDatabaseApi~createLogicalDatabaseOnDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabase}
     */
    createLogicalDatabaseOnDatabase(databaseId, opts, callback) {
      opts = opts || {};
      let postBody = opts['logicalDatabaseRequest'];
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling createLogicalDatabaseOnDatabase");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LogicalDatabase;
      return this.apiClient.callApi(
        '/database/{databaseId}/logicalDatabase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLogicalDatabase operation.
     * @callback module:api/LogicalDatabaseApi~deleteLogicalDatabaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Logical database
     * To delete a logical database you must have the project user permission
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {module:api/LogicalDatabaseApi~deleteLogicalDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteLogicalDatabase(logicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling deleteLogicalDatabase");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
        '/logicalDatabase/{logicalDatabaseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editLogicalDatabase operation.
     * @callback module:api/LogicalDatabaseApi~editLogicalDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a logical database
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {Object} opts Optional parameters
     * @param {module:model/LogicalDatabaseRequest} opts.logicalDatabaseRequest 
     * @param {module:api/LogicalDatabaseApi~editLogicalDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabase}
     */
    editLogicalDatabase(logicalDatabaseId, opts, callback) {
      opts = opts || {};
      let postBody = opts['logicalDatabaseRequest'];
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling editLogicalDatabase");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = LogicalDatabase;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editLogicalDatabaseCredentials operation.
     * @callback module:api/LogicalDatabaseApi~editLogicalDatabaseCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit logical database credentials
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsRequest} opts.credentialsRequest 
     * @param {module:api/LogicalDatabaseApi~editLogicalDatabaseCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credentials}
     */
    editLogicalDatabaseCredentials(logicalDatabaseId, opts, callback) {
      opts = opts || {};
      let postBody = opts['credentialsRequest'];
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling editLogicalDatabaseCredentials");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = Credentials;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}/credentials', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLogicalDatabase operation.
     * @callback module:api/LogicalDatabaseApi~getLogicalDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get logical database by ID
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {module:api/LogicalDatabaseApi~getLogicalDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabase}
     */
    getLogicalDatabase(logicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling getLogicalDatabase");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = LogicalDatabase;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLogicalDatabaseCredentials operation.
     * @callback module:api/LogicalDatabaseApi~getLogicalDatabaseCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get  credentials of the logical database
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {module:api/LogicalDatabaseApi~getLogicalDatabaseCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credentials}
     */
    getLogicalDatabaseCredentials(logicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling getLogicalDatabaseCredentials");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = Credentials;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listLogicalDatabaseApplication operation.
     * @callback module:api/LogicalDatabaseApi~listLogicalDatabaseApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List linked applications
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {module:api/LogicalDatabaseApi~listLogicalDatabaseApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponseList}
     */
    listLogicalDatabaseApplication(logicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling listLogicalDatabaseApplication");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = ApplicationResponseList;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}/application', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listLogicalDatabaseContainer operation.
     * @callback module:api/LogicalDatabaseApi~listLogicalDatabaseContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List linked containers
     * @param {String} logicalDatabaseId Logical Database ID
     * @param {module:api/LogicalDatabaseApi~listLogicalDatabaseContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerResponseList}
     */
    listLogicalDatabaseContainer(logicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'logicalDatabaseId' is set
      if (logicalDatabaseId === undefined || logicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'logicalDatabaseId' when calling listLogicalDatabaseContainer");
      }

      let pathParams = {
        'logicalDatabaseId': logicalDatabaseId
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
      let returnType = ContainerResponseList;
      return this.apiClient.callApi(
        '/logicalDatabase/{logicalDatabaseId}/container', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listLogicalDatabaseDatabase operation.
     * @callback module:api/LogicalDatabaseApi~listLogicalDatabaseDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabaseResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List logical databases of a database
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * @param {String} databaseId Database ID
     * @param {module:api/LogicalDatabaseApi~listLogicalDatabaseDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabaseResponseList}
     */
    listLogicalDatabaseDatabase(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling listLogicalDatabaseDatabase");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LogicalDatabaseResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/logicalDatabase', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
