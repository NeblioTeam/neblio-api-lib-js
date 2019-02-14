# Neblioapi.SendTokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **Number** | Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL) | 
**from** | **[String]** | Array of addresses to send the token from | [optional] 
**sendutxo** | **[String]** | Array of UTXOs to send the token from | [optional] 
**to** | [**[SendTokenRequestTo]**](SendTokenRequestTo.md) |  | 
**flags** | [**IssueTokenRequestFlags**](IssueTokenRequestFlags.md) |  | [optional] 
**metadata** | [**IssueTokenRequestMetadata**](IssueTokenRequestMetadata.md) |  | [optional] 


