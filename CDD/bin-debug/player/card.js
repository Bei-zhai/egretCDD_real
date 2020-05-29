//这个类仅仅保留card的参数，不对card显示作约束
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
var player;
(function (player) {
    var card = (function (_super) {
        __extends(card, _super);
        function card(suit, point, x) {
            var _this = _super.call(this) || this;
            _this.cardsuit = suit;
            _this.cardpoint = point;
            _this.cardname = suit + point + '_jpg';
            _this.mycard = _this.createBitmapByName(_this.cardname);
            return _this;
        }
        card.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        card.prototype.getcard = function () {
            return this.mycard;
        };
        return card;
    }(egret.DisplayObjectContainer));
    player.card = card;
    __reflect(card.prototype, "player.card");
})(player || (player = {}));
//# sourceMappingURL=card.js.map