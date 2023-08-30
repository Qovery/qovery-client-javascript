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
import SignUp from '../model/SignUp';
import SignUpRequest from '../model/SignUpRequest';

/**
* UserSignUp service.
* @module api/UserSignUpApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class UserSignUpApi {

    /**
    * Constructs a new UserSignUpApi. 
    * @alias module:api/UserSignUpApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUserSignUp operation.
     * @callback module:api/UserSignUpApi~createUserSignUpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Sign Up request
     * Send a Sign Up request containing the user information
     * @param {Object} opts Optional parameters
     * @param {module:model/SignUpRequest} opts.signUpRequest 
     * @param {module:api/UserSignUpApi~createUserSignUpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createUserSignUp(opts, callback) {
      opts = opts || {};
      let postBody = opts['signUpRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/admin/userSignUp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserSignUp operation.
     * @callback module:api/UserSignUpApi~getUserSignUpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignUp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sign up information
     * Retrieve the Sign Up information of the user
     * @param {module:api/UserSignUpApi~getUserSignUpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignUp}
     */
    getUserSignUp(callback) {
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
      let returnType = SignUp;
      return this.apiClient.callApi(
        '/admin/userSignUp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
