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
import DatabaseCurrentMetricResponse from '../model/DatabaseCurrentMetricResponse';
import MetricCPUDatapointResponseList from '../model/MetricCPUDatapointResponseList';
import MetricGenericResponseList from '../model/MetricGenericResponseList';
import MetricMemoryDatapointResponseList from '../model/MetricMemoryDatapointResponseList';
import MetricRestartResponse from '../model/MetricRestartResponse';
import MetricStorageDatapointResponseList from '../model/MetricStorageDatapointResponseList';

/**
* DatabaseMetrics service.
* @module api/DatabaseMetricsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class DatabaseMetricsApi {

    /**
    * Constructs a new DatabaseMetricsApi. 
    * @alias module:api/DatabaseMetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getDatabaseCurrentMetric operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseCurrentMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatabaseCurrentMetricResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current metric consumption of the database 
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseMetricsApi~getDatabaseCurrentMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatabaseCurrentMetricResponse}
     */
    getDatabaseCurrentMetric(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseCurrentMetric");
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
      let returnType = DatabaseCurrentMetricResponse;
      return this.apiClient.callApi(
        '/database/{databaseId}/currentMetric', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMetricCpu operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseMetricCpuCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricCPUDatapointResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get CPU consumption metric over time for the database
     * @param {String} databaseId Database ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/DatabaseMetricsApi~getDatabaseMetricCpuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricCPUDatapointResponseList}
     */
    getDatabaseMetricCpu(databaseId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMetricCpu");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getDatabaseMetricCpu");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'lastSeconds': lastSeconds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricCPUDatapointResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/metric/cpu', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMetricHealthCheck operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseMetricHealthCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricGenericResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Health Check latency  metric over time for the database
     * The value returned corresponds to the 95th centile
     * @param {String} databaseId Database ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/DatabaseMetricsApi~getDatabaseMetricHealthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricGenericResponseList}
     */
    getDatabaseMetricHealthCheck(databaseId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMetricHealthCheck");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getDatabaseMetricHealthCheck");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'lastSeconds': lastSeconds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricGenericResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/metric/healthCheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMetricMemory operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseMetricMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricMemoryDatapointResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Memory consumption metric over time for the database
     * @param {String} databaseId Database ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/DatabaseMetricsApi~getDatabaseMetricMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricMemoryDatapointResponseList}
     */
    getDatabaseMetricMemory(databaseId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMetricMemory");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getDatabaseMetricMemory");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'lastSeconds': lastSeconds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricMemoryDatapointResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/metric/memory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMetricRestart operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseMetricRestartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricRestartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List database restarts
     * Get database restart message and timestamp.
     * @param {String} databaseId Database ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/DatabaseMetricsApi~getDatabaseMetricRestartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricRestartResponse}
     */
    getDatabaseMetricRestart(databaseId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMetricRestart");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getDatabaseMetricRestart");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'lastSeconds': lastSeconds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricRestartResponse;
      return this.apiClient.callApi(
        '/database/{databaseId}/metric/restart', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatabaseMetricStorage operation.
     * @callback module:api/DatabaseMetricsApi~getDatabaseMetricStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricStorageDatapointResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Storage consumption metric over time for the database
     * @param {String} databaseId Database ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/DatabaseMetricsApi~getDatabaseMetricStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricStorageDatapointResponseList}
     */
    getDatabaseMetricStorage(databaseId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling getDatabaseMetricStorage");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getDatabaseMetricStorage");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'lastSeconds': lastSeconds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricStorageDatapointResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/metric/storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
