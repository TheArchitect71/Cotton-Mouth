function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var summary_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", summary_r1.text, " ");
      }
    }

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);

      this.summaries = [{
        id: 1,
        text: "As a web developer, I work to better understand how web applications\n      motivates and shapes the way we do business and administration. My\n      expertise includes project design and management, data manipulation and\n      interpretation, and the development and implementation of open-source\n      tools."
      }, {
        id: 2,
        text: "I enjoy generating new ideas and devising feasible solutions to broadly\n      relevant problems. My colleagues would describe me as a driven,\n      resourceful individual who maintains a positive, proactive attitude when\n      faced with adversity."
      }, {
        id: 3,
        text: "Currently, I\u2019m seeking opportunities that will allow me to develop and\n      promote technologies that benefit the development of the humanities.\n      Specific fields of interest include machine learning, biotechnology, and\n      internet-of-things. \uD83D\uDD78"
      }];
    };

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 9,
      vars: 1,
      consts: [[1, "intro"], [1, "card-image"], ["mat-card-image", "", "src", "/assets/Profile.png", "alt", "Erick Flores"], [1, "text-color"], [4, "ngFor", "ngForOf"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \"If somebody told you I was just your average ordinary guy, without a care in the world... somebody lied.\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_mat_card_8_Template, 3, 1, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaries);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 45%;\n  }\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n.text-color[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(120deg, #ffe259, #ffa751);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-top: 1em;\n  border-radius: 50%;\n  height: 15em;\n  width: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNkRBQTZEO0VBQzdELDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuLmludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTIwZGVnLCAjYzQwNzA3LCAjYmY1NzAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1jb2xvciB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ZmZTI1OSwgI2ZmYTc1MSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4ubWF0LWNhcmQtaW1hZ2U6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNWVtO1xuICB3aWR0aDogMTVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)();
      },
      imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favorites/favorites.component */
    "./src/app/favorites/favorites.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _technology_technology_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./technology/technology.component */
    "./src/app/technology/technology.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");

    var routes = [{
      path: '',
      component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'experience',
      component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]
    }, {
      path: 'favorites',
      component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
    }, {
      path: 'technology',
      component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_7__["TechnologyComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    }, {
      path: 'log-in',
      component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _technology_technology_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./technology/technology.component */
    "./src/app/technology/technology.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./favorites/favorites.component */
    "./src/app/favorites/favorites.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./authentication/signup/signup.component */
    "./src/app/authentication/signup/signup.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _technology_technology_component__WEBPACK_IMPORTED_MODULE_7__["TechnologyComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _technology_technology_component__WEBPACK_IMPORTED_MODULE_7__["TechnologyComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 7,
      vars: 0,
      consts: [[1, "page-title"], [1, "coming-soon"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Existential Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Form coming soon. In the meantime feel free to explore this web application. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n  @media (min-width: 1000px) {\n    section[_ngcontent-%COMP%] {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      width: 40%;\n    }\n  }\n  .page-title[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    justify-content: center;\n  }\n  .coming-soon[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    background-color: white;\n    margin-right: 1em;\n    margin-left: 1em;\n    padding: 1em 1em;\n    border-radius: 25px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gIH1cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xMjBkZWcsICNjNDA3MDcsICNiZjU3MDApO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNvbWluZy1zb29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/signup/signup.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/authentication/signup/signup.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthenticationSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 2,
      vars: 0,
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 7,
      vars: 0,
      consts: [[1, "page-title"], [1, "coming-soon"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Existential Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Form coming soon. In the meantime feel free to contact me through these medias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  justify-content: center;\n}\n.coming-soon[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  background-color: white;\n  margin-right: 1em;\n  margin-left: 1em;\n  padding: 1em 1em;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5wYWdlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTIwZGVnLCAjYzQwNzA3LCAjYmY1NzAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb21pbmctc29vbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceComponent_mat_expansion_panel_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var experiencePoint_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experiencePoint_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experiencePoint_r1.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experiencePoint_r1.secondaryText, " ");
      }
    }

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.panelOpenState = false;
        this.experiencePoints = [{
          id: 1,
          title: "Explore various cases and scenarios.",
          text: "Strong interest and skills in web technologies: HTML, CSS, &\n          JavaScript.",
          secondaryText: "Experience with modern enterprise design philosophies & patterns."
        }, {
          id: 2,
          title: "Keeping up with evolving industry",
          text: "Understanding how the web works from a rudimentary level.",
          secondaryText: "Ability to match solutions to business needs without unnecessary\n      complexity."
        }, {
          id: 1,
          title: "Implement for speed and scalability.",
          text: "Good understanding of asynchronous request handling.",
          secondaryText: "Provide appropriate endpoints on Backend, for Frontend to consume."
        }, {
          id: 2,
          title: "Involved with all aspects of the user.",
          text: "Implementing Users, Authentication as well as Authorization.",
          secondaryText: "Assuring all user input is validated, experience is intuitive &\n      accessible."
        }, {
          id: 1,
          title: "Behaved interface across devices.",
          text: "Design and develop product assets, features, themes and style guides.",
          secondaryText: "Develop applications using frameworks to avoid cross-browser\n      compatibility issues."
        }, {
          id: 2,
          title: "Collaborate and cultivate.",
          text: "Strong communication skills, both written and verbal.",
          secondaryText: "Manage project priorities, deadlines and deliverables."
        }];
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 6,
      vars: 1,
      consts: [[1, "intro"], [4, "ngFor", "ngForOf"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u201CProgress is not in enhancing what is, but in advancing toward what will be.\u201D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_5_Template, 9, 3, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencePoints);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"]],
      styles: ["mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  margin-right: 1em;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n  }\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5pbnRybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEyMGRlZywgI2M0MDcwNywgI2JmNTcwMCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-experience",
          templateUrl: "./experience.component.html",
          styleUrls: ["./experience.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/favorites/favorites.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/favorites/favorites.component.ts ***!
    \**************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    function FavoritesComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.alt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link);
      }
    }

    var FavoritesComponent = /*#__PURE__*/function () {
      function FavoritesComponent() {
        _classCallCheck(this, FavoritesComponent);

        this.favoritesList = [{
          id: 1,
          title: "Thinking Fast and Slow",
          subtitle: "Book",
          image: "https://images-na.ssl-images-amazon.com/images/I/51oXKWrcYYL.jpg",
          alt: "Thinking Fast and Slow Book",
          content: "Engaging the reader in a lively conversation about how we think,\n      Kahneman reveals where we can and cannot trust our intuitions and how\n      we can tap into the benefits of slow thinking. He offers practical and\n      enlightening insights into how choices are made in both our business\n      and our personal lives\u2014and how we can use different techniques to\n      guard against the mental glitches that often get us into trouble.",
          link: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"
        }, {
          id: 1,
          title: "The God Delusion",
          subtitle: "Book",
          image: "https://images-na.ssl-images-amazon.com/images/I/41LMUsSTaNL._SX331_BO1,204,203,200_.jpg",
          alt: "The God Delusion Book",
          content: "A compelling case that belief in God is not just wrong but potentially\n      deadly. It also offers exhilarating insight into the advantages of\n      atheism to the individual and society, not the least of which is a\n      clearer, truer appreciation of the universe's wonders than any faith\n      could ever muster.",
          link: ""
        }, {
          id: 1,
          title: "A Briefer History of Time",
          subtitle: "Book",
          image: "https://i5.walmartimages.com/asr/52c45b07-a3d1-4099-ab45-18e552e8a837_1.109eefa6e534e4c64b2c2a79b8700d4d.jpeg",
          alt: "A Briefer History of Time Book",
          content: "Stephen Hawking\u2019s worldwide bestseller A Brief History of Time remains\n      a landmark volume in scientific writing. But for years readers have\n      asked for a more accessible formulation of its key concepts\u2014the nature\n      of space and time, the role of God in creation, and the history and\n      future of the universe.",
          link: ""
        }, {
          id: 1,
          title: "The Imitation Game",
          subtitle: "Movie",
          image: "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/hztvcwg7zdfdfdojvdgk.jpg",
          alt: "The Imitation Game Movie Poster",
          content: "Is a 2014 American historical drama film based on the biography of\n      Alan Turing, a British cryptanalyst, who decrypted German intelligence\n      messages for the British government during the Second World War.",
          link: ""
        }, {
          id: 1,
          title: "The King's Speech",
          subtitle: "Movie",
          image: "https://goodmenproject.com/wp-content/uploads/2019/04/nkFTbA1XjKWo9LCTaV1hV2Lsgr1.jpg",
          alt: "The King's Speech Movie Poster",
          content: "Is a 2010 historical drama film about the future King George VI who,\n      to cope with a stammer, sees Lionel Logue, an Australian speech and\n      language therapist. The new king relies on Logue to help him make his\n      first wartime radio broadcast on Britain's declaration of war on\n      Germany in 1939.",
          link: ""
        }, {
          id: 1,
          title: "V for Vendetta",
          subtitle: "Movie",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/V_for_vendettax.jpg/220px-V_for_vendettax.jpg",
          alt: "V for Vendetta Movie Poster",
          content: "Is a 2006 dystopian political thriller film based on the 1988\n      DC/Vertigo Comics limited series. Set in an alternative future where a\n      Nordic supremacist and neo-fascist totalitarian regime has subjugated\n      the United Kingdom",
          link: ""
        }, {
          id: 1,
          title: "The Patriot Act",
          subtitle: "TV Show",
          image: "https://m.media-amazon.com/images/M/MV5BZDUzZmIwYzMtMTNiNS00OTRlLTliYTgtZjljNjNjNTdkNDc4XkEyXkFqcGdeQXVyNjAxNDcwNzY@._V1_.jpg",
          alt: "The Patriot Act Poster",
          content: "Is an American comedy web television talk show that aims to \"explore\n      the modern cultural and political landscape with depth and sincerity.\"\n      In an attempt to separate the show from similar political satire\n      shows.",
          link: ""
        }, {
          id: 1,
          title: "Star Trek: The Next Generation",
          subtitle: "TV Show",
          image: "https://m.media-amazon.com/images/M/MV5BNDViYjAyZWUtNGQxMy00MDUyLTlkZTAtOWNkY2M5ZTk5MTE5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
          alt: "Star Trek: The Next Generation Poster",
          content: "Is an American science fiction television series. A new generation of\n      Starfleet officers set off in the U.S.S. Enterprise-D on their own\n      mission to go where no one has gone before.",
          link: ""
        }, {
          id: 1,
          title: "Rick and Morty",
          subtitle: "TV Show",
          image: "https://imgc.allpostersimages.com/img/print/u-g-F9DGRL0.jpg?w=550&h=550&p=0",
          alt: "Rick and Morty Poster",
          content: "Is an American adult animated science fiction sitcom. The series\n      follows the misadventures of cynical mad scientist Rick Sanchez and\n      his good-hearted but fretful grandson Morty Smith, who split their\n      time between domestic life and interdimensional adventures.",
          link: ""
        }];
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) {
      return new (t || FavoritesComponent)();
    };

    FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavoritesComponent,
      selectors: [["app-favorites"]],
      decls: 3,
      vars: 1,
      consts: [[1, "card-list"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", 3, "src", "alt"], ["color", "primary", "selected", "", 3, "href"]],
      template: function FavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoritesComponent_mat_card_2_Template, 13, 6, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoritesList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"]],
      styles: [".section-title[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(-120deg, #f024bb, #feb666);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n  }\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 25em;\n  margin-right: 1em;\n  margin-bottom: 1em;\n  margin-left: 1em;\n}\n.mat-card-image[_ngcontent-%COMP%] {\n  height: 32em;\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQThEO0VBQzlELDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDhEQUE4RDtFQUM5RCxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xMjBkZWcsICNmMDI0YmIsICNmZWI2NjYpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDI1ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubWF0LWNhcmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDMyZW07XG59XG4uaW50cm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTIwZGVnLCAjYzQwNzA3LCAjYmY1NzAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favorites',
          templateUrl: './favorites.component.html',
          styleUrls: ['./favorites.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 19,
      vars: 1,
      consts: [["cols", "3", "rowHeight", "2.1rem"], ["href", "https://github.com/TheArchitect71"], [1, "fab", "fa-github"], ["href", "https://twitter.com/eflow71"], [1, "fab", "fa-twitter"], ["href", "https://www.linkedin.com/in/erick-flores785/"], [1, "fab", "fa-linkedin-in"], [3, "colspan"], ["href", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xA9 2017-2020 existential thinker ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Privacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"]],
      styles: [".fab[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  background: -webkit-linear-gradient(-120deg, #c40707, #c94c00);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.terms-width[_ngcontent-%COMP%] {\n  width: 100%\n}\np[_ngcontent-%COMP%] {\n  color:grey;\n}\na[_ngcontent-%COMP%] {\n  color:#bf5700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhEQUE4RDtFQUM5RCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEyMGRlZywgI2M0MDcwNywgI2M5NGMwMCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50ZXJtcy13aWR0aCB7XG4gIHdpZHRoOiAxMDAlXG59XG5wIHtcbiAgY29sb3I6Z3JleTtcbn1cbmEge1xuICBjb2xvcjojYmY1NzAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/contact"];
    };

    var _c1 = function _c1() {
      return ["/log-in"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 11,
      vars: 4,
      consts: [[1, "background-sky", "hero"], ["cols", "3", "rowHeight", "7em"], ["mat-raised-button", "", "routerLinkActive", "router-link-active", "color", "primary", 3, "routerLink"], ["src", "/assets/existential thinker logo colored shrinked.png", "routerLink", "/", "routerLinkActive", "active", "alt", "existential thinker logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Log In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.background-sky[_ngcontent-%COMP%] {\n  background-color: #f9d700;\n  \n  color: #0c0c0d;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  min-height: 20em;\n  \n  \n  box-sizing: border-box;\n  padding: 48px 48px 32px;\n  overflow: hidden;\n  transform: skewY(8deg);\n  transform-origin: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmJhY2tncm91bmQtc2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDcwMDtcbiAgLyogIGJhY2tncm91bmQ6IzIyNDU1YjsgKi9cbiAgY29sb3I6ICMwYzBjMGQ7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogbWF4LWhlaWdodDogNTYwcHg7ICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDQ4cHggNDhweCAzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHNrZXdZKDhkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavigationComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r1.route, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.content, " ");
      }
    }

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.navigationList = [{
          id: 1,
          route: '/about',
          title: "About",
          content: "To Be Authentic. To Surrender the Outcome. To Do Uncomfortable Work."
        }, {
          id: 2,
          route: '/experience',
          title: "Experience",
          content: "Learning is an Active Process that Requires Ardor and Diligence."
        }, {
          id: 3,
          route: '/projects',
          title: "Projects",
          content: "Making a Lively Game Out of Mastering Web Development."
        }, {
          id: 4,
          route: '/technology',
          title: "Technology",
          content: "Developing the Front-End and Back-End of the Web using Open Source\n      Tools."
        }, {
          id: 5,
          route: '/favorites',
          title: "Favorites",
          content: "Books, Movies and TV Shows Dealing with the Humanities."
        }];
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 2,
      vars: 1,
      consts: [["class", "example-card", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "example-card", 3, "routerLink"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_mat_card_1_Template, 6, 3, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 1em;\n  margin-bottom: 1em;\n  margin-right: 2em;\n  margin-left: 2em;\n}\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-top: 1em;\n  border-radius: 50%;\n  height: 15em;\n  width: 15em;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbn1cbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE1ZW07XG4gIHdpZHRoOiAxNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProjectsComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GitHub");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        this.projectList = [{
          id: 1,
          title: "40-Eridani",
          text: "Scalable and high-speed Web Application with Angular (formerly named\n        Angular 2, now just \"Angular\") and NodeJS + Express + MongoDB.",
          link: "https://github.com/TheArchitect71/40-Eridani"
        }, {
          id: 2,
          title: "Risa",
          text: "Using Node Core Node.js Basics & Basic Core Modules | Parsing Requests\n      & Sending Responses | Rendering HTML Dynamically (on the Server) |\n      Using Express.js",
          link: "https://github.com/TheArchitect71/Risa"
        }, {
          id: 3,
          title: "Andoria",
          text: "Relating to, denoting, or engaged in an employment pattern that\n      involves a succession of short-term contracts and part-time work,\n      rather than the more traditional model of a long-term single job.",
          link: "https://github.com/TheArchitect71/Andoria"
        }, {
          id: 4,
          title: "Inventory-Editor",
          text: "This basic app has many of the features you'd expect to find in a\n      data-driven application. It acquires and displays a list of products,\n      edits a selected product's detail, and navigates among different views\n      of data.",
          link: "https://github.com/TheArchitect71/Inventory-Editor"
        }];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 6,
      vars: 1,
      consts: [[1, "mat-typography"], [1, "intro"], [1, "cards"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-avatar", ""], [1, "far", "fa-file-code"], ["mat-button", "", 3, "href"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Speed, Ease of Development, Highly Reactive, Awesome Support for Asynchronous Operations, Greate Scalability and More! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_mat_card_5_Template, 14, 3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]],
      styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.fa-file-code[_ngcontent-%COMP%] {\n  font-size: 3em;\n  max-height: 40px;\n  color: rgb(8, 185, 8);\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 1em;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmEtZmlsZS1jb2RlIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiByZ2IoOCwgMTg1LCA4KTtcbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEyMGRlZywgI2M0MDcwNywgI2JmNTcwMCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-projects",
          templateUrl: "./projects.component.html",
          styleUrls: ["./projects.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/technology/technology.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/technology/technology.component.ts ***!
    \****************************************************/

  /*! exports provided: TechnologyComponent */

  /***/
  function srcAppTechnologyTechnologyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function () {
      return TechnologyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function TechnologyComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", item_r1.alt, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.secondTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.secondText, " ");
      }
    }

    var TechnologyComponent = /*#__PURE__*/function () {
      function TechnologyComponent() {
        _classCallCheck(this, TechnologyComponent);

        this.technologyList = [{
          id: 1,
          image: "/assets/pwa-reliable.png",
          alt: 'progressive web application',
          title: "In the Past...",
          text: "When browsers were much less capable than today, and JavaScript\n      performance was poor, every page was coming from a server. Every time\n      you clicked something, a new request was made to the server and the\n      browser subsequently loaded the new page.",
          secondTitle: "Forward in Time",
          secondText: "A Single Page Application feels much faster to the user, because instead\n      of waiting for the client-server communication to happen, and wait for\n      the browser to re-render the page, you can now have instant feedback."
        }, {
          id: 2,
          image: "/assets/pwa-fast.png",
          alt: 'progressive web application',
          title: "Security",
          text: "When based software need updating, every single device in which the\n      application is installed will need individually updating. Compare this\n      with a web based application, where a security or functionality update\n      can be rolled out to every version of the web application with zero\n      downtime, giving users instant access to the updated version of the app.",
          secondTitle: "Efficiency",
          secondText: "In addition to making the experience faster to the user, the server will\n      consume less resources because you can focus on providing an efficient\n      API instead of building the layouts server-side."
        }, {
          id: 3,
          image: "/assets/pwa-engaging.png",
          alt: 'progressive web application',
          title: "Customization",
          text: "As a custom web application is made specifically to your business needs,\n      it\u2019s completely flexible and scalable to your business\u2019s demands and\n      growth. By only having features and functions which are relevant to your\n      business, you\u2019ll reduce training time and can add functionality as your\n      business grows.",
          secondTitle: "Scalability",
          secondText: "This makes it ideal if you also build a mobile app on top of the API, as\n      you can completely reuse your existing server-side code. Single Page\n      Applications are easy to transform into Progressive Web Apps, which in\n      turn enables you to provide local caching and to support offline\n      experiences for your services."
        }];
      }

      _createClass(TechnologyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TechnologyComponent;
    }();

    TechnologyComponent.ɵfac = function TechnologyComponent_Factory(t) {
      return new (t || TechnologyComponent)();
    };

    TechnologyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TechnologyComponent,
      selectors: [["app-technology"]],
      decls: 5,
      vars: 1,
      consts: [[1, "intro"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", 3, "src", "alt"]],
      template: function TechnologyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The technology and some key components of how the application works are different, but the philosophy is always the same. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TechnologyComponent_mat_card_4_Template, 11, 6, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technologyList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(-120deg, #00c853, #76ff03);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n@media (min-width: 1000px) {\n  section[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n  }\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background: -webkit-linear-gradient(-120deg, #c40707, #bf5700);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDhEQUE4RDtFQUM5RCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbm1hdC1jYXJkLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEyMGRlZywgIzAwYzg1MywgIzc2ZmYwMyk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5pbnRybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEyMGRlZywgI2M0MDcwNywgI2JmNTcwMCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-technology",
          templateUrl: "./technology.component.html",
          styleUrls: ["./technology.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, for easier debugging, you can ignore zone related error
     * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
     * below file. Don't forget to comment it out in production mode
     * because it will have a performance impact when errors are thrown
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/thearchitect/Documents/Web Development Projects/Andoria/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map