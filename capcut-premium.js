
/**
 * CapCut Premium Unlock Script
 * Unlock by Shadowrocket Rewrite + Script
 * Author: @yourusername
 */

let body = JSON.parse($response.body);

body.data = {
  "valid": true,
  "product_id": "com.lemon.love.premium.yearly",
  "expired_at": 4070880000,
  "is_trial": false,
  "is_activated": true,
  "sub_type": "premium",
  "platform": "ios",
  "auto_renew_status": true
};

$done({ body: JSON.stringify(body) });
