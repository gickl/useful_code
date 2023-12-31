// ==UserScript==
// @name         自动跳过YouTube广告
// @namespace    youtube
// @version      1.0
// @description  在YouTube网页上自动跳过广告
// @author       Joey Gambler
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    // 设置检测时间间隔
    var timer = setInterval(skipAd, 1000); // 1000毫秒 = 1秒
})();
