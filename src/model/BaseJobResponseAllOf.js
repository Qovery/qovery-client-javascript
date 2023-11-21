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

import ApiClient from '../ApiClient';
import ApplicationGitRepository from './ApplicationGitRepository';
import ContainerSource from './ContainerSource';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';

/**
 * The BaseJobResponseAllOf model module.
 * @module model/BaseJobResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class BaseJobResponseAllOf {
    /**
     * Constructs a new <code>BaseJobResponseAllOf</code>.
     * @alias module:model/BaseJobResponseAllOf
     * @param environment {module:model/ReferenceObject} 
     * @param maximumCpu {Number} Maximum cpu that can be allocated to the job based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
     * @param maximumMemory {Number} Maximum memory that can be allocated to the job based on organization cluster configuration. unit is MB. 1024 MB = 1GB
     * @param name {String} name is case insensitive
     * @param cpu {Number} unit is millicores (m). 1000m = 1 cpu
     * @param memory {Number} unit is MB. 1024 MB = 1GB
     * @param autoPreview {Boolean} Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
     * @param source {module:model/OneOfobjectobject} 
     * @param healthchecks {module:model/Healthcheck} 
     */
    constructor(environment, maximumCpu, maximumMemory, name, cpu, memory, autoPreview, source, healthchecks) { 
        
        BaseJobResponseAllOf.initialize(this, environment, maximumCpu, maximumMemory, name, cpu, memory, autoPreview, source, healthchecks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment, maximumCpu, maximumMemory, name, cpu, memory, autoPreview, source, healthchecks) { 
        obj['environment'] = environment;
        obj['maximum_cpu'] = maximumCpu;
        obj['maximum_memory'] = maximumMemory;
        obj['name'] = name;
        obj['cpu'] = cpu;
        obj['memory'] = memory;
        obj['auto_preview'] = autoPreview;
        obj['source'] = source;
        obj['healthchecks'] = healthchecks;
    }

    /**
     * Constructs a <code>BaseJobResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseJobResponseAllOf} obj Optional instance to populate.
     * @return {module:model/BaseJobResponseAllOf} The populated <code>BaseJobResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseJobResponseAllOf();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('maximum_cpu')) {
                obj['maximum_cpu'] = ApiClient.convertToType(data['maximum_cpu'], 'Number');
            }
            if (data.hasOwnProperty('maximum_memory')) {
                obj['maximum_memory'] = ApiClient.convertToType(data['maximum_memory'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('max_nb_restart')) {
                obj['max_nb_restart'] = ApiClient.convertToType(data['max_nb_restart'], 'Number');
            }
            if (data.hasOwnProperty('max_duration_seconds')) {
                obj['max_duration_seconds'] = ApiClient.convertToType(data['max_duration_seconds'], 'Number');
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], OneOfobjectobject);
            }
            if (data.hasOwnProperty('healthchecks')) {
                obj['healthchecks'] = Healthcheck.constructFromObject(data['healthchecks']);
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReferenceObject} environment
 */
BaseJobResponseAllOf.prototype['environment'] = undefined;

/**
 * Maximum cpu that can be allocated to the job based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
BaseJobResponseAllOf.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the job based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
BaseJobResponseAllOf.prototype['maximum_memory'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
BaseJobResponseAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
BaseJobResponseAllOf.prototype['description'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
BaseJobResponseAllOf.prototype['cpu'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
BaseJobResponseAllOf.prototype['memory'] = undefined;

/**
 * Maximum number of restart allowed before the job is considered as failed 0 means that no restart/crash of the job is allowed 
 * @member {Number} max_nb_restart
 */
BaseJobResponseAllOf.prototype['max_nb_restart'] = undefined;

/**
 * Maximum number of seconds allowed for the job to run before killing it and mark it as failed 
 * @member {Number} max_duration_seconds
 */
BaseJobResponseAllOf.prototype['max_duration_seconds'] = undefined;

/**
 * Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
BaseJobResponseAllOf.prototype['auto_preview'] = undefined;

/**
 * Port where to run readiness and liveliness probes checks. The port will not be exposed externally
 * @member {Number} port
 */
BaseJobResponseAllOf.prototype['port'] = undefined;

/**
 * @member {module:model/OneOfobjectobject} source
 */
BaseJobResponseAllOf.prototype['source'] = undefined;

/**
 * @member {module:model/Healthcheck} healthchecks
 */
BaseJobResponseAllOf.prototype['healthchecks'] = undefined;

/**
 * Specify if the job will be automatically updated after receiving a new image tag or a new commit according to the source type.  The new image tag shall be communicated via the \"Auto Deploy job\" endpoint https://api-doc.qovery.com/#tag/Jobs/operation/autoDeployJobEnvironments 
 * @member {Boolean} auto_deploy
 */
BaseJobResponseAllOf.prototype['auto_deploy'] = undefined;






export default BaseJobResponseAllOf;
