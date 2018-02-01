import { Component, Injectable, NgModule } from '@angular/core';
import { Observable as Observable$1 } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { CommonModule } from '@angular/common';
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
            return Observable$1.of(true)
                .map(function (val) { return "" + val; });
        },
        enumerable: true,
        configurable: true
    });
    return BarService;
}());
BarService.decorators = [
    { type: Injectable },
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { BarService, FooComponent, MyLibModule };
//# sourceMappingURL=my-lib.js.map
