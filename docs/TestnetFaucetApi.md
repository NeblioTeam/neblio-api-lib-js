# Neblioapi.TestnetFaucetApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testnetGetFaucet**](TestnetFaucetApi.md#testnetGetFaucet) | **GET** /testnet/faucet | Withdraws testnet NEBL to the specified address


<a name="testnetGetFaucet"></a>
# **testnetGetFaucet**
> GetFaucetResponse testnetGetFaucet(address, opts)

Withdraws testnet NEBL to the specified address

Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period. 

### Example
```javascript
import Neblioapi from 'neblioapi';

let apiInstance = new Neblioapi.TestnetFaucetApi();
let address = "address_example"; // String | Your Neblio Testnet Address
let opts = {
  'amount': 3.4 // Number | Amount of NEBL to withdrawal in satoshis
};
apiInstance.testnetGetFaucet(address, opts, (error, data, response) => {
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
 **address** | **String**| Your Neblio Testnet Address | 
 **amount** | **Number**| Amount of NEBL to withdrawal in satoshis | [optional] 

### Return type

[**GetFaucetResponse**](GetFaucetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

