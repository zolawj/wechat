var wechat = require('./lib/wechat');
wechat.List = require('./lib/list');
var API = require('./lib/api_common');
// 菜单接口
API.mixin(require('./lib/api_menu'));
// 分组管理
API.mixin(require('./lib/api_group'));
// 用户信息
API.mixin(require('./lib/api_user'));
// 二维码
API.mixin(require('./lib/api_qrcode'));
// 客服消息
API.mixin(require('./lib/api_customer'));
// 媒体管理（上传、下载）
API.mixin(require('./lib/api_media'));
// 支付接口
API.mixin(require('./lib/api_pay'));

wechat.API = API;
wechat.OAuth = require('./lib/oauth');
wechat.util = require('./lib/util');
module.exports = wechat;
