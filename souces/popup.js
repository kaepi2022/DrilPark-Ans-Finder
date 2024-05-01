// background.js

// content.jsからのメッセージを受信してポップアップに転送する関数
function handleMessage(message, sender, sendResponse) {
    chrome.action.setPopup({ popup: "popup.html" }); // ポップアップを表示

    // メッセージをポップアップに送信
    chrome.runtime.sendMessage({ redFontContent: message.redFontContent });
}

// content.jsからのメッセージを待機
chrome.runtime.onMessage.addListener(handleMessage);
