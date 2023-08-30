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
import CloudProviderResponseList from '../model/CloudProviderResponseList';
import ClusterFeatureResponseList from '../model/ClusterFeatureResponseList';
import ClusterInstanceTypeResponseList from '../model/ClusterInstanceTypeResponseList';
import ClusterRegionResponseList from '../model/ClusterRegionResponseList';
import ManagedDatabaseInstanceTypeResponseList from '../model/ManagedDatabaseInstanceTypeResponseList';
import ManagedDatabaseTypeResponseList from '../model/ManagedDatabaseTypeResponseList';

/**
* CloudProvider service.
* @module api/CloudProviderApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class CloudProviderApi {

    /**
    * Constructs a new CloudProviderApi. 
    * @alias module:api/CloudProviderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listAWSEKSInstanceType operation.
     * @callback module:api/CloudProviderApi~listAWSEKSInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS EKS available instance types
     * @param {String} region region name
     * @param {module:api/CloudProviderApi~listAWSEKSInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listAWSEKSInstanceType(region, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling listAWSEKSInstanceType");
      }

      let pathParams = {
        'region': region
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/aws/eks/instanceType/{region}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSEc2InstanceType operation.
     * @callback module:api/CloudProviderApi~listAWSEc2InstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS EC2 available instance types
     * @param {String} region region name
     * @param {module:api/CloudProviderApi~listAWSEc2InstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listAWSEc2InstanceType(region, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling listAWSEc2InstanceType");
      }

      let pathParams = {
        'region': region
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/aws/ec2/instanceType/{region}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSFeatures operation.
     * @callback module:api/CloudProviderApi~listAWSFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterFeatureResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS features available
     * @param {module:api/CloudProviderApi~listAWSFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterFeatureResponseList}
     */
    listAWSFeatures(callback) {
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
      let returnType = ClusterFeatureResponseList;
      return this.apiClient.callApi(
        '/aws/clusterFeature', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSInstanceType operation.
     * @callback module:api/CloudProviderApi~listAWSInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS available instance types
     * @param {module:api/CloudProviderApi~listAWSInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listAWSInstanceType(callback) {
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/aws/instanceType', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSManagedDatabaseInstanceType operation.
     * @callback module:api/CloudProviderApi~listAWSManagedDatabaseInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS available managed database instance types
     * @param {String} region region name
     * @param {String} databaseType Database type
     * @param {module:api/CloudProviderApi~listAWSManagedDatabaseInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseInstanceTypeResponseList}
     */
    listAWSManagedDatabaseInstanceType(region, databaseType, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling listAWSManagedDatabaseInstanceType");
      }
      // verify the required parameter 'databaseType' is set
      if (databaseType === undefined || databaseType === null) {
        throw new Error("Missing the required parameter 'databaseType' when calling listAWSManagedDatabaseInstanceType");
      }

      let pathParams = {
        'region': region,
        'databaseType': databaseType
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
      let returnType = ManagedDatabaseInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/aws/managedDatabase/instanceType/{region}/{databaseType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSManagedDatabaseType operation.
     * @callback module:api/CloudProviderApi~listAWSManagedDatabaseTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS available managed database types
     * @param {module:api/CloudProviderApi~listAWSManagedDatabaseTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseTypeResponseList}
     */
    listAWSManagedDatabaseType(callback) {
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
      let returnType = ManagedDatabaseTypeResponseList;
      return this.apiClient.callApi(
        '/aws/managedDatabase/type', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSRegions operation.
     * @callback module:api/CloudProviderApi~listAWSRegionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterRegionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS regions
     * @param {module:api/CloudProviderApi~listAWSRegionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterRegionResponseList}
     */
    listAWSRegions(callback) {
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
      let returnType = ClusterRegionResponseList;
      return this.apiClient.callApi(
        '/aws/region', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listCloudProvider operation.
     * @callback module:api/CloudProviderApi~listCloudProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudProviderResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Cloud providers available
     * @param {module:api/CloudProviderApi~listCloudProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudProviderResponseList}
     */
    listCloudProvider(callback) {
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
      let returnType = CloudProviderResponseList;
      return this.apiClient.callApi(
        '/cloudProvider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDOFeatures operation.
     * @callback module:api/CloudProviderApi~listDOFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterFeatureResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List DO features available
     * @param {module:api/CloudProviderApi~listDOFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterFeatureResponseList}
     */
    listDOFeatures(callback) {
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
      let returnType = ClusterFeatureResponseList;
      return this.apiClient.callApi(
        '/digitalOcean/clusterFeature', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDOInstanceType operation.
     * @callback module:api/CloudProviderApi~listDOInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List DO available instance types
     * @param {module:api/CloudProviderApi~listDOInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listDOInstanceType(callback) {
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/digitalOcean/instanceType', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDOManagedDatabaseInstanceType operation.
     * @callback module:api/CloudProviderApi~listDOManagedDatabaseInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Digital Ocean available managed database instance types
     * @param {String} region region name
     * @param {String} databaseType Database type
     * @param {module:api/CloudProviderApi~listDOManagedDatabaseInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseInstanceTypeResponseList}
     */
    listDOManagedDatabaseInstanceType(region, databaseType, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling listDOManagedDatabaseInstanceType");
      }
      // verify the required parameter 'databaseType' is set
      if (databaseType === undefined || databaseType === null) {
        throw new Error("Missing the required parameter 'databaseType' when calling listDOManagedDatabaseInstanceType");
      }

      let pathParams = {
        'region': region,
        'databaseType': databaseType
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
      let returnType = ManagedDatabaseInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/digitalOcean/managedDatabase/instanceType/{region}/{databaseType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDOManagedDatabaseType operation.
     * @callback module:api/CloudProviderApi~listDOManagedDatabaseTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Digital Ocean available managed database types
     * @param {module:api/CloudProviderApi~listDOManagedDatabaseTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseTypeResponseList}
     */
    listDOManagedDatabaseType(callback) {
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
      let returnType = ManagedDatabaseTypeResponseList;
      return this.apiClient.callApi(
        '/digitalOcean/managedDatabase/type', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDORegions operation.
     * @callback module:api/CloudProviderApi~listDORegionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterRegionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List DO regions
     * @param {module:api/CloudProviderApi~listDORegionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterRegionResponseList}
     */
    listDORegions(callback) {
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
      let returnType = ClusterRegionResponseList;
      return this.apiClient.callApi(
        '/digitalOcean/region', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSCWManagedDatabaseInstanceType operation.
     * @callback module:api/CloudProviderApi~listSCWManagedDatabaseInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway available managed database instance types
     * @param {String} databaseType Database type
     * @param {module:api/CloudProviderApi~listSCWManagedDatabaseInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseInstanceTypeResponseList}
     */
    listSCWManagedDatabaseInstanceType(databaseType, callback) {
      let postBody = null;
      // verify the required parameter 'databaseType' is set
      if (databaseType === undefined || databaseType === null) {
        throw new Error("Missing the required parameter 'databaseType' when calling listSCWManagedDatabaseInstanceType");
      }

      let pathParams = {
        'databaseType': databaseType
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
      let returnType = ManagedDatabaseInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/scaleway/managedDatabase/instanceType/{zone}/{databaseType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSCWManagedDatabaseType operation.
     * @callback module:api/CloudProviderApi~listSCWManagedDatabaseTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManagedDatabaseTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway available managed database types
     * @param {module:api/CloudProviderApi~listSCWManagedDatabaseTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManagedDatabaseTypeResponseList}
     */
    listSCWManagedDatabaseType(callback) {
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
      let returnType = ManagedDatabaseTypeResponseList;
      return this.apiClient.callApi(
        '/scaleway/managedDatabase/type', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listScalewayFeatures operation.
     * @callback module:api/CloudProviderApi~listScalewayFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterFeatureResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway features available
     * @param {module:api/CloudProviderApi~listScalewayFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterFeatureResponseList}
     */
    listScalewayFeatures(callback) {
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
      let returnType = ClusterFeatureResponseList;
      return this.apiClient.callApi(
        '/scaleway/clusterFeature', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listScalewayInstanceType operation.
     * @callback module:api/CloudProviderApi~listScalewayInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway available instance types
     * @param {module:api/CloudProviderApi~listScalewayInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listScalewayInstanceType(callback) {
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/scaleway/instanceType', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listScalewayKapsuleInstanceType operation.
     * @callback module:api/CloudProviderApi~listScalewayKapsuleInstanceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterInstanceTypeResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway Kapsule available instance types
     * @param {String} zone zone name
     * @param {module:api/CloudProviderApi~listScalewayKapsuleInstanceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterInstanceTypeResponseList}
     */
    listScalewayKapsuleInstanceType(zone, callback) {
      let postBody = null;
      // verify the required parameter 'zone' is set
      if (zone === undefined || zone === null) {
        throw new Error("Missing the required parameter 'zone' when calling listScalewayKapsuleInstanceType");
      }

      let pathParams = {
        'zone': zone
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
      let returnType = ClusterInstanceTypeResponseList;
      return this.apiClient.callApi(
        '/scaleway/instanceType/{zone}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listScalewayRegions operation.
     * @callback module:api/CloudProviderApi~listScalewayRegionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterRegionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway regions
     * @param {module:api/CloudProviderApi~listScalewayRegionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterRegionResponseList}
     */
    listScalewayRegions(callback) {
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
      let returnType = ClusterRegionResponseList;
      return this.apiClient.callApi(
        '/scaleway/region', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
