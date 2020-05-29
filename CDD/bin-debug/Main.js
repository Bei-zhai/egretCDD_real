//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this); //监听是否添加到舞台，后面是响应函数
        //必须初始化
        _this.cardlist = [];
        _this.outcardlist = [];
        _this.incardlist = [];
        _this.rulecardlist = [];
        _this.hand = null;
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")
                            //this.startAnimation(result);
                        ];
                    case 2:
                        result = _a.sent();
                        //this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        //this.startAnimation(result);
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.stage.scaleMode = egret.StageScaleMode.FIXED_NARROW;
        //背景
        var sky = this.createBitmapByName("back_jpg");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        //创建牌
        var card1 = this.cardinitial('x', '2', 1);
        this.addChild(card1.mycard);
        var card2 = this.cardinitial('x', '2', 2);
        this.addChild(card2.mycard);
        var card3 = this.cardinitial('f', '2', 3);
        this.addChild(card3.mycard);
        var card4 = this.cardinitial('h', '2', 4);
        this.addChild(card4.mycard);
        var card5 = this.cardinitial('x', '5', 5);
        this.addChild(card5.mycard);
        var card6 = this.cardinitial('m', '5', 6);
        this.addChild(card6.mycard);
        var card7 = this.cardinitial('h', '9', 7);
        this.addChild(card7.mycard);
        var card8 = this.cardinitial('h', '10', 8);
        this.addChild(card8.mycard);
        var card9 = this.cardinitial('h', 'J', 9);
        this.addChild(card9.mycard);
        var card10 = this.cardinitial('x', 'Q', 10);
        this.addChild(card10.mycard);
        var card11 = this.cardinitial('f', 'K', 11);
        this.addChild(card11.mycard);
        var card12 = this.cardinitial('x', 'K', 12);
        this.addChild(card12.mycard);
        var card13 = this.cardinitial('x', 'K', 13);
        this.addChild(card13.mycard);
        var start = new egret.TextField();
        this.addChild(start);
        start.background = true;
        start.backgroundColor = 0xe8fff5;
        start.x = this.stage.stageWidth / 15 * 7;
        start.y = this.stage.stageHeight / 4 * 3 - 200;
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.verticalAlign = egret.VerticalAlign.MIDDLE;
        start.size = 50;
        start.textColor = 0x199fc2;
        start.text = '出牌';
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandlerstart, this);
        //放歌
        var sound = RES.getRes("bgm_mp3");
        sound.play();
    };
    //card初始化
    Main.prototype.cardinitial = function (suit, point, no) {
        var cardW = this.stage.stageWidth / 15;
        var cardH = cardW * 5 / 3;
        var cardx = this.stage.stageWidth / 15;
        var cardy = this.stage.stageHeight / 4 * 3;
        var card = new player.card(suit, point, no);
        card.mycard.x = cardx * no;
        card.mycard.y = cardy;
        card.mycard.width = cardW;
        card.mycard.height = cardH;
        //细节
        this.cardlist.push(card);
        card.mycard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        card.mycard.touchEnabled = true;
        return card;
    };
    //事件处理牌点击
    Main.prototype.touchHandler = function (e) {
        var cardynew = this.stage.stageHeight / 5 * 3;
        var cardyoringinal = this.stage.stageHeight / 4 * 3;
        var c = e.target; //获取card，但出了作用域，所以用e来拿到事件的触发者
        if (c.y == cardyoringinal) {
            c.y = cardynew;
        }
        else
            c.y = cardyoringinal;
    };
    //事件处理出牌
    Main.prototype.touchHandlerstart = function () {
        var i = 0;
        var cardynew = this.stage.stageHeight / 5 * 3;
        var cardW = this.stage.stageWidth / 15;
        //消失
        for (var i_1 = 0; i_1 < this.outcardlist.length; i_1++) {
            this.removeChild(this.outcardlist[i_1]);
        }
        //初始化
        this.incardlist = [];
        this.outcardlist = [];
        this.rulecardlist = [];
        //找到选中的牌
        for (; i < this.cardlist.length; i++) {
            if (this.cardlist[i].mycard.y == cardynew) {
                this.outcardlist.push(this.cardlist[i].mycard);
                this.rulecardlist.push(this.cardlist[i]);
            }
            else
                this.incardlist.push(this.cardlist[i].mycard);
        }
        //把牌打出去
        this.hand = new player.hand(this.rulecardlist);
        var check = this.hand.checkrule();
        if (check) {
            for (var i_2 = 0; i_2 < this.outcardlist.length; i_2++) {
                this.outcardlist[i_2].y = cardynew - 300;
                this.outcardlist[i_2].x = this.stage.width / 2 - cardW * (2 - i_2);
            }
            for (var i_3 = 0; i_3 < this.incardlist.length; i_3++) {
                this.incardlist[i_3].x = this.stage.width / 2 - cardW * (5 - i_3);
            }
        }
        else
            this.outcardlist = [];
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map