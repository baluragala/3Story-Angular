"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_title, _price) {
        this._title = _title;
        this._price = _price;
    }
    Object.defineProperty(Product.prototype, "Title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.describe = function () {
        return "Product " + this._title + " is priced " + this._price + " $";
    };
    return Product;
}());
var OnlineProduct = /** @class */ (function (_super) {
    __extends(OnlineProduct, _super);
    function OnlineProduct(_title, _price, _deliveryMode) {
        var _this = _super.call(this, _title, _price) || this;
        _this._title = _title;
        _this._price = _price;
        _this._deliveryMode = _deliveryMode;
        return _this;
    }
    OnlineProduct.prototype.describe = function () {
        return "Product " + this._title + " is priced " + this._price + " $";
    };
    return OnlineProduct;
}(Product));
var p10 = new Product("mac book pro", 2000);
p10.describe();
p10.Title = "Dell XPS";
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer() {
    }
    MediaPlayer.prototype.play = function () { };
    MediaPlayer.prototype.pause = function () { };
    MediaPlayer.prototype.volume = function (value) {
        return true;
    };
    return MediaPlayer;
}());
