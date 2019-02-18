# Neblioapi.JSONRPCApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jsonRpc**](JSONRPCApi.md#jsonRpc) | **POST** / | Send a JSON-RPC call to a localhost neblio-Qt or nebliod node


<a name="jsonRpc"></a>
# **jsonRpc**
> RpcResponse jsonRpc(rpcRequest)

Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from this page due to CORS restrictions. Requires a node to be running locally at 127.0.0.1 - Use port 16326 for testnet.

### Example
```javascript
import Neblioapi from 'neblioapi';
let defaultClient = Neblioapi.ApiClient.instance;
// Configure HTTP basic authorization: rpcAuth
let rpcAuth = defaultClient.authentications['rpcAuth'];
rpcAuth.username = 'YOUR USERNAME';
rpcAuth.password = 'YOUR PASSWORD';

let apiInstance = new Neblioapi.JSONRPCApi();
let rpcRequest = new Neblioapi.RpcRequest(); // RpcRequest | 
apiInstance.jsonRpc(rpcRequest, (error, data, response) => {
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
 **rpcRequest** | [**RpcRequest**](RpcRequest.md)|  | 

### Return type

[**RpcResponse**](RpcResponse.md)

### Authorization

[rpcAuth](../README.md#rpcAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

