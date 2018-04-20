# NeblioRestApiSuite.TestnetNTP1Api

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testnetBroadcastTx**](TestnetNTP1Api.md#testnetBroadcastTx) | **POST** /testnet/ntp1/broadcast | Broadcasts a signed raw transaction to the network
[**testnetBurnToken**](TestnetNTP1Api.md#testnetBurnToken) | **POST** /testnet/ntp1/burntoken | Builds a transaction that burns an NTP1 Token
[**testnetGetAddressInfo**](TestnetNTP1Api.md#testnetGetAddressInfo) | **GET** /testnet/ntp1/addressinfo/{address} | Information On a Neblio Address
[**testnetGetTokenHolders**](TestnetNTP1Api.md#testnetGetTokenHolders) | **GET** /testnet/ntp1/stakeholders/{tokenid} | Get Addresses Holding a Token
[**testnetGetTokenId**](TestnetNTP1Api.md#testnetGetTokenId) | **GET** /testnet/ntp1/tokenid/{tokensymbol} | Returns the tokenId representing a token
[**testnetGetTokenMetadataOfIssuance**](TestnetNTP1Api.md#testnetGetTokenMetadataOfIssuance) | **GET** /testnet/ntp1/tokenmetadata/{tokenid} | Get Issuance Metadata of Token
[**testnetGetTokenMetadataOfUtxo**](TestnetNTP1Api.md#testnetGetTokenMetadataOfUtxo) | **GET** /testnet/ntp1/tokenmetadata/{tokenid}/{utxo} | Get UTXO Metadata of Token
[**testnetGetTransactionInfo**](TestnetNTP1Api.md#testnetGetTransactionInfo) | **GET** /testnet/ntp1/transactioninfo/{txid} | Information On an NTP1 Transaction
[**testnetIssueToken**](TestnetNTP1Api.md#testnetIssueToken) | **POST** /testnet/ntp1/issue | Builds a transaction that issues a new NTP1 Token
[**testnetSendToken**](TestnetNTP1Api.md#testnetSendToken) | **POST** /testnet/ntp1/sendtoken | Builds a transaction that sends an NTP1 Token


<a name="testnetBroadcastTx"></a>
# **testnetBroadcastTx**
> BroadcastTxResponse testnetBroadcastTx(body)

Broadcasts a signed raw transaction to the network

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var body = new NeblioRestApiSuite.BroadcastTxRequest(); // BroadcastTxRequest | Object representing a transaction to broadcast


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetBroadcastTx(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BroadcastTxRequest**](BroadcastTxRequest.md)| Object representing a transaction to broadcast | 

### Return type

[**BroadcastTxResponse**](BroadcastTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetBurnToken"></a>
# **testnetBurnToken**
> BurnTokenResponse testnetBurnToken(body)

Builds a transaction that burns an NTP1 Token

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var body = new NeblioRestApiSuite.BurnTokenRequest(); // BurnTokenRequest | Object representing the token to be burned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetBurnToken(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BurnTokenRequest**](BurnTokenRequest.md)| Object representing the token to be burned | 

### Return type

[**BurnTokenResponse**](BurnTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetAddressInfo"></a>
# **testnetGetAddressInfo**
> GetAddressInfoResponse testnetGetAddressInfo(address)

Information On a Neblio Address

Returns both NEBL and NTP1 token UTXOs held at the given address. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var address = "address_example"; // String | Neblio Address to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetAddressInfo(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Neblio Address to get information on. | 

### Return type

[**GetAddressInfoResponse**](GetAddressInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetTokenHolders"></a>
# **testnetGetTokenHolders**
> GetTokenHoldersResponse testnetGetTokenHolders(tokenid)

Get Addresses Holding a Token

Returns the the the addresses holding a token and how many tokens are held 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetTokenHolders(tokenid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenid** | **String**| TokenId to request metadata for | 

### Return type

[**GetTokenHoldersResponse**](GetTokenHoldersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetTokenId"></a>
# **testnetGetTokenId**
> GetTokenIdResponse testnetGetTokenId(tokensymbol)

Returns the tokenId representing a token

Translates a token symbol to a tokenId if a token exists with that symbol on the network 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var tokensymbol = "tokensymbol_example"; // String | Token symbol


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetTokenId(tokensymbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokensymbol** | **String**| Token symbol | 

### Return type

[**GetTokenIdResponse**](GetTokenIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetTokenMetadataOfIssuance"></a>
# **testnetGetTokenMetadataOfIssuance**
> GetTokenMetadataResponse testnetGetTokenMetadataOfIssuance(tokenid)

Get Issuance Metadata of Token

Returns the metadata associated with a token at time of issuance. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetTokenMetadataOfIssuance(tokenid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenid** | **String**| TokenId to request metadata for | 

### Return type

[**GetTokenMetadataResponse**](GetTokenMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetTokenMetadataOfUtxo"></a>
# **testnetGetTokenMetadataOfUtxo**
> GetTokenMetadataResponse testnetGetTokenMetadataOfUtxo(tokenid, utxo)

Get UTXO Metadata of Token

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for

var utxo = "utxo_example"; // String | Specific UTXO to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetTokenMetadataOfUtxo(tokenid, utxo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenid** | **String**| TokenId to request metadata for | 
 **utxo** | **String**| Specific UTXO to request metadata for | 

### Return type

[**GetTokenMetadataResponse**](GetTokenMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetGetTransactionInfo"></a>
# **testnetGetTransactionInfo**
> GetTransactionInfoResponse testnetGetTransactionInfo(txid)

Information On an NTP1 Transaction

Returns detailed information regarding an NTP1 transaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var txid = "txid_example"; // String | Neblio txid to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetGetTransactionInfo(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Neblio txid to get information on. | 

### Return type

[**GetTransactionInfoResponse**](GetTransactionInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetIssueToken"></a>
# **testnetIssueToken**
> IssueTokenResponse testnetIssueToken(body)

Builds a transaction that issues a new NTP1 Token

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var body = new NeblioRestApiSuite.IssueTokenRequest(); // IssueTokenRequest | Object representing the token to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetIssueToken(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IssueTokenRequest**](IssueTokenRequest.md)| Object representing the token to be created | 

### Return type

[**IssueTokenResponse**](IssueTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testnetSendToken"></a>
# **testnetSendToken**
> SendTokenResponse testnetSendToken(body)

Builds a transaction that sends an NTP1 Token

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.TestnetNTP1Api();

var body = new NeblioRestApiSuite.SendTokenRequest(); // SendTokenRequest | Object representing the token to be sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testnetSendToken(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendTokenRequest**](SendTokenRequest.md)| Object representing the token to be sent | 

### Return type

[**SendTokenResponse**](SendTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

