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
import HelmRequestAllOfValuesOverrideFileGit from './HelmRequestAllOfValuesOverrideFileGit';
import HelmRequestAllOfValuesOverrideFileRaw from './HelmRequestAllOfValuesOverrideFileRaw';

/**
 * The HelmRequestAllOfValuesOverrideFile model module.
 * @module model/HelmRequestAllOfValuesOverrideFile
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequestAllOfValuesOverrideFile {
    /**
     * Constructs a new <code>HelmRequestAllOfValuesOverrideFile</code>.
     * @alias module:model/HelmRequestAllOfValuesOverrideFile
     */
    constructor() { 
        
        HelmRequestAllOfValuesOverrideFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmRequestAllOfValuesOverrideFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequestAllOfValuesOverrideFile} obj Optional instance to populate.
     * @return {module:model/HelmRequestAllOfValuesOverrideFile} The populated <code>HelmRequestAllOfValuesOverrideFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequestAllOfValuesOverrideFile();

            if (data.hasOwnProperty('git')) {
                obj['git'] = HelmRequestAllOfValuesOverrideFileGit.constructFromObject(data['git']);
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = HelmRequestAllOfValuesOverrideFileRaw.constructFromObject(data['raw']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelmRequestAllOfValuesOverrideFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelmRequestAllOfValuesOverrideFile</code>.
     */
    static validateJSON(data) {
        // validate the optional field `git`
        if (data['git']) { // data not null
          HelmRequestAllOfValuesOverrideFileGit.validateJSON(data['git']);
        }
        // validate the optional field `raw`
        if (data['raw']) { // data not null
          HelmRequestAllOfValuesOverrideFileRaw.validateJSON(data['raw']);
        }

        return true;
    }


}



/**
 * @member {module:model/HelmRequestAllOfValuesOverrideFileGit} git
 */
HelmRequestAllOfValuesOverrideFile.prototype['git'] = undefined;

/**
 * @member {module:model/HelmRequestAllOfValuesOverrideFileRaw} raw
 */
HelmRequestAllOfValuesOverrideFile.prototype['raw'] = undefined;






export default HelmRequestAllOfValuesOverrideFile;

