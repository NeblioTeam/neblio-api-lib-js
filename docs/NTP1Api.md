# NeblioRestApiSuite.NTP1Api

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastTx**](NTP1Api.md#broadcastTx) | **POST** /ntp1/broadcast | Broadcasts a signed raw transaction to the network
[**burnToken**](NTP1Api.md#burnToken) | **POST** /ntp1/burntoken | Builds a transaction that burns an NTP1 Token
[**getAddressInfo**](NTP1Api.md#getAddressInfo) | **GET** /ntp1/addressinfo/{address} | Information On a Neblio Address
[**getTokenHolders**](NTP1Api.md#getTokenHolders) | **GET** /ntp1/stakeholders/{tokenid} | Get Addresses Holding a Token
[**getTokenId**](NTP1Api.md#getTokenId) | **GET** /ntp1/tokenid/{tokensymbol} | Returns the tokenId representing a token
[**getTokenMetadataOfIssuance**](NTP1Api.md#getTokenMetadataOfIssuance) | **GET** /ntp1/tokenmetadata/{tokenid} | Get Issuance Metadata of Token
[**getTokenMetadataOfUtxo**](NTP1Api.md#getTokenMetadataOfUtxo) | **GET** /ntp1/tokenmetadata/{tokenid}/{utxo} | Get UTXO Metadata of Token
[**getTransactionInfo**](NTP1Api.md#getTransactionInfo) | **GET** /ntp1/transactioninfo/{txid} | Information On an NTP1 Transaction
[**issueToken**](NTP1Api.md#issueToken) | **POST** /ntp1/issue | Builds a transaction that issues a new NTP1 Token
[**sendToken**](NTP1Api.md#sendToken) | **POST** /ntp1/sendtoken | Builds a transaction that sends an NTP1 Token


<a name="broadcastTx"></a>
# **broadcastTx**
> BroadcastTxResponse broadcastTx(body)

Broadcasts a signed raw transaction to the network

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var body = new NeblioRestApiSuite.BroadcastTxRequest(); // BroadcastTxRequest | Object representing a transaction to broadcast


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.broadcastTx(body, callback);
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

<a name="burnToken"></a>
# **burnToken**
> BurnTokenResponse burnToken(body)

Builds a transaction that burns an NTP1 Token

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var body = new NeblioRestApiSuite.BurnTokenRequest(); // BurnTokenRequest | Object representing the token to be burned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.burnToken(body, callback);
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

<a name="getAddressInfo"></a>
# **getAddressInfo**
> GetAddressInfoResponse getAddressInfo(address)

Information On a Neblio Address

Returns both NEBL and NTP1 token UTXOs held at the given address. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var address = "address_example"; // String | Neblio Address to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressInfo(address, callback);
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

<a name="getTokenHolders"></a>
# **getTokenHolders**
> GetTokenHoldersResponse getTokenHolders(tokenid)

Get Addresses Holding a Token

Returns the the the addresses holding a token and how many tokens are held 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokenHolders(tokenid, callback);
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

<a name="getTokenId"></a>
# **getTokenId**
> GetTokenIdResponse getTokenId(tokensymbol)

Returns the tokenId representing a token

Translates a token symbol to a tokenId if a token exists with that symbol on the network 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var tokensymbol = "tokensymbol_example"; // String | Token symbol


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokenId(tokensymbol, callback);
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

<a name="getTokenMetadataOfIssuance"></a>
# **getTokenMetadataOfIssuance**
> GetTokenMetadataResponse getTokenMetadataOfIssuance(tokenid)

Get Issuance Metadata of Token

Returns the metadata associated with a token at time of issuance. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokenMetadataOfIssuance(tokenid, callback);
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

<a name="getTokenMetadataOfUtxo"></a>
# **getTokenMetadataOfUtxo**
> GetTokenMetadataResponse getTokenMetadataOfUtxo(tokenid, utxo)

Get UTXO Metadata of Token

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var tokenid = "tokenid_example"; // String | TokenId to request metadata for

var utxo = "utxo_example"; // String | Specific UTXO to request metadata for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokenMetadataOfUtxo(tokenid, utxo, callback);
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

<a name="getTransactionInfo"></a>
# **getTransactionInfo**
> GetTransactionInfoResponse getTransactionInfo(txid)

Information On an NTP1 Transaction

Returns detailed information regarding an NTP1 transaction. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var txid = "txid_example"; // String | Neblio txid to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionInfo(txid, callback);
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

<a name="issueToken"></a>
# **issueToken**
> IssueTokenResponse issueToken(body)

Builds a transaction that issues a new NTP1 Token

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var body = new NeblioRestApiSuite.IssueTokenRequest(); // IssueTokenRequest | Object representing the token to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issueToken(body, callback);
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

<a name="sendToken"></a>
# **sendToken**
> SendTokenResponse sendToken(body)

Builds a transaction that sends an NTP1 Token

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain. 

### Example
```javascript
var NeblioRestApiSuite = require('neblio_rest_api_suite');

var apiInstance = new NeblioRestApiSuite.NTP1Api();

var body = new NeblioRestApiSuite.SendTokenRequest(); // SendTokenRequest | Object representing the token to be sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendToken(body, callback);
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

