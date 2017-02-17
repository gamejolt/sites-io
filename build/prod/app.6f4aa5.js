webpackJsonp([5,6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var api_service_1 = __webpack_require__(40);
var Model = (function () {
    function Model(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    Model.create = function (self) {
        // These need to be created dynamically for each model type.
        self.populate = function (rows) {
            var models = [];
            if (rows && Array.isArray(rows) && rows.length) {
                for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                    var row = rows_1[_i];
                    models.push(new self(row));
                }
            }
            return models;
        };
        self.prototype.assign = function (other) {
            // Some times the model constructors add new fields when populating.
            // This way we retain those fields.
            var newObj = new self(other);
            Object.assign(this, newObj);
        };
        Object.assign(self.prototype, Model.prototype);
        return self;
    };
    /**
     * You can call this after an API call that created a model.
     * Will handle the error response and return the newly created model.
     */
    Model.processCreate = function (response, field) {
        if (response.success && response[field]) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    };
    /**
     * You can call this after an API call that updated the model.
     * Will pull in the new values for the model as well as handling the error response.
     */
    Model.prototype.processUpdate = function (response, field) {
        if (response.success && response[field]) {
            this.assign(response[field]);
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    };
    /**
     * You can call this after an API call that removed the model.
     * Will handle error codes.
     */
    Model.prototype.processRemove = function (response) {
        if (response.success) {
            this._removed = true;
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    };
    Model.prototype.$_save = function (url, field, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Keep track of progress within the model.
                        if (!options.progress) {
                            options.progress = function (event) { return _this._progress = event; };
                        }
                        return [4 /*yield*/, api_service_1.Api.sendRequest(url, this, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.processUpdate(response, field)];
                }
            });
        });
    };
    Model.prototype.$_remove = function (url, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_service_1.Api.sendRequest(url, {}, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.processRemove(response)];
                }
            });
        });
    };
    return Model;
}());
exports.Model = Model;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksZ0JBQWdCLFFBQVE7QUFDNUIsSUFBSSxTQUFTLFlBQVk7SUFDckIsU0FBUyxNQUFNLE1BQU07UUFDakIsSUFBSSxNQUFNO1lBQ04sT0FBTyxPQUFPLE1BQU07OztJQUc1QixNQUFNLFNBQVMsVUFBVSxNQUFNOztRQUUzQixLQUFLLFdBQVcsVUFBVSxNQUFNO1lBQzVCLElBQUksU0FBUztZQUNiLElBQUksUUFBUSxNQUFNLFFBQVEsU0FBUyxLQUFLLFFBQVE7Z0JBQzVDLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxNQUFNLEtBQUssT0FBTyxRQUFRLE1BQU07b0JBQ3RELElBQUksTUFBTSxPQUFPO29CQUNqQixPQUFPLEtBQUssSUFBSSxLQUFLOzs7WUFHN0IsT0FBTzs7UUFFWCxLQUFLLFVBQVUsU0FBUyxVQUFVLE9BQU87OztZQUdyQyxJQUFJLFNBQVMsSUFBSSxLQUFLO1lBQ3RCLE9BQU8sT0FBTyxNQUFNOztRQUV4QixPQUFPLE9BQU8sS0FBSyxXQUFXLE1BQU07UUFDcEMsT0FBTzs7Ozs7O0lBTVgsTUFBTSxnQkFBZ0IsVUFBVSxVQUFVLE9BQU87UUFDN0MsSUFBSSxTQUFTLFdBQVcsU0FBUyxRQUFRO1lBQ3JDLE9BQU8sUUFBUSxRQUFROztRQUUzQixPQUFPLFFBQVEsT0FBTzs7Ozs7O0lBTTFCLE1BQU0sVUFBVSxnQkFBZ0IsVUFBVSxVQUFVLE9BQU87UUFDdkQsSUFBSSxTQUFTLFdBQVcsU0FBUyxRQUFRO1lBQ3JDLEtBQUssT0FBTyxTQUFTO1lBQ3JCLE9BQU8sUUFBUSxRQUFROztRQUUzQixPQUFPLFFBQVEsT0FBTzs7Ozs7O0lBTTFCLE1BQU0sVUFBVSxnQkFBZ0IsVUFBVSxVQUFVO1FBQ2hELElBQUksU0FBUyxTQUFTO1lBQ2xCLEtBQUssV0FBVztZQUNoQixPQUFPLFFBQVEsUUFBUTs7UUFFM0IsT0FBTyxRQUFRLE9BQU87O0lBRTFCLE1BQU0sVUFBVSxTQUFTLFVBQVUsS0FBSyxPQUFPLFNBQVM7UUFDcEQsSUFBSSxZQUFZLEtBQUssR0FBRyxFQUFFLFVBQVU7UUFDcEMsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7WUFDdkQsSUFBSSxRQUFRO1lBQ1osSUFBSTtZQUNKLE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO2dCQUMzQyxRQUFRLEdBQUc7b0JBQ1AsS0FBSzs7d0JBRUQsSUFBSSxDQUFDLFFBQVEsVUFBVTs0QkFDbkIsUUFBUSxXQUFXLFVBQVUsT0FBTyxFQUFFLE9BQU8sTUFBTSxZQUFZOzt3QkFFbkUsT0FBTyxDQUFDLGFBQWEsY0FBYyxJQUFJLFlBQVksS0FBSyxNQUFNO29CQUNsRSxLQUFLO3dCQUNELFdBQVcsR0FBRzt3QkFDZCxPQUFPLENBQUMsY0FBYyxLQUFLLGNBQWMsVUFBVTs7Ozs7SUFLdkUsTUFBTSxVQUFVLFdBQVcsVUFBVSxLQUFLLFNBQVM7UUFDL0MsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7WUFDdkQsSUFBSTtZQUNKLE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO2dCQUMzQyxRQUFRLEdBQUc7b0JBQ1AsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLGNBQWMsSUFBSSxZQUFZLEtBQUssSUFBSTtvQkFDcEUsS0FBSzt3QkFDRCxXQUFXLEdBQUc7d0JBQ2QsT0FBTyxDQUFDLGNBQWMsS0FBSyxjQUFjOzs7OztJQUs3RCxPQUFPOztBQUVYLFFBQVEsUUFBUTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgYXBpX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hcGkvYXBpLnNlcnZpY2VcIik7XG52YXIgTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGVsKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTW9kZWwuY3JlYXRlID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgICAgICAgLy8gVGhlc2UgbmVlZCB0byBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IGZvciBlYWNoIG1vZGVsIHR5cGUuXG4gICAgICAgIHNlbGYucG9wdWxhdGUgPSBmdW5jdGlvbiAocm93cykge1xuICAgICAgICAgICAgdmFyIG1vZGVscyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJvd3MgJiYgQXJyYXkuaXNBcnJheShyb3dzKSAmJiByb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgcm93c18xID0gcm93czsgX2kgPCByb3dzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSByb3dzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbHMucHVzaChuZXcgc2VsZihyb3cpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLnByb3RvdHlwZS5hc3NpZ24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgICAgIC8vIFNvbWUgdGltZXMgdGhlIG1vZGVsIGNvbnN0cnVjdG9ycyBhZGQgbmV3IGZpZWxkcyB3aGVuIHBvcHVsYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIHdheSB3ZSByZXRhaW4gdGhvc2UgZmllbGRzLlxuICAgICAgICAgICAgdmFyIG5ld09iaiA9IG5ldyBzZWxmKG90aGVyKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgbmV3T2JqKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLnByb3RvdHlwZSwgTW9kZWwucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhpcyBhZnRlciBhbiBBUEkgY2FsbCB0aGF0IGNyZWF0ZWQgYSBtb2RlbC5cbiAgICAgKiBXaWxsIGhhbmRsZSB0aGUgZXJyb3IgcmVzcG9uc2UgYW5kIHJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBtb2RlbC5cbiAgICAgKi9cbiAgICBNb2RlbC5wcm9jZXNzQ3JlYXRlID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBmaWVsZCkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyAmJiByZXNwb25zZVtmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhpcyBhZnRlciBhbiBBUEkgY2FsbCB0aGF0IHVwZGF0ZWQgdGhlIG1vZGVsLlxuICAgICAqIFdpbGwgcHVsbCBpbiB0aGUgbmV3IHZhbHVlcyBmb3IgdGhlIG1vZGVsIGFzIHdlbGwgYXMgaGFuZGxpbmcgdGhlIGVycm9yIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIE1vZGVsLnByb3RvdHlwZS5wcm9jZXNzVXBkYXRlID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBmaWVsZCkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyAmJiByZXNwb25zZVtmaWVsZF0pIHtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduKHJlc3BvbnNlW2ZpZWxkXSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBjYWxsIHRoaXMgYWZ0ZXIgYW4gQVBJIGNhbGwgdGhhdCByZW1vdmVkIHRoZSBtb2RlbC5cbiAgICAgKiBXaWxsIGhhbmRsZSBlcnJvciBjb2Rlcy5cbiAgICAgKi9cbiAgICBNb2RlbC5wcm90b3R5cGUucHJvY2Vzc1JlbW92ZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLiRfc2F2ZSA9IGZ1bmN0aW9uICh1cmwsIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiBwcm9ncmVzcyB3aXRoaW4gdGhlIG1vZGVsLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9ncmVzcyA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuX3Byb2dyZXNzID0gZXZlbnQ7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhcGlfc2VydmljZV8xLkFwaS5zZW5kUmVxdWVzdCh1cmwsIHRoaXMsIG9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlLCBmaWVsZCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS4kX3JlbW92ZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgYXBpX3NlcnZpY2VfMS5BcGkuc2VuZFJlcXVlc3QodXJsLCB7fSwgb3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnByb2Nlc3NSZW1vdmUocmVzcG9uc2UpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kZWw7XG59KCkpO1xuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xuIl19

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(210);
var fromEvent_1 = __webpack_require__(214);
__webpack_require__(212);
/**
 * Media query breakpoints.
 */
var SM_WIDTH = 768;
var MD_WIDTH = 992;
var LG_WIDTH = 1200;
/**
 * The HiDPI breakpoint.
 * Any resolution above this breakpoint will be considered HiDPI.
 * http://bjango.com/articles/min-device-pixel-ratio/
 */
var HIDPI_BREAKPOINT = 1.5;
// Set up the `mq` func.
var mq;
var _window = window;
/**
 * Checks a media query breakpoint.
 * https://github.com/paulirish/matchMedia.js/blob/master/matchMedia.js
 */
var matchMedia = _window.matchMedia || _window.msMatchMedia;
if (matchMedia) {
    mq = function (_mq) { return matchMedia(_mq) && matchMedia(_mq).matches || false; };
}
else {
    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia_1 = (_window.styleMedia || _window.media);
    // For those that don't support matchMedium
    if (!styleMedia_1) {
        var style_1 = _window.document.createElement('style');
        var script = _window.document.getElementsByTagName('script')[0];
        style_1.type = 'text/css';
        style_1.id = 'matchmediajs-test';
        script.parentNode.insertBefore(style_1, script);
        // 'style.currentStyle' is used by IE <= 8 and '_window.getComputedStyle' for all other browsers
        var info_1 = ('getComputedStyle' in _window) && _window.getComputedStyle(style_1, null) || style_1.currentStyle;
        styleMedia_1 = {
            matchMedium: function (media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style_1.styleSheet) {
                    style_1.styleSheet.cssText = text;
                }
                else {
                    style_1.textContent = text;
                }
                // Test if media query is true or false
                return info_1.width === '1px';
            }
        };
    }
    mq = function (_mq) { return styleMedia_1.matchMedium(_mq || 'all') || false; };
}
var Screen = (function () {
    function Screen() {
    }
    /**
     * Sets the Screen's context.
     */
    Screen.setContext = function (element) {
        if (!element) {
            this.context = null;
        }
        else {
            this.context = element[0];
        }
    };
    /**
     * Sets up a "spy" on the resize event.
     * Will remember to remove the handler when the scope is destroyed.
     */
    Screen.setResizeSpy = function (scope, onResize) {
        if (true) {
            throw new Error("You can only set a resize spy in angular.");
        }
        var resizeChange$ = this.resizeChanges.subscribe(function () { return onResize(); });
        scope.$on('$destroy', function () { return resizeChange$.unsubscribe(); });
    };
    /**
     * Simply recalculates the breakpoint checks.
     * Shouldn't need to call this often.
     */
    Screen.recalculate = function () {
        this._onResize();
    };
    Screen._onResize = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (true) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Get everything for the window first.
                        if (mq('only screen and (max-width: ' + (SM_WIDTH - 1) + 'px)')) {
                            this.isWindowXs = true;
                            this.isWindowSm = false;
                            this.isWindowMd = false;
                            this.isWindowLg = false;
                            this.windowBreakpoint = 'xs';
                        }
                        else if (mq('only screen and (min-width: ' + SM_WIDTH + 'px) and (max-width: ' + (MD_WIDTH - 1) + 'px)')) {
                            this.isWindowXs = false;
                            this.isWindowSm = true;
                            this.isWindowMd = false;
                            this.isWindowLg = false;
                            this.windowBreakpoint = 'sm';
                        }
                        else if (mq('only screen and (min-width: ' + MD_WIDTH + 'px) and (max-width: ' + (LG_WIDTH - 1) + 'px)')) {
                            this.isWindowXs = false;
                            this.isWindowSm = false;
                            this.isWindowMd = true;
                            this.isWindowLg = false;
                            this.windowBreakpoint = 'md';
                        }
                        else if (mq('only screen and (min-width: ' + LG_WIDTH + 'px)')) {
                            this.isWindowXs = false;
                            this.isWindowSm = false;
                            this.isWindowMd = false;
                            this.isWindowLg = true;
                            this.windowBreakpoint = 'lg';
                        }
                        if (this.isWindowXs || this.isWindowSm) {
                            this.isWindowMobile = true;
                            this.isWindowDesktop = false;
                        }
                        else {
                            this.isWindowMobile = false;
                            this.isWindowDesktop = true;
                        }
                        this.windowWidth = window.innerWidth > 0 ? window.innerWidth : window['width'];
                        this.windowHeight = window.innerHeight > 0 ? window.innerHeight : window['height'];
                        // Now if we have a Screen context set, let's get settings for that.
                        // Othwerise we simply use the $indow dimensions.
                        if (!this.context) {
                            this.isXs = this.isWindowXs;
                            this.isSm = this.isWindowSm;
                            this.isMd = this.isWindowMd;
                            this.isLg = this.isWindowLg;
                            this.isMobile = this.isWindowMobile;
                            this.isDesktop = this.isWindowDesktop;
                            this.width = this.windowWidth;
                            this.height = this.windowHeight;
                            this.breakpoint = this.windowBreakpoint;
                        }
                        else {
                            // Pull dimensions from the Screen context.
                            // Not sure if media queries include the scrollbar in calculation or not.
                            // inner dimensions seem to not take into account any scrollbars.
                            this.width = this.context.clientWidth;
                            this.height = this.context.clientHeight;
                            if (this.width < SM_WIDTH) {
                                this.isXs = true;
                                this.isSm = false;
                                this.isMd = false;
                                this.isLg = false;
                                this.breakpoint = 'xs';
                            }
                            else if (this.width >= SM_WIDTH && this.width < MD_WIDTH) {
                                this.isXs = false;
                                this.isSm = true;
                                this.isMd = false;
                                this.isLg = false;
                                this.breakpoint = 'sm';
                            }
                            else if (this.width >= MD_WIDTH && this.width < LG_WIDTH) {
                                this.isXs = false;
                                this.isSm = false;
                                this.isMd = true;
                                this.isLg = false;
                                this.breakpoint = 'md';
                            }
                            else if (this.width >= LG_WIDTH) {
                                this.isXs = false;
                                this.isSm = false;
                                this.isMd = false;
                                this.isLg = true;
                                this.breakpoint = 'lg';
                            }
                            if (this.isXs || this.isSm) {
                                this.isMobile = true;
                                this.isDesktop = false;
                            }
                            else {
                                this.isMobile = false;
                                this.isDesktop = true;
                            }
                        }
                        // Emit every time we resize.
                        this.resizeChanges.next();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Screen;
}());
/**
 * The actual width of the browser/screen context.
 * Either in actual pixels, or device pixels if we can.
 */
Screen.width = 0;
Screen.windowWidth = 0;
/**
 * The actual height of the browser/screen context.
 * Either in actual pixels, or device pixels if we can.
 */
Screen.height = 0;
Screen.windowHeight = 0;
/**
 * The breakpoint states.
*/
Screen.isXs = false;
Screen.isSm = false;
Screen.isMd = true; // md is the default true state.
Screen.isLg = false;
Screen.breakpoint = 'md';
Screen.isWindowXs = Screen.isXs;
Screen.isWindowSm = Screen.isSm;
Screen.isWindowMd = Screen.isMd;
Screen.isWindowLg = Screen.isLg;
Screen.windowBreakpoint = 'md';
/**
 * Just some silly helpers.
 */
Screen.isMobile = false;
Screen.isDesktop = true; // Desktop is default true state.
Screen.isWindowMobile = Screen.isMobile;
Screen.isWindowDesktop = Screen.isDesktop;
/**
 * The context that the Screen's dimensions are based on.
 * If null we will just copy over the values of the "window" variants.
 */
Screen.context = null;
/**
 * If it's Retina/HiDPI or not.
 */
Screen.isHiDpi = mq('only screen and (-webkit-min-device-pixel-ratio: ' + HIDPI_BREAKPOINT + '), only screen and (min--moz-device-pixel-ratio: ' + HIDPI_BREAKPOINT + '), only screen and (-o-min-device-pixel-ratio: ' + HIDPI_BREAKPOINT + ' / 1), only screen and (min-resolution: ' + HIDPI_BREAKPOINT + 'dppx), only screen and (min-resolution: ' + (HIDPI_BREAKPOINT * 96) + 'dpi)');
Screen.resizeChanges = new Subject_1.Subject();
exports.Screen = Screen;
// Check the breakpoints on app load.
Screen._onResize();
/**
 * This is used internally to check things every time window resizes.
 * We debounce this and afterwards fire the resizeChanges for everyone else.
 */
fromEvent_1.fromEvent(window, 'resize')
    .debounceTime(250)
    .subscribe(function () { return Screen._onResize(); });

//# sourceMappingURL=data:application/json;base64,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TztBQUMzQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcbnZhciBmcm9tRXZlbnRfMSA9IHJlcXVpcmUoXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCIpO1xucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZVwiKTtcbi8qKlxuICogTWVkaWEgcXVlcnkgYnJlYWtwb2ludHMuXG4gKi9cbnZhciBTTV9XSURUSCA9IDc2ODtcbnZhciBNRF9XSURUSCA9IDk5MjtcbnZhciBMR19XSURUSCA9IDEyMDA7XG4vKipcbiAqIFRoZSBIaURQSSBicmVha3BvaW50LlxuICogQW55IHJlc29sdXRpb24gYWJvdmUgdGhpcyBicmVha3BvaW50IHdpbGwgYmUgY29uc2lkZXJlZCBIaURQSS5cbiAqIGh0dHA6Ly9iamFuZ28uY29tL2FydGljbGVzL21pbi1kZXZpY2UtcGl4ZWwtcmF0aW8vXG4gKi9cbnZhciBISURQSV9CUkVBS1BPSU5UID0gMS41O1xuLy8gU2V0IHVwIHRoZSBgbXFgIGZ1bmMuXG52YXIgbXE7XG52YXIgX3dpbmRvdyA9IHdpbmRvdztcbi8qKlxuICogQ2hlY2tzIGEgbWVkaWEgcXVlcnkgYnJlYWtwb2ludC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsaXJpc2gvbWF0Y2hNZWRpYS5qcy9ibG9iL21hc3Rlci9tYXRjaE1lZGlhLmpzXG4gKi9cbnZhciBtYXRjaE1lZGlhID0gX3dpbmRvdy5tYXRjaE1lZGlhIHx8IF93aW5kb3cubXNNYXRjaE1lZGlhO1xuaWYgKG1hdGNoTWVkaWEpIHtcbiAgICBtcSA9IGZ1bmN0aW9uIChfbXEpIHsgcmV0dXJuIG1hdGNoTWVkaWEoX21xKSAmJiBtYXRjaE1lZGlhKF9tcSkubWF0Y2hlcyB8fCBmYWxzZTsgfTtcbn1cbmVsc2Uge1xuICAgIC8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgbWF0Y2hNZWRpdW0gYXBpIHN1Y2ggYXMgSUUgOSBhbmQgd2Via2l0XG4gICAgdmFyIHN0eWxlTWVkaWFfMSA9IChfd2luZG93LnN0eWxlTWVkaWEgfHwgX3dpbmRvdy5tZWRpYSk7XG4gICAgLy8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxuICAgIGlmICghc3R5bGVNZWRpYV8xKSB7XG4gICAgICAgIHZhciBzdHlsZV8xID0gX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICB2YXIgc2NyaXB0ID0gX3dpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIHN0eWxlXzEudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIHN0eWxlXzEuaWQgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xuICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVfMSwgc2NyaXB0KTtcbiAgICAgICAgLy8gJ3N0eWxlLmN1cnJlbnRTdHlsZScgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnX3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlJyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIHZhciBpbmZvXzEgPSAoJ2dldENvbXB1dGVkU3R5bGUnIGluIF93aW5kb3cpICYmIF93aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdHlsZV8xLCBudWxsKSB8fCBzdHlsZV8xLmN1cnJlbnRTdHlsZTtcbiAgICAgICAgc3R5bGVNZWRpYV8xID0ge1xuICAgICAgICAgICAgbWF0Y2hNZWRpdW06IGZ1bmN0aW9uIChtZWRpYSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJ0BtZWRpYSAnICsgbWVkaWEgKyAneyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH0nO1xuICAgICAgICAgICAgICAgIC8vICdzdHlsZS5zdHlsZVNoZWV0JyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICdzdHlsZS50ZXh0Q29udGVudCcgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZV8xLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVfMS5zdHlsZVNoZWV0LmNzc1RleHQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVfMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmZvXzEud2lkdGggPT09ICcxcHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBtcSA9IGZ1bmN0aW9uIChfbXEpIHsgcmV0dXJuIHN0eWxlTWVkaWFfMS5tYXRjaE1lZGl1bShfbXEgfHwgJ2FsbCcpIHx8IGZhbHNlOyB9O1xufVxudmFyIFNjcmVlbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyZWVuKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBTY3JlZW4ncyBjb250ZXh0LlxuICAgICAqL1xuICAgIFNjcmVlbi5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gZWxlbWVudFswXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIFwic3B5XCIgb24gdGhlIHJlc2l6ZSBldmVudC5cbiAgICAgKiBXaWxsIHJlbWVtYmVyIHRvIHJlbW92ZSB0aGUgaGFuZGxlciB3aGVuIHRoZSBzY29wZSBpcyBkZXN0cm95ZWQuXG4gICAgICovXG4gICAgU2NyZWVuLnNldFJlc2l6ZVNweSA9IGZ1bmN0aW9uIChzY29wZSwgb25SZXNpemUpIHtcbiAgICAgICAgaWYgKCFHSl9JU19BTkdVTEFSKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuIG9ubHkgc2V0IGEgcmVzaXplIHNweSBpbiBhbmd1bGFyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzaXplQ2hhbmdlJCA9IHRoaXMucmVzaXplQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gb25SZXNpemUoKTsgfSk7XG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNpemVDaGFuZ2UkLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2ltcGx5IHJlY2FsY3VsYXRlcyB0aGUgYnJlYWtwb2ludCBjaGVja3MuXG4gICAgICogU2hvdWxkbid0IG5lZWQgdG8gY2FsbCB0aGlzIG9mdGVuLlxuICAgICAqL1xuICAgIFNjcmVlbi5yZWNhbGN1bGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICB9O1xuICAgIFNjcmVlbi5fb25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUdKX0lTX0FOR1VMQVIpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yZXNvbHZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBldmVyeXRoaW5nIGZvciB0aGUgd2luZG93IGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1xKCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJyArIChTTV9XSURUSCAtIDEpICsgJ3B4KScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd1hzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93U20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93TWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93TGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd0JyZWFrcG9pbnQgPSAneHMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobXEoJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAnICsgU01fV0lEVEggKyAncHgpIGFuZCAobWF4LXdpZHRoOiAnICsgKE1EX1dJRFRIIC0gMSkgKyAncHgpJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93WHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93U20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dNZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dMZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93QnJlYWtwb2ludCA9ICdzbSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtcSgnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICcgKyBNRF9XSURUSCArICdweCkgYW5kIChtYXgtd2lkdGg6ICcgKyAoTEdfV0lEVEggLSAxKSArICdweCknKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dYcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dTbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dNZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd0xnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5kb3dCcmVha3BvaW50ID0gJ21kJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1xKCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJyArIExHX1dJRFRIICsgJ3B4KScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd1hzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd1NtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd01kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd0xnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd0JyZWFrcG9pbnQgPSAnbGcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNXaW5kb3dYcyB8fCB0aGlzLmlzV2luZG93U20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93TW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2luZG93RGVza3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbmRvd01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5kb3dEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHdpbmRvd1snd2lkdGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID4gMCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvd1snaGVpZ2h0J107XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgaWYgd2UgaGF2ZSBhIFNjcmVlbiBjb250ZXh0IHNldCwgbGV0J3MgZ2V0IHNldHRpbmdzIGZvciB0aGF0LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3Rod2VyaXNlIHdlIHNpbXBseSB1c2UgdGhlICRpbmRvdyBkaW1lbnNpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzWHMgPSB0aGlzLmlzV2luZG93WHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NtID0gdGhpcy5pc1dpbmRvd1NtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNZCA9IHRoaXMuaXNXaW5kb3dNZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGcgPSB0aGlzLmlzV2luZG93TGc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuaXNXaW5kb3dNb2JpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLmlzV2luZG93RGVza3RvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IHRoaXMud2luZG93QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1bGwgZGltZW5zaW9ucyBmcm9tIHRoZSBTY3JlZW4gY29udGV4dC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3Qgc3VyZSBpZiBtZWRpYSBxdWVyaWVzIGluY2x1ZGUgdGhlIHNjcm9sbGJhciBpbiBjYWxjdWxhdGlvbiBvciBub3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5uZXIgZGltZW5zaW9ucyBzZWVtIHRvIG5vdCB0YWtlIGludG8gYWNjb3VudCBhbnkgc2Nyb2xsYmFycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jb250ZXh0LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb250ZXh0LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IFNNX1dJRFRIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNYcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9ICd4cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPj0gU01fV0lEVEggJiYgdGhpcy53aWR0aCA8IE1EX1dJRFRIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNYcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9ICdzbSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPj0gTURfV0lEVEggJiYgdGhpcy53aWR0aCA8IExHX1dJRFRIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNYcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9ICdtZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPj0gTEdfV0lEVEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1hzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gJ2xnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNYcyB8fCB0aGlzLmlzU20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbWl0IGV2ZXJ5IHRpbWUgd2UgcmVzaXplLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDaGFuZ2VzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NyZWVuO1xufSgpKTtcbi8qKlxuICogVGhlIGFjdHVhbCB3aWR0aCBvZiB0aGUgYnJvd3Nlci9zY3JlZW4gY29udGV4dC5cbiAqIEVpdGhlciBpbiBhY3R1YWwgcGl4ZWxzLCBvciBkZXZpY2UgcGl4ZWxzIGlmIHdlIGNhbi5cbiAqL1xuU2NyZWVuLndpZHRoID0gMDtcblNjcmVlbi53aW5kb3dXaWR0aCA9IDA7XG4vKipcbiAqIFRoZSBhY3R1YWwgaGVpZ2h0IG9mIHRoZSBicm93c2VyL3NjcmVlbiBjb250ZXh0LlxuICogRWl0aGVyIGluIGFjdHVhbCBwaXhlbHMsIG9yIGRldmljZSBwaXhlbHMgaWYgd2UgY2FuLlxuICovXG5TY3JlZW4uaGVpZ2h0ID0gMDtcblNjcmVlbi53aW5kb3dIZWlnaHQgPSAwO1xuLyoqXG4gKiBUaGUgYnJlYWtwb2ludCBzdGF0ZXMuXG4qL1xuU2NyZWVuLmlzWHMgPSBmYWxzZTtcblNjcmVlbi5pc1NtID0gZmFsc2U7XG5TY3JlZW4uaXNNZCA9IHRydWU7IC8vIG1kIGlzIHRoZSBkZWZhdWx0IHRydWUgc3RhdGUuXG5TY3JlZW4uaXNMZyA9IGZhbHNlO1xuU2NyZWVuLmJyZWFrcG9pbnQgPSAnbWQnO1xuU2NyZWVuLmlzV2luZG93WHMgPSBTY3JlZW4uaXNYcztcblNjcmVlbi5pc1dpbmRvd1NtID0gU2NyZWVuLmlzU207XG5TY3JlZW4uaXNXaW5kb3dNZCA9IFNjcmVlbi5pc01kO1xuU2NyZWVuLmlzV2luZG93TGcgPSBTY3JlZW4uaXNMZztcblNjcmVlbi53aW5kb3dCcmVha3BvaW50ID0gJ21kJztcbi8qKlxuICogSnVzdCBzb21lIHNpbGx5IGhlbHBlcnMuXG4gKi9cblNjcmVlbi5pc01vYmlsZSA9IGZhbHNlO1xuU2NyZWVuLmlzRGVza3RvcCA9IHRydWU7IC8vIERlc2t0b3AgaXMgZGVmYXVsdCB0cnVlIHN0YXRlLlxuU2NyZWVuLmlzV2luZG93TW9iaWxlID0gU2NyZWVuLmlzTW9iaWxlO1xuU2NyZWVuLmlzV2luZG93RGVza3RvcCA9IFNjcmVlbi5pc0Rlc2t0b3A7XG4vKipcbiAqIFRoZSBjb250ZXh0IHRoYXQgdGhlIFNjcmVlbidzIGRpbWVuc2lvbnMgYXJlIGJhc2VkIG9uLlxuICogSWYgbnVsbCB3ZSB3aWxsIGp1c3QgY29weSBvdmVyIHRoZSB2YWx1ZXMgb2YgdGhlIFwid2luZG93XCIgdmFyaWFudHMuXG4gKi9cblNjcmVlbi5jb250ZXh0ID0gbnVsbDtcbi8qKlxuICogSWYgaXQncyBSZXRpbmEvSGlEUEkgb3Igbm90LlxuICovXG5TY3JlZW4uaXNIaURwaSA9IG1xKCdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogJyArIEhJRFBJX0JSRUFLUE9JTlQgKyAnKSwgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86ICcgKyBISURQSV9CUkVBS1BPSU5UICsgJyksIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogJyArIEhJRFBJX0JSRUFLUE9JTlQgKyAnIC8gMSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246ICcgKyBISURQSV9CUkVBS1BPSU5UICsgJ2RwcHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAnICsgKEhJRFBJX0JSRUFLUE9JTlQgKiA5NikgKyAnZHBpKScpO1xuU2NyZWVuLnJlc2l6ZUNoYW5nZXMgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcbmV4cG9ydHMuU2NyZWVuID0gU2NyZWVuO1xuLy8gQ2hlY2sgdGhlIGJyZWFrcG9pbnRzIG9uIGFwcCBsb2FkLlxuU2NyZWVuLl9vblJlc2l6ZSgpO1xuLyoqXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSB0byBjaGVjayB0aGluZ3MgZXZlcnkgdGltZSB3aW5kb3cgcmVzaXplcy5cbiAqIFdlIGRlYm91bmNlIHRoaXMgYW5kIGFmdGVyd2FyZHMgZmlyZSB0aGUgcmVzaXplQ2hhbmdlcyBmb3IgZXZlcnlvbmUgZWxzZS5cbiAqL1xuZnJvbUV2ZW50XzEuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgLmRlYm91bmNlVGltZSgyNTApXG4gICAgLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBTY3JlZW4uX29uUmVzaXplKCk7IH0pO1xuIl19

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
function importContext(r) {
    var map = {};
    r.keys().forEach(function (key) { return map[key] = r(key); });
    return map;
}
exports.importContext = importContext;
function getProvider(token) {
    var injector = angular.element(window.document).injector();
    if (!injector) {
        throw new Error('Injector is not yet bootstrapped into the app.');
    }
    return injector.get(token);
}
exports.getProvider = getProvider;
function hasProvider(token) {
    var injector = angular.element(window.document).injector();
    if (!injector) {
        throw new Error('Injector is not yet bootstrapped into the app.');
    }
    return injector.has(token);
}
exports.hasProvider = hasProvider;
/**
 * Can be used to wrap a require.ensure callback in $ocLazyLoad.
 */
function lazyload(func) {
    var _this = this;
    return new Promise(function (resolve) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var $ocLazyLoad;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    $ocLazyLoad = getProvider('$ocLazyLoad');
                    $ocLazyLoad.toggleWatch(true);
                    return [4 /*yield*/, Promise.resolve(func())];
                case 1:
                    _a.sent();
                    $ocLazyLoad.toggleWatch(false);
                    return [4 /*yield*/, $ocLazyLoad.inject()];
                case 2:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.lazyload = lazyload;
// await require.ensure( [], () => lazyload( () =>
// {
// 	require( 'angular-hammer' );
// } ), 'hammer' );
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        var docHead = window.document.head || window.document.getElementsByTagName('head')[0];
        docHead.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.src = src;
    });
}
exports.loadScript = loadScript;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLFNBQVMsY0FBYyxHQUFHO0lBQ3RCLElBQUksTUFBTTtJQUNWLEVBQUUsT0FBTyxRQUFRLFVBQVUsS0FBSyxFQUFFLE9BQU8sSUFBSSxPQUFPLEVBQUU7SUFDdEQsT0FBTzs7QUFFWCxRQUFRLGdCQUFnQjtBQUN4QixTQUFTLFlBQVksT0FBTztJQUN4QixJQUFJLFdBQVcsUUFBUSxRQUFRLE9BQU8sVUFBVTtJQUNoRCxJQUFJLENBQUMsVUFBVTtRQUNYLE1BQU0sSUFBSSxNQUFNOztJQUVwQixPQUFPLFNBQVMsSUFBSTs7QUFFeEIsUUFBUSxjQUFjO0FBQ3RCLFNBQVMsWUFBWSxPQUFPO0lBQ3hCLElBQUksV0FBVyxRQUFRLFFBQVEsT0FBTyxVQUFVO0lBQ2hELElBQUksQ0FBQyxVQUFVO1FBQ1gsTUFBTSxJQUFJLE1BQU07O0lBRXBCLE9BQU8sU0FBUyxJQUFJOztBQUV4QixRQUFRLGNBQWM7Ozs7QUFJdEIsU0FBUyxTQUFTLE1BQU07SUFDcEIsSUFBSSxRQUFRO0lBQ1osT0FBTyxJQUFJLFFBQVEsVUFBVSxTQUFTLEVBQUUsT0FBTyxRQUFRLFVBQVUsT0FBTyxLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7UUFDaEcsSUFBSTtRQUNKLE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO1lBQzNDLFFBQVEsR0FBRztnQkFDUCxLQUFLO29CQUNELGNBQWMsWUFBWTtvQkFDMUIsWUFBWSxZQUFZO29CQUN4QixPQUFPLENBQUMsYUFBYSxRQUFRLFFBQVE7Z0JBQ3pDLEtBQUs7b0JBQ0QsR0FBRztvQkFDSCxZQUFZLFlBQVk7b0JBQ3hCLE9BQU8sQ0FBQyxhQUFhLFlBQVk7Z0JBQ3JDLEtBQUs7b0JBQ0QsR0FBRztvQkFDSDtvQkFDQSxPQUFPLENBQUM7Ozs7O0FBSzVCLFFBQVEsV0FBVzs7Ozs7QUFLbkIsU0FBUyxXQUFXLEtBQUs7SUFDckIsT0FBTyxJQUFJLFFBQVEsVUFBVSxTQUFTLFFBQVE7UUFDMUMsSUFBSSxTQUFTLE9BQU8sU0FBUyxjQUFjO1FBQzNDLE9BQU8sT0FBTztRQUNkLE9BQU8sUUFBUTtRQUNmLElBQUksVUFBVSxPQUFPLFNBQVMsUUFBUSxPQUFPLFNBQVMscUJBQXFCLFFBQVE7UUFDbkYsUUFBUSxZQUFZO1FBQ3BCLE9BQU8sU0FBUztRQUNoQixPQUFPLFVBQVU7UUFDakIsT0FBTyxNQUFNOzs7QUFHckIsUUFBUSxhQUFhO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmZ1bmN0aW9uIGltcG9ydENvbnRleHQocikge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICByLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG1hcFtrZXldID0gcihrZXkpOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufVxuZXhwb3J0cy5pbXBvcnRDb250ZXh0ID0gaW1wb3J0Q29udGV4dDtcbmZ1bmN0aW9uIGdldFByb3ZpZGVyKHRva2VuKSB7XG4gICAgdmFyIGluamVjdG9yID0gYW5ndWxhci5lbGVtZW50KHdpbmRvdy5kb2N1bWVudCkuaW5qZWN0b3IoKTtcbiAgICBpZiAoIWluamVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5qZWN0b3IgaXMgbm90IHlldCBib290c3RyYXBwZWQgaW50byB0aGUgYXBwLicpO1xuICAgIH1cbiAgICByZXR1cm4gaW5qZWN0b3IuZ2V0KHRva2VuKTtcbn1cbmV4cG9ydHMuZ2V0UHJvdmlkZXIgPSBnZXRQcm92aWRlcjtcbmZ1bmN0aW9uIGhhc1Byb3ZpZGVyKHRva2VuKSB7XG4gICAgdmFyIGluamVjdG9yID0gYW5ndWxhci5lbGVtZW50KHdpbmRvdy5kb2N1bWVudCkuaW5qZWN0b3IoKTtcbiAgICBpZiAoIWluamVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5qZWN0b3IgaXMgbm90IHlldCBib290c3RyYXBwZWQgaW50byB0aGUgYXBwLicpO1xuICAgIH1cbiAgICByZXR1cm4gaW5qZWN0b3IuaGFzKHRva2VuKTtcbn1cbmV4cG9ydHMuaGFzUHJvdmlkZXIgPSBoYXNQcm92aWRlcjtcbi8qKlxuICogQ2FuIGJlIHVzZWQgdG8gd3JhcCBhIHJlcXVpcmUuZW5zdXJlIGNhbGxiYWNrIGluICRvY0xhenlMb2FkLlxuICovXG5mdW5jdGlvbiBsYXp5bG9hZChmdW5jKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG9jTGF6eUxvYWQ7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgJG9jTGF6eUxvYWQgPSBnZXRQcm92aWRlcignJG9jTGF6eUxvYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG9jTGF6eUxvYWQudG9nZ2xlV2F0Y2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmVzb2x2ZShmdW5jKCkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJG9jTGF6eUxvYWQudG9nZ2xlV2F0Y2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCAkb2NMYXp5TG9hZC5pbmplY3QoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSk7XG59XG5leHBvcnRzLmxhenlsb2FkID0gbGF6eWxvYWQ7XG4vLyBhd2FpdCByZXF1aXJlLmVuc3VyZSggW10sICgpID0+IGxhenlsb2FkKCAoKSA9PlxuLy8ge1xuLy8gXHRyZXF1aXJlKCAnYW5ndWxhci1oYW1tZXInICk7XG4vLyB9ICksICdoYW1tZXInICk7XG5mdW5jdGlvbiBsb2FkU2NyaXB0KHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHZhciBkb2NIZWFkID0gd2luZG93LmRvY3VtZW50LmhlYWQgfHwgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGRvY0hlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkU2NyaXB0ID0gbG9hZFNjcmlwdDtcbiJdfQ==

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vue = __webpack_require__(2);
var WidgetCompilerWidget = (function () {
    function WidgetCompilerWidget() {
    }
    WidgetCompilerWidget.prototype.wrapComponent = function (component, propGetter) {
        // Not sure if there is a way to do this without instantiating a new
        // component.
        var options = new component().$options;
        return new Vue({
            computed: {
                reactiveProps: function () {
                    return propGetter();
                },
            },
            render: function (h) {
                return h(options, {
                    props: this.reactiveProps,
                });
            },
        });
    };
    return WidgetCompilerWidget;
}());
exports.WidgetCompilerWidget = WidgetCompilerWidget;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksd0JBQXdCLFlBQVk7SUFDcEMsU0FBUyx1QkFBdUI7O0lBRWhDLHFCQUFxQixVQUFVLGdCQUFnQixVQUFVLFdBQVcsWUFBWTs7O1FBRzVFLElBQUksVUFBVSxJQUFJLFlBQVk7UUFDOUIsT0FBTyxJQUFJLElBQUk7WUFDWCxVQUFVO2dCQUNOLGVBQWUsWUFBWTtvQkFDdkIsT0FBTzs7O1lBR2YsUUFBUSxVQUFVLEdBQUc7Z0JBQ2pCLE9BQU8sRUFBRSxTQUFTO29CQUNkLE9BQU8sS0FBSzs7Ozs7SUFLNUIsT0FBTzs7QUFFWCxRQUFRLHVCQUF1QjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgV2lkZ2V0Q29tcGlsZXJXaWRnZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldENvbXBpbGVyV2lkZ2V0KCkge1xuICAgIH1cbiAgICBXaWRnZXRDb21waWxlcldpZGdldC5wcm90b3R5cGUud3JhcENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQsIHByb3BHZXR0ZXIpIHtcbiAgICAgICAgLy8gTm90IHN1cmUgaWYgdGhlcmUgaXMgYSB3YXkgdG8gZG8gdGhpcyB3aXRob3V0IGluc3RhbnRpYXRpbmcgYSBuZXdcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBjb21wb25lbnQoKS4kb3B0aW9ucztcbiAgICAgICAgcmV0dXJuIG5ldyBWdWUoe1xuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICByZWFjdGl2ZVByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wR2V0dGVyKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGgob3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBwcm9wczogdGhpcy5yZWFjdGl2ZVByb3BzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0Q29tcGlsZXJXaWRnZXQ7XG59KCkpO1xuZXhwb3J0cy5XaWRnZXRDb21waWxlcldpZGdldCA9IFdpZGdldENvbXBpbGVyV2lkZ2V0O1xuIl19

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var environment_service_1 = __webpack_require__(48);
var utils_1 = __webpack_require__(25);
var payload_service_1 = __webpack_require__(112);
var Api = (function () {
    function Api() {
    }
    Api.sendRequest = function (uri, postData, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sanitizedPostData, _i, _a, key, value, valueType, method, url, requestPromise;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = tslib_1.__assign({}, {
                            ignoreLoadingBar: false,
                            processPayload: true,
                            withCredentials: true,
                            sanitizeComplexData: true,
                            allowComplexData: [],
                            detach: false,
                        }, options);
                        // Set up the detachment options if detach is set.
                        if (options.detach) {
                            options.ignoreLoadingBar = true;
                            options.ignorePayloadUser = true;
                            options.ignorePayloadVersion = true;
                            options.noErrorRedirect = true;
                        }
                        sanitizedPostData = undefined;
                        if (postData) {
                            sanitizedPostData = {};
                            for (_i = 0, _a = Object.keys(postData); _i < _a.length; _i++) {
                                key = _a[_i];
                                value = postData[key];
                                valueType = typeof value;
                                if (valueType === 'undefined') {
                                    continue;
                                }
                                // Complex data allows certain known objects to pass through to the server.
                                // It must be set explicitly if you want to send in an object as a value.
                                if (options.sanitizeComplexData) {
                                    if ((options.allowComplexData && options.allowComplexData.indexOf(key) !== -1)
                                        || (valueType !== 'function' && valueType !== 'object' && !Array.isArray(value))) {
                                        sanitizedPostData[key] = value;
                                    }
                                }
                                else {
                                    sanitizedPostData[key] = value;
                                }
                            }
                        }
                        method = sanitizedPostData ? 'POST' : 'GET';
                        url = (options.apiHost || this.apiHost) + (options.apiPath || this.apiPath) + uri;
                        if (false) {
                            requestPromise = this.createRequestAngular(method, url, sanitizedPostData, options);
                        }
                        else if (true) {
                            requestPromise = this.createRequestVue(method, url, sanitizedPostData, options);
                        }
                        else {
                            throw new Error('Invalid environment.');
                        }
                        if (!!options.processPayload) return [3 /*break*/, 2];
                        return [4 /*yield*/, requestPromise];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, payload_service_1.Payload.processResponse(requestPromise, options)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    Api.createRequestAngular = function (method, url, data, options) {
        // An upload request.
        if (options.file) {
            var Upload = utils_1.getProvider('Upload');
            // Copy over since we'll modify.
            var _options = tslib_1.__assign({}, options);
            // NOTE: Got rid of this for now since we don't use it from what I know.
            // You can pass in an object of files if you want to upload multiple.
            // Otherwise file should be the single file to upload.
            // For multiple upload, the key should be the name of the form field, the value should be the file.
            // Example: { file: file1, file_other: file2 }
            // if ( !Array.isArray( options.file ) ) {
            // 	_options.fileFormDataName = Object.keys( _options.file );
            // 	_options.file = _.flatten( _.values( _options.file ) );
            // }
            // else {
            // Multi file upload in same form control.
            if (Array.isArray(_options.file) && _options.file.length <= 1) {
                _options.file = _options.file[0];
            }
            // }
            var uploadPromise = Upload.upload({
                method: 'POST',
                url: url,
                data: tslib_1.__assign({}, data, { file: _options.file }),
                withCredentials: _options.withCredentials,
                // Force ignore in upload.
                // We show a form upload progress bar instead.
                ignoreLoadingBar: true,
            });
            // Set up progress events.
            uploadPromise
                .then(null, null, function (event) {
                if (options.progress && event.lengthComputable) {
                    options.progress({
                        current: event.loaded,
                        total: event.total,
                    });
                }
            })
                .then(function () {
                if (options.progress) {
                    options.progress(undefined);
                }
            });
            return uploadPromise;
        }
        return utils_1.getProvider('$http')({
            method: method,
            url: url,
            data: data,
            withCredentials: options.withCredentials,
            ignoreLoadingBar: options.ignoreLoadingBar
        });
    };
    Api.createRequestVue = function (method, url, data, options) {
        if (true) {
            if (options.file) {
                throw new Error("Vue can't upload files yet.");
            }
            var request = __webpack_require__(260);
            var _request = request(method, url).send(data);
            if (options.withCredentials) {
                _request.withCredentials();
            }
            return _request;
        }
    };
    return Api;
}());
Api.apiHost = environment_service_1.Environment.apiHost;
Api.apiPath = '/site-api';
exports.Api = Api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksd0JBQXdCLFFBQVE7QUFDcEMsSUFBSSxVQUFVLFFBQVE7QUFDdEIsSUFBSSxvQkFBb0IsUUFBUTtBQUNoQyxJQUFJLE9BQU8sWUFBWTtJQUNuQixTQUFTLE1BQU07O0lBRWYsSUFBSSxjQUFjLFVBQVUsS0FBSyxVQUFVLFNBQVM7UUFDaEQsSUFBSSxZQUFZLEtBQUssR0FBRyxFQUFFLFVBQVU7UUFDcEMsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7WUFDdkQsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLEtBQUssT0FBTyxXQUFXLFFBQVEsS0FBSztZQUNuRSxPQUFPLFFBQVEsWUFBWSxNQUFNLFVBQVUsSUFBSTtnQkFDM0MsUUFBUSxHQUFHO29CQUNQLEtBQUs7d0JBQ0QsVUFBVSxRQUFRLFNBQVMsSUFBSTs0QkFDM0Isa0JBQWtCOzRCQUNsQixnQkFBZ0I7NEJBQ2hCLGlCQUFpQjs0QkFDakIscUJBQXFCOzRCQUNyQixrQkFBa0I7NEJBQ2xCLFFBQVE7MkJBQ1Q7O3dCQUVILElBQUksUUFBUSxRQUFROzRCQUNoQixRQUFRLG1CQUFtQjs0QkFDM0IsUUFBUSxvQkFBb0I7NEJBQzVCLFFBQVEsdUJBQXVCOzRCQUMvQixRQUFRLGtCQUFrQjs7d0JBRTlCLG9CQUFvQjt3QkFDcEIsSUFBSSxVQUFVOzRCQUNWLG9CQUFvQjs0QkFDcEIsS0FBSyxLQUFLLEdBQUcsS0FBSyxPQUFPLEtBQUssV0FBVyxLQUFLLEdBQUcsUUFBUSxNQUFNO2dDQUMzRCxNQUFNLEdBQUc7Z0NBQ1QsUUFBUSxTQUFTO2dDQUNqQixZQUFZLE9BQU87Z0NBQ25CLElBQUksY0FBYyxhQUFhO29DQUMzQjs7OztnQ0FJSixJQUFJLFFBQVEscUJBQXFCO29DQUM3QixJQUFJLENBQUMsUUFBUSxvQkFBb0IsUUFBUSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7NENBQ3BFLGNBQWMsY0FBYyxjQUFjLFlBQVksQ0FBQyxNQUFNLFFBQVEsU0FBUzt3Q0FDbEYsa0JBQWtCLE9BQU87OztxQ0FHNUI7b0NBQ0Qsa0JBQWtCLE9BQU87Ozs7d0JBSXJDLFNBQVMsb0JBQW9CLFNBQVM7d0JBQ3RDLE1BQU0sQ0FBQyxRQUFRLFdBQVcsS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFdBQVc7d0JBQzlFLElBQUksZUFBZTs0QkFDZixpQkFBaUIsS0FBSyxxQkFBcUIsUUFBUSxLQUFLLG1CQUFtQjs7NkJBRTFFLElBQUksV0FBVzs0QkFDaEIsaUJBQWlCLEtBQUssaUJBQWlCLFFBQVEsS0FBSyxtQkFBbUI7OzZCQUV0RTs0QkFDRCxNQUFNLElBQUksTUFBTTs7d0JBRXBCLElBQUksQ0FBQyxDQUFDLFFBQVEsZ0JBQWdCLE9BQU8sQ0FBQyxhQUFhO3dCQUNuRCxPQUFPLENBQUMsYUFBYTtvQkFDekIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEdBQUc7b0JBQ2pDLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxrQkFBa0IsUUFBUSxnQkFBZ0IsZ0JBQWdCO29CQUN2RixLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsR0FBRzs7Ozs7SUFLakQsSUFBSSx1QkFBdUIsVUFBVSxRQUFRLEtBQUssTUFBTSxTQUFTOztRQUU3RCxJQUFJLFFBQVEsTUFBTTtZQUNkLElBQUksU0FBUyxRQUFRLFlBQVk7O1lBRWpDLElBQUksV0FBVyxRQUFRLFNBQVMsSUFBSTs7Ozs7Ozs7Ozs7O1lBWXBDLElBQUksTUFBTSxRQUFRLFNBQVMsU0FBUyxTQUFTLEtBQUssVUFBVSxHQUFHO2dCQUMzRCxTQUFTLE9BQU8sU0FBUyxLQUFLOzs7WUFHbEMsSUFBSSxnQkFBZ0IsT0FBTyxPQUFPO2dCQUM5QixRQUFRO2dCQUNSLEtBQUs7Z0JBQ0wsTUFBTSxRQUFRLFNBQVMsSUFBSSxNQUFNLEVBQUUsTUFBTSxTQUFTO2dCQUNsRCxpQkFBaUIsU0FBUzs7O2dCQUcxQixrQkFBa0I7OztZQUd0QjtpQkFDSyxLQUFLLE1BQU0sTUFBTSxVQUFVLE9BQU87Z0JBQ25DLElBQUksUUFBUSxZQUFZLE1BQU0sa0JBQWtCO29CQUM1QyxRQUFRLFNBQVM7d0JBQ2IsU0FBUyxNQUFNO3dCQUNmLE9BQU8sTUFBTTs7OztpQkFJcEIsS0FBSyxZQUFZO2dCQUNsQixJQUFJLFFBQVEsVUFBVTtvQkFDbEIsUUFBUSxTQUFTOzs7WUFHekIsT0FBTzs7UUFFWCxPQUFPLFFBQVEsWUFBWSxTQUFTO1lBQ2hDLFFBQVE7WUFDUixLQUFLO1lBQ0wsTUFBTTtZQUNOLGlCQUFpQixRQUFRO1lBQ3pCLGtCQUFrQixRQUFROzs7SUFHbEMsSUFBSSxtQkFBbUIsVUFBVSxRQUFRLEtBQUssTUFBTSxTQUFTO1FBQ3pELElBQUksV0FBVztZQUNYLElBQUksUUFBUSxNQUFNO2dCQUNkLE1BQU0sSUFBSSxNQUFNOztZQUVwQixJQUFJLFVBQVUsUUFBUTtZQUN0QixJQUFJLFdBQVcsUUFBUSxRQUFRLEtBQUssS0FBSztZQUN6QyxJQUFJLFFBQVEsaUJBQWlCO2dCQUN6QixTQUFTOztZQUViLE9BQU87OztJQUdmLE9BQU87O0FBRVgsSUFBSSxVQUFVLHNCQUFzQixZQUFZO0FBQ2hELElBQUksVUFBVTtBQUNkLFFBQVEsTUFBTTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBlbnZpcm9ubWVudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuc2VydmljZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xudmFyIHBheWxvYWRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3BheWxvYWQvcGF5bG9hZC1zZXJ2aWNlXCIpO1xudmFyIEFwaSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpKCkge1xuICAgIH1cbiAgICBBcGkuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiAodXJpLCBwb3N0RGF0YSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzYW5pdGl6ZWRQb3N0RGF0YSwgX2ksIF9hLCBrZXksIHZhbHVlLCB2YWx1ZVR5cGUsIG1ldGhvZCwgdXJsLCByZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVMb2FkaW5nQmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUGF5bG9hZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVDb21wbGV4RGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NvbXBsZXhEYXRhOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdXAgdGhlIGRldGFjaG1lbnQgb3B0aW9ucyBpZiBkZXRhY2ggaXMgc2V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGV0YWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5pZ25vcmVMb2FkaW5nQmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmlnbm9yZVBheWxvYWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmlnbm9yZVBheWxvYWRWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm5vRXJyb3JSZWRpcmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZWRQb3N0RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplZFBvc3REYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocG9zdERhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcG9zdERhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGxleCBkYXRhIGFsbG93cyBjZXJ0YWluIGtub3duIG9iamVjdHMgdG8gcGFzcyB0aHJvdWdoIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IG11c3QgYmUgc2V0IGV4cGxpY2l0bHkgaWYgeW91IHdhbnQgdG8gc2VuZCBpbiBhbiBvYmplY3QgYXMgYSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2FuaXRpemVDb21wbGV4RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvcHRpb25zLmFsbG93Q29tcGxleERhdGEgJiYgb3B0aW9ucy5hbGxvd0NvbXBsZXhEYXRhLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHZhbHVlVHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZVR5cGUgIT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZWRQb3N0RGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZWRQb3N0RGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBzYW5pdGl6ZWRQb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gKG9wdGlvbnMuYXBpSG9zdCB8fCB0aGlzLmFwaUhvc3QpICsgKG9wdGlvbnMuYXBpUGF0aCB8fCB0aGlzLmFwaVBhdGgpICsgdXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdKX0lTX0FOR1VMQVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0UHJvbWlzZSA9IHRoaXMuY3JlYXRlUmVxdWVzdEFuZ3VsYXIobWV0aG9kLCB1cmwsIHNhbml0aXplZFBvc3REYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEdKX0lTX1ZVRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RQcm9taXNlID0gdGhpcy5jcmVhdGVSZXF1ZXN0VnVlKG1ldGhvZCwgdXJsLCBzYW5pdGl6ZWRQb3N0RGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW52aXJvbm1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFvcHRpb25zLnByb2Nlc3NQYXlsb2FkKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RQcm9taXNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBwYXlsb2FkX3NlcnZpY2VfMS5QYXlsb2FkLnByb2Nlc3NSZXNwb25zZShyZXF1ZXN0UHJvbWlzZSwgb3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYi5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwaS5jcmVhdGVSZXF1ZXN0QW5ndWxhciA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgICAgICAvLyBBbiB1cGxvYWQgcmVxdWVzdC5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsZSkge1xuICAgICAgICAgICAgdmFyIFVwbG9hZCA9IHV0aWxzXzEuZ2V0UHJvdmlkZXIoJ1VwbG9hZCcpO1xuICAgICAgICAgICAgLy8gQ29weSBvdmVyIHNpbmNlIHdlJ2xsIG1vZGlmeS5cbiAgICAgICAgICAgIHZhciBfb3B0aW9ucyA9IHRzbGliXzEuX19hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gTk9URTogR290IHJpZCBvZiB0aGlzIGZvciBub3cgc2luY2Ugd2UgZG9uJ3QgdXNlIGl0IGZyb20gd2hhdCBJIGtub3cuXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGZpbGVzIGlmIHlvdSB3YW50IHRvIHVwbG9hZCBtdWx0aXBsZS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBmaWxlIHNob3VsZCBiZSB0aGUgc2luZ2xlIGZpbGUgdG8gdXBsb2FkLlxuICAgICAgICAgICAgLy8gRm9yIG11bHRpcGxlIHVwbG9hZCwgdGhlIGtleSBzaG91bGQgYmUgdGhlIG5hbWUgb2YgdGhlIGZvcm0gZmllbGQsIHRoZSB2YWx1ZSBzaG91bGQgYmUgdGhlIGZpbGUuXG4gICAgICAgICAgICAvLyBFeGFtcGxlOiB7IGZpbGU6IGZpbGUxLCBmaWxlX290aGVyOiBmaWxlMiB9XG4gICAgICAgICAgICAvLyBpZiAoICFBcnJheS5pc0FycmF5KCBvcHRpb25zLmZpbGUgKSApIHtcbiAgICAgICAgICAgIC8vIFx0X29wdGlvbnMuZmlsZUZvcm1EYXRhTmFtZSA9IE9iamVjdC5rZXlzKCBfb3B0aW9ucy5maWxlICk7XG4gICAgICAgICAgICAvLyBcdF9vcHRpb25zLmZpbGUgPSBfLmZsYXR0ZW4oIF8udmFsdWVzKCBfb3B0aW9ucy5maWxlICkgKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gTXVsdGkgZmlsZSB1cGxvYWQgaW4gc2FtZSBmb3JtIGNvbnRyb2wuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfb3B0aW9ucy5maWxlKSAmJiBfb3B0aW9ucy5maWxlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgX29wdGlvbnMuZmlsZSA9IF9vcHRpb25zLmZpbGVbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB2YXIgdXBsb2FkUHJvbWlzZSA9IFVwbG9hZC51cGxvYWQoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRzbGliXzEuX19hc3NpZ24oe30sIGRhdGEsIHsgZmlsZTogX29wdGlvbnMuZmlsZSB9KSxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IF9vcHRpb25zLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICAvLyBGb3JjZSBpZ25vcmUgaW4gdXBsb2FkLlxuICAgICAgICAgICAgICAgIC8vIFdlIHNob3cgYSBmb3JtIHVwbG9hZCBwcm9ncmVzcyBiYXIgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBpZ25vcmVMb2FkaW5nQmFyOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTZXQgdXAgcHJvZ3Jlc3MgZXZlbnRzLlxuICAgICAgICAgICAgdXBsb2FkUHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKG51bGwsIG51bGwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByb2dyZXNzICYmIGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9ncmVzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBldmVudC5sb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogZXZlbnQudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvZ3Jlc3ModW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWRQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsc18xLmdldFByb3ZpZGVyKCckaHR0cCcpKHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHRpb25zLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgIGlnbm9yZUxvYWRpbmdCYXI6IG9wdGlvbnMuaWdub3JlTG9hZGluZ0JhclxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwaS5jcmVhdGVSZXF1ZXN0VnVlID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChHSl9JU19WVUUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWdWUgY2FuJ3QgdXBsb2FkIGZpbGVzIHlldC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbiAgICAgICAgICAgIHZhciBfcmVxdWVzdCA9IHJlcXVlc3QobWV0aG9kLCB1cmwpLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBfcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfcmVxdWVzdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFwaTtcbn0oKSk7XG5BcGkuYXBpSG9zdCA9IGVudmlyb25tZW50X3NlcnZpY2VfMS5FbnZpcm9ubWVudC5hcGlIb3N0O1xuQXBpLmFwaVBhdGggPSAnL3NpdGUtYXBpJztcbmV4cG9ydHMuQXBpID0gQXBpO1xuIl19

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var environment_service_1 = __webpack_require__(48);
var utils_1 = __webpack_require__(25);
var ga = window.ga || function () { };
// Force HTTPS tracking beacons.
ga('set', 'forceSSL', true);
// Allow file:// and app:// protocols for Client or App.
// https://discuss.atom.io/t/google-analytics-in-atom-shell/14109/7
ga('set', 'checkProtocolTask', null);
var Analytics = (function () {
    function Analytics() {
    }
    Analytics.initAngular = function ($rootScope) {
        var _this = this;
        $rootScope.$on('$stateChangeStart', function () {
            _this.recordedPageView = false;
        });
        $rootScope.$on('$stateChangeSuccess', function (_event, current) {
            // If we are redirecting to a new page, don't track the route.
            // This happens (for example) when there is a trailing slash at the end of the URL.
            if (current && current.redirectTo) {
                return;
            }
            // If the state is set to not track the pageview, skip.
            if (current && current.skipTrackPageview) {
                return;
            }
            // Track the page view.
            _this.trackPageview();
        });
    };
    Analytics.getAppUser = function () {
        if (false) {
            var App = utils_1.getProvider('App');
            return App.user;
        }
        if (true) {
            var store = __webpack_require__(114).appStore;
            return store.state.user;
        }
    };
    Analytics.ensureUserId = function () {
        var user = this.getAppUser();
        if (user && user.id) {
            if (environment_service_1.Environment.buildType === 'development') {
                console.log("Set tracking User ID: " + user.id);
            }
            else {
                ga('set', '&uid', user.id);
            }
        }
        else {
            if (environment_service_1.Environment.buildType === 'development') {
                console.log('Unset tracking User ID.');
            }
            else {
                ga('set', '&uid', '');
            }
        }
    };
    Analytics.shouldTrack = function () {
        var user = this.getAppUser();
        // If they're not a normal user, don't track.
        if (environment_service_1.Environment.buildType === 'production' && user && user.permission_level > 0) {
            return false;
        }
        return true;
    };
    Analytics.ga = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            var called = false;
            function cb() {
                if (!called) {
                    called = true;
                    resolve();
                }
            }
            // If we set hitCallback to true for the options of this call, then
            // we want to be alerted when the command is finished. We limit it
            // with a timeout in this case.
            var lastArg = args[args.length - 1];
            if (typeof lastArg === 'object' && lastArg.hitCallback) {
                // This will ensure that resolve() gets called at least within 1s.
                lastArg.hitCallback = cb;
                window.setTimeout(cb, 1000);
                ga.apply(null, args);
            }
            else {
                // Otherwise do it immediately.
                ga.apply(null, args);
                cb();
            }
        });
    };
    Analytics.trackPageview = function (path) {
        var _this = this;
        // Gotta make sure the system has a chance to compile the title into the page.
        window.setTimeout(function () {
            _this._trackPageview(path);
        });
    };
    Analytics._trackPageview = function (path, tracker) {
        if (tracker === void 0) { tracker = ''; }
        if (!this.shouldTrack()) {
            console.log('Skip tracking page view since not a normal user.');
            return;
        }
        var method = 'send';
        // Did they pass in a tracker other than the default?
        if (tracker) {
            // Normalize.
            var normalizedTracker = tracker.replace(/[\-_:]/g, '');
            // Prefix the method with the tracker.
            method = normalizedTracker + '.' + method;
            // If we haven't added this tracker yet in GA, let's do so.
            if (this.extraTrackers.indexOf(tracker) === -1) {
                // Save that we have this tracker set.
                this.extraTrackers.push(tracker);
                // Now add it in GA.
                if (environment_service_1.Environment.buildType === 'development') {
                    console.log('Create new tracker: ' + tracker);
                }
                else {
                    this.ga('create', tracker, 'auto', { name: normalizedTracker });
                }
            }
        }
        this.ensureUserId();
        // If no path passed in, then pull it from the location.
        if (!path) {
            path = window.location.pathname + window.location.search + window.location.hash;
        }
        // Pull the title.
        var title = window.document.title;
        var options = {
            page: path,
            title: title,
        };
        // Now track the page view.
        if (environment_service_1.Environment.buildType === 'development') {
            console.log("Track page view: tracker(" + tracker + ") | " + JSON.stringify(options));
        }
        else {
            this.ga(method, 'pageview', tslib_1.__assign({}, options));
        }
        // If they have an additional page tracker attached, then track the page view for that tracker as well.
        if (!tracker && this.additionalPageTracker) {
            this._trackPageview(undefined, this.additionalPageTracker);
        }
        // Since this is the primary (not an additional tracker) set that we've recorded the page view.
        if (!tracker) {
            this.recordedPageView = true;
        }
    };
    Analytics.trackEvent = function (category, action, label, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shouldTrack()) {
                            console.log('Skip tracking event since not a normal user.');
                            return [2 /*return*/];
                        }
                        this.ensureUserId();
                        if (!(environment_service_1.Environment.buildType === 'development')) return [3 /*break*/, 1];
                        console.log("Track event: " + category + ":" + (action || '-') + ":" + (label || '-') + ":" + (value || '-'));
                        return [3 /*break*/, 3];
                    case 1:
                        options = {
                            nonInteraction: 1,
                            hitCallback: true,
                        };
                        return [4 /*yield*/, this.ga('send', 'event', category, action, label, value, options)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Analytics.trackSocial = function (network, action, target) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.shouldTrack()) {
                    console.log('Skip tracking social event since not a normal user.');
                    return [2 /*return*/];
                }
                this.ensureUserId();
                if (environment_service_1.Environment.buildType === 'development') {
                    console.log("Track social event: " + network + ":" + action + ":" + target);
                }
                else {
                    this.ga('send', 'social', network, action, target, {
                        hitCallback: true,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Analytics.trackTiming = function (category, timingVar, value, label) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.shouldTrack()) {
                    console.log('Skip tracking timing event since not a normal user.');
                    return [2 /*return*/];
                }
                console.info("Timing (" + category + (label ? ':' + label : '') + ") " + timingVar + " = " + value);
                if (environment_service_1.Environment.buildType === 'production') {
                    this.ga('send', 'timing', category, timingVar, value, label, {
                        hitCallback: true,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Analytics.setCurrentExperiment = function (experiment, variation) {
        // If the chosen variation is -1, then they weren't chosen to run in this experiment, so we skip tracking.
        if (variation === -1 || variation === '-1') {
            return;
        }
        if (!this.shouldTrack()) {
            console.log('Skip setting experiment since not a normal user.');
            return;
        }
        if (environment_service_1.Environment.buildType === 'development') {
            console.log("Set new experiment: " + experiment + " = " + variation);
        }
        else {
            ga('set', 'expId', experiment);
            ga('set', 'expVar', '' + variation);
        }
    };
    Analytics.attachAdditionalPageTracker = function (scope, trackingId) {
        var _this = this;
        if (true) {
            throw new Error("Can't attach addtional page trackers in vue yet.");
        }
        if (environment_service_1.Environment.buildType === 'development') {
            console.log("Attached additional tracker: " + trackingId);
        }
        this.additionalPageTracker = trackingId;
        scope.$on('$destroy', function () {
            if (environment_service_1.Environment.buildType === 'development') {
                console.log("Detached additional tracker: " + trackingId);
            }
            _this.additionalPageTracker = undefined;
        });
        // If we have already recorded the page view and we're adding the tracker, record the current page.
        // This ensures that if we add it in lazily it'll still record correctly.
        if (this.recordedPageView) {
            this._trackPageview(undefined, trackingId);
        }
    };
    return Analytics;
}());
Analytics.SOCIAL_NETWORK_FB = 'facebook';
Analytics.SOCIAL_NETWORK_TWITTER = 'twitter';
Analytics.SOCIAL_NETWORK_TWITCH = 'twitch';
Analytics.SOCIAL_NETWORK_YOUTUBE = 'youtube';
Analytics.SOCIAL_ACTION_LIKE = 'like';
Analytics.SOCIAL_ACTION_SHARE = 'share';
Analytics.SOCIAL_ACTION_SEND = 'send';
Analytics.SOCIAL_ACTION_TWEET = 'tweet';
Analytics.SOCIAL_ACTION_FOLLOW = 'follow';
Analytics.SOCIAL_ACTION_SUBSCRIBE = 'subscribe';
Analytics.SOCIAL_ACTION_UNSUBSCRIBE = 'unsubscribe';
Analytics.extraTrackers = [];
Analytics.recordedPageView = true;
exports.Analytics = Analytics;

//# sourceMappingURL=data:application/json;base64,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LHNCQUFzQixZQUFZLGNBQWMsZUFBZTtZQUMvRCxRQUFRLElBQUkseUJBQXlCLGFBQWEsUUFBUTs7YUFFekQ7WUFDRCxHQUFHLE9BQU8sU0FBUztZQUNuQixHQUFHLE9BQU8sVUFBVSxLQUFLOzs7SUFHakMsVUFBVSw4QkFBOEIsVUFBVSxPQUFPLFlBQVk7UUFDakUsSUFBSSxRQUFRO1FBQ1osSUFBSSxDQUFDLGVBQWU7WUFDaEIsTUFBTSxJQUFJLE1BQU07O1FBRXBCLElBQUksc0JBQXNCLFlBQVksY0FBYyxlQUFlO1lBQy9ELFFBQVEsSUFBSSxrQ0FBa0M7O1FBRWxELEtBQUssd0JBQXdCO1FBQzdCLE1BQU0sSUFBSSxZQUFZLFlBQVk7WUFDOUIsSUFBSSxzQkFBc0IsWUFBWSxjQUFjLGVBQWU7Z0JBQy9ELFFBQVEsSUFBSSxrQ0FBa0M7O1lBRWxELE1BQU0sd0JBQXdCOzs7O1FBSWxDLElBQUksS0FBSyxrQkFBa0I7WUFDdkIsS0FBSyxlQUFlLFdBQVc7OztJQUd2QyxPQUFPOztBQUVYLFVBQVUsb0JBQW9CO0FBQzlCLFVBQVUseUJBQXlCO0FBQ25DLFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUseUJBQXlCO0FBQ25DLFVBQVUscUJBQXFCO0FBQy9CLFVBQVUsc0JBQXNCO0FBQ2hDLFVBQVUscUJBQXFCO0FBQy9CLFVBQVUsc0JBQXNCO0FBQ2hDLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsNEJBQTRCO0FBQ3RDLFVBQVUsZ0JBQWdCO0FBQzFCLFVBQVUsbUJBQW1CO0FBQzdCLFFBQVEsWUFBWTtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgZW52aXJvbm1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnNlcnZpY2VcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcbnZhciBnYSA9IHdpbmRvdy5nYSB8fCBmdW5jdGlvbiAoKSB7IH07XG4vLyBGb3JjZSBIVFRQUyB0cmFja2luZyBiZWFjb25zLlxuZ2EoJ3NldCcsICdmb3JjZVNTTCcsIHRydWUpO1xuLy8gQWxsb3cgZmlsZTovLyBhbmQgYXBwOi8vIHByb3RvY29scyBmb3IgQ2xpZW50IG9yIEFwcC5cbi8vIGh0dHBzOi8vZGlzY3Vzcy5hdG9tLmlvL3QvZ29vZ2xlLWFuYWx5dGljcy1pbi1hdG9tLXNoZWxsLzE0MTA5LzdcbmdhKCdzZXQnLCAnY2hlY2tQcm90b2NvbFRhc2snLCBudWxsKTtcbnZhciBBbmFseXRpY3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFuYWx5dGljcygpIHtcbiAgICB9XG4gICAgQW5hbHl0aWNzLmluaXRBbmd1bGFyID0gZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVjb3JkZWRQYWdlVmlldyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoX2V2ZW50LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgcmVkaXJlY3RpbmcgdG8gYSBuZXcgcGFnZSwgZG9uJ3QgdHJhY2sgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gVGhpcyBoYXBwZW5zIChmb3IgZXhhbXBsZSkgd2hlbiB0aGVyZSBpcyBhIHRyYWlsaW5nIHNsYXNoIGF0IHRoZSBlbmQgb2YgdGhlIFVSTC5cbiAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQucmVkaXJlY3RUbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBzZXQgdG8gbm90IHRyYWNrIHRoZSBwYWdldmlldywgc2tpcC5cbiAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuc2tpcFRyYWNrUGFnZXZpZXcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayB0aGUgcGFnZSB2aWV3LlxuICAgICAgICAgICAgX3RoaXMudHJhY2tQYWdldmlldygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFuYWx5dGljcy5nZXRBcHBVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgdmFyIEFwcCA9IHV0aWxzXzEuZ2V0UHJvdmlkZXIoJ0FwcCcpO1xuICAgICAgICAgICAgcmV0dXJuIEFwcC51c2VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHSl9JU19WVUUpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3Z1ZS9zZXJ2aWNlcy9hcHAvYXBwLXN0b3JlJykuYXBwU3RvcmU7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuc3RhdGUudXNlcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5hbHl0aWNzLmVuc3VyZVVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXIgPSB0aGlzLmdldEFwcFVzZXIoKTtcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5pZCkge1xuICAgICAgICAgICAgaWYgKGVudmlyb25tZW50X3NlcnZpY2VfMS5FbnZpcm9ubWVudC5idWlsZFR5cGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldCB0cmFja2luZyBVc2VyIElEOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2EoJ3NldCcsICcmdWlkJywgdXNlci5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZW52aXJvbm1lbnRfc2VydmljZV8xLkVudmlyb25tZW50LmJ1aWxkVHlwZSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbnNldCB0cmFja2luZyBVc2VyIElELicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2EoJ3NldCcsICcmdWlkJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmFseXRpY3Muc2hvdWxkVHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1c2VyID0gdGhpcy5nZXRBcHBVc2VyKCk7XG4gICAgICAgIC8vIElmIHRoZXkncmUgbm90IGEgbm9ybWFsIHVzZXIsIGRvbid0IHRyYWNrLlxuICAgICAgICBpZiAoZW52aXJvbm1lbnRfc2VydmljZV8xLkVudmlyb25tZW50LmJ1aWxkVHlwZSA9PT0gJ3Byb2R1Y3Rpb24nICYmIHVzZXIgJiYgdXNlci5wZXJtaXNzaW9uX2xldmVsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgQW5hbHl0aWNzLmdhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIHNldCBoaXRDYWxsYmFjayB0byB0cnVlIGZvciB0aGUgb3B0aW9ucyBvZiB0aGlzIGNhbGwsIHRoZW5cbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gYmUgYWxlcnRlZCB3aGVuIHRoZSBjb21tYW5kIGlzIGZpbmlzaGVkLiBXZSBsaW1pdCBpdFxuICAgICAgICAgICAgLy8gd2l0aCBhIHRpbWVvdXQgaW4gdGhpcyBjYXNlLlxuICAgICAgICAgICAgdmFyIGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhc3RBcmcgPT09ICdvYmplY3QnICYmIGxhc3RBcmcuaGl0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgcmVzb2x2ZSgpIGdldHMgY2FsbGVkIGF0IGxlYXN0IHdpdGhpbiAxcy5cbiAgICAgICAgICAgICAgICBsYXN0QXJnLmhpdENhbGxiYWNrID0gY2I7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2IsIDEwMDApO1xuICAgICAgICAgICAgICAgIGdhLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGRvIGl0IGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgIGdhLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQW5hbHl0aWNzLnRyYWNrUGFnZXZpZXcgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBHb3R0YSBtYWtlIHN1cmUgdGhlIHN5c3RlbSBoYXMgYSBjaGFuY2UgdG8gY29tcGlsZSB0aGUgdGl0bGUgaW50byB0aGUgcGFnZS5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3RyYWNrUGFnZXZpZXcocGF0aCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQW5hbHl0aWNzLl90cmFja1BhZ2V2aWV3ID0gZnVuY3Rpb24gKHBhdGgsIHRyYWNrZXIpIHtcbiAgICAgICAgaWYgKHRyYWNrZXIgPT09IHZvaWQgMCkgeyB0cmFja2VyID0gJyc7IH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTa2lwIHRyYWNraW5nIHBhZ2UgdmlldyBzaW5jZSBub3QgYSBub3JtYWwgdXNlci4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0aG9kID0gJ3NlbmQnO1xuICAgICAgICAvLyBEaWQgdGhleSBwYXNzIGluIGEgdHJhY2tlciBvdGhlciB0aGFuIHRoZSBkZWZhdWx0P1xuICAgICAgICBpZiAodHJhY2tlcikge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplLlxuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRUcmFja2VyID0gdHJhY2tlci5yZXBsYWNlKC9bXFwtXzpdL2csICcnKTtcbiAgICAgICAgICAgIC8vIFByZWZpeCB0aGUgbWV0aG9kIHdpdGggdGhlIHRyYWNrZXIuXG4gICAgICAgICAgICBtZXRob2QgPSBub3JtYWxpemVkVHJhY2tlciArICcuJyArIG1ldGhvZDtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmVuJ3QgYWRkZWQgdGhpcyB0cmFja2VyIHlldCBpbiBHQSwgbGV0J3MgZG8gc28uXG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYVRyYWNrZXJzLmluZGV4T2YodHJhY2tlcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGF0IHdlIGhhdmUgdGhpcyB0cmFja2VyIHNldC5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhVHJhY2tlcnMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgICAgICAgICAvLyBOb3cgYWRkIGl0IGluIEdBLlxuICAgICAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudF9zZXJ2aWNlXzEuRW52aXJvbm1lbnQuYnVpbGRUeXBlID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGUgbmV3IHRyYWNrZXI6ICcgKyB0cmFja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2EoJ2NyZWF0ZScsIHRyYWNrZXIsICdhdXRvJywgeyBuYW1lOiBub3JtYWxpemVkVHJhY2tlciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnN1cmVVc2VySWQoKTtcbiAgICAgICAgLy8gSWYgbm8gcGF0aCBwYXNzZWQgaW4sIHRoZW4gcHVsbCBpdCBmcm9tIHRoZSBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1bGwgdGhlIHRpdGxlLlxuICAgICAgICB2YXIgdGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFnZTogcGF0aCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTm93IHRyYWNrIHRoZSBwYWdlIHZpZXcuXG4gICAgICAgIGlmIChlbnZpcm9ubWVudF9zZXJ2aWNlXzEuRW52aXJvbm1lbnQuYnVpbGRUeXBlID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYWNrIHBhZ2UgdmlldzogdHJhY2tlcihcIiArIHRyYWNrZXIgKyBcIikgfCBcIiArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2EobWV0aG9kLCAncGFnZXZpZXcnLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhleSBoYXZlIGFuIGFkZGl0aW9uYWwgcGFnZSB0cmFja2VyIGF0dGFjaGVkLCB0aGVuIHRyYWNrIHRoZSBwYWdlIHZpZXcgZm9yIHRoYXQgdHJhY2tlciBhcyB3ZWxsLlxuICAgICAgICBpZiAoIXRyYWNrZXIgJiYgdGhpcy5hZGRpdGlvbmFsUGFnZVRyYWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNrUGFnZXZpZXcodW5kZWZpbmVkLCB0aGlzLmFkZGl0aW9uYWxQYWdlVHJhY2tlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2UgdGhpcyBpcyB0aGUgcHJpbWFyeSAobm90IGFuIGFkZGl0aW9uYWwgdHJhY2tlcikgc2V0IHRoYXQgd2UndmUgcmVjb3JkZWQgdGhlIHBhZ2Ugdmlldy5cbiAgICAgICAgaWYgKCF0cmFja2VyKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZGVkUGFnZVZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmFseXRpY3MudHJhY2tFdmVudCA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2tpcCB0cmFja2luZyBldmVudCBzaW5jZSBub3QgYSBub3JtYWwgdXNlci4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZVVzZXJJZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZW52aXJvbm1lbnRfc2VydmljZV8xLkVudmlyb25tZW50LmJ1aWxkVHlwZSA9PT0gJ2RldmVsb3BtZW50JykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFjayBldmVudDogXCIgKyBjYXRlZ29yeSArIFwiOlwiICsgKGFjdGlvbiB8fCAnLScpICsgXCI6XCIgKyAobGFiZWwgfHwgJy0nKSArIFwiOlwiICsgKHZhbHVlIHx8ICctJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uSW50ZXJhY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0Q2FsbGJhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSwgb3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFuYWx5dGljcy50cmFja1NvY2lhbCA9IGZ1bmN0aW9uIChuZXR3b3JrLCBhY3Rpb24sIHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFjaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTa2lwIHRyYWNraW5nIHNvY2lhbCBldmVudCBzaW5jZSBub3QgYSBub3JtYWwgdXNlci4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZVVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudF9zZXJ2aWNlXzEuRW52aXJvbm1lbnQuYnVpbGRUeXBlID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhY2sgc29jaWFsIGV2ZW50OiBcIiArIG5ldHdvcmsgKyBcIjpcIiArIGFjdGlvbiArIFwiOlwiICsgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnc29jaWFsJywgbmV0d29yaywgYWN0aW9uLCB0YXJnZXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdENhbGxiYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQW5hbHl0aWNzLnRyYWNrVGltaW5nID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0aW1pbmdWYXIsIHZhbHVlLCBsYWJlbCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFjaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTa2lwIHRyYWNraW5nIHRpbWluZyBldmVudCBzaW5jZSBub3QgYSBub3JtYWwgdXNlci4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJUaW1pbmcgKFwiICsgY2F0ZWdvcnkgKyAobGFiZWwgPyAnOicgKyBsYWJlbCA6ICcnKSArIFwiKSBcIiArIHRpbWluZ1ZhciArIFwiID0gXCIgKyB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVudmlyb25tZW50X3NlcnZpY2VfMS5FbnZpcm9ubWVudC5idWlsZFR5cGUgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ3RpbWluZycsIGNhdGVnb3J5LCB0aW1pbmdWYXIsIHZhbHVlLCBsYWJlbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0Q2FsbGJhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBbmFseXRpY3Muc2V0Q3VycmVudEV4cGVyaW1lbnQgPSBmdW5jdGlvbiAoZXhwZXJpbWVudCwgdmFyaWF0aW9uKSB7XG4gICAgICAgIC8vIElmIHRoZSBjaG9zZW4gdmFyaWF0aW9uIGlzIC0xLCB0aGVuIHRoZXkgd2VyZW4ndCBjaG9zZW4gdG8gcnVuIGluIHRoaXMgZXhwZXJpbWVudCwgc28gd2Ugc2tpcCB0cmFja2luZy5cbiAgICAgICAgaWYgKHZhcmlhdGlvbiA9PT0gLTEgfHwgdmFyaWF0aW9uID09PSAnLTEnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTa2lwIHNldHRpbmcgZXhwZXJpbWVudCBzaW5jZSBub3QgYSBub3JtYWwgdXNlci4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW52aXJvbm1lbnRfc2VydmljZV8xLkVudmlyb25tZW50LmJ1aWxkVHlwZSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXQgbmV3IGV4cGVyaW1lbnQ6IFwiICsgZXhwZXJpbWVudCArIFwiID0gXCIgKyB2YXJpYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2EoJ3NldCcsICdleHBJZCcsIGV4cGVyaW1lbnQpO1xuICAgICAgICAgICAgZ2EoJ3NldCcsICdleHBWYXInLCAnJyArIHZhcmlhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFuYWx5dGljcy5hdHRhY2hBZGRpdGlvbmFsUGFnZVRyYWNrZXIgPSBmdW5jdGlvbiAoc2NvcGUsIHRyYWNraW5nSWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFHSl9JU19BTkdVTEFSKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBhdHRhY2ggYWRkdGlvbmFsIHBhZ2UgdHJhY2tlcnMgaW4gdnVlIHlldC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudmlyb25tZW50X3NlcnZpY2VfMS5FbnZpcm9ubWVudC5idWlsZFR5cGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXR0YWNoZWQgYWRkaXRpb25hbCB0cmFja2VyOiBcIiArIHRyYWNraW5nSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFBhZ2VUcmFja2VyID0gdHJhY2tpbmdJZDtcbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudF9zZXJ2aWNlXzEuRW52aXJvbm1lbnQuYnVpbGRUeXBlID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZXRhY2hlZCBhZGRpdGlvbmFsIHRyYWNrZXI6IFwiICsgdHJhY2tpbmdJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5hZGRpdGlvbmFsUGFnZVRyYWNrZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgcmVjb3JkZWQgdGhlIHBhZ2UgdmlldyBhbmQgd2UncmUgYWRkaW5nIHRoZSB0cmFja2VyLCByZWNvcmQgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgaWYgd2UgYWRkIGl0IGluIGxhemlseSBpdCdsbCBzdGlsbCByZWNvcmQgY29ycmVjdGx5LlxuICAgICAgICBpZiAodGhpcy5yZWNvcmRlZFBhZ2VWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLl90cmFja1BhZ2V2aWV3KHVuZGVmaW5lZCwgdHJhY2tpbmdJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBbmFseXRpY3M7XG59KCkpO1xuQW5hbHl0aWNzLlNPQ0lBTF9ORVRXT1JLX0ZCID0gJ2ZhY2Vib29rJztcbkFuYWx5dGljcy5TT0NJQUxfTkVUV09SS19UV0lUVEVSID0gJ3R3aXR0ZXInO1xuQW5hbHl0aWNzLlNPQ0lBTF9ORVRXT1JLX1RXSVRDSCA9ICd0d2l0Y2gnO1xuQW5hbHl0aWNzLlNPQ0lBTF9ORVRXT1JLX1lPVVRVQkUgPSAneW91dHViZSc7XG5BbmFseXRpY3MuU09DSUFMX0FDVElPTl9MSUtFID0gJ2xpa2UnO1xuQW5hbHl0aWNzLlNPQ0lBTF9BQ1RJT05fU0hBUkUgPSAnc2hhcmUnO1xuQW5hbHl0aWNzLlNPQ0lBTF9BQ1RJT05fU0VORCA9ICdzZW5kJztcbkFuYWx5dGljcy5TT0NJQUxfQUNUSU9OX1RXRUVUID0gJ3R3ZWV0JztcbkFuYWx5dGljcy5TT0NJQUxfQUNUSU9OX0ZPTExPVyA9ICdmb2xsb3cnO1xuQW5hbHl0aWNzLlNPQ0lBTF9BQ1RJT05fU1VCU0NSSUJFID0gJ3N1YnNjcmliZSc7XG5BbmFseXRpY3MuU09DSUFMX0FDVElPTl9VTlNVQlNDUklCRSA9ICd1bnN1YnNjcmliZSc7XG5BbmFseXRpY3MuZXh0cmFUcmFja2VycyA9IFtdO1xuQW5hbHl0aWNzLnJlY29yZGVkUGFnZVZpZXcgPSB0cnVlO1xuZXhwb3J0cy5BbmFseXRpY3MgPSBBbmFseXRpY3M7XG4iXX0=

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isClient = false;
exports.isSecure = window && window.location.protocol === 'https:';
exports.isPrerender = window && window.navigator.userAgent.search(/PhantomJS/) !== -1;
var Environment = (function () {
    function Environment() {
    }
    return Environment;
}());
Environment.env = "production";
Environment.buildType = "production";
Environment.isClient = false;
Environment.isSecure = exports.isSecure;
Environment.isPrerender = exports.isPrerender;
// Production defaults.
Environment.baseUrl = 'http://gamejolt.com';
Environment.secureBaseUrl = 'https://gamejolt.com';
Environment.wttfBaseUrl = 'http://gamejolt.com';
Environment.authBaseUrl = 'https://gamejolt.com';
Environment.checkoutBaseUrl = 'https://gamejolt.com';
Environment.jamsBaseUrl = 'http://jams.gamejolt.com';
Environment.jamsIoBaseUrl = 'http://jams.gamejolt.io';
Environment.firesideBaseUrl = 'http://fireside.gamejolt.com';
Environment.helpBaseUrl = 'https://help.gamejolt.com';
Environment.devBaseUrl = 'http://dev.gamejolt.com';
Environment.gameserverUrl = (exports.isSecure ? 'https' : 'http') + '://gamejolt.net';
Environment.mediaserverUrl = 'https://m.gjcdn.net';
Environment.apiHost = 'https://gamejolt.com';
Environment.gameserverApiHost = 'https://gamejolt.net';
Environment.activityStreamHost = 'https://activity.gamejolt.com';
Environment.chatHost = 'https://chat.gamejolt.com';
Environment.widgetHost = 'https://widgets.gamejolt.com';
exports.Environment = Environment;
if (Environment.env === 'development') {
    Environment.baseUrl = 'http://development.gamejolt.com';
    Environment.secureBaseUrl = 'http://development.gamejolt.com';
    Environment.wttfBaseUrl = 'http://development.gamejolt.com';
    Environment.authBaseUrl = 'http://development.gamejolt.com';
    Environment.checkoutBaseUrl = 'http://development.gamejolt.com';
    Environment.jamsBaseUrl = 'http://jams.development.gamejolt.com';
    Environment.jamsIoBaseUrl = 'http://jams.development.gamejolt.io';
    Environment.firesideBaseUrl = 'http://fireside.development.gamejolt.com';
    Environment.helpBaseUrl = 'http://help.development.gamejolt.com';
    Environment.devBaseUrl = 'http://dev.development.gamejolt.com';
    Environment.gameserverUrl = 'http://development.gamejolt.net';
    Environment.mediaserverUrl = 'http://media.development.gamejolt.com';
    Environment.apiHost = 'http://development.gamejolt.com';
    Environment.gameserverApiHost = 'http://development.gamejolt.com';
    Environment.activityStreamHost = 'http://activity.development.gamejolt.com';
    Environment.chatHost = 'http://chat.development.gamejolt.com';
    Environment.widgetHost = 'http://localhost:8086';
}
if (false) {
    // When it gets packaged up for production, the URL changes.
    if (window.location.href.search(/^app\:\/\/game\-jolt\-client\/package\//) !== -1) {
        Environment.wttfBaseUrl = 'app://game-jolt-client/package/index.html#!';
        Environment.authBaseUrl = 'app://game-jolt-client/package/auth.html#!';
        Environment.checkoutBaseUrl = 'app://game-jolt-client/package/checkout.html#!';
    }
    else {
        Environment.wttfBaseUrl = 'app://game-jolt-client/index.html#!';
        Environment.authBaseUrl = 'app://game-jolt-client/auth.html#!';
        Environment.checkoutBaseUrl = 'app://game-jolt-client/checkout.html#!';
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFFBQVEsV0FBVztBQUNuQixRQUFRLFdBQVcsVUFBVSxPQUFPLFNBQVMsYUFBYTtBQUMxRCxRQUFRLGNBQWMsVUFBVSxPQUFPLFVBQVUsVUFBVSxPQUFPLGlCQUFpQixDQUFDO0FBQ3BGLElBQUksZUFBZSxZQUFZO0lBQzNCLFNBQVMsY0FBYzs7SUFFdkIsT0FBTzs7QUFFWCxZQUFZLE1BQU07QUFDbEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVcsUUFBUTtBQUMvQixZQUFZLGNBQWMsUUFBUTs7QUFFbEMsWUFBWSxVQUFVO0FBQ3RCLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksY0FBYztBQUMxQixZQUFZLGNBQWM7QUFDMUIsWUFBWSxrQkFBa0I7QUFDOUIsWUFBWSxjQUFjO0FBQzFCLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksa0JBQWtCO0FBQzlCLFlBQVksY0FBYztBQUMxQixZQUFZLGFBQWE7QUFDekIsWUFBWSxnQkFBZ0IsQ0FBQyxRQUFRLFdBQVcsVUFBVSxVQUFVO0FBQ3BFLFlBQVksaUJBQWlCO0FBQzdCLFlBQVksVUFBVTtBQUN0QixZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQyxZQUFZLFdBQVc7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFFBQVEsY0FBYztBQUN0QixJQUFJLFlBQVksUUFBUSxlQUFlO0lBQ25DLFlBQVksVUFBVTtJQUN0QixZQUFZLGdCQUFnQjtJQUM1QixZQUFZLGNBQWM7SUFDMUIsWUFBWSxjQUFjO0lBQzFCLFlBQVksa0JBQWtCO0lBQzlCLFlBQVksY0FBYztJQUMxQixZQUFZLGdCQUFnQjtJQUM1QixZQUFZLGtCQUFrQjtJQUM5QixZQUFZLGNBQWM7SUFDMUIsWUFBWSxhQUFhO0lBQ3pCLFlBQVksZ0JBQWdCO0lBQzVCLFlBQVksaUJBQWlCO0lBQzdCLFlBQVksVUFBVTtJQUN0QixZQUFZLG9CQUFvQjtJQUNoQyxZQUFZLHFCQUFxQjtJQUNqQyxZQUFZLFdBQVc7SUFDdkIsWUFBWSxhQUFhOztBQUU3QixJQUFJLGNBQWM7O0lBRWQsSUFBSSxPQUFPLFNBQVMsS0FBSyxPQUFPLCtDQUErQyxDQUFDLEdBQUc7UUFDL0UsWUFBWSxjQUFjO1FBQzFCLFlBQVksY0FBYztRQUMxQixZQUFZLGtCQUFrQjs7U0FFN0I7UUFDRCxZQUFZLGNBQWM7UUFDMUIsWUFBWSxjQUFjO1FBQzFCLFlBQVksa0JBQWtCOzs7QUFHdEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuaXNDbGllbnQgPSBHSl9JU19DTElFTlQ7XG5leHBvcnRzLmlzU2VjdXJlID0gd2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG5leHBvcnRzLmlzUHJlcmVuZGVyID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvUGhhbnRvbUpTLykgIT09IC0xO1xudmFyIEVudmlyb25tZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnZpcm9ubWVudCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEVudmlyb25tZW50O1xufSgpKTtcbkVudmlyb25tZW50LmVudiA9IEdKX0VOVklST05NRU5UO1xuRW52aXJvbm1lbnQuYnVpbGRUeXBlID0gR0pfQlVJTERfVFlQRTtcbkVudmlyb25tZW50LmlzQ2xpZW50ID0gR0pfSVNfQ0xJRU5UO1xuRW52aXJvbm1lbnQuaXNTZWN1cmUgPSBleHBvcnRzLmlzU2VjdXJlO1xuRW52aXJvbm1lbnQuaXNQcmVyZW5kZXIgPSBleHBvcnRzLmlzUHJlcmVuZGVyO1xuLy8gUHJvZHVjdGlvbiBkZWZhdWx0cy5cbkVudmlyb25tZW50LmJhc2VVcmwgPSAnaHR0cDovL2dhbWVqb2x0LmNvbSc7XG5FbnZpcm9ubWVudC5zZWN1cmVCYXNlVXJsID0gJ2h0dHBzOi8vZ2FtZWpvbHQuY29tJztcbkVudmlyb25tZW50Lnd0dGZCYXNlVXJsID0gJ2h0dHA6Ly9nYW1lam9sdC5jb20nO1xuRW52aXJvbm1lbnQuYXV0aEJhc2VVcmwgPSAnaHR0cHM6Ly9nYW1lam9sdC5jb20nO1xuRW52aXJvbm1lbnQuY2hlY2tvdXRCYXNlVXJsID0gJ2h0dHBzOi8vZ2FtZWpvbHQuY29tJztcbkVudmlyb25tZW50LmphbXNCYXNlVXJsID0gJ2h0dHA6Ly9qYW1zLmdhbWVqb2x0LmNvbSc7XG5FbnZpcm9ubWVudC5qYW1zSW9CYXNlVXJsID0gJ2h0dHA6Ly9qYW1zLmdhbWVqb2x0LmlvJztcbkVudmlyb25tZW50LmZpcmVzaWRlQmFzZVVybCA9ICdodHRwOi8vZmlyZXNpZGUuZ2FtZWpvbHQuY29tJztcbkVudmlyb25tZW50LmhlbHBCYXNlVXJsID0gJ2h0dHBzOi8vaGVscC5nYW1lam9sdC5jb20nO1xuRW52aXJvbm1lbnQuZGV2QmFzZVVybCA9ICdodHRwOi8vZGV2LmdhbWVqb2x0LmNvbSc7XG5FbnZpcm9ubWVudC5nYW1lc2VydmVyVXJsID0gKGV4cG9ydHMuaXNTZWN1cmUgPyAnaHR0cHMnIDogJ2h0dHAnKSArICc6Ly9nYW1lam9sdC5uZXQnO1xuRW52aXJvbm1lbnQubWVkaWFzZXJ2ZXJVcmwgPSAnaHR0cHM6Ly9tLmdqY2RuLm5ldCc7XG5FbnZpcm9ubWVudC5hcGlIb3N0ID0gJ2h0dHBzOi8vZ2FtZWpvbHQuY29tJztcbkVudmlyb25tZW50LmdhbWVzZXJ2ZXJBcGlIb3N0ID0gJ2h0dHBzOi8vZ2FtZWpvbHQubmV0JztcbkVudmlyb25tZW50LmFjdGl2aXR5U3RyZWFtSG9zdCA9ICdodHRwczovL2FjdGl2aXR5LmdhbWVqb2x0LmNvbSc7XG5FbnZpcm9ubWVudC5jaGF0SG9zdCA9ICdodHRwczovL2NoYXQuZ2FtZWpvbHQuY29tJztcbkVudmlyb25tZW50LndpZGdldEhvc3QgPSAnaHR0cHM6Ly93aWRnZXRzLmdhbWVqb2x0LmNvbSc7XG5leHBvcnRzLkVudmlyb25tZW50ID0gRW52aXJvbm1lbnQ7XG5pZiAoRW52aXJvbm1lbnQuZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgRW52aXJvbm1lbnQuYmFzZVVybCA9ICdodHRwOi8vZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC5zZWN1cmVCYXNlVXJsID0gJ2h0dHA6Ly9kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50Lnd0dGZCYXNlVXJsID0gJ2h0dHA6Ly9kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50LmF1dGhCYXNlVXJsID0gJ2h0dHA6Ly9kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50LmNoZWNrb3V0QmFzZVVybCA9ICdodHRwOi8vZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC5qYW1zQmFzZVVybCA9ICdodHRwOi8vamFtcy5kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50LmphbXNJb0Jhc2VVcmwgPSAnaHR0cDovL2phbXMuZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuaW8nO1xuICAgIEVudmlyb25tZW50LmZpcmVzaWRlQmFzZVVybCA9ICdodHRwOi8vZmlyZXNpZGUuZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC5oZWxwQmFzZVVybCA9ICdodHRwOi8vaGVscC5kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50LmRldkJhc2VVcmwgPSAnaHR0cDovL2Rldi5kZXZlbG9wbWVudC5nYW1lam9sdC5jb20nO1xuICAgIEVudmlyb25tZW50LmdhbWVzZXJ2ZXJVcmwgPSAnaHR0cDovL2RldmVsb3BtZW50LmdhbWVqb2x0Lm5ldCc7XG4gICAgRW52aXJvbm1lbnQubWVkaWFzZXJ2ZXJVcmwgPSAnaHR0cDovL21lZGlhLmRldmVsb3BtZW50LmdhbWVqb2x0LmNvbSc7XG4gICAgRW52aXJvbm1lbnQuYXBpSG9zdCA9ICdodHRwOi8vZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC5nYW1lc2VydmVyQXBpSG9zdCA9ICdodHRwOi8vZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC5hY3Rpdml0eVN0cmVhbUhvc3QgPSAnaHR0cDovL2FjdGl2aXR5LmRldmVsb3BtZW50LmdhbWVqb2x0LmNvbSc7XG4gICAgRW52aXJvbm1lbnQuY2hhdEhvc3QgPSAnaHR0cDovL2NoYXQuZGV2ZWxvcG1lbnQuZ2FtZWpvbHQuY29tJztcbiAgICBFbnZpcm9ubWVudC53aWRnZXRIb3N0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4Nic7XG59XG5pZiAoR0pfSVNfQ0xJRU5UKSB7XG4gICAgLy8gV2hlbiBpdCBnZXRzIHBhY2thZ2VkIHVwIGZvciBwcm9kdWN0aW9uLCB0aGUgVVJMIGNoYW5nZXMuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNlYXJjaCgvXmFwcFxcOlxcL1xcL2dhbWVcXC1qb2x0XFwtY2xpZW50XFwvcGFja2FnZVxcLy8pICE9PSAtMSkge1xuICAgICAgICBFbnZpcm9ubWVudC53dHRmQmFzZVVybCA9ICdhcHA6Ly9nYW1lLWpvbHQtY2xpZW50L3BhY2thZ2UvaW5kZXguaHRtbCMhJztcbiAgICAgICAgRW52aXJvbm1lbnQuYXV0aEJhc2VVcmwgPSAnYXBwOi8vZ2FtZS1qb2x0LWNsaWVudC9wYWNrYWdlL2F1dGguaHRtbCMhJztcbiAgICAgICAgRW52aXJvbm1lbnQuY2hlY2tvdXRCYXNlVXJsID0gJ2FwcDovL2dhbWUtam9sdC1jbGllbnQvcGFja2FnZS9jaGVja291dC5odG1sIyEnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgRW52aXJvbm1lbnQud3R0ZkJhc2VVcmwgPSAnYXBwOi8vZ2FtZS1qb2x0LWNsaWVudC9pbmRleC5odG1sIyEnO1xuICAgICAgICBFbnZpcm9ubWVudC5hdXRoQmFzZVVybCA9ICdhcHA6Ly9nYW1lLWpvbHQtY2xpZW50L2F1dGguaHRtbCMhJztcbiAgICAgICAgRW52aXJvbm1lbnQuY2hlY2tvdXRCYXNlVXJsID0gJ2FwcDovL2dhbWUtam9sdC1jbGllbnQvY2hlY2tvdXQuaHRtbCMhJztcbiAgICB9XG59XG4iXX0=

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vue = __webpack_require__(2);
function findVueParent(component, parentType) {
    var parent = component.$parent;
    while (parent) {
        if (parent instanceof parentType) {
            return parent;
        }
        parent = parent.$parent;
    }
    return undefined;
}
exports.findVueParent = findVueParent;
function makeObservableService(service) {
    // We have to loop through all properties of the service and make them reactive.
    // We should only do it once.
    if (!service.__gjObservable__) {
        for (var k in service) {
            Vue.util.defineReactive(service, k, service[k]);
        }
        service.__gjObservable__ = true;
    }
    return service;
}
exports.makeObservableService = makeObservableService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksTUFBTSxRQUFRO0FBQ2xCLFNBQVMsY0FBYyxXQUFXLFlBQVk7SUFDMUMsSUFBSSxTQUFTLFVBQVU7SUFDdkIsT0FBTyxRQUFRO1FBQ1gsSUFBSSxrQkFBa0IsWUFBWTtZQUM5QixPQUFPOztRQUVYLFNBQVMsT0FBTzs7SUFFcEIsT0FBTzs7QUFFWCxRQUFRLGdCQUFnQjtBQUN4QixTQUFTLHNCQUFzQixTQUFTOzs7SUFHcEMsSUFBSSxDQUFDLFFBQVEsa0JBQWtCO1FBQzNCLEtBQUssSUFBSSxLQUFLLFNBQVM7WUFDbkIsSUFBSSxLQUFLLGVBQWUsU0FBUyxHQUFHLFFBQVE7O1FBRWhELFFBQVEsbUJBQW1COztJQUUvQixPQUFPOztBQUVYLFFBQVEsd0JBQXdCO0FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbmZ1bmN0aW9uIGZpbmRWdWVQYXJlbnQoY29tcG9uZW50LCBwYXJlbnRUeXBlKSB7XG4gICAgdmFyIHBhcmVudCA9IGNvbXBvbmVudC4kcGFyZW50O1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIHBhcmVudFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmZpbmRWdWVQYXJlbnQgPSBmaW5kVnVlUGFyZW50O1xuZnVuY3Rpb24gbWFrZU9ic2VydmFibGVTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAvLyBXZSBoYXZlIHRvIGxvb3AgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBvZiB0aGUgc2VydmljZSBhbmQgbWFrZSB0aGVtIHJlYWN0aXZlLlxuICAgIC8vIFdlIHNob3VsZCBvbmx5IGRvIGl0IG9uY2UuXG4gICAgaWYgKCFzZXJ2aWNlLl9fZ2pPYnNlcnZhYmxlX18pIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBzZXJ2aWNlKSB7XG4gICAgICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZShzZXJ2aWNlLCBrLCBzZXJ2aWNlW2tdKTtcbiAgICAgICAgfVxuICAgICAgICBzZXJ2aWNlLl9fZ2pPYnNlcnZhYmxlX18gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZTtcbn1cbmV4cG9ydHMubWFrZU9ic2VydmFibGVTZXJ2aWNlID0gbWFrZU9ic2VydmFibGVTZXJ2aWNlO1xuIl19

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var VueShortkey = __webpack_require__(266);
var View = __webpack_require__(270);
var screen_service_1 = __webpack_require__(20);
var loader_service_1 = __webpack_require__(110);
var analytics_service_1 = __webpack_require__(47);
var jolticon_1 = __webpack_require__(79);
var slider_1 = __webpack_require__(236);
var item_1 = __webpack_require__(235);
var utils_1 = __webpack_require__(25);
Vue.use(VueShortkey);
exports.MediaBarLightboxConfig = {
    opacityStart: 0.5,
    scaleStart: 0.5,
    controlsHeight: 80,
    itemPadding: 40,
};
var AppMediaBarLightbox = (function (_super) {
    tslib_1.__extends(AppMediaBarLightbox, _super);
    function AppMediaBarLightbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentSliderOffset = 0;
        _this.maxItemWidth = 0;
        _this.maxItemHeight = 0;
        _this.activeElem = null;
        _this.nextElem = null;
        _this.prevElem = null;
        _this.isDragging = false;
        _this.waitingForFrame = false;
        _this.loaded = false;
        return _this;
    }
    AppMediaBarLightbox.prototype.mounted = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resize$ = screen_service_1.Screen.resizeChanges.subscribe(function () {
                            _this.calcMaxDimensions();
                            _this.refreshSliderPosition();
                        });
                        return [4 /*yield*/, loader_service_1.Loader.load('hammer-vue')];
                    case 1:
                        _a.sent();
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppMediaBarLightbox.prototype.destroy = function () {
        this.resize$.unsubscribe();
    };
    AppMediaBarLightbox.prototype.setSlider = function (slider) {
        this.sliderElem = slider;
        this.calcMaxDimensions();
        this.refreshSliderPosition();
        this.syncUrl();
    };
    AppMediaBarLightbox.prototype.calcMaxDimensions = function () {
        this.maxItemWidth = (screen_service_1.Screen.windowWidth * 0.8);
        this.maxItemHeight = screen_service_1.Screen.windowHeight - (exports.MediaBarLightboxConfig.controlsHeight * 2);
    };
    AppMediaBarLightbox.prototype.goNext = function () {
        this.mediaBar.goNext();
        this.refreshSliderPosition();
        this.syncUrl();
    };
    AppMediaBarLightbox.prototype.goPrev = function () {
        this.mediaBar.goPrev();
        this.refreshSliderPosition();
        this.syncUrl();
    };
    AppMediaBarLightbox.prototype.close = function () {
        this.mediaBar.clearActiveItem();
        this.syncUrl();
    };
    AppMediaBarLightbox.prototype.syncUrl = function () {
        var hash = '';
        if (this.mediaBar.activeItem) {
            if (this.mediaBar.activeItem.media_type === 'image') {
                hash = 'screenshot-';
            }
            else if (this.mediaBar.activeItem.media_type === 'video') {
                hash = 'video-';
            }
            else if (this.mediaBar.activeItem.media_type === 'sketchfab') {
                hash = 'sketchfab-';
            }
            hash += this.mediaBar.activeItem.id;
        }
        else {
            // TODO: Remove this once angular fixes its business.
            hash = 'close';
        }
        // Replace the URL. This way people can link to it by pulling from the browser bar,
        // but we don't want it to mess up their history navigation after closing.
        if (false) {
            var $location = utils_1.getProvider('$location');
            $location.hash(hash).replace();
        }
    };
    AppMediaBarLightbox.prototype.refreshSliderPosition = function () {
        var padding = screen_service_1.Screen.windowWidth * 0.1;
        var newOffset;
        if (this.mediaBar.activeIndex === 0) {
            newOffset = padding;
        }
        else {
            newOffset = -(this.maxItemWidth * this.mediaBar.activeIndex - padding);
        }
        this.sliderElem.style.transform = "translate3d( " + newOffset + "px, 0, 0 )";
        this.currentSliderOffset = newOffset;
    };
    AppMediaBarLightbox.prototype.panStart = function () {
        this.isDragging = true;
        this.activeElem = this.$el.getElementsByClassName('active')[0];
        this.nextElem = this.$el.getElementsByClassName('next')[0];
        this.prevElem = this.$el.getElementsByClassName('prev')[0];
        this.$el.classList.add('dragging');
    };
    AppMediaBarLightbox.prototype.pan = function (event) {
        var _this = this;
        if (!this.waitingForFrame) {
            this.waitingForFrame = true;
            window.requestAnimationFrame(function () { return _this.panTick(event); });
        }
    };
    AppMediaBarLightbox.prototype.panTick = function (event) {
        this.waitingForFrame = false;
        // In case the animation frame was retrieved after we stopped dragging.
        if (!this.isDragging) {
            return;
        }
        this.sliderElem.style.transform = "translate3d( " + (this.currentSliderOffset + event.deltaX) + "px, 0, 0 )";
        var slidePercent = Math.abs(event.deltaX) / (screen_service_1.Screen.windowWidth * 0.8);
        var opacity = exports.MediaBarLightboxConfig.opacityStart + (slidePercent * (1 - exports.MediaBarLightboxConfig.opacityStart));
        var scale = exports.MediaBarLightboxConfig.scaleStart + (slidePercent * (1 - exports.MediaBarLightboxConfig.scaleStart));
        if (this.nextElem) {
            this.nextElem.style.opacity = opacity + '';
            this.nextElem.style.transform = "scale( " + scale + ", " + scale + " )";
        }
        if (this.prevElem) {
            this.prevElem.style.opacity = opacity + '';
            this.prevElem.style.transform = "scale( " + scale + ", " + scale + " )";
        }
        // Do the inverse of what we do with the adjacent siblings.
        if (this.activeElem) {
            var scaleX = (1 + exports.MediaBarLightboxConfig.scaleStart) - scale;
            var scaleY = (1 + exports.MediaBarLightboxConfig.scaleStart) - scale;
            this.activeElem.style.opacity = ((1 + exports.MediaBarLightboxConfig.opacityStart) - opacity) + '';
            this.activeElem.style.transform = "scale( " + scaleX + ", " + scaleY + " )";
        }
    };
    AppMediaBarLightbox.prototype.panEnd = function (event) {
        this.isDragging = false;
        this.$el.classList.remove('dragging');
        this.activeElem.style.opacity = '';
        if (this.prevElem) {
            this.prevElem.style.opacity = '';
        }
        if (this.nextElem) {
            this.nextElem.style.opacity = '';
        }
        this.activeElem.style.transform = '';
        if (this.prevElem) {
            this.prevElem.style.transform = '';
        }
        if (this.nextElem) {
            this.nextElem.style.transform = '';
        }
        // Make sure we moved at a high enough velocity and distance to register the "swipe".
        var velocity = event.velocityX;
        if (Math.abs(velocity) > 0.65 && event.distance > 10) {
            if (velocity < 0) {
                this.goNext();
                analytics_service_1.Analytics.trackEvent('media-bar', 'swiped-next');
            }
            else {
                this.goPrev();
                analytics_service_1.Analytics.trackEvent('media-bar', 'swiped-prev');
            }
            return;
        }
        // We don't change the active item and instead just refresh the slider position.
        // This should reset the position after us moving it in drag().
        this.refreshSliderPosition();
    };
    return AppMediaBarLightbox;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Object)
], AppMediaBarLightbox.prototype, "mediaBar", void 0);
AppMediaBarLightbox = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'media-bar-lightbox',
        components: {
            AppJolticon: jolticon_1.AppJolticon,
            AppMediaBarLightboxSlider: slider_1.AppMediaBarLightboxSlider,
            AppMediaBarLightboxItem: item_1.AppMediaBarLightboxItem,
        }
    })
], AppMediaBarLightbox);
exports.AppMediaBarLightbox = AppMediaBarLightbox;

//# sourceMappingURL=data:application/json;base64,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QUFZLEtBQUs7QUFDbkQsc0JBQXNCLFFBQVEsV0FBVztJQUNyQztJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07UUFDTixZQUFZO1lBQ1IsYUFBYSxXQUFXO1lBQ3hCLDJCQUEyQixTQUFTO1lBQ3BDLHlCQUF5QixPQUFPOzs7R0FHekM7QUFDSCxRQUFRLHNCQUFzQjtBQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiKTtcbnZhciBWdWVTaG9ydGtleSA9IHJlcXVpcmUoJ3Z1ZS1zaG9ydGtleScpO1xudmFyIFZpZXcgPSByZXF1aXJlKFwiIXZpZXchLi9saWdodGJveC5odG1sP3N0eWxlPS4vbGlnaHRib3guc3R5bFwiKTtcbnZhciBzY3JlZW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NjcmVlbi9zY3JlZW4tc2VydmljZVwiKTtcbnZhciBsb2FkZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL2xvYWRlci9sb2FkZXIuc2VydmljZVwiKTtcbnZhciBhbmFseXRpY3Nfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL2FuYWx5dGljcy9hbmFseXRpY3Muc2VydmljZVwiKTtcbnZhciBqb2x0aWNvbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Z1ZS9jb21wb25lbnRzL2pvbHRpY29uL2pvbHRpY29uXCIpO1xudmFyIHNsaWRlcl8xID0gcmVxdWlyZShcIi4vc2xpZGVyXCIpO1xudmFyIGl0ZW1fMSA9IHJlcXVpcmUoXCIuL2l0ZW0vaXRlbVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuVnVlLnVzZShWdWVTaG9ydGtleSk7XG5leHBvcnRzLk1lZGlhQmFyTGlnaHRib3hDb25maWcgPSB7XG4gICAgb3BhY2l0eVN0YXJ0OiAwLjUsXG4gICAgc2NhbGVTdGFydDogMC41LFxuICAgIGNvbnRyb2xzSGVpZ2h0OiA4MCxcbiAgICBpdGVtUGFkZGluZzogNDAsXG59O1xudmFyIEFwcE1lZGlhQmFyTGlnaHRib3ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcE1lZGlhQmFyTGlnaHRib3gsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwTWVkaWFCYXJMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmN1cnJlbnRTbGlkZXJPZmZzZXQgPSAwO1xuICAgICAgICBfdGhpcy5tYXhJdGVtV2lkdGggPSAwO1xuICAgICAgICBfdGhpcy5tYXhJdGVtSGVpZ2h0ID0gMDtcbiAgICAgICAgX3RoaXMuYWN0aXZlRWxlbSA9IG51bGw7XG4gICAgICAgIF90aGlzLm5leHRFbGVtID0gbnVsbDtcbiAgICAgICAgX3RoaXMucHJldkVsZW0gPSBudWxsO1xuICAgICAgICBfdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF90aGlzLndhaXRpbmdGb3JGcmFtZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94LnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplJCA9IHNjcmVlbl9zZXJ2aWNlXzEuU2NyZWVuLnJlc2l6ZUNoYW5nZXMuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxjTWF4RGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2hTbGlkZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBsb2FkZXJfc2VydmljZV8xLkxvYWRlci5sb2FkKCdoYW1tZXItdnVlJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94LnByb3RvdHlwZS5zZXRTbGlkZXIgPSBmdW5jdGlvbiAoc2xpZGVyKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyRWxlbSA9IHNsaWRlcjtcbiAgICAgICAgdGhpcy5jYWxjTWF4RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLnJlZnJlc2hTbGlkZXJQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnN5bmNVcmwoKTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyTGlnaHRib3gucHJvdG90eXBlLmNhbGNNYXhEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1heEl0ZW1XaWR0aCA9IChzY3JlZW5fc2VydmljZV8xLlNjcmVlbi53aW5kb3dXaWR0aCAqIDAuOCk7XG4gICAgICAgIHRoaXMubWF4SXRlbUhlaWdodCA9IHNjcmVlbl9zZXJ2aWNlXzEuU2NyZWVuLndpbmRvd0hlaWdodCAtIChleHBvcnRzLk1lZGlhQmFyTGlnaHRib3hDb25maWcuY29udHJvbHNIZWlnaHQgKiAyKTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyTGlnaHRib3gucHJvdG90eXBlLmdvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZWRpYUJhci5nb05leHQoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU2xpZGVyUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5zeW5jVXJsKCk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94LnByb3RvdHlwZS5nb1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVkaWFCYXIuZ29QcmV2KCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFNsaWRlclBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuc3luY1VybCgpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVkaWFCYXIuY2xlYXJBY3RpdmVJdGVtKCk7XG4gICAgICAgIHRoaXMuc3luY1VybCgpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUuc3luY1VybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSAnJztcbiAgICAgICAgaWYgKHRoaXMubWVkaWFCYXIuYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFCYXIuYWN0aXZlSXRlbS5tZWRpYV90eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgaGFzaCA9ICdzY3JlZW5zaG90LSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm1lZGlhQmFyLmFjdGl2ZUl0ZW0ubWVkaWFfdHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIGhhc2ggPSAndmlkZW8tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubWVkaWFCYXIuYWN0aXZlSXRlbS5tZWRpYV90eXBlID09PSAnc2tldGNoZmFiJykge1xuICAgICAgICAgICAgICAgIGhhc2ggPSAnc2tldGNoZmFiLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYXNoICs9IHRoaXMubWVkaWFCYXIuYWN0aXZlSXRlbS5pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIG9uY2UgYW5ndWxhciBmaXhlcyBpdHMgYnVzaW5lc3MuXG4gICAgICAgICAgICBoYXNoID0gJ2Nsb3NlJztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBVUkwuIFRoaXMgd2F5IHBlb3BsZSBjYW4gbGluayB0byBpdCBieSBwdWxsaW5nIGZyb20gdGhlIGJyb3dzZXIgYmFyLFxuICAgICAgICAvLyBidXQgd2UgZG9uJ3Qgd2FudCBpdCB0byBtZXNzIHVwIHRoZWlyIGhpc3RvcnkgbmF2aWdhdGlvbiBhZnRlciBjbG9zaW5nLlxuICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgdmFyICRsb2NhdGlvbiA9IHV0aWxzXzEuZ2V0UHJvdmlkZXIoJyRsb2NhdGlvbicpO1xuICAgICAgICAgICAgJGxvY2F0aW9uLmhhc2goaGFzaCkucmVwbGFjZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94LnByb3RvdHlwZS5yZWZyZXNoU2xpZGVyUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWRkaW5nID0gc2NyZWVuX3NlcnZpY2VfMS5TY3JlZW4ud2luZG93V2lkdGggKiAwLjE7XG4gICAgICAgIHZhciBuZXdPZmZzZXQ7XG4gICAgICAgIGlmICh0aGlzLm1lZGlhQmFyLmFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXdPZmZzZXQgPSBwYWRkaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3T2Zmc2V0ID0gLSh0aGlzLm1heEl0ZW1XaWR0aCAqIHRoaXMubWVkaWFCYXIuYWN0aXZlSW5kZXggLSBwYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCggXCIgKyBuZXdPZmZzZXQgKyBcInB4LCAwLCAwIClcIjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVyT2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUucGFuU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xuICAgICAgICB0aGlzLm5leHRFbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdO1xuICAgICAgICB0aGlzLnByZXZFbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldicpWzBdO1xuICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUucGFuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nRm9yRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucGFuVGljayhldmVudCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94LnByb3RvdHlwZS5wYW5UaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvckZyYW1lID0gZmFsc2U7XG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGFuaW1hdGlvbiBmcmFtZSB3YXMgcmV0cmlldmVkIGFmdGVyIHdlIHN0b3BwZWQgZHJhZ2dpbmcuXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoIFwiICsgKHRoaXMuY3VycmVudFNsaWRlck9mZnNldCArIGV2ZW50LmRlbHRhWCkgKyBcInB4LCAwLCAwIClcIjtcbiAgICAgICAgdmFyIHNsaWRlUGVyY2VudCA9IE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgLyAoc2NyZWVuX3NlcnZpY2VfMS5TY3JlZW4ud2luZG93V2lkdGggKiAwLjgpO1xuICAgICAgICB2YXIgb3BhY2l0eSA9IGV4cG9ydHMuTWVkaWFCYXJMaWdodGJveENvbmZpZy5vcGFjaXR5U3RhcnQgKyAoc2xpZGVQZXJjZW50ICogKDEgLSBleHBvcnRzLk1lZGlhQmFyTGlnaHRib3hDb25maWcub3BhY2l0eVN0YXJ0KSk7XG4gICAgICAgIHZhciBzY2FsZSA9IGV4cG9ydHMuTWVkaWFCYXJMaWdodGJveENvbmZpZy5zY2FsZVN0YXJ0ICsgKHNsaWRlUGVyY2VudCAqICgxIC0gZXhwb3J0cy5NZWRpYUJhckxpZ2h0Ym94Q29uZmlnLnNjYWxlU3RhcnQpKTtcbiAgICAgICAgaWYgKHRoaXMubmV4dEVsZW0pIHtcbiAgICAgICAgICAgIHRoaXMubmV4dEVsZW0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHkgKyAnJztcbiAgICAgICAgICAgIHRoaXMubmV4dEVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSggXCIgKyBzY2FsZSArIFwiLCBcIiArIHNjYWxlICsgXCIgKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZXZFbGVtKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZFbGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5ICsgJyc7XG4gICAgICAgICAgICB0aGlzLnByZXZFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoIFwiICsgc2NhbGUgKyBcIiwgXCIgKyBzY2FsZSArIFwiIClcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB0aGUgaW52ZXJzZSBvZiB3aGF0IHdlIGRvIHdpdGggdGhlIGFkamFjZW50IHNpYmxpbmdzLlxuICAgICAgICBpZiAodGhpcy5hY3RpdmVFbGVtKSB7XG4gICAgICAgICAgICB2YXIgc2NhbGVYID0gKDEgKyBleHBvcnRzLk1lZGlhQmFyTGlnaHRib3hDb25maWcuc2NhbGVTdGFydCkgLSBzY2FsZTtcbiAgICAgICAgICAgIHZhciBzY2FsZVkgPSAoMSArIGV4cG9ydHMuTWVkaWFCYXJMaWdodGJveENvbmZpZy5zY2FsZVN0YXJ0KSAtIHNjYWxlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVtLnN0eWxlLm9wYWNpdHkgPSAoKDEgKyBleHBvcnRzLk1lZGlhQmFyTGlnaHRib3hDb25maWcub3BhY2l0eVN0YXJ0KSAtIG9wYWNpdHkpICsgJyc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSggXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBcIiApXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyTGlnaHRib3gucHJvdG90eXBlLnBhbkVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgICAgaWYgKHRoaXMucHJldkVsZW0pIHtcbiAgICAgICAgICAgIHRoaXMucHJldkVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5leHRFbGVtKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRFbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZUVsZW0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnByZXZFbGVtKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZFbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5leHRFbGVtKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRFbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBtb3ZlZCBhdCBhIGhpZ2ggZW5vdWdoIHZlbG9jaXR5IGFuZCBkaXN0YW5jZSB0byByZWdpc3RlciB0aGUgXCJzd2lwZVwiLlxuICAgICAgICB2YXIgdmVsb2NpdHkgPSBldmVudC52ZWxvY2l0eVg7XG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWxvY2l0eSkgPiAwLjY1ICYmIGV2ZW50LmRpc3RhbmNlID4gMTApIHtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgIGFuYWx5dGljc19zZXJ2aWNlXzEuQW5hbHl0aWNzLnRyYWNrRXZlbnQoJ21lZGlhLWJhcicsICdzd2lwZWQtbmV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1ByZXYoKTtcbiAgICAgICAgICAgICAgICBhbmFseXRpY3Nfc2VydmljZV8xLkFuYWx5dGljcy50cmFja0V2ZW50KCdtZWRpYS1iYXInLCAnc3dpcGVkLXByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBkb24ndCBjaGFuZ2UgdGhlIGFjdGl2ZSBpdGVtIGFuZCBpbnN0ZWFkIGp1c3QgcmVmcmVzaCB0aGUgc2xpZGVyIHBvc2l0aW9uLlxuICAgICAgICAvLyBUaGlzIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb24gYWZ0ZXIgdXMgbW92aW5nIGl0IGluIGRyYWcoKS5cbiAgICAgICAgdGhpcy5yZWZyZXNoU2xpZGVyUG9zaXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHBNZWRpYUJhckxpZ2h0Ym94O1xufShWdWUpKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoT2JqZWN0KVxuXSwgQXBwTWVkaWFCYXJMaWdodGJveC5wcm90b3R5cGUsIFwibWVkaWFCYXJcIiwgdm9pZCAwKTtcbkFwcE1lZGlhQmFyTGlnaHRib3ggPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIFZpZXcsXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLkNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6ICdtZWRpYS1iYXItbGlnaHRib3gnLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBBcHBKb2x0aWNvbjogam9sdGljb25fMS5BcHBKb2x0aWNvbixcbiAgICAgICAgICAgIEFwcE1lZGlhQmFyTGlnaHRib3hTbGlkZXI6IHNsaWRlcl8xLkFwcE1lZGlhQmFyTGlnaHRib3hTbGlkZXIsXG4gICAgICAgICAgICBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbTogaXRlbV8xLkFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLFxuICAgICAgICB9XG4gICAgfSlcbl0sIEFwcE1lZGlhQmFyTGlnaHRib3gpO1xuZXhwb3J0cy5BcHBNZWRpYUJhckxpZ2h0Ym94ID0gQXBwTWVkaWFCYXJMaWdodGJveDtcbiJdfQ==

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MetaField = (function () {
    function MetaField() {
    }
    return MetaField;
}());
exports.MetaField = MetaField;
var MetaContainer = (function () {
    function MetaContainer() {
    }
    MetaContainer._set = function (name, content) {
        this._storeField(name, content);
        var elem = this._head.querySelector("meta[name=\"" + name + "\"]");
        // Remove if we're nulling it out.
        if (!content) {
            if (elem) {
                this._head.removeChild(elem);
            }
            return;
        }
        // Create if not exists.
        if (!elem) {
            elem = this._document.createElement('meta');
            elem.name = name;
            this._head.appendChild(elem);
        }
        elem.content = content;
    };
    MetaContainer._get = function (name) {
        return this._fields[name] ? this._fields[name].current : null;
    };
    MetaContainer._storeField = function (name, content) {
        if (!this._fields[name]) {
            var field = new MetaField();
            var elem = this._head.querySelector("meta[name=\"" + name + "\"]");
            if (elem) {
                field.original = elem.content;
            }
            this._fields[name] = field;
        }
        this._fields[name].current = content;
    };
    return MetaContainer;
}());
MetaContainer._document = window.document;
MetaContainer._head = MetaContainer._document.head;
MetaContainer._fields = {};
exports.MetaContainer = MetaContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksYUFBYSxZQUFZO0lBQ3pCLFNBQVMsWUFBWTs7SUFFckIsT0FBTzs7QUFFWCxRQUFRLFlBQVk7QUFDcEIsSUFBSSxpQkFBaUIsWUFBWTtJQUM3QixTQUFTLGdCQUFnQjs7SUFFekIsY0FBYyxPQUFPLFVBQVUsTUFBTSxTQUFTO1FBQzFDLEtBQUssWUFBWSxNQUFNO1FBQ3ZCLElBQUksT0FBTyxLQUFLLE1BQU0sY0FBYyxpQkFBaUIsT0FBTzs7UUFFNUQsSUFBSSxDQUFDLFNBQVM7WUFDVixJQUFJLE1BQU07Z0JBQ04sS0FBSyxNQUFNLFlBQVk7O1lBRTNCOzs7UUFHSixJQUFJLENBQUMsTUFBTTtZQUNQLE9BQU8sS0FBSyxVQUFVLGNBQWM7WUFDcEMsS0FBSyxPQUFPO1lBQ1osS0FBSyxNQUFNLFlBQVk7O1FBRTNCLEtBQUssVUFBVTs7SUFFbkIsY0FBYyxPQUFPLFVBQVUsTUFBTTtRQUNqQyxPQUFPLEtBQUssUUFBUSxRQUFRLEtBQUssUUFBUSxNQUFNLFVBQVU7O0lBRTdELGNBQWMsY0FBYyxVQUFVLE1BQU0sU0FBUztRQUNqRCxJQUFJLENBQUMsS0FBSyxRQUFRLE9BQU87WUFDckIsSUFBSSxRQUFRLElBQUk7WUFDaEIsSUFBSSxPQUFPLEtBQUssTUFBTSxjQUFjLGlCQUFpQixPQUFPO1lBQzVELElBQUksTUFBTTtnQkFDTixNQUFNLFdBQVcsS0FBSzs7WUFFMUIsS0FBSyxRQUFRLFFBQVE7O1FBRXpCLEtBQUssUUFBUSxNQUFNLFVBQVU7O0lBRWpDLE9BQU87O0FBRVgsY0FBYyxZQUFZLE9BQU87QUFDakMsY0FBYyxRQUFRLGNBQWMsVUFBVTtBQUM5QyxjQUFjLFVBQVU7QUFDeEIsUUFBUSxnQkFBZ0I7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBNZXRhRmllbGQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1ldGFGaWVsZCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1ldGFGaWVsZDtcbn0oKSk7XG5leHBvcnRzLk1ldGFGaWVsZCA9IE1ldGFGaWVsZDtcbnZhciBNZXRhQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXRhQ29udGFpbmVyKCkge1xuICAgIH1cbiAgICBNZXRhQ29udGFpbmVyLl9zZXQgPSBmdW5jdGlvbiAobmFtZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLl9zdG9yZUZpZWxkKG5hbWUsIGNvbnRlbnQpO1xuICAgICAgICB2YXIgZWxlbSA9IHRoaXMuX2hlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT1cXFwiXCIgKyBuYW1lICsgXCJcXFwiXVwiKTtcbiAgICAgICAgLy8gUmVtb3ZlIGlmIHdlJ3JlIG51bGxpbmcgaXQgb3V0LlxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhZC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgaWYgbm90IGV4aXN0cy5cbiAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICBlbGVtID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgICAgICAgZWxlbS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuX2hlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbS5jb250ZW50ID0gY29udGVudDtcbiAgICB9O1xuICAgIE1ldGFDb250YWluZXIuX2dldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNbbmFtZV0gPyB0aGlzLl9maWVsZHNbbmFtZV0uY3VycmVudCA6IG51bGw7XG4gICAgfTtcbiAgICBNZXRhQ29udGFpbmVyLl9zdG9yZUZpZWxkID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9maWVsZHNbbmFtZV0pIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IG5ldyBNZXRhRmllbGQoKTtcbiAgICAgICAgICAgIHZhciBlbGVtID0gdGhpcy5faGVhZC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJcIiArIG5hbWUgKyBcIlxcXCJdXCIpO1xuICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5vcmlnaW5hbCA9IGVsZW0uY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkc1tuYW1lXSA9IGZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpZWxkc1tuYW1lXS5jdXJyZW50ID0gY29udGVudDtcbiAgICB9O1xuICAgIHJldHVybiBNZXRhQ29udGFpbmVyO1xufSgpKTtcbk1ldGFDb250YWluZXIuX2RvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuTWV0YUNvbnRhaW5lci5faGVhZCA9IE1ldGFDb250YWluZXIuX2RvY3VtZW50LmhlYWQ7XG5NZXRhQ29udGFpbmVyLl9maWVsZHMgPSB7fTtcbmV4cG9ydHMuTWV0YUNvbnRhaW5lciA9IE1ldGFDb250YWluZXI7XG4iXX0=

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
var DISPLAY_SWAP_REGEX = /^(none|table(?!-c[ea]).+)/;
var CSS_SHOW_STYLES = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block',
};
var Ruler = (function () {
    function Ruler() {
    }
    Ruler.width = function (elem) {
        return this.dimensions('clientWidth', elem);
    };
    Ruler.height = function (elem) {
        return this.dimensions('clientHeight', elem);
    };
    Ruler.outerWidth = function (elem) {
        return this.dimensions('offsetWidth', elem);
    };
    Ruler.outerHeight = function (elem) {
        return this.dimensions('offsetHeight', elem);
    };
    Ruler.dimensions = function (baseProp, _elem) {
        var elem;
        if (_elem === window.document) {
            elem = window.document.body;
        }
        else {
            elem = _elem;
        }
        var styles = window.getComputedStyle(elem);
        // Certain elements can have dimension info if we invisibly show them,
        // but it must have a current display style that would benefit.
        // This only matters for currently hidden elements that wouldn't return dimensions.
        var swappedStyles = false;
        var oldStyles = {};
        if (DISPLAY_SWAP_REGEX.test(styles.display || '') && elem.offsetWidth === 0) {
            swappedStyles = true;
            for (var name in CSS_SHOW_STYLES) {
                oldStyles[name] = elem.style[name];
                elem.style[name] = CSS_SHOW_STYLES[name];
            }
        }
        var val = elem[baseProp];
        if (baseProp === 'clientWidth') {
            val -= parseFloat(styles.paddingLeft || '') + parseFloat(styles.paddingRight || '');
        }
        else if (baseProp === 'clientHeight') {
            val -= parseFloat(styles.paddingTop || '') + parseFloat(styles.paddingBottom || '');
        }
        else if (baseProp === 'offsetWidth') {
            val += parseFloat(styles.marginLeft || '') + parseFloat(styles.marginRight || '');
        }
        else if (baseProp === 'offsetHeight') {
            val += parseFloat(styles.marginTop || '') + parseFloat(styles.marginBottom || '');
        }
        if (swappedStyles) {
            for (var name in CSS_SHOW_STYLES) {
                elem.style[name] = oldStyles[name];
            }
        }
        return val;
    };
    return Ruler;
}());
exports.Ruler = Ruler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0EsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTOztBQUViLElBQUksU0FBUyxZQUFZO0lBQ3JCLFNBQVMsUUFBUTs7SUFFakIsTUFBTSxRQUFRLFVBQVUsTUFBTTtRQUMxQixPQUFPLEtBQUssV0FBVyxlQUFlOztJQUUxQyxNQUFNLFNBQVMsVUFBVSxNQUFNO1FBQzNCLE9BQU8sS0FBSyxXQUFXLGdCQUFnQjs7SUFFM0MsTUFBTSxhQUFhLFVBQVUsTUFBTTtRQUMvQixPQUFPLEtBQUssV0FBVyxlQUFlOztJQUUxQyxNQUFNLGNBQWMsVUFBVSxNQUFNO1FBQ2hDLE9BQU8sS0FBSyxXQUFXLGdCQUFnQjs7SUFFM0MsTUFBTSxhQUFhLFVBQVUsVUFBVSxPQUFPO1FBQzFDLElBQUk7UUFDSixJQUFJLFVBQVUsT0FBTyxVQUFVO1lBQzNCLE9BQU8sT0FBTyxTQUFTOzthQUV0QjtZQUNELE9BQU87O1FBRVgsSUFBSSxTQUFTLE9BQU8saUJBQWlCOzs7O1FBSXJDLElBQUksZ0JBQWdCO1FBQ3BCLElBQUksWUFBWTtRQUNoQixJQUFJLG1CQUFtQixLQUFLLE9BQU8sV0FBVyxPQUFPLEtBQUssZ0JBQWdCLEdBQUc7WUFDekUsZ0JBQWdCO1lBQ2hCLEtBQUssSUFBSSxRQUFRLGlCQUFpQjtnQkFDOUIsVUFBVSxRQUFRLEtBQUssTUFBTTtnQkFDN0IsS0FBSyxNQUFNLFFBQVEsZ0JBQWdCOzs7UUFHM0MsSUFBSSxNQUFNLEtBQUs7UUFDZixJQUFJLGFBQWEsZUFBZTtZQUM1QixPQUFPLFdBQVcsT0FBTyxlQUFlLE1BQU0sV0FBVyxPQUFPLGdCQUFnQjs7YUFFL0UsSUFBSSxhQUFhLGdCQUFnQjtZQUNsQyxPQUFPLFdBQVcsT0FBTyxjQUFjLE1BQU0sV0FBVyxPQUFPLGlCQUFpQjs7YUFFL0UsSUFBSSxhQUFhLGVBQWU7WUFDakMsT0FBTyxXQUFXLE9BQU8sY0FBYyxNQUFNLFdBQVcsT0FBTyxlQUFlOzthQUU3RSxJQUFJLGFBQWEsZ0JBQWdCO1lBQ2xDLE9BQU8sV0FBVyxPQUFPLGFBQWEsTUFBTSxXQUFXLE9BQU8sZ0JBQWdCOztRQUVsRixJQUFJLGVBQWU7WUFDZixLQUFLLElBQUksUUFBUSxpQkFBaUI7Z0JBQzlCLEtBQUssTUFBTSxRQUFRLFVBQVU7OztRQUdyQyxPQUFPOztJQUVYLE9BQU87O0FBRVgsUUFBUSxRQUFRO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuLy8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG52YXIgRElTUExBWV9TV0FQX1JFR0VYID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvO1xudmFyIENTU19TSE9XX1NUWUxFUyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxufTtcbnZhciBSdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUnVsZXIoKSB7XG4gICAgfVxuICAgIFJ1bGVyLndpZHRoID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucygnY2xpZW50V2lkdGgnLCBlbGVtKTtcbiAgICB9O1xuICAgIFJ1bGVyLmhlaWdodCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMoJ2NsaWVudEhlaWdodCcsIGVsZW0pO1xuICAgIH07XG4gICAgUnVsZXIub3V0ZXJXaWR0aCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMoJ29mZnNldFdpZHRoJywgZWxlbSk7XG4gICAgfTtcbiAgICBSdWxlci5vdXRlckhlaWdodCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMoJ29mZnNldEhlaWdodCcsIGVsZW0pO1xuICAgIH07XG4gICAgUnVsZXIuZGltZW5zaW9ucyA9IGZ1bmN0aW9uIChiYXNlUHJvcCwgX2VsZW0pIHtcbiAgICAgICAgdmFyIGVsZW07XG4gICAgICAgIGlmIChfZWxlbSA9PT0gd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgICAgICBlbGVtID0gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gX2VsZW07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgICAgICAvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW0sXG4gICAgICAgIC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0LlxuICAgICAgICAvLyBUaGlzIG9ubHkgbWF0dGVycyBmb3IgY3VycmVudGx5IGhpZGRlbiBlbGVtZW50cyB0aGF0IHdvdWxkbid0IHJldHVybiBkaW1lbnNpb25zLlxuICAgICAgICB2YXIgc3dhcHBlZFN0eWxlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgb2xkU3R5bGVzID0ge307XG4gICAgICAgIGlmIChESVNQTEFZX1NXQVBfUkVHRVgudGVzdChzdHlsZXMuZGlzcGxheSB8fCAnJykgJiYgZWxlbS5vZmZzZXRXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3dhcHBlZFN0eWxlcyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIENTU19TSE9XX1NUWUxFUykge1xuICAgICAgICAgICAgICAgIG9sZFN0eWxlc1tuYW1lXSA9IGVsZW0uc3R5bGVbbmFtZV07XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZVtuYW1lXSA9IENTU19TSE9XX1NUWUxFU1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsID0gZWxlbVtiYXNlUHJvcF07XG4gICAgICAgIGlmIChiYXNlUHJvcCA9PT0gJ2NsaWVudFdpZHRoJykge1xuICAgICAgICAgICAgdmFsIC09IHBhcnNlRmxvYXQoc3R5bGVzLnBhZGRpbmdMZWZ0IHx8ICcnKSArIHBhcnNlRmxvYXQoc3R5bGVzLnBhZGRpbmdSaWdodCB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYmFzZVByb3AgPT09ICdjbGllbnRIZWlnaHQnKSB7XG4gICAgICAgICAgICB2YWwgLT0gcGFyc2VGbG9hdChzdHlsZXMucGFkZGluZ1RvcCB8fCAnJykgKyBwYXJzZUZsb2F0KHN0eWxlcy5wYWRkaW5nQm90dG9tIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiYXNlUHJvcCA9PT0gJ29mZnNldFdpZHRoJykge1xuICAgICAgICAgICAgdmFsICs9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgJycpICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJhc2VQcm9wID09PSAnb2Zmc2V0SGVpZ2h0Jykge1xuICAgICAgICAgICAgdmFsICs9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAnJykgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2FwcGVkU3R5bGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIENTU19TSE9XX1NUWUxFUykge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGVbbmFtZV0gPSBvbGRTdHlsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuICAgIHJldHVybiBSdWxlcjtcbn0oKSk7XG5leHBvcnRzLlJ1bGVyID0gUnVsZXI7XG4iXX0=

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(274);
var ruler_service_1 = __webpack_require__(76);
var screen_service_1 = __webpack_require__(20);
var VIDEO_RATIO = 0.5625; // 16:9
var AppVideoEmbed = (function (_super) {
    tslib_1.__extends(AppVideoEmbed, _super);
    function AppVideoEmbed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.embedUrl = '';
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    AppVideoEmbed.prototype.mounted = function () {
        var _this = this;
        this.recalculateDimensions();
        this.resize$ = screen_service_1.Screen.resizeChanges.subscribe(function () { return _this.recalculateDimensions(); });
    };
    AppVideoEmbed.prototype.destroyed = function () {
        this.resize$.unsubscribe();
    };
    AppVideoEmbed.prototype.videoIdChange = function () {
        if (!this.videoId) {
            return;
        }
        var url;
        if (this.videoProvider === 'youtube') {
            url = 'https://www.youtube.com/embed/' + this.videoId;
        }
        else if (this.videoProvider === 'vimeo') {
            url = 'https://player.vimeo.com/video/' + this.videoId;
        }
        else {
            throw new Error('Invalid video provider.');
        }
        if (this.autoplay) {
            url += '?autoplay=1';
        }
        this.embedUrl = url;
    };
    AppVideoEmbed.prototype.recalculateDimensions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.width = ruler_service_1.Ruler.width(this.$el.getElementsByClassName('video-embed-inner')[0]);
                        if (this.maxVideoWidth) {
                            this.width = Math.min(this.maxVideoWidth, this.width);
                        }
                        this.height = this.width * VIDEO_RATIO;
                        if (this.maxVideoHeight && this.height > this.maxVideoHeight) {
                            this.height = this.maxVideoHeight;
                            this.width = this.height / VIDEO_RATIO;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AppVideoEmbed;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(String)
], AppVideoEmbed.prototype, "videoProvider", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(String)
], AppVideoEmbed.prototype, "videoId", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppVideoEmbed.prototype, "maxVideoHeight", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppVideoEmbed.prototype, "maxVideoWidth", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: Boolean, default: false })
], AppVideoEmbed.prototype, "autoplay", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('videoId', { immediate: true })
], AppVideoEmbed.prototype, "videoIdChange", null);
AppVideoEmbed = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'video-embed',
    })
], AppVideoEmbed);
exports.AppVideoEmbed = AppVideoEmbed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxrQkFBa0IsUUFBUTtBQUM5QixJQUFJLG1CQUFtQixRQUFRO0FBQy9CLElBQUksY0FBYztBQUNsQixJQUFJLGlCQUFpQixVQUFVLFFBQVE7SUFDbkMsUUFBUSxVQUFVLGVBQWU7SUFDakMsU0FBUyxnQkFBZ0I7UUFDckIsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sV0FBVztRQUNqQixNQUFNLFFBQVE7UUFDZCxNQUFNLFNBQVM7UUFDZixPQUFPOztJQUVYLGNBQWMsVUFBVSxVQUFVLFlBQVk7UUFDMUMsSUFBSSxRQUFRO1FBQ1osS0FBSztRQUNMLEtBQUssVUFBVSxpQkFBaUIsT0FBTyxjQUFjLFVBQVUsWUFBWSxFQUFFLE9BQU8sTUFBTTs7SUFFOUYsY0FBYyxVQUFVLFlBQVksWUFBWTtRQUM1QyxLQUFLLFFBQVE7O0lBRWpCLGNBQWMsVUFBVSxnQkFBZ0IsWUFBWTtRQUNoRCxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQ2Y7O1FBRUosSUFBSTtRQUNKLElBQUksS0FBSyxrQkFBa0IsV0FBVztZQUNsQyxNQUFNLG1DQUFtQyxLQUFLOzthQUU3QyxJQUFJLEtBQUssa0JBQWtCLFNBQVM7WUFDckMsTUFBTSxvQ0FBb0MsS0FBSzs7YUFFOUM7WUFDRCxNQUFNLElBQUksTUFBTTs7UUFFcEIsSUFBSSxLQUFLLFVBQVU7WUFDZixPQUFPOztRQUVYLEtBQUssV0FBVzs7SUFFcEIsY0FBYyxVQUFVLHdCQUF3QixZQUFZO1FBQ3hELE9BQU8sUUFBUSxVQUFVLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZO1lBQ3ZELE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO2dCQUMzQyxRQUFRLEdBQUc7b0JBQ1AsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEtBQUs7b0JBQ2xDLEtBQUs7d0JBQ0QsR0FBRzt3QkFDSCxLQUFLLFFBQVEsZ0JBQWdCLE1BQU0sTUFBTSxLQUFLLElBQUksdUJBQXVCLHFCQUFxQjt3QkFDOUYsSUFBSSxLQUFLLGVBQWU7NEJBQ3BCLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxlQUFlLEtBQUs7O3dCQUVuRCxLQUFLLFNBQVMsS0FBSyxRQUFRO3dCQUMzQixJQUFJLEtBQUssa0JBQWtCLEtBQUssU0FBUyxLQUFLLGdCQUFnQjs0QkFDMUQsS0FBSyxTQUFTLEtBQUs7NEJBQ25CLEtBQUssUUFBUSxLQUFLLFNBQVM7O3dCQUUvQixPQUFPLENBQUM7Ozs7O0lBSzVCLE9BQU87RUFDVDtBQUNGLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLGNBQWMsV0FBVyxpQkFBaUIsS0FBSztBQUNsRCxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixjQUFjLFdBQVcsV0FBVyxLQUFLO0FBQzVDLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLGNBQWMsV0FBVyxrQkFBa0IsS0FBSztBQUNuRCxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixjQUFjLFdBQVcsaUJBQWlCLEtBQUs7QUFDbEQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUssRUFBRSxNQUFNLFNBQVMsU0FBUztHQUN6RCxjQUFjLFdBQVcsWUFBWSxLQUFLO0FBQzdDLFFBQVEsV0FBVztJQUNmLHlCQUF5QixNQUFNLFdBQVcsRUFBRSxXQUFXO0dBQ3hELGNBQWMsV0FBVyxpQkFBaUI7QUFDN0MsZ0JBQWdCLFFBQVEsV0FBVztJQUMvQjtJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07O0dBRVg7QUFDSCxRQUFRLGdCQUFnQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiKTtcbnZhciBWaWV3ID0gcmVxdWlyZShcIiF2aWV3IS4vZW1iZWQuaHRtbD9zdHlsZT0uL2VtYmVkLnN0eWxcIik7XG52YXIgcnVsZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3J1bGVyL3J1bGVyLXNlcnZpY2VcIik7XG52YXIgc2NyZWVuX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zY3JlZW4vc2NyZWVuLXNlcnZpY2VcIik7XG52YXIgVklERU9fUkFUSU8gPSAwLjU2MjU7IC8vIDE2OjlcbnZhciBBcHBWaWRlb0VtYmVkID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBcHBWaWRlb0VtYmVkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcFZpZGVvRW1iZWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbWJlZFVybCA9ICcnO1xuICAgICAgICBfdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIF90aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXBwVmlkZW9FbWJlZC5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5yZXNpemUkID0gc2NyZWVuX3NlcnZpY2VfMS5TY3JlZW4ucmVzaXplQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7IH0pO1xuICAgIH07XG4gICAgQXBwVmlkZW9FbWJlZC5wcm90b3R5cGUuZGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIEFwcFZpZGVvRW1iZWQucHJvdG90eXBlLnZpZGVvSWRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWRlb0lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgaWYgKHRoaXMudmlkZW9Qcm92aWRlciA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHRoaXMudmlkZW9JZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnZpZGVvUHJvdmlkZXIgPT09ICd2aW1lbycpIHtcbiAgICAgICAgICAgIHVybCA9ICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHRoaXMudmlkZW9JZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2aWRlbyBwcm92aWRlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgICAgdXJsICs9ICc/YXV0b3BsYXk9MSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IHVybDtcbiAgICB9O1xuICAgIEFwcFZpZGVvRW1iZWQucHJvdG90eXBlLnJlY2FsY3VsYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy4kbmV4dFRpY2soKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBydWxlcl9zZXJ2aWNlXzEuUnVsZXIud2lkdGgodGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlkZW8tZW1iZWQtaW5uZXInKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhWaWRlb1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWluKHRoaXMubWF4VmlkZW9XaWR0aCwgdGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGggKiBWSURFT19SQVRJTztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heFZpZGVvSGVpZ2h0ICYmIHRoaXMuaGVpZ2h0ID4gdGhpcy5tYXhWaWRlb0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXhWaWRlb0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQgLyBWSURFT19SQVRJTztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwVmlkZW9FbWJlZDtcbn0oVnVlKSk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKFN0cmluZylcbl0sIEFwcFZpZGVvRW1iZWQucHJvdG90eXBlLCBcInZpZGVvUHJvdmlkZXJcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoU3RyaW5nKVxuXSwgQXBwVmlkZW9FbWJlZC5wcm90b3R5cGUsIFwidmlkZW9JZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChOdW1iZXIpXG5dLCBBcHBWaWRlb0VtYmVkLnByb3RvdHlwZSwgXCJtYXhWaWRlb0hlaWdodFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChOdW1iZXIpXG5dLCBBcHBWaWRlb0VtYmVkLnByb3RvdHlwZSwgXCJtYXhWaWRlb1dpZHRoXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSlcbl0sIEFwcFZpZGVvRW1iZWQucHJvdG90eXBlLCBcImF1dG9wbGF5XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5XYXRjaCgndmlkZW9JZCcsIHsgaW1tZWRpYXRlOiB0cnVlIH0pXG5dLCBBcHBWaWRlb0VtYmVkLnByb3RvdHlwZSwgXCJ2aWRlb0lkQ2hhbmdlXCIsIG51bGwpO1xuQXBwVmlkZW9FbWJlZCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgVmlldyxcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ3ZpZGVvLWVtYmVkJyxcbiAgICB9KVxuXSwgQXBwVmlkZW9FbWJlZCk7XG5leHBvcnRzLkFwcFZpZGVvRW1iZWQgPSBBcHBWaWRlb0VtYmVkO1xuIl19

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var widget_youtube_service_1 = __webpack_require__(257);
var widget_vimeo_service_1 = __webpack_require__(256);
var widget_soundcloud_service_1 = __webpack_require__(254);
var REGEX = {
    // Match widget definitions: {% activity-feed %}
    // {%(whitespace character)(none new line character -- greedy match)(whitespace character)%}
    // Global match
    widget: /\{\%\s(.+?)\s\%\}/,
    // To match any whitespace.
    whitespace: /\s+/g,
    // Polyfill from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    whitespaceTrim: /^\s+|\s+$/g
};
var WidgetCompilerContext = (function () {
    function WidgetCompilerContext() {
        this.__widgetCompilerChildren = [];
    }
    WidgetCompilerContext.prototype.destroy = function () {
        this.__widgetCompilerChildren.forEach(function (child) {
            child.$destroy();
        });
        this.__widgetCompilerChildren = [];
    };
    return WidgetCompilerContext;
}());
exports.WidgetCompilerContext = WidgetCompilerContext;
var WidgetCompiler = (function () {
    function WidgetCompiler() {
    }
    WidgetCompiler.addWidget = function (widgetService) {
        this.widgets[widgetService.name] = widgetService;
    };
    WidgetCompiler.setContentClass = function (contentClass) {
        this.contentClass = contentClass;
    };
    /**
     * Compiles any widgets in the content provided.
     * Creates isolate child scopes for each widget and attaches their scopes to the scope passed in.
     * This allows it to destroy the child scopes correctly when the parent is destroyed.
     * Any reruns of this call will check for any child widget scopes on the scope passed in and destroy
     * them. This ensure you can continue compiling the same content on the scope and it should work.
     */
    WidgetCompiler.compile = function (context, content) {
        if (!content) {
            return undefined;
        }
        context.destroy();
        var compiledInput = "<div class=\"" + this.contentClass + "\">";
        var workingInput = content;
        var widgetInjections = {};
        // Loop through each match that looks like a widget.
        var matchInfo = null;
        while (matchInfo = workingInput.match(REGEX.widget)) {
            if (!matchInfo) {
                continue;
            }
            var match = matchInfo[0];
            var innerMatch = matchInfo[1];
            // Add in the text up until this regex match.
            compiledInput += workingInput.substring(0, matchInfo.index);
            // Process this match.
            var injectedWidget = this.processWidgetMatch(context, innerMatch);
            if (injectedWidget) {
                // This is magic... o_O
                var token = Math.random().toString(36).substr(2);
                // Make a placeholder div that we can inject in to later.
                compiledInput += "</div><div id=\"_inj_" + token + "_\"></div><div class=\"" + this.contentClass + "\">";
                // Now save this injection.
                widgetInjections['_inj_' + token + '_'] = injectedWidget;
                context.__widgetCompilerChildren.push(injectedWidget);
            }
            // Pull the new working input text to process.
            // It's just anything that was after our match.
            // This way we keep processing from where we left off.
            workingInput = workingInput.substring(matchInfo.index + match.length);
        }
        // Get the remaining portion of input after the last widget (if there were any).
        compiledInput += workingInput + '</div>';
        // Convert our compiled input into an element.
        // Wrap in a div so we can do finds on it.
        var compiledElement = document.createElement('div');
        compiledElement.className = 'widget-compiler';
        compiledElement.innerHTML = compiledInput;
        // If we've gathered any injections, let's put them in.
        for (var id in widgetInjections) {
            var injectionElement = widgetInjections[id];
            var slot = compiledElement.querySelector('#' + id);
            injectionElement.$mount(slot);
        }
        return compiledElement;
    };
    /**
     * Processes a widget match.
     * Will attempt to figure out the widget that they were trying to call
     * and call its compilation function.
     */
    WidgetCompiler.processWidgetMatch = function (context, match) {
        // Trim whitespace.
        match = match.replace(REGEX.whitespaceTrim, '');
        // Collapse multiple occurrences of stringed whitespace into one space.
        match = match.replace(REGEX.whitespace, ' ');
        // Now split on spaces to get the params.
        var params = match.split(' ');
        if (!params || !params.length) {
            return undefined;
        }
        var widgetName = params[0];
        if (!this.widgets[widgetName]) {
            return undefined;
        }
        // Remove the widget name off the params.
        params.shift();
        // Call the widget's service.
        return this.widgets[widgetName].compile(context, params);
    };
    return WidgetCompiler;
}());
WidgetCompiler.widgets = {};
WidgetCompiler.contentClass = 'widget-compiler-compiled-content';
exports.WidgetCompiler = WidgetCompiler;
// Add in default widgets.
WidgetCompiler.addWidget(new widget_youtube_service_1.WidgetCompilerWidgetYoutube());
WidgetCompiler.addWidget(new widget_vimeo_service_1.WidgetCompilerWidgetVimeo());
WidgetCompiler.addWidget(new widget_soundcloud_service_1.WidgetCompilerWidgetSoundcloud());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSx5QkFBeUIsUUFBUTtBQUNyQyxJQUFJLDhCQUE4QixRQUFRO0FBQzFDLElBQUksUUFBUTs7OztJQUlSLFFBQVE7O0lBRVIsWUFBWTs7SUFFWixnQkFBZ0I7O0FBRXBCLElBQUkseUJBQXlCLFlBQVk7SUFDckMsU0FBUyx3QkFBd0I7UUFDN0IsS0FBSywyQkFBMkI7O0lBRXBDLHNCQUFzQixVQUFVLFVBQVUsWUFBWTtRQUNsRCxLQUFLLHlCQUF5QixRQUFRLFVBQVUsT0FBTztZQUNuRCxNQUFNOztRQUVWLEtBQUssMkJBQTJCOztJQUVwQyxPQUFPOztBQUVYLFFBQVEsd0JBQXdCO0FBQ2hDLElBQUksa0JBQWtCLFlBQVk7SUFDOUIsU0FBUyxpQkFBaUI7O0lBRTFCLGVBQWUsWUFBWSxVQUFVLGVBQWU7UUFDaEQsS0FBSyxRQUFRLGNBQWMsUUFBUTs7SUFFdkMsZUFBZSxrQkFBa0IsVUFBVSxjQUFjO1FBQ3JELEtBQUssZUFBZTs7Ozs7Ozs7O0lBU3hCLGVBQWUsVUFBVSxVQUFVLFNBQVMsU0FBUztRQUNqRCxJQUFJLENBQUMsU0FBUztZQUNWLE9BQU87O1FBRVgsUUFBUTtRQUNSLElBQUksZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWU7UUFDMUQsSUFBSSxlQUFlO1FBQ25CLElBQUksbUJBQW1COztRQUV2QixJQUFJLFlBQVk7UUFDaEIsT0FBTyxZQUFZLGFBQWEsTUFBTSxNQUFNLFNBQVM7WUFDakQsSUFBSSxDQUFDLFdBQVc7Z0JBQ1o7O1lBRUosSUFBSSxRQUFRLFVBQVU7WUFDdEIsSUFBSSxhQUFhLFVBQVU7O1lBRTNCLGlCQUFpQixhQUFhLFVBQVUsR0FBRyxVQUFVOztZQUVyRCxJQUFJLGlCQUFpQixLQUFLLG1CQUFtQixTQUFTO1lBQ3RELElBQUksZ0JBQWdCOztnQkFFaEIsSUFBSSxRQUFRLEtBQUssU0FBUyxTQUFTLElBQUksT0FBTzs7Z0JBRTlDLGlCQUFpQiwwQkFBMEIsUUFBUSw0QkFBNEIsS0FBSyxlQUFlOztnQkFFbkcsaUJBQWlCLFVBQVUsUUFBUSxPQUFPO2dCQUMxQyxRQUFRLHlCQUF5QixLQUFLOzs7OztZQUsxQyxlQUFlLGFBQWEsVUFBVSxVQUFVLFFBQVEsTUFBTTs7O1FBR2xFLGlCQUFpQixlQUFlOzs7UUFHaEMsSUFBSSxrQkFBa0IsU0FBUyxjQUFjO1FBQzdDLGdCQUFnQixZQUFZO1FBQzVCLGdCQUFnQixZQUFZOztRQUU1QixLQUFLLElBQUksTUFBTSxrQkFBa0I7WUFDN0IsSUFBSSxtQkFBbUIsaUJBQWlCO1lBQ3hDLElBQUksT0FBTyxnQkFBZ0IsY0FBYyxNQUFNO1lBQy9DLGlCQUFpQixPQUFPOztRQUU1QixPQUFPOzs7Ozs7O0lBT1gsZUFBZSxxQkFBcUIsVUFBVSxTQUFTLE9BQU87O1FBRTFELFFBQVEsTUFBTSxRQUFRLE1BQU0sZ0JBQWdCOztRQUU1QyxRQUFRLE1BQU0sUUFBUSxNQUFNLFlBQVk7O1FBRXhDLElBQUksU0FBUyxNQUFNLE1BQU07UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLFFBQVE7WUFDM0IsT0FBTzs7UUFFWCxJQUFJLGFBQWEsT0FBTztRQUN4QixJQUFJLENBQUMsS0FBSyxRQUFRLGFBQWE7WUFDM0IsT0FBTzs7O1FBR1gsT0FBTzs7UUFFUCxPQUFPLEtBQUssUUFBUSxZQUFZLFFBQVEsU0FBUzs7SUFFckQsT0FBTzs7QUFFWCxlQUFlLFVBQVU7QUFDekIsZUFBZSxlQUFlO0FBQzlCLFFBQVEsaUJBQWlCOztBQUV6QixlQUFlLFVBQVUsSUFBSSx5QkFBeUI7QUFDdEQsZUFBZSxVQUFVLElBQUksdUJBQXVCO0FBQ3BELGVBQWUsVUFBVSxJQUFJLDRCQUE0QjtBQUN6RCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHdpZGdldF95b3V0dWJlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLnNlcnZpY2VcIik7XG52YXIgd2lkZ2V0X3ZpbWVvX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3dpZGdldC12aW1lby93aWRnZXQtdmltZW8uc2VydmljZVwiKTtcbnZhciB3aWRnZXRfc291bmRjbG91ZF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93aWRnZXQtc291bmRjbG91ZC93aWRnZXQtc291bmRjbG91ZC5zZXJ2aWNlXCIpO1xudmFyIFJFR0VYID0ge1xuICAgIC8vIE1hdGNoIHdpZGdldCBkZWZpbml0aW9uczogeyUgYWN0aXZpdHktZmVlZCAlfVxuICAgIC8vIHslKHdoaXRlc3BhY2UgY2hhcmFjdGVyKShub25lIG5ldyBsaW5lIGNoYXJhY3RlciAtLSBncmVlZHkgbWF0Y2gpKHdoaXRlc3BhY2UgY2hhcmFjdGVyKSV9XG4gICAgLy8gR2xvYmFsIG1hdGNoXG4gICAgd2lkZ2V0OiAvXFx7XFwlXFxzKC4rPylcXHNcXCVcXH0vLFxuICAgIC8vIFRvIG1hdGNoIGFueSB3aGl0ZXNwYWNlLlxuICAgIHdoaXRlc3BhY2U6IC9cXHMrL2csXG4gICAgLy8gUG9seWZpbGwgZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL1RyaW1cbiAgICB3aGl0ZXNwYWNlVHJpbTogL15cXHMrfFxccyskL2dcbn07XG52YXIgV2lkZ2V0Q29tcGlsZXJDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaWRnZXRDb21waWxlckNvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuX193aWRnZXRDb21waWxlckNoaWxkcmVuID0gW107XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyQ29udGV4dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX3dpZGdldENvbXBpbGVyQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLiRkZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9fd2lkZ2V0Q29tcGlsZXJDaGlsZHJlbiA9IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIFdpZGdldENvbXBpbGVyQ29udGV4dDtcbn0oKSk7XG5leHBvcnRzLldpZGdldENvbXBpbGVyQ29udGV4dCA9IFdpZGdldENvbXBpbGVyQ29udGV4dDtcbnZhciBXaWRnZXRDb21waWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkZ2V0Q29tcGlsZXIoKSB7XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyLmFkZFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMud2lkZ2V0c1t3aWRnZXRTZXJ2aWNlLm5hbWVdID0gd2lkZ2V0U2VydmljZTtcbiAgICB9O1xuICAgIFdpZGdldENvbXBpbGVyLnNldENvbnRlbnRDbGFzcyA9IGZ1bmN0aW9uIChjb250ZW50Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5jb250ZW50Q2xhc3MgPSBjb250ZW50Q2xhc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21waWxlcyBhbnkgd2lkZ2V0cyBpbiB0aGUgY29udGVudCBwcm92aWRlZC5cbiAgICAgKiBDcmVhdGVzIGlzb2xhdGUgY2hpbGQgc2NvcGVzIGZvciBlYWNoIHdpZGdldCBhbmQgYXR0YWNoZXMgdGhlaXIgc2NvcGVzIHRvIHRoZSBzY29wZSBwYXNzZWQgaW4uXG4gICAgICogVGhpcyBhbGxvd3MgaXQgdG8gZGVzdHJveSB0aGUgY2hpbGQgc2NvcGVzIGNvcnJlY3RseSB3aGVuIHRoZSBwYXJlbnQgaXMgZGVzdHJveWVkLlxuICAgICAqIEFueSByZXJ1bnMgb2YgdGhpcyBjYWxsIHdpbGwgY2hlY2sgZm9yIGFueSBjaGlsZCB3aWRnZXQgc2NvcGVzIG9uIHRoZSBzY29wZSBwYXNzZWQgaW4gYW5kIGRlc3Ryb3lcbiAgICAgKiB0aGVtLiBUaGlzIGVuc3VyZSB5b3UgY2FuIGNvbnRpbnVlIGNvbXBpbGluZyB0aGUgc2FtZSBjb250ZW50IG9uIHRoZSBzY29wZSBhbmQgaXQgc2hvdWxkIHdvcmsuXG4gICAgICovXG4gICAgV2lkZ2V0Q29tcGlsZXIuY29tcGlsZSA9IGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50KSB7XG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmRlc3Ryb3koKTtcbiAgICAgICAgdmFyIGNvbXBpbGVkSW5wdXQgPSBcIjxkaXYgY2xhc3M9XFxcIlwiICsgdGhpcy5jb250ZW50Q2xhc3MgKyBcIlxcXCI+XCI7XG4gICAgICAgIHZhciB3b3JraW5nSW5wdXQgPSBjb250ZW50O1xuICAgICAgICB2YXIgd2lkZ2V0SW5qZWN0aW9ucyA9IHt9O1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBtYXRjaCB0aGF0IGxvb2tzIGxpa2UgYSB3aWRnZXQuXG4gICAgICAgIHZhciBtYXRjaEluZm8gPSBudWxsO1xuICAgICAgICB3aGlsZSAobWF0Y2hJbmZvID0gd29ya2luZ0lucHV0Lm1hdGNoKFJFR0VYLndpZGdldCkpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hJbmZvKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBtYXRjaEluZm9bMF07XG4gICAgICAgICAgICB2YXIgaW5uZXJNYXRjaCA9IG1hdGNoSW5mb1sxXTtcbiAgICAgICAgICAgIC8vIEFkZCBpbiB0aGUgdGV4dCB1cCB1bnRpbCB0aGlzIHJlZ2V4IG1hdGNoLlxuICAgICAgICAgICAgY29tcGlsZWRJbnB1dCArPSB3b3JraW5nSW5wdXQuc3Vic3RyaW5nKDAsIG1hdGNoSW5mby5pbmRleCk7XG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoaXMgbWF0Y2guXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWRXaWRnZXQgPSB0aGlzLnByb2Nlc3NXaWRnZXRNYXRjaChjb250ZXh0LCBpbm5lck1hdGNoKTtcbiAgICAgICAgICAgIGlmIChpbmplY3RlZFdpZGdldCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgbWFnaWMuLi4gb19PXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgYSBwbGFjZWhvbGRlciBkaXYgdGhhdCB3ZSBjYW4gaW5qZWN0IGluIHRvIGxhdGVyLlxuICAgICAgICAgICAgICAgIGNvbXBpbGVkSW5wdXQgKz0gXCI8L2Rpdj48ZGl2IGlkPVxcXCJfaW5qX1wiICsgdG9rZW4gKyBcIl9cXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcIlwiICsgdGhpcy5jb250ZW50Q2xhc3MgKyBcIlxcXCI+XCI7XG4gICAgICAgICAgICAgICAgLy8gTm93IHNhdmUgdGhpcyBpbmplY3Rpb24uXG4gICAgICAgICAgICAgICAgd2lkZ2V0SW5qZWN0aW9uc1snX2lual8nICsgdG9rZW4gKyAnXyddID0gaW5qZWN0ZWRXaWRnZXQ7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fX3dpZGdldENvbXBpbGVyQ2hpbGRyZW4ucHVzaChpbmplY3RlZFdpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQdWxsIHRoZSBuZXcgd29ya2luZyBpbnB1dCB0ZXh0IHRvIHByb2Nlc3MuXG4gICAgICAgICAgICAvLyBJdCdzIGp1c3QgYW55dGhpbmcgdGhhdCB3YXMgYWZ0ZXIgb3VyIG1hdGNoLlxuICAgICAgICAgICAgLy8gVGhpcyB3YXkgd2Uga2VlcCBwcm9jZXNzaW5nIGZyb20gd2hlcmUgd2UgbGVmdCBvZmYuXG4gICAgICAgICAgICB3b3JraW5nSW5wdXQgPSB3b3JraW5nSW5wdXQuc3Vic3RyaW5nKG1hdGNoSW5mby5pbmRleCArIG1hdGNoLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSByZW1haW5pbmcgcG9ydGlvbiBvZiBpbnB1dCBhZnRlciB0aGUgbGFzdCB3aWRnZXQgKGlmIHRoZXJlIHdlcmUgYW55KS5cbiAgICAgICAgY29tcGlsZWRJbnB1dCArPSB3b3JraW5nSW5wdXQgKyAnPC9kaXY+JztcbiAgICAgICAgLy8gQ29udmVydCBvdXIgY29tcGlsZWQgaW5wdXQgaW50byBhbiBlbGVtZW50LlxuICAgICAgICAvLyBXcmFwIGluIGEgZGl2IHNvIHdlIGNhbiBkbyBmaW5kcyBvbiBpdC5cbiAgICAgICAgdmFyIGNvbXBpbGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb21waWxlZEVsZW1lbnQuY2xhc3NOYW1lID0gJ3dpZGdldC1jb21waWxlcic7XG4gICAgICAgIGNvbXBpbGVkRWxlbWVudC5pbm5lckhUTUwgPSBjb21waWxlZElucHV0O1xuICAgICAgICAvLyBJZiB3ZSd2ZSBnYXRoZXJlZCBhbnkgaW5qZWN0aW9ucywgbGV0J3MgcHV0IHRoZW0gaW4uXG4gICAgICAgIGZvciAodmFyIGlkIGluIHdpZGdldEluamVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBpbmplY3Rpb25FbGVtZW50ID0gd2lkZ2V0SW5qZWN0aW9uc1tpZF07XG4gICAgICAgICAgICB2YXIgc2xvdCA9IGNvbXBpbGVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKTtcbiAgICAgICAgICAgIGluamVjdGlvbkVsZW1lbnQuJG1vdW50KHNsb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21waWxlZEVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSB3aWRnZXQgbWF0Y2guXG4gICAgICogV2lsbCBhdHRlbXB0IHRvIGZpZ3VyZSBvdXQgdGhlIHdpZGdldCB0aGF0IHRoZXkgd2VyZSB0cnlpbmcgdG8gY2FsbFxuICAgICAqIGFuZCBjYWxsIGl0cyBjb21waWxhdGlvbiBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBXaWRnZXRDb21waWxlci5wcm9jZXNzV2lkZ2V0TWF0Y2ggPSBmdW5jdGlvbiAoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgLy8gVHJpbSB3aGl0ZXNwYWNlLlxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoUkVHRVgud2hpdGVzcGFjZVRyaW0sICcnKTtcbiAgICAgICAgLy8gQ29sbGFwc2UgbXVsdGlwbGUgb2NjdXJyZW5jZXMgb2Ygc3RyaW5nZWQgd2hpdGVzcGFjZSBpbnRvIG9uZSBzcGFjZS5cbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKFJFR0VYLndoaXRlc3BhY2UsICcgJyk7XG4gICAgICAgIC8vIE5vdyBzcGxpdCBvbiBzcGFjZXMgdG8gZ2V0IHRoZSBwYXJhbXMuXG4gICAgICAgIHZhciBwYXJhbXMgPSBtYXRjaC5zcGxpdCgnICcpO1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2lkZ2V0TmFtZSA9IHBhcmFtc1swXTtcbiAgICAgICAgaWYgKCF0aGlzLndpZGdldHNbd2lkZ2V0TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB3aWRnZXQgbmFtZSBvZmYgdGhlIHBhcmFtcy5cbiAgICAgICAgcGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgIC8vIENhbGwgdGhlIHdpZGdldCdzIHNlcnZpY2UuXG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldHNbd2lkZ2V0TmFtZV0uY29tcGlsZShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFdpZGdldENvbXBpbGVyO1xufSgpKTtcbldpZGdldENvbXBpbGVyLndpZGdldHMgPSB7fTtcbldpZGdldENvbXBpbGVyLmNvbnRlbnRDbGFzcyA9ICd3aWRnZXQtY29tcGlsZXItY29tcGlsZWQtY29udGVudCc7XG5leHBvcnRzLldpZGdldENvbXBpbGVyID0gV2lkZ2V0Q29tcGlsZXI7XG4vLyBBZGQgaW4gZGVmYXVsdCB3aWRnZXRzLlxuV2lkZ2V0Q29tcGlsZXIuYWRkV2lkZ2V0KG5ldyB3aWRnZXRfeW91dHViZV9zZXJ2aWNlXzEuV2lkZ2V0Q29tcGlsZXJXaWRnZXRZb3V0dWJlKCkpO1xuV2lkZ2V0Q29tcGlsZXIuYWRkV2lkZ2V0KG5ldyB3aWRnZXRfdmltZW9fc2VydmljZV8xLldpZGdldENvbXBpbGVyV2lkZ2V0VmltZW8oKSk7XG5XaWRnZXRDb21waWxlci5hZGRXaWRnZXQobmV3IHdpZGdldF9zb3VuZGNsb3VkX3NlcnZpY2VfMS5XaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQoKSk7XG4iXX0=

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(277);
var AppJolticon = (function (_super) {
    tslib_1.__extends(AppJolticon, _super);
    function AppJolticon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppJolticon;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(String)
], AppJolticon.prototype, "icon", void 0);
AppJolticon = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'jolticon',
    })
], AppJolticon);
exports.AppJolticon = AppJolticon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxlQUFlLFVBQVUsUUFBUTtJQUNqQyxRQUFRLFVBQVUsYUFBYTtJQUMvQixTQUFTLGNBQWM7UUFDbkIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsT0FBTztFQUNUO0FBQ0YsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUs7R0FDL0IsWUFBWSxXQUFXLFFBQVEsS0FBSztBQUN2QyxjQUFjLFFBQVEsV0FBVztJQUM3QjtJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07O0dBRVg7QUFDSCxRQUFRLGNBQWM7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xID0gcmVxdWlyZShcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIik7XG52YXIgVmlldyA9IHJlcXVpcmUoXCIhdmlldyEuL2pvbHRpY29uLmh0bWxcIik7XG52YXIgQXBwSm9sdGljb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcEpvbHRpY29uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcEpvbHRpY29uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBBcHBKb2x0aWNvbjtcbn0oVnVlKSk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKFN0cmluZylcbl0sIEFwcEpvbHRpY29uLnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5BcHBKb2x0aWNvbiA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgVmlldyxcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ2pvbHRpY29uJyxcbiAgICB9KVxuXSwgQXBwSm9sdGljb24pO1xuZXhwb3J0cy5BcHBKb2x0aWNvbiA9IEFwcEpvbHRpY29uO1xuIl19

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(272);
var screen_service_1 = __webpack_require__(20);
var analytics_service_1 = __webpack_require__(47);
var loading_1 = __webpack_require__(259);
var item_1 = __webpack_require__(234);
var lightbox_1 = __webpack_require__(74);
var utils_1 = __webpack_require__(25);
var AppMediaBar = (function (_super) {
    tslib_1.__extends(AppMediaBar, _super);
    function AppMediaBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.urlChecked = false;
        _this.activeItem = null;
        _this.activeIndex = null;
        _this.Screen = screen_service_1.Screen;
        return _this;
    }
    AppMediaBar.prototype.activeItemChange = function () {
        if (this.activeItem && !this.lightbox) {
            this.createLightbox();
        }
        else if (!this.activeItem && this.lightbox) {
            this.destroyLightbox();
        }
    };
    AppMediaBar.prototype.updated = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.mediaItems !== 'undefined' && !this.urlChecked)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.checkUrl();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AppMediaBar.prototype.destroyed = function () {
        this.destroyLightbox();
    };
    AppMediaBar.prototype.setActiveItem = function (item) {
        var index = item;
        if (typeof item === 'object') {
            index = this.mediaItems.findIndex(function (_item) { return _item.id === item.id; });
        }
        this.go(index);
        this.trackEvent('item-click', index);
    };
    AppMediaBar.prototype.goNext = function () {
        if (this.activeIndex + 1 >= this.mediaItems.length) {
            return;
        }
        this.go(this.activeIndex + 1);
        this.trackEvent('next');
    };
    AppMediaBar.prototype.goPrev = function () {
        if (this.activeIndex - 1 < 0) {
            return;
        }
        this.go(this.activeIndex - 1);
        this.trackEvent('prev');
    };
    AppMediaBar.prototype.go = function (index) {
        this.activeIndex = index;
        this.activeItem = this.mediaItems[this.activeIndex];
    };
    AppMediaBar.prototype.clearActiveItem = function () {
        this.activeItem = null;
        this.activeIndex = null;
        this.trackEvent('close');
    };
    AppMediaBar.prototype.checkUrl = function () {
        this.urlChecked = true;
        // If there is a hash in the URL, let's try to load it in.
        var id;
        var hash = window.location.hash.substring(1);
        if (hash) {
            var type = void 0;
            if (hash.indexOf('screenshot-') !== -1) {
                id = parseInt(hash.substring('screenshot-'.length), 10);
                type = 'image';
            }
            else if (hash.indexOf('video-') !== -1) {
                id = parseInt(hash.substring('video-'.length), 10);
                type = 'video';
            }
            else if (hash.indexOf('sketchfab-') !== -1) {
                id = parseInt(hash.substring('sketchfab-'.length), 10);
                type = 'sketchfab';
            }
            if (id && type) {
                var item = this.mediaItems.find(function (_item) { return _item.id === id; });
                if (item) {
                    this.setActiveItem(item);
                    this.trackEvent('permalink');
                }
                else if (false) {
                    var Growls = utils_1.getProvider('Growls');
                    if (type === 'image') {
                        Growls.error("We couldn't find the image that was linked. It may have been removed.", "Invalid Image URL");
                    }
                    else if (type === 'video') {
                        Growls.error("We couldn't find the video that was linked. It may have been removed.", "Invalid Video URL");
                    }
                    else if (type === 'sketchfab') {
                        Growls.error("We couldn't find the sketchfab model that was linked. It may have been removed.", "Invalid Sketchfab URL");
                    }
                    this.trackEvent('permalink-invalid');
                }
            }
        }
    };
    AppMediaBar.prototype.createLightbox = function () {
        if (this.lightbox) {
            return;
        }
        var elem = document.createElement('div');
        window.document.body.appendChild(elem);
        this.lightbox = new lightbox_1.AppMediaBarLightbox({
            propsData: {
                mediaBar: this,
            }
        });
        this.lightbox.$mount(elem);
    };
    AppMediaBar.prototype.destroyLightbox = function () {
        if (!this.lightbox) {
            return;
        }
        this.lightbox.$destroy();
        window.document.body.removeChild(this.lightbox.$el);
        this.lightbox = undefined;
    };
    AppMediaBar.prototype.trackEvent = function (action, label) {
        analytics_service_1.Analytics.trackEvent('media-bar', action, label);
    };
    return AppMediaBar;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Array)
], AppMediaBar.prototype, "mediaItems", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('activeItem')
], AppMediaBar.prototype, "activeItemChange", null);
AppMediaBar = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'media-bar',
        components: {
            AppLoading: loading_1.AppLoading,
            AppMediaBarItem: item_1.AppMediaBarItem,
            AppMediaBarLightbox: lightbox_1.AppMediaBarLightbox,
        }
    })
], AppMediaBar);
exports.AppMediaBar = AppMediaBar;

//# sourceMappingURL=data:application/json;base64,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QUF5QixNQUFNO0dBQ2hDLFlBQVksV0FBVyxvQkFBb0I7QUFDOUMsY0FBYyxRQUFRLFdBQVc7SUFDN0I7SUFDQSx5QkFBeUIsVUFBVTtRQUMvQixNQUFNO1FBQ04sWUFBWTtZQUNSLFlBQVksVUFBVTtZQUN0QixpQkFBaUIsT0FBTztZQUN4QixxQkFBcUIsV0FBVzs7O0dBR3pDO0FBQ0gsUUFBUSxjQUFjO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xudmFyIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSA9IHJlcXVpcmUoXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCIpO1xudmFyIFZpZXcgPSByZXF1aXJlKFwiIXZpZXchLi9tZWRpYS1iYXIuaHRtbD9zdHlsZT0uL21lZGlhLWJhci5zdHlsXCIpO1xudmFyIHNjcmVlbl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9zY3JlZW4vc2NyZWVuLXNlcnZpY2VcIik7XG52YXIgYW5hbHl0aWNzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hbmFseXRpY3MvYW5hbHl0aWNzLnNlcnZpY2VcIik7XG52YXIgbG9hZGluZ18xID0gcmVxdWlyZShcIi4uLy4uL3Z1ZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZ1wiKTtcbnZhciBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtL2l0ZW1cIik7XG52YXIgbGlnaHRib3hfMSA9IHJlcXVpcmUoXCIuL2xpZ2h0Ym94L2xpZ2h0Ym94XCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG52YXIgQXBwTWVkaWFCYXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcE1lZGlhQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcE1lZGlhQmFyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudXJsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmVJdGVtID0gbnVsbDtcbiAgICAgICAgX3RoaXMuYWN0aXZlSW5kZXggPSBudWxsO1xuICAgICAgICBfdGhpcy5TY3JlZW4gPSBzY3JlZW5fc2VydmljZV8xLlNjcmVlbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcHBNZWRpYUJhci5wcm90b3R5cGUuYWN0aXZlSXRlbUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSAmJiAhdGhpcy5saWdodGJveCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaWdodGJveCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmFjdGl2ZUl0ZW0gJiYgdGhpcy5saWdodGJveCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95TGlnaHRib3goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwTWVkaWFCYXIucHJvdG90eXBlLnVwZGF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgdGhpcy5tZWRpYUl0ZW1zICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy51cmxDaGVja2VkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLiRuZXh0VGljaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1VybCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhci5wcm90b3R5cGUuZGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lMaWdodGJveCgpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXIucHJvdG90eXBlLnNldEFjdGl2ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgaW5kZXggPSBpdGVtO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubWVkaWFJdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24gKF9pdGVtKSB7IHJldHVybiBfaXRlbS5pZCA9PT0gaXRlbS5pZDsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbyhpbmRleCk7XG4gICAgICAgIHRoaXMudHJhY2tFdmVudCgnaXRlbS1jbGljaycsIGluZGV4KTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyLnByb3RvdHlwZS5nb05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICsgMSA+PSB0aGlzLm1lZGlhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMudHJhY2tFdmVudCgnbmV4dCcpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXIucHJvdG90eXBlLmdvUHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggLSAxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ28odGhpcy5hY3RpdmVJbmRleCAtIDEpO1xuICAgICAgICB0aGlzLnRyYWNrRXZlbnQoJ3ByZXYnKTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubWVkaWFJdGVtc1t0aGlzLmFjdGl2ZUluZGV4XTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyLnByb3RvdHlwZS5jbGVhckFjdGl2ZUl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLnRyYWNrRXZlbnQoJ2Nsb3NlJyk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhci5wcm90b3R5cGUuY2hlY2tVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXJsQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgaGFzaCBpbiB0aGUgVVJMLCBsZXQncyB0cnkgdG8gbG9hZCBpdCBpbi5cbiAgICAgICAgdmFyIGlkO1xuICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGhhc2guaW5kZXhPZignc2NyZWVuc2hvdC0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZCA9IHBhcnNlSW50KGhhc2guc3Vic3RyaW5nKCdzY3JlZW5zaG90LScubGVuZ3RoKSwgMTApO1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaC5pbmRleE9mKCd2aWRlby0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZCA9IHBhcnNlSW50KGhhc2guc3Vic3RyaW5nKCd2aWRlby0nLmxlbmd0aCksIDEwKTtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3ZpZGVvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2guaW5kZXhPZignc2tldGNoZmFiLScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlkID0gcGFyc2VJbnQoaGFzaC5zdWJzdHJpbmcoJ3NrZXRjaGZhYi0nLmxlbmd0aCksIDEwKTtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NrZXRjaGZhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQgJiYgdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5tZWRpYUl0ZW1zLmZpbmQoZnVuY3Rpb24gKF9pdGVtKSB7IHJldHVybiBfaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0V2ZW50KCdwZXJtYWxpbmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgR3Jvd2xzID0gdXRpbHNfMS5nZXRQcm92aWRlcignR3Jvd2xzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHcm93bHMuZXJyb3IoXCJXZSBjb3VsZG4ndCBmaW5kIHRoZSBpbWFnZSB0aGF0IHdhcyBsaW5rZWQuIEl0IG1heSBoYXZlIGJlZW4gcmVtb3ZlZC5cIiwgXCJJbnZhbGlkIEltYWdlIFVSTFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHcm93bHMuZXJyb3IoXCJXZSBjb3VsZG4ndCBmaW5kIHRoZSB2aWRlbyB0aGF0IHdhcyBsaW5rZWQuIEl0IG1heSBoYXZlIGJlZW4gcmVtb3ZlZC5cIiwgXCJJbnZhbGlkIFZpZGVvIFVSTFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnc2tldGNoZmFiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgR3Jvd2xzLmVycm9yKFwiV2UgY291bGRuJ3QgZmluZCB0aGUgc2tldGNoZmFiIG1vZGVsIHRoYXQgd2FzIGxpbmtlZC4gSXQgbWF5IGhhdmUgYmVlbiByZW1vdmVkLlwiLCBcIkludmFsaWQgU2tldGNoZmFiIFVSTFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrRXZlbnQoJ3Blcm1hbGluay1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhci5wcm90b3R5cGUuY3JlYXRlTGlnaHRib3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpZ2h0Ym94KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIHRoaXMubGlnaHRib3ggPSBuZXcgbGlnaHRib3hfMS5BcHBNZWRpYUJhckxpZ2h0Ym94KHtcbiAgICAgICAgICAgIHByb3BzRGF0YToge1xuICAgICAgICAgICAgICAgIG1lZGlhQmFyOiB0aGlzLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saWdodGJveC4kbW91bnQoZWxlbSk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhci5wcm90b3R5cGUuZGVzdHJveUxpZ2h0Ym94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMubGlnaHRib3gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpZ2h0Ym94LiRkZXN0cm95KCk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubGlnaHRib3guJGVsKTtcbiAgICAgICAgdGhpcy5saWdodGJveCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24gKGFjdGlvbiwgbGFiZWwpIHtcbiAgICAgICAgYW5hbHl0aWNzX3NlcnZpY2VfMS5BbmFseXRpY3MudHJhY2tFdmVudCgnbWVkaWEtYmFyJywgYWN0aW9uLCBsYWJlbCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwTWVkaWFCYXI7XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChBcnJheSlcbl0sIEFwcE1lZGlhQmFyLnByb3RvdHlwZSwgXCJtZWRpYUl0ZW1zXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5XYXRjaCgnYWN0aXZlSXRlbScpXG5dLCBBcHBNZWRpYUJhci5wcm90b3R5cGUsIFwiYWN0aXZlSXRlbUNoYW5nZVwiLCBudWxsKTtcbkFwcE1lZGlhQmFyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBWaWV3LFxuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Db21wb25lbnQoe1xuICAgICAgICBuYW1lOiAnbWVkaWEtYmFyJyxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgQXBwTG9hZGluZzogbG9hZGluZ18xLkFwcExvYWRpbmcsXG4gICAgICAgICAgICBBcHBNZWRpYUJhckl0ZW06IGl0ZW1fMS5BcHBNZWRpYUJhckl0ZW0sXG4gICAgICAgICAgICBBcHBNZWRpYUJhckxpZ2h0Ym94OiBsaWdodGJveF8xLkFwcE1lZGlhQmFyTGlnaHRib3gsXG4gICAgICAgIH1cbiAgICB9KVxuXSwgQXBwTWVkaWFCYXIpO1xuZXhwb3J0cy5BcHBNZWRpYUJhciA9IEFwcE1lZGlhQmFyO1xuIl19

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var Vuex = __webpack_require__(116);
var app_store_1 = __webpack_require__(114);
var api_service_1 = __webpack_require__(40);
var meta_service_1 = __webpack_require__(238);
var site_model_1 = __webpack_require__(245);
var game_model_1 = __webpack_require__(227);
var screenshot_model_1 = __webpack_require__(228);
var video_model_1 = __webpack_require__(230);
var widget_compiler_service_1 = __webpack_require__(78);
var sellable_model_1 = __webpack_require__(243);
var sketchfab_model_1 = __webpack_require__(229);
Vue.use(Vuex);
exports.Mutations = {
    bootstrap: 'bootstrap',
    setTemplate: 'setTemplate',
    setContentBlock: 'setContentBlock',
};
exports.Actions = {
    bootstrap: 'bootstrap',
};
var AppWidgetCompilerContext = (function (_super) {
    tslib_1.__extends(AppWidgetCompilerContext, _super);
    function AppWidgetCompilerContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.game = null;
        _this.mediaItems = [];
        _this.sellables = [];
        return _this;
    }
    return AppWidgetCompilerContext;
}(widget_compiler_service_1.WidgetCompilerContext));
var StoreState = (function () {
    function StoreState() {
        this.isLoading = true;
        this.site = null;
        this.contentBlock = null;
        this.game = null;
        this.mediaItems = [];
        this.compilerContext = new AppWidgetCompilerContext();
    }
    return StoreState;
}());
exports.StoreState = StoreState;
exports.store = new Vuex.Store({
    modules: {
        app: app_store_1.appStore,
    },
    state: new StoreState(),
    mutations: (_a = {},
        _a[exports.Mutations.bootstrap] = function (state, response) {
            state.isLoading = false;
            meta_service_1.Meta.title = 'yo';
            state.site = new site_model_1.Site(response.site);
            state.contentBlock = state.site.content_blocks[0];
            state.game = new game_model_1.Game(response.game);
            if (response.mediaItems && response.mediaItems.length) {
                response.mediaItems.forEach(function (item) {
                    if (item.media_type === 'image') {
                        state.mediaItems.push(new screenshot_model_1.GameScreenshot(item));
                    }
                    else if (item.media_type === 'video') {
                        state.mediaItems.push(new video_model_1.GameVideo(item));
                    }
                    else if (item.media_type === 'sketchfab') {
                        state.mediaItems.push(new sketchfab_model_1.GameSketchfab(item));
                    }
                });
            }
            state.compilerContext.game = state.game;
            state.compilerContext.mediaItems = state.mediaItems;
            state.compilerContext.sellables = sellable_model_1.Sellable.populate(response.sellables);
        },
        _a[exports.Mutations.setTemplate] = function (state, template) {
            state.site.theme.template = template;
        },
        _a[exports.Mutations.setContentBlock] = function (state, block) {
            state.contentBlock.assign(block);
        },
        _a),
    actions: (_b = {},
        _b[exports.Actions.bootstrap] = function (_a) {
            var commit = _a.commit;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var user, url, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (false) {
                                user = 'cros';
                            }
                            else {
                                user = window.location.host.substr(0, window.location.host.indexOf('.'));
                            }
                            url = window.location.pathname.substr(1);
                            return [4 /*yield*/, api_service_1.Api.sendRequest("/sites-io/" + user + "/" + url)];
                        case 1:
                            response = _a.sent();
                            commit(exports.Mutations.bootstrap, response);
                            return [2 /*return*/];
                    }
                });
            });
        },
        _b)
});
var _a, _b;

//# sourceMappingURL=data:application/json;base64,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SSxrQkFBa0IsZUFBZTtnQ0FDakMsT0FBTzs7aUNBRU47Z0NBQ0QsT0FBTyxPQUFPLFNBQVMsS0FBSyxPQUFPLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUTs7NEJBRXZFLE1BQU0sT0FBTyxTQUFTLFNBQVMsT0FBTzs0QkFDdEMsT0FBTyxDQUFDLGFBQWEsY0FBYyxJQUFJLFlBQVksZUFBZSxPQUFPLE1BQU07d0JBQ25GLEtBQUs7NEJBQ0QsV0FBVyxHQUFHOzRCQUNkLE9BQU8sUUFBUSxVQUFVLFdBQVc7NEJBQ3BDLE9BQU8sQ0FBQzs7Ozs7UUFLNUI7O0FBRVIsSUFBSSxJQUFJO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgVnVleCA9IHJlcXVpcmUoXCJ2dWV4XCIpO1xudmFyIGFwcF9zdG9yZV8xID0gcmVxdWlyZShcIi4uLy4uL2xpYi9nai1saWItY2xpZW50L3Z1ZS9zZXJ2aWNlcy9hcHAvYXBwLXN0b3JlXCIpO1xudmFyIGFwaV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2VcIik7XG52YXIgbWV0YV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9tZXRhL21ldGEtc2VydmljZVwiKTtcbnZhciBzaXRlX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9zaXRlL3NpdGUtbW9kZWxcIik7XG52YXIgZ2FtZV9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL2xpYi9nai1saWItY2xpZW50L2NvbXBvbmVudHMvZ2FtZS9nYW1lLm1vZGVsXCIpO1xudmFyIHNjcmVlbnNob3RfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvZ2otbGliLWNsaWVudC9jb21wb25lbnRzL2dhbWUvc2NyZWVuc2hvdC9zY3JlZW5zaG90Lm1vZGVsXCIpO1xudmFyIHZpZGVvX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9nYW1lL3ZpZGVvL3ZpZGVvLm1vZGVsXCIpO1xudmFyIHdpZGdldF9jb21waWxlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy93aWRnZXQtY29tcGlsZXIvd2lkZ2V0LWNvbXBpbGVyLnNlcnZpY2VcIik7XG52YXIgc2VsbGFibGVfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvZ2otbGliLWNsaWVudC9jb21wb25lbnRzL3NlbGxhYmxlL3NlbGxhYmxlLm1vZGVsXCIpO1xudmFyIHNrZXRjaGZhYl9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL2xpYi9nai1saWItY2xpZW50L2NvbXBvbmVudHMvZ2FtZS9za2V0Y2hmYWIvc2tldGNoZmFiLm1vZGVsXCIpO1xuVnVlLnVzZShWdWV4KTtcbmV4cG9ydHMuTXV0YXRpb25zID0ge1xuICAgIGJvb3RzdHJhcDogJ2Jvb3RzdHJhcCcsXG4gICAgc2V0VGVtcGxhdGU6ICdzZXRUZW1wbGF0ZScsXG4gICAgc2V0Q29udGVudEJsb2NrOiAnc2V0Q29udGVudEJsb2NrJyxcbn07XG5leHBvcnRzLkFjdGlvbnMgPSB7XG4gICAgYm9vdHN0cmFwOiAnYm9vdHN0cmFwJyxcbn07XG52YXIgQXBwV2lkZ2V0Q29tcGlsZXJDb250ZXh0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBcHBXaWRnZXRDb21waWxlckNvbnRleHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwV2lkZ2V0Q29tcGlsZXJDb250ZXh0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZ2FtZSA9IG51bGw7XG4gICAgICAgIF90aGlzLm1lZGlhSXRlbXMgPSBbXTtcbiAgICAgICAgX3RoaXMuc2VsbGFibGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEFwcFdpZGdldENvbXBpbGVyQ29udGV4dDtcbn0od2lkZ2V0X2NvbXBpbGVyX3NlcnZpY2VfMS5XaWRnZXRDb21waWxlckNvbnRleHQpKTtcbnZhciBTdG9yZVN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVN0YXRlKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2l0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udGVudEJsb2NrID0gbnVsbDtcbiAgICAgICAgdGhpcy5nYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZWRpYUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY29tcGlsZXJDb250ZXh0ID0gbmV3IEFwcFdpZGdldENvbXBpbGVyQ29udGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gU3RvcmVTdGF0ZTtcbn0oKSk7XG5leHBvcnRzLlN0b3JlU3RhdGUgPSBTdG9yZVN0YXRlO1xuZXhwb3J0cy5zdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICAgIGFwcDogYXBwX3N0b3JlXzEuYXBwU3RvcmUsXG4gICAgfSxcbiAgICBzdGF0ZTogbmV3IFN0b3JlU3RhdGUoKSxcbiAgICBtdXRhdGlvbnM6IChfYSA9IHt9LFxuICAgICAgICBfYVtleHBvcnRzLk11dGF0aW9ucy5ib290c3RyYXBdID0gZnVuY3Rpb24gKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBtZXRhX3NlcnZpY2VfMS5NZXRhLnRpdGxlID0gJ3lvJztcbiAgICAgICAgICAgIHN0YXRlLnNpdGUgPSBuZXcgc2l0ZV9tb2RlbF8xLlNpdGUocmVzcG9uc2Uuc2l0ZSk7XG4gICAgICAgICAgICBzdGF0ZS5jb250ZW50QmxvY2sgPSBzdGF0ZS5zaXRlLmNvbnRlbnRfYmxvY2tzWzBdO1xuICAgICAgICAgICAgc3RhdGUuZ2FtZSA9IG5ldyBnYW1lX21vZGVsXzEuR2FtZShyZXNwb25zZS5nYW1lKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tZWRpYUl0ZW1zICYmIHJlc3BvbnNlLm1lZGlhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubWVkaWFJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm1lZGlhX3R5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lZGlhSXRlbXMucHVzaChuZXcgc2NyZWVuc2hvdF9tb2RlbF8xLkdhbWVTY3JlZW5zaG90KGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLm1lZGlhX3R5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lZGlhSXRlbXMucHVzaChuZXcgdmlkZW9fbW9kZWxfMS5HYW1lVmlkZW8oaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ubWVkaWFfdHlwZSA9PT0gJ3NrZXRjaGZhYicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lZGlhSXRlbXMucHVzaChuZXcgc2tldGNoZmFiX21vZGVsXzEuR2FtZVNrZXRjaGZhYihpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLmNvbXBpbGVyQ29udGV4dC5nYW1lID0gc3RhdGUuZ2FtZTtcbiAgICAgICAgICAgIHN0YXRlLmNvbXBpbGVyQ29udGV4dC5tZWRpYUl0ZW1zID0gc3RhdGUubWVkaWFJdGVtcztcbiAgICAgICAgICAgIHN0YXRlLmNvbXBpbGVyQ29udGV4dC5zZWxsYWJsZXMgPSBzZWxsYWJsZV9tb2RlbF8xLlNlbGxhYmxlLnBvcHVsYXRlKHJlc3BvbnNlLnNlbGxhYmxlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hW2V4cG9ydHMuTXV0YXRpb25zLnNldFRlbXBsYXRlXSA9IGZ1bmN0aW9uIChzdGF0ZSwgdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNpdGUudGhlbWUudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgX2FbZXhwb3J0cy5NdXRhdGlvbnMuc2V0Q29udGVudEJsb2NrXSA9IGZ1bmN0aW9uIChzdGF0ZSwgYmxvY2spIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbnRlbnRCbG9jay5hc3NpZ24oYmxvY2spO1xuICAgICAgICB9LFxuICAgICAgICBfYSksXG4gICAgYWN0aW9uczogKF9iID0ge30sXG4gICAgICAgIF9iW2V4cG9ydHMuQWN0aW9ucy5ib290c3RyYXBdID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgY29tbWl0ID0gX2EuY29tbWl0O1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIsIHVybCwgcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0pfQlVJTERfVFlQRSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gJ2Nyb3MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnN1YnN0cigwLCB3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKCcuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGFwaV9zZXJ2aWNlXzEuQXBpLnNlbmRSZXF1ZXN0KFwiL3NpdGVzLWlvL1wiICsgdXNlciArIFwiL1wiICsgdXJsKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0KGV4cG9ydHMuTXV0YXRpb25zLmJvb3RzdHJhcCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9iKVxufSk7XG52YXIgX2EsIF9iO1xuIl19

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
__webpack_require__(83);
var Vue = __webpack_require__(2);
var screen_service_1 = __webpack_require__(20);
var ruler_service_1 = __webpack_require__(76);
var helper_service_1 = __webpack_require__(231);
var WIDTH_HEIGHT_REGEX = /\/(\d+)x(\d+)\//;
var WIDTH_REGEX = /\/(\d+)\//;
var registeredDirectives = new Map();
exports.AppImgResponsive = {
    inserted: function (el, binding) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        el.classList.add('img-responsive');
                        registeredDirectives.set(el, {
                            resizeChanges: screen_service_1.Screen.resizeChanges.subscribe(function () { return updateSrc(el, binding.value); }),
                        });
                        // Make sure the view is compiled.
                        return [4 /*yield*/, Vue.nextTick()];
                    case 1:
                        // Make sure the view is compiled.
                        _a.sent();
                        updateSrc(el, binding.value);
                        return [2 /*return*/];
                }
            });
        });
    },
    update: function (el, binding) {
        if (binding.value !== binding.oldValue) {
            updateSrc(el, binding.value);
        }
    },
    unbind: function (el) {
        var elData = registeredDirectives.get(el);
        if (elData) {
            elData.resizeChanges.unsubscribe();
            registeredDirectives.delete(el);
        }
    }
};
function updateSrc(el, src) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var containerWidth, newSrc, mediaserverWidth;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    containerWidth = ruler_service_1.Ruler.width(el.parentNode);
                    // Make sure we never do a 0 width, just in case.
                    // Seems to happen in some situations.
                    if (containerWidth <= 0) {
                        return [2 /*return*/];
                    }
                    newSrc = src;
                    mediaserverWidth = containerWidth;
                    if (screen_service_1.Screen.isHiDpi) {
                        // For high dpi, double the width.
                        mediaserverWidth = mediaserverWidth * 2;
                        mediaserverWidth = Math.ceil(mediaserverWidth / 100) * 100;
                    }
                    else {
                        mediaserverWidth = Math.ceil(mediaserverWidth / 100) * 100;
                    }
                    if (newSrc.search(WIDTH_HEIGHT_REGEX) !== -1) {
                        newSrc = newSrc.replace(WIDTH_HEIGHT_REGEX, '/' + mediaserverWidth + 'x2000/');
                    }
                    else {
                        newSrc = newSrc.replace(WIDTH_REGEX, '/' + mediaserverWidth + '/');
                    }
                    if (!(newSrc !== el.src)) return [3 /*break*/, 2];
                    el.src = newSrc;
                    // Keep the isLoaded state up to date?
                    el.dispatchEvent(new CustomEvent('imgloadchange', { detail: false }));
                    return [4 /*yield*/, helper_service_1.ImgHelper.loaded(newSrc)];
                case 1:
                    _a.sent();
                    el.dispatchEvent(new CustomEvent('imgloadchange', { detail: true }));
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLFFBQVE7QUFDUixJQUFJLE1BQU0sUUFBUTtBQUNsQixJQUFJLG1CQUFtQixRQUFRO0FBQy9CLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxtQkFBbUIsUUFBUTtBQUMvQixJQUFJLHFCQUFxQjtBQUN6QixJQUFJLGNBQWM7QUFDbEIsSUFBSSx1QkFBdUIsSUFBSTtBQUMvQixRQUFRLG1CQUFtQjtJQUN2QixVQUFVLFVBQVUsSUFBSSxTQUFTO1FBQzdCLE9BQU8sUUFBUSxVQUFVLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZO1lBQ3ZELE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO2dCQUMzQyxRQUFRLEdBQUc7b0JBQ1AsS0FBSzt3QkFDRCxHQUFHLFVBQVUsSUFBSTt3QkFDakIscUJBQXFCLElBQUksSUFBSTs0QkFDekIsZUFBZSxpQkFBaUIsT0FBTyxjQUFjLFVBQVUsWUFBWSxFQUFFLE9BQU8sVUFBVSxJQUFJLFFBQVE7Ozt3QkFHOUcsT0FBTyxDQUFDLGFBQWEsSUFBSTtvQkFDN0IsS0FBSzs7d0JBRUQsR0FBRzt3QkFDSCxVQUFVLElBQUksUUFBUTt3QkFDdEIsT0FBTyxDQUFDOzs7OztJQUs1QixRQUFRLFVBQVUsSUFBSSxTQUFTO1FBQzNCLElBQUksUUFBUSxVQUFVLFFBQVEsVUFBVTtZQUNwQyxVQUFVLElBQUksUUFBUTs7O0lBRzlCLFFBQVEsVUFBVSxJQUFJO1FBQ2xCLElBQUksU0FBUyxxQkFBcUIsSUFBSTtRQUN0QyxJQUFJLFFBQVE7WUFDUixPQUFPLGNBQWM7WUFDckIscUJBQXFCLE9BQU87Ozs7QUFJeEMsU0FBUyxVQUFVLElBQUksS0FBSztJQUN4QixPQUFPLFFBQVEsVUFBVSxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTtRQUN2RCxJQUFJLGdCQUFnQixRQUFRO1FBQzVCLE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO1lBQzNDLFFBQVEsR0FBRztnQkFDUCxLQUFLO29CQUNELGlCQUFpQixnQkFBZ0IsTUFBTSxNQUFNLEdBQUc7OztvQkFHaEQsSUFBSSxrQkFBa0IsR0FBRzt3QkFDckIsT0FBTyxDQUFDOztvQkFFWixTQUFTO29CQUNULG1CQUFtQjtvQkFDbkIsSUFBSSxpQkFBaUIsT0FBTyxTQUFTOzt3QkFFakMsbUJBQW1CLG1CQUFtQjt3QkFDdEMsbUJBQW1CLEtBQUssS0FBSyxtQkFBbUIsT0FBTzs7eUJBRXREO3dCQUNELG1CQUFtQixLQUFLLEtBQUssbUJBQW1CLE9BQU87O29CQUUzRCxJQUFJLE9BQU8sT0FBTyx3QkFBd0IsQ0FBQyxHQUFHO3dCQUMxQyxTQUFTLE9BQU8sUUFBUSxvQkFBb0IsTUFBTSxtQkFBbUI7O3lCQUVwRTt3QkFDRCxTQUFTLE9BQU8sUUFBUSxhQUFhLE1BQU0sbUJBQW1COztvQkFFbEUsSUFBSSxFQUFFLFdBQVcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxhQUFhO29CQUMvQyxHQUFHLE1BQU07O29CQUVULEdBQUcsY0FBYyxJQUFJLFlBQVksaUJBQWlCLEVBQUUsUUFBUTtvQkFDNUQsT0FBTyxDQUFDLGFBQWEsaUJBQWlCLFVBQVUsT0FBTztnQkFDM0QsS0FBSztvQkFDRCxHQUFHO29CQUNILEdBQUcsY0FBYyxJQUFJLFlBQVksaUJBQWlCLEVBQUUsUUFBUTtvQkFDNUQsR0FBRyxRQUFRO2dCQUNmLEtBQUssR0FBRyxPQUFPLENBQUM7Ozs7O0FBS2hDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciBzY3JlZW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NjcmVlbi9zY3JlZW4tc2VydmljZVwiKTtcbnZhciBydWxlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vcnVsZXIvcnVsZXItc2VydmljZVwiKTtcbnZhciBoZWxwZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2hlbHBlci9oZWxwZXItc2VydmljZVwiKTtcbnZhciBXSURUSF9IRUlHSFRfUkVHRVggPSAvXFwvKFxcZCspeChcXGQrKVxcLy87XG52YXIgV0lEVEhfUkVHRVggPSAvXFwvKFxcZCspXFwvLztcbnZhciByZWdpc3RlcmVkRGlyZWN0aXZlcyA9IG5ldyBNYXAoKTtcbmV4cG9ydHMuQXBwSW1nUmVzcG9uc2l2ZSA9IHtcbiAgICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdpbWctcmVzcG9uc2l2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZERpcmVjdGl2ZXMuc2V0KGVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2hhbmdlczogc2NyZWVuX3NlcnZpY2VfMS5TY3JlZW4ucmVzaXplQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gdXBkYXRlU3JjKGVsLCBiaW5kaW5nLnZhbHVlKTsgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmlldyBpcyBjb21waWxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFZ1ZS5uZXh0VGljaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2aWV3IGlzIGNvbXBpbGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3JjKGVsLCBiaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xuICAgICAgICBpZiAoYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSkge1xuICAgICAgICAgICAgdXBkYXRlU3JjKGVsLCBiaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsRGF0YSA9IHJlZ2lzdGVyZWREaXJlY3RpdmVzLmdldChlbCk7XG4gICAgICAgIGlmIChlbERhdGEpIHtcbiAgICAgICAgICAgIGVsRGF0YS5yZXNpemVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICByZWdpc3RlcmVkRGlyZWN0aXZlcy5kZWxldGUoZWwpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIHVwZGF0ZVNyYyhlbCwgc3JjKSB7XG4gICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250YWluZXJXaWR0aCwgbmV3U3JjLCBtZWRpYXNlcnZlcldpZHRoO1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gcnVsZXJfc2VydmljZV8xLlJ1bGVyLndpZHRoKGVsLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgbmV2ZXIgZG8gYSAwIHdpZHRoLCBqdXN0IGluIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZW1zIHRvIGhhcHBlbiBpbiBzb21lIHNpdHVhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJXaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBtZWRpYXNlcnZlcldpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JlZW5fc2VydmljZV8xLlNjcmVlbi5pc0hpRHBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaGlnaCBkcGksIGRvdWJsZSB0aGUgd2lkdGguXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXNlcnZlcldpZHRoID0gbWVkaWFzZXJ2ZXJXaWR0aCAqIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXNlcnZlcldpZHRoID0gTWF0aC5jZWlsKG1lZGlhc2VydmVyV2lkdGggLyAxMDApICogMTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFzZXJ2ZXJXaWR0aCA9IE1hdGguY2VpbChtZWRpYXNlcnZlcldpZHRoIC8gMTAwKSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3JjLnNlYXJjaChXSURUSF9IRUlHSFRfUkVHRVgpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3JjID0gbmV3U3JjLnJlcGxhY2UoV0lEVEhfSEVJR0hUX1JFR0VYLCAnLycgKyBtZWRpYXNlcnZlcldpZHRoICsgJ3gyMDAwLycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3JjID0gbmV3U3JjLnJlcGxhY2UoV0lEVEhfUkVHRVgsICcvJyArIG1lZGlhc2VydmVyV2lkdGggKyAnLycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKG5ld1NyYyAhPT0gZWwuc3JjKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGVsLnNyYyA9IG5ld1NyYztcbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgaXNMb2FkZWQgc3RhdGUgdXAgdG8gZGF0ZT9cbiAgICAgICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ltZ2xvYWRjaGFuZ2UnLCB7IGRldGFpbDogZmFsc2UgfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWxwZXJfc2VydmljZV8xLkltZ0hlbHBlci5sb2FkZWQobmV3U3JjKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbWdsb2FkY2hhbmdlJywgeyBkZXRhaWw6IHRydWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIl19

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Loader = (function () {
    function Loader() {
    }
    Loader.addLoader = function (loader) {
        this.loaders[loader.name] = loader;
    };
    Loader.load = function (name) {
        if (!this.loaders[name]) {
            throw new Error("The loader \"" + name + "\" is not registered.");
        }
        return this.loaders[name].load();
    };
    Loader.ready = function (name) {
        if (!this.loaders[name]) {
            console.error(new Error("The loader \"" + name + "\" is not registered."));
            return false;
        }
        return this.loaders[name].isReady;
    };
    return Loader;
}());
Loader.loaders = {};
exports.Loader = Loader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxZQUFZO0lBQ3RCLFNBQVMsU0FBUzs7SUFFbEIsT0FBTyxZQUFZLFVBQVUsUUFBUTtRQUNqQyxLQUFLLFFBQVEsT0FBTyxRQUFROztJQUVoQyxPQUFPLE9BQU8sVUFBVSxNQUFNO1FBQzFCLElBQUksQ0FBQyxLQUFLLFFBQVEsT0FBTztZQUNyQixNQUFNLElBQUksTUFBTSxrQkFBa0IsT0FBTzs7UUFFN0MsT0FBTyxLQUFLLFFBQVEsTUFBTTs7SUFFOUIsT0FBTyxRQUFRLFVBQVUsTUFBTTtRQUMzQixJQUFJLENBQUMsS0FBSyxRQUFRLE9BQU87WUFDckIsUUFBUSxNQUFNLElBQUksTUFBTSxrQkFBa0IsT0FBTztZQUNqRCxPQUFPOztRQUVYLE9BQU8sS0FBSyxRQUFRLE1BQU07O0lBRTlCLE9BQU87O0FBRVgsT0FBTyxVQUFVO0FBQ2pCLFFBQVEsU0FBUztBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIExvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgIH1cbiAgICBMb2FkZXIuYWRkTG9hZGVyID0gZnVuY3Rpb24gKGxvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlcnNbbG9hZGVyLm5hbWVdID0gbG9hZGVyO1xuICAgIH07XG4gICAgTG9hZGVyLmxvYWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxvYWRlciBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIG5vdCByZWdpc3RlcmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXJzW25hbWVdLmxvYWQoKTtcbiAgICB9O1xuICAgIExvYWRlci5yZWFkeSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIlRoZSBsb2FkZXIgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyBub3QgcmVnaXN0ZXJlZC5cIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbbmFtZV0uaXNSZWFkeTtcbiAgICB9O1xuICAgIHJldHVybiBMb2FkZXI7XG59KCkpO1xuTG9hZGVyLmxvYWRlcnMgPSB7fTtcbmV4cG9ydHMuTG9hZGVyID0gTG9hZGVyO1xuIl19

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var MediaItem = (function (_super) {
    tslib_1.__extends(MediaItem, _super);
    function MediaItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaItem.prototype.getDimensions = function (maxWidth, maxHeight, options) {
        if (options === void 0) { options = {}; }
        // Simple getter for dimensions.
        if (!maxWidth && !maxHeight) {
            return {
                width: this.width,
                height: this.height,
            };
        }
        else if (options && options.force && maxWidth && maxHeight) {
            return {
                width: maxWidth,
                height: maxHeight,
            };
        }
        var aspectRatio = this.height / this.width;
        var width, height;
        // Forcing one of the dimensions is easy.
        if (options && options.force) {
            width = maxWidth || height / aspectRatio;
            height = maxHeight || width * aspectRatio;
        }
        else {
            // Setting max for both.
            if (maxWidth && maxHeight) {
                width = Math.min(this.width, maxWidth);
                height = width * aspectRatio;
                if (height > maxHeight) {
                    height = maxHeight;
                    width = height / aspectRatio;
                }
            }
            else if (maxWidth && !maxHeight) {
                width = Math.min(this.width, maxWidth);
                height = width * aspectRatio;
            }
            else if (!maxWidth && maxHeight) {
                height = Math.min(this.height, maxHeight);
                width = height / aspectRatio;
            }
        }
        return {
            width: width,
            height: height,
        };
    };
    MediaItem.prototype.getCrop = function () {
        if (!this.crop_end_x || !this.crop_end_y) {
            return undefined;
        }
        return {
            x: this.crop_start_x,
            y: this.crop_start_y,
            x2: this.crop_end_x,
            y2: this.crop_end_y,
        };
    };
    MediaItem.prototype.$save = function () {
        if (this.type != MediaItem.TYPE_FIRESIDE_POST_IMAGE
            && this.type != MediaItem.TYPE_FIRESIDE_POST_HEADER) {
            throw new Error('Can only save fireside media items.');
        }
        if (!this.id) {
            return this.$_save('/fireside/dash/posts/media/upload/' + this.post_id + '/' + this.type, 'mediaItem', { file: this.file });
        }
    };
    MediaItem.prototype.$remove = function () {
        if (this.type != MediaItem.TYPE_FIRESIDE_POST_IMAGE
            && this.type != MediaItem.TYPE_FIRESIDE_POST_HEADER) {
            throw new Error('Can only save fireside media items.');
        }
        return this.$_remove('/fireside/dash/posts/media/remove/' + this.id);
    };
    return MediaItem;
}(model_service_1.Model));
MediaItem.TYPE_GAME_THUMBNAIL = 'game-thumbnail';
MediaItem.TYPE_GAME_HEADER = 'game-header';
MediaItem.TYPE_GAME_SCREENSHOT = 'game-screenshot';
MediaItem.TYPE_GAME_TROPHY = 'game-trophy';
MediaItem.TYPE_FIRESIDE_POST_HEADER = 'fireside-post-header';
MediaItem.TYPE_FIRESIDE_POST_IMAGE = 'fireside-post-image';
MediaItem.TYPE_FEATURED_HEADER = 'featured-header';
MediaItem.STATUS_ACTIVE = 'active';
MediaItem.STATUS_REMOVED = 'removed';
exports.MediaItem = MediaItem;
model_service_1.Model.create(MediaItem);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxhQUFhLFVBQVUsUUFBUTtJQUMvQixRQUFRLFVBQVUsV0FBVztJQUM3QixTQUFTLFlBQVk7UUFDakIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsVUFBVSxVQUFVLGdCQUFnQixVQUFVLFVBQVUsV0FBVyxTQUFTO1FBQ3hFLElBQUksWUFBWSxLQUFLLEdBQUcsRUFBRSxVQUFVOztRQUVwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7WUFDekIsT0FBTztnQkFDSCxPQUFPLEtBQUs7Z0JBQ1osUUFBUSxLQUFLOzs7YUFHaEIsSUFBSSxXQUFXLFFBQVEsU0FBUyxZQUFZLFdBQVc7WUFDeEQsT0FBTztnQkFDSCxPQUFPO2dCQUNQLFFBQVE7OztRQUdoQixJQUFJLGNBQWMsS0FBSyxTQUFTLEtBQUs7UUFDckMsSUFBSSxPQUFPOztRQUVYLElBQUksV0FBVyxRQUFRLE9BQU87WUFDMUIsUUFBUSxZQUFZLFNBQVM7WUFDN0IsU0FBUyxhQUFhLFFBQVE7O2FBRTdCOztZQUVELElBQUksWUFBWSxXQUFXO2dCQUN2QixRQUFRLEtBQUssSUFBSSxLQUFLLE9BQU87Z0JBQzdCLFNBQVMsUUFBUTtnQkFDakIsSUFBSSxTQUFTLFdBQVc7b0JBQ3BCLFNBQVM7b0JBQ1QsUUFBUSxTQUFTOzs7aUJBR3BCLElBQUksWUFBWSxDQUFDLFdBQVc7Z0JBQzdCLFFBQVEsS0FBSyxJQUFJLEtBQUssT0FBTztnQkFDN0IsU0FBUyxRQUFROztpQkFFaEIsSUFBSSxDQUFDLFlBQVksV0FBVztnQkFDN0IsU0FBUyxLQUFLLElBQUksS0FBSyxRQUFRO2dCQUMvQixRQUFRLFNBQVM7OztRQUd6QixPQUFPO1lBQ0gsT0FBTztZQUNQLFFBQVE7OztJQUdoQixVQUFVLFVBQVUsVUFBVSxZQUFZO1FBQ3RDLElBQUksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxLQUFLLFlBQVk7WUFDdEMsT0FBTzs7UUFFWCxPQUFPO1lBQ0gsR0FBRyxLQUFLO1lBQ1IsR0FBRyxLQUFLO1lBQ1IsSUFBSSxLQUFLO1lBQ1QsSUFBSSxLQUFLOzs7SUFHakIsVUFBVSxVQUFVLFFBQVEsWUFBWTtRQUNwQyxJQUFJLEtBQUssUUFBUSxVQUFVO2VBQ3BCLEtBQUssUUFBUSxVQUFVLDJCQUEyQjtZQUNyRCxNQUFNLElBQUksTUFBTTs7UUFFcEIsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUNWLE9BQU8sS0FBSyxPQUFPLHVDQUF1QyxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sYUFBYSxFQUFFLE1BQU0sS0FBSzs7O0lBRzVILFVBQVUsVUFBVSxVQUFVLFlBQVk7UUFDdEMsSUFBSSxLQUFLLFFBQVEsVUFBVTtlQUNwQixLQUFLLFFBQVEsVUFBVSwyQkFBMkI7WUFDckQsTUFBTSxJQUFJLE1BQU07O1FBRXBCLE9BQU8sS0FBSyxTQUFTLHVDQUF1QyxLQUFLOztJQUVyRSxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLFVBQVUsc0JBQXNCO0FBQ2hDLFVBQVUsbUJBQW1CO0FBQzdCLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVUsbUJBQW1CO0FBQzdCLFVBQVUsNEJBQTRCO0FBQ3RDLFVBQVUsMkJBQTJCO0FBQ3JDLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVUsZ0JBQWdCO0FBQzFCLFVBQVUsaUJBQWlCO0FBQzNCLFFBQVEsWUFBWTtBQUNwQixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciBNZWRpYUl0ZW0gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1lZGlhSXRlbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZWRpYUl0ZW0oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTWVkaWFJdGVtLnByb3RvdHlwZS5nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKG1heFdpZHRoLCBtYXhIZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgLy8gU2ltcGxlIGdldHRlciBmb3IgZGltZW5zaW9ucy5cbiAgICAgICAgaWYgKCFtYXhXaWR0aCAmJiAhbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JjZSAmJiBtYXhXaWR0aCAmJiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNwZWN0UmF0aW8gPSB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgICAvLyBGb3JjaW5nIG9uZSBvZiB0aGUgZGltZW5zaW9ucyBpcyBlYXN5LlxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmZvcmNlKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1heFdpZHRoIHx8IGhlaWdodCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0IHx8IHdpZHRoICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIG1heCBmb3IgYm90aC5cbiAgICAgICAgICAgIGlmIChtYXhXaWR0aCAmJiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGgsIG1heFdpZHRoKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1heFdpZHRoICYmICFtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGgsIG1heFdpZHRoKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIW1heFdpZHRoICYmIG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBtYXhIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTWVkaWFJdGVtLnByb3RvdHlwZS5nZXRDcm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3JvcF9lbmRfeCB8fCAhdGhpcy5jcm9wX2VuZF95KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLmNyb3Bfc3RhcnRfeCxcbiAgICAgICAgICAgIHk6IHRoaXMuY3JvcF9zdGFydF95LFxuICAgICAgICAgICAgeDI6IHRoaXMuY3JvcF9lbmRfeCxcbiAgICAgICAgICAgIHkyOiB0aGlzLmNyb3BfZW5kX3ksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNZWRpYUl0ZW0ucHJvdG90eXBlLiRzYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9IE1lZGlhSXRlbS5UWVBFX0ZJUkVTSURFX1BPU1RfSU1BR0VcbiAgICAgICAgICAgICYmIHRoaXMudHlwZSAhPSBNZWRpYUl0ZW0uVFlQRV9GSVJFU0lERV9QT1NUX0hFQURFUikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBzYXZlIGZpcmVzaWRlIG1lZGlhIGl0ZW1zLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvZmlyZXNpZGUvZGFzaC9wb3N0cy9tZWRpYS91cGxvYWQvJyArIHRoaXMucG9zdF9pZCArICcvJyArIHRoaXMudHlwZSwgJ21lZGlhSXRlbScsIHsgZmlsZTogdGhpcy5maWxlIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZWRpYUl0ZW0ucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgIT0gTWVkaWFJdGVtLlRZUEVfRklSRVNJREVfUE9TVF9JTUFHRVxuICAgICAgICAgICAgJiYgdGhpcy50eXBlICE9IE1lZGlhSXRlbS5UWVBFX0ZJUkVTSURFX1BPU1RfSEVBREVSKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHNhdmUgZmlyZXNpZGUgbWVkaWEgaXRlbXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJF9yZW1vdmUoJy9maXJlc2lkZS9kYXNoL3Bvc3RzL21lZGlhL3JlbW92ZS8nICsgdGhpcy5pZCk7XG4gICAgfTtcbiAgICByZXR1cm4gTWVkaWFJdGVtO1xufShtb2RlbF9zZXJ2aWNlXzEuTW9kZWwpKTtcbk1lZGlhSXRlbS5UWVBFX0dBTUVfVEhVTUJOQUlMID0gJ2dhbWUtdGh1bWJuYWlsJztcbk1lZGlhSXRlbS5UWVBFX0dBTUVfSEVBREVSID0gJ2dhbWUtaGVhZGVyJztcbk1lZGlhSXRlbS5UWVBFX0dBTUVfU0NSRUVOU0hPVCA9ICdnYW1lLXNjcmVlbnNob3QnO1xuTWVkaWFJdGVtLlRZUEVfR0FNRV9UUk9QSFkgPSAnZ2FtZS10cm9waHknO1xuTWVkaWFJdGVtLlRZUEVfRklSRVNJREVfUE9TVF9IRUFERVIgPSAnZmlyZXNpZGUtcG9zdC1oZWFkZXInO1xuTWVkaWFJdGVtLlRZUEVfRklSRVNJREVfUE9TVF9JTUFHRSA9ICdmaXJlc2lkZS1wb3N0LWltYWdlJztcbk1lZGlhSXRlbS5UWVBFX0ZFQVRVUkVEX0hFQURFUiA9ICdmZWF0dXJlZC1oZWFkZXInO1xuTWVkaWFJdGVtLlNUQVRVU19BQ1RJVkUgPSAnYWN0aXZlJztcbk1lZGlhSXRlbS5TVEFUVVNfUkVNT1ZFRCA9ICdyZW1vdmVkJztcbmV4cG9ydHMuTWVkaWFJdGVtID0gTWVkaWFJdGVtO1xubW9kZWxfc2VydmljZV8xLk1vZGVsLmNyZWF0ZShNZWRpYUl0ZW0pO1xuIl19

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(25);
var environment_service_1 = __webpack_require__(48);
var analytics_service_1 = __webpack_require__(47);
var Payload = (function () {
    function Payload() {
    }
    Payload.initAngular = function (app, $transitions) {
        var _this = this;
        if (false) {
            this.App = app;
            // We have to set up a watch on stateChangeErrors.
            // If the error is that we got a new version, then we need to refresh the whole window and follow the new URL.
            // This will force an update of the whole page to pull in the new version's code.
            $transitions.onError({}, function (trans) {
                _this.handlePayloadError(trans);
            });
        }
    };
    // TODO: Payload error handling for Vue.
    Payload.initVue = function (store) {
        if (true) {
            this.store = store;
        }
    };
    Payload.addErrorHandler = function (handler) {
        this.errorHandlers.push(handler);
    };
    Payload.removeErrorHandler = function (handler) {
        _.pull(this.errorHandlers, handler);
    };
    Payload.processResponse = function (requestPromise, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, data, response_1, rethrowErrors, $rootScope, event;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = tslib_1.__assign({}, {
                            ignorePayloadUser: false,
                            ignorePayloadVersion: false,
                            noErrorRedirect: false,
                        }, options);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, requestPromise];
                    case 2:
                        response = _a.sent();
                        if (true) {
                            response = response || {};
                            response.data = JSON.parse(response.text);
                        }
                        if (!response || !response.data) {
                            if (!options.noErrorRedirect) {
                                throw {
                                    type: 'payload',
                                    error: this.ERROR_INVALID,
                                    response: response ? (response.data || undefined) : undefined,
                                };
                            }
                            else {
                                throw response.data || undefined;
                            }
                        }
                        data = response.data;
                        // Don't resolve so that the state doesn't show.
                        if (this.checkRedirect(response)) {
                            return [2 /*return*/];
                        }
                        this.checkPayloadUser(response, options);
                        this.checkPayloadVersion(data, options);
                        this.checkAnalyticsExperiments(response, options);
                        if (false) {
                            utils_1.getProvider('$rootScope').$emit('Payload.responseSuccess', response);
                        }
                        return [2 /*return*/, data.payload];
                    case 3:
                        response_1 = _a.sent();
                        rethrowErrors = [this.ERROR_INVALID, this.ERROR_NEW_VERSION];
                        if (response_1.type === 'payload' && rethrowErrors.indexOf(response_1.error) !== -1) {
                            throw response_1;
                        }
                        if (this.checkRedirect(response_1)) {
                            return [2 /*return*/];
                        }
                        this.checkPayloadUser(response_1, options);
                        // Send an event and let other services react.
                        if (false) {
                            $rootScope = utils_1.getProvider('$rootScope');
                            event = $rootScope.$emit('Payload.responseError', response_1, options);
                            // If the default was prevented, then we want to allow the response to resolve even though it failed.
                            if (event.defaultPrevented) {
                                return [2 /*return*/, response_1];
                            }
                        }
                        if (!options.noErrorRedirect) {
                            // If the response indicated a failed connection.
                            if (response_1.status === -1) {
                                throw {
                                    type: 'payload',
                                    error: this.ERROR_OFFLINE,
                                    response: null,
                                };
                            }
                            else if (response_1.status === 401) {
                                throw {
                                    type: 'payload',
                                    error: this.ERROR_NOT_LOGGED,
                                    response: response_1.data || null,
                                };
                            }
                            else {
                                throw {
                                    type: 'payload',
                                    error: this.ERROR_HTTP_ERROR,
                                    response: response_1.data || null,
                                    status: response_1.status || undefined,
                                };
                            }
                        }
                        else {
                            throw response_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Payload.checkRedirect = function (response) {
        if (!response || !response.data || !response.data.redirect) {
            return false;
        }
        // Redirecting within the app.
        if (false) {
            utils_1.getProvider('$location').url(response.data.redirect);
        }
        else {
            throw new Error("Response redirect isn't supported for Vue yet.");
        }
        return true;
    };
    Payload.checkPayloadVersion = function (data, options) {
        // We ignore completely if we're in the client.
        // We don't want the client refreshing when an update to site is pushed out.
        if (options.ignorePayloadVersion || false || true) {
            return;
        }
        if (data.ver !== this.ver) {
            // If we didn't have a version, then it's the first payload.
            // Simply assign it.
            if (this.ver === undefined) {
                this.ver = data.ver;
            }
            else {
                // Reject with the ERROR_NEW_VERSION error.
                // The $stateChangeError event will catch this and reload the page to the new route.
                throw {
                    type: 'payload',
                    error: this.ERROR_NEW_VERSION,
                };
            }
        }
    };
    Payload.checkPayloadUser = function (response, options) {
        if (options.ignorePayloadUser || !response || !response.data || (!this.App && !this.store)) {
            return;
        }
        var data = response.data;
        // Only process if this payload response had a user attached to it.
        // It couid be null (for logged out) or an object (if logged in).
        if (typeof data.user !== 'undefined') {
            // If they are logged out, we want to ensure the app user is nulled as well.
            if (data.user === null) {
                if (false) {
                    this.App.user = null;
                }
                else if (true) {
                    this.store.commit('app/clearUser');
                }
            }
            else {
                // We have to require dynamically here, otherwise we end up with
                // a circular reference some times. Something -> User -> Api -> Payload -> User...
                var UserModel = __webpack_require__(113).User;
                var user = new UserModel(data.user);
                if (false) {
                    this.App.user = user;
                }
                else if (true) {
                    this.store.commit('app/setUser', user);
                }
            }
        }
        // Emit an event to the root scope that a payload has been received and the user has been set.
        if (false) {
            utils_1.getProvider('$rootScope').$emit('Payload.userProcessed', !!this.App.user);
        }
    };
    Payload.checkAnalyticsExperiments = function (response, _options) {
        if (!response.data.payload) {
            return;
        }
        var payload = response.data.payload;
        if (payload._experiment && payload._variation && payload._variation !== -1) {
            analytics_service_1.Analytics.setCurrentExperiment(payload._experiment, payload._variation);
        }
    };
    Payload.handlePayloadError = function (trans, error) {
        // They may pass in `error` if this API call wasn't done in the middle of a transition.
        if (!error) {
            error = trans.error();
        }
        var toState = trans.to();
        var toParams = trans.params('to');
        var fromState = trans.from();
        var fromParams = trans.params('from');
        var event = {
            defaultPrevented: false,
            preventDefault: function () {
                event.defaultPrevented = true;
            },
        };
        // Only process if it's a payload error.
        if (!error || !error.type || error.type !== 'payload') {
            return;
        }
        // Handlers can return false to stop processing other handlers set up.
        // They can `.preventDefault()` to not do the default handling below.
        if (this.errorHandlers.length) {
            for (var _i = 0, _a = this.errorHandlers; _i < _a.length; _i++) {
                var errorHandler = _a[_i];
                if (errorHandler(event, toState, toParams, fromState, fromParams, error) === false) {
                    break;
                }
            }
        }
        if (!event.defaultPrevented) {
            var $state = utils_1.getProvider('$state');
            var $location = utils_1.getProvider('$location');
            if (error.error === this.ERROR_NEW_VERSION) {
                window.location.href = $state.href(toState, toParams, { absolute: true });
            }
            else if (error.error === this.ERROR_NOT_LOGGED) {
                window.location.href = environment_service_1.Environment.authBaseUrl + '/login?redirect=' + encodeURIComponent($location.url());
            }
            else if (error.error === this.ERROR_INVALID) {
                $state.go('error-500');
            }
            else if (error.error === this.ERROR_HTTP_ERROR && (!error.status || this.httpErrors.indexOf(error.status) !== -1)) {
                $state.go('error-' + (error.status || 500));
            }
            else {
                var retryUrl = $state.href(toState, toParams);
                $state.go('error-offline', { retryUrl: retryUrl });
            }
        }
    };
    return Payload;
}());
Payload.ERROR_NEW_VERSION = 'payload-new-version';
Payload.ERROR_NOT_LOGGED = 'payload-not-logged';
Payload.ERROR_INVALID = 'payload-invalid';
Payload.ERROR_HTTP_ERROR = 'payload-error';
Payload.ERROR_OFFLINE = 'payload-offline';
Payload.httpErrors = [
    400,
    403,
    404,
    500,
];
Payload.ver = undefined;
Payload.errorHandlers = [];
exports.Payload = Payload;

//# sourceMappingURL=data:application/json;base64,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QjtZQUN6QixJQUFJLFNBQVMsUUFBUSxZQUFZO1lBQ2pDLElBQUksWUFBWSxRQUFRLFlBQVk7WUFDcEMsSUFBSSxNQUFNLFVBQVUsS0FBSyxtQkFBbUI7Z0JBQ3hDLE9BQU8sU0FBUyxPQUFPLE9BQU8sS0FBSyxTQUFTLFVBQVUsRUFBRSxVQUFVOztpQkFFakUsSUFBSSxNQUFNLFVBQVUsS0FBSyxrQkFBa0I7Z0JBQzVDLE9BQU8sU0FBUyxPQUFPLHNCQUFzQixZQUFZLGNBQWMscUJBQXFCLG1CQUFtQixVQUFVOztpQkFFeEgsSUFBSSxNQUFNLFVBQVUsS0FBSyxlQUFlO2dCQUN6QyxPQUFPLEdBQUc7O2lCQUVULElBQUksTUFBTSxVQUFVLEtBQUsscUJBQXFCLENBQUMsTUFBTSxVQUFVLEtBQUssV0FBVyxRQUFRLE1BQU0sWUFBWSxDQUFDLElBQUk7Z0JBQy9HLE9BQU8sR0FBRyxZQUFZLE1BQU0sVUFBVTs7aUJBRXJDO2dCQUNELElBQUksV0FBVyxPQUFPLEtBQUssU0FBUztnQkFDcEMsT0FBTyxHQUFHLGlCQUFpQixFQUFFLFVBQVU7Ozs7SUFJbkQsT0FBTzs7QUFFWCxRQUFRLG9CQUFvQjtBQUM1QixRQUFRLG1CQUFtQjtBQUMzQixRQUFRLGdCQUFnQjtBQUN4QixRQUFRLG1CQUFtQjtBQUMzQixRQUFRLGdCQUFnQjtBQUN4QixRQUFRLGFBQWE7SUFDakI7SUFDQTtJQUNBO0lBQ0E7O0FBRUosUUFBUSxNQUFNO0FBQ2QsUUFBUSxnQkFBZ0I7QUFDeEIsUUFBUSxVQUFVO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xudmFyIGVudmlyb25tZW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5zZXJ2aWNlXCIpO1xudmFyIGFuYWx5dGljc19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYW5hbHl0aWNzL2FuYWx5dGljcy5zZXJ2aWNlXCIpO1xudmFyIFBheWxvYWQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBheWxvYWQoKSB7XG4gICAgfVxuICAgIFBheWxvYWQuaW5pdEFuZ3VsYXIgPSBmdW5jdGlvbiAoYXBwLCAkdHJhbnNpdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKEdKX0lTX0FOR1VMQVIpIHtcbiAgICAgICAgICAgIHRoaXMuQXBwID0gYXBwO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBzZXQgdXAgYSB3YXRjaCBvbiBzdGF0ZUNoYW5nZUVycm9ycy5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlcnJvciBpcyB0aGF0IHdlIGdvdCBhIG5ldyB2ZXJzaW9uLCB0aGVuIHdlIG5lZWQgdG8gcmVmcmVzaCB0aGUgd2hvbGUgd2luZG93IGFuZCBmb2xsb3cgdGhlIG5ldyBVUkwuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgZm9yY2UgYW4gdXBkYXRlIG9mIHRoZSB3aG9sZSBwYWdlIHRvIHB1bGwgaW4gdGhlIG5ldyB2ZXJzaW9uJ3MgY29kZS5cbiAgICAgICAgICAgICR0cmFuc2l0aW9ucy5vbkVycm9yKHt9LCBmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVQYXlsb2FkRXJyb3IodHJhbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRPRE86IFBheWxvYWQgZXJyb3IgaGFuZGxpbmcgZm9yIFZ1ZS5cbiAgICBQYXlsb2FkLmluaXRWdWUgPSBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgaWYgKEdKX0lTX1ZVRSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXlsb2FkLmFkZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH07XG4gICAgUGF5bG9hZC5yZW1vdmVFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBfLnB1bGwodGhpcy5lcnJvckhhbmRsZXJzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIFBheWxvYWQucHJvY2Vzc1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlcXVlc3RQcm9taXNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBkYXRhLCByZXNwb25zZV8xLCByZXRocm93RXJyb3JzLCAkcm9vdFNjb3BlLCBldmVudDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVQYXlsb2FkVXNlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlUGF5bG9hZFZlcnNpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRXJyb3JSZWRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RQcm9taXNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0pfSVNfVlVFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMubm9FcnJvclJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXlsb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLkVSUk9SX0lOVkFMSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UgPyAocmVzcG9uc2UuZGF0YSB8fCB1bmRlZmluZWQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2UuZGF0YSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCByZXNvbHZlIHNvIHRoYXQgdGhlIHN0YXRlIGRvZXNuJ3Qgc2hvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUmVkaXJlY3QocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1BheWxvYWRVc2VyKHJlc3BvbnNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQYXlsb2FkVmVyc2lvbihkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbmFseXRpY3NFeHBlcmltZW50cyhyZXNwb25zZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzXzEuZ2V0UHJvdmlkZXIoJyRyb290U2NvcGUnKS4kZW1pdCgnUGF5bG9hZC5yZXNwb25zZVN1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YS5wYXlsb2FkXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldGhyb3dFcnJvcnMgPSBbdGhpcy5FUlJPUl9JTlZBTElELCB0aGlzLkVSUk9SX05FV19WRVJTSU9OXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV8xLnR5cGUgPT09ICdwYXlsb2FkJyAmJiByZXRocm93RXJyb3JzLmluZGV4T2YocmVzcG9uc2VfMS5lcnJvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUmVkaXJlY3QocmVzcG9uc2VfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGF5bG9hZFVzZXIocmVzcG9uc2VfMSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGFuIGV2ZW50IGFuZCBsZXQgb3RoZXIgc2VydmljZXMgcmVhY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUgPSB1dGlsc18xLmdldFByb3ZpZGVyKCckcm9vdFNjb3BlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSAkcm9vdFNjb3BlLiRlbWl0KCdQYXlsb2FkLnJlc3BvbnNlRXJyb3InLCByZXNwb25zZV8xLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGVmYXVsdCB3YXMgcHJldmVudGVkLCB0aGVuIHdlIHdhbnQgdG8gYWxsb3cgdGhlIHJlc3BvbnNlIHRvIHJlc29sdmUgZXZlbiB0aG91Z2ggaXQgZmFpbGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV8xXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMubm9FcnJvclJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlc3BvbnNlIGluZGljYXRlZCBhIGZhaWxlZCBjb25uZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV8xLnN0YXR1cyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BheWxvYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMuRVJST1JfT0ZGTElORSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZV8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXlsb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLkVSUk9SX05PVF9MT0dHRUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VfMS5kYXRhIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF5bG9hZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdGhpcy5FUlJPUl9IVFRQX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXzEuZGF0YSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZV8xLnN0YXR1cyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQYXlsb2FkLmNoZWNrUmVkaXJlY3QgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlZGlyZWN0aW5nIHdpdGhpbiB0aGUgYXBwLlxuICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgdXRpbHNfMS5nZXRQcm92aWRlcignJGxvY2F0aW9uJykudXJsKHJlc3BvbnNlLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVzcG9uc2UgcmVkaXJlY3QgaXNuJ3Qgc3VwcG9ydGVkIGZvciBWdWUgeWV0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFBheWxvYWQuY2hlY2tQYXlsb2FkVmVyc2lvbiA9IGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFdlIGlnbm9yZSBjb21wbGV0ZWx5IGlmIHdlJ3JlIGluIHRoZSBjbGllbnQuXG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdGhlIGNsaWVudCByZWZyZXNoaW5nIHdoZW4gYW4gdXBkYXRlIHRvIHNpdGUgaXMgcHVzaGVkIG91dC5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWdub3JlUGF5bG9hZFZlcnNpb24gfHwgR0pfSVNfQ0xJRU5UIHx8IEdKX0lTX1ZVRSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnZlciAhPT0gdGhpcy52ZXIpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGRpZG4ndCBoYXZlIGEgdmVyc2lvbiwgdGhlbiBpdCdzIHRoZSBmaXJzdCBwYXlsb2FkLlxuICAgICAgICAgICAgLy8gU2ltcGx5IGFzc2lnbiBpdC5cbiAgICAgICAgICAgIGlmICh0aGlzLnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSBkYXRhLnZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlamVjdCB3aXRoIHRoZSBFUlJPUl9ORVdfVkVSU0lPTiBlcnJvci5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJHN0YXRlQ2hhbmdlRXJyb3IgZXZlbnQgd2lsbCBjYXRjaCB0aGlzIGFuZCByZWxvYWQgdGhlIHBhZ2UgdG8gdGhlIG5ldyByb3V0ZS5cbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXlsb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMuRVJST1JfTkVXX1ZFUlNJT04sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUGF5bG9hZC5jaGVja1BheWxvYWRVc2VyID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlnbm9yZVBheWxvYWRVc2VyIHx8ICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZGF0YSB8fCAoIXRoaXMuQXBwICYmICF0aGlzLnN0b3JlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgLy8gT25seSBwcm9jZXNzIGlmIHRoaXMgcGF5bG9hZCByZXNwb25zZSBoYWQgYSB1c2VyIGF0dGFjaGVkIHRvIGl0LlxuICAgICAgICAvLyBJdCBjb3VpZCBiZSBudWxsIChmb3IgbG9nZ2VkIG91dCkgb3IgYW4gb2JqZWN0IChpZiBsb2dnZWQgaW4pLlxuICAgICAgICBpZiAodHlwZW9mIGRhdGEudXNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXkgYXJlIGxvZ2dlZCBvdXQsIHdlIHdhbnQgdG8gZW5zdXJlIHRoZSBhcHAgdXNlciBpcyBudWxsZWQgYXMgd2VsbC5cbiAgICAgICAgICAgIGlmIChkYXRhLnVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFwcC51c2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoR0pfSVNfVlVFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdhcHAvY2xlYXJVc2VyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXF1aXJlIGR5bmFtaWNhbGx5IGhlcmUsIG90aGVyd2lzZSB3ZSBlbmQgdXAgd2l0aFxuICAgICAgICAgICAgICAgIC8vIGEgY2lyY3VsYXIgcmVmZXJlbmNlIHNvbWUgdGltZXMuIFNvbWV0aGluZyAtPiBVc2VyIC0+IEFwaSAtPiBQYXlsb2FkIC0+IFVzZXIuLi5cbiAgICAgICAgICAgICAgICB2YXIgVXNlck1vZGVsID0gcmVxdWlyZSgnLi4vdXNlci91c2VyLm1vZGVsJykuVXNlcjtcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IG5ldyBVc2VyTW9kZWwoZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFwcC51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoR0pfSVNfVlVFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdhcHAvc2V0VXNlcicsIHVzZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbWl0IGFuIGV2ZW50IHRvIHRoZSByb290IHNjb3BlIHRoYXQgYSBwYXlsb2FkIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCB0aGUgdXNlciBoYXMgYmVlbiBzZXQuXG4gICAgICAgIGlmIChHSl9JU19BTkdVTEFSKSB7XG4gICAgICAgICAgICB1dGlsc18xLmdldFByb3ZpZGVyKCckcm9vdFNjb3BlJykuJGVtaXQoJ1BheWxvYWQudXNlclByb2Nlc3NlZCcsICEhdGhpcy5BcHAudXNlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBheWxvYWQuY2hlY2tBbmFseXRpY3NFeHBlcmltZW50cyA9IGZ1bmN0aW9uIChyZXNwb25zZSwgX29wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLnBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF5bG9hZCA9IHJlc3BvbnNlLmRhdGEucGF5bG9hZDtcbiAgICAgICAgaWYgKHBheWxvYWQuX2V4cGVyaW1lbnQgJiYgcGF5bG9hZC5fdmFyaWF0aW9uICYmIHBheWxvYWQuX3ZhcmlhdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc19zZXJ2aWNlXzEuQW5hbHl0aWNzLnNldEN1cnJlbnRFeHBlcmltZW50KHBheWxvYWQuX2V4cGVyaW1lbnQsIHBheWxvYWQuX3ZhcmlhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBheWxvYWQuaGFuZGxlUGF5bG9hZEVycm9yID0gZnVuY3Rpb24gKHRyYW5zLCBlcnJvcikge1xuICAgICAgICAvLyBUaGV5IG1heSBwYXNzIGluIGBlcnJvcmAgaWYgdGhpcyBBUEkgY2FsbCB3YXNuJ3QgZG9uZSBpbiB0aGUgbWlkZGxlIG9mIGEgdHJhbnNpdGlvbi5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSB0cmFucy5lcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b1N0YXRlID0gdHJhbnMudG8oKTtcbiAgICAgICAgdmFyIHRvUGFyYW1zID0gdHJhbnMucGFyYW1zKCd0bycpO1xuICAgICAgICB2YXIgZnJvbVN0YXRlID0gdHJhbnMuZnJvbSgpO1xuICAgICAgICB2YXIgZnJvbVBhcmFtcyA9IHRyYW5zLnBhcmFtcygnZnJvbScpO1xuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJldmVudGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyBPbmx5IHByb2Nlc3MgaWYgaXQncyBhIHBheWxvYWQgZXJyb3IuXG4gICAgICAgIGlmICghZXJyb3IgfHwgIWVycm9yLnR5cGUgfHwgZXJyb3IudHlwZSAhPT0gJ3BheWxvYWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcnMgY2FuIHJldHVybiBmYWxzZSB0byBzdG9wIHByb2Nlc3Npbmcgb3RoZXIgaGFuZGxlcnMgc2V0IHVwLlxuICAgICAgICAvLyBUaGV5IGNhbiBgLnByZXZlbnREZWZhdWx0KClgIHRvIG5vdCBkbyB0aGUgZGVmYXVsdCBoYW5kbGluZyBiZWxvdy5cbiAgICAgICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmVycm9ySGFuZGxlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JIYW5kbGVyKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zLCBlcnJvcikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIHZhciAkc3RhdGUgPSB1dGlsc18xLmdldFByb3ZpZGVyKCckc3RhdGUnKTtcbiAgICAgICAgICAgIHZhciAkbG9jYXRpb24gPSB1dGlsc18xLmdldFByb3ZpZGVyKCckbG9jYXRpb24nKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5lcnJvciA9PT0gdGhpcy5FUlJPUl9ORVdfVkVSU0lPTikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJHN0YXRlLmhyZWYodG9TdGF0ZSwgdG9QYXJhbXMsIHsgYWJzb2x1dGU6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlcnJvci5lcnJvciA9PT0gdGhpcy5FUlJPUl9OT1RfTE9HR0VEKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbnZpcm9ubWVudF9zZXJ2aWNlXzEuRW52aXJvbm1lbnQuYXV0aEJhc2VVcmwgKyAnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnVybCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yLmVycm9yID09PSB0aGlzLkVSUk9SX0lOVkFMSUQpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yLTUwMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IuZXJyb3IgPT09IHRoaXMuRVJST1JfSFRUUF9FUlJPUiAmJiAoIWVycm9yLnN0YXR1cyB8fCB0aGlzLmh0dHBFcnJvcnMuaW5kZXhPZihlcnJvci5zdGF0dXMpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yLScgKyAoZXJyb3Iuc3RhdHVzIHx8IDUwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHJ5VXJsID0gJHN0YXRlLmhyZWYodG9TdGF0ZSwgdG9QYXJhbXMpO1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3Itb2ZmbGluZScsIHsgcmV0cnlVcmw6IHJldHJ5VXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUGF5bG9hZDtcbn0oKSk7XG5QYXlsb2FkLkVSUk9SX05FV19WRVJTSU9OID0gJ3BheWxvYWQtbmV3LXZlcnNpb24nO1xuUGF5bG9hZC5FUlJPUl9OT1RfTE9HR0VEID0gJ3BheWxvYWQtbm90LWxvZ2dlZCc7XG5QYXlsb2FkLkVSUk9SX0lOVkFMSUQgPSAncGF5bG9hZC1pbnZhbGlkJztcblBheWxvYWQuRVJST1JfSFRUUF9FUlJPUiA9ICdwYXlsb2FkLWVycm9yJztcblBheWxvYWQuRVJST1JfT0ZGTElORSA9ICdwYXlsb2FkLW9mZmxpbmUnO1xuUGF5bG9hZC5odHRwRXJyb3JzID0gW1xuICAgIDQwMCxcbiAgICA0MDMsXG4gICAgNDA0LFxuICAgIDUwMCxcbl07XG5QYXlsb2FkLnZlciA9IHVuZGVmaW5lZDtcblBheWxvYWQuZXJyb3JIYW5kbGVycyA9IFtdO1xuZXhwb3J0cy5QYXlsb2FkID0gUGF5bG9hZDtcbiJdfQ==

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var api_service_1 = __webpack_require__(40);
var User = (function (_super) {
    tslib_1.__extends(User, _super);
    function User(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.is_gamer = false;
        _this.is_developer = false;
        if (_this.type == User.TYPE_GAMER) {
            _this.is_gamer = true;
        }
        else if (_this.type == User.TYPE_DEVELOPER) {
            _this.is_developer = true;
        }
        return _this;
    }
    User.touch = function () {
        return api_service_1.Api.sendRequest('/web/touch');
    };
    User.prototype.$save = function () {
        // You can only save yourself, so we don't pass in an ID to the endpoint.
        return this.$_save('/web/dash/profile/save', 'user');
    };
    User.prototype.$saveEmailPreferences = function () {
        // You can only save yourself, so we don't pass in an ID to the endpoint.
        return this.$_save('/web/dash/email-preferences/save', 'user');
    };
    User.prototype.$saveFireside = function () {
        return this.$_save('/fireside/dash/profile/save', 'user');
    };
    User.prototype.$saveFiresideSettings = function () {
        return this.$_save('/fireside/dash/settings/save', 'user');
    };
    User.prototype.$unlinkAccount = function (provider) {
        return this.$_save('/web/dash/linked-accounts/unlink/' + provider, 'user');
    };
    return User;
}(model_service_1.Model));
User.TYPE_GAMER = 'User';
User.TYPE_DEVELOPER = 'Developer';
exports.User = User;
model_service_1.Model.create(User);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxnQkFBZ0IsUUFBUTtBQUM1QixJQUFJLFFBQVEsVUFBVSxRQUFRO0lBQzFCLFFBQVEsVUFBVSxNQUFNO0lBQ3hCLFNBQVMsS0FBSyxNQUFNO1FBQ2hCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRSxPQUFPO1FBQzlCLElBQUksUUFBUSxPQUFPLEtBQUssTUFBTSxTQUFTO1FBQ3ZDLE1BQU0sV0FBVztRQUNqQixNQUFNLGVBQWU7UUFDckIsSUFBSSxNQUFNLFFBQVEsS0FBSyxZQUFZO1lBQy9CLE1BQU0sV0FBVzs7YUFFaEIsSUFBSSxNQUFNLFFBQVEsS0FBSyxnQkFBZ0I7WUFDeEMsTUFBTSxlQUFlOztRQUV6QixPQUFPOztJQUVYLEtBQUssUUFBUSxZQUFZO1FBQ3JCLE9BQU8sY0FBYyxJQUFJLFlBQVk7O0lBRXpDLEtBQUssVUFBVSxRQUFRLFlBQVk7O1FBRS9CLE9BQU8sS0FBSyxPQUFPLDBCQUEwQjs7SUFFakQsS0FBSyxVQUFVLHdCQUF3QixZQUFZOztRQUUvQyxPQUFPLEtBQUssT0FBTyxvQ0FBb0M7O0lBRTNELEtBQUssVUFBVSxnQkFBZ0IsWUFBWTtRQUN2QyxPQUFPLEtBQUssT0FBTywrQkFBK0I7O0lBRXRELEtBQUssVUFBVSx3QkFBd0IsWUFBWTtRQUMvQyxPQUFPLEtBQUssT0FBTyxnQ0FBZ0M7O0lBRXZELEtBQUssVUFBVSxpQkFBaUIsVUFBVSxVQUFVO1FBQ2hELE9BQU8sS0FBSyxPQUFPLHNDQUFzQyxVQUFVOztJQUV2RSxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLEtBQUssYUFBYTtBQUNsQixLQUFLLGlCQUFpQjtBQUN0QixRQUFRLE9BQU87QUFDZixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciBhcGlfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2FwaS9hcGkuc2VydmljZVwiKTtcbnZhciBVc2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhVc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVzZXIoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwKSB7IGRhdGEgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkYXRhKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc19nYW1lciA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc19kZXZlbG9wZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzLnR5cGUgPT0gVXNlci5UWVBFX0dBTUVSKSB7XG4gICAgICAgICAgICBfdGhpcy5pc19nYW1lciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3RoaXMudHlwZSA9PSBVc2VyLlRZUEVfREVWRUxPUEVSKSB7XG4gICAgICAgICAgICBfdGhpcy5pc19kZXZlbG9wZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVXNlci50b3VjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFwaV9zZXJ2aWNlXzEuQXBpLnNlbmRSZXF1ZXN0KCcvd2ViL3RvdWNoJyk7XG4gICAgfTtcbiAgICBVc2VyLnByb3RvdHlwZS4kc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gWW91IGNhbiBvbmx5IHNhdmUgeW91cnNlbGYsIHNvIHdlIGRvbid0IHBhc3MgaW4gYW4gSUQgdG8gdGhlIGVuZHBvaW50LlxuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy93ZWIvZGFzaC9wcm9maWxlL3NhdmUnLCAndXNlcicpO1xuICAgIH07XG4gICAgVXNlci5wcm90b3R5cGUuJHNhdmVFbWFpbFByZWZlcmVuY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBZb3UgY2FuIG9ubHkgc2F2ZSB5b3Vyc2VsZiwgc28gd2UgZG9uJ3QgcGFzcyBpbiBhbiBJRCB0byB0aGUgZW5kcG9pbnQuXG4gICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2VtYWlsLXByZWZlcmVuY2VzL3NhdmUnLCAndXNlcicpO1xuICAgIH07XG4gICAgVXNlci5wcm90b3R5cGUuJHNhdmVGaXJlc2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvZmlyZXNpZGUvZGFzaC9wcm9maWxlL3NhdmUnLCAndXNlcicpO1xuICAgIH07XG4gICAgVXNlci5wcm90b3R5cGUuJHNhdmVGaXJlc2lkZVNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy9maXJlc2lkZS9kYXNoL3NldHRpbmdzL3NhdmUnLCAndXNlcicpO1xuICAgIH07XG4gICAgVXNlci5wcm90b3R5cGUuJHVubGlua0FjY291bnQgPSBmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvbGlua2VkLWFjY291bnRzL3VubGluay8nICsgcHJvdmlkZXIsICd1c2VyJyk7XG4gICAgfTtcbiAgICByZXR1cm4gVXNlcjtcbn0obW9kZWxfc2VydmljZV8xLk1vZGVsKSk7XG5Vc2VyLlRZUEVfR0FNRVIgPSAnVXNlcic7XG5Vc2VyLlRZUEVfREVWRUxPUEVSID0gJ0RldmVsb3Blcic7XG5leHBvcnRzLlVzZXIgPSBVc2VyO1xubW9kZWxfc2VydmljZV8xLk1vZGVsLmNyZWF0ZShVc2VyKTtcbiJdfQ==

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.MutSetUser = "app/setUser";
exports.MutClearUser = "app/clearUser";
var AppState = (function () {
    function AppState() {
        this.user = undefined;
    }
    return AppState;
}());
exports.AppState = AppState;
exports.appStore = {
    state: new AppState(),
    mutations: (_a = {},
        _a[exports.MutSetUser] = function (state, user) {
            state.user = user;
        },
        _a[exports.MutClearUser] = function (state) {
            state.user = undefined;
        },
        _a),
};
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFFBQVEsYUFBYTtBQUNyQixRQUFRLGVBQWU7QUFDdkIsSUFBSSxZQUFZLFlBQVk7SUFDeEIsU0FBUyxXQUFXO1FBQ2hCLEtBQUssT0FBTzs7SUFFaEIsT0FBTzs7QUFFWCxRQUFRLFdBQVc7QUFDbkIsUUFBUSxXQUFXO0lBQ2YsT0FBTyxJQUFJO0lBQ1gsWUFBWSxLQUFLO1FBQ2IsR0FBRyxRQUFRLGNBQWMsVUFBVSxPQUFPLE1BQU07WUFDNUMsTUFBTSxPQUFPOztRQUVqQixHQUFHLFFBQVEsZ0JBQWdCLFVBQVUsT0FBTztZQUN4QyxNQUFNLE9BQU87O1FBRWpCOztBQUVSLElBQUk7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5NdXRTZXRVc2VyID0gXCJhcHAvc2V0VXNlclwiO1xuZXhwb3J0cy5NdXRDbGVhclVzZXIgPSBcImFwcC9jbGVhclVzZXJcIjtcbnZhciBBcHBTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIEFwcFN0YXRlO1xufSgpKTtcbmV4cG9ydHMuQXBwU3RhdGUgPSBBcHBTdGF0ZTtcbmV4cG9ydHMuYXBwU3RvcmUgPSB7XG4gICAgc3RhdGU6IG5ldyBBcHBTdGF0ZSgpLFxuICAgIG11dGF0aW9uczogKF9hID0ge30sXG4gICAgICAgIF9hW2V4cG9ydHMuTXV0U2V0VXNlcl0gPSBmdW5jdGlvbiAoc3RhdGUsIHVzZXIpIHtcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyO1xuICAgICAgICB9LFxuICAgICAgICBfYVtleHBvcnRzLk11dENsZWFyVXNlcl0gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIF9hKSxcbn07XG52YXIgX2E7XG4iXX0=

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(258);
var Vue = __webpack_require__(2);
var index_1 = __webpack_require__(108);
var payload_service_1 = __webpack_require__(112);
var app_1 = __webpack_require__(226);
var loader_service_1 = __webpack_require__(110);
var hammer_vue_loader_1 = __webpack_require__(232);
var widget_compiler_service_1 = __webpack_require__(78);
var widget_game_media_service_1 = __webpack_require__(251);
var widget_game_description_service_1 = __webpack_require__(250);
var widget_game_packages_service_1 = __webpack_require__(252);
payload_service_1.Payload.initVue(index_1.store);
loader_service_1.Loader.addLoader(new hammer_vue_loader_1.HammerVueLoader());
widget_compiler_service_1.WidgetCompiler.setContentClass('content');
widget_compiler_service_1.WidgetCompiler.addWidget(new widget_game_media_service_1.WidgetCompilerWidgetGameMedia());
widget_compiler_service_1.WidgetCompiler.addWidget(new widget_game_description_service_1.WidgetCompilerWidgetGameDescription());
widget_compiler_service_1.WidgetCompiler.addWidget(new widget_game_packages_service_1.WidgetCompilerWidgetGamePackages());
new Vue({
    el: '#app',
    store: index_1.store,
    render: function (h) { return h(app_1.App); },
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFFBQVE7QUFDUixJQUFJLE1BQU0sUUFBUTtBQUNsQixJQUFJLFVBQVUsUUFBUTtBQUN0QixJQUFJLG9CQUFvQixRQUFRO0FBQ2hDLElBQUksUUFBUSxRQUFRO0FBQ3BCLElBQUksbUJBQW1CLFFBQVE7QUFDL0IsSUFBSSxzQkFBc0IsUUFBUTtBQUNsQyxJQUFJLDRCQUE0QixRQUFRO0FBQ3hDLElBQUksOEJBQThCLFFBQVE7QUFDMUMsSUFBSSxvQ0FBb0MsUUFBUTtBQUNoRCxJQUFJLGlDQUFpQyxRQUFRO0FBQzdDLGtCQUFrQixRQUFRLFFBQVEsUUFBUTtBQUMxQyxpQkFBaUIsT0FBTyxVQUFVLElBQUksb0JBQW9CO0FBQzFELDBCQUEwQixlQUFlLGdCQUFnQjtBQUN6RCwwQkFBMEIsZUFBZSxVQUFVLElBQUksNEJBQTRCO0FBQ25GLDBCQUEwQixlQUFlLFVBQVUsSUFBSSxrQ0FBa0M7QUFDekYsMEJBQTBCLGVBQWUsVUFBVSxJQUFJLCtCQUErQjtBQUN0RixJQUFJLElBQUk7SUFDSixJQUFJO0lBQ0osT0FBTyxRQUFRO0lBQ2YsUUFBUSxVQUFVLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTTs7QUFFMUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnJlcXVpcmUoXCIuLi9saWIvZ2otbGliLWNsaWVudC91dGlscy9wb2x5ZmlsbHNcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vc3RvcmUvaW5kZXhcIik7XG52YXIgcGF5bG9hZF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9wYXlsb2FkL3BheWxvYWQtc2VydmljZVwiKTtcbnZhciBhcHBfMSA9IHJlcXVpcmUoXCIuL2FwcFwiKTtcbnZhciBsb2FkZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2xpYi9nai1saWItY2xpZW50L2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5zZXJ2aWNlXCIpO1xudmFyIGhhbW1lcl92dWVfbG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy9sb2FkZXIvaGFtbWVyLXZ1ZS1sb2FkZXJcIik7XG52YXIgd2lkZ2V0X2NvbXBpbGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9saWIvZ2otbGliLWNsaWVudC9jb21wb25lbnRzL3dpZGdldC1jb21waWxlci93aWRnZXQtY29tcGlsZXIuc2VydmljZVwiKTtcbnZhciB3aWRnZXRfZ2FtZV9tZWRpYV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy93aWRnZXQtY29tcGlsZXIvd2lkZ2V0LWdhbWUtbWVkaWEvd2lkZ2V0LWdhbWUtbWVkaWEuc2VydmljZVwiKTtcbnZhciB3aWRnZXRfZ2FtZV9kZXNjcmlwdGlvbl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy93aWRnZXQtY29tcGlsZXIvd2lkZ2V0LWdhbWUtZGVzY3JpcHRpb24vd2lkZ2V0LWdhbWUtZGVzY3JpcHRpb24uc2VydmljZVwiKTtcbnZhciB3aWRnZXRfZ2FtZV9wYWNrYWdlc19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbGliL2dqLWxpYi1jbGllbnQvY29tcG9uZW50cy93aWRnZXQtY29tcGlsZXIvd2lkZ2V0LWdhbWUtcGFja2FnZXMvd2lkZ2V0LWdhbWUtcGFja2FnZXMuc2VydmljZVwiKTtcbnBheWxvYWRfc2VydmljZV8xLlBheWxvYWQuaW5pdFZ1ZShpbmRleF8xLnN0b3JlKTtcbmxvYWRlcl9zZXJ2aWNlXzEuTG9hZGVyLmFkZExvYWRlcihuZXcgaGFtbWVyX3Z1ZV9sb2FkZXJfMS5IYW1tZXJWdWVMb2FkZXIoKSk7XG53aWRnZXRfY29tcGlsZXJfc2VydmljZV8xLldpZGdldENvbXBpbGVyLnNldENvbnRlbnRDbGFzcygnY29udGVudCcpO1xud2lkZ2V0X2NvbXBpbGVyX3NlcnZpY2VfMS5XaWRnZXRDb21waWxlci5hZGRXaWRnZXQobmV3IHdpZGdldF9nYW1lX21lZGlhX3NlcnZpY2VfMS5XaWRnZXRDb21waWxlcldpZGdldEdhbWVNZWRpYSgpKTtcbndpZGdldF9jb21waWxlcl9zZXJ2aWNlXzEuV2lkZ2V0Q29tcGlsZXIuYWRkV2lkZ2V0KG5ldyB3aWRnZXRfZ2FtZV9kZXNjcmlwdGlvbl9zZXJ2aWNlXzEuV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lRGVzY3JpcHRpb24oKSk7XG53aWRnZXRfY29tcGlsZXJfc2VydmljZV8xLldpZGdldENvbXBpbGVyLmFkZFdpZGdldChuZXcgd2lkZ2V0X2dhbWVfcGFja2FnZXNfc2VydmljZV8xLldpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzKCkpO1xubmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBzdG9yZTogaW5kZXhfMS5zdG9yZSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChoKSB7IHJldHVybiBoKGFwcF8xLkFwcCk7IH0sXG59KTtcbiJdfQ==

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var widget_compiler_service_1 = __webpack_require__(78);
var AppWidgetCompiler = (function (_super) {
    tslib_1.__extends(AppWidgetCompiler, _super);
    function AppWidgetCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppWidgetCompiler.prototype.mounted = function () {
        this.refresh();
    };
    AppWidgetCompiler.prototype.contentChanged = function () {
        this.refresh();
    };
    AppWidgetCompiler.prototype.destroyed = function () {
        this.context.destroy();
    };
    AppWidgetCompiler.prototype.refresh = function () {
        if (!this.content) {
            this.$el.innerHTML = '';
            return;
        }
        if (this.isDisabled) {
            this.$el.innerHTML = this.content;
        }
        else {
            var compiledElem = widget_compiler_service_1.WidgetCompiler.compile(this.context, this.content);
            if (compiledElem) {
                this.$el.innerHTML = '';
                this.$el.appendChild(compiledElem);
            }
        }
    };
    AppWidgetCompiler.prototype.render = function (h) {
        return h('div');
    };
    return AppWidgetCompiler;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(String)
], AppWidgetCompiler.prototype, "content", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: Boolean, default: false })
], AppWidgetCompiler.prototype, "isDisabled", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: widget_compiler_service_1.WidgetCompilerContext, default: function () { return new widget_compiler_service_1.WidgetCompilerContext(); } })
], AppWidgetCompiler.prototype, "context", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('content')
], AppWidgetCompiler.prototype, "contentChanged", null);
AppWidgetCompiler = tslib_1.__decorate([
    vue_property_decorator_1.Component({
        name: 'widget-compiler',
    })
], AppWidgetCompiler);
exports.AppWidgetCompiler = AppWidgetCompiler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSw0QkFBNEIsUUFBUTtBQUN4QyxJQUFJLHFCQUFxQixVQUFVLFFBQVE7SUFDdkMsUUFBUSxVQUFVLG1CQUFtQjtJQUNyQyxTQUFTLG9CQUFvQjtRQUN6QixPQUFPLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjOztJQUUvRCxrQkFBa0IsVUFBVSxVQUFVLFlBQVk7UUFDOUMsS0FBSzs7SUFFVCxrQkFBa0IsVUFBVSxpQkFBaUIsWUFBWTtRQUNyRCxLQUFLOztJQUVULGtCQUFrQixVQUFVLFlBQVksWUFBWTtRQUNoRCxLQUFLLFFBQVE7O0lBRWpCLGtCQUFrQixVQUFVLFVBQVUsWUFBWTtRQUM5QyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQ2YsS0FBSyxJQUFJLFlBQVk7WUFDckI7O1FBRUosSUFBSSxLQUFLLFlBQVk7WUFDakIsS0FBSyxJQUFJLFlBQVksS0FBSzs7YUFFekI7WUFDRCxJQUFJLGVBQWUsMEJBQTBCLGVBQWUsUUFBUSxLQUFLLFNBQVMsS0FBSztZQUN2RixJQUFJLGNBQWM7Z0JBQ2QsS0FBSyxJQUFJLFlBQVk7Z0JBQ3JCLEtBQUssSUFBSSxZQUFZOzs7O0lBSWpDLGtCQUFrQixVQUFVLFNBQVMsVUFBVSxHQUFHO1FBQzlDLE9BQU8sRUFBRTs7SUFFYixPQUFPO0VBQ1Q7QUFDRixRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixrQkFBa0IsV0FBVyxXQUFXLEtBQUs7QUFDaEQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUssRUFBRSxNQUFNLFNBQVMsU0FBUztHQUN6RCxrQkFBa0IsV0FBVyxjQUFjLEtBQUs7QUFDbkQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUssRUFBRSxNQUFNLDBCQUEwQix1QkFBdUIsU0FBUyxZQUFZLEVBQUUsT0FBTyxJQUFJLDBCQUEwQjtHQUNwSixrQkFBa0IsV0FBVyxXQUFXLEtBQUs7QUFDaEQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLE1BQU07R0FDaEMsa0JBQWtCLFdBQVcsa0JBQWtCO0FBQ2xELG9CQUFvQixRQUFRLFdBQVc7SUFDbkMseUJBQXlCLFVBQVU7UUFDL0IsTUFBTTs7R0FFWDtBQUNILFFBQVEsb0JBQW9CO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xudmFyIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSA9IHJlcXVpcmUoXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCIpO1xudmFyIHdpZGdldF9jb21waWxlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93aWRnZXQtY29tcGlsZXIuc2VydmljZVwiKTtcbnZhciBBcHBXaWRnZXRDb21waWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXBwV2lkZ2V0Q29tcGlsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwV2lkZ2V0Q29tcGlsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQXBwV2lkZ2V0Q29tcGlsZXIucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH07XG4gICAgQXBwV2lkZ2V0Q29tcGlsZXIucHJvdG90eXBlLmNvbnRlbnRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuICAgIEFwcFdpZGdldENvbXBpbGVyLnByb3RvdHlwZS5kZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBBcHBXaWRnZXRDb21waWxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb21waWxlZEVsZW0gPSB3aWRnZXRfY29tcGlsZXJfc2VydmljZV8xLldpZGdldENvbXBpbGVyLmNvbXBpbGUodGhpcy5jb250ZXh0LCB0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVkRWxlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmFwcGVuZENoaWxkKGNvbXBpbGVkRWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcFdpZGdldENvbXBpbGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jyk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwV2lkZ2V0Q29tcGlsZXI7XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChTdHJpbmcpXG5dLCBBcHBXaWRnZXRDb21waWxlci5wcm90b3R5cGUsIFwiY29udGVudFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0pXG5dLCBBcHBXaWRnZXRDb21waWxlci5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcCh7IHR5cGU6IHdpZGdldF9jb21waWxlcl9zZXJ2aWNlXzEuV2lkZ2V0Q29tcGlsZXJDb250ZXh0LCBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgd2lkZ2V0X2NvbXBpbGVyX3NlcnZpY2VfMS5XaWRnZXRDb21waWxlckNvbnRleHQoKTsgfSB9KVxuXSwgQXBwV2lkZ2V0Q29tcGlsZXIucHJvdG90eXBlLCBcImNvbnRleHRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLldhdGNoKCdjb250ZW50Jylcbl0sIEFwcFdpZGdldENvbXBpbGVyLnByb3RvdHlwZSwgXCJjb250ZW50Q2hhbmdlZFwiLCBudWxsKTtcbkFwcFdpZGdldENvbXBpbGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ3dpZGdldC1jb21waWxlcicsXG4gICAgfSlcbl0sIEFwcFdpZGdldENvbXBpbGVyKTtcbmV4cG9ydHMuQXBwV2lkZ2V0Q29tcGlsZXIgPSBBcHBXaWRnZXRDb21waWxlcjtcbiJdfQ==

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 200 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-2x.8fb23f.gif";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-bw-2x.679847.gif";

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-bw.40f4d6.gif";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-stationary-2x.347e1e.gif";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-stationary-bw-2x.294bcc.gif";

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-stationary-bw.b1d4db.gif";

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading-stationary.17def1.gif";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loading.952f2c.gif";

/***/ }),
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(267);
var index_1 = __webpack_require__(108);
var vuex_class_1 = __webpack_require__(120);
var injector_1 = __webpack_require__(249);
var App = (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = null;
        return _this;
    }
    App.prototype.created = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.$store.dispatch(index_1.Actions.bootstrap);
                window.addEventListener('message', function (event) { return _this.message(event); });
                return [2 /*return*/];
            });
        });
    };
    App.prototype.onThemeChange = function (theme) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mod, mod, mod;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(theme === 'vash')) return [3 /*break*/, 2];
                        return [4 /*yield*/, __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 284))];
                    case 1:
                        mod = _a.sent();
                        this.theme = mod.AppThemeVash;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(theme === 'redux')) return [3 /*break*/, 4];
                        return [4 /*yield*/, __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 283))];
                    case 3:
                        mod = _a.sent();
                        this.theme = mod.AppThemeRedux;
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(theme === 'gamecamp')) return [3 /*break*/, 6];
                        return [4 /*yield*/, __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 282))];
                    case 5:
                        mod = _a.sent();
                        this.theme = mod.AppThemeGamecamp;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.message = function (event) {
        switch (event.data.type) {
            case 'theme-update':
                if (!event.data.template) {
                    break;
                }
                this.$store.commit(index_1.Mutations.setTemplate, event.data.template);
                break;
            case 'content-update':
                if (!event.data.block) {
                    break;
                }
                this.$store.commit(index_1.Mutations.setContentBlock, event.data.block);
                break;
        }
    };
    return App;
}(Vue));
tslib_1.__decorate([
    vuex_class_1.State
], App.prototype, "isLoading", void 0);
tslib_1.__decorate([
    vuex_class_1.State
], App.prototype, "site", void 0);
tslib_1.__decorate([
    vuex_class_1.State
], App.prototype, "contentBlock", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('site.theme.template.key')
], App.prototype, "onThemeChange", null);
App = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'app',
        components: {
            AppThemeInjector: injector_1.AppThemeInjector,
        },
    })
], App);
exports.App = App;

//# sourceMappingURL=data:application/json;base64,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TUFBTTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xudmFyIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSA9IHJlcXVpcmUoXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCIpO1xudmFyIFZpZXcgPSByZXF1aXJlKFwiIXZpZXchLi9hcHAuaHRtbFwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vc3RvcmUvaW5kZXhcIik7XG52YXIgdnVleF9jbGFzc18xID0gcmVxdWlyZShcInZ1ZXgtY2xhc3NcIik7XG52YXIgaW5qZWN0b3JfMSA9IHJlcXVpcmUoXCIuLi9saWIvZ2otbGliLWNsaWVudC9jb21wb25lbnRzL3RoZW1lL2luamVjdG9yL2luamVjdG9yXCIpO1xudmFyIEFwcCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXBwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRoZW1lID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGluZGV4XzEuQWN0aW9ucy5ib290c3RyYXApO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5tZXNzYWdlKGV2ZW50KTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5vblRoZW1lQ2hhbmdlID0gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1vZCwgbW9kLCBtb2Q7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoZW1lID09PSAndmFzaCcpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sICRpbXBvcnQoJy4vY29tcG9uZW50cy90aGVtZS92YXNoL3Zhc2gnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbWUgPSBtb2QuQXBwVGhlbWVWYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoZW1lID09PSAncmVkdXgnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCAkaW1wb3J0KCcuL2NvbXBvbmVudHMvdGhlbWUvcmVkdXgvcmVkdXgnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbWUgPSBtb2QuQXBwVGhlbWVSZWR1eDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGVtZSA9PT0gJ2dhbWVjYW1wJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgJGltcG9ydCgnLi9jb21wb25lbnRzL3RoZW1lL2dhbWVjYW1wL2dhbWVjYW1wJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW1lID0gbW9kLkFwcFRoZW1lR2FtZWNhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGhlbWUtdXBkYXRlJzpcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LmRhdGEudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChpbmRleF8xLk11dGF0aW9ucy5zZXRUZW1wbGF0ZSwgZXZlbnQuZGF0YS50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb250ZW50LXVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5kYXRhLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoaW5kZXhfMS5NdXRhdGlvbnMuc2V0Q29udGVudEJsb2NrLCBldmVudC5kYXRhLmJsb2NrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFwcDtcbn0oVnVlKSk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZXhfY2xhc3NfMS5TdGF0ZVxuXSwgQXBwLnByb3RvdHlwZSwgXCJpc0xvYWRpbmdcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVleF9jbGFzc18xLlN0YXRlXG5dLCBBcHAucHJvdG90eXBlLCBcInNpdGVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVleF9jbGFzc18xLlN0YXRlXG5dLCBBcHAucHJvdG90eXBlLCBcImNvbnRlbnRCbG9ja1wiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuV2F0Y2goJ3NpdGUudGhlbWUudGVtcGxhdGUua2V5Jylcbl0sIEFwcC5wcm90b3R5cGUsIFwib25UaGVtZUNoYW5nZVwiLCBudWxsKTtcbkFwcCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgVmlldyxcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ2FwcCcsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEFwcFRoZW1lSW5qZWN0b3I6IGluamVjdG9yXzEuQXBwVGhlbWVJbmplY3RvcixcbiAgICAgICAgfSxcbiAgICB9KVxuXSwgQXBwKTtcbmV4cG9ydHMuQXBwID0gQXBwO1xuIl19

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var user_model_1 = __webpack_require__(113);
var media_item_model_1 = __webpack_require__(111);
var api_service_1 = __webpack_require__(40);
var utils_1 = __webpack_require__(25);
var registry_service_1 = __webpack_require__(241);
var Game = (function (_super) {
    tslib_1.__extends(Game, _super);
    function Game(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.is_published = false;
        _this._has_packages = false;
        _this._should_show_ads = true;
        _this._can_buy_primary_sellable = false;
        if (data.developer) {
            _this.developer = new user_model_1.User(data.developer);
        }
        if (data.thumbnail_media_item) {
            _this.thumbnail_media_item = new media_item_model_1.MediaItem(data.thumbnail_media_item);
        }
        if (data.header_media_item) {
            _this.header_media_item = new media_item_model_1.MediaItem(data.header_media_item);
        }
        _this._has_cover = !!_this.header_media_item;
        if (_this.status === Game.STATUS_VISIBLE) {
            _this.is_published = true;
        }
        _this._is_finished = _this.development_status === Game.DEVELOPMENT_STATUS_FINISHED;
        _this._is_wip = _this.development_status === Game.DEVELOPMENT_STATUS_WIP;
        _this._is_devlog = _this.development_status === Game.DEVELOPMENT_STATUS_DEVLOG;
        if (_this.compatibility) {
            var keys = Object.keys(_this.compatibility);
            for (var i = 0; i < keys.length; ++i) {
                if (keys[i] !== 'id' && keys[i] !== 'game_id') {
                    _this._has_packages = true;
                    break;
                }
            }
        }
        // We don't want to show ads if this game has sellable items.
        if (!_this.ads_enabled) {
            _this._should_show_ads = false;
        }
        else if (_this.sellable && _this.sellable.type !== 'free') {
            _this._should_show_ads = false;
        }
        // Should show as owned for the dev of the game.
        if (_this.sellable && _this.sellable.type !== 'free' && _this.developer) {
            // TODO: Get this working for Vue.
            if (false) {
                var App = utils_1.getProvider('App');
                if (App.user && App.user.id === _this.developer.id) {
                    _this.sellable.is_owned = true;
                }
            }
        }
        if (_this.sellable && _this.sellable.type === 'paid' && !_this.sellable.is_owned) {
            _this._can_buy_primary_sellable = true;
        }
        registry_service_1.Registry.store('Game', _this);
        return _this;
    }
    Game.prototype.getSref = function (page, includeParams) {
        if (page === void 0) { page = ''; }
        if (includeParams === void 0) { includeParams = false; }
        var sref = '';
        if (page === 'dashboard') {
            sref = 'dashboard.developer.games.manage.game.overview';
        }
        else if (page === 'edit') {
            sref = 'dashboard.developer.games.manage.game.details';
        }
        else {
            sref = 'discover.games.view.overview';
        }
        if (includeParams) {
            sref += '( ' + JSON.stringify(this.getSrefParams(page)) + ' )';
        }
        return sref;
    };
    Game.prototype.getSrefParams = function (page) {
        if (page === void 0) { page = ''; }
        if (['dashboard', 'edit'].indexOf(page) !== -1) {
            return { id: this.id };
        }
        return {
            id: this.id,
            category: this.category_slug,
            slug: this.slug
        };
    };
    Game.prototype.getUrl = function (page) {
        if (page === void 0) { page = ''; }
        if (page === 'soundtrack') {
            return '/games/' + this.slug + '/' + this.id + '/download/soundtrack';
        }
        else if (!page) {
            return '/games/' + this.slug + '/' + this.id;
        }
        return utils_1.getProvider('$state').href(this.getSref(page), this.getSrefParams(page));
    };
    Game.prototype.hasDesktopSupport = function () {
        var compat = this.compatibility;
        return compat.os_windows
            || compat.os_windows_64
            || compat.os_mac
            || compat.os_mac_64
            || compat.os_linux
            || compat.os_linux_64;
    };
    Game.prototype.hasBrowserSupport = function () {
        var compat = this.compatibility;
        return compat.type_html
            || compat.type_flash
            || compat.type_unity
            || compat.type_applet
            || compat.type_silverlight;
    };
    /**
     * Helper function to check if the resource passed in has support for the
     * os/arch passed in.
     */
    Game.checkDeviceSupport = function (obj, os, arch) {
        if (obj['os_' + os]) {
            return true;
        }
        // If they are on 64bit, then we can check for 64bit only support as well.
        // If there is no arch (web site context) then we allow 64bit builds as well.
        if ((!arch || arch === '64') && obj['os_' + os + '_64']) {
            return true;
        }
        return false;
    };
    Game.prototype.canInstall = function (os, arch) {
        // Obviously can't install if no desktop build.
        if (!this.hasDesktopSupport()) {
            return false;
        }
        return Game.checkDeviceSupport(this.compatibility, os, arch);
    };
    Game.pluckInstallableBuilds = function (packages, os, arch) {
        var pluckedBuilds = [];
        packages.forEach(function (_package) {
            // Don't include builds for packages that aren't bought yet.
            // Can't install them if they can't be bought.
            if (_package._sellable
                && _package._sellable.type === 'paid'
                && !_package._sellable.is_owned) {
                return;
            }
            if (_package._builds) {
                _package._builds.forEach(function (build) {
                    if (Game.checkDeviceSupport(build, os, arch)) {
                        pluckedBuilds.push(build);
                    }
                });
            }
        });
        return pluckedBuilds;
    };
    ;
    Game.pluckBrowserBuilds = function (packages) {
        var pluckedBuilds = [];
        packages.forEach(function (_package) {
            if (!_package._builds) {
                return;
            }
            _package._builds.forEach(function (build) {
                if (build.isBrowserBased()) {
                    pluckedBuilds.push(build);
                }
            });
        });
        return pluckedBuilds;
    };
    ;
    Game.pluckRomBuilds = function (packages) {
        var pluckedBuilds = [];
        packages.forEach(function (_package) {
            if (!_package._builds) {
                return;
            }
            _package._builds.forEach(function (build) {
                if (build.isRom()) {
                    pluckedBuilds.push(build);
                }
            });
        });
        return pluckedBuilds;
    };
    ;
    Game.chooseBestBuild = function (builds, os, arch) {
        var sortedBuilds = builds.sort(function (a, b) { return a._release.sort - b._release.sort; });
        var build32 = sortedBuilds.find(function (build) { return build.isPlatform(os); });
        var build64 = sortedBuilds.find(function (build) { return build.isPlatform(os, '64'); });
        // If they are on 64bit, and we have a 64 bit build, we should try to
        // use it.
        if (arch === '64' && build64) {
            // If the 64bit build is an older version than the 32bit build, then
            // we have to use 32bit anyway.
            if (!build32 || build64._release.sort <= build32._release.sort) {
                return build64;
            }
        }
        if (build32) {
            return build32;
        }
        return builds[0];
    };
    Game.prototype.$follow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_service_1.Api.sendRequest('/web/library/games/add/followed', { game_id: this.id })];
                    case 1:
                        response = _a.sent();
                        this.is_following = true;
                        ++this.follower_count;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Game.prototype.$unfollow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$_remove('/web/library/games/remove/followed/' + this.id)];
                    case 1:
                        response = _a.sent();
                        this.is_following = false;
                        --this.follower_count;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Game.prototype.$save = function () {
        if (this.id) {
            return this.$_save('/web/dash/developer/games/save/' + this.id, 'game');
        }
        else {
            return this.$_save('/web/dash/developer/games/save', 'game');
        }
    };
    Game.prototype.$saveDescription = function () {
        return this.$_save('/web/dash/developer/games/description/save/' + this.id, 'game');
    };
    Game.prototype.$saveMaturity = function () {
        return this.$_save('/web/dash/developer/games/maturity/save/' + this.id, 'game');
    };
    Game.prototype.$saveThumbnail = function () {
        return this.$_save('/web/dash/developer/games/thumbnail/save/' + this.id, 'game', { file: this.file, allowComplexData: ['crop'] });
    };
    Game.prototype.$saveHeader = function () {
        return this.$_save('/web/dash/developer/games/header/save/' + this.id, 'game', { file: this.file });
    };
    Game.prototype.$clearHeader = function () {
        return this.$_save('/web/dash/developer/games/header/clear/' + this.id, 'game');
    };
    Game.prototype.$saveSettings = function () {
        return this.$_save('/web/dash/developer/games/settings/save/' + this.id, 'game');
    };
    Game.prototype.$setStatus = function (status) {
        return this.$_save('/web/dash/developer/games/set-status/' + this.id + '/' + status, 'game');
    };
    Game.prototype.$setDevStage = function (stage) {
        return this.$_save('/web/dash/developer/games/set-dev-stage/' + this.id + '/' + stage, 'game');
    };
    Game.prototype.$setCanceled = function (isCanceled) {
        return this.$_save('/web/dash/developer/games/set-canceled/' + this.id + '/' + (isCanceled ? '1' : '0'), 'game');
    };
    Game.prototype.$remove = function () {
        return this.$_remove('/web/dash/developer/games/remove/' + this.id);
    };
    return Game;
}(model_service_1.Model));
Game.STATUS_HIDDEN = 0;
Game.STATUS_VISIBLE = 1;
Game.STATUS_REMOVED = 2;
Game.DEVELOPMENT_STATUS_FINISHED = 1;
Game.DEVELOPMENT_STATUS_WIP = 2;
Game.DEVELOPMENT_STATUS_CANCELED = 3;
Game.DEVELOPMENT_STATUS_DEVLOG = 4;
exports.Game = Game;
model_service_1.Model.create(Game);

//# sourceMappingURL=data:application/json;base64,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QThDLEtBQUssSUFBSSxRQUFRLEVBQUUsTUFBTSxLQUFLLE1BQU0sa0JBQWtCLENBQUM7O0lBRTVILEtBQUssVUFBVSxjQUFjLFlBQVk7UUFDckMsT0FBTyxLQUFLLE9BQU8sMkNBQTJDLEtBQUssSUFBSSxRQUFRLEVBQUUsTUFBTSxLQUFLOztJQUVoRyxLQUFLLFVBQVUsZUFBZSxZQUFZO1FBQ3RDLE9BQU8sS0FBSyxPQUFPLDRDQUE0QyxLQUFLLElBQUk7O0lBRTVFLEtBQUssVUFBVSxnQkFBZ0IsWUFBWTtRQUN2QyxPQUFPLEtBQUssT0FBTyw2Q0FBNkMsS0FBSyxJQUFJOztJQUU3RSxLQUFLLFVBQVUsYUFBYSxVQUFVLFFBQVE7UUFDMUMsT0FBTyxLQUFLLE9BQU8sMENBQTBDLEtBQUssS0FBSyxNQUFNLFFBQVE7O0lBRXpGLEtBQUssVUFBVSxlQUFlLFVBQVUsT0FBTztRQUMzQyxPQUFPLEtBQUssT0FBTyw2Q0FBNkMsS0FBSyxLQUFLLE1BQU0sT0FBTzs7SUFFM0YsS0FBSyxVQUFVLGVBQWUsVUFBVSxZQUFZO1FBQ2hELE9BQU8sS0FBSyxPQUFPLDRDQUE0QyxLQUFLLEtBQUssT0FBTyxhQUFhLE1BQU0sTUFBTTs7SUFFN0csS0FBSyxVQUFVLFVBQVUsWUFBWTtRQUNqQyxPQUFPLEtBQUssU0FBUyxzQ0FBc0MsS0FBSzs7SUFFcEUsT0FBTztFQUNULGdCQUFnQjtBQUNsQixLQUFLLGdCQUFnQjtBQUNyQixLQUFLLGlCQUFpQjtBQUN0QixLQUFLLGlCQUFpQjtBQUN0QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxRQUFRLE9BQU87QUFDZixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciB1c2VyX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vdXNlci91c2VyLm1vZGVsXCIpO1xudmFyIG1lZGlhX2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYS1pdGVtL21lZGlhLWl0ZW0tbW9kZWxcIik7XG52YXIgYXBpX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hcGkvYXBpLnNlcnZpY2VcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcbnZhciByZWdpc3RyeV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vcmVnaXN0cnkvcmVnaXN0cnkuc2VydmljZVwiKTtcbnZhciBHYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwKSB7IGRhdGEgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkYXRhKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc19wdWJsaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2hhc19wYWNrYWdlcyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5fc2hvdWxkX3Nob3dfYWRzID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuX2Nhbl9idXlfcHJpbWFyeV9zZWxsYWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YS5kZXZlbG9wZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmRldmVsb3BlciA9IG5ldyB1c2VyX21vZGVsXzEuVXNlcihkYXRhLmRldmVsb3Blcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEudGh1bWJuYWlsX21lZGlhX2l0ZW0pIHtcbiAgICAgICAgICAgIF90aGlzLnRodW1ibmFpbF9tZWRpYV9pdGVtID0gbmV3IG1lZGlhX2l0ZW1fbW9kZWxfMS5NZWRpYUl0ZW0oZGF0YS50aHVtYm5haWxfbWVkaWFfaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuaGVhZGVyX21lZGlhX2l0ZW0pIHtcbiAgICAgICAgICAgIF90aGlzLmhlYWRlcl9tZWRpYV9pdGVtID0gbmV3IG1lZGlhX2l0ZW1fbW9kZWxfMS5NZWRpYUl0ZW0oZGF0YS5oZWFkZXJfbWVkaWFfaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2hhc19jb3ZlciA9ICEhX3RoaXMuaGVhZGVyX21lZGlhX2l0ZW07XG4gICAgICAgIGlmIChfdGhpcy5zdGF0dXMgPT09IEdhbWUuU1RBVFVTX1ZJU0lCTEUpIHtcbiAgICAgICAgICAgIF90aGlzLmlzX3B1Ymxpc2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2lzX2ZpbmlzaGVkID0gX3RoaXMuZGV2ZWxvcG1lbnRfc3RhdHVzID09PSBHYW1lLkRFVkVMT1BNRU5UX1NUQVRVU19GSU5JU0hFRDtcbiAgICAgICAgX3RoaXMuX2lzX3dpcCA9IF90aGlzLmRldmVsb3BtZW50X3N0YXR1cyA9PT0gR2FtZS5ERVZFTE9QTUVOVF9TVEFUVVNfV0lQO1xuICAgICAgICBfdGhpcy5faXNfZGV2bG9nID0gX3RoaXMuZGV2ZWxvcG1lbnRfc3RhdHVzID09PSBHYW1lLkRFVkVMT1BNRU5UX1NUQVRVU19ERVZMT0c7XG4gICAgICAgIGlmIChfdGhpcy5jb21wYXRpYmlsaXR5KSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKF90aGlzLmNvbXBhdGliaWxpdHkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXNbaV0gIT09ICdpZCcgJiYga2V5c1tpXSAhPT0gJ2dhbWVfaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9oYXNfcGFja2FnZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IGFkcyBpZiB0aGlzIGdhbWUgaGFzIHNlbGxhYmxlIGl0ZW1zLlxuICAgICAgICBpZiAoIV90aGlzLmFkc19lbmFibGVkKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2hvdWxkX3Nob3dfYWRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3RoaXMuc2VsbGFibGUgJiYgX3RoaXMuc2VsbGFibGUudHlwZSAhPT0gJ2ZyZWUnKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2hvdWxkX3Nob3dfYWRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hvdWxkIHNob3cgYXMgb3duZWQgZm9yIHRoZSBkZXYgb2YgdGhlIGdhbWUuXG4gICAgICAgIGlmIChfdGhpcy5zZWxsYWJsZSAmJiBfdGhpcy5zZWxsYWJsZS50eXBlICE9PSAnZnJlZScgJiYgX3RoaXMuZGV2ZWxvcGVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBHZXQgdGhpcyB3b3JraW5nIGZvciBWdWUuXG4gICAgICAgICAgICBpZiAoR0pfSVNfQU5HVUxBUikge1xuICAgICAgICAgICAgICAgIHZhciBBcHAgPSB1dGlsc18xLmdldFByb3ZpZGVyKCdBcHAnKTtcbiAgICAgICAgICAgICAgICBpZiAoQXBwLnVzZXIgJiYgQXBwLnVzZXIuaWQgPT09IF90aGlzLmRldmVsb3Blci5pZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZWxsYWJsZS5pc19vd25lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5zZWxsYWJsZSAmJiBfdGhpcy5zZWxsYWJsZS50eXBlID09PSAncGFpZCcgJiYgIV90aGlzLnNlbGxhYmxlLmlzX293bmVkKSB7XG4gICAgICAgICAgICBfdGhpcy5fY2FuX2J1eV9wcmltYXJ5X3NlbGxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RyeV9zZXJ2aWNlXzEuUmVnaXN0cnkuc3RvcmUoJ0dhbWUnLCBfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgR2FtZS5wcm90b3R5cGUuZ2V0U3JlZiA9IGZ1bmN0aW9uIChwYWdlLCBpbmNsdWRlUGFyYW1zKSB7XG4gICAgICAgIGlmIChwYWdlID09PSB2b2lkIDApIHsgcGFnZSA9ICcnOyB9XG4gICAgICAgIGlmIChpbmNsdWRlUGFyYW1zID09PSB2b2lkIDApIHsgaW5jbHVkZVBhcmFtcyA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBzcmVmID0gJyc7XG4gICAgICAgIGlmIChwYWdlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgICAgICAgc3JlZiA9ICdkYXNoYm9hcmQuZGV2ZWxvcGVyLmdhbWVzLm1hbmFnZS5nYW1lLm92ZXJ2aWV3JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYWdlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIHNyZWYgPSAnZGFzaGJvYXJkLmRldmVsb3Blci5nYW1lcy5tYW5hZ2UuZ2FtZS5kZXRhaWxzJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNyZWYgPSAnZGlzY292ZXIuZ2FtZXMudmlldy5vdmVydmlldyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHNyZWYgKz0gJyggJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0U3JlZlBhcmFtcyhwYWdlKSkgKyAnICknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcmVmO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuZ2V0U3JlZlBhcmFtcyA9IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIGlmIChwYWdlID09PSB2b2lkIDApIHsgcGFnZSA9ICcnOyB9XG4gICAgICAgIGlmIChbJ2Rhc2hib2FyZCcsICdlZGl0J10uaW5kZXhPZihwYWdlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiB0aGlzLmlkIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnlfc2x1ZyxcbiAgICAgICAgICAgIHNsdWc6IHRoaXMuc2x1Z1xuICAgICAgICB9O1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgaWYgKHBhZ2UgPT09IHZvaWQgMCkgeyBwYWdlID0gJyc7IH1cbiAgICAgICAgaWYgKHBhZ2UgPT09ICdzb3VuZHRyYWNrJykge1xuICAgICAgICAgICAgcmV0dXJuICcvZ2FtZXMvJyArIHRoaXMuc2x1ZyArICcvJyArIHRoaXMuaWQgKyAnL2Rvd25sb2FkL3NvdW5kdHJhY2snO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gJy9nYW1lcy8nICsgdGhpcy5zbHVnICsgJy8nICsgdGhpcy5pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXRpbHNfMS5nZXRQcm92aWRlcignJHN0YXRlJykuaHJlZih0aGlzLmdldFNyZWYocGFnZSksIHRoaXMuZ2V0U3JlZlBhcmFtcyhwYWdlKSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5oYXNEZXNrdG9wU3VwcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbXBhdCA9IHRoaXMuY29tcGF0aWJpbGl0eTtcbiAgICAgICAgcmV0dXJuIGNvbXBhdC5vc193aW5kb3dzXG4gICAgICAgICAgICB8fCBjb21wYXQub3Nfd2luZG93c182NFxuICAgICAgICAgICAgfHwgY29tcGF0Lm9zX21hY1xuICAgICAgICAgICAgfHwgY29tcGF0Lm9zX21hY182NFxuICAgICAgICAgICAgfHwgY29tcGF0Lm9zX2xpbnV4XG4gICAgICAgICAgICB8fCBjb21wYXQub3NfbGludXhfNjQ7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5oYXNCcm93c2VyU3VwcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbXBhdCA9IHRoaXMuY29tcGF0aWJpbGl0eTtcbiAgICAgICAgcmV0dXJuIGNvbXBhdC50eXBlX2h0bWxcbiAgICAgICAgICAgIHx8IGNvbXBhdC50eXBlX2ZsYXNoXG4gICAgICAgICAgICB8fCBjb21wYXQudHlwZV91bml0eVxuICAgICAgICAgICAgfHwgY29tcGF0LnR5cGVfYXBwbGV0XG4gICAgICAgICAgICB8fCBjb21wYXQudHlwZV9zaWx2ZXJsaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgcmVzb3VyY2UgcGFzc2VkIGluIGhhcyBzdXBwb3J0IGZvciB0aGVcbiAgICAgKiBvcy9hcmNoIHBhc3NlZCBpbi5cbiAgICAgKi9cbiAgICBHYW1lLmNoZWNrRGV2aWNlU3VwcG9ydCA9IGZ1bmN0aW9uIChvYmosIG9zLCBhcmNoKSB7XG4gICAgICAgIGlmIChvYmpbJ29zXycgKyBvc10pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXkgYXJlIG9uIDY0Yml0LCB0aGVuIHdlIGNhbiBjaGVjayBmb3IgNjRiaXQgb25seSBzdXBwb3J0IGFzIHdlbGwuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGFyY2ggKHdlYiBzaXRlIGNvbnRleHQpIHRoZW4gd2UgYWxsb3cgNjRiaXQgYnVpbGRzIGFzIHdlbGwuXG4gICAgICAgIGlmICgoIWFyY2ggfHwgYXJjaCA9PT0gJzY0JykgJiYgb2JqWydvc18nICsgb3MgKyAnXzY0J10pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLmNhbkluc3RhbGwgPSBmdW5jdGlvbiAob3MsIGFyY2gpIHtcbiAgICAgICAgLy8gT2J2aW91c2x5IGNhbid0IGluc3RhbGwgaWYgbm8gZGVza3RvcCBidWlsZC5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0Rlc2t0b3BTdXBwb3J0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2FtZS5jaGVja0RldmljZVN1cHBvcnQodGhpcy5jb21wYXRpYmlsaXR5LCBvcywgYXJjaCk7XG4gICAgfTtcbiAgICBHYW1lLnBsdWNrSW5zdGFsbGFibGVCdWlsZHMgPSBmdW5jdGlvbiAocGFja2FnZXMsIG9zLCBhcmNoKSB7XG4gICAgICAgIHZhciBwbHVja2VkQnVpbGRzID0gW107XG4gICAgICAgIHBhY2thZ2VzLmZvckVhY2goZnVuY3Rpb24gKF9wYWNrYWdlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBpbmNsdWRlIGJ1aWxkcyBmb3IgcGFja2FnZXMgdGhhdCBhcmVuJ3QgYm91Z2h0IHlldC5cbiAgICAgICAgICAgIC8vIENhbid0IGluc3RhbGwgdGhlbSBpZiB0aGV5IGNhbid0IGJlIGJvdWdodC5cbiAgICAgICAgICAgIGlmIChfcGFja2FnZS5fc2VsbGFibGVcbiAgICAgICAgICAgICAgICAmJiBfcGFja2FnZS5fc2VsbGFibGUudHlwZSA9PT0gJ3BhaWQnXG4gICAgICAgICAgICAgICAgJiYgIV9wYWNrYWdlLl9zZWxsYWJsZS5pc19vd25lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfcGFja2FnZS5fYnVpbGRzKSB7XG4gICAgICAgICAgICAgICAgX3BhY2thZ2UuX2J1aWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChidWlsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZS5jaGVja0RldmljZVN1cHBvcnQoYnVpbGQsIG9zLCBhcmNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Y2tlZEJ1aWxkcy5wdXNoKGJ1aWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBsdWNrZWRCdWlsZHM7XG4gICAgfTtcbiAgICA7XG4gICAgR2FtZS5wbHVja0Jyb3dzZXJCdWlsZHMgPSBmdW5jdGlvbiAocGFja2FnZXMpIHtcbiAgICAgICAgdmFyIHBsdWNrZWRCdWlsZHMgPSBbXTtcbiAgICAgICAgcGFja2FnZXMuZm9yRWFjaChmdW5jdGlvbiAoX3BhY2thZ2UpIHtcbiAgICAgICAgICAgIGlmICghX3BhY2thZ2UuX2J1aWxkcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9wYWNrYWdlLl9idWlsZHMuZm9yRWFjaChmdW5jdGlvbiAoYnVpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVpbGQuaXNCcm93c2VyQmFzZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBwbHVja2VkQnVpbGRzLnB1c2goYnVpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBsdWNrZWRCdWlsZHM7XG4gICAgfTtcbiAgICA7XG4gICAgR2FtZS5wbHVja1JvbUJ1aWxkcyA9IGZ1bmN0aW9uIChwYWNrYWdlcykge1xuICAgICAgICB2YXIgcGx1Y2tlZEJ1aWxkcyA9IFtdO1xuICAgICAgICBwYWNrYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcGFja2FnZSkge1xuICAgICAgICAgICAgaWYgKCFfcGFja2FnZS5fYnVpbGRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3BhY2thZ2UuX2J1aWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChidWlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChidWlsZC5pc1JvbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWNrZWRCdWlsZHMucHVzaChidWlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGx1Y2tlZEJ1aWxkcztcbiAgICB9O1xuICAgIDtcbiAgICBHYW1lLmNob29zZUJlc3RCdWlsZCA9IGZ1bmN0aW9uIChidWlsZHMsIG9zLCBhcmNoKSB7XG4gICAgICAgIHZhciBzb3J0ZWRCdWlsZHMgPSBidWlsZHMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5fcmVsZWFzZS5zb3J0IC0gYi5fcmVsZWFzZS5zb3J0OyB9KTtcbiAgICAgICAgdmFyIGJ1aWxkMzIgPSBzb3J0ZWRCdWlsZHMuZmluZChmdW5jdGlvbiAoYnVpbGQpIHsgcmV0dXJuIGJ1aWxkLmlzUGxhdGZvcm0ob3MpOyB9KTtcbiAgICAgICAgdmFyIGJ1aWxkNjQgPSBzb3J0ZWRCdWlsZHMuZmluZChmdW5jdGlvbiAoYnVpbGQpIHsgcmV0dXJuIGJ1aWxkLmlzUGxhdGZvcm0ob3MsICc2NCcpOyB9KTtcbiAgICAgICAgLy8gSWYgdGhleSBhcmUgb24gNjRiaXQsIGFuZCB3ZSBoYXZlIGEgNjQgYml0IGJ1aWxkLCB3ZSBzaG91bGQgdHJ5IHRvXG4gICAgICAgIC8vIHVzZSBpdC5cbiAgICAgICAgaWYgKGFyY2ggPT09ICc2NCcgJiYgYnVpbGQ2NCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIDY0Yml0IGJ1aWxkIGlzIGFuIG9sZGVyIHZlcnNpb24gdGhhbiB0aGUgMzJiaXQgYnVpbGQsIHRoZW5cbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gdXNlIDMyYml0IGFueXdheS5cbiAgICAgICAgICAgIGlmICghYnVpbGQzMiB8fCBidWlsZDY0Ll9yZWxlYXNlLnNvcnQgPD0gYnVpbGQzMi5fcmVsZWFzZS5zb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkNjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1aWxkMzIpIHtcbiAgICAgICAgICAgIHJldHVybiBidWlsZDMyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWlsZHNbMF07XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kZm9sbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBhcGlfc2VydmljZV8xLkFwaS5zZW5kUmVxdWVzdCgnL3dlYi9saWJyYXJ5L2dhbWVzL2FkZC9mb2xsb3dlZCcsIHsgZ2FtZV9pZDogdGhpcy5pZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc19mb2xsb3dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLmZvbGxvd2VyX2NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kdW5mb2xsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuJF9yZW1vdmUoJy93ZWIvbGlicmFyeS9nYW1lcy9yZW1vdmUvZm9sbG93ZWQvJyArIHRoaXMuaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2ZvbGxvd2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS10aGlzLmZvbGxvd2VyX2NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9zYXZlLycgKyB0aGlzLmlkLCAnZ2FtZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL3NhdmUnLCAnZ2FtZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kc2F2ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvZGVzY3JpcHRpb24vc2F2ZS8nICsgdGhpcy5pZCwgJ2dhbWUnKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLiRzYXZlTWF0dXJpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tYXR1cml0eS9zYXZlLycgKyB0aGlzLmlkLCAnZ2FtZScpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuJHNhdmVUaHVtYm5haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy90aHVtYm5haWwvc2F2ZS8nICsgdGhpcy5pZCwgJ2dhbWUnLCB7IGZpbGU6IHRoaXMuZmlsZSwgYWxsb3dDb21wbGV4RGF0YTogWydjcm9wJ10gfSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kc2F2ZUhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL2hlYWRlci9zYXZlLycgKyB0aGlzLmlkLCAnZ2FtZScsIHsgZmlsZTogdGhpcy5maWxlIH0pO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuJGNsZWFySGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvaGVhZGVyL2NsZWFyLycgKyB0aGlzLmlkLCAnZ2FtZScpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuJHNhdmVTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL3NldHRpbmdzL3NhdmUvJyArIHRoaXMuaWQsICdnYW1lJyk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS4kc2V0U3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvc2V0LXN0YXR1cy8nICsgdGhpcy5pZCArICcvJyArIHN0YXR1cywgJ2dhbWUnKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLiRzZXREZXZTdGFnZSA9IGZ1bmN0aW9uIChzdGFnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3NhdmUoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvc2V0LWRldi1zdGFnZS8nICsgdGhpcy5pZCArICcvJyArIHN0YWdlLCAnZ2FtZScpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuJHNldENhbmNlbGVkID0gZnVuY3Rpb24gKGlzQ2FuY2VsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL3NldC1jYW5jZWxlZC8nICsgdGhpcy5pZCArICcvJyArIChpc0NhbmNlbGVkID8gJzEnIDogJzAnKSwgJ2dhbWUnKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRfcmVtb3ZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL3JlbW92ZS8nICsgdGhpcy5pZCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0obW9kZWxfc2VydmljZV8xLk1vZGVsKSk7XG5HYW1lLlNUQVRVU19ISURERU4gPSAwO1xuR2FtZS5TVEFUVVNfVklTSUJMRSA9IDE7XG5HYW1lLlNUQVRVU19SRU1PVkVEID0gMjtcbkdhbWUuREVWRUxPUE1FTlRfU1RBVFVTX0ZJTklTSEVEID0gMTtcbkdhbWUuREVWRUxPUE1FTlRfU1RBVFVTX1dJUCA9IDI7XG5HYW1lLkRFVkVMT1BNRU5UX1NUQVRVU19DQU5DRUxFRCA9IDM7XG5HYW1lLkRFVkVMT1BNRU5UX1NUQVRVU19ERVZMT0cgPSA0O1xuZXhwb3J0cy5HYW1lID0gR2FtZTtcbm1vZGVsX3NlcnZpY2VfMS5Nb2RlbC5jcmVhdGUoR2FtZSk7XG4iXX0=

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var media_item_model_1 = __webpack_require__(111);
var api_service_1 = __webpack_require__(40);
var GameScreenshot = (function (_super) {
    tslib_1.__extends(GameScreenshot, _super);
    function GameScreenshot(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        if (data.media_item) {
            _this.media_item = new media_item_model_1.MediaItem(data.media_item);
        }
        return _this;
    }
    GameScreenshot.prototype.getUrl = function (game) {
        return game.getUrl() + ("#screenshot-" + this.id);
    };
    GameScreenshot.prototype.$save = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, api_service_1.Api.sendRequest('/web/dash/developer/games/media/save/image/' + this.game_id, this, {
                                file: this.file,
                                progress: function (event) {
                                    _this._progress = event;
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.success) {
                            return [2 /*return*/, response];
                        }
                        throw response;
                    case 2: return [2 /*return*/, this.$_save('/web/dash/developer/games/media/save/image/' + this.game_id + '/' + this.id, 'gameScreenshot')];
                }
            });
        });
    };
    GameScreenshot.prototype.$remove = function () {
        return this.$_remove('/web/dash/developer/games/media/remove/image/' + this.game_id + '/' + this.id);
    };
    return GameScreenshot;
}(model_service_1.Model));
exports.GameScreenshot = GameScreenshot;
model_service_1.Model.create(GameScreenshot);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxxQkFBcUIsUUFBUTtBQUNqQyxJQUFJLGdCQUFnQixRQUFRO0FBQzVCLElBQUksa0JBQWtCLFVBQVUsUUFBUTtJQUNwQyxRQUFRLFVBQVUsZ0JBQWdCO0lBQ2xDLFNBQVMsZUFBZSxNQUFNO1FBQzFCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRSxPQUFPO1FBQzlCLElBQUksUUFBUSxPQUFPLEtBQUssTUFBTSxTQUFTO1FBQ3ZDLElBQUksS0FBSyxZQUFZO1lBQ2pCLE1BQU0sYUFBYSxJQUFJLG1CQUFtQixVQUFVLEtBQUs7O1FBRTdELE9BQU87O0lBRVgsZUFBZSxVQUFVLFNBQVMsVUFBVSxNQUFNO1FBQzlDLE9BQU8sS0FBSyxZQUFZLGlCQUFpQixLQUFLOztJQUVsRCxlQUFlLFVBQVUsUUFBUSxZQUFZO1FBQ3pDLE9BQU8sUUFBUSxVQUFVLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZO1lBQ3ZELElBQUksUUFBUTtZQUNaLElBQUk7WUFDSixPQUFPLFFBQVEsWUFBWSxNQUFNLFVBQVUsSUFBSTtnQkFDM0MsUUFBUSxHQUFHO29CQUNQLEtBQUs7d0JBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxhQUFhO3dCQUNwQyxPQUFPLENBQUMsYUFBYSxjQUFjLElBQUksWUFBWSxnREFBZ0QsS0FBSyxTQUFTLE1BQU07Z0NBQy9HLE1BQU0sS0FBSztnQ0FDWCxVQUFVLFVBQVUsT0FBTztvQ0FDdkIsTUFBTSxZQUFZOzs7b0JBR2xDLEtBQUs7d0JBQ0QsV0FBVyxHQUFHO3dCQUNkLElBQUksU0FBUyxTQUFTOzRCQUNsQixPQUFPLENBQUMsY0FBYzs7d0JBRTFCLE1BQU07b0JBQ1YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEtBQUssT0FBTyxnREFBZ0QsS0FBSyxVQUFVLE1BQU0sS0FBSyxJQUFJOzs7OztJQUt4SSxlQUFlLFVBQVUsVUFBVSxZQUFZO1FBQzNDLE9BQU8sS0FBSyxTQUFTLGtEQUFrRCxLQUFLLFVBQVUsTUFBTSxLQUFLOztJQUVyRyxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLFFBQVEsaUJBQWlCO0FBQ3pCLGdCQUFnQixNQUFNLE9BQU87QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1vZGVsX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbC9tb2RlbC5zZXJ2aWNlXCIpO1xudmFyIG1lZGlhX2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9tZWRpYS1pdGVtL21lZGlhLWl0ZW0tbW9kZWxcIik7XG52YXIgYXBpX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGkvYXBpLnNlcnZpY2VcIik7XG52YXIgR2FtZVNjcmVlbnNob3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEdhbWVTY3JlZW5zaG90LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWVTY3JlZW5zaG90KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgaWYgKGRhdGEubWVkaWFfaXRlbSkge1xuICAgICAgICAgICAgX3RoaXMubWVkaWFfaXRlbSA9IG5ldyBtZWRpYV9pdGVtX21vZGVsXzEuTWVkaWFJdGVtKGRhdGEubWVkaWFfaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBHYW1lU2NyZWVuc2hvdC5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgcmV0dXJuIGdhbWUuZ2V0VXJsKCkgKyAoXCIjc2NyZWVuc2hvdC1cIiArIHRoaXMuaWQpO1xuICAgIH07XG4gICAgR2FtZVNjcmVlbnNob3QucHJvdG90eXBlLiRzYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuaWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXBpX3NlcnZpY2VfMS5BcGkuc2VuZFJlcXVlc3QoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvbWVkaWEvc2F2ZS9pbWFnZS8nICsgdGhpcy5nYW1lX2lkLCB0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHRoaXMuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3Byb2dyZXNzID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tZWRpYS9zYXZlL2ltYWdlLycgKyB0aGlzLmdhbWVfaWQgKyAnLycgKyB0aGlzLmlkLCAnZ2FtZVNjcmVlbnNob3QnKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZVNjcmVlbnNob3QucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRfcmVtb3ZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL21lZGlhL3JlbW92ZS9pbWFnZS8nICsgdGhpcy5nYW1lX2lkICsgJy8nICsgdGhpcy5pZCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZVNjcmVlbnNob3Q7XG59KG1vZGVsX3NlcnZpY2VfMS5Nb2RlbCkpO1xuZXhwb3J0cy5HYW1lU2NyZWVuc2hvdCA9IEdhbWVTY3JlZW5zaG90O1xubW9kZWxfc2VydmljZV8xLk1vZGVsLmNyZWF0ZShHYW1lU2NyZWVuc2hvdCk7XG4iXX0=

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var GameSketchfab = (function (_super) {
    tslib_1.__extends(GameSketchfab, _super);
    function GameSketchfab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameSketchfab.prototype.getUrl = function (game) {
        return game.getUrl() + '#sketchfab-' + this.id;
    };
    GameSketchfab.prototype.$save = function () {
        if (!this.id) {
            return this.$_save('/web/dash/developer/games/media/save/sketchfab/' + this.game_id, 'gameSketchfab');
        }
        else {
            return this.$_save('/web/dash/developer/games/media/save/sketchfab/' + this.game_id + '/' + this.id, 'gameSketchfab');
        }
    };
    GameSketchfab.prototype.$remove = function () {
        return this.$_remove('/web/dash/developer/games/media/remove/sketchfab/' + this.game_id + '/' + this.id);
    };
    return GameSketchfab;
}(model_service_1.Model));
exports.GameSketchfab = GameSketchfab;
model_service_1.Model.create(GameSketchfab);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxpQkFBaUIsVUFBVSxRQUFRO0lBQ25DLFFBQVEsVUFBVSxlQUFlO0lBQ2pDLFNBQVMsZ0JBQWdCO1FBQ3JCLE9BQU8sV0FBVyxRQUFRLE9BQU8sTUFBTSxNQUFNLGNBQWM7O0lBRS9ELGNBQWMsVUFBVSxTQUFTLFVBQVUsTUFBTTtRQUM3QyxPQUFPLEtBQUssV0FBVyxnQkFBZ0IsS0FBSzs7SUFFaEQsY0FBYyxVQUFVLFFBQVEsWUFBWTtRQUN4QyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ1YsT0FBTyxLQUFLLE9BQU8sb0RBQW9ELEtBQUssU0FBUzs7YUFFcEY7WUFDRCxPQUFPLEtBQUssT0FBTyxvREFBb0QsS0FBSyxVQUFVLE1BQU0sS0FBSyxJQUFJOzs7SUFHN0csY0FBYyxVQUFVLFVBQVUsWUFBWTtRQUMxQyxPQUFPLEtBQUssU0FBUyxzREFBc0QsS0FBSyxVQUFVLE1BQU0sS0FBSzs7SUFFekcsT0FBTztFQUNULGdCQUFnQjtBQUNsQixRQUFRLGdCQUFnQjtBQUN4QixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciBHYW1lU2tldGNoZmFiID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHYW1lU2tldGNoZmFiLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWVTa2V0Y2hmYWIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgR2FtZVNrZXRjaGZhYi5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgcmV0dXJuIGdhbWUuZ2V0VXJsKCkgKyAnI3NrZXRjaGZhYi0nICsgdGhpcy5pZDtcbiAgICB9O1xuICAgIEdhbWVTa2V0Y2hmYWIucHJvdG90eXBlLiRzYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tZWRpYS9zYXZlL3NrZXRjaGZhYi8nICsgdGhpcy5nYW1lX2lkLCAnZ2FtZVNrZXRjaGZhYicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9zYXZlKCcvd2ViL2Rhc2gvZGV2ZWxvcGVyL2dhbWVzL21lZGlhL3NhdmUvc2tldGNoZmFiLycgKyB0aGlzLmdhbWVfaWQgKyAnLycgKyB0aGlzLmlkLCAnZ2FtZVNrZXRjaGZhYicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lU2tldGNoZmFiLnByb3RvdHlwZS4kcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kX3JlbW92ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tZWRpYS9yZW1vdmUvc2tldGNoZmFiLycgKyB0aGlzLmdhbWVfaWQgKyAnLycgKyB0aGlzLmlkKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lU2tldGNoZmFiO1xufShtb2RlbF9zZXJ2aWNlXzEuTW9kZWwpKTtcbmV4cG9ydHMuR2FtZVNrZXRjaGZhYiA9IEdhbWVTa2V0Y2hmYWI7XG5tb2RlbF9zZXJ2aWNlXzEuTW9kZWwuY3JlYXRlKEdhbWVTa2V0Y2hmYWIpO1xuIl19

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var GameVideo = (function (_super) {
    tslib_1.__extends(GameVideo, _super);
    function GameVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameVideo.prototype.getUrl = function (game) {
        return game.getUrl() + ("#video-" + this.id);
    };
    GameVideo.prototype.$save = function () {
        if (!this.id) {
            return this.$_save('/web/dash/developer/games/media/save/video/' + this.game_id, 'gameVideo');
        }
        else {
            return this.$_save('/web/dash/developer/games/media/save/video/' + this.game_id + '/' + this.id, 'gameVideo');
        }
    };
    GameVideo.prototype.$remove = function () {
        return this.$_remove('/web/dash/developer/games/media/remove/video/' + this.game_id + '/' + this.id);
    };
    return GameVideo;
}(model_service_1.Model));
GameVideo.TYPE_YOUTUBE = 'youtube';
GameVideo.TYPE_VIMEO = 'vimeo';
// Examples...
// https://www.youtube.com/watch?v=DSvQAx5-PXU
// http://www.youtube.com/watch?v=DSvQAx5-PXU
// http://www.youtube.com/watch?v=DSvQAx5-PXU&bdfglkhdfg
// www.youtube.com/watch?v=DSvQAx5-PXU
// http://youtube.com/watch?v=DSvQAx5-PXU
// youtube.com/watch?v=DSvQAx5-PXU
// http://youtu.be/Y6lUVz1kdOk
// http://youtu.be/Y6lUVz1kdOk?testing
// http://vimeo.com/98hfg98dhfg
GameVideo.REGEX = {
    VIDEO: /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|vimeo\.com\/)([a-zA-Z0-9_\-]+)(\S*)$/i,
    YOUTUBE: /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_\-]+)(\S*)$/i,
    VIMEO: /^(https?:\/\/)?(www\.)?(vimeo\.com\/)([a-zA-Z0-9_\-]+)(\S*)$/i
};
exports.GameVideo = GameVideo;
model_service_1.Model.create(GameVideo);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxhQUFhLFVBQVUsUUFBUTtJQUMvQixRQUFRLFVBQVUsV0FBVztJQUM3QixTQUFTLFlBQVk7UUFDakIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsVUFBVSxVQUFVLFNBQVMsVUFBVSxNQUFNO1FBQ3pDLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSzs7SUFFN0MsVUFBVSxVQUFVLFFBQVEsWUFBWTtRQUNwQyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ1YsT0FBTyxLQUFLLE9BQU8sZ0RBQWdELEtBQUssU0FBUzs7YUFFaEY7WUFDRCxPQUFPLEtBQUssT0FBTyxnREFBZ0QsS0FBSyxVQUFVLE1BQU0sS0FBSyxJQUFJOzs7SUFHekcsVUFBVSxVQUFVLFVBQVUsWUFBWTtRQUN0QyxPQUFPLEtBQUssU0FBUyxrREFBa0QsS0FBSyxVQUFVLE1BQU0sS0FBSzs7SUFFckcsT0FBTztFQUNULGdCQUFnQjtBQUNsQixVQUFVLGVBQWU7QUFDekIsVUFBVSxhQUFhOzs7Ozs7Ozs7OztBQVd2QixVQUFVLFFBQVE7SUFDZCxPQUFPO0lBQ1AsU0FBUztJQUNULE9BQU87O0FBRVgsUUFBUSxZQUFZO0FBQ3BCLGdCQUFnQixNQUFNLE9BQU87QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1vZGVsX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbC9tb2RlbC5zZXJ2aWNlXCIpO1xudmFyIEdhbWVWaWRlbyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoR2FtZVZpZGVvLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWVWaWRlbygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBHYW1lVmlkZW8ucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uIChnYW1lKSB7XG4gICAgICAgIHJldHVybiBnYW1lLmdldFVybCgpICsgKFwiI3ZpZGVvLVwiICsgdGhpcy5pZCk7XG4gICAgfTtcbiAgICBHYW1lVmlkZW8ucHJvdG90eXBlLiRzYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tZWRpYS9zYXZlL3ZpZGVvLycgKyB0aGlzLmdhbWVfaWQsICdnYW1lVmlkZW8nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc2F2ZSgnL3dlYi9kYXNoL2RldmVsb3Blci9nYW1lcy9tZWRpYS9zYXZlL3ZpZGVvLycgKyB0aGlzLmdhbWVfaWQgKyAnLycgKyB0aGlzLmlkLCAnZ2FtZVZpZGVvJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWVWaWRlby5wcm90b3R5cGUuJHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9yZW1vdmUoJy93ZWIvZGFzaC9kZXZlbG9wZXIvZ2FtZXMvbWVkaWEvcmVtb3ZlL3ZpZGVvLycgKyB0aGlzLmdhbWVfaWQgKyAnLycgKyB0aGlzLmlkKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lVmlkZW87XG59KG1vZGVsX3NlcnZpY2VfMS5Nb2RlbCkpO1xuR2FtZVZpZGVvLlRZUEVfWU9VVFVCRSA9ICd5b3V0dWJlJztcbkdhbWVWaWRlby5UWVBFX1ZJTUVPID0gJ3ZpbWVvJztcbi8vIEV4YW1wbGVzLi4uXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PURTdlFBeDUtUFhVXG4vLyBodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RFN2UUF4NS1QWFVcbi8vIGh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1EU3ZRQXg1LVBYVSZiZGZnbGtoZGZnXG4vLyB3d3cueW91dHViZS5jb20vd2F0Y2g/dj1EU3ZRQXg1LVBYVVxuLy8gaHR0cDovL3lvdXR1YmUuY29tL3dhdGNoP3Y9RFN2UUF4NS1QWFVcbi8vIHlvdXR1YmUuY29tL3dhdGNoP3Y9RFN2UUF4NS1QWFVcbi8vIGh0dHA6Ly95b3V0dS5iZS9ZNmxVVnoxa2RPa1xuLy8gaHR0cDovL3lvdXR1LmJlL1k2bFVWejFrZE9rP3Rlc3Rpbmdcbi8vIGh0dHA6Ly92aW1lby5jb20vOThoZmc5OGRoZmdcbkdhbWVWaWRlby5SRUdFWCA9IHtcbiAgICBWSURFTzogL14oaHR0cHM/OlxcL1xcLyk/KHd3d1xcLik/KHlvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9fHlvdXR1XFwuYmVcXC98dmltZW9cXC5jb21cXC8pKFthLXpBLVowLTlfXFwtXSspKFxcUyopJC9pLFxuICAgIFlPVVRVQkU6IC9eKGh0dHBzPzpcXC9cXC8pPyh3d3dcXC4pPyh5b3V0dWJlXFwuY29tXFwvd2F0Y2hcXD92PXx5b3V0dVxcLmJlXFwvKShbYS16QS1aMC05X1xcLV0rKShcXFMqKSQvaSxcbiAgICBWSU1FTzogL14oaHR0cHM/OlxcL1xcLyk/KHd3d1xcLik/KHZpbWVvXFwuY29tXFwvKShbYS16QS1aMC05X1xcLV0rKShcXFMqKSQvaVxufTtcbmV4cG9ydHMuR2FtZVZpZGVvID0gR2FtZVZpZGVvO1xubW9kZWxfc2VydmljZV8xLk1vZGVsLmNyZWF0ZShHYW1lVmlkZW8pO1xuIl19

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ImgHelper = (function () {
    function ImgHelper() {
    }
    ImgHelper.loaded = function (url) {
        return new Promise(function (resolve, reject) {
            var img = window.document.createElement('img');
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
        });
    };
    ImgHelper.getResizedDimensions = function (originalWidth, originalHeight, maxWidth, maxHeight) {
        var aspectRatio = originalHeight / originalWidth;
        var width, height;
        // Setting max for both.
        if (maxWidth && maxHeight) {
            width = Math.min(originalWidth, maxWidth);
            height = width * aspectRatio;
            if (height > maxHeight) {
                height = maxHeight;
                width = height / aspectRatio;
            }
        }
        else if (maxWidth && !maxHeight) {
            width = Math.min(originalWidth, maxWidth);
            height = width * aspectRatio;
        }
        else if (!maxWidth && maxHeight) {
            height = Math.min(originalHeight, maxHeight);
            width = height / aspectRatio;
        }
        else {
            throw new Error('Invalid params.');
        }
        return {
            width: width,
            height: height,
        };
    };
    return ImgHelper;
}());
exports.ImgHelper = ImgHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksYUFBYSxZQUFZO0lBQ3pCLFNBQVMsWUFBWTs7SUFFckIsVUFBVSxTQUFTLFVBQVUsS0FBSztRQUM5QixPQUFPLElBQUksUUFBUSxVQUFVLFNBQVMsUUFBUTtZQUMxQyxJQUFJLE1BQU0sT0FBTyxTQUFTLGNBQWM7WUFDeEMsSUFBSSxTQUFTO1lBQ2IsSUFBSSxVQUFVO1lBQ2QsSUFBSSxNQUFNOzs7SUFHbEIsVUFBVSx1QkFBdUIsVUFBVSxlQUFlLGdCQUFnQixVQUFVLFdBQVc7UUFDM0YsSUFBSSxjQUFjLGlCQUFpQjtRQUNuQyxJQUFJLE9BQU87O1FBRVgsSUFBSSxZQUFZLFdBQVc7WUFDdkIsUUFBUSxLQUFLLElBQUksZUFBZTtZQUNoQyxTQUFTLFFBQVE7WUFDakIsSUFBSSxTQUFTLFdBQVc7Z0JBQ3BCLFNBQVM7Z0JBQ1QsUUFBUSxTQUFTOzs7YUFHcEIsSUFBSSxZQUFZLENBQUMsV0FBVztZQUM3QixRQUFRLEtBQUssSUFBSSxlQUFlO1lBQ2hDLFNBQVMsUUFBUTs7YUFFaEIsSUFBSSxDQUFDLFlBQVksV0FBVztZQUM3QixTQUFTLEtBQUssSUFBSSxnQkFBZ0I7WUFDbEMsUUFBUSxTQUFTOzthQUVoQjtZQUNELE1BQU0sSUFBSSxNQUFNOztRQUVwQixPQUFPO1lBQ0gsT0FBTztZQUNQLFFBQVE7OztJQUdoQixPQUFPOztBQUVYLFFBQVEsWUFBWTtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIEltZ0hlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1nSGVscGVyKCkge1xuICAgIH1cbiAgICBJbWdIZWxwZXIubG9hZGVkID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGltZyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEltZ0hlbHBlci5nZXRSZXNpemVkRGltZW5zaW9ucyA9IGZ1bmN0aW9uIChvcmlnaW5hbFdpZHRoLCBvcmlnaW5hbEhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCkge1xuICAgICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcmlnaW5hbEhlaWdodCAvIG9yaWdpbmFsV2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgICAvLyBTZXR0aW5nIG1heCBmb3IgYm90aC5cbiAgICAgICAgaWYgKG1heFdpZHRoICYmIG1heEhlaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1pbihvcmlnaW5hbFdpZHRoLCBtYXhXaWR0aCk7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1heFdpZHRoICYmICFtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5taW4ob3JpZ2luYWxXaWR0aCwgbWF4V2lkdGgpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbWF4V2lkdGggJiYgbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihvcmlnaW5hbEhlaWdodCwgbWF4SGVpZ2h0KTtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1zLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBJbWdIZWxwZXI7XG59KCkpO1xuZXhwb3J0cy5JbWdIZWxwZXIgPSBJbWdIZWxwZXI7XG4iXX0=

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var loader_base_1 = __webpack_require__(233);
var HammerVueLoader = (function (_super) {
    tslib_1.__extends(HammerVueLoader, _super);
    function HammerVueLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'hammer-vue';
        return _this;
    }
    HammerVueLoader.prototype._load = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.e/* require.ensure */(3).then((function () {
                            // Will require hammerjs as well.
                            var Vue = __webpack_require__(2);
                            var VueTouch = __webpack_require__(285);
                            Vue.use(VueTouch);
                        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HammerVueLoader;
}(loader_base_1.LoaderBase));
exports.HammerVueLoader = HammerVueLoader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksZ0JBQWdCLFFBQVE7QUFDNUIsSUFBSSxtQkFBbUIsVUFBVSxRQUFRO0lBQ3JDLFFBQVEsVUFBVSxpQkFBaUI7SUFDbkMsU0FBUyxrQkFBa0I7UUFDdkIsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sT0FBTztRQUNiLE9BQU87O0lBRVgsZ0JBQWdCLFVBQVUsUUFBUSxZQUFZO1FBQzFDLE9BQU8sUUFBUSxVQUFVLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZO1lBQ3ZELE9BQU8sUUFBUSxZQUFZLE1BQU0sVUFBVSxJQUFJO2dCQUMzQyxRQUFRLEdBQUc7b0JBQ1AsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLFFBQVEsT0FBTyxJQUFJLFlBQVk7OzRCQUVwRCxJQUFJLE1BQU0sUUFBUTs0QkFDbEIsSUFBSSxXQUFXLFFBQVE7NEJBQ3ZCLElBQUksSUFBSTsyQkFDVDtvQkFDUCxLQUFLO3dCQUNELEdBQUc7d0JBQ0gsT0FBTyxDQUFDOzs7OztJQUs1QixPQUFPO0VBQ1QsY0FBYztBQUNoQixRQUFRLGtCQUFrQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgbG9hZGVyX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL2xvYWRlci1iYXNlXCIpO1xudmFyIEhhbW1lclZ1ZUxvYWRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoSGFtbWVyVnVlTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhhbW1lclZ1ZUxvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSAnaGFtbWVyLXZ1ZSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSGFtbWVyVnVlTG9hZGVyLnByb3RvdHlwZS5fbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaWxsIHJlcXVpcmUgaGFtbWVyanMgYXMgd2VsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVnVlID0gcmVxdWlyZSgndnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFZ1ZVRvdWNoID0gcmVxdWlyZSgndnVlLXRvdWNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnVlLnVzZShWdWVUb3VjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAnaGFtbWVyLXZ1ZScpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIYW1tZXJWdWVMb2FkZXI7XG59KGxvYWRlcl9iYXNlXzEuTG9hZGVyQmFzZSkpO1xuZXhwb3J0cy5IYW1tZXJWdWVMb2FkZXIgPSBIYW1tZXJWdWVMb2FkZXI7XG4iXX0=

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LoaderBase = (function () {
    function LoaderBase() {
        this.isReady = false;
    }
    LoaderBase.prototype.load = function () {
        var _this = this;
        if (!this.loadPromise) {
            this.loadPromise = this._load()
                .then(function () {
                _this.isReady = true;
            });
        }
        return this.loadPromise;
    };
    return LoaderBase;
}());
exports.LoaderBase = LoaderBase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksY0FBYyxZQUFZO0lBQzFCLFNBQVMsYUFBYTtRQUNsQixLQUFLLFVBQVU7O0lBRW5CLFdBQVcsVUFBVSxPQUFPLFlBQVk7UUFDcEMsSUFBSSxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssYUFBYTtZQUNuQixLQUFLLGNBQWMsS0FBSztpQkFDbkIsS0FBSyxZQUFZO2dCQUNsQixNQUFNLFVBQVU7OztRQUd4QixPQUFPLEtBQUs7O0lBRWhCLE9BQU87O0FBRVgsUUFBUSxhQUFhO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgTG9hZGVyQmFzZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9hZGVyQmFzZSgpIHtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlckJhc2UucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5sb2FkUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJvbWlzZSA9IHRoaXMuX2xvYWQoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRQcm9taXNlO1xuICAgIH07XG4gICAgcmV0dXJuIExvYWRlckJhc2U7XG59KCkpO1xuZXhwb3J0cy5Mb2FkZXJCYXNlID0gTG9hZGVyQmFzZTtcbiJdfQ==

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(268);
var screen_service_1 = __webpack_require__(20);
var analytics_service_1 = __webpack_require__(47);
var jolticon_1 = __webpack_require__(79);
var responsive_directive_vue_1 = __webpack_require__(109);
var media_bar_1 = __webpack_require__(82);
var vue_1 = __webpack_require__(49);
var AppMediaBarItem = (function (_super) {
    tslib_1.__extends(AppMediaBarItem, _super);
    function AppMediaBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMediaBarItem.prototype.mounted = function () {
        this.mediaBar = vue_1.findVueParent(this, media_bar_1.AppMediaBar);
        // We set the dimensions on the thumbnails manually.
        // This way we can size it correct before it loads.
        if (this.item.media_type === 'image') {
            var dimensions = this.item.media_item.getDimensions(400, 150);
            this.$el.style.width = dimensions.width + 'px';
            this.$el.style.height = dimensions.height + 'px';
        }
        else if (this.item.media_type === 'sketchfab') {
            // Sketchfab thumbnails are hardcoded to this width.
            this.$el.style.height = '150px';
            this.$el.style.width = 150 / 0.5625 + 'px';
        }
        else {
            // Video thumbnails are hardcoded to this width.
            this.$el.style.width = '200px';
        }
    };
    AppMediaBarItem.prototype.onClick = function () {
        // Lightbox is turned off on mobile.
        if (!screen_service_1.Screen.isXs) {
            this.mediaBar.setActiveItem(this.item);
        }
        else {
            analytics_service_1.Analytics.trackEvent('media-bar', 'item-click-mobile');
        }
    };
    return AppMediaBarItem;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Object)
], AppMediaBarItem.prototype, "item", void 0);
AppMediaBarItem = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'media-bar-item',
        components: {
            AppJolticon: jolticon_1.AppJolticon,
        },
        directives: {
            AppImgResponsive: responsive_directive_vue_1.AppImgResponsive,
        },
    })
], AppMediaBarItem);
exports.AppMediaBarItem = AppMediaBarItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxtQkFBbUIsUUFBUTtBQUMvQixJQUFJLHNCQUFzQixRQUFRO0FBQ2xDLElBQUksYUFBYSxRQUFRO0FBQ3pCLElBQUksNkJBQTZCLFFBQVE7QUFDekMsSUFBSSxjQUFjLFFBQVE7QUFDMUIsSUFBSSxRQUFRLFFBQVE7QUFDcEIsSUFBSSxtQkFBbUIsVUFBVSxRQUFRO0lBQ3JDLFFBQVEsVUFBVSxpQkFBaUI7SUFDbkMsU0FBUyxrQkFBa0I7UUFDdkIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsZ0JBQWdCLFVBQVUsVUFBVSxZQUFZO1FBQzVDLEtBQUssV0FBVyxNQUFNLGNBQWMsTUFBTSxZQUFZOzs7UUFHdEQsSUFBSSxLQUFLLEtBQUssZUFBZSxTQUFTO1lBQ2xDLElBQUksYUFBYSxLQUFLLEtBQUssV0FBVyxjQUFjLEtBQUs7WUFDekQsS0FBSyxJQUFJLE1BQU0sUUFBUSxXQUFXLFFBQVE7WUFDMUMsS0FBSyxJQUFJLE1BQU0sU0FBUyxXQUFXLFNBQVM7O2FBRTNDLElBQUksS0FBSyxLQUFLLGVBQWUsYUFBYTs7WUFFM0MsS0FBSyxJQUFJLE1BQU0sU0FBUztZQUN4QixLQUFLLElBQUksTUFBTSxRQUFRLE1BQU0sU0FBUzs7YUFFckM7O1lBRUQsS0FBSyxJQUFJLE1BQU0sUUFBUTs7O0lBRy9CLGdCQUFnQixVQUFVLFVBQVUsWUFBWTs7UUFFNUMsSUFBSSxDQUFDLGlCQUFpQixPQUFPLE1BQU07WUFDL0IsS0FBSyxTQUFTLGNBQWMsS0FBSzs7YUFFaEM7WUFDRCxvQkFBb0IsVUFBVSxXQUFXLGFBQWE7OztJQUc5RCxPQUFPO0VBQ1Q7QUFDRixRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixnQkFBZ0IsV0FBVyxRQUFRLEtBQUs7QUFDM0Msa0JBQWtCLFFBQVEsV0FBVztJQUNqQztJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07UUFDTixZQUFZO1lBQ1IsYUFBYSxXQUFXOztRQUU1QixZQUFZO1lBQ1Isa0JBQWtCLDJCQUEyQjs7O0dBR3REO0FBQ0gsUUFBUSxrQkFBa0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xID0gcmVxdWlyZShcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIik7XG52YXIgVmlldyA9IHJlcXVpcmUoXCIhdmlldyEuL2l0ZW0uaHRtbD9zdHlsZT0uL2l0ZW0uc3R5bFwiKTtcbnZhciBzY3JlZW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NjcmVlbi9zY3JlZW4tc2VydmljZVwiKTtcbnZhciBhbmFseXRpY3Nfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL2FuYWx5dGljcy9hbmFseXRpY3Muc2VydmljZVwiKTtcbnZhciBqb2x0aWNvbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Z1ZS9jb21wb25lbnRzL2pvbHRpY29uL2pvbHRpY29uXCIpO1xudmFyIHJlc3BvbnNpdmVfZGlyZWN0aXZlX3Z1ZV8xID0gcmVxdWlyZShcIi4uLy4uL2ltZy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuZGlyZWN0aXZlLnZ1ZVwiKTtcbnZhciBtZWRpYV9iYXJfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYS1iYXJcIik7XG52YXIgdnVlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdnVlXCIpO1xudmFyIEFwcE1lZGlhQmFySXRlbSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXBwTWVkaWFCYXJJdGVtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcE1lZGlhQmFySXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBcHBNZWRpYUJhckl0ZW0ucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVkaWFCYXIgPSB2dWVfMS5maW5kVnVlUGFyZW50KHRoaXMsIG1lZGlhX2Jhcl8xLkFwcE1lZGlhQmFyKTtcbiAgICAgICAgLy8gV2Ugc2V0IHRoZSBkaW1lbnNpb25zIG9uIHRoZSB0aHVtYm5haWxzIG1hbnVhbGx5LlxuICAgICAgICAvLyBUaGlzIHdheSB3ZSBjYW4gc2l6ZSBpdCBjb3JyZWN0IGJlZm9yZSBpdCBsb2Fkcy5cbiAgICAgICAgaWYgKHRoaXMuaXRlbS5tZWRpYV90eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHRoaXMuaXRlbS5tZWRpYV9pdGVtLmdldERpbWVuc2lvbnMoNDAwLCAxNTApO1xuICAgICAgICAgICAgdGhpcy4kZWwuc3R5bGUud2lkdGggPSBkaW1lbnNpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLml0ZW0ubWVkaWFfdHlwZSA9PT0gJ3NrZXRjaGZhYicpIHtcbiAgICAgICAgICAgIC8vIFNrZXRjaGZhYiB0aHVtYm5haWxzIGFyZSBoYXJkY29kZWQgdG8gdGhpcyB3aWR0aC5cbiAgICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICAgICAgICAgICB0aGlzLiRlbC5zdHlsZS53aWR0aCA9IDE1MCAvIDAuNTYyNSArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBWaWRlbyB0aHVtYm5haWxzIGFyZSBoYXJkY29kZWQgdG8gdGhpcyB3aWR0aC5cbiAgICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwTWVkaWFCYXJJdGVtLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBMaWdodGJveCBpcyB0dXJuZWQgb2ZmIG9uIG1vYmlsZS5cbiAgICAgICAgaWYgKCFzY3JlZW5fc2VydmljZV8xLlNjcmVlbi5pc1hzKSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhQmFyLnNldEFjdGl2ZUl0ZW0odGhpcy5pdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFuYWx5dGljc19zZXJ2aWNlXzEuQW5hbHl0aWNzLnRyYWNrRXZlbnQoJ21lZGlhLWJhcicsICdpdGVtLWNsaWNrLW1vYmlsZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXBwTWVkaWFCYXJJdGVtO1xufShWdWUpKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoT2JqZWN0KVxuXSwgQXBwTWVkaWFCYXJJdGVtLnByb3RvdHlwZSwgXCJpdGVtXCIsIHZvaWQgMCk7XG5BcHBNZWRpYUJhckl0ZW0gPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIFZpZXcsXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLkNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6ICdtZWRpYS1iYXItaXRlbScsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEFwcEpvbHRpY29uOiBqb2x0aWNvbl8xLkFwcEpvbHRpY29uLFxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgICAgICBBcHBJbWdSZXNwb25zaXZlOiByZXNwb25zaXZlX2RpcmVjdGl2ZV92dWVfMS5BcHBJbWdSZXNwb25zaXZlLFxuICAgICAgICB9LFxuICAgIH0pXG5dLCBBcHBNZWRpYUJhckl0ZW0pO1xuZXhwb3J0cy5BcHBNZWRpYUJhckl0ZW0gPSBBcHBNZWRpYUJhckl0ZW07XG4iXX0=

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(269);
var lightbox_1 = __webpack_require__(74);
var jolticon_1 = __webpack_require__(79);
var responsive_directive_vue_1 = __webpack_require__(109);
var embed_1 = __webpack_require__(77);
var embed_2 = __webpack_require__(248);
var vue_1 = __webpack_require__(49);
var screen_service_1 = __webpack_require__(20);
var AppMediaBarLightboxItem = (function (_super) {
    tslib_1.__extends(AppMediaBarLightboxItem, _super);
    function AppMediaBarLightboxItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActive = false;
        _this.isNext = false;
        _this.isPrev = false;
        _this.maxWidth = 0;
        _this.maxHeight = 0;
        return _this;
    }
    AppMediaBarLightboxItem.prototype.mounted = function () {
        var _this = this;
        this.lightbox = vue_1.findVueParent(this, lightbox_1.AppMediaBarLightbox);
        this.calcActive();
        this.calcDimensions();
        this.resize$ = screen_service_1.Screen.resizeChanges.subscribe(function () { return _this.calcDimensions(); });
    };
    AppMediaBarLightboxItem.prototype.destroyed = function () {
        this.resize$.unsubscribe();
    };
    AppMediaBarLightboxItem.prototype.activeIndexChange = function () {
        this.calcActive();
    };
    AppMediaBarLightboxItem.prototype.calcDimensions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var captionElement, dimensions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.maxWidth = this.lightbox.maxItemWidth - lightbox_1.MediaBarLightboxConfig.itemPadding;
                        this.maxHeight = this.lightbox.maxItemHeight;
                        captionElement = this.$el.getElementsByClassName('media-bar-lightbox-item-caption')[0];
                        if (captionElement) {
                            this.maxHeight -= captionElement.offsetHeight;
                        }
                        if (this.item.media_type === 'image') {
                            dimensions = this.item.media_item.getDimensions(this.maxWidth, this.maxHeight);
                            this.maxWidth = dimensions.width;
                            this.maxHeight = dimensions.height;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppMediaBarLightboxItem.prototype.calcActive = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.isActive = this.activeIndex === this.itemIndex;
                this.isNext = this.activeIndex + 1 === this.itemIndex;
                this.isPrev = this.activeIndex - 1 === this.itemIndex;
                this.$el.classList.remove('active', 'next', 'prev');
                if (this.isActive) {
                    this.$el.classList.add('active');
                }
                else if (this.isPrev) {
                    this.$el.classList.add('prev');
                }
                else if (this.isNext) {
                    this.$el.classList.add('next');
                }
                if (this.isActive || this.isNext || this.isPrev) {
                    this.calcDimensions();
                }
                return [2 /*return*/];
            });
        });
    };
    return AppMediaBarLightboxItem;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Object)
], AppMediaBarLightboxItem.prototype, "item", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppMediaBarLightboxItem.prototype, "itemIndex", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppMediaBarLightboxItem.prototype, "activeIndex", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('activeIndex')
], AppMediaBarLightboxItem.prototype, "activeIndexChange", null);
AppMediaBarLightboxItem = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'media-bar-lightbox-item',
        components: {
            AppJolticon: jolticon_1.AppJolticon,
            AppVideoEmbed: embed_1.AppVideoEmbed,
            AppSketchfabEmbed: embed_2.AppSketchfabEmbed,
        },
        directives: {
            AppImgResponsive: responsive_directive_vue_1.AppImgResponsive,
        },
    })
], AppMediaBarLightboxItem);
exports.AppMediaBarLightboxItem = AppMediaBarLightboxItem;

//# sourceMappingURL=data:application/json;base64,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QUFXLFFBQVEsS0FBSztBQUNuRCxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQix3QkFBd0IsV0FBVyxhQUFhLEtBQUs7QUFDeEQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUs7R0FDL0Isd0JBQXdCLFdBQVcsZUFBZSxLQUFLO0FBQzFELFFBQVEsV0FBVztJQUNmLHlCQUF5QixNQUFNO0dBQ2hDLHdCQUF3QixXQUFXLHFCQUFxQjtBQUMzRCwwQkFBMEIsUUFBUSxXQUFXO0lBQ3pDO0lBQ0EseUJBQXlCLFVBQVU7UUFDL0IsTUFBTTtRQUNOLFlBQVk7WUFDUixhQUFhLFdBQVc7WUFDeEIsZUFBZSxRQUFRO1lBQ3ZCLG1CQUFtQixRQUFROztRQUUvQixZQUFZO1lBQ1Isa0JBQWtCLDJCQUEyQjs7O0dBR3REO0FBQ0gsUUFBUSwwQkFBMEI7QUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xID0gcmVxdWlyZShcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIik7XG52YXIgVmlldyA9IHJlcXVpcmUoXCIhdmlldyEuL2l0ZW0uaHRtbD9zdHlsZT0uL2l0ZW0uc3R5bFwiKTtcbnZhciBsaWdodGJveF8xID0gcmVxdWlyZShcIi4uL2xpZ2h0Ym94XCIpO1xudmFyIGpvbHRpY29uXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdnVlL2NvbXBvbmVudHMvam9sdGljb24vam9sdGljb25cIik7XG52YXIgcmVzcG9uc2l2ZV9kaXJlY3RpdmVfdnVlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5kaXJlY3RpdmUudnVlXCIpO1xudmFyIGVtYmVkXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdmlkZW8vZW1iZWQvZW1iZWRcIik7XG52YXIgZW1iZWRfMiA9IHJlcXVpcmUoXCIuLi8uLi8uLi9za2V0Y2hmYWIvZW1iZWQvZW1iZWRcIik7XG52YXIgdnVlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdXRpbHMvdnVlXCIpO1xudmFyIHNjcmVlbl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2NyZWVuL3NjcmVlbi1zZXJ2aWNlXCIpO1xudmFyIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzTmV4dCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1ByZXYgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMubWF4V2lkdGggPSAwO1xuICAgICAgICBfdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpZ2h0Ym94ID0gdnVlXzEuZmluZFZ1ZVBhcmVudCh0aGlzLCBsaWdodGJveF8xLkFwcE1lZGlhQmFyTGlnaHRib3gpO1xuICAgICAgICB0aGlzLmNhbGNBY3RpdmUoKTtcbiAgICAgICAgdGhpcy5jYWxjRGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLnJlc2l6ZSQgPSBzY3JlZW5fc2VydmljZV8xLlNjcmVlbi5yZXNpemVDaGFuZ2VzLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jYWxjRGltZW5zaW9ucygpOyB9KTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLnByb3RvdHlwZS5kZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgQXBwTWVkaWFCYXJMaWdodGJveEl0ZW0ucHJvdG90eXBlLmFjdGl2ZUluZGV4Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbGNBY3RpdmUoKTtcbiAgICB9O1xuICAgIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLnByb3RvdHlwZS5jYWxjRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY2FwdGlvbkVsZW1lbnQsIGRpbWVuc2lvbnM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy4kbmV4dFRpY2soKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4V2lkdGggPSB0aGlzLmxpZ2h0Ym94Lm1heEl0ZW1XaWR0aCAtIGxpZ2h0Ym94XzEuTWVkaWFCYXJMaWdodGJveENvbmZpZy5pdGVtUGFkZGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5saWdodGJveC5tYXhJdGVtSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQgPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZWRpYS1iYXItbGlnaHRib3gtaXRlbS1jYXB0aW9uJylbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEhlaWdodCAtPSBjYXB0aW9uRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtLm1lZGlhX3R5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5pdGVtLm1lZGlhX2l0ZW0uZ2V0RGltZW5zaW9ucyh0aGlzLm1heFdpZHRoLCB0aGlzLm1heEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhXaWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbS5wcm90b3R5cGUuY2FsY0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5hY3RpdmVJbmRleCA9PT0gdGhpcy5pdGVtSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pc05leHQgPSB0aGlzLmFjdGl2ZUluZGV4ICsgMSA9PT0gdGhpcy5pdGVtSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXYgPSB0aGlzLmFjdGl2ZUluZGV4IC0gMSA9PT0gdGhpcy5pdGVtSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ25leHQnLCAncHJldicpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzUHJldikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc05leHQgfHwgdGhpcy5pc1ByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwTWVkaWFCYXJMaWdodGJveEl0ZW07XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChPYmplY3QpXG5dLCBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbS5wcm90b3R5cGUsIFwiaXRlbVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChOdW1iZXIpXG5dLCBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbS5wcm90b3R5cGUsIFwiaXRlbUluZGV4XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKE51bWJlcilcbl0sIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLnByb3RvdHlwZSwgXCJhY3RpdmVJbmRleFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuV2F0Y2goJ2FjdGl2ZUluZGV4Jylcbl0sIEFwcE1lZGlhQmFyTGlnaHRib3hJdGVtLnByb3RvdHlwZSwgXCJhY3RpdmVJbmRleENoYW5nZVwiLCBudWxsKTtcbkFwcE1lZGlhQmFyTGlnaHRib3hJdGVtID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBWaWV3LFxuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Db21wb25lbnQoe1xuICAgICAgICBuYW1lOiAnbWVkaWEtYmFyLWxpZ2h0Ym94LWl0ZW0nLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBBcHBKb2x0aWNvbjogam9sdGljb25fMS5BcHBKb2x0aWNvbixcbiAgICAgICAgICAgIEFwcFZpZGVvRW1iZWQ6IGVtYmVkXzEuQXBwVmlkZW9FbWJlZCxcbiAgICAgICAgICAgIEFwcFNrZXRjaGZhYkVtYmVkOiBlbWJlZF8yLkFwcFNrZXRjaGZhYkVtYmVkLFxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgICAgICBBcHBJbWdSZXNwb25zaXZlOiByZXNwb25zaXZlX2RpcmVjdGl2ZV92dWVfMS5BcHBJbWdSZXNwb25zaXZlLFxuICAgICAgICB9LFxuICAgIH0pXG5dLCBBcHBNZWRpYUJhckxpZ2h0Ym94SXRlbSk7XG5leHBvcnRzLkFwcE1lZGlhQmFyTGlnaHRib3hJdGVtID0gQXBwTWVkaWFCYXJMaWdodGJveEl0ZW07XG4iXX0=

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(271);
var lightbox_1 = __webpack_require__(74);
var vue_1 = __webpack_require__(49);
var AppMediaBarLightboxSlider = (function (_super) {
    tslib_1.__extends(AppMediaBarLightboxSlider, _super);
    function AppMediaBarLightboxSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMediaBarLightboxSlider.prototype.mounted = function () {
        var mediaBar = vue_1.findVueParent(this, lightbox_1.AppMediaBarLightbox);
        mediaBar.setSlider(this.$el);
    };
    return AppMediaBarLightboxSlider;
}(Vue));
AppMediaBarLightboxSlider = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'media-bar-lightbox-slider',
    })
], AppMediaBarLightboxSlider);
exports.AppMediaBarLightboxSlider = AppMediaBarLightboxSlider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxhQUFhLFFBQVE7QUFDekIsSUFBSSxRQUFRLFFBQVE7QUFDcEIsSUFBSSw2QkFBNkIsVUFBVSxRQUFRO0lBQy9DLFFBQVEsVUFBVSwyQkFBMkI7SUFDN0MsU0FBUyw0QkFBNEI7UUFDakMsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsMEJBQTBCLFVBQVUsVUFBVSxZQUFZO1FBQ3RELElBQUksV0FBVyxNQUFNLGNBQWMsTUFBTSxXQUFXO1FBQ3BELFNBQVMsVUFBVSxLQUFLOztJQUU1QixPQUFPO0VBQ1Q7QUFDRiw0QkFBNEIsUUFBUSxXQUFXO0lBQzNDO0lBQ0EseUJBQXlCLFVBQVU7UUFDL0IsTUFBTTs7R0FFWDtBQUNILFFBQVEsNEJBQTRCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xudmFyIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSA9IHJlcXVpcmUoXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCIpO1xudmFyIFZpZXcgPSByZXF1aXJlKFwiIXZpZXchLi9zbGlkZXIuaHRtbFwiKTtcbnZhciBsaWdodGJveF8xID0gcmVxdWlyZShcIi4vbGlnaHRib3hcIik7XG52YXIgdnVlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdnVlXCIpO1xudmFyIEFwcE1lZGlhQmFyTGlnaHRib3hTbGlkZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcE1lZGlhQmFyTGlnaHRib3hTbGlkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwTWVkaWFCYXJMaWdodGJveFNsaWRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBcHBNZWRpYUJhckxpZ2h0Ym94U2xpZGVyLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVkaWFCYXIgPSB2dWVfMS5maW5kVnVlUGFyZW50KHRoaXMsIGxpZ2h0Ym94XzEuQXBwTWVkaWFCYXJMaWdodGJveCk7XG4gICAgICAgIG1lZGlhQmFyLnNldFNsaWRlcih0aGlzLiRlbCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwTWVkaWFCYXJMaWdodGJveFNsaWRlcjtcbn0oVnVlKSk7XG5BcHBNZWRpYUJhckxpZ2h0Ym94U2xpZGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBWaWV3LFxuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Db21wb25lbnQoe1xuICAgICAgICBuYW1lOiAnbWVkaWEtYmFyLWxpZ2h0Ym94LXNsaWRlcicsXG4gICAgfSlcbl0sIEFwcE1lZGlhQmFyTGlnaHRib3hTbGlkZXIpO1xuZXhwb3J0cy5BcHBNZWRpYUJhckxpZ2h0Ym94U2xpZGVyID0gQXBwTWVkaWFCYXJMaWdodGJveFNsaWRlcjtcbiJdfQ==

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var meta_container_1 = __webpack_require__(75);
var FbMetaContainer = (function (_super) {
    tslib_1.__extends(FbMetaContainer, _super);
    function FbMetaContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FbMetaContainer, "title", {
        get: function () { return this._get('og:title'); },
        set: function (value) { this._set('og:title', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbMetaContainer, "description", {
        get: function () { return this._get('og:description'); },
        set: function (value) { this._set('og:description', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbMetaContainer, "url", {
        get: function () { return this._get('og:url'); },
        set: function (value) { this._set('og:url', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbMetaContainer, "type", {
        get: function () { return this._get('og:type'); },
        set: function (value) { this._set('og:type', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbMetaContainer, "image", {
        get: function () { return this._get('og:image'); },
        set: function (value) { this._set('og:image', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbMetaContainer, "profileId", {
        get: function () { return this._get('og:profile_id'); },
        set: function (value) { this._set('og:profile_id', value); },
        enumerable: true,
        configurable: true
    });
    return FbMetaContainer;
}(meta_container_1.MetaContainer));
exports.FbMetaContainer = FbMetaContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksbUJBQW1CLFFBQVE7QUFDL0IsSUFBSSxtQkFBbUIsVUFBVSxRQUFRO0lBQ3JDLFFBQVEsVUFBVSxpQkFBaUI7SUFDbkMsU0FBUyxrQkFBa0I7UUFDdkIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsT0FBTyxlQUFlLGlCQUFpQixTQUFTO1FBQzVDLEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLFlBQVk7UUFDOUMsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU8sZUFBZSxpQkFBaUIsZUFBZTtRQUNsRCxLQUFLLFlBQVksRUFBRSxPQUFPLEtBQUssS0FBSztRQUNwQyxLQUFLLFVBQVUsT0FBTyxFQUFFLEtBQUssS0FBSyxrQkFBa0I7UUFDcEQsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU8sZUFBZSxpQkFBaUIsT0FBTztRQUMxQyxLQUFLLFlBQVksRUFBRSxPQUFPLEtBQUssS0FBSztRQUNwQyxLQUFLLFVBQVUsT0FBTyxFQUFFLEtBQUssS0FBSyxVQUFVO1FBQzVDLFlBQVk7UUFDWixjQUFjOztJQUVsQixPQUFPLGVBQWUsaUJBQWlCLFFBQVE7UUFDM0MsS0FBSyxZQUFZLEVBQUUsT0FBTyxLQUFLLEtBQUs7UUFDcEMsS0FBSyxVQUFVLE9BQU8sRUFBRSxLQUFLLEtBQUssV0FBVztRQUM3QyxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLGlCQUFpQixTQUFTO1FBQzVDLEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLFlBQVk7UUFDOUMsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU8sZUFBZSxpQkFBaUIsYUFBYTtRQUNoRCxLQUFLLFlBQVksRUFBRSxPQUFPLEtBQUssS0FBSztRQUNwQyxLQUFLLFVBQVUsT0FBTyxFQUFFLEtBQUssS0FBSyxpQkFBaUI7UUFDbkQsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU87RUFDVCxpQkFBaUI7QUFDbkIsUUFBUSxrQkFBa0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1ldGFfY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9tZXRhLWNvbnRhaW5lclwiKTtcbnZhciBGYk1ldGFDb250YWluZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZiTWV0YUNvbnRhaW5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGYk1ldGFDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZiTWV0YUNvbnRhaW5lciwgXCJ0aXRsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZ2V0KCdvZzp0aXRsZScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLl9zZXQoJ29nOnRpdGxlJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmJNZXRhQ29udGFpbmVyLCBcImRlc2NyaXB0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ29nOmRlc2NyaXB0aW9uJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgnb2c6ZGVzY3JpcHRpb24nLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYk1ldGFDb250YWluZXIsIFwidXJsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ29nOnVybCcpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLl9zZXQoJ29nOnVybCcsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZiTWV0YUNvbnRhaW5lciwgXCJ0eXBlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ29nOnR5cGUnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5fc2V0KCdvZzp0eXBlJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmJNZXRhQ29udGFpbmVyLCBcImltYWdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ29nOmltYWdlJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgnb2c6aW1hZ2UnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYk1ldGFDb250YWluZXIsIFwicHJvZmlsZUlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ29nOnByb2ZpbGVfaWQnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5fc2V0KCdvZzpwcm9maWxlX2lkJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmJNZXRhQ29udGFpbmVyO1xufShtZXRhX2NvbnRhaW5lcl8xLk1ldGFDb250YWluZXIpKTtcbmV4cG9ydHMuRmJNZXRhQ29udGFpbmVyID0gRmJNZXRhQ29udGFpbmVyO1xuIl19

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var meta_container_1 = __webpack_require__(75);
var fb_meta_container_1 = __webpack_require__(237);
var twitter_meta_container_1 = __webpack_require__(240);
var microdata_container_1 = __webpack_require__(239);
var Meta = (function (_super) {
    tslib_1.__extends(Meta, _super);
    function Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meta.initAngular = function ($rootScope) {
        var _this = this;
        $rootScope.$on('$stateChangeSuccess', function () {
            _this.clear();
        });
    };
    Object.defineProperty(Meta, "title", {
        get: function () { return window.document.title; },
        set: function (title) {
            if (title) {
                if (false) {
                    title += ' - Game Jolt';
                }
                else {
                    title += ' on Game Jolt';
                }
            }
            else {
                title = this._originalTitle;
            }
            window.document.title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "description", {
        get: function () { return this._get('description'); },
        set: function (value) { this._set('description', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "redirect", {
        get: function () { return this._get('redirect'); },
        set: function (value) { this._set('redirect', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "responseCode", {
        get: function () { return this._get('responseCode'); },
        set: function (value) { this._set('responseCode', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "fb", {
        get: function () { return this._fb; },
        set: function (values) {
            Object.assign(this._fb, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "twitter", {
        get: function () { return this._twitter; },
        set: function (values) {
            Object.assign(this._twitter, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meta, "microdata", {
        set: function (microdata) {
            this._microdata.set(microdata);
        },
        enumerable: true,
        configurable: true
    });
    Meta.clear = function () {
        this.description = null;
        this.redirect = null;
        this.responseCode = null;
        this.fb = {
            title: null,
            description: null,
            url: null,
            type: null,
            image: null,
            profileId: null,
        };
        this.twitter = {
            title: null,
            description: null,
            card: null,
            image: null,
            url: null,
            shareMessage: null,
        };
        this._microdata.clear();
    };
    return Meta;
}(meta_container_1.MetaContainer));
Meta._originalTitle = window.document.title;
Meta._fb = fb_meta_container_1.FbMetaContainer;
Meta._twitter = twitter_meta_container_1.TwitterMetaContainer;
Meta._microdata = microdata_container_1.MicrodataContainer;
exports.Meta = Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksbUJBQW1CLFFBQVE7QUFDL0IsSUFBSSxzQkFBc0IsUUFBUTtBQUNsQyxJQUFJLDJCQUEyQixRQUFRO0FBQ3ZDLElBQUksd0JBQXdCLFFBQVE7QUFDcEMsSUFBSSxRQUFRLFVBQVUsUUFBUTtJQUMxQixRQUFRLFVBQVUsTUFBTTtJQUN4QixTQUFTLE9BQU87UUFDWixPQUFPLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjOztJQUUvRCxLQUFLLGNBQWMsVUFBVSxZQUFZO1FBQ3JDLElBQUksUUFBUTtRQUNaLFdBQVcsSUFBSSx1QkFBdUIsWUFBWTtZQUM5QyxNQUFNOzs7SUFHZCxPQUFPLGVBQWUsTUFBTSxTQUFTO1FBQ2pDLEtBQUssWUFBWSxFQUFFLE9BQU8sT0FBTyxTQUFTO1FBQzFDLEtBQUssVUFBVSxPQUFPO1lBQ2xCLElBQUksT0FBTztnQkFDUCxJQUFJLGNBQWM7b0JBQ2QsU0FBUzs7cUJBRVI7b0JBQ0QsU0FBUzs7O2lCQUdaO2dCQUNELFFBQVEsS0FBSzs7WUFFakIsT0FBTyxTQUFTLFFBQVE7O1FBRTVCLFlBQVk7UUFDWixjQUFjOztJQUVsQixPQUFPLGVBQWUsTUFBTSxlQUFlO1FBQ3ZDLEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGVBQWU7UUFDakQsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU8sZUFBZSxNQUFNLFlBQVk7UUFDcEMsS0FBSyxZQUFZLEVBQUUsT0FBTyxLQUFLLEtBQUs7UUFDcEMsS0FBSyxVQUFVLE9BQU8sRUFBRSxLQUFLLEtBQUssWUFBWTtRQUM5QyxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLE1BQU0sZ0JBQWdCO1FBQ3hDLEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGdCQUFnQjtRQUNsRCxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLE1BQU0sTUFBTTtRQUM5QixLQUFLLFlBQVksRUFBRSxPQUFPLEtBQUs7UUFDL0IsS0FBSyxVQUFVLFFBQVE7WUFDbkIsT0FBTyxPQUFPLEtBQUssS0FBSzs7UUFFNUIsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU8sZUFBZSxNQUFNLFdBQVc7UUFDbkMsS0FBSyxZQUFZLEVBQUUsT0FBTyxLQUFLO1FBQy9CLEtBQUssVUFBVSxRQUFRO1lBQ25CLE9BQU8sT0FBTyxLQUFLLFVBQVU7O1FBRWpDLFlBQVk7UUFDWixjQUFjOztJQUVsQixPQUFPLGVBQWUsTUFBTSxhQUFhO1FBQ3JDLEtBQUssVUFBVSxXQUFXO1lBQ3RCLEtBQUssV0FBVyxJQUFJOztRQUV4QixZQUFZO1FBQ1osY0FBYzs7SUFFbEIsS0FBSyxRQUFRLFlBQVk7UUFDckIsS0FBSyxjQUFjO1FBQ25CLEtBQUssV0FBVztRQUNoQixLQUFLLGVBQWU7UUFDcEIsS0FBSyxLQUFLO1lBQ04sT0FBTztZQUNQLGFBQWE7WUFDYixLQUFLO1lBQ0wsTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXOztRQUVmLEtBQUssVUFBVTtZQUNYLE9BQU87WUFDUCxhQUFhO1lBQ2IsTUFBTTtZQUNOLE9BQU87WUFDUCxLQUFLO1lBQ0wsY0FBYzs7UUFFbEIsS0FBSyxXQUFXOztJQUVwQixPQUFPO0VBQ1QsaUJBQWlCO0FBQ25CLEtBQUssaUJBQWlCLE9BQU8sU0FBUztBQUN0QyxLQUFLLE1BQU0sb0JBQW9CO0FBQy9CLEtBQUssV0FBVyx5QkFBeUI7QUFDekMsS0FBSyxhQUFhLHNCQUFzQjtBQUN4QyxRQUFRLE9BQU87QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgbWV0YV9jb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL21ldGEtY29udGFpbmVyXCIpO1xudmFyIGZiX21ldGFfY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9mYi1tZXRhLWNvbnRhaW5lclwiKTtcbnZhciB0d2l0dGVyX21ldGFfY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi90d2l0dGVyLW1ldGEtY29udGFpbmVyXCIpO1xudmFyIG1pY3JvZGF0YV9jb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL21pY3JvZGF0YS1jb250YWluZXJcIik7XG52YXIgTWV0YSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTWV0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZXRhKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1ldGEuaW5pdEFuZ3VsYXIgPSBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1ldGEsIFwidGl0bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC50aXRsZTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIGlmIChHSl9JU19DTElFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gJyAtIEdhbWUgSm9sdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnIG9uIEdhbWUgSm9sdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLl9vcmlnaW5hbFRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRhLCBcImRlc2NyaXB0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ2Rlc2NyaXB0aW9uJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgnZGVzY3JpcHRpb24nLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRhLCBcInJlZGlyZWN0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ3JlZGlyZWN0Jyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgncmVkaXJlY3QnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRhLCBcInJlc3BvbnNlQ29kZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZ2V0KCdyZXNwb25zZUNvZGUnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5fc2V0KCdyZXNwb25zZUNvZGUnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRhLCBcImZiXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9mYjsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ZiLCB2YWx1ZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWV0YSwgXCJ0d2l0dGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl90d2l0dGVyOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdHdpdHRlciwgdmFsdWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1ldGEsIFwibWljcm9kYXRhXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobWljcm9kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9taWNyb2RhdGEuc2V0KG1pY3JvZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1ldGEuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJlZGlyZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNwb25zZUNvZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmZiID0ge1xuICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgIHByb2ZpbGVJZDogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50d2l0dGVyID0ge1xuICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGNhcmQ6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgIHNoYXJlTWVzc2FnZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbWljcm9kYXRhLmNsZWFyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTWV0YTtcbn0obWV0YV9jb250YWluZXJfMS5NZXRhQ29udGFpbmVyKSk7XG5NZXRhLl9vcmlnaW5hbFRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xuTWV0YS5fZmIgPSBmYl9tZXRhX2NvbnRhaW5lcl8xLkZiTWV0YUNvbnRhaW5lcjtcbk1ldGEuX3R3aXR0ZXIgPSB0d2l0dGVyX21ldGFfY29udGFpbmVyXzEuVHdpdHRlck1ldGFDb250YWluZXI7XG5NZXRhLl9taWNyb2RhdGEgPSBtaWNyb2RhdGFfY29udGFpbmVyXzEuTWljcm9kYXRhQ29udGFpbmVyO1xuZXhwb3J0cy5NZXRhID0gTWV0YTtcbiJdfQ==

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MicrodataContainer = (function () {
    function MicrodataContainer() {
    }
    MicrodataContainer.set = function (microdata) {
        var elem = this._head.querySelector('script[type="application/ld+json"]');
        if (elem) {
            this.clear();
        }
        elem = this._document.createElement('script');
        elem.type = 'application/ld+json';
        elem.text = JSON.stringify(microdata);
        this._head.appendChild(elem);
    };
    MicrodataContainer.clear = function () {
        var elem = this._head.querySelector('script[type="application/ld+json"]');
        if (elem) {
            this._head.removeChild(elem);
        }
    };
    return MicrodataContainer;
}());
MicrodataContainer._document = window.document;
MicrodataContainer._head = MicrodataContainer._document.head;
exports.MicrodataContainer = MicrodataContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksc0JBQXNCLFlBQVk7SUFDbEMsU0FBUyxxQkFBcUI7O0lBRTlCLG1CQUFtQixNQUFNLFVBQVUsV0FBVztRQUMxQyxJQUFJLE9BQU8sS0FBSyxNQUFNLGNBQWM7UUFDcEMsSUFBSSxNQUFNO1lBQ04sS0FBSzs7UUFFVCxPQUFPLEtBQUssVUFBVSxjQUFjO1FBQ3BDLEtBQUssT0FBTztRQUNaLEtBQUssT0FBTyxLQUFLLFVBQVU7UUFDM0IsS0FBSyxNQUFNLFlBQVk7O0lBRTNCLG1CQUFtQixRQUFRLFlBQVk7UUFDbkMsSUFBSSxPQUFPLEtBQUssTUFBTSxjQUFjO1FBQ3BDLElBQUksTUFBTTtZQUNOLEtBQUssTUFBTSxZQUFZOzs7SUFHL0IsT0FBTzs7QUFFWCxtQkFBbUIsWUFBWSxPQUFPO0FBQ3RDLG1CQUFtQixRQUFRLG1CQUFtQixVQUFVO0FBQ3hELFFBQVEscUJBQXFCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgTWljcm9kYXRhQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaWNyb2RhdGFDb250YWluZXIoKSB7XG4gICAgfVxuICAgIE1pY3JvZGF0YUNvbnRhaW5lci5zZXQgPSBmdW5jdGlvbiAobWljcm9kYXRhKSB7XG4gICAgICAgIHZhciBlbGVtID0gdGhpcy5faGVhZC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIl0nKTtcbiAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGVsZW0udHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgICAgZWxlbS50ZXh0ID0gSlNPTi5zdHJpbmdpZnkobWljcm9kYXRhKTtcbiAgICAgICAgdGhpcy5faGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuICAgIE1pY3JvZGF0YUNvbnRhaW5lci5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW0gPSB0aGlzLl9oZWFkLnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXScpO1xuICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgdGhpcy5faGVhZC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1pY3JvZGF0YUNvbnRhaW5lcjtcbn0oKSk7XG5NaWNyb2RhdGFDb250YWluZXIuX2RvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuTWljcm9kYXRhQ29udGFpbmVyLl9oZWFkID0gTWljcm9kYXRhQ29udGFpbmVyLl9kb2N1bWVudC5oZWFkO1xuZXhwb3J0cy5NaWNyb2RhdGFDb250YWluZXIgPSBNaWNyb2RhdGFDb250YWluZXI7XG4iXX0=

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var meta_container_1 = __webpack_require__(75);
var TwitterMetaContainer = (function (_super) {
    tslib_1.__extends(TwitterMetaContainer, _super);
    function TwitterMetaContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TwitterMetaContainer, "card", {
        get: function () { return this._get('twitter:card'); },
        set: function (value) { this._set('twitter:card', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterMetaContainer, "title", {
        get: function () { return this._get('twitter:title'); },
        set: function (value) { this._set('twitter:title', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterMetaContainer, "description", {
        get: function () { return this._get('twitter:description'); },
        set: function (value) { this._set('twitter:description', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterMetaContainer, "image", {
        get: function () { return this._get('twitter:image'); },
        set: function (value) { this._set('twitter:image', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterMetaContainer, "url", {
        get: function () { return this._get('twitter:url'); },
        set: function (value) { this._set('twitter:url', value); },
        enumerable: true,
        configurable: true
    });
    return TwitterMetaContainer;
}(meta_container_1.MetaContainer));
exports.TwitterMetaContainer = TwitterMetaContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksbUJBQW1CLFFBQVE7QUFDL0IsSUFBSSx3QkFBd0IsVUFBVSxRQUFRO0lBQzFDLFFBQVEsVUFBVSxzQkFBc0I7SUFDeEMsU0FBUyx1QkFBdUI7UUFDNUIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsT0FBTyxlQUFlLHNCQUFzQixRQUFRO1FBQ2hELEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGdCQUFnQjtRQUNsRCxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLHNCQUFzQixTQUFTO1FBQ2pELEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGlCQUFpQjtRQUNuRCxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLHNCQUFzQixlQUFlO1FBQ3ZELEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLHVCQUF1QjtRQUN6RCxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLHNCQUFzQixTQUFTO1FBQ2pELEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGlCQUFpQjtRQUNuRCxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTyxlQUFlLHNCQUFzQixPQUFPO1FBQy9DLEtBQUssWUFBWSxFQUFFLE9BQU8sS0FBSyxLQUFLO1FBQ3BDLEtBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxLQUFLLGVBQWU7UUFDakQsWUFBWTtRQUNaLGNBQWM7O0lBRWxCLE9BQU87RUFDVCxpQkFBaUI7QUFDbkIsUUFBUSx1QkFBdUI7QUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1ldGFfY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9tZXRhLWNvbnRhaW5lclwiKTtcbnZhciBUd2l0dGVyTWV0YUNvbnRhaW5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoVHdpdHRlck1ldGFDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHdpdHRlck1ldGFDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFR3aXR0ZXJNZXRhQ29udGFpbmVyLCBcImNhcmRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2dldCgndHdpdHRlcjpjYXJkJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgndHdpdHRlcjpjYXJkJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHdpdHRlck1ldGFDb250YWluZXIsIFwidGl0bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2dldCgndHdpdHRlcjp0aXRsZScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLl9zZXQoJ3R3aXR0ZXI6dGl0bGUnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUd2l0dGVyTWV0YUNvbnRhaW5lciwgXCJkZXNjcmlwdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZ2V0KCd0d2l0dGVyOmRlc2NyaXB0aW9uJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgndHdpdHRlcjpkZXNjcmlwdGlvbicsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFR3aXR0ZXJNZXRhQ29udGFpbmVyLCBcImltYWdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ3R3aXR0ZXI6aW1hZ2UnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5fc2V0KCd0d2l0dGVyOmltYWdlJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHdpdHRlck1ldGFDb250YWluZXIsIFwidXJsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9nZXQoJ3R3aXR0ZXI6dXJsJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuX3NldCgndHdpdHRlcjp1cmwnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUd2l0dGVyTWV0YUNvbnRhaW5lcjtcbn0obWV0YV9jb250YWluZXJfMS5NZXRhQ29udGFpbmVyKSk7XG5leHBvcnRzLlR3aXR0ZXJNZXRhQ29udGFpbmVyID0gVHdpdHRlck1ldGFDb250YWluZXI7XG4iXX0=

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var RegistryItemConfig = (function () {
    function RegistryItemConfig(maxItems) {
        if (maxItems === void 0) { maxItems = 0; }
        this.maxItems = maxItems;
    }
    return RegistryItemConfig;
}());
exports.RegistryItemConfig = RegistryItemConfig;
var Registry = (function () {
    function Registry() {
    }
    Registry.setConfig = function (type, config) {
        this.config[type] = config;
    };
    Registry.store = function (type, newItems) {
        if (typeof this.config[type] === 'undefined') {
            this.config[type] = new RegistryItemConfig();
        }
        if (typeof this.items[type] === 'undefined') {
            this.items[type] = [];
        }
        if (!Array.isArray(newItems)) {
            newItems = [newItems];
        }
        this.items[type] = this.items[type].concat(newItems);
        this.items[type] = this.items[type].slice(-this.config[type].maxItems);
    };
    Registry.find = function (type, id) {
        if (typeof this.items[type] === 'undefined') {
            this.items[type] = [];
        }
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return _.findLast(this.items[type], { id: id });
    };
    return Registry;
}());
Registry.config = {};
Registry.items = {};
exports.Registry = Registry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksc0JBQXNCLFlBQVk7SUFDbEMsU0FBUyxtQkFBbUIsVUFBVTtRQUNsQyxJQUFJLGFBQWEsS0FBSyxHQUFHLEVBQUUsV0FBVztRQUN0QyxLQUFLLFdBQVc7O0lBRXBCLE9BQU87O0FBRVgsUUFBUSxxQkFBcUI7QUFDN0IsSUFBSSxZQUFZLFlBQVk7SUFDeEIsU0FBUyxXQUFXOztJQUVwQixTQUFTLFlBQVksVUFBVSxNQUFNLFFBQVE7UUFDekMsS0FBSyxPQUFPLFFBQVE7O0lBRXhCLFNBQVMsUUFBUSxVQUFVLE1BQU0sVUFBVTtRQUN2QyxJQUFJLE9BQU8sS0FBSyxPQUFPLFVBQVUsYUFBYTtZQUMxQyxLQUFLLE9BQU8sUUFBUSxJQUFJOztRQUU1QixJQUFJLE9BQU8sS0FBSyxNQUFNLFVBQVUsYUFBYTtZQUN6QyxLQUFLLE1BQU0sUUFBUTs7UUFFdkIsSUFBSSxDQUFDLE1BQU0sUUFBUSxXQUFXO1lBQzFCLFdBQVcsQ0FBQzs7UUFFaEIsS0FBSyxNQUFNLFFBQVEsS0FBSyxNQUFNLE1BQU0sT0FBTztRQUMzQyxLQUFLLE1BQU0sUUFBUSxLQUFLLE1BQU0sTUFBTSxNQUFNLENBQUMsS0FBSyxPQUFPLE1BQU07O0lBRWpFLFNBQVMsT0FBTyxVQUFVLE1BQU0sSUFBSTtRQUNoQyxJQUFJLE9BQU8sS0FBSyxNQUFNLFVBQVUsYUFBYTtZQUN6QyxLQUFLLE1BQU0sUUFBUTs7UUFFdkIsSUFBSSxPQUFPLE9BQU8sVUFBVTtZQUN4QixLQUFLLFNBQVMsSUFBSTs7UUFFdEIsT0FBTyxFQUFFLFNBQVMsS0FBSyxNQUFNLE9BQU8sRUFBRSxJQUFJOztJQUU5QyxPQUFPOztBQUVYLFNBQVMsU0FBUztBQUNsQixTQUFTLFFBQVE7QUFDakIsUUFBUSxXQUFXO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgUmVnaXN0cnlJdGVtQ29uZmlnID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWdpc3RyeUl0ZW1Db25maWcobWF4SXRlbXMpIHtcbiAgICAgICAgaWYgKG1heEl0ZW1zID09PSB2b2lkIDApIHsgbWF4SXRlbXMgPSAwOyB9XG4gICAgICAgIHRoaXMubWF4SXRlbXMgPSBtYXhJdGVtcztcbiAgICB9XG4gICAgcmV0dXJuIFJlZ2lzdHJ5SXRlbUNvbmZpZztcbn0oKSk7XG5leHBvcnRzLlJlZ2lzdHJ5SXRlbUNvbmZpZyA9IFJlZ2lzdHJ5SXRlbUNvbmZpZztcbnZhciBSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVnaXN0cnkoKSB7XG4gICAgfVxuICAgIFJlZ2lzdHJ5LnNldENvbmZpZyA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWdbdHlwZV0gPSBjb25maWc7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5zdG9yZSA9IGZ1bmN0aW9uICh0eXBlLCBuZXdJdGVtcykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnW3R5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5jb25maWdbdHlwZV0gPSBuZXcgUmVnaXN0cnlJdGVtQ29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLml0ZW1zW3R5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShuZXdJdGVtcykpIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gW25ld0l0ZW1zXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zW3R5cGVdID0gdGhpcy5pdGVtc1t0eXBlXS5jb25jYXQobmV3SXRlbXMpO1xuICAgICAgICB0aGlzLml0ZW1zW3R5cGVdID0gdGhpcy5pdGVtc1t0eXBlXS5zbGljZSgtdGhpcy5jb25maWdbdHlwZV0ubWF4SXRlbXMpO1xuICAgIH07XG4gICAgUmVnaXN0cnkuZmluZCA9IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaXRlbXNbdHlwZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW3R5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlkID0gcGFyc2VJbnQoaWQsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXy5maW5kTGFzdCh0aGlzLml0ZW1zW3R5cGVdLCB7IGlkOiBpZCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWdpc3RyeTtcbn0oKSk7XG5SZWdpc3RyeS5jb25maWcgPSB7fTtcblJlZ2lzdHJ5Lml0ZW1zID0ge307XG5leHBvcnRzLlJlZ2lzdHJ5ID0gUmVnaXN0cnk7XG4iXX0=

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var SellablePricing = (function (_super) {
    tslib_1.__extends(SellablePricing, _super);
    function SellablePricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SellablePricing.getOriginalPricing = function (pricings) {
        if (Array.isArray(pricings)) {
            if (pricings[0].promotional) {
                return pricings[1];
            }
            return pricings[0];
        }
        return undefined;
    };
    SellablePricing.getPromotionalPricing = function (pricings) {
        if (Array.isArray(pricings) && pricings[0].promotional) {
            return pricings[0];
        }
        return undefined;
    };
    return SellablePricing;
}(model_service_1.Model));
exports.SellablePricing = SellablePricing;
model_service_1.Model.create(SellablePricing);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxtQkFBbUIsVUFBVSxRQUFRO0lBQ3JDLFFBQVEsVUFBVSxpQkFBaUI7SUFDbkMsU0FBUyxrQkFBa0I7UUFDdkIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsZ0JBQWdCLHFCQUFxQixVQUFVLFVBQVU7UUFDckQsSUFBSSxNQUFNLFFBQVEsV0FBVztZQUN6QixJQUFJLFNBQVMsR0FBRyxhQUFhO2dCQUN6QixPQUFPLFNBQVM7O1lBRXBCLE9BQU8sU0FBUzs7UUFFcEIsT0FBTzs7SUFFWCxnQkFBZ0Isd0JBQXdCLFVBQVUsVUFBVTtRQUN4RCxJQUFJLE1BQU0sUUFBUSxhQUFhLFNBQVMsR0FBRyxhQUFhO1lBQ3BELE9BQU8sU0FBUzs7UUFFcEIsT0FBTzs7SUFFWCxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLFFBQVEsa0JBQWtCO0FBQzFCLGdCQUFnQixNQUFNLE9BQU87QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1vZGVsX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbC9tb2RlbC5zZXJ2aWNlXCIpO1xudmFyIFNlbGxhYmxlUHJpY2luZyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2VsbGFibGVQcmljaW5nLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGxhYmxlUHJpY2luZygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxsYWJsZVByaWNpbmcuZ2V0T3JpZ2luYWxQcmljaW5nID0gZnVuY3Rpb24gKHByaWNpbmdzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByaWNpbmdzKSkge1xuICAgICAgICAgICAgaWYgKHByaWNpbmdzWzBdLnByb21vdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaWNpbmdzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByaWNpbmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBTZWxsYWJsZVByaWNpbmcuZ2V0UHJvbW90aW9uYWxQcmljaW5nID0gZnVuY3Rpb24gKHByaWNpbmdzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByaWNpbmdzKSAmJiBwcmljaW5nc1swXS5wcm9tb3Rpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHByaWNpbmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsbGFibGVQcmljaW5nO1xufShtb2RlbF9zZXJ2aWNlXzEuTW9kZWwpKTtcbmV4cG9ydHMuU2VsbGFibGVQcmljaW5nID0gU2VsbGFibGVQcmljaW5nO1xubW9kZWxfc2VydmljZV8xLk1vZGVsLmNyZWF0ZShTZWxsYWJsZVByaWNpbmcpO1xuIl19

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var pricing_model_1 = __webpack_require__(242);
var Sellable = (function (_super) {
    tslib_1.__extends(Sellable, _super);
    function Sellable(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        _this.pricings = [];
        if (data.pricings) {
            _this.pricings = pricing_model_1.SellablePricing.populate(data.pricings);
        }
        return _this;
    }
    return Sellable;
}(model_service_1.Model));
Sellable.TYPE_FREE = 'free';
Sellable.TYPE_PAID = 'paid';
Sellable.TYPE_PWYW = 'pwyw';
exports.Sellable = Sellable;
model_service_1.Model.create(Sellable);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxrQkFBa0IsUUFBUTtBQUM5QixJQUFJLFlBQVksVUFBVSxRQUFRO0lBQzlCLFFBQVEsVUFBVSxVQUFVO0lBQzVCLFNBQVMsU0FBUyxNQUFNO1FBQ3BCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRSxPQUFPO1FBQzlCLElBQUksUUFBUSxPQUFPLEtBQUssTUFBTSxTQUFTO1FBQ3ZDLE1BQU0sV0FBVztRQUNqQixJQUFJLEtBQUssVUFBVTtZQUNmLE1BQU0sV0FBVyxnQkFBZ0IsZ0JBQWdCLFNBQVMsS0FBSzs7UUFFbkUsT0FBTzs7SUFFWCxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLFlBQVk7QUFDckIsU0FBUyxZQUFZO0FBQ3JCLFFBQVEsV0FBVztBQUNuQixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciBwcmljaW5nX21vZGVsXzEgPSByZXF1aXJlKFwiLi9wcmljaW5nL3ByaWNpbmcubW9kZWxcIik7XG52YXIgU2VsbGFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFNlbGxhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGxhYmxlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJpY2luZ3MgPSBbXTtcbiAgICAgICAgaWYgKGRhdGEucHJpY2luZ3MpIHtcbiAgICAgICAgICAgIF90aGlzLnByaWNpbmdzID0gcHJpY2luZ19tb2RlbF8xLlNlbGxhYmxlUHJpY2luZy5wb3B1bGF0ZShkYXRhLnByaWNpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTZWxsYWJsZTtcbn0obW9kZWxfc2VydmljZV8xLk1vZGVsKSk7XG5TZWxsYWJsZS5UWVBFX0ZSRUUgPSAnZnJlZSc7XG5TZWxsYWJsZS5UWVBFX1BBSUQgPSAncGFpZCc7XG5TZWxsYWJsZS5UWVBFX1BXWVcgPSAncHd5dyc7XG5leHBvcnRzLlNlbGxhYmxlID0gU2VsbGFibGU7XG5tb2RlbF9zZXJ2aWNlXzEuTW9kZWwuY3JlYXRlKFNlbGxhYmxlKTtcbiJdfQ==

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var SiteContentBlock = (function (_super) {
    tslib_1.__extends(SiteContentBlock, _super);
    function SiteContentBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SiteContentBlock;
}(model_service_1.Model));
exports.SiteContentBlock = SiteContentBlock;
model_service_1.Model.create(SiteContentBlock);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxvQkFBb0IsVUFBVSxRQUFRO0lBQ3RDLFFBQVEsVUFBVSxrQkFBa0I7SUFDcEMsU0FBUyxtQkFBbUI7UUFDeEIsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYzs7SUFFL0QsT0FBTztFQUNULGdCQUFnQjtBQUNsQixRQUFRLG1CQUFtQjtBQUMzQixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciBTaXRlQ29udGVudEJsb2NrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTaXRlQ29udGVudEJsb2NrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpdGVDb250ZW50QmxvY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNpdGVDb250ZW50QmxvY2s7XG59KG1vZGVsX3NlcnZpY2VfMS5Nb2RlbCkpO1xuZXhwb3J0cy5TaXRlQ29udGVudEJsb2NrID0gU2l0ZUNvbnRlbnRCbG9jaztcbm1vZGVsX3NlcnZpY2VfMS5Nb2RlbC5jcmVhdGUoU2l0ZUNvbnRlbnRCbG9jayk7XG4iXX0=

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var theme_model_1 = __webpack_require__(247);
var content_block_model_1 = __webpack_require__(244);
var Site = (function (_super) {
    tslib_1.__extends(Site, _super);
    function Site(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        if (data.theme) {
            _this.theme = new theme_model_1.SiteTheme(data.theme);
        }
        if (data.content_blocks) {
            _this.content_blocks = content_block_model_1.SiteContentBlock.populate(data.content_blocks);
        }
        return _this;
    }
    return Site;
}(model_service_1.Model));
Site.STATUS_INACTIVE = 'inactive';
Site.STATUS_ACTIVE = 'active';
Site.STATUS_REMOVED = 'removed';
exports.Site = Site;
model_service_1.Model.create(Site);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxnQkFBZ0IsUUFBUTtBQUM1QixJQUFJLHdCQUF3QixRQUFRO0FBQ3BDLElBQUksUUFBUSxVQUFVLFFBQVE7SUFDMUIsUUFBUSxVQUFVLE1BQU07SUFDeEIsU0FBUyxLQUFLLE1BQU07UUFDaEIsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFLE9BQU87UUFDOUIsSUFBSSxRQUFRLE9BQU8sS0FBSyxNQUFNLFNBQVM7UUFDdkMsSUFBSSxLQUFLLE9BQU87WUFDWixNQUFNLFFBQVEsSUFBSSxjQUFjLFVBQVUsS0FBSzs7UUFFbkQsSUFBSSxLQUFLLGdCQUFnQjtZQUNyQixNQUFNLGlCQUFpQixzQkFBc0IsaUJBQWlCLFNBQVMsS0FBSzs7UUFFaEYsT0FBTzs7SUFFWCxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLEtBQUssa0JBQWtCO0FBQ3ZCLEtBQUssZ0JBQWdCO0FBQ3JCLEtBQUssaUJBQWlCO0FBQ3RCLFFBQVEsT0FBTztBQUNmLGdCQUFnQixNQUFNLE9BQU87QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG1vZGVsX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbC9tb2RlbC5zZXJ2aWNlXCIpO1xudmFyIHRoZW1lX21vZGVsXzEgPSByZXF1aXJlKFwiLi90aGVtZS90aGVtZS1tb2RlbFwiKTtcbnZhciBjb250ZW50X2Jsb2NrX21vZGVsXzEgPSByZXF1aXJlKFwiLi9jb250ZW50LWJsb2NrL2NvbnRlbnQtYmxvY2stbW9kZWxcIik7XG52YXIgU2l0ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2l0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaXRlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgaWYgKGRhdGEudGhlbWUpIHtcbiAgICAgICAgICAgIF90aGlzLnRoZW1lID0gbmV3IHRoZW1lX21vZGVsXzEuU2l0ZVRoZW1lKGRhdGEudGhlbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbnRlbnRfYmxvY2tzKSB7XG4gICAgICAgICAgICBfdGhpcy5jb250ZW50X2Jsb2NrcyA9IGNvbnRlbnRfYmxvY2tfbW9kZWxfMS5TaXRlQ29udGVudEJsb2NrLnBvcHVsYXRlKGRhdGEuY29udGVudF9ibG9ja3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNpdGU7XG59KG1vZGVsX3NlcnZpY2VfMS5Nb2RlbCkpO1xuU2l0ZS5TVEFUVVNfSU5BQ1RJVkUgPSAnaW5hY3RpdmUnO1xuU2l0ZS5TVEFUVVNfQUNUSVZFID0gJ2FjdGl2ZSc7XG5TaXRlLlNUQVRVU19SRU1PVkVEID0gJ3JlbW92ZWQnO1xuZXhwb3J0cy5TaXRlID0gU2l0ZTtcbm1vZGVsX3NlcnZpY2VfMS5Nb2RlbC5jcmVhdGUoU2l0ZSk7XG4iXX0=

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var SiteTemplate = (function (_super) {
    tslib_1.__extends(SiteTemplate, _super);
    function SiteTemplate(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        if (data.data) {
            _this.data = JSON.parse(data.data) || {};
        }
        return _this;
    }
    return SiteTemplate;
}(model_service_1.Model));
exports.SiteTemplate = SiteTemplate;
model_service_1.Model.create(SiteTemplate);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxnQkFBZ0IsVUFBVSxRQUFRO0lBQ2xDLFFBQVEsVUFBVSxjQUFjO0lBQ2hDLFNBQVMsYUFBYSxNQUFNO1FBQ3hCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRSxPQUFPO1FBQzlCLElBQUksUUFBUSxPQUFPLEtBQUssTUFBTSxTQUFTO1FBQ3ZDLElBQUksS0FBSyxNQUFNO1lBQ1gsTUFBTSxPQUFPLEtBQUssTUFBTSxLQUFLLFNBQVM7O1FBRTFDLE9BQU87O0lBRVgsT0FBTztFQUNULGdCQUFnQjtBQUNsQixRQUFRLGVBQWU7QUFDdkIsZ0JBQWdCLE1BQU0sT0FBTztBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgbW9kZWxfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL21vZGVsLnNlcnZpY2VcIik7XG52YXIgU2l0ZVRlbXBsYXRlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTaXRlVGVtcGxhdGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2l0ZVRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuZGF0YSA9IEpTT04ucGFyc2UoZGF0YS5kYXRhKSB8fCB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTaXRlVGVtcGxhdGU7XG59KG1vZGVsX3NlcnZpY2VfMS5Nb2RlbCkpO1xuZXhwb3J0cy5TaXRlVGVtcGxhdGUgPSBTaXRlVGVtcGxhdGU7XG5tb2RlbF9zZXJ2aWNlXzEuTW9kZWwuY3JlYXRlKFNpdGVUZW1wbGF0ZSk7XG4iXX0=

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var model_service_1 = __webpack_require__(10);
var template_model_1 = __webpack_require__(246);
var SiteTheme = (function (_super) {
    tslib_1.__extends(SiteTheme, _super);
    function SiteTheme(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, data) || this;
        if (data.template) {
            _this.template = new template_model_1.SiteTemplate(data.template);
        }
        if (data.data) {
            _this.data = JSON.parse(data.data) || {};
        }
        return _this;
    }
    return SiteTheme;
}(model_service_1.Model));
exports.SiteTheme = SiteTheme;
model_service_1.Model.create(SiteTheme);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksa0JBQWtCLFFBQVE7QUFDOUIsSUFBSSxtQkFBbUIsUUFBUTtBQUMvQixJQUFJLGFBQWEsVUFBVSxRQUFRO0lBQy9CLFFBQVEsVUFBVSxXQUFXO0lBQzdCLFNBQVMsVUFBVSxNQUFNO1FBQ3JCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRSxPQUFPO1FBQzlCLElBQUksUUFBUSxPQUFPLEtBQUssTUFBTSxTQUFTO1FBQ3ZDLElBQUksS0FBSyxVQUFVO1lBQ2YsTUFBTSxXQUFXLElBQUksaUJBQWlCLGFBQWEsS0FBSzs7UUFFNUQsSUFBSSxLQUFLLE1BQU07WUFDWCxNQUFNLE9BQU8sS0FBSyxNQUFNLEtBQUssU0FBUzs7UUFFMUMsT0FBTzs7SUFFWCxPQUFPO0VBQ1QsZ0JBQWdCO0FBQ2xCLFFBQVEsWUFBWTtBQUNwQixnQkFBZ0IsTUFBTSxPQUFPO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBtb2RlbF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWwvbW9kZWwuc2VydmljZVwiKTtcbnZhciB0ZW1wbGF0ZV9tb2RlbF8xID0gcmVxdWlyZShcIi4uL3RlbXBsYXRlL3RlbXBsYXRlLW1vZGVsXCIpO1xudmFyIFNpdGVUaGVtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2l0ZVRoZW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpdGVUaGVtZShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRhdGEpIHx8IHRoaXM7XG4gICAgICAgIGlmIChkYXRhLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICBfdGhpcy50ZW1wbGF0ZSA9IG5ldyB0ZW1wbGF0ZV9tb2RlbF8xLlNpdGVUZW1wbGF0ZShkYXRhLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhID0gSlNPTi5wYXJzZShkYXRhLmRhdGEpIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNpdGVUaGVtZTtcbn0obW9kZWxfc2VydmljZV8xLk1vZGVsKSk7XG5leHBvcnRzLlNpdGVUaGVtZSA9IFNpdGVUaGVtZTtcbm1vZGVsX3NlcnZpY2VfMS5Nb2RlbC5jcmVhdGUoU2l0ZVRoZW1lKTtcbiJdfQ==

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(273);
var ruler_service_1 = __webpack_require__(76);
var screen_service_1 = __webpack_require__(20);
var RATIO = 0.5625; // 16:9
var AppSketchfabEmbed = (function (_super) {
    tslib_1.__extends(AppSketchfabEmbed, _super);
    function AppSketchfabEmbed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.embedUrl = '';
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    AppSketchfabEmbed.prototype.mounted = function () {
        var _this = this;
        this.recalculateDimensions();
        this.resize$ = screen_service_1.Screen.resizeChanges.subscribe(function () { return _this.recalculateDimensions(); });
    };
    AppSketchfabEmbed.prototype.destroyed = function () {
        this.resize$.unsubscribe();
    };
    AppSketchfabEmbed.prototype.idChange = function () {
        if (!this.sketchfabId) {
            return;
        }
        var url = "https://sketchfab.com/models/" + this.sketchfabId + "/embed";
        if (this.autoplay) {
            url += '?autostart=1';
        }
        this.embedUrl = url;
    };
    AppSketchfabEmbed.prototype.recalculateDimensions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.width = ruler_service_1.Ruler.width(this.$el.getElementsByClassName('sketchfab-embed-inner')[0]);
                        if (this.maxWidth) {
                            this.width = Math.min(this.maxWidth, this.width);
                        }
                        this.height = this.width * RATIO;
                        if (this.maxHeight && this.height > this.maxHeight) {
                            this.height = this.maxHeight;
                            this.width = this.height / RATIO;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AppSketchfabEmbed;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(String)
], AppSketchfabEmbed.prototype, "sketchfabId", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppSketchfabEmbed.prototype, "maxWidth", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Number)
], AppSketchfabEmbed.prototype, "maxHeight", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: Boolean, default: false })
], AppSketchfabEmbed.prototype, "autoplay", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch('sketchfabId', { immediate: true })
], AppSketchfabEmbed.prototype, "idChange", null);
AppSketchfabEmbed = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'sketchfab-embed',
    })
], AppSketchfabEmbed);
exports.AppSketchfabEmbed = AppSketchfabEmbed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxrQkFBa0IsUUFBUTtBQUM5QixJQUFJLG1CQUFtQixRQUFRO0FBQy9CLElBQUksUUFBUTtBQUNaLElBQUkscUJBQXFCLFVBQVUsUUFBUTtJQUN2QyxRQUFRLFVBQVUsbUJBQW1CO0lBQ3JDLFNBQVMsb0JBQW9CO1FBQ3pCLElBQUksUUFBUSxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYztRQUNoRSxNQUFNLFdBQVc7UUFDakIsTUFBTSxRQUFRO1FBQ2QsTUFBTSxTQUFTO1FBQ2YsT0FBTzs7SUFFWCxrQkFBa0IsVUFBVSxVQUFVLFlBQVk7UUFDOUMsSUFBSSxRQUFRO1FBQ1osS0FBSztRQUNMLEtBQUssVUFBVSxpQkFBaUIsT0FBTyxjQUFjLFVBQVUsWUFBWSxFQUFFLE9BQU8sTUFBTTs7SUFFOUYsa0JBQWtCLFVBQVUsWUFBWSxZQUFZO1FBQ2hELEtBQUssUUFBUTs7SUFFakIsa0JBQWtCLFVBQVUsV0FBVyxZQUFZO1FBQy9DLElBQUksQ0FBQyxLQUFLLGFBQWE7WUFDbkI7O1FBRUosSUFBSSxNQUFNLGtDQUFrQyxLQUFLLGNBQWM7UUFDL0QsSUFBSSxLQUFLLFVBQVU7WUFDZixPQUFPOztRQUVYLEtBQUssV0FBVzs7SUFFcEIsa0JBQWtCLFVBQVUsd0JBQXdCLFlBQVk7UUFDNUQsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7WUFDdkQsT0FBTyxRQUFRLFlBQVksTUFBTSxVQUFVLElBQUk7Z0JBQzNDLFFBQVEsR0FBRztvQkFDUCxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsS0FBSztvQkFDbEMsS0FBSzt3QkFDRCxHQUFHO3dCQUNILEtBQUssUUFBUSxnQkFBZ0IsTUFBTSxNQUFNLEtBQUssSUFBSSx1QkFBdUIseUJBQXlCO3dCQUNsRyxJQUFJLEtBQUssVUFBVTs0QkFDZixLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssVUFBVSxLQUFLOzt3QkFFOUMsS0FBSyxTQUFTLEtBQUssUUFBUTt3QkFDM0IsSUFBSSxLQUFLLGFBQWEsS0FBSyxTQUFTLEtBQUssV0FBVzs0QkFDaEQsS0FBSyxTQUFTLEtBQUs7NEJBQ25CLEtBQUssUUFBUSxLQUFLLFNBQVM7O3dCQUUvQixPQUFPLENBQUM7Ozs7O0lBSzVCLE9BQU87RUFDVDtBQUNGLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLGtCQUFrQixXQUFXLGVBQWUsS0FBSztBQUNwRCxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixrQkFBa0IsV0FBVyxZQUFZLEtBQUs7QUFDakQsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUs7R0FDL0Isa0JBQWtCLFdBQVcsYUFBYSxLQUFLO0FBQ2xELFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLLEVBQUUsTUFBTSxTQUFTLFNBQVM7R0FDekQsa0JBQWtCLFdBQVcsWUFBWSxLQUFLO0FBQ2pELFFBQVEsV0FBVztJQUNmLHlCQUF5QixNQUFNLGVBQWUsRUFBRSxXQUFXO0dBQzVELGtCQUFrQixXQUFXLFlBQVk7QUFDNUMsb0JBQW9CLFFBQVEsV0FBVztJQUNuQztJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07O0dBRVg7QUFDSCxRQUFRLG9CQUFvQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiKTtcbnZhciBWaWV3ID0gcmVxdWlyZShcIiF2aWV3IS4vZW1iZWQuaHRtbFwiKTtcbnZhciBydWxlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vcnVsZXIvcnVsZXItc2VydmljZVwiKTtcbnZhciBzY3JlZW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NjcmVlbi9zY3JlZW4tc2VydmljZVwiKTtcbnZhciBSQVRJTyA9IDAuNTYyNTsgLy8gMTY6OVxudmFyIEFwcFNrZXRjaGZhYkVtYmVkID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBcHBTa2V0Y2hmYWJFbWJlZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBTa2V0Y2hmYWJFbWJlZCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVtYmVkVXJsID0gJyc7XG4gICAgICAgIF90aGlzLndpZHRoID0gMDtcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcHBTa2V0Y2hmYWJFbWJlZC5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5yZXNpemUkID0gc2NyZWVuX3NlcnZpY2VfMS5TY3JlZW4ucmVzaXplQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7IH0pO1xuICAgIH07XG4gICAgQXBwU2tldGNoZmFiRW1iZWQucHJvdG90eXBlLmRlc3Ryb3llZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBBcHBTa2V0Y2hmYWJFbWJlZC5wcm90b3R5cGUuaWRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5za2V0Y2hmYWJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vc2tldGNoZmFiLmNvbS9tb2RlbHMvXCIgKyB0aGlzLnNrZXRjaGZhYklkICsgXCIvZW1iZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHVybCArPSAnP2F1dG9zdGFydD0xJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtYmVkVXJsID0gdXJsO1xuICAgIH07XG4gICAgQXBwU2tldGNoZmFiRW1iZWQucHJvdG90eXBlLnJlY2FsY3VsYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy4kbmV4dFRpY2soKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBydWxlcl9zZXJ2aWNlXzEuUnVsZXIud2lkdGgodGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2tldGNoZmFiLWVtYmVkLWlubmVyJylbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGggKiBSQVRJTztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heEhlaWdodCAmJiB0aGlzLmhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1heEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQgLyBSQVRJTztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwU2tldGNoZmFiRW1iZWQ7XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChTdHJpbmcpXG5dLCBBcHBTa2V0Y2hmYWJFbWJlZC5wcm90b3R5cGUsIFwic2tldGNoZmFiSWRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoTnVtYmVyKVxuXSwgQXBwU2tldGNoZmFiRW1iZWQucHJvdG90eXBlLCBcIm1heFdpZHRoXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKE51bWJlcilcbl0sIEFwcFNrZXRjaGZhYkVtYmVkLnByb3RvdHlwZSwgXCJtYXhIZWlnaHRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9KVxuXSwgQXBwU2tldGNoZmFiRW1iZWQucHJvdG90eXBlLCBcImF1dG9wbGF5XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5XYXRjaCgnc2tldGNoZmFiSWQnLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KVxuXSwgQXBwU2tldGNoZmFiRW1iZWQucHJvdG90eXBlLCBcImlkQ2hhbmdlXCIsIG51bGwpO1xuQXBwU2tldGNoZmFiRW1iZWQgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIFZpZXcsXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLkNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6ICdza2V0Y2hmYWItZW1iZWQnLFxuICAgIH0pXG5dLCBBcHBTa2V0Y2hmYWJFbWJlZCk7XG5leHBvcnRzLkFwcFNrZXRjaGZhYkVtYmVkID0gQXBwU2tldGNoZmFiRW1iZWQ7XG4iXX0=

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var AppThemeInjector = (function (_super) {
    tslib_1.__extends(AppThemeInjector, _super);
    function AppThemeInjector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppThemeInjector.prototype.mounted = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            // console.log( 'got msg', event.data );
            switch (event.data.type) {
                case 'theme-update':
                    if (!event.data.theme || !event.data.definition) {
                        break;
                    }
                    _this.refreshStyles(event.data.definition, event.data.theme);
                    break;
            }
        });
        this.refreshStyles(this.definition, this.theme);
    };
    AppThemeInjector.prototype.render = function (h) {
        return h('style');
    };
    AppThemeInjector.prototype.refreshStyles = function (themeDefinition, currentTheme) {
        var styles = [];
        var fonts = [];
        Object.keys(themeDefinition.definitions).forEach(function (field) {
            var definition = themeDefinition.definitions[field];
            if (currentTheme && typeof currentTheme[field] !== 'undefined' && currentTheme[field]) {
                var propertyValue = void 0;
                if (definition.type === 'image') {
                    propertyValue = 'url("' + currentTheme[field].img_url + '")';
                }
                else if (definition.type === 'background-repeat') {
                    if (currentTheme[field] === 'repeat-x') {
                        propertyValue = 'repeat-x';
                    }
                    else if (currentTheme[field] === 'repeat-y') {
                        propertyValue = 'repeat-y';
                    }
                    else if (currentTheme[field] === 'no-repeat') {
                        propertyValue = 'no-repeat';
                    }
                    else {
                        propertyValue = 'repeat';
                    }
                }
                else if (definition.type === 'background-position') {
                    if (currentTheme[field] === 'topLeft') {
                        propertyValue = 'top left';
                    }
                    else if (currentTheme[field] === 'topRight') {
                        propertyValue = 'top right';
                    }
                    else if (currentTheme[field] === 'right') {
                        propertyValue = 'center right';
                    }
                    else if (currentTheme[field] === 'bottomRight') {
                        propertyValue = 'bottom right';
                    }
                    else if (currentTheme[field] === 'bottom') {
                        propertyValue = 'bottom center';
                    }
                    else if (currentTheme[field] === 'bottomLeft') {
                        propertyValue = 'bottom left';
                    }
                    else if (currentTheme[field] === 'left') {
                        propertyValue = 'center left';
                    }
                    else if (currentTheme[field] === 'middle') {
                        propertyValue = 'center center';
                    }
                    else {
                        propertyValue = 'top center';
                    }
                }
                else if (definition.type === 'fontFamily') {
                    propertyValue = "'" + currentTheme[field].family + "'";
                    fonts.push('@import url(//fonts.googleapis.com/css?family=' + currentTheme[field].family.replace(/ /g, '+') + ');');
                }
                else {
                    propertyValue = currentTheme[field];
                }
                for (var _i = 0, _a = definition.injections || [definition]; _i < _a.length; _i++) {
                    var injection = _a[_i];
                    // If no property, skip it.
                    if (typeof injection.property === 'undefined') {
                        continue;
                    }
                    var rule = injection.selector + " { " + injection.property + ": " + propertyValue + " }";
                    styles.push(rule);
                }
            }
        });
        var stylesCompiled = styles.join('');
        // Put in font imports first.
        stylesCompiled = fonts.join('') + stylesCompiled;
        // Add it to the element.
        this.$el.innerHTML = stylesCompiled;
    };
    return AppThemeInjector;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Object)
], AppThemeInjector.prototype, "definition", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Object)
], AppThemeInjector.prototype, "theme", void 0);
AppThemeInjector = tslib_1.__decorate([
    vue_property_decorator_1.Component({
        name: 'theme-injector',
    })
], AppThemeInjector);
exports.AppThemeInjector = AppThemeInjector;

//# sourceMappingURL=data:application/json;base64,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RXpCLE9BQU87RUFDVDtBQUNGLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLGlCQUFpQixXQUFXLGNBQWMsS0FBSztBQUNsRCxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixpQkFBaUIsV0FBVyxTQUFTLEtBQUs7QUFDN0MsbUJBQW1CLFFBQVEsV0FBVztJQUNsQyx5QkFBeUIsVUFBVTtRQUMvQixNQUFNOztHQUVYO0FBQ0gsUUFBUSxtQkFBbUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xID0gcmVxdWlyZShcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIik7XG52YXIgQXBwVGhlbWVJbmplY3RvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXBwVGhlbWVJbmplY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBUaGVtZUluamVjdG9yKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFwcFRoZW1lSW5qZWN0b3IucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggJ2dvdCBtc2cnLCBldmVudC5kYXRhICk7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RoZW1lLXVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQuZGF0YS50aGVtZSB8fCAhZXZlbnQuZGF0YS5kZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoU3R5bGVzKGV2ZW50LmRhdGEuZGVmaW5pdGlvbiwgZXZlbnQuZGF0YS50aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3R5bGVzKHRoaXMuZGVmaW5pdGlvbiwgdGhpcy50aGVtZSk7XG4gICAgfTtcbiAgICBBcHBUaGVtZUluamVjdG9yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCgnc3R5bGUnKTtcbiAgICB9O1xuICAgIEFwcFRoZW1lSW5qZWN0b3IucHJvdG90eXBlLnJlZnJlc2hTdHlsZXMgPSBmdW5jdGlvbiAodGhlbWVEZWZpbml0aW9uLCBjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgICAgICB2YXIgZm9udHMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhlbWVEZWZpbml0aW9uLmRlZmluaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSB0aGVtZURlZmluaXRpb24uZGVmaW5pdGlvbnNbZmllbGRdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaGVtZSAmJiB0eXBlb2YgY3VycmVudFRoZW1lW2ZpZWxkXSAhPT0gJ3VuZGVmaW5lZCcgJiYgY3VycmVudFRoZW1lW2ZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICd1cmwoXCInICsgY3VycmVudFRoZW1lW2ZpZWxkXS5pbWdfdXJsICsgJ1wiKSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlZmluaXRpb24udHlwZSA9PT0gJ2JhY2tncm91bmQtcmVwZWF0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ3JlcGVhdC14Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICdyZXBlYXQteCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ3JlcGVhdC15Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICdyZXBlYXQteSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ25vLXJlcGVhdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSAncmVwZWF0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWZpbml0aW9uLnR5cGUgPT09ICdiYWNrZ3JvdW5kLXBvc2l0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ3RvcExlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gJ3RvcCBsZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VGhlbWVbZmllbGRdID09PSAndG9wUmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gJ3RvcCByaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICdjZW50ZXIgcmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUaGVtZVtmaWVsZF0gPT09ICdib3R0b21SaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSAnYm90dG9tIHJpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VGhlbWVbZmllbGRdID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICdib3R0b20gY2VudGVyJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VGhlbWVbZmllbGRdID09PSAnYm90dG9tTGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSAnYm90dG9tIGxlZnQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUaGVtZVtmaWVsZF0gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9ICdjZW50ZXIgbGVmdCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFRoZW1lW2ZpZWxkXSA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSAnY2VudGVyIGNlbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gJ3RvcCBjZW50ZXInO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlZmluaXRpb24udHlwZSA9PT0gJ2ZvbnRGYW1pbHknKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBcIidcIiArIGN1cnJlbnRUaGVtZVtmaWVsZF0uZmFtaWx5ICsgXCInXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRzLnB1c2goJ0BpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgY3VycmVudFRoZW1lW2ZpZWxkXS5mYW1pbHkucmVwbGFjZSgvIC9nLCAnKycpICsgJyk7Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY3VycmVudFRoZW1lW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGRlZmluaXRpb24uaW5qZWN0aW9ucyB8fCBbZGVmaW5pdGlvbl07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmplY3Rpb24gPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIHByb3BlcnR5LCBza2lwIGl0LlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluamVjdGlvbi5wcm9wZXJ0eSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBydWxlID0gaW5qZWN0aW9uLnNlbGVjdG9yICsgXCIgeyBcIiArIGluamVjdGlvbi5wcm9wZXJ0eSArIFwiOiBcIiArIHByb3BlcnR5VmFsdWUgKyBcIiB9XCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdHlsZXNDb21waWxlZCA9IHN0eWxlcy5qb2luKCcnKTtcbiAgICAgICAgLy8gUHV0IGluIGZvbnQgaW1wb3J0cyBmaXJzdC5cbiAgICAgICAgc3R5bGVzQ29tcGlsZWQgPSBmb250cy5qb2luKCcnKSArIHN0eWxlc0NvbXBpbGVkO1xuICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGVsZW1lbnQuXG4gICAgICAgIHRoaXMuJGVsLmlubmVySFRNTCA9IHN0eWxlc0NvbXBpbGVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFwcFRoZW1lSW5qZWN0b3I7XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChPYmplY3QpXG5dLCBBcHBUaGVtZUluamVjdG9yLnByb3RvdHlwZSwgXCJkZWZpbml0aW9uXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKE9iamVjdClcbl0sIEFwcFRoZW1lSW5qZWN0b3IucHJvdG90eXBlLCBcInRoZW1lXCIsIHZvaWQgMCk7XG5BcHBUaGVtZUluamVjdG9yID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ3RoZW1lLWluamVjdG9yJyxcbiAgICB9KVxuXSwgQXBwVGhlbWVJbmplY3Rvcik7XG5leHBvcnRzLkFwcFRoZW1lSW5qZWN0b3IgPSBBcHBUaGVtZUluamVjdG9yO1xuIl19

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var widget_compiler_1 = __webpack_require__(119);
var WidgetCompilerWidgetGameDescription = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetGameDescription, _super);
    function WidgetCompilerWidgetGameDescription() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'game-description';
        return _this;
    }
    WidgetCompilerWidgetGameDescription.prototype.compile = function (context, _params) {
        if (_params === void 0) { _params = []; }
        return this.wrapComponent(widget_compiler_1.AppWidgetCompiler, function () {
            return {
                content: context['game'] && context['game'].description_compiled,
            };
        });
    };
    return WidgetCompilerWidgetGameDescription;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetGameDescription = WidgetCompilerWidgetGameDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUksb0JBQW9CLFFBQVE7QUFDaEMsSUFBSSx1Q0FBdUMsVUFBVSxRQUFRO0lBQ3pELFFBQVEsVUFBVSxxQ0FBcUM7SUFDdkQsU0FBUyxzQ0FBc0M7UUFDM0MsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sT0FBTztRQUNiLE9BQU87O0lBRVgsb0NBQW9DLFVBQVUsVUFBVSxVQUFVLFNBQVMsU0FBUztRQUNoRixJQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUsVUFBVTtRQUNwQyxPQUFPLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLFlBQVk7WUFDdkUsT0FBTztnQkFDSCxTQUFTLFFBQVEsV0FBVyxRQUFRLFFBQVE7Ozs7SUFJeEQsT0FBTztFQUNULFNBQVM7QUFDWCxRQUFRLHNDQUFzQztBQUM5QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgd2lkZ2V0XzEgPSByZXF1aXJlKFwiLi4vd2lkZ2V0XCIpO1xudmFyIHdpZGdldF9jb21waWxlcl8xID0gcmVxdWlyZShcIi4uL3dpZGdldC1jb21waWxlclwiKTtcbnZhciBXaWRnZXRDb21waWxlcldpZGdldEdhbWVEZXNjcmlwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lRGVzY3JpcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gJ2dhbWUtZGVzY3JpcHRpb24nO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZURlc2NyaXB0aW9uLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGNvbnRleHQsIF9wYXJhbXMpIHtcbiAgICAgICAgaWYgKF9wYXJhbXMgPT09IHZvaWQgMCkgeyBfcGFyYW1zID0gW107IH1cbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcENvbXBvbmVudCh3aWRnZXRfY29tcGlsZXJfMS5BcHBXaWRnZXRDb21waWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZXh0WydnYW1lJ10gJiYgY29udGV4dFsnZ2FtZSddLmRlc2NyaXB0aW9uX2NvbXBpbGVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lRGVzY3JpcHRpb247XG59KHdpZGdldF8xLldpZGdldENvbXBpbGVyV2lkZ2V0KSk7XG5leHBvcnRzLldpZGdldENvbXBpbGVyV2lkZ2V0R2FtZURlc2NyaXB0aW9uID0gV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lRGVzY3JpcHRpb247XG4iXX0=

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var media_bar_1 = __webpack_require__(82);
var WidgetCompilerWidgetGameMedia = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetGameMedia, _super);
    function WidgetCompilerWidgetGameMedia() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'game-media';
        return _this;
    }
    WidgetCompilerWidgetGameMedia.prototype.compile = function (context, _params) {
        if (_params === void 0) { _params = []; }
        return this.wrapComponent(media_bar_1.AppMediaBar, function () {
            return {
                mediaItems: (context['mediaItems'] || []).slice(0, 6),
            };
        });
    };
    return WidgetCompilerWidgetGameMedia;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetGameMedia = WidgetCompilerWidgetGameMedia;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUksY0FBYyxRQUFRO0FBQzFCLElBQUksaUNBQWlDLFVBQVUsUUFBUTtJQUNuRCxRQUFRLFVBQVUsK0JBQStCO0lBQ2pELFNBQVMsZ0NBQWdDO1FBQ3JDLElBQUksUUFBUSxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYztRQUNoRSxNQUFNLE9BQU87UUFDYixPQUFPOztJQUVYLDhCQUE4QixVQUFVLFVBQVUsVUFBVSxTQUFTLFNBQVM7UUFDMUUsSUFBSSxZQUFZLEtBQUssR0FBRyxFQUFFLFVBQVU7UUFDcEMsT0FBTyxLQUFLLGNBQWMsWUFBWSxhQUFhLFlBQVk7WUFDM0QsT0FBTztnQkFDSCxZQUFZLENBQUMsUUFBUSxpQkFBaUIsSUFBSSxNQUFNLEdBQUc7Ozs7SUFJL0QsT0FBTztFQUNULFNBQVM7QUFDWCxRQUFRLGdDQUFnQztBQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgd2lkZ2V0XzEgPSByZXF1aXJlKFwiLi4vd2lkZ2V0XCIpO1xudmFyIG1lZGlhX2Jhcl8xID0gcmVxdWlyZShcIi4uLy4uL21lZGlhLWJhci9tZWRpYS1iYXJcIik7XG52YXIgV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lTWVkaWEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZU1lZGlhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZU1lZGlhKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9ICdnYW1lLW1lZGlhJztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBXaWRnZXRDb21waWxlcldpZGdldEdhbWVNZWRpYS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChjb250ZXh0LCBfcGFyYW1zKSB7XG4gICAgICAgIGlmIChfcGFyYW1zID09PSB2b2lkIDApIHsgX3BhcmFtcyA9IFtdOyB9XG4gICAgICAgIHJldHVybiB0aGlzLndyYXBDb21wb25lbnQobWVkaWFfYmFyXzEuQXBwTWVkaWFCYXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVkaWFJdGVtczogKGNvbnRleHRbJ21lZGlhSXRlbXMnXSB8fCBbXSkuc2xpY2UoMCwgNiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXaWRnZXRDb21waWxlcldpZGdldEdhbWVNZWRpYTtcbn0od2lkZ2V0XzEuV2lkZ2V0Q29tcGlsZXJXaWRnZXQpKTtcbmV4cG9ydHMuV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lTWVkaWEgPSBXaWRnZXRDb21waWxlcldpZGdldEdhbWVNZWRpYTtcbiJdfQ==

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var widget_game_packages_1 = __webpack_require__(253);
var WidgetCompilerWidgetGamePackages = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetGamePackages, _super);
    function WidgetCompilerWidgetGamePackages() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'game-packages';
        return _this;
    }
    WidgetCompilerWidgetGamePackages.prototype.compile = function (context, _params) {
        if (_params === void 0) { _params = []; }
        return this.wrapComponent(widget_game_packages_1.AppWidgetCompilerWidgetGamePackages, function () {
            return {
                sellables: context['sellables'],
            };
        });
    };
    return WidgetCompilerWidgetGamePackages;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetGamePackages = WidgetCompilerWidgetGamePackages;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUkseUJBQXlCLFFBQVE7QUFDckMsSUFBSSxvQ0FBb0MsVUFBVSxRQUFRO0lBQ3RELFFBQVEsVUFBVSxrQ0FBa0M7SUFDcEQsU0FBUyxtQ0FBbUM7UUFDeEMsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sT0FBTztRQUNiLE9BQU87O0lBRVgsaUNBQWlDLFVBQVUsVUFBVSxVQUFVLFNBQVMsU0FBUztRQUM3RSxJQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUsVUFBVTtRQUNwQyxPQUFPLEtBQUssY0FBYyx1QkFBdUIscUNBQXFDLFlBQVk7WUFDOUYsT0FBTztnQkFDSCxXQUFXLFFBQVE7Ozs7SUFJL0IsT0FBTztFQUNULFNBQVM7QUFDWCxRQUFRLG1DQUFtQztBQUMzQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgd2lkZ2V0XzEgPSByZXF1aXJlKFwiLi4vd2lkZ2V0XCIpO1xudmFyIHdpZGdldF9nYW1lX3BhY2thZ2VzXzEgPSByZXF1aXJlKFwiLi93aWRnZXQtZ2FtZS1wYWNrYWdlc1wiKTtcbnZhciBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lUGFja2FnZXMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lUGFja2FnZXMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gJ2dhbWUtcGFja2FnZXMnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGNvbnRleHQsIF9wYXJhbXMpIHtcbiAgICAgICAgaWYgKF9wYXJhbXMgPT09IHZvaWQgMCkgeyBfcGFyYW1zID0gW107IH1cbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcENvbXBvbmVudCh3aWRnZXRfZ2FtZV9wYWNrYWdlc18xLkFwcFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlbGxhYmxlczogY29udGV4dFsnc2VsbGFibGVzJ10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcztcbn0od2lkZ2V0XzEuV2lkZ2V0Q29tcGlsZXJXaWRnZXQpKTtcbmV4cG9ydHMuV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lUGFja2FnZXMgPSBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcztcbiJdfQ==

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(275);
var environment_service_1 = __webpack_require__(48);
var AppWidgetCompilerWidgetGamePackages = (function (_super) {
    tslib_1.__extends(AppWidgetCompilerWidgetGamePackages, _super);
    function AppWidgetCompilerWidgetGamePackages() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.widgetHost = environment_service_1.Environment.widgetHost;
        return _this;
    }
    return AppWidgetCompilerWidgetGamePackages;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: Array, default: function () { return []; } })
], AppWidgetCompilerWidgetGamePackages.prototype, "sellables", void 0);
AppWidgetCompilerWidgetGamePackages = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'widget-compiler-widget-game-packages',
    })
], AppWidgetCompilerWidgetGamePackages);
exports.AppWidgetCompilerWidgetGamePackages = AppWidgetCompilerWidgetGamePackages;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSx3QkFBd0IsUUFBUTtBQUNwQyxJQUFJLHVDQUF1QyxVQUFVLFFBQVE7SUFDekQsUUFBUSxVQUFVLHFDQUFxQztJQUN2RCxTQUFTLHNDQUFzQztRQUMzQyxJQUFJLFFBQVEsV0FBVyxRQUFRLE9BQU8sTUFBTSxNQUFNLGNBQWM7UUFDaEUsTUFBTSxhQUFhLHNCQUFzQixZQUFZO1FBQ3JELE9BQU87O0lBRVgsT0FBTztFQUNUO0FBQ0YsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUssRUFBRSxNQUFNLE9BQU8sU0FBUyxZQUFZLEVBQUUsT0FBTztHQUM1RSxvQ0FBb0MsV0FBVyxhQUFhLEtBQUs7QUFDcEUsc0NBQXNDLFFBQVEsV0FBVztJQUNyRDtJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07O0dBRVg7QUFDSCxRQUFRLHNDQUFzQztBQUM5QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbnZhciB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiKTtcbnZhciBWaWV3ID0gcmVxdWlyZShcIiF2aWV3IS4vd2lkZ2V0LWdhbWUtcGFja2FnZXMuaHRtbD9zdHlsZT0uL3dpZGdldC1nYW1lLXBhY2thZ2VzLnN0eWxcIik7XG52YXIgZW52aXJvbm1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnNlcnZpY2VcIik7XG52YXIgQXBwV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lUGFja2FnZXMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud2lkZ2V0SG9zdCA9IGVudmlyb25tZW50X3NlcnZpY2VfMS5FbnZpcm9ubWVudC53aWRnZXRIb3N0O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBBcHBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcztcbn0oVnVlKSk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9IH0pXG5dLCBBcHBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcy5wcm90b3R5cGUsIFwic2VsbGFibGVzXCIsIHZvaWQgMCk7XG5BcHBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcyA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgVmlldyxcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ3dpZGdldC1jb21waWxlci13aWRnZXQtZ2FtZS1wYWNrYWdlcycsXG4gICAgfSlcbl0sIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0R2FtZVBhY2thZ2VzKTtcbmV4cG9ydHMuQXBwV2lkZ2V0Q29tcGlsZXJXaWRnZXRHYW1lUGFja2FnZXMgPSBBcHBXaWRnZXRDb21waWxlcldpZGdldEdhbWVQYWNrYWdlcztcbiJdfQ==

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var widget_soundcloud_1 = __webpack_require__(255);
var WidgetCompilerWidgetSoundcloud = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetSoundcloud, _super);
    function WidgetCompilerWidgetSoundcloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'soundcloud';
        return _this;
    }
    WidgetCompilerWidgetSoundcloud.prototype.compile = function (_context, params) {
        if (params === void 0) { params = []; }
        if (!params || !params.length) {
            throw new Error("Invalid params for widget.");
        }
        // Track ID is always first.
        var trackId = params[0];
        // Then an optional color.
        var color = '';
        if (params[1]) {
            color = params[1].replace(/[^0-9A-Za-z]/g, '');
        }
        return this.wrapComponent(widget_soundcloud_1.AppWidgetCompilerWidgetSoundcloud, function () {
            return {
                trackId: trackId,
                color: color,
            };
        });
    };
    return WidgetCompilerWidgetSoundcloud;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetSoundcloud = WidgetCompilerWidgetSoundcloud;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUksc0JBQXNCLFFBQVE7QUFDbEMsSUFBSSxrQ0FBa0MsVUFBVSxRQUFRO0lBQ3BELFFBQVEsVUFBVSxnQ0FBZ0M7SUFDbEQsU0FBUyxpQ0FBaUM7UUFDdEMsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sT0FBTztRQUNiLE9BQU87O0lBRVgsK0JBQStCLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUTtRQUMzRSxJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUUsU0FBUztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sUUFBUTtZQUMzQixNQUFNLElBQUksTUFBTTs7O1FBR3BCLElBQUksVUFBVSxPQUFPOztRQUVyQixJQUFJLFFBQVE7UUFDWixJQUFJLE9BQU8sSUFBSTtZQUNYLFFBQVEsT0FBTyxHQUFHLFFBQVEsaUJBQWlCOztRQUUvQyxPQUFPLEtBQUssY0FBYyxvQkFBb0IsbUNBQW1DLFlBQVk7WUFDekYsT0FBTztnQkFDSCxTQUFTO2dCQUNULE9BQU87Ozs7SUFJbkIsT0FBTztFQUNULFNBQVM7QUFDWCxRQUFRLGlDQUFpQztBQUN6QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgd2lkZ2V0XzEgPSByZXF1aXJlKFwiLi4vd2lkZ2V0XCIpO1xudmFyIHdpZGdldF9zb3VuZGNsb3VkXzEgPSByZXF1aXJlKFwiLi93aWRnZXQtc291bmRjbG91ZFwiKTtcbnZhciBXaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBXaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gJ3NvdW5kY2xvdWQnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZC5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChfY29udGV4dCwgcGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSBbXTsgfVxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbXMgZm9yIHdpZGdldC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhY2sgSUQgaXMgYWx3YXlzIGZpcnN0LlxuICAgICAgICB2YXIgdHJhY2tJZCA9IHBhcmFtc1swXTtcbiAgICAgICAgLy8gVGhlbiBhbiBvcHRpb25hbCBjb2xvci5cbiAgICAgICAgdmFyIGNvbG9yID0gJyc7XG4gICAgICAgIGlmIChwYXJhbXNbMV0pIHtcbiAgICAgICAgICAgIGNvbG9yID0gcGFyYW1zWzFdLnJlcGxhY2UoL1teMC05QS1aYS16XS9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcENvbXBvbmVudCh3aWRnZXRfc291bmRjbG91ZF8xLkFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0cmFja0lkOiB0cmFja0lkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZDtcbn0od2lkZ2V0XzEuV2lkZ2V0Q29tcGlsZXJXaWRnZXQpKTtcbmV4cG9ydHMuV2lkZ2V0Q29tcGlsZXJXaWRnZXRTb3VuZGNsb3VkID0gV2lkZ2V0Q29tcGlsZXJXaWRnZXRTb3VuZGNsb3VkO1xuIl19

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(276);
var AppWidgetCompilerWidgetSoundcloud = (function (_super) {
    tslib_1.__extends(AppWidgetCompilerWidgetSoundcloud, _super);
    function AppWidgetCompilerWidgetSoundcloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.embedSrc = '';
        return _this;
    }
    AppWidgetCompilerWidgetSoundcloud.prototype.created = function () {
        this.embedSrc = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + this.trackId;
        if (this.color) {
            this.embedSrc += '&amp;color=' + this.color;
        }
    };
    return AppWidgetCompilerWidgetSoundcloud;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: String, default: '' })
], AppWidgetCompilerWidgetSoundcloud.prototype, "trackId", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: String, default: '' })
], AppWidgetCompilerWidgetSoundcloud.prototype, "color", void 0);
AppWidgetCompilerWidgetSoundcloud = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'widget-compiler-widget-soundcloud',
    })
], AppWidgetCompilerWidgetSoundcloud);
exports.AppWidgetCompilerWidgetSoundcloud = AppWidgetCompilerWidgetSoundcloud;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxxQ0FBcUMsVUFBVSxRQUFRO0lBQ3ZELFFBQVEsVUFBVSxtQ0FBbUM7SUFDckQsU0FBUyxvQ0FBb0M7UUFDekMsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sV0FBVztRQUNqQixPQUFPOztJQUVYLGtDQUFrQyxVQUFVLFVBQVUsWUFBWTtRQUM5RCxLQUFLLFdBQVcsOEVBQThFLEtBQUs7UUFDbkcsSUFBSSxLQUFLLE9BQU87WUFDWixLQUFLLFlBQVksZ0JBQWdCLEtBQUs7OztJQUc5QyxPQUFPO0VBQ1Q7QUFDRixRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSyxFQUFFLE1BQU0sUUFBUSxTQUFTO0dBQ3hELGtDQUFrQyxXQUFXLFdBQVcsS0FBSztBQUNoRSxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSyxFQUFFLE1BQU0sUUFBUSxTQUFTO0dBQ3hELGtDQUFrQyxXQUFXLFNBQVMsS0FBSztBQUM5RCxvQ0FBb0MsUUFBUSxXQUFXO0lBQ25EO0lBQ0EseUJBQXlCLFVBQVU7UUFDL0IsTUFBTTs7R0FFWDtBQUNILFFBQVEsb0NBQW9DO0FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xudmFyIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSA9IHJlcXVpcmUoXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCIpO1xudmFyIFZpZXcgPSByZXF1aXJlKFwiIXZpZXchLi93aWRnZXQtc291bmRjbG91ZC5odG1sP3N0eWxlPS4vd2lkZ2V0LXNvdW5kY2xvdWQuc3R5bFwiKTtcbnZhciBBcHBXaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBXaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbWJlZFNyYyA9ICcnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZC5wcm90b3R5cGUuY3JlYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWJlZFNyYyA9ICdodHRwczovL3cuc291bmRjbG91ZC5jb20vcGxheWVyLz91cmw9aHR0cHMlM0EvL2FwaS5zb3VuZGNsb3VkLmNvbS90cmFja3MvJyArIHRoaXMudHJhY2tJZDtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1iZWRTcmMgKz0gJyZhbXA7Y29sb3I9JyArIHRoaXMuY29sb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBcHBXaWRnZXRDb21waWxlcldpZGdldFNvdW5kY2xvdWQ7XG59KFZ1ZSkpO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcCh7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSlcbl0sIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZC5wcm90b3R5cGUsIFwidHJhY2tJZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcCh7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSlcbl0sIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZC5wcm90b3R5cGUsIFwiY29sb3JcIiwgdm9pZCAwKTtcbkFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgVmlldyxcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogJ3dpZGdldC1jb21waWxlci13aWRnZXQtc291bmRjbG91ZCcsXG4gICAgfSlcbl0sIEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCk7XG5leHBvcnRzLkFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZCA9IEFwcFdpZGdldENvbXBpbGVyV2lkZ2V0U291bmRjbG91ZDtcbiJdfQ==

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var embed_1 = __webpack_require__(77);
var WidgetCompilerWidgetVimeo = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetVimeo, _super);
    function WidgetCompilerWidgetVimeo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'vimeo';
        return _this;
    }
    WidgetCompilerWidgetVimeo.prototype.compile = function (_context, params) {
        if (params === void 0) { params = []; }
        if (!params || !params.length) {
            throw new Error("Invalid params for widget.");
        }
        var videoId = params[0];
        return this.wrapComponent(embed_1.AppVideoEmbed, function () {
            return {
                videoProvider: 'vimeo',
                videoId: videoId,
            };
        });
    };
    return WidgetCompilerWidgetVimeo;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetVimeo = WidgetCompilerWidgetVimeo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksNkJBQTZCLFVBQVUsUUFBUTtJQUMvQyxRQUFRLFVBQVUsMkJBQTJCO0lBQzdDLFNBQVMsNEJBQTRCO1FBQ2pDLElBQUksUUFBUSxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYztRQUNoRSxNQUFNLE9BQU87UUFDYixPQUFPOztJQUVYLDBCQUEwQixVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVE7UUFDdEUsSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFLFNBQVM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLFFBQVE7WUFDM0IsTUFBTSxJQUFJLE1BQU07O1FBRXBCLElBQUksVUFBVSxPQUFPO1FBQ3JCLE9BQU8sS0FBSyxjQUFjLFFBQVEsZUFBZSxZQUFZO1lBQ3pELE9BQU87Z0JBQ0gsZUFBZTtnQkFDZixTQUFTOzs7O0lBSXJCLE9BQU87RUFDVCxTQUFTO0FBQ1gsUUFBUSw0QkFBNEI7QUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL3dpZGdldFwiKTtcbnZhciBlbWJlZF8xID0gcmVxdWlyZShcIi4uLy4uL3ZpZGVvL2VtYmVkL2VtYmVkXCIpO1xudmFyIFdpZGdldENvbXBpbGVyV2lkZ2V0VmltZW8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFdpZGdldENvbXBpbGVyV2lkZ2V0VmltZW8sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV2lkZ2V0Q29tcGlsZXJXaWRnZXRWaW1lbygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSAndmltZW8nO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFdpZGdldENvbXBpbGVyV2lkZ2V0VmltZW8ucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoX2NvbnRleHQsIHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHsgcGFyYW1zID0gW107IH1cbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1zIGZvciB3aWRnZXQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2aWRlb0lkID0gcGFyYW1zWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwQ29tcG9uZW50KGVtYmVkXzEuQXBwVmlkZW9FbWJlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2aWRlb1Byb3ZpZGVyOiAndmltZW8nLFxuICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXaWRnZXRDb21waWxlcldpZGdldFZpbWVvO1xufSh3aWRnZXRfMS5XaWRnZXRDb21waWxlcldpZGdldCkpO1xuZXhwb3J0cy5XaWRnZXRDb21waWxlcldpZGdldFZpbWVvID0gV2lkZ2V0Q29tcGlsZXJXaWRnZXRWaW1lbztcbiJdfQ==

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var widget_1 = __webpack_require__(30);
var embed_1 = __webpack_require__(77);
var WidgetCompilerWidgetYoutube = (function (_super) {
    tslib_1.__extends(WidgetCompilerWidgetYoutube, _super);
    function WidgetCompilerWidgetYoutube() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'youtube';
        return _this;
    }
    WidgetCompilerWidgetYoutube.prototype.compile = function (_context, params) {
        if (params === void 0) { params = []; }
        if (!params || !params.length) {
            throw new Error("Invalid params for widget.");
        }
        var videoId = params[0];
        return this.wrapComponent(embed_1.AppVideoEmbed, function () {
            return {
                videoProvider: 'youtube',
                videoId: videoId,
            };
        });
    };
    return WidgetCompilerWidgetYoutube;
}(widget_1.WidgetCompilerWidget));
exports.WidgetCompilerWidgetYoutube = WidgetCompilerWidgetYoutube;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksV0FBVyxRQUFRO0FBQ3ZCLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksK0JBQStCLFVBQVUsUUFBUTtJQUNqRCxRQUFRLFVBQVUsNkJBQTZCO0lBQy9DLFNBQVMsOEJBQThCO1FBQ25DLElBQUksUUFBUSxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sY0FBYztRQUNoRSxNQUFNLE9BQU87UUFDYixPQUFPOztJQUVYLDRCQUE0QixVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVE7UUFDeEUsSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFLFNBQVM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLFFBQVE7WUFDM0IsTUFBTSxJQUFJLE1BQU07O1FBRXBCLElBQUksVUFBVSxPQUFPO1FBQ3JCLE9BQU8sS0FBSyxjQUFjLFFBQVEsZUFBZSxZQUFZO1lBQ3pELE9BQU87Z0JBQ0gsZUFBZTtnQkFDZixTQUFTOzs7O0lBSXJCLE9BQU87RUFDVCxTQUFTO0FBQ1gsUUFBUSw4QkFBOEI7QUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL3dpZGdldFwiKTtcbnZhciBlbWJlZF8xID0gcmVxdWlyZShcIi4uLy4uL3ZpZGVvL2VtYmVkL2VtYmVkXCIpO1xudmFyIFdpZGdldENvbXBpbGVyV2lkZ2V0WW91dHViZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoV2lkZ2V0Q29tcGlsZXJXaWRnZXRZb3V0dWJlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFdpZGdldENvbXBpbGVyV2lkZ2V0WW91dHViZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSAneW91dHViZSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgV2lkZ2V0Q29tcGlsZXJXaWRnZXRZb3V0dWJlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKF9jb250ZXh0LCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IFtdOyB9XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtcyBmb3Igd2lkZ2V0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmlkZW9JZCA9IHBhcmFtc1swXTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcENvbXBvbmVudChlbWJlZF8xLkFwcFZpZGVvRW1iZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlkZW9Qcm92aWRlcjogJ3lvdXR1YmUnLFxuICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXaWRnZXRDb21waWxlcldpZGdldFlvdXR1YmU7XG59KHdpZGdldF8xLldpZGdldENvbXBpbGVyV2lkZ2V0KSk7XG5leHBvcnRzLldpZGdldENvbXBpbGVyV2lkZ2V0WW91dHViZSA9IFdpZGdldENvbXBpbGVyV2lkZ2V0WW91dHViZTtcbiJdfQ==

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(129);
__webpack_require__(124);
__webpack_require__(123);
__webpack_require__(126);
__webpack_require__(125);
__webpack_require__(122);
__webpack_require__(83);
__webpack_require__(128);
__webpack_require__(127);
__webpack_require__(192);
__webpack_require__(105);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7QUFDUixRQUFRO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5yZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xucmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xucmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5yZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xucmVxdWlyZShcImNvcmUtanMvZXM2L3Byb21pc2VcIik7XG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG4iXX0=

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var Vue = __webpack_require__(2);
var vue_property_decorator_1 = __webpack_require__(7);
var View = __webpack_require__(278);
var utils_1 = __webpack_require__(25);
var AppLoading = (function (_super) {
    tslib_1.__extends(AppLoading, _super);
    function AppLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = utils_1.importContext(__webpack_require__(279));
        return _this;
    }
    Object.defineProperty(AppLoading.prototype, "img", {
        get: function () {
            var img = 'loading'
                + (this.stationary ? '-stationary' : '')
                + (this.noColor ? '-bw' : '')
                + (this.big ? '-2x' : '');
            return this.images["./" + img + ".gif"];
        },
        enumerable: true,
        configurable: true
    });
    return AppLoading;
}(Vue));
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ type: String, default: 'Loading...' })
], AppLoading.prototype, "label", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Boolean)
], AppLoading.prototype, "hideLabel", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Boolean)
], AppLoading.prototype, "big", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Boolean)
], AppLoading.prototype, "noColor", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Boolean)
], AppLoading.prototype, "stationary", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Prop(Boolean)
], AppLoading.prototype, "centered", void 0);
AppLoading = tslib_1.__decorate([
    View,
    vue_property_decorator_1.Component({
        name: 'loading',
    })
], AppLoading);
exports.AppLoading = AppLoading;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksVUFBVSxRQUFRO0FBQ3RCLElBQUksTUFBTSxRQUFRO0FBQ2xCLElBQUksMkJBQTJCLFFBQVE7QUFDdkMsSUFBSSxPQUFPLFFBQVE7QUFDbkIsSUFBSSxVQUFVLFFBQVE7QUFDdEIsSUFBSSxjQUFjLFVBQVUsUUFBUTtJQUNoQyxRQUFRLFVBQVUsWUFBWTtJQUM5QixTQUFTLGFBQWE7UUFDbEIsSUFBSSxRQUFRLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxjQUFjO1FBQ2hFLE1BQU0sU0FBUyxRQUFRLGNBQWMsUUFBUSxRQUFRLGdDQUFnQyxPQUFPO1FBQzVGLE9BQU87O0lBRVgsT0FBTyxlQUFlLFdBQVcsV0FBVyxPQUFPO1FBQy9DLEtBQUssWUFBWTtZQUNiLElBQUksTUFBTTttQkFDSCxLQUFLLGFBQWEsZ0JBQWdCO21CQUNsQyxLQUFLLFVBQVUsUUFBUTttQkFDdkIsS0FBSyxNQUFNLFFBQVE7WUFDMUIsT0FBTyxLQUFLLE9BQU8sT0FBTyxNQUFNOztRQUVwQyxZQUFZO1FBQ1osY0FBYzs7SUFFbEIsT0FBTztFQUNUO0FBQ0YsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUssRUFBRSxNQUFNLFFBQVEsU0FBUztHQUN4RCxXQUFXLFdBQVcsU0FBUyxLQUFLO0FBQ3ZDLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLFdBQVcsV0FBVyxhQUFhLEtBQUs7QUFDM0MsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUs7R0FDL0IsV0FBVyxXQUFXLE9BQU8sS0FBSztBQUNyQyxRQUFRLFdBQVc7SUFDZix5QkFBeUIsS0FBSztHQUMvQixXQUFXLFdBQVcsV0FBVyxLQUFLO0FBQ3pDLFFBQVEsV0FBVztJQUNmLHlCQUF5QixLQUFLO0dBQy9CLFdBQVcsV0FBVyxjQUFjLEtBQUs7QUFDNUMsUUFBUSxXQUFXO0lBQ2YseUJBQXlCLEtBQUs7R0FDL0IsV0FBVyxXQUFXLFlBQVksS0FBSztBQUMxQyxhQUFhLFFBQVEsV0FBVztJQUM1QjtJQUNBLHlCQUF5QixVQUFVO1FBQy9CLE1BQU07O0dBRVg7QUFDSCxRQUFRLGFBQWE7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG52YXIgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xID0gcmVxdWlyZShcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIik7XG52YXIgVmlldyA9IHJlcXVpcmUoXCIhdmlldyEuL2xvYWRpbmcuaHRtbD9zdHlsZT0uL2xvYWRpbmcuc3R5bFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xudmFyIEFwcExvYWRpbmcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFwcExvYWRpbmcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwTG9hZGluZygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmltYWdlcyA9IHV0aWxzXzEuaW1wb3J0Q29udGV4dChyZXF1aXJlLmNvbnRleHQoJy4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZy8nLCBmYWxzZSwgL1xcLmdpZiQvKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcExvYWRpbmcucHJvdG90eXBlLCBcImltZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGltZyA9ICdsb2FkaW5nJ1xuICAgICAgICAgICAgICAgICsgKHRoaXMuc3RhdGlvbmFyeSA/ICctc3RhdGlvbmFyeScgOiAnJylcbiAgICAgICAgICAgICAgICArICh0aGlzLm5vQ29sb3IgPyAnLWJ3JyA6ICcnKVxuICAgICAgICAgICAgICAgICsgKHRoaXMuYmlnID8gJy0yeCcgOiAnJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNbXCIuL1wiICsgaW1nICsgXCIuZ2lmXCJdO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXBwTG9hZGluZztcbn0oVnVlKSk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnTG9hZGluZy4uLicgfSlcbl0sIEFwcExvYWRpbmcucHJvdG90eXBlLCBcImxhYmVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMS5Qcm9wKEJvb2xlYW4pXG5dLCBBcHBMb2FkaW5nLnByb3RvdHlwZSwgXCJoaWRlTGFiZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLlByb3AoQm9vbGVhbilcbl0sIEFwcExvYWRpbmcucHJvdG90eXBlLCBcImJpZ1wiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChCb29sZWFuKVxuXSwgQXBwTG9hZGluZy5wcm90b3R5cGUsIFwibm9Db2xvclwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChCb29sZWFuKVxuXSwgQXBwTG9hZGluZy5wcm90b3R5cGUsIFwic3RhdGlvbmFyeVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEuUHJvcChCb29sZWFuKVxuXSwgQXBwTG9hZGluZy5wcm90b3R5cGUsIFwiY2VudGVyZWRcIiwgdm9pZCAwKTtcbkFwcExvYWRpbmcgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIFZpZXcsXG4gICAgdnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xLkNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6ICdsb2FkaW5nJyxcbiAgICB9KVxuXSwgQXBwTG9hZGluZyk7XG5leHBvcnRzLkFwcExvYWRpbmcgPSBBcHBMb2FkaW5nO1xuIl19

/***/ }),
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */
/***/ (function(module, exports, __webpack_require__) {


var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.isLoading)?_c('div',[_c('app-theme-injector',{attrs:{"definition":_vm.site.theme.template.data,"theme":_vm.site.theme.data}}),_vm._v(" "),_c(_vm.theme,{tag:"component"})],1):_vm._e()])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options


  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-1", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-1", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(199)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media-bar-item"},[_c('a',{staticClass:"media-bar-item-wrapper",on:{"click":_vm.onClick}},[(_vm.item.media_type !== 'sketchfab')?_c('img',{directives:[{name:"app-img-responsive",rawName:"v-app-img-responsive",value:(_vm.item.img_thumbnail),expression:"item.img_thumbnail"}],attrs:{"title":_vm.item.media_type == 'image' ? _vm.item.caption : _vm.item.title,"alt":_vm.item.media_type == 'image' ? _vm.item.caption : _vm.item.title}}):_c('img',{staticClass:"img-responsive",attrs:{"src":_vm.item.img_thumbnail,"alt":""}}),_vm._v(" "),(_vm.item.media_type === 'video')?_c('span',{staticClass:"media-bar-item-play"},[_c('app-jolticon',{attrs:{"icon":"play"}})],1):_vm._e(),_vm._v(" "),(_vm.item.media_type === 'sketchfab')?_c('span',{staticClass:"media-bar-item-play"},[_c('app-jolticon',{attrs:{"icon":"sketchfab"}})],1):_vm._e()])])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-8'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-8", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-8", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(195)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media-bar-lightbox-item"},[(_vm.isActive || _vm.isNext || _vm.isPrev)?_c('div',{staticClass:"media-bar-lightbox-item-inner"},[(_vm.item.media_type === 'image')?_c('div',[(_vm.maxWidth && _vm.maxHeight)?_c('div',{staticClass:"media-bar-lightbox-item-embed"},[_c('img',{directives:[{name:"app-img-responsive",rawName:"v-app-img-responsive",value:(_vm.item.img_thumbnail),expression:"item.img_thumbnail"}],style:({ width: _vm.maxWidth + 'px', height: _vm.maxHeight + 'px' }),attrs:{"alt":_vm.item.caption}})]):_vm._e(),_vm._v(" "),(_vm.item.caption)?_c('div',{staticClass:"media-bar-lightbox-item-caption"},[_c('h4',[_vm._v(_vm._s(_vm.item.caption))])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.item.media_type === 'video')?_c('div',[(_vm.isActive && _vm.maxWidth && _vm.maxHeight)?_c('div',{staticClass:"media-bar-lightbox-item-embed"},[_c('app-video-embed',{staticClass:"media-bar-lightbox-item-embed",attrs:{"video-provider":_vm.item.type,"video-id":_vm.item.url,"max-video-width":_vm.maxWidth,"max-video-height":_vm.maxHeight,"autoplay":true}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"media-bar-lightbox-item-caption"},[_c('h4',[_vm._v(_vm._s(_vm.item.title))]),_vm._v(" "),(_vm.item.description)?_c('p',{domProps:{"textContent":_vm._s(_vm.item.description)}}):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.item.media_type === 'sketchfab')?_c('div',[(_vm.isActive && _vm.maxWidth && _vm.maxHeight)?_c('div',{staticClass:"game-media-bar-lightbox-item-embed"},[_c('app-sketchfab-embed',{staticClass:"game-media-bar-lightbox-item-embed",attrs:{"sketchfab-id":_vm.item.sketchfab_id,"max-width":_vm.maxWidth,"max-height":_vm.maxHeight,"autoplay":true}})],1):_vm._e()]):_vm._e()]):_vm._e()])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-14'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-14", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-14", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(200)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loaded)?_c('div',[_c('v-touch',{staticClass:"media-bar-lightbox",on:{"panstart":_vm.panStart,"pan":_vm.pan,"panend":_vm.panEnd}},[_c('span',{directives:[{name:"shortkey",rawName:"v-shortkey",value:([ 'arrowleft' ]),expression:"[ 'arrowleft' ]"}],on:{"shortkey":_vm.goPrev}}),_vm._v(" "),_c('span',{directives:[{name:"shortkey",rawName:"v-shortkey",value:([ 'arrowright' ]),expression:"[ 'arrowright' ]"}],on:{"shortkey":_vm.goNext}}),_vm._v(" "),_c('div',{staticClass:"media-bar-lightbox-inner"},[(_vm.mediaBar.activeIndex > 0)?_c('a',{staticClass:"media-bar-lightbox-prev",on:{"click":_vm.goPrev}},[_c('app-jolticon',{attrs:{"icon":"chevron-left"}})],1):_vm._e(),_vm._v(" "),(_vm.mediaBar.activeIndex < _vm.mediaBar.mediaItems.length - 1)?_c('a',{staticClass:"media-bar-lightbox-next",on:{"click":_vm.goNext}},[_c('app-jolticon',{attrs:{"icon":"chevron-right"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"media-bar-lightbox-controls"},[(_vm.mediaBar.activeItem.media_type === 'image')?_c('a',{staticClass:"btn btn-outline btn-overlay-variant",attrs:{"href":_vm.mediaBar.activeItem.media_item.img_url,"target":"_blank"}},[_c('app-jolticon',{attrs:{"icon":"download"}}),_vm._v(" "),_c('span',[_vm._v("Download")])],1):_vm._e(),_vm._v(" "),_c('a',{directives:[{name:"shortkey",rawName:"v-shortkey",value:([ 'esc' ]),expression:"[ 'esc' ]"}],staticClass:"btn btn-danger-outline btn-overlay-variant",on:{"click":_vm.close,"shortkey":_vm.close}},[_c('app-jolticon',{attrs:{"icon":"remove"}}),_vm._v(" "),_c('span',[_vm._v("Close")])],1)]),_vm._v(" "),_c('app-media-bar-lightbox-slider',_vm._l((_vm.mediaBar.mediaItems),function(item,index){return _c('app-media-bar-lightbox-item',{key:item.id,attrs:{"item":item,"item-index":index,"active-index":_vm.mediaBar.activeIndex}})}))],1)])],1):_vm._e()}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-9'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-9", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-9", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {


var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media-bar-lightbox-slider"},[_vm._t("default")],2)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options


  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-12", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-12", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(197)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section fill-darker media-bar scrollable scrollable-x overlay-scrollbar",class:{ 'is-loading': !_vm.mediaItems },attrs:{"section":""}},[_c('div',{staticClass:"media-bar-items"},[(!_vm.mediaItems)?_c('div',{staticClass:"loading-container"},[_c('app-loading',{attrs:{"centered":true,"no-color":true,"stationary":true,"hide-label":true}})],1):_vm._e(),_vm._v(" "),(_vm.mediaItems)?_c('div',_vm._l((_vm.mediaItems),function(item){return _c('app-media-bar-item',{key:item.id,attrs:{"item":item}})})):_vm._e()])])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-6'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-6", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-6", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {


var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sketchfab-embed"},[_c('div',{staticClass:"sketchfab-embed-inner"},[_c('iframe',{attrs:{"nwdisable":"","nwfaketop":"","frameborder":"0","allowvr":"","allowfullscreen":"","mozallowfullscreen":"","webkitallowfullscreen":"","width":_vm.width,"height":_vm.height,"src":_vm.embedUrl}})],1)])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options


  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-15", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-15", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(193)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video-embed"},[_c('div',{staticClass:"video-embed-inner"},[(_vm.videoProvider === 'youtube' && _vm.embedUrl)?_c('iframe',{attrs:{"nwdisable":"","nwfaketop":"","type":"text/html","frameborder":"0","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":"","width":_vm.width,"height":_vm.height,"src":_vm.embedUrl}}):_vm._e(),_vm._v(" "),(_vm.videoProvider === 'vimeo' && _vm.embedUrl)?_c('iframe',{attrs:{"nwdisable":"","nwfaketop":"","frameborder":"0","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":"","width":_vm.width,"height":_vm.height,"src":_vm.embedUrl}}):_vm._e()],1)])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-10'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-10", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-10", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(196)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget-compiler-widget-game-packages"},_vm._l((_vm.sellables),function(sellable){return _c('div',{key:sellable.id},[_c('iframe',{attrs:{"nwdisable":"","nwfaketop":"","src":(_vm.widgetHost + "/sale/v1?key=" + (sellable.key)),"frameborder":"0","width":"100%","height":"245"}})],1)}))}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-5'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-5", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-5", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(198)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('iframe',{staticClass:"widget-compiler-widget-soundcloud",attrs:{"nwdisable":"","nwfaketop":"","width":"100%","height":"166","scrolling":"no","frameborder":"no","src":_vm.embedSrc}})}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-7'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-7", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-7", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {


var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"jolticon",class:'jolticon-' + _vm.icon})}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options


  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-13", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-13", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var styles = __webpack_require__(194)
var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading",class:{
		'loading-big': _vm.big,
		'loading-stationary': _vm.stationary,
		'loading-bw': _vm.noColor,
		'loading-centered': _vm.centered,
	}},[_c('img',{attrs:{"src":_vm.img,"alt":"Loading","title":"Loading..."}}),_vm._v(" "),_c('span',{staticClass:"loading-label",class:{ 'sr-only': _vm.hideLabel }},[_vm._v("\n\t\t"+_vm._s(_vm.label)+"\n\t")])])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = _exports
  if (typeof _exports === "function") options = _exports.options
  options._scopeId = 'data-v-11'
  if (Object.keys(styles).length > 0) {
    if (!options.computed) options.computed = {}
    options.computed.$style = function () { return styles }
  }
  options.render = render
  options.staticRenderFns = staticRenderFns
  if (false) {
    api.createRecord("data-v-11", options)
  }
  return _exports
}
var api = null
if (false) {(function () {
  api = require("vue-hot-reload-api")
  api.install(require("vue"))
  if (!api.compatible) return
  module.hot.accept()
  if (module.hot.data) {
    api.rerender("data-v-11", { render: render, staticRenderFns: staticRenderFns })
  }
})()}


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./loading-2x.gif": 201,
	"./loading-bw-2x.gif": 202,
	"./loading-bw.gif": 203,
	"./loading-stationary-2x.gif": 204,
	"./loading-stationary-bw-2x.gif": 205,
	"./loading-stationary-bw.gif": 206,
	"./loading-stationary.gif": 207,
	"./loading.gif": 208
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 279;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
module.exports = __webpack_require__(118);


/***/ })
],[280]);