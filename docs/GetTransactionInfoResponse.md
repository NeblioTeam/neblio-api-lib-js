# Neblioapi.GetTransactionInfoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hex** | **String** | Transaction in raw hex | [optional] 
**txid** | **String** | TXID of transaction | [optional] 
**version** | **Number** | Transaction version | [optional] 
**locktime** | **Number** | Transaction locktime | [optional] 
**vin** | [**[GetTransactionInfoResponseVin]**](GetTransactionInfoResponseVin.md) | Array of transaction inputs | [optional] 
**vout** | [**[GetTransactionInfoResponseVout]**](GetTransactionInfoResponseVout.md) | Array of transaction outputs | [optional] 
**blocktime** | **Number** | Block time of this transaction | [optional] 
**blockheight** | **Number** | Block height of this transaction | [optional] 
**totalsent** | **Number** | Total NEBL sent in this transaction in satoshis | [optional] 
**fee** | **Number** | Total NEBL used as fee for this transcation in satoshis | [optional] 
**blockhash** | **String** | Hash of the block this transaction is in | [optional] 
**time** | **Number** | Transaction time | [optional] 
**confirmations** | **Number** | Number of transaction confirmations | [optional] 


