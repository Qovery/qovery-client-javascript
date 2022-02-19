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
import DatabaseConfigurationResponseList from '../model/DatabaseConfigurationResponseList';
import DatabaseRequest from '../model/DatabaseRequest';
import DatabaseResponse from '../model/DatabaseResponse';
import DatabaseResponseList from '../model/DatabaseResponseList';
import EnvironmentDatabasesCurrentMetricResponseList from '../model/EnvironmentDatabasesCurrentMetricResponseList';
import ReferenceObjectStatusResponseList from '../model/ReferenceObjectStatusResponseList';

/**
* Databases service.
* @module api/DatabasesApi
* @version 1.0.2
*/
export default class DatabasesApi {

    /**
    * Constructs a new DatabasesApi. 
    * @alias module:api/DatabasesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDatabase operation.
     * @callback module:api/DatabasesApi~createDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatabaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a database
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DatabaseRequest} opts.databaseRequest 
     * @param {module:api/DatabasesApi~createDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatabaseResponse}
     */
    createDatabase(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['databaseRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createDatabase");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = DatabaseResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/database', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentDatabaseStatus operation.
     * @callback module:api/DatabasesApi~getEnvironmentDatabaseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferenceObjectStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all environment databases statuses
     * Returns a list of databases with only their id and status.
     * @param {String} environmentId Environment ID
     * @param {module:api/DatabasesApi~getEnvironmentDatabaseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferenceObjectStatusResponseList}
     */
    getEnvironmentDatabaseStatus(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentDatabaseStatus");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = ReferenceObjectStatusResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/database/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDatabase operation.
     * @callback module:api/DatabasesApi~listDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatabaseResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment databases
     * @param {String} environmentId Environment ID
     * @param {module:api/DatabasesApi~listDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatabaseResponseList}
     */
    listDatabase(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listDatabase");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = DatabaseResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/database', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentDatabaseConfig operation.
     * @callback module:api/DatabasesApi~listEnvironmentDatabaseConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatabaseConfigurationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List eligible database types, versions and modes for the environment
     * @param {String} environmentId Environment ID
     * @param {module:api/DatabasesApi~listEnvironmentDatabaseConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatabaseConfigurationResponseList}
     */
    listEnvironmentDatabaseConfig(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentDatabaseConfig");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = DatabaseConfigurationResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/databaseConfiguration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEnvironmentDatabaseCurrentMetric operation.
     * @callback module:api/DatabasesApi~listEnvironmentDatabaseCurrentMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentDatabasesCurrentMetricResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current metric consumption for each database
     * @param {String} environmentId Environment ID
     * @param {module:api/DatabasesApi~listEnvironmentDatabaseCurrentMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentDatabasesCurrentMetricResponseList}
     */
    listEnvironmentDatabaseCurrentMetric(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentDatabaseCurrentMetric");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = EnvironmentDatabasesCurrentMetricResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/database/currentMetric', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
