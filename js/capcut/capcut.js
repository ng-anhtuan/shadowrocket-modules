
// CapCut Premium Unlock
let obj = JSON.parse($response.body);
obj.subscriber = {
  entitlements: {
    premium: {
      expires_date: "2099-12-31T23:59:59Z",
      product_identifier: "com.bytedance.capcut.premium.yearly",
      purchase_date: "2023-01-01T00:00:00Z"
    }
  },
  subscriptions: {
    "com.bytedance.capcut.premium.yearly": {
      original_purchase_date: "2023-01-01T00:00:00Z",
      expires_date: "2099-12-31T23:59:59Z",
      purchase_date: "2023-01-01T00:00:00Z",
      store: "app_store"
    }
  }
};
$done({ body: JSON.stringify(obj) });
