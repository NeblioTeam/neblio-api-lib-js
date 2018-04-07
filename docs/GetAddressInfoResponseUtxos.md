# NeblioRestApiSuite.GetAddressInfoResponseUtxos

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **Number** | Index of the UTXO at this address | [optional] 
**txid** | **String** | Txid of this UTXO | [optional] 
**blockheight** | **Number** | Blockheight of the UTXO | [optional] 
**blocktime** | **Number** | Blocktime of the UTXO | [optional] 
**scriptPubKey** | **Object** | Object representing the scruptPubKey of the UTXO | [optional] 
**used** | **Boolean** | Whether the UTXO has been used | [optional] 
**value** | **Number** | Value of the UTXO in NEBL satoshi | [optional] 
**tokens** | [**[GetAddressInfoResponseTokens]**](GetAddressInfoResponseTokens.md) | Array of NTP1 tokens in this UTXO. | [optional] 


