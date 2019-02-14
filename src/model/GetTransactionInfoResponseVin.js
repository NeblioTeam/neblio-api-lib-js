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
import GetTransactionInfoResponsePreviousOutput from './GetTransactionInfoResponsePreviousOutput';
import GetTransactionInfoResponseScriptSig from './GetTransactionInfoResponseScriptSig';
import GetTransactionInfoResponseTokens from './GetTransactionInfoResponseTokens';

/**
 * The GetTransactionInfoResponseVin model module.
 * @module model/GetTransactionInfoResponseVin
 * @version 1.2.1
 */
class GetTransactionInfoResponseVin {
    /**
     * Constructs a new <code>GetTransactionInfoResponseVin</code>.
     * @alias module:model/GetTransactionInfoResponseVin
     */
    constructor() { 
        
        GetTransactionInfoResponseVin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransactionInfoResponseVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionInfoResponseVin} obj Optional instance to populate.
     * @return {module:model/GetTransactionInfoResponseVin} The populated <code>GetTransactionInfoResponseVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionInfoResponseVin();

            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('previousOutput')) {
                obj['previousOutput'] = GetTransactionInfoResponsePreviousOutput.constructFromObject(data['previousOutput']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = GetTransactionInfoResponseScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], [GetTransactionInfoResponseTokens]);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} sequence
 */
GetTransactionInfoResponseVin.prototype['sequence'] = undefined;

/**
 * @member {module:model/GetTransactionInfoResponsePreviousOutput} previousOutput
 */
GetTransactionInfoResponseVin.prototype['previousOutput'] = undefined;

/**
 * @member {module:model/GetTransactionInfoResponseScriptSig} scriptSig
 */
GetTransactionInfoResponseVin.prototype['scriptSig'] = undefined;

/**
 * TXID of the input
 * @member {String} txid
 */
GetTransactionInfoResponseVin.prototype['txid'] = undefined;

/**
 * @member {Array.<module:model/GetTransactionInfoResponseTokens>} tokens
 */
GetTransactionInfoResponseVin.prototype['tokens'] = undefined;

/**
 * Value of input in NEBL satoshi
 * @member {Number} value
 */
GetTransactionInfoResponseVin.prototype['value'] = undefined;

/**
 * output index
 * @member {Number} vout
 */
GetTransactionInfoResponseVin.prototype['vout'] = undefined;






export default GetTransactionInfoResponseVin;

