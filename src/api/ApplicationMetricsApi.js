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
import ApplicationCurrentScale from '../model/ApplicationCurrentScale';
import InstanceResponseList from '../model/InstanceResponseList';
import MetricCPUResponseList from '../model/MetricCPUResponseList';
import MetricGenericResponseList from '../model/MetricGenericResponseList';
import MetricMemoryResponseList from '../model/MetricMemoryResponseList';
import MetricRestart from '../model/MetricRestart';
import MetricStorageResponseList from '../model/MetricStorageResponseList';
import StorageDiskResponseList from '../model/StorageDiskResponseList';

/**
* ApplicationMetrics service.
* @module api/ApplicationMetricsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ApplicationMetricsApi {

    /**
    * Constructs a new ApplicationMetricsApi. 
    * @alias module:api/ApplicationMetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getApplicationCurrentInstance operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationCurrentInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstanceResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List currently running instances of the application with their CPU and RAM metrics
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMetricsApi~getApplicationCurrentInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstanceResponseList}
     */
    getApplicationCurrentInstance(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationCurrentInstance");
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
      let returnType = InstanceResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationCurrentScale operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationCurrentScaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCurrentScale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current scaling of the application
     * Returns min, max, and running number of instances of the application
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMetricsApi~getApplicationCurrentScaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCurrentScale}
     */
    getApplicationCurrentScale(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationCurrentScale");
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
      let returnType = ApplicationCurrentScale;
      return this.apiClient.callApi(
        '/application/{applicationId}/currentScale', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationCurrentStorageDisk operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationCurrentStorageDiskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageDiskResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current storage disk usage
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationMetricsApi~getApplicationCurrentStorageDiskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageDiskResponseList}
     */
    getApplicationCurrentStorageDisk(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationCurrentStorageDisk");
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
      let returnType = StorageDiskResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/currentStorage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationMetricCpu operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationMetricCpuCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricCPUResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get CPU consumption metric over time for the application
     * @param {String} applicationId Application ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ApplicationMetricsApi~getApplicationMetricCpuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricCPUResponseList}
     */
    getApplicationMetricCpu(applicationId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationMetricCpu");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getApplicationMetricCpu");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = MetricCPUResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/metric/cpu', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationMetricHealthCheck operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationMetricHealthCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricGenericResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Health Check latency  metric over time for the application
     * The value returned corresponds to the 95th centile
     * @param {String} applicationId Application ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ApplicationMetricsApi~getApplicationMetricHealthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricGenericResponseList}
     */
    getApplicationMetricHealthCheck(applicationId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationMetricHealthCheck");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getApplicationMetricHealthCheck");
      }

      let pathParams = {
        'applicationId': applicationId
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
        '/application/{applicationId}/metric/healthCheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationMetricMemory operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationMetricMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricMemoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Memory consumption metric over time for the application
     * @param {String} applicationId Application ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ApplicationMetricsApi~getApplicationMetricMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricMemoryResponseList}
     */
    getApplicationMetricMemory(applicationId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationMetricMemory");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getApplicationMetricMemory");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = MetricMemoryResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/metric/memory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationMetricRestart operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationMetricRestartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricRestart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List application restarts
     * Get application restart message and timestamp.
     * @param {String} applicationId Application ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ApplicationMetricsApi~getApplicationMetricRestartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricRestart}
     */
    getApplicationMetricRestart(applicationId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationMetricRestart");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getApplicationMetricRestart");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = MetricRestart;
      return this.apiClient.callApi(
        '/application/{applicationId}/metric/restart', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationMetricStorage operation.
     * @callback module:api/ApplicationMetricsApi~getApplicationMetricStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricStorageResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Storage consumption metric over time for the application
     * @param {String} applicationId Application ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ApplicationMetricsApi~getApplicationMetricStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricStorageResponseList}
     */
    getApplicationMetricStorage(applicationId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationMetricStorage");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getApplicationMetricStorage");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = MetricStorageResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/metric/storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
