(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('rxjs/add/observable/of'), require('rxjs/add/operator/map'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/map', '@angular/common'], factory) :
	(factory((global.my = global.my || {}, global.my.lib = {}),global.ng.core,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.common));
}(this, (function (exports,core,Observable,of,map,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BarService = /** @class */ (function () {
    function BarService() {
    }
    Object.defineProperty(BarService.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return Observable.Observable.of(true)
                .map(function (val) { return "" + val; });
        },
        enumerable: true,
        configurable: true
    });
    return BarService;
}());
BarService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
BarService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    return FooComponent;
}());
FooComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'my-foo',
                template: "<p>Hello Pepito</p>\n",
                styles: ["h1 {\n  color: #ff00ff; }\n"]
            },] },
];
/** @nocollapse */
FooComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = FooComponent;
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    return MyLibModule;
}());
MyLibModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    FooComponent
                ],
                exports: [
                    FooComponent
                ],
                entryComponents: [
                    FooComponent
                ],
                providers: [
                    { provide: 'PLUGIN_ENTRY_POINT', useValue: ɵ0 }
                ]
            },] },
];
/** @nocollapse */
MyLibModule.ctorParameters = function () { return []; };

exports.BarService = BarService;
exports.FooComponent = FooComponent;
exports.MyLibModule = MyLibModule;

global.BarService = BarService;
global.FooComponent = FooComponent;
global.MyLibModule = MyLibModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
