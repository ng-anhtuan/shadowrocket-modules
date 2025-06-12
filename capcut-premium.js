console.log("✅ CapCut script intercepted!");

try {
  let obj = JSON.parse($response.body);
  console.log("📦 Original:", JSON.stringify(obj));

  obj.data = {
    valid: true,
    is_activated: true,
    is_trial: false,
    product_id: "com.lemon.love.premium.yearly",
    expired_at: 4070880000,
    sub_type: "premium",
    platform: "ios",
    auto_renew_status: true
  };

  console.log("✅ Premium injected");
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("❌ Script error: " + e);
  $done({});
}