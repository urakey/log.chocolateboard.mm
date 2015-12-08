---
title: 'Grunt: タスクの失敗や完了を通知する'
date: 2014-01-12
category: Coding
tags: Grunt
published: true

eyecatch: '/assets/images/entries/2014/01/grunt-notify/eyecatch.png'
---

`grunt watch` しているときに、タスクの失敗や完了を通知するようにしたときのメモ。

---

## Index

- [grunt-notify をインストールする](#p1)
- [Gruntfile loadNpmTasks でタスクを追加する](#p2)
- [タスクの『完了』も通知する](#p3)

---

[section:1]

## grunt-notify をインストールする

- [dylang/grunt-notify](https://github.com/dylang/grunt-notify)

ターミナルで下記を実行して *grunt-notify* をインストールします。

```shell
$ npm install grunt-notify --save-dev
```

[notes:] `--save-dev` はお好みで。

[/section]

[section:2]

## Gruntfile loadNpmTasks でタスクを追加する

Gruntfile にタスクを追加します。これだけでタスクの『失敗』を通知してくれます。

```javascript
grunt.loadNpmTasks('grunt-notify');
```

[/section]

[section:3]

## タスクの『完了』も通知する

Gruntfile に option で追加すると完了メッセージも出してくれます。

```javascript
'use strict';

module.exports = function(grunt)
{

  // -----------------------------------
  //  Variables
  // -----------------------------------

  var ROOT_PATH           = '.'
    , PROJECT_PATH        = ROOT_PATH + '/htdocs'
    , ASSET_TEMPLATE_PATH = ROOT_PATH + '/assets/template'
    ;

  // -----------------------------------
  //  Options
  // -----------------------------------

  grunt.config.init({

    ect: {
      ... 省略
    }
  , notify: {
      ect: {
        options: {
          title:   'template:ect'
        , message: 'v(￣д￣)v ｲｴｲ'
        }
      }
    }
  , watch: {
      templates: {
        files: [
         ASSET_TEMPLATE_PATH + '/*.ect'
        ]
    , tasks: [
          'ect'
        , 'notify:ect'
        ]
      }
    }

  });

  // -----------------------------------
  //  Plugins
  // -----------------------------------

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ect');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);

};
```

↓こんな感じの完了メッセージが出ます。

![Grunt notify](/assets/images/entries/2014/01/grunt-notify/01.png)

[/section]
