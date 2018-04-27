webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash_component__ = __webpack_require__("./src/app/pages/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_player_player_component__ = __webpack_require__("./src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin_component__ = __webpack_require__("./src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_video_add_video_component__ = __webpack_require__("./src/app/components/add-video/add-video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash_component__["a" /* SplashComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'search/:critera', component: __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash_component__["a" /* SplashComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase.config);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash_component__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_add_video_add_video_component__["a" /* AddVideoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-video/add-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-video-panel\">\n  <h1>Dashboard</h1>\n\n  <span class=\"error\" *ngIf=\"error\">{{error}}</span>\n  <span class=\"success\" *ngIf=\"success\">{{success}}</span>\n\n  <!-- section selector -->\n  <select [(ngModel)]=\"type\" (change)=\"resetValues()\">\n    <option value=\"\" selected disabled hidden>Choose Type</option>\n    <option value=\"lecture\">Lecture</option>\n    <option value=\"music\">Music</option>\n    <option value=\"speaker\">Speaker</option>\n  </select>\n\n  <!-- add new music -->\n  <div *ngIf=\"type === 'music'\">\n    <select [(ngModel)]=\"genre\">\n      <option value=\"\" selected disabled hidden>Choose Genre</option>\n      <option *ngFor=\"let genre of genres\" value=\"{{ genre.slug }}\">{{ genre.type }}</option>\n    </select>\n    <input [(ngModel)]=\"video\" type=\"text\" placeholder=\"Video URL\" />\n    <button (click)=\"addMusic()\">Add Music</button>\n  </div>\n\n  <!-- add new lecture -->\n  <div *ngIf=\"type === 'lecture'\">\n    <select [(ngModel)]=\"speaker\">\n      <option value=\"\" selected disabled hidden>Choose Speaker</option>\n      <option *ngFor=\"let speaker of speakers\" value=\"{{ speaker.slug }}\">{{ speaker.name }}</option>\n    </select>\n    <input [(ngModel)]=\"title\" type=\"text\" placeholder=\"Title\" />\n    <input [(ngModel)]=\"video\" type=\"text\" placeholder=\"Video URL\" />\n    <input [(ngModel)]=\"keywords\" type=\"text\" placeholder=\"Keywords\" />\n    <button (click)=\"addLecture()\">Add Lecture</button>\n  </div>\n\n  <!-- update speaker -->\n  <div *ngIf=\"type === 'speaker'\">\n    <select [(ngModel)]=\"speaker\" (change)=\"getSpeakerImage()\">\n        <option value=\"\" selected disabled hidden>Choose Speaker</option>\n        <option *ngFor=\"let speaker of speakers\" value=\"{{ speaker.slug }}\">{{ speaker.name }}</option>\n    </select>\n    <div *ngIf=\"speaker\">\n      <div *ngIf=\"image\" class=\"speaker-image\">\n        <img src=\"{{image}}\" alt=\"speaker image\">\n      </div>\n      <input [(ngModel)]=\"image\" type=\"text\" placeholder=\"Image URL\" />\n      <button (click)=\"updateSpeaker()\">Update</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-video/add-video.component.scss":
/***/ (function(module, exports) {

module.exports = "div.add-video-panel {\n  text-align: center; }\n  div.add-video-panel span {\n    margin: 5px auto;\n    display: block;\n    text-align: center; }\n  div.add-video-panel span.error {\n    color: red; }\n  div.add-video-panel span.success {\n    color: #07cc00; }\n  div.add-video-panel select,\n  div.add-video-panel input,\n  div.add-video-panel button {\n    width: 250px;\n    display: block;\n    margin: 15px auto;\n    padding: 5px 15px; }\n  div.add-video-panel image {\n    width: 250px;\n    height: 250px; }\n  div.add-video-panel select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0px;\n    cursor: pointer; }\n  div.add-video-panel input {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  div.add-video-panel button {\n    border-radius: 0px;\n    border: none; }\n  div.add-video-panel div div.speaker-image {\n    overflow: hidden;\n    width: 200px;\n    height: 200px;\n    border-radius: 100px;\n    border: solid thick #fff;\n    margin: 25px auto;\n    text-align: center; }\n  div.add-video-panel div div.speaker-image img {\n      max-width: 100%;\n      min-height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/add-video/add-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddVideoComponent = /** @class */ (function () {
    function AddVideoComponent() {
        this.genre = '';
        this.speaker = '';
        this.image = '';
        this.title = '';
        this.video = '';
        this.keywords = '';
        this.error = '';
        this.success = '';
        this.type = '';
        this.speakers = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].speakers;
        this.genres = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].genres;
    }
    AddVideoComponent.prototype.resetValues = function () {
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key !== 'type' && key !== 'speakers' && key !== 'genres')
                this[key] = '';
        }
    };
    AddVideoComponent.prototype.successMessage = function (message) {
        var _this = this;
        this.success = message;
        var alert = setTimeout(function () {
            _this.success = '';
            clearTimeout(alert);
        }, 3000);
    };
    AddVideoComponent.prototype.errorMessage = function (message) {
        var _this = this;
        this.error = message;
        var alert = setTimeout(function () {
            _this.error = '';
            clearTimeout(alert);
        }, 3000);
    };
    AddVideoComponent.prototype.addMusic = function () {
        var _this = this;
        if (!this.genre) {
            this.errorMessage('No genre was selected...');
        }
        else if (!this.video) {
            this.errorMessage('You forgot the video link...');
        }
        else {
            var ref_1 = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/music/' + this.genre);
            var videoExists_1 = false;
            ref_1.once('value').then(function (snapshot) {
                if (snapshot.val()) {
                    for (var _i = 0, _a = Object.keys(snapshot.val()); _i < _a.length; _i++) {
                        var music = _a[_i];
                        if (snapshot.val()[music].video === _this.video)
                            videoExists_1 = true;
                    }
                }
                if (videoExists_1) {
                    _this.errorMessage('Music has already been added...');
                }
                else {
                    ref_1.push({
                        video: _this.video
                    }).then(function () {
                        _this.resetValues();
                        _this.successMessage('Music successfully added!');
                    });
                }
            });
        }
    };
    AddVideoComponent.prototype.addLecture = function () {
        var _this = this;
        var keywords = this.keywords.split(', ');
        if (!this.speaker) {
            this.errorMessage('No speaker was selected...');
        }
        else if (!this.title || !this.video || !this.keywords) {
            this.errorMessage('There are missing fields...');
        }
        else {
            var ref_2 = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/lectures/' + this.speaker);
            var videoExists_2 = false;
            ref_2.once('value').then(function (snapshot) {
                if (snapshot.val()) {
                    for (var _i = 0, _a = Object.keys(snapshot.val()); _i < _a.length; _i++) {
                        var lecture = _a[_i];
                        if (snapshot.val()[lecture].video === _this.video)
                            videoExists_2 = true;
                    }
                }
                if (videoExists_2) {
                    _this.errorMessage('Video has already been added...');
                }
                else {
                    ref_2.push({
                        title: _this.title,
                        video: _this.video,
                        keywords: keywords
                    }).then(function () {
                        _this.resetValues();
                        _this.successMessage('Lecture successfully added!');
                    });
                }
            });
        }
    };
    AddVideoComponent.prototype.getSpeakerImage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/speakers/' + this.speaker).once('value').then(function (snapshot) {
            if (snapshot.val()) {
                _this.image = snapshot.val().image;
            }
            else {
                _this.image = '';
            }
        });
    };
    AddVideoComponent.prototype.updateSpeaker = function () {
        var _this = this;
        if (!this.speaker) {
            this.errorMessage('No speaker was selected...');
        }
        else if (!this.image) {
            this.errorMessage('You forgot to add an image...');
        }
        else {
            var ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/speakers/' + this.speaker);
            ref.set({
                image: this.image
            }).then(function () {
                _this.resetValues();
                _this.successMessage('Speaker successfully updated!');
            });
        }
    };
    AddVideoComponent.prototype.ngOnInit = function () {
    };
    AddVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-video',
            template: __webpack_require__("./src/app/components/add-video/add-video.component.html"),
            styles: [__webpack_require__("./src/app/components/add-video/add-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddVideoComponent);
    return AddVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-panel\">\n  <h1>Admin</h1>\n    <input [(ngModel)]=\"email\" type=\"text\" class=\"email\" placeholder=\"email@domain.com\" autocomplete=\"off\">\n    <input [(ngModel)]=\"password\" type=\"password\" class=\"password\" placeholder=\"••••••••••\" autocomplete=\"off\">\n    <small class=\"error\" *ngIf=\"error\">{{this.error}}</small>\n    <button (click)=\"login()\" id=\"login\">Login</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "div.login-panel {\n  margin: 25px auto;\n  width: 500px;\n  text-align: center; }\n  div.login-panel input {\n    display: block;\n    margin: 5px auto;\n    width: 50%; }\n  div.login-panel button {\n    width: 50%;\n    padding: 5px 15px;\n    border: none;\n    display: block;\n    margin: 15px auto 5px auto; }\n  div.login-panel small.error {\n    color: red;\n    width: 250px;\n    display: block;\n    margin: 10px auto 0px auto; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.email = '';
        this.password = '';
        this.error = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).catch(function (err) {
            _this.error = err.message;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/player/player.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/components/player/player.component.html"),
            styles: [__webpack_require__("./src/app/components/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!admin\"></app-login>\n<app-add-video *ngIf=\"admin\"></app-add-video>\n<small class=\"footer\">Yoga Ear Admin Panel Copyright 2018</small>"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = "small.footer {\n  display: block;\n  margin: 15px auto;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            _this.admin = user;
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/pages/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"status-bar\">\n  You're listening to\n  <h1>{{ this.lectures.playing.name }}</h1>\n  with {{ this.music.playing.name }}...\n</div>\n\n<div id=\"video-wrapper\" *ngIf=\"this.lectures.playing.url && this.music.playing.url\">\n  <iframe height=\"315\" [src]=\"this.lectures.playing.url\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  <iframe height=\"315\" [src]=\"this.music.playing.url\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n</div>\n\n<div id=\"controls-wrapper\">\n  <div class=\"btn\" (click)=\"this.newLecture(true)\">New Lecture</div>\n  <div class=\"btn\" (click)=\"this.newSong(true)\">New Song</div>\n</div>\n\n<div id=\"speakers-wrapper\">\n  <div *ngFor=\"let speaker of this.lectures.speakers.names\" (click)=\"this.toggle(speaker, 'lectures')\" [ngStyle]=\"{ 'background-image': 'url(' + this.lectures.speakers.images[speaker].image + ')'}\"\n    id=\"{{ speaker }}\"></div>\n</div>\n\n<div id=\"genres-wrapper\">\n  <div *ngFor=\"let genre of this.music.genres\" (click)=\"this.toggle(genre, 'music')\" id=\"{{ genre }}\">{{ genre }}</div>\n</div>\n\n<div id=\"footer\">Yoga Ear | Developed By\n  <a href=\"https://twitter.com/jadeallencook\" target=\"_blank\">Jade Allen Cook</a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/splash/splash.component.scss":
/***/ (function(module, exports) {

module.exports = "div#video-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n  div#video-wrapper iframe {\n    margin: 0px auto;\n    width: 90%;\n    max-width: 550px;\n    border-radius: 25px; }\n  div#status-bar {\n  padding: 25px;\n  text-align: center;\n  font-size: 1.5em; }\n  div#status-bar h1 {\n    margin: -5px 0px 0px 0px; }\n  div#controls-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  margin-top: 25px; }\n  div#controls-wrapper div.btn {\n    background-color: #fff;\n    color: #000;\n    padding: 15px;\n    text-align: center;\n    width: 50%;\n    margin: 0px auto;\n    border-radius: 25px;\n    max-width: 250px; }\n  div#controls-wrapper div.btn:hover {\n    opacity: 0.5;\n    cursor: pointer; }\n  div#speakers-wrapper {\n  margin-top: 25px;\n  text-align: center; }\n  div#speakers-wrapper div:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n  div#speakers-wrapper div {\n    background-color: #fff;\n    height: 100px;\n    width: 100px;\n    display: inline-block;\n    border-radius: 100%;\n    margin: 15px;\n    background-size: cover;\n    background-position: center center; }\n  div#genres-wrapper {\n  text-align: center;\n  margin-top: 15px; }\n  div#genres-wrapper div:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n  div#genres-wrapper div {\n    padding: 5px 15px;\n    margin: 5px;\n    border-radius: 15px;\n    background-color: #fff;\n    color: #666;\n    display: inline-block; }\n  div#footer {\n  text-align: center;\n  margin: 25px 0px; }\n  div#footer a {\n    text-decoration: none;\n    color: lightseagreen; }\n"

/***/ }),

/***/ "./src/app/pages/splash/splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashComponent = /** @class */ (function () {
    function SplashComponent(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.lectures = {
            speakers: {
                names: [],
                images: {}
            },
            db: {},
            selected: [],
            playing: {
                url: null,
                name: 'loading...'
            }
        };
        this.music = {
            genres: [],
            db: {},
            selected: [],
            playing: {
                url: null,
                genre: 'loading...'
            }
        };
        Promise.all([__WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/lectures').once('value').then(function (snapshot) {
                _this.lectures.selected = Object.keys(snapshot.val());
                _this.lectures.db = snapshot.val();
            }), __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/music').once('value').then(function (snapshot) {
                _this.music.genres = Object.keys(snapshot.val());
                _this.music.selected = Object.keys(snapshot.val());
                _this.music.db = snapshot.val();
            }), __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/speakers').once('value').then(function (snapshot) {
                _this.lectures.speakers.names = Object.keys(snapshot.val());
                _this.lectures.speakers.images = snapshot.val();
            })]).then(function () {
            _this.newLecture(true);
            _this.newSong(true);
        });
    }
    SplashComponent.prototype.sanitize = function (url, autoplay) {
        if (autoplay)
            autoplay = '&autoplay=true';
        else
            autoplay = '&autoplay=false';
        url = 'https://www.youtube.com/embed/' + url + '?rel=0&showinfo=0' + autoplay;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SplashComponent.prototype.newSong = function (autoplay) {
        var genre = this.music.selected;
        genre = genre[Math.floor(Math.random() * genre.length)];
        this.music.playing.name = genre;
        var url = Object.keys(this.music.db[genre]);
        url = url[Math.floor(Math.random() * url.length)];
        url = this.music.db[genre][url].video;
        this.music.playing.url = this.sanitize(this.videoId(url), autoplay);
    };
    SplashComponent.prototype.newLecture = function (autoplay) {
        var speaker = this.lectures.selected;
        speaker = speaker[Math.floor(Math.random() * speaker.length)];
        this.lectures.playing.name = speaker.replace('-', ' ').replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        var url = Object.keys(this.lectures.db[speaker]);
        url = url[Math.floor(Math.random() * url.length)];
        url = this.lectures.db[speaker][url].video;
        this.lectures.playing.url = this.sanitize(this.videoId(url), autoplay);
    };
    SplashComponent.prototype.toggle = function (id, object) {
        var selected = this[object].selected;
        if (selected.indexOf(id) > -1) {
            var index = selected.indexOf(id);
            selected.splice(index, 1);
            document.getElementById(id).style.opacity = '0.15';
        }
        else {
            selected.push(id);
            document.getElementById(id).style.opacity = '1';
        }
    };
    SplashComponent.prototype.videoId = function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };
    SplashComponent.prototype.ngOnInit = function () {
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash',
            template: __webpack_require__("./src/app/pages/splash/splash.component.html"),
            styles: [__webpack_require__("./src/app/pages/splash/splash.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    business: 'Yoga Ear',
    speakers: [{
            name: 'Alan Watts',
            slug: 'alan-watts'
        }, {
            name: 'Aldous Huxley',
            slug: 'aldous-huxley'
        }, {
            name: 'Buckminster Fuller',
            slug: 'buckminster-fuller'
        }, {
            name: 'Ram Dass',
            slug: 'ram-dass'
        }, {
            name: 'Timothy Leary',
            slug: 'timothy-leary'
        }, {
            name: 'Terence McKenna',
            slug: 'terence-mckenna'
        }],
    genres: [{
            type: 'Jazz Vibes',
            slug: 'jazz-vibes',
        }, {
            type: 'Classic Jazz',
            slug: 'classic-jazz'
        }, {
            type: 'Indian',
            slug: 'indian'
        }, {
            type: 'Chinesse',
            slug: 'chinese'
        }, {
            type: 'Japanese',
            slug: 'japanese'
        }, {
            type: 'Rock',
            slug: 'rock'
        }, {
            type: 'Inspirational',
            slug: 'inspirational'
        }, {
            type: 'Lo-Fi',
            slug: 'lo-fi'
        }, {
            type: 'Classical',
            slug: 'classical'
        }, {
            type: 'Tibetan',
            slug: 'tibetan'
        }],
    firebase: {
        config: {
            apiKey: "AIzaSyAWMXKQMNmdzq1BQzPuSjfeVqqIddH-XfE",
            authDomain: "yoga-ear.firebaseapp.com",
            databaseURL: "https://yoga-ear.firebaseio.com",
            projectId: "yoga-ear",
            storageBucket: "",
            messagingSenderId: "715545961598"
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map