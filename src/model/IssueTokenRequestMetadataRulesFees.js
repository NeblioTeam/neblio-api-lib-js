/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueTokenRequestMetadataRulesFeesItems from './IssueTokenRequestMetadataRulesFeesItems';

/**
 * The IssueTokenRequestMetadataRulesFees model module.
 * @module model/IssueTokenRequestMetadataRulesFees
 * @version 1.2.1
 */
class IssueTokenRequestMetadataRulesFees {
    /**
     * Constructs a new <code>IssueTokenRequestMetadataRulesFees</code>.
     * @alias module:model/IssueTokenRequestMetadataRulesFees
     */
    constructor() { 
        
        IssueTokenRequestMetadataRulesFees.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTokenRequestMetadataRulesFees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTokenRequestMetadataRulesFees} obj Optional instance to populate.
     * @return {module:model/IssueTokenRequestMetadataRulesFees} The populated <code>IssueTokenRequestMetadataRulesFees</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTokenRequestMetadataRulesFees();

            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [IssueTokenRequestMetadataRulesFeesItems]);
            }
        }
        return obj;
    }


}

/**
 * Whether this rule can be modified in future transactions
 * @member {Boolean} locked
 */
IssueTokenRequestMetadataRulesFees.prototype['locked'] = undefined;

/**
 * Array of objects describing fee rules
 * @member {Array.<module:model/IssueTokenRequestMetadataRulesFeesItems>} items
 */
IssueTokenRequestMetadataRulesFees.prototype['items'] = undefined;






export default IssueTokenRequestMetadataRulesFees;
