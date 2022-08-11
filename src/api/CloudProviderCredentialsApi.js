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
import AwsCredentialsRequest from '../model/AwsCredentialsRequest';
import ClusterCredentials from '../model/ClusterCredentials';
import ClusterCredentialsResponseList from '../model/ClusterCredentialsResponseList';
import DoCredentialsRequest from '../model/DoCredentialsRequest';
import ScalewayCredentialsRequest from '../model/ScalewayCredentialsRequest';

/**
* CloudProviderCredentials service.
* @module api/CloudProviderCredentialsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class CloudProviderCredentialsApi {

    /**
    * Constructs a new CloudProviderCredentialsApi. 
    * @alias module:api/CloudProviderCredentialsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAWSCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~createAWSCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create AWS credentials set
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/AwsCredentialsRequest} opts.awsCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~createAWSCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    createAWSCredentials(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['awsCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createAWSCredentials");
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/aws/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDOCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~createDOCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Digital Ocean credentials set
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DoCredentialsRequest} opts.doCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~createDOCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    createDOCredentials(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['doCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createDOCredentials");
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/digitalOcean/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createScalewayCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~createScalewayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Scaleway credentials set
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ScalewayCredentialsRequest} opts.scalewayCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~createScalewayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    createScalewayCredentials(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['scalewayCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createScalewayCredentials");
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/scaleway/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAWSCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~deleteAWSCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a set of AWS credentials
     * @param {String} credentialsId Credentials ID
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~deleteAWSCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAWSCredentials(credentialsId, organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling deleteAWSCredentials");
      }
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteAWSCredentials");
      }

      let pathParams = {
        'credentialsId': credentialsId,
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
        '/organization/{organizationId}/aws/credentials/{credentialsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDOCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~deleteDOCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a set of Digital Ocean credentials
     * @param {String} credentialsId Credentials ID
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~deleteDOCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDOCredentials(credentialsId, organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling deleteDOCredentials");
      }
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteDOCredentials");
      }

      let pathParams = {
        'credentialsId': credentialsId,
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
        '/organization/{organizationId}/digitalOcean/credentials/{credentialsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScalewayCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~deleteScalewayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a set of Scaleway credentials
     * @param {String} credentialsId Credentials ID
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~deleteScalewayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteScalewayCredentials(credentialsId, organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling deleteScalewayCredentials");
      }
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteScalewayCredentials");
      }

      let pathParams = {
        'credentialsId': credentialsId,
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
        '/organization/{organizationId}/scaleway/credentials/{credentialsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editAWSCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~editAWSCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a set of AWS credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {Object} opts Optional parameters
     * @param {module:model/AwsCredentialsRequest} opts.awsCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~editAWSCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    editAWSCredentials(organizationId, credentialsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['awsCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editAWSCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling editAWSCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/aws/credentials/{credentialsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editDOCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~editDOCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a set of Digital Ocean credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DoCredentialsRequest} opts.doCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~editDOCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    editDOCredentials(organizationId, credentialsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['doCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editDOCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling editDOCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/digitalOcean/credentials/{credentialsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editScalewayCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~editScalewayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a set of Scaleway credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ScalewayCredentialsRequest} opts.scalewayCredentialsRequest 
     * @param {module:api/CloudProviderCredentialsApi~editScalewayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    editScalewayCredentials(organizationId, credentialsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['scalewayCredentialsRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editScalewayCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling editScalewayCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/scaleway/credentials/{credentialsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAWSCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~getAWSCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a set of AWS credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {module:api/CloudProviderCredentialsApi~getAWSCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    getAWSCredentials(organizationId, credentialsId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAWSCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling getAWSCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/aws/credentials/{credentialsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDOCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~getDOCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a set of Digital Ocean credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {module:api/CloudProviderCredentialsApi~getDOCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    getDOCredentials(organizationId, credentialsId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getDOCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling getDOCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/digitalOcean/credentials/{credentialsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getScalewayCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~getScalewayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a set of Scaleway credentials
     * @param {String} organizationId Organization ID
     * @param {String} credentialsId Credentials ID
     * @param {module:api/CloudProviderCredentialsApi~getScalewayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentials}
     */
    getScalewayCredentials(organizationId, credentialsId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScalewayCredentials");
      }
      // verify the required parameter 'credentialsId' is set
      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling getScalewayCredentials");
      }

      let pathParams = {
        'organizationId': organizationId,
        'credentialsId': credentialsId
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
      let returnType = ClusterCredentials;
      return this.apiClient.callApi(
        '/organization/{organizationId}/scaleway/credentials/{credentialsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAWSCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~listAWSCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentialsResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AWS credentials
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~listAWSCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentialsResponseList}
     */
    listAWSCredentials(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listAWSCredentials");
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
      let returnType = ClusterCredentialsResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/aws/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDOCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~listDOCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentialsResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List DO credentials
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~listDOCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentialsResponseList}
     */
    listDOCredentials(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listDOCredentials");
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
      let returnType = ClusterCredentialsResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/digitalOcean/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listScalewayCredentials operation.
     * @callback module:api/CloudProviderCredentialsApi~listScalewayCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterCredentialsResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Scaleway credentials
     * @param {String} organizationId Organization ID
     * @param {module:api/CloudProviderCredentialsApi~listScalewayCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterCredentialsResponseList}
     */
    listScalewayCredentials(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listScalewayCredentials");
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
      let returnType = ClusterCredentialsResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/scaleway/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
