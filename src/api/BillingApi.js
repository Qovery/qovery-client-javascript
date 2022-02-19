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
import BillingInfoRequest from '../model/BillingInfoRequest';
import BillingInfoResponse from '../model/BillingInfoResponse';
import BillingStatus from '../model/BillingStatus';
import CostRangeResponse from '../model/CostRangeResponse';
import CreditCardRequest from '../model/CreditCardRequest';
import CreditCardResponse from '../model/CreditCardResponse';
import CreditCardResponseList from '../model/CreditCardResponseList';
import InvoiceResponse from '../model/InvoiceResponse';
import InvoiceResponseList from '../model/InvoiceResponseList';
import LinkResponse from '../model/LinkResponse';
import OrganizationCreditCodeRequest from '../model/OrganizationCreditCodeRequest';
import OrganizationCurrentCostResponse from '../model/OrganizationCurrentCostResponse';

/**
* Billing service.
* @module api/BillingApi
* @version 1.0.2
*/
export default class BillingApi {

    /**
    * Constructs a new BillingApi. 
    * @alias module:api/BillingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addCreditCard operation.
     * @callback module:api/BillingApi~addCreditCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreditCardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add credit card
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreditCardRequest} opts.creditCardRequest 
     * @param {module:api/BillingApi~addCreditCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreditCardResponse}
     */
    addCreditCard(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['creditCardRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addCreditCard");
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
      let returnType = CreditCardResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/creditCard', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addCreditCode operation.
     * @callback module:api/BillingApi~addCreditCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add credit code
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationCreditCodeRequest} opts.organizationCreditCodeRequest 
     * @param {module:api/BillingApi~addCreditCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addCreditCode(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationCreditCodeRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addCreditCode");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/creditCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCreditCard operation.
     * @callback module:api/BillingApi~deleteCreditCardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete credit card
     * @param {String} organizationId Organization ID
     * @param {String} creditCardId Credit Card ID
     * @param {module:api/BillingApi~deleteCreditCardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCreditCard(organizationId, creditCardId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteCreditCard");
      }
      // verify the required parameter 'creditCardId' is set
      if (creditCardId === undefined || creditCardId === null) {
        throw new Error("Missing the required parameter 'creditCardId' when calling deleteCreditCard");
      }

      let pathParams = {
        'organizationId': organizationId,
        'creditCardId': creditCardId
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
        '/organization/{organizationId}/creditCard/{creditCardId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editOrganizationBillingInfo operation.
     * @callback module:api/BillingApi~editOrganizationBillingInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Organization Billing Info
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/BillingInfoRequest} opts.billingInfoRequest 
     * @param {module:api/BillingApi~editOrganizationBillingInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingInfoResponse}
     */
    editOrganizationBillingInfo(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['billingInfoRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editOrganizationBillingInfo");
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
      let returnType = BillingInfoResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/billingInfo', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClusterCurrentCost operation.
     * @callback module:api/BillingApi~getClusterCurrentCostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CostRangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cluster current cost
     * Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 
     * @param {String} organizationId Organization ID
     * @param {String} clusterId Cluster ID
     * @param {module:api/BillingApi~getClusterCurrentCostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CostRangeResponse}
     */
    getClusterCurrentCost(organizationId, clusterId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getClusterCurrentCost");
      }
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterCurrentCost");
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
      let returnType = CostRangeResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/cluster/{clusterId}/currentCost', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationBillingInfo operation.
     * @callback module:api/BillingApi~getOrganizationBillingInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization billing info
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~getOrganizationBillingInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingInfoResponse}
     */
    getOrganizationBillingInfo(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationBillingInfo");
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
      let returnType = BillingInfoResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/billingInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationBillingStatus operation.
     * @callback module:api/BillingApi~getOrganizationBillingStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization billing status
     * This endpoint returns a \"is_valid\" boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~getOrganizationBillingStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingStatus}
     */
    getOrganizationBillingStatus(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationBillingStatus");
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
      let returnType = BillingStatus;
      return this.apiClient.callApi(
        '/organization/{organizationId}/billingStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationCurrentCost operation.
     * @callback module:api/BillingApi~getOrganizationCurrentCostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationCurrentCostResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization current cost
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~getOrganizationCurrentCostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationCurrentCostResponse}
     */
    getOrganizationCurrentCost(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationCurrentCost");
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
      let returnType = OrganizationCurrentCostResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/currentCost', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationInvoice operation.
     * @callback module:api/BillingApi~getOrganizationInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization invoice
     * @param {String} organizationId Organization ID
     * @param {String} invoiceId Invoice ID
     * @param {module:api/BillingApi~getOrganizationInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    getOrganizationInvoice(organizationId, invoiceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationInvoice");
      }
      // verify the required parameter 'invoiceId' is set
      if (invoiceId === undefined || invoiceId === null) {
        throw new Error("Missing the required parameter 'invoiceId' when calling getOrganizationInvoice");
      }

      let pathParams = {
        'organizationId': organizationId,
        'invoiceId': invoiceId
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
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/invoice/{invoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationInvoicePDF operation.
     * @callback module:api/BillingApi~getOrganizationInvoicePDFCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get invoice link
     * This will return URL of the invoice PDF
     * @param {String} organizationId Organization ID
     * @param {String} invoiceId Invoice ID
     * @param {module:api/BillingApi~getOrganizationInvoicePDFCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LinkResponse}
     */
    getOrganizationInvoicePDF(organizationId, invoiceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationInvoicePDF");
      }
      // verify the required parameter 'invoiceId' is set
      if (invoiceId === undefined || invoiceId === null) {
        throw new Error("Missing the required parameter 'invoiceId' when calling getOrganizationInvoicePDF");
      }

      let pathParams = {
        'organizationId': organizationId,
        'invoiceId': invoiceId
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
      let returnType = LinkResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/invoice/{invoiceId}/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationCreditCards operation.
     * @callback module:api/BillingApi~listOrganizationCreditCardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreditCardResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization credit cards
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~listOrganizationCreditCardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreditCardResponseList}
     */
    listOrganizationCreditCards(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationCreditCards");
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
      let returnType = CreditCardResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/creditCard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationInvoice operation.
     * @callback module:api/BillingApi~listOrganizationInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization invoices
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~listOrganizationInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponseList}
     */
    listOrganizationInvoice(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationInvoice");
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
      let returnType = InvoiceResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/invoice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organizationDownloadAllInvoices operation.
     * @callback module:api/BillingApi~organizationDownloadAllInvoicesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download all invoices
     * @param {String} organizationId Organization ID
     * @param {module:api/BillingApi~organizationDownloadAllInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    organizationDownloadAllInvoices(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling organizationDownloadAllInvoices");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/downloadInvoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
