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
import ReferralResponse from '../model/ReferralResponse';
import RewardClaimResponse from '../model/RewardClaimResponse';

/**
* ReferralRewards service.
* @module api/ReferralRewardsApi
* @version 1.0.3
*/
export default class ReferralRewardsApi {

    /**
    * Constructs a new ReferralRewardsApi. 
    * @alias module:api/ReferralRewardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAccountReferral operation.
     * @callback module:api/ReferralRewardsApi~getAccountReferralCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferralResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your referral information
     * @param {module:api/ReferralRewardsApi~getAccountReferralCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferralResponse}
     */
    getAccountReferral(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = ReferralResponse;
      return this.apiClient.callApi(
        '/account/referral', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAccountRewardClaim operation.
     * @callback module:api/ReferralRewardsApi~postAccountRewardClaimCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Claim a reward
     * A same code can be claimed only 3 times at max
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardClaimResponse} opts.rewardClaimResponse 
     * @param {module:api/ReferralRewardsApi~postAccountRewardClaimCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postAccountRewardClaim(opts, callback) {
      opts = opts || {};
      let postBody = opts['rewardClaimResponse'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/account/rewardClaim', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
