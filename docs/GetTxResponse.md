# NeblioRestApiSuite.GetTxResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **String** | TXID of transaction | [optional] 
**version** | **Number** | Transaction version | [optional] 
**locktime** | **Number** | Transaction locktime | [optional] 
**vin** | [**[GetTxResponseVin]**](GetTxResponseVin.md) | Array of transaction inputs | [optional] 
**vout** | [**[GetTxResponseVout]**](GetTxResponseVout.md) | Array of transaction outputs | [optional] 
**blocktime** | **Number** | Block time of this transaction | [optional] 
**blockheight** | **Number** | Block height of this transaction | [optional] 
**totalsent** | **Number** | Total NEBL sent in this transaction in satoshis | [optional] 
**fee** | **Number** | Total NEBL used as fee for this transcation in satoshis | [optional] 
**blockhash** | **String** | Hash of the block this transaction is in | [optional] 
**time** | **Number** | Transaction time | [optional] 
**confirmations** | **Number** | Number of transaction confirmations | [optional] 
**valueOut** | **Number** | Total NEBL output in this transaction | [optional] 
**valueIn** | **Number** | Total NEBL input in this transaction | [optional] 
**fees** | **Number** | Total NEBL used in fees for this transaction | [optional] 
**size** | **Number** | Transcation size in bytes | [optional] 


