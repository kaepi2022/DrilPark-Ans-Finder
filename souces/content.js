// content.js

// 現在のタブのHTMLを取得して指定された <font color="red"> タグを検索する関数
function findRedFont() {
    // クイズサイトのHTMLを取得
    var html = document.documentElement.outerHTML;

    // <font color="red"> タグを検索
    var redFontTag = html.match(/<font color="red">([^<]+)<\/font>/i);

    // 拡張機能に結果を送信
    chrome.runtime.sendMessage({ redFontContent: redFontTag ? redFontTag[1] : "指定されたタグが見つかりませんでした。" });
}

// ページ読み込み時にfindRedFont関数を実行
findRedFont();
