var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对象池
 * @author sw 2020/05/20
 */
var Pool = (function () {
    function Pool() {
    }
    /**
     * 根据签名获取对象
     * @param sign 签名
     * @param clz 类名，对象池空，则根据类名创建新对象
     */
    Pool.getItemBySign = function (sign, clz) {
        var pool = (this.poolMap[sign] || (this.poolMap[sign] = []));
        if (pool.length) {
            return pool.pop();
        }
        var obj = new clz();
        obj.poolKey = sign;
        return obj;
    };
    /**
     * 获取对象
     * @param clz 对象类名
     * @param args
     */
    Pool.getItemByClass = function (clz) {
        var clzName = clz.prototype["__class__"];
        return this.getItemBySign(clzName, clz);
    };
    /**
     * 根据签名回收对象
     * @param sign 签名
     * @param ins 对象实例
     */
    Pool.recoverBySign = function (sign, ins) {
        this.poolMap[sign] && this.poolMap[sign].push(ins);
    };
    /**
     * 回收对象
     * @param ins 对象实例
     */
    Pool.recoverByIns = function (ins) {
        this.recoverBySign(ins.poolKey, ins);
    };
    /**
     * 根据签名清理对象
     * @param sign 签名
     */
    Pool.clearBySign = function (sign) {
        var pool = this.poolMap[sign];
        if (pool) {
            var len = pool.length;
            for (var i = 0; i < len; i++) {
                pool[i].destroy && pool[i].destroy();
            }
            pool.length = 0;
            delete this.poolMap[sign];
        }
    };
    /**
     * 清理对象。对象会执行destroy。
     * @param clz 对象类名
     */
    Pool.clearByClass = function (clz) {
        var clzName = clz.prototype["__class__"];
        this.clearBySign(clzName);
    };
    /**清理所有对象 */
    Pool.clearAll = function () {
        for (var key in this.poolMap) {
            this.clearBySign(key);
        }
    };
    Pool.poolMap = {};
    return Pool;
}());
__reflect(Pool.prototype, "Pool");
//# sourceMappingURL=pool.js.map