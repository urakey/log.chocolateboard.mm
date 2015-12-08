---
title: 'JavaScript: ブクログの非公式 API を使って本の情報を取得・表示する jQuery プラグイン'
date: 2014-11-09
category: Coding
tags: booklog, JavaScript, jQuery, Plugins
published: true

eyecatch: '/assets/images/entries/2014/11/jquery-akbooklog/eyecatch.jpg'
eyecatchCap: 'ブクログ - web本棚サービス'
eyecatchCap_link: 'http://booklog.jp/'
---

JavaScript お勉強メモ。jQuery のプラグイン化してみるお勉強の記録その2です（目標達成まであと8つ）。

随分前に「[ブクログのAPI（非公式）を使って本の情報をjQueryで取得してみた](http://backyard.chocolateboard.net/201204/booklog-jquery)」ていうのを書いたけど、今ならもう少しだけ綺麗に書けるようになった気がするので書きなおしてみました。

---

## Index

- [jquery.akBooklog の Demo](#p1)
- [jquery.akBooklog のこと](#p2)
- [jquery.akBooklog の Options](#p3)

---

[section:1]

## jquery.akBooklog の Demo

[codepen:gEqcL:400]

[/section]

[section:2]

## jquery.akBooklog のこと

- [urakey/jquery.akBooklog](https://github.com/urakey/jquery.akBooklog)

非公式 API を使用しているので、使用の際は個人的な目的の範囲で && 自己責任でお願いします mm

指定したセレクタ内に本の画像とタイトルを出力するプラグインです。デフォルトではブクログ公式アカウントの本棚情報を出力します。

### 自分の本棚情報を表示

ブクログのユーザーアカウントが必要です。ユーザーアカウントを `booklog_id` にセットして渡してください。

```javascript
$('#novels').akBooklog({
  booklog_id: 'urakey' // ブクログのユーザーアカウント
});
```

### リンク先のこと

Amazonアソシエイト ID を渡すと、リンク先がブクログから Amazon に変わります。

ただし、ブクログに登録されている本が ASIN 情報を持っていない場合はブクログのページがリンク先になります

```javascript
$('#novels').akBooklog({
  amazon_id: 'hogehoge-22' // Amazonアソシエイト ID
});
```

[/section]

[section:3]

## jquery.akBooklog の Options

オプションは [ここ](https://github.com/urakey/jquery.akBooklog/blob/master/README.md#options) にまとまっています。

[/section]


---

レイアウトは CSS で自由に変更できるように、プラグイン側には持たせていないけれど、そもそも DOM 自体自由に出せたらいいのに・・・と思うので、どうやったらできるのか考え中(´∀｀*)
