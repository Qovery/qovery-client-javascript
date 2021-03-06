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
import ContainerCurrentScale from '../model/ContainerCurrentScale';
import InstanceResponseList from '../model/InstanceResponseList';
import MetricCPUResponseList from '../model/MetricCPUResponseList';
import MetricGenericResponseList from '../model/MetricGenericResponseList';
import MetricMemoryResponseList from '../model/MetricMemoryResponseList';
import MetricRestart from '../model/MetricRestart';
import MetricStorageResponseList from '../model/MetricStorageResponseList';
import StorageDiskResponseList from '../model/StorageDiskResponseList';

/**
* ContainerMetrics service.
* @module api/ContainerMetricsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerMetricsApi {

    /**
    * Constructs a new ContainerMetricsApi. 
    * @alias module:api/ContainerMetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getContainerCurrentInstance operation.
     * @callback module:api/ContainerMetricsApi~getContainerCurrentInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstanceResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List currently running instances of the container with their CPU and RAM metrics
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMetricsApi~getContainerCurrentInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstanceResponseList}
     */
    getContainerCurrentInstance(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerCurrentInstance");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerCurrentScale operation.
     * @callback module:api/ContainerMetricsApi~getContainerCurrentScaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerCurrentScale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Get current scaling of the container
     * Returns min, max, and running number of instances of the application
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMetricsApi~getContainerCurrentScaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerCurrentScale}
     */
    getContainerCurrentScale(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerCurrentScale");
      }

      let pathParams = {
        'containerId': containerId
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
      let returnType = ContainerCurrentScale;
      return this.apiClient.callApi(
        '/container/{containerId}/currentScale', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerCurrentStorageDisk operation.
     * @callback module:api/ContainerMetricsApi~getContainerCurrentStorageDiskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageDiskResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List current storage disk usage
     * @param {String} containerId Container ID
     * @param {module:api/ContainerMetricsApi~getContainerCurrentStorageDiskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageDiskResponseList}
     */
    getContainerCurrentStorageDisk(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerCurrentStorageDisk");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/currentStorage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerMetricCpu operation.
     * @callback module:api/ContainerMetricsApi~getContainerMetricCpuCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricCPUResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Get CPU consumption metric over time for the container
     * @param {String} containerId Container ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ContainerMetricsApi~getContainerMetricCpuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricCPUResponseList}
     */
    getContainerMetricCpu(containerId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerMetricCpu");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getContainerMetricCpu");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/metric/cpu', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerMetricHealthCheck operation.
     * @callback module:api/ContainerMetricsApi~getContainerMetricHealthCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricGenericResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Get Health Check latency  metric over time for the container
     * The value returned corresponds to the 95th centile
     * @param {String} containerId Container ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ContainerMetricsApi~getContainerMetricHealthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricGenericResponseList}
     */
    getContainerMetricHealthCheck(containerId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerMetricHealthCheck");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getContainerMetricHealthCheck");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/metric/healthCheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerMetricMemory operation.
     * @callback module:api/ContainerMetricsApi~getContainerMetricMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricMemoryResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Get Memory consumption metric over time for the container
     * @param {String} containerId Container ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ContainerMetricsApi~getContainerMetricMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricMemoryResponseList}
     */
    getContainerMetricMemory(containerId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerMetricMemory");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getContainerMetricMemory");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/metric/memory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerMetricRestart operation.
     * @callback module:api/ContainerMetricsApi~getContainerMetricRestartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricRestart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List container restarts
     * Get container restart message and timestamp.
     * @param {String} containerId Container ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ContainerMetricsApi~getContainerMetricRestartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricRestart}
     */
    getContainerMetricRestart(containerId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerMetricRestart");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getContainerMetricRestart");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/metric/restart', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerMetricStorage operation.
     * @callback module:api/ContainerMetricsApi~getContainerMetricStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricStorageResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Get Storage consumption metric over time for the container 
     * @param {String} containerId Container ID
     * @param {Number} lastSeconds Up to how many seconds in the past to ask analytics results
     * @param {module:api/ContainerMetricsApi~getContainerMetricStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricStorageResponseList}
     */
    getContainerMetricStorage(containerId, lastSeconds, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerMetricStorage");
      }
      // verify the required parameter 'lastSeconds' is set
      if (lastSeconds === undefined || lastSeconds === null) {
        throw new Error("Missing the required parameter 'lastSeconds' when calling getContainerMetricStorage");
      }

      let pathParams = {
        'containerId': containerId
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
        '/container/{containerId}/metric/storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
