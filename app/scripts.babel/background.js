'use strict';

chrome.runtime.onInstalled.addListener(details => {
    console.log('previousVersion', details.previousVersion);
});

var regex = /(?:www\.)?ama?zo?n\.(?:com|ca|co\.uk|co\.jp|de|fr)\/(?:exec\/obidos\/ASIN\/|o\/|gp\/product\/|(?:(?:[^"\'\/]*)\/)?dp\/|)(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|[0-9]))(?:(?:\/|\?|\#)(?:[^"\'\s]*))?/i;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var originalUrl = details.url;
        var redirected = 'sanitised=true';
        var notLogin = 'pldnSite=1';
        if (regex.test(originalUrl)) {
            if (originalUrl.match(notLogin) != null) {
                console.log('Not login');
                chrome.notifications.create(
                    'User is not login', {
                        type: 'basic',
                        iconUrl: 'images/icon-128.png',
                        title: 'You are not login to Amazon',
                        message: 'You will be redirected to Amazon Smile after login.'
                    }
                );
                return {
                    redirectUrl: 'https://www.amazon.com/dp/' + regex.exec(originalUrl)[1]
                }
            }
            else {
                if (originalUrl.match(redirected) == null) {
                    return {
                        redirectUrl: 'https://smile.amazon.com/dp/' + regex.exec(originalUrl)[1] + '?' + redirected
                    };
                }
            }
        }
    },
    {
        urls: ['<all_urls>'],
        types: ['main_frame']
    },
    ['blocking']
);



console.log('Smile without Referrals! Event Page for Browser Action');
