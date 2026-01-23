// ==UserScript==
// @name            Remove Douyu Danmaku SFX - 屏蔽斗鱼高级弹幕特效
// @namespace       https://github.com/idxinf/Remove-Douyu-Danmaku-SFX
// @version         1.0.0
// @description     屏蔽斗鱼高级弹幕特效
// @author          idxinf
// @license         MIT
// @match			*://*.douyu.com/0*
// @match			*://*.douyu.com/1*
// @match			*://*.douyu.com/2*
// @match			*://*.douyu.com/3*
// @match			*://*.douyu.com/4*
// @match			*://*.douyu.com/5*
// @match			*://*.douyu.com/6*
// @match			*://*.douyu.com/7*
// @match			*://*.douyu.com/8*
// @match			*://*.douyu.com/9*
// @icon            https://www.douyu.com/favicon.ico
// @grant           GM_addStyle
// @downloadURL     
// @updateURL       
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`html body [class^=user-icon-],
html body [class^=super-tail-],
html body [class^=super-noble-icon-],
html body [class^=super-user-icon-],
html body [class^=vip-icon-],
html body [class^=right-dynamic-pic-],
html body [class^=rightDynamicPicImg-],
html body [class^=headpic-],
html body [class^=vipIcon-],
html body [class^=text-] > img,
html body [class^=super-text-] > img {
    display: none !important;
}

html body [class^=text-],
html body [class^=super-text-] {
    background-image: none !important;
}

.barrage-gradient {
    border: none;
}
`);
})();