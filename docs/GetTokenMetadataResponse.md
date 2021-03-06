# Neblioapi.GetTokenMetadataResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenId** | **String** | ID of the token | [optional] 
**someUtxo** | **String** | Example UTXO containing this token. | [optional] 
**divisibility** | **Number** | Decimal places the token is divisible to | [optional] 
**lockStatus** | **Boolean** | Whether issuance of more tokens is locked | [optional] 
**aggregationPolicy** | **String** | Whether the tokens are aggregatable | [optional] 
**initialIssuanceAmount** | **Number** | Total tokens issued in initial issuance | [optional] 
**totalSupply** | **Number** | Total number of tokens in supply | [optional] 
**numOfHolders** | **Number** | Total number of addresses this token is held at | [optional] 
**numOfTransfers** | **Number** | Total number of transactions of this token | [optional] 
**numOfIssuance** | **Number** | Total number of times this token has been issued | [optional] 
**numOfBurns** | **Number** | Number of times tokens have been burned | [optional] 
**firstBlock** | **Number** | Block number token was issued in | [optional] 
**issuanceTxid** | **String** | TXID the token was issued with | [optional] 
**issueAddress** | **String** | Address that issued the tokens | [optional] 
**metadataOfIssuance** | [**GetTokenMetadataResponseMetadataOfIssuance**](GetTokenMetadataResponseMetadataOfIssuance.md) |  | [optional] 
**metadataOfUtxo** | [**GetTokenMetadataResponseMetadataOfUtxo**](GetTokenMetadataResponseMetadataOfUtxo.md) |  | [optional] 


