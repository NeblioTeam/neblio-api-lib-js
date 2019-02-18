# Neblioapi.TestnetInsightApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testnetGetAddress**](TestnetInsightApi.md#testnetGetAddress) | **GET** /testnet/ins/addr/{address} | Returns address object
[**testnetGetAddressBalance**](TestnetInsightApi.md#testnetGetAddressBalance) | **GET** /testnet/ins/addr/{address}/balance | Returns address balance in sats
[**testnetGetAddressTotalReceived**](TestnetInsightApi.md#testnetGetAddressTotalReceived) | **GET** /testnet/ins/addr/{address}/totalReceived | Returns total received by address in sats
[**testnetGetAddressTotalSent**](TestnetInsightApi.md#testnetGetAddressTotalSent) | **GET** /testnet/ins/addr/{address}/totalSent | Returns total sent by address in sats
[**testnetGetAddressUnconfirmedBalance**](TestnetInsightApi.md#testnetGetAddressUnconfirmedBalance) | **GET** /testnet/ins/addr/{address}/unconfirmedBalance | Returns address unconfirmed balance in sats
[**testnetGetAddressUtxos**](TestnetInsightApi.md#testnetGetAddressUtxos) | **GET** /testnet/ins/addr/{address}/utxo | Returns all UTXOs at a given address
[**testnetGetBlock**](TestnetInsightApi.md#testnetGetBlock) | **GET** /testnet/ins/block/{blockhash} | Returns information regarding a Neblio block
[**testnetGetBlockIndex**](TestnetInsightApi.md#testnetGetBlockIndex) | **GET** /testnet/ins/block-index/{blockindex} | Returns block hash of block
[**testnetGetRawTx**](TestnetInsightApi.md#testnetGetRawTx) | **GET** /testnet/ins/rawtx/{txid} | Returns raw transaction hex
[**testnetGetStatus**](TestnetInsightApi.md#testnetGetStatus) | **GET** /testnet/ins/status | Utility API for calling several blockchain node functions
[**testnetGetSync**](TestnetInsightApi.md#testnetGetSync) | **GET** /testnet/ins/sync | Get node sync status
[**testnetGetTx**](TestnetInsightApi.md#testnetGetTx) | **GET** /testnet/ins/tx/{txid} | Returns transaction object
[**testnetGetTxs**](TestnetInsightApi.md#testnetGetTxs) | **GET** /testnet/ins/txs | Get transactions by block or address
[**testnetSendTx**](TestnetInsightApi.md#testnetSendTx) | **POST** /testnet/ins/tx/send | Broadcasts a signed raw transaction to the network (not NTP1 specific)


<a name="testnetGetAddress"></a>
# **testnetGetAddress**
> GetAddressResponse testnetGetAddress(address)

Returns address object

Returns NEBL address object containing information on a specific address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddress(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

[**GetAddressResponse**](GetAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetAddressBalance"></a>
# **testnetGetAddressBalance**
> Number testnetGetAddressBalance(address)

Returns address balance in sats

Returns NEBL address balance in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddressBalance(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetAddressTotalReceived"></a>
# **testnetGetAddressTotalReceived**
> Number testnetGetAddressTotalReceived(address)

Returns total received by address in sats

Returns total NEBL received by address in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddressTotalReceived(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetAddressTotalSent"></a>
# **testnetGetAddressTotalSent**
> Number testnetGetAddressTotalSent(address)

Returns total sent by address in sats

Returns total NEBL sent by address in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddressTotalSent(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetAddressUnconfirmedBalance"></a>
# **testnetGetAddressUnconfirmedBalance**
> Number testnetGetAddressUnconfirmedBalance(address)

Returns address unconfirmed balance in sats

Returns NEBL address unconfirmed balance in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddressUnconfirmedBalance(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetAddressUtxos"></a>
# **testnetGetAddressUtxos**
> [Object] testnetGetAddressUtxos(address)

Returns all UTXOs at a given address

Returns information on each Unspent Transaction Output contained at an address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let address = "address_example"; // String | Address
apiInstance.testnetGetAddressUtxos(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetBlock"></a>
# **testnetGetBlock**
> GetBlockResponse testnetGetBlock(blockhash)

Returns information regarding a Neblio block

Returns blockchain data for a given block based upon the block hash

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let blockhash = "blockhash_example"; // String | Block Hash
apiInstance.testnetGetBlock(blockhash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockhash** | **String**| Block Hash | 

### Return type

[**GetBlockResponse**](GetBlockResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetBlockIndex"></a>
# **testnetGetBlockIndex**
> GetBlockIndexResponse testnetGetBlockIndex(blockindex)

Returns block hash of block

Returns the block hash of a block at a given block index

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let blockindex = 3.4; // Number | Block Index
apiInstance.testnetGetBlockIndex(blockindex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockindex** | **Number**| Block Index | 

### Return type

[**GetBlockIndexResponse**](GetBlockIndexResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetRawTx"></a>
# **testnetGetRawTx**
> GetRawTxResponse testnetGetRawTx(txid)

Returns raw transaction hex

Returns raw transaction hex representing a NEBL transaction

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let txid = "txid_example"; // String | Transaction ID
apiInstance.testnetGetRawTx(txid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**GetRawTxResponse**](GetRawTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetStatus"></a>
# **testnetGetStatus**
> Object testnetGetStatus(opts)

Utility API for calling several blockchain node functions

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let opts = {
  'q': "q_example" // String | Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
};
apiInstance.testnetGetStatus(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetSync"></a>
# **testnetGetSync**
> GetSyncResponse testnetGetSync()

Get node sync status

Returns information on the node&#39;s sync progress

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
apiInstance.testnetGetSync((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSyncResponse**](GetSyncResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetTx"></a>
# **testnetGetTx**
> GetTxResponse testnetGetTx(txid)

Returns transaction object

Returns NEBL transaction object representing a NEBL transaction

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let txid = "txid_example"; // String | Transaction ID
apiInstance.testnetGetTx(txid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**GetTxResponse**](GetTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetGetTxs"></a>
# **testnetGetTxs**
> GetTxsResponse testnetGetTxs(opts)

Get transactions by block or address

Returns all transactions by block or address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let opts = {
  'address': "address_example", // String | Address
  'block': "block_example", // String | Block Hash
  'pageNum': 3.4 // Number | Page number to display
};
apiInstance.testnetGetTxs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address | [optional] 
 **block** | **String**| Block Hash | [optional] 
 **pageNum** | **Number**| Page number to display | [optional] 

### Return type

[**GetTxsResponse**](GetTxsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testnetSendTx"></a>
# **testnetSendTx**
> BroadcastTxResponse testnetSendTx(sendTxRequest)

Broadcasts a signed raw transaction to the network (not NTP1 specific)

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetInsightApi();
let sendTxRequest = new Neblioapi.SendTxRequest(); // SendTxRequest | Object representing a transaction to broadcast
apiInstance.testnetSendTx(sendTxRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendTxRequest** | [**SendTxRequest**](SendTxRequest.md)| Object representing a transaction to broadcast | 

### Return type

[**BroadcastTxResponse**](BroadcastTxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

