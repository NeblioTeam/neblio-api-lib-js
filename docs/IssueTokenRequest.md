# Neblioapi.IssueTokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issueAddress** | **String** | Address issuing the token | 
**amount** | **Number** | Number of tokens to issue | 
**divisibility** | **Number** | Number of decimal places the token should be divisble by (0-7) | 
**fee** | **Number** | Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL) | 
**reissuable** | **Boolean** | whether the token should be reissuable | 
**flags** | [**IssueTokenRequestFlags**](IssueTokenRequestFlags.md) |  | [optional] 
**transfer** | [**[IssueTokenRequestTransfer]**](IssueTokenRequestTransfer.md) |  | 
**metadata** | [**IssueTokenRequestMetadata**](IssueTokenRequestMetadata.md) |  | [optional] 


