webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider
var BuildPage = (function () {
    function BuildPage(navCtrl, app, globalVars) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.globalVars = globalVars;
        this.animate = function () {
            _this.animationId = requestAnimationFrame(_this.animate);
            _this.mesh.rotation.x += 0.005;
            _this.mesh.rotation.y += 0.01;
            _this.renderer.render(_this.scene, _this.camera);
        };
    }
    BuildPage.prototype.ionViewDidLoad = function () {
        this.projects = this.globalVars.getProjects();
        this.objects = [
            { objectId: 1,
                objectName: 'Crate Box',
                objectTexture: 'crate.gif'
            },
            { objectId: 2,
                objectName: 'Normal Box',
                objectTexture: 'normal.jpg'
            },
            { objectId: 3,
                objectName: 'Color Box',
                objectTexture: 'color.jpg'
            }
        ];
        this.container = document.getElementById("div-container");
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* PerspectiveCamera */](70, this.container.clientWidth / this.container.clientHeight, 1, 1000);
        this.camera.position.z = 400;
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* Scene */]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["b" /* Color */](0x4f465a);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["h" /* WebGLRenderer */]();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.render(this.scene, this.camera);
        this.container.appendChild(this.renderer.domElement);
        this.activeProject = this.globalVars.getActiveProject();
        if (this.activeProject !== null) {
            this.loadProject();
        }
    };
    BuildPage.prototype.openHomePage = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    BuildPage.prototype.saveProject = function () {
        this.projects.push({ id: this.projects.length + 1,
            title: this.title,
            object: this.object,
            topText: this.topText,
            bottomText: this.bottomText,
            author: this.author,
            projectName: this.projectName
        });
        this.globalVars.setProjects(this.projects);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    BuildPage.prototype.updateProject = function () {
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === this.activeProject.id) {
                this.projects[i] = {
                    id: this.projects[i].id,
                    title: this.title,
                    object: this.object,
                    topText: this.topText,
                    bottomText: this.bottomText,
                    author: this.author,
                    projectName: this.projectName
                };
            }
        }
        this.globalVars.setProjects(this.projects);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    BuildPage.prototype.updateObject = function (passed_object) {
        if (this.animationId !== null)
            cancelAnimationFrame(this.animationId);
        this.object = passed_object;
        this.objectName = this.object.objectName;
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
        var texture = new __WEBPACK_IMPORTED_MODULE_2_three__["g" /* TextureLoader */]().load('../../assets/textures/' + this.object.objectTexture);
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["a" /* BoxGeometry */](100, 100, 100);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: texture });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](geometry, material);
        this.scene.add(this.mesh);
        this.animate();
    };
    BuildPage.prototype.loadProject = function () {
        this.title = this.activeProject.title;
        this.object = this.activeProject.object;
        this.updateObject(this.activeProject.object);
        this.topText = this.activeProject.topText;
        this.bottomText = this.activeProject.bottomText;
        this.author = this.activeProject.author;
        this.projectName = this.activeProject.projectName;
    };
    return BuildPage;
}());
BuildPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-build',template:/*ion-inline-start:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\pages\build\build.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <h1>Rain Reality</h1>\n\n    </ion-title>\n\n    <ion-toolbar>\n\n      <ion-grid>\n        \n        <ion-row>\n\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1 (click)="openHomePage()">Home</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>Build</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>Browse</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>About</ion-col>\n        \n        </ion-row>\n      \n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h3 margin>Build Project</h3>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-3 padding>\n\n      \n\n      <ion-list>\n\n        <ion-item padding-bottom>\n          <ion-label color="primary" stacked>Add Title</ion-label>\n          <ion-input [(ngModel)]="title" type="text" placeholder="..."></ion-input>\n        </ion-item>\n\n        <ion-item paddin-top>\n          <ion-label color="primary" stacked>Add Object</ion-label>\n          <ion-input [(ngModel)]="objectName" type="search" placeholder="..."></ion-input>\n        </ion-item>\n\n        <ion-item padding-bottom>\n          <p padding *ngFor="let item of objects  | objectFilter: objectName;" (click)="updateObject(item)">{{ item.objectName }}</p>\n        </ion-item>\n\n        <ion-item padding-top>\n          <ion-label color="primary" stacked>Add Top Text</ion-label>\n          <ion-input [(ngModel)]="topText" type="text" placeholder="..."></ion-input>\n        </ion-item>\n        \n        <ion-item padding-top padding-bottom>\n          <ion-label color="primary" stacked>Add Bottom Text</ion-label>\n          <ion-input [(ngModel)]="bottomText" type="text" placeholder="..."></ion-input>\n        </ion-item>\n\n        <ion-item padding-top>\n          <ion-label color="primary" stacked>Author</ion-label>\n          <ion-input [(ngModel)]="author" type="text" placeholder="..."></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Project Name</ion-label>\n          <ion-input [(ngModel)]="projectName" type="text" placeholder="..."></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <button *ngIf="!activeProject && object" ion-button (click)="saveProject()">Save Project</button>\n      <button *ngIf="activeProject && object" ion-button (click)="updateProject()">Update Project</button>\n\n    </ion-col>\n\n    <ion-col padding margin>\n\n      <div id="div-container">\n\n        <div text-center padding class="project-title">{{ title }}</div>\n        <div padding text-wrap class="project-top-text">{{ topText }}</div>\n        <div padding text-wrap class="project-bottom-text">{{ bottomText }}</div>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\pages\build\build.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_vars__["a" /* GlobalVarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_vars__["a" /* GlobalVarsProvider */]) === "function" && _c || Object])
], BuildPage);

var _a, _b, _c;
//# sourceMappingURL=build.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_build_build__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_vars__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_object_filter__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_build_build__["a" /* BuildPage */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_object_filter__["a" /* ObjectFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_build_build__["a" /* BuildPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_global_vars__["a" /* GlobalVarsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjectFilterPipe = (function () {
    function ObjectFilterPipe() {
    }
    ObjectFilterPipe.prototype.transform = function (pipeData, pipeModifier) {
        if (pipeData == null) {
            return null;
        }
        if (pipeModifier == null || pipeModifier == "") {
            return null;
        }
        return pipeData.filter(function (eachItem) {
            if (eachItem['objectName'] === pipeModifier) {
                return null;
            }
            else {
                return eachItem['objectName'].toLowerCase().includes(pipeModifier.toLowerCase());
            }
        });
    };
    return ObjectFilterPipe;
}());
ObjectFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'objectFilter'
    })
], ObjectFilterPipe);

//# sourceMappingURL=pipe.object-filter.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_build__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider
var HomePage = (function () {
    function HomePage(navCtrl, app, globalVars) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.globalVars = globalVars;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.projects = this.globalVars.getProjects();
    };
    HomePage.prototype.openBuildPage = function () {
        this.globalVars.setActiveProject(null);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__build_build__["a" /* BuildPage */]);
    };
    HomePage.prototype.loadProject = function (passed_project) {
        this.globalVars.setActiveProject(passed_project);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__build_build__["a" /* BuildPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <h1>Rain Reality</h1>\n\n    </ion-title>\n\n    <ion-toolbar>\n\n      <ion-grid>\n        \n        <ion-row>\n          \n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>Home</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1 (click)="openBuildPage()">Build</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>Browse</ion-col>\n          <ion-col style="color: #ffffff; background-color:#4f465a; border-radius: 5px;" margin-right text-center col-1>About</ion-col>\n        \n        </ion-row>\n      \n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h3 margin>Build a New Project</h3>\n  <div margin text-center class="project" (click)="openBuildPage()">\n    <div style="background-color: #dddddd" class="project-icon">Add +</div>\n  </div>\n  \n  <h3 margin>Current Projects</h3>\n  <div margin class="project" *ngFor="let item of projects" (click)="loadProject(item)">\n\n    <div class="project-icon">{{ item.projectName }}</div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\benjamin.leskovansky\Desktop\RRP\rrPrototype\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_vars__["a" /* GlobalVarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_vars__["a" /* GlobalVarsProvider */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalVarsProvider = (function () {
    function GlobalVarsProvider() {
        // -- Projects
        this._projects = [
            { id: 1,
                title: 'Normal Box',
                object: { objectId: 2, objectName: 'Normal Box', objectTexture: 'normal.jpg' },
                topText: 'This is a box',
                bottomText: 'Boxes can be used for moving things from house to house.',
                author: 'Mr. Smith',
                projectName: 'BIO121'
            },
            { id: 2,
                title: 'Color Box',
                object: { objectId: 3, objectName: 'Color Box', objectTexture: 'color.jpg' },
                topText: 'This is another box',
                bottomText: 'Boxes are used to store things.',
                author: 'Mrs. Jones',
                projectName: 'CHM141'
            }
        ];
    }
    GlobalVarsProvider.prototype.setProjects = function (passed_Projects) {
        this._projects = passed_Projects;
    };
    GlobalVarsProvider.prototype.getProjects = function () {
        return this._projects;
    };
    GlobalVarsProvider.prototype.setActiveProject = function (passed_activeProject) {
        this._activeProject = passed_activeProject;
    };
    GlobalVarsProvider.prototype.getActiveProject = function () {
        return this._activeProject;
    };
    return GlobalVarsProvider;
}());
GlobalVarsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalVarsProvider);

//# sourceMappingURL=global-vars.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map