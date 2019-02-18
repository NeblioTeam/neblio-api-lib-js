# Neblioapi.InsightApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddress**](InsightApi.md#getAddress) | **GET** /ins/addr/{address} | Returns address object
[**getAddressBalance**](InsightApi.md#getAddressBalance) | **GET** /ins/addr/{address}/balance | Returns address balance in sats
[**getAddressTotalReceived**](InsightApi.md#getAddressTotalReceived) | **GET** /ins/addr/{address}/totalReceived | Returns total received by address in sats
[**getAddressTotalSent**](InsightApi.md#getAddressTotalSent) | **GET** /ins/addr/{address}/totalSent | Returns total sent by address in sats
[**getAddressUnconfirmedBalance**](InsightApi.md#getAddressUnconfirmedBalance) | **GET** /ins/addr/{address}/unconfirmedBalance | Returns address unconfirmed balance in sats
[**getAddressUtxos**](InsightApi.md#getAddressUtxos) | **GET** /ins/addr/{address}/utxo | Returns all UTXOs at a given address
[**getBlock**](InsightApi.md#getBlock) | **GET** /ins/block/{blockhash} | Returns information regarding a Neblio block
[**getBlockIndex**](InsightApi.md#getBlockIndex) | **GET** /ins/block-index/{blockindex} | Returns block hash of block
[**getRawTx**](InsightApi.md#getRawTx) | **GET** /ins/rawtx/{txid} | Returns raw transaction hex
[**getStatus**](InsightApi.md#getStatus) | **GET** /ins/status | Utility API for calling several blockchain node functions
[**getSync**](InsightApi.md#getSync) | **GET** /ins/sync | Get node sync status
[**getTx**](InsightApi.md#getTx) | **GET** /ins/tx/{txid} | Returns transaction object
[**getTxs**](InsightApi.md#getTxs) | **GET** /ins/txs | Get transactions by block or address
[**sendTx**](InsightApi.md#sendTx) | **POST** /ins/tx/send | Broadcasts a signed raw transaction to the network (not NTP1 specific)


<a name="getAddress"></a>
# **getAddress**
> GetAddressResponse getAddress(address)

Returns address object

Returns NEBL address object containing information on a specific address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddress(address, (error, data, response) => {
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

<a name="getAddressBalance"></a>
# **getAddressBalance**
> Number getAddressBalance(address)

Returns address balance in sats

Returns NEBL address balance in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddressBalance(address, (error, data, response) => {
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

<a name="getAddressTotalReceived"></a>
# **getAddressTotalReceived**
> Number getAddressTotalReceived(address)

Returns total received by address in sats

Returns total NEBL received by address in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddressTotalReceived(address, (error, data, response) => {
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

<a name="getAddressTotalSent"></a>
# **getAddressTotalSent**
> Number getAddressTotalSent(address)

Returns total sent by address in sats

Returns total NEBL sent by address in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddressTotalSent(address, (error, data, response) => {
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

<a name="getAddressUnconfirmedBalance"></a>
# **getAddressUnconfirmedBalance**
> Number getAddressUnconfirmedBalance(address)

Returns address unconfirmed balance in sats

Returns NEBL address unconfirmed balance in satoshis

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddressUnconfirmedBalance(address, (error, data, response) => {
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

<a name="getAddressUtxos"></a>
# **getAddressUtxos**
> [Object] getAddressUtxos(address)

Returns all UTXOs at a given address

Returns information on each Unspent Transaction Output contained at an address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let address = "address_example"; // String | Address
apiInstance.getAddressUtxos(address, (error, data, response) => {
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

<a name="getBlock"></a>
# **getBlock**
> GetBlockResponse getBlock(blockhash)

Returns information regarding a Neblio block

Returns blockchain data for a given block based upon the block hash

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let blockhash = "blockhash_example"; // String | Block Hash
apiInstance.getBlock(blockhash, (error, data, response) => {
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

<a name="getBlockIndex"></a>
# **getBlockIndex**
> GetBlockIndexResponse getBlockIndex(blockindex)

Returns block hash of block

Returns the block hash of a block at a given block index

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let blockindex = 3.4; // Number | Block Index
apiInstance.getBlockIndex(blockindex, (error, data, response) => {
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

<a name="getRawTx"></a>
# **getRawTx**
> GetRawTxResponse getRawTx(txid)

Returns raw transaction hex

Returns raw transaction hex representing a NEBL transaction

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let txid = "txid_example"; // String | Transaction ID
apiInstance.getRawTx(txid, (error, data, response) => {
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

<a name="getStatus"></a>
# **getStatus**
> Object getStatus(opts)

Utility API for calling several blockchain node functions

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let opts = {
  'q': "q_example" // String | Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
};
apiInstance.getStatus(opts, (error, data, response) => {
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

<a name="getSync"></a>
# **getSync**
> GetSyncResponse getSync()

Get node sync status

Returns information on the node&#39;s sync progress

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
apiInstance.getSync((error, data, response) => {
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

<a name="getTx"></a>
# **getTx**
> GetTxResponse getTx(txid)

Returns transaction object

Returns NEBL transaction object representing a NEBL transaction

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let txid = "txid_example"; // String | Transaction ID
apiInstance.getTx(txid, (error, data, response) => {
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

<a name="getTxs"></a>
# **getTxs**
> GetTxsResponse getTxs(opts)

Get transactions by block or address

Returns all transactions by block or address

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let opts = {
  'address': "address_example", // String | Address
  'block': "block_example", // String | Block Hash
  'pageNum': 3.4 // Number | Page number to display
};
apiInstance.getTxs(opts, (error, data, response) => {
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

<a name="sendTx"></a>
# **sendTx**
> BroadcastTxResponse sendTx(sendTxRequest)

Broadcasts a signed raw transaction to the network (not NTP1 specific)

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.InsightApi();
let sendTxRequest = new Neblioapi.SendTxRequest(); // SendTxRequest | Object representing a transaction to broadcast
apiInstance.sendTx(sendTxRequest, (error, data, response) => {
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

