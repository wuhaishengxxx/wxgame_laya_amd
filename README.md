==========================
wxgame_laya_amd

==========================

## 项目说明

Laya Vserion 1.8 (适应2.0之前)

WX 2.6.2 

JavaScript 开发规范： amd

该项目是在Laya游戏项目在amd规范下开发，发布到weixin小游戏

## 遇到的问题
1. 无法加载GameMain 
解决方法： 1)配置 tsconfig_wx.json files 导入依赖库，导入requirejs

2. undefined;at socketTask.onmessage callback function
原因 ： 

1) socket是否写正确 

2) 微信小游戏对模块不支持导致 ，单点判断那里代码不通过，项目中小游戏对HTML支持，
导致报改方法错误，实际是代码不通过

3.  不支持 Laya.HTMLDivElement
解决办法：
libs 添加 dom.js ，sax.js ，dom_parser.js 三个库
game.js 添加js代码
```js

window.Parser = require("./libs/dom_parser.js");

```

