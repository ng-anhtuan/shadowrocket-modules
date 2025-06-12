/**
 * @name CapCut Premium Unlocker
 * @version 1.0
 * @description Unlock CapCut Premium (Pro) via Shadowrocket script
 */

try {
  let obj = JSON.parse($response.body);

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

  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("❌ CapCut Premium Error: " + e);
  $done({});
}