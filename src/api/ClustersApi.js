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
import ClusterCloudProviderInfoRequest from '../model/ClusterCloudProviderInfoRequest';
import ClusterCloudProviderInfoResponse from '../model/ClusterCloudProviderInfoResponse';
import ClusterReadinessStatus from '../model/ClusterReadinessStatus';
import ClusterRequest from '../model/ClusterRequest';
import ClusterResponse from '../model/ClusterResponse';
import ClusterResponseList from '../model/ClusterResponseList';
import ClusterRoutingTableRequest from '../model/ClusterRoutingTableRequest';
import ClusterRoutingTableResponse from '../model/ClusterRoutingTableResponse';
import ClusterStatusResponse from '../model/ClusterStatusResponse';
import ClusterStatusResponseList from '../model/ClusterStatusResponseList';

/**
* Clusters service.
* @module api/ClustersApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ClustersApi {

    /**
    * Constructs a new ClustersApi. 
    * @alias module:api/ClustersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCluster operation.
     * @callback module:api/ClustersApi~createClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cluster
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ClusterRequest} opts.clusterRequest 
     * @param {module:api/ClustersApi~createClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterResponse}
     */
    createCluster(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['clusterRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createCluster");
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
      let returnType = ClusterResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCluster operation.
     * @callback module:api/ClustersApi~deleteClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cluster
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~deleteClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCluster(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteCluster");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteCluster");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
        '/organization/{organizationId}/cluster/{clusterId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deployCluster operation.
     * @callback module:api/ClustersApi~deployClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy a cluster
     * allows to deploy a cluster
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~deployClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterStatusResponse}
     */
    deployCluster(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deployCluster");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deployCluster");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterStatusResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editCluster operation.
     * @callback module:api/ClustersApi~editClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a cluster
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ClusterRequest} opts.clusterRequest 
     * @param {module:api/ClustersApi~editClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterResponse}
     */
    editCluster(organizationId, clusterId, opts, callback) {
      opts = opts || {};
      let postBody = opts['clusterRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editCluster");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling editCluster");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editRoutingTable operation.
     * @callback module:api/ClustersApi~editRoutingTableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterRoutingTableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit routing table
     * Edit routing table by returning updated table.
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ClusterRoutingTableRequest} opts.clusterRoutingTableRequest 
     * @param {module:api/ClustersApi~editRoutingTableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterRoutingTableResponse}
     */
    editRoutingTable(organizationId, clusterId, opts, callback) {
      opts = opts || {};
      let postBody = opts['clusterRoutingTableRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editRoutingTable");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling editRoutingTable");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterRoutingTableResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/routingTable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterReadinessStatus operation.
     * @callback module:api/ClustersApi~getClusterReadinessStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterReadinessStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Know if a cluster is ready to be deployed or not
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~getClusterReadinessStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterReadinessStatus}
     */
    getClusterReadinessStatus(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getClusterReadinessStatus");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterReadinessStatus");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterReadinessStatus;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/isReady', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterStatus operation.
     * @callback module:api/ClustersApi~getClusterStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster status
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~getClusterStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterStatusResponse}
     */
    getClusterStatus(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getClusterStatus");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterStatus");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterStatusResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationCloudProviderInfo operation.
     * @callback module:api/ClustersApi~getOrganizationCloudProviderInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCloudProviderInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster cloud provider info and credentials
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~getOrganizationCloudProviderInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCloudProviderInfoResponse}
     */
    getOrganizationCloudProviderInfo(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationCloudProviderInfo");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getOrganizationCloudProviderInfo");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterCloudProviderInfoResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationClusterStatus operation.
     * @callback module:api/ClustersApi~getOrganizationClusterStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all clusters statuses
     * Returns a list of clusters with only their id and status.
     * @param {String} organizationId Organization ID
     * @param {module:api/ClustersApi~getOrganizationClusterStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterStatusResponseList}
     */
    getOrganizationClusterStatus(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationClusterStatus");
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
      let returnType = ClusterStatusResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoutingTable operation.
     * @callback module:api/ClustersApi~getRoutingTableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterRoutingTableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get routing table
     * Retrieve network routing table where each line corresponds to a route between a destination and a target.
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~getRoutingTableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterRoutingTableResponse}
     */
    getRoutingTable(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getRoutingTable");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getRoutingTable");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterRoutingTableResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/routingTable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationCluster operation.
     * @callback module:api/ClustersApi~listOrganizationClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization clusters
     * @param {String} organizationId Organization ID
     * @param {module:api/ClustersApi~listOrganizationClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterResponseList}
     */
    listOrganizationCluster(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationCluster");
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
      let returnType = ClusterResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the specifyClusterCloudProviderInfo operation.
     * @callback module:api/ClustersApi~specifyClusterCloudProviderInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCloudProviderInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Specify cluster cloud provider info and credentials
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ClusterCloudProviderInfoRequest} opts.clusterCloudProviderInfoRequest 
     * @param {module:api/ClustersApi~specifyClusterCloudProviderInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCloudProviderInfoResponse}
     */
    specifyClusterCloudProviderInfo(organizationId, clusterId, opts, callback) {
      opts = opts || {};
      let postBody = opts['clusterCloudProviderInfoRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling specifyClusterCloudProviderInfo");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling specifyClusterCloudProviderInfo");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterCloudProviderInfoResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopCluster operation.
     * @callback module:api/ClustersApi~stopClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop cluster
     * Cluster stop has been requester.
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~stopClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterStatusResponse}
     */
    stopCluster(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling stopCluster");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling stopCluster");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterStatusResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCluster operation.
     * @callback module:api/ClustersApi~updateClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cluster Version
     * allows to update cluster version
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/ClustersApi~updateClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterStatusResponse}
     */
    updateCluster(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateCluster");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling updateCluster");
      }

      let pathParams = {
        'organizationId': organizationId,
        'clusterId': clusterId
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
      let returnType = ClusterStatusResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
