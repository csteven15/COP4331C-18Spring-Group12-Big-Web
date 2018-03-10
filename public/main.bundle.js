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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<ul>\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n    {{item.name}}\n  </li>\n</ul>\n-->\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
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
    function AppComponent(db) {
        this.title = 'app';
        this.items = db.collection('items').valueChanges();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__ = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__ = __webpack_require__("./src/app/components/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__ = __webpack_require__("./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__ = __webpack_require__("./src/app/components/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_notify_service__ = __webpack_require__("./src/app/services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_form_user_form_component__ = __webpack_require__("./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_dashboard_user_dashboard_component__ = __webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'user-register', component: __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__["a" /* UserRegisterComponent */] },
    { path: 'user-login', component: __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'user-form', component: __WEBPACK_IMPORTED_MODULE_18__components_user_form_user_form_component__["a" /* UserFormComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_20__components_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'user-dashboard', component: __WEBPACK_IMPORTED_MODULE_21__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDuu4TRrEA0mMTH3pf4tlbylX0JnpOFVqI'
                }),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_17__services_notify_service__["a" /* NotifyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#right-menu {\n  position: absolute;\n  right: 0;\n  top: 4em;\n  z-index: 1;\n  margin: 30px;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n<div class=\"card\" id=\"right-menu\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n</div>\n</div>\n-->\n<app-maps></app-maps>\n<br><br><br>\n<div class=\"container\">\n  <p>\n    Home Page\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = "#mapid {\n  height:92vh;\n  width:100vw;\n  overflow:hidden;\n  position:fixed;\n  top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/components/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://unpkg.com/leaflet@1.3.1/dist/leaflet.js\"\n   integrity=\"sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==\"\n     crossorigin=\"\"></script>\n\n\n<div id=\"mapid\"></div>\n"

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine__ = __webpack_require__("./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        // UCF coordinates
        this.lat = 28.6024;
        this.lng = -81.2001;
        this.zoom = 15;
    }
    MapsComponent.prototype.ngOnInit = function () {
        var UCFcoords = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.6014, -81.2001);
        var topLeft = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.6116, -81.2073);
        var bottomRight = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.5912, -81.1929);
        var bounds = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLngBounds"](topLeft, bottomRight);
        var mymap = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('mapid', {
            center: UCFcoords,
            zoom: 16,
        });
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        }).addTo(mymap);
        var prevDirections = 0;
        var directions;
        var userloc;
        mymap.locate({}).on("locationfound", function (e) {
            userloc = e.latlng;
            new __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"](userloc).addTo(mymap);
        });
        mymap.on('click', function (ev) {
            if (prevDirections != 0) {
                mymap.removeControl(directions);
            }
            var coordDest = mymap.mouseEventToLatLng(ev.originalEvent);
            console.log(coordDest.lat + ', ' + coordDest.lng);
            var options = { profile: 'mapbox/walking' };
            directions = __WEBPACK_IMPORTED_MODULE_1_leaflet__["Routing"].control({
                waypoints: [
                    __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](userloc),
                    __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](coordDest)
                ],
                units: 'imperial',
                fitSelectedRoutes: true,
                routeWhileDragging: true,
                show: true,
                router: __WEBPACK_IMPORTED_MODULE_1_leaflet__["Routing"].mapbox('pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', options)
            }).addTo(mymap);
            prevDirections = 1;
        });
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/components/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/components/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Pegasus Path</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['']\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['user-login']\" class=\"nav-link\" >Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a (click)=\"firebaseService.signOut()\"[routerLink]=\"['']\" class=\"nav-link\" >Logout</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['user-register']\" class=\"nav-link\" href=\"#\">Sign Up</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['user-profile']\" class=\"nav-link\" href=\"#\">Profile</a>\n      </li>\n    </ul>\n    <!-- <form class=\"form-inline mt-2 mt-md-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, afAuth, firebaseService) {
        this.router = router;
        this.afAuth = afAuth;
        this.firebaseService = firebaseService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].EmailAuthProvider());
    };
    NavigationComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
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

var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <form [formGroup]=\"userForm\"  *ngIf=\"newUser\"  (ngSubmit)=\"signup()\">\n\n      <h3>New User Signup</h3>\n      <button class=\"btn btn-primary\" (click)=\"toggleForm()\">Already Registered?</button>\n      <hr>\n\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n             formControlName=\"email\" required >\n\n      <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n        {{ formErrors.email }}\n      </div>\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n             formControlName=\"password\" required >\n\n      <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n        {{ formErrors.password }}\n      </div>\n\n      <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Sign Up</button>\n\n    </form>\n\n\n    <form [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"login()\">\n\n      <h3>Existing User Login</h3>\n      <button class=\"btn btn-primary\" (click)=\"toggleForm()\">New User?</button>\n      <hr>\n\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n             formControlName=\"email\" required >\n\n      <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n      </div>\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n             formControlName=\"password\" required >\n\n      <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Login</button>\n\n      <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n      <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n      <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, firebaseService) {
        this.fb = fb;
        this.firebaseService = firebaseService;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        //this.firebaseService.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.firebaseService.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.firebaseService.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(25),
                ]],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-form',
            template: __webpack_require__("./src/app/components/user-form/user-form.component.html"),
            styles: [__webpack_require__("./src/app/components/user-form/user-form.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/components/user-login/user-login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n  <div class=\"jumbotron vertical-center\" style=\"width: 50%;\">\n    <h2><strong>Login with Email</strong></h2>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"loginUser()\">\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <br>\n        <input type=\"email\" id=\"email\" class=\"input\" formControlName=\"email\" required>\n\n        <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <br>\n        <input type=\"password\" id=\"password\" class=\"input\" formControlName=\"password\" required>\n\n        <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n\n      <br>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Login</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/user-register']\" >New User?</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserLoginComponent.prototype.loginUser = function () {
        var _this = this;
        // users
        this.firebaseService.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25),
                ]]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    UserLoginComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserLoginComponent.prototype.afterSignIn = function () {
        this.router.navigate(['/user-profile']);
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__("./src/app/components/user-login/user-login.component.html"),
            styles: [__webpack_require__("./src/app/components/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br>\n<div class=\"container\">\n<div *ngIf=\"firebaseService.user | async; then authenticated else guest\">\n        <!-- template will replace this div -->\n</div>\n\n\n<!-- User NOT logged in -->\n<ng-template #guest>\n    <h3>Howdy, GUEST</h3>\n    <p>Login to get started...</p>\n\n    <!-- <button (click)=\"firebaseService.googleLogin()\">\n        <i class=\"fa fa-google\"></i> Connect Google\n    </button> -->\n\n</ng-template>\n\n\n<!-- User logged in -->\n<ng-template #authenticated>\n    <div *ngIf=\"firebaseService.user | async as user\">\n        <h3>Welcome, {{ user.firstname }} {{user.lastname}}</h3>\n        <p>UID: {{ user.uid }}</p>\n        <button class=\"btn btn-primary\" (click)=\"firebaseService.signOut()\" >Logout</button>\n\n    </div>\n</ng-template>\n</div>\n<br>\n\n\n<div class=\"container\">\n  <form [formGroup]=\"eventForm\" (ngSubmit)=\"registerEvent()\">\n\n    <h3>Coordinates</h3>\n    <div class=\"form-group\">\n      <label for=\"name\">Event Name</label>\n      <br>\n      <input type=\"name\" id=\"name\" class=\"input\" formControlName=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <br>\n      <input type=\"description\" id=\"description\" class=\"input\" formControlName=\"description\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"longitude\">Longitude</label>\n      <br>\n      <input type=\"longitude\" id=\"longitude\" class=\"input\" formControlName=\"longitude\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"latitude\">Latitude</label>\n      <br>\n      <input type=\"latitude\" id=\"latitude\" class=\"input\" formControlName=\"latitude\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Add Event</button>\n\n  </form>\n</div>\n\n\n\n\n\n<br><br><br>\n\n<div class=\"container\">\n  <div *ngIf=\"events?.length > 0;else noEvents\">\n    <div *ngFor=\"let event of events\" class=\"collection\">\n      <div class=\"card\" style=\"width: 20rem;\">\n        <div class=\"card-block\" style=\"padding: 30px;\">\n          <h5 class=\"card-title\"><strong>Event Name: {{event.name}} </strong></h5>\n          <p>EID: {{event.eid}}</p>\n          <p>Description: {{event.description}}</p>\n          <p>Longitude: {{event.longitude}}</p>\n          <p>Latitude: {{event.latitude}}</p>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n\n  <ng-template #noItems>\n    <hr>\n    <h5>There are no items to list</h5>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.event = {
            name: '',
            description: '',
            longitude: '',
            latitude: ''
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.firebaseService.getEvents().subscribe(function (events) {
            console.log(events);
            _this.events = events;
        });
        this.user = this.firebaseService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        console.log(this.user);
    };
    UserProfileComponent.prototype.registerEvent = function () {
        // users
        var data = {
            name: this.eventForm.value['name'],
            description: this.eventForm.value['description'],
            longitude: this.eventForm.value['longitude'],
            latitude: this.eventForm.value['latitude']
        };
        this.firebaseService.addEvent(data);
        //this.firebaseService.getUser();
    };
    UserProfileComponent.prototype.buildForm = function () {
        this.eventForm = this.fb.group({
            'name': ['', []],
            'description': ['', []],
            'longitude': ['', []],
            'latitude': ['', []]
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user-register/user-register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n  <div class=\"jumbotron vertical-center\" style=\"width: 50%;\">\n    <h2><strong>Register with Email</strong></h2>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"registerUser()\">\n\n      <h3>New User Signup</h3>\n\n      <div class=\"form-group\">\n        <label for=\"firstname\">First Name</label>\n        <br>\n        <input type=\"firstname\" id=\"firstname\" class=\"input\" formControlName=\"firstname\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastname\">Last Name</label>\n        <br>\n        <input type=\"lastname\" id=\"lastname\" class=\"input\" formControlName=\"lastname\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <br>\n        <input type=\"email\" id=\"email\" class=\"input\" formControlName=\"email\" required>\n\n        <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <br>\n        <input type=\"password\" id=\"password\" class=\"input\" formControlName=\"password\" required>\n\n        <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Sign Up</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/user-login']\" >Already a User?</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserRegisterComponent.prototype.registerUser = function () {
        // users
        this.firebaseService.emailSignUp(this.userForm.value['firstname'], this.userForm.value['lastname'], this.userForm.value['email'], this.userForm.value['password']);
        this.router.navigate(['/user-login']);
    };
    UserRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'firstname': ['', []],
            'lastname': ['', []],
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25),
                ]]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserRegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__("./src/app/components/user-register/user-register.component.html"),
            styles: [__webpack_require__("./src/app/components/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_service__ = __webpack_require__("./src/app/services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseService = /** @class */ (function () {
    function FirebaseService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
        // this.eventsCollection = this.afs.collection('events');
        //
        // this.events = this.eventsCollection.snapshotChanges().map(changes => {
        //   return changes.map(a => {
        //     const data = a.payload.doc.data() as Event;
        //     data.eid = a.payload.doc.id;
        //     return data;
        //   });
        // });
        this.eventsCollection = this.afs.collection('events');
        this.events = this.eventsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.eid = a.payload.doc.id;
                return data;
            });
        });
    }
    ////// OAuth Methods /////
    FirebaseService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    FirebaseService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    FirebaseService.prototype.emailSignUp = function (firstname, lastname, email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            user.firstname = firstname;
            user.lastname = lastname;
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirebaseService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    FirebaseService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirebaseService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    FirebaseService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    FirebaseService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        if (user.firstname == '') {
            user.firstname = 'N/A';
        }
        if (user.lastname == '') {
            user.lastname = 'N/A';
        }
        var data = {
            uid: user.uid,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email || null,
        };
        return userRef.set(data);
    };
    // // Get user data from firestore
    FirebaseService.prototype.getUser = function () {
        return this.user;
    };
    FirebaseService.prototype.getEvents = function () {
        var eventsRef = this.afs.doc("events/" + this.events);
        console.log(eventsRef);
        return this.events;
    };
    FirebaseService.prototype.addEvent = function (event) {
        this.eventsCollection.add(event);
    };
    FirebaseService.prototype.deleteEvent = function (event) {
        this.eventDocument = this.afs.doc("events/" + event.eid);
        this.eventDocument.delete();
    };
    FirebaseService.prototype.updateEvent = function (event) {
        this.eventDocument = this.afs.doc("items/" + event.eid);
        this.eventDocument.update(event);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__notify_service__["a" /* NotifyService */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NotifyService);
    return NotifyService;
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
    firebase: {
        apiKey: "AIzaSyCBPQsgFMNj9JRGM1u9JInc9qdtolGwfh8",
        authDomain: "cop4331c.firebaseapp.com",
        databaseURL: "https://cop4331c.firebaseio.com",
        projectId: "cop4331c",
        storageBucket: "cop4331c.appspot.com",
        messagingSenderId: "200522304857"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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