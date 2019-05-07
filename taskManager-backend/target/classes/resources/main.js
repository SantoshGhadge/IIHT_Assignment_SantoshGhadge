(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ParentTask.modal.ts":
/*!*************************************!*\
  !*** ./src/app/ParentTask.modal.ts ***!
  \*************************************/
/*! exports provided: ParentTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTask", function() { return ParentTask; });
var ParentTask = /** @class */ (function () {
    function ParentTask(parentId, parentTask) {
        this.parentId = parentId;
        this.parentTask = parentTask;
    }
    return ParentTask;
}());



/***/ }),

/***/ "./src/app/Task.modal.ts":
/*!*******************************!*\
  !*** ./src/app/Task.modal.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskId, task, priority, parentTask, startDate, endDate) {
        this.taskId = taskId;
        this.task = task;
        this.priority = priority;
        this.parentTask = parentTask;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    Task.prototype.Task = function () {
    };
    return Task;
}());



/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".range {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5nZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form name=\"form\" #f=\"ngForm\" novalidate>\n  <div class=\"container-fluid form-group\">\n      <br/>\n      <div><input type=\"hidden\" name=\"task_id\" [(ngModel)]=\"model.task_id\" #task_id=\"ngModel\"></div>\n      <div class=\"row\">\n          <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">Task</span></h5></div>\n              <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" maxlength=\"32\" pattern=\"[A-Za-z]{1,32}\" name=\"task\" [(ngModel)]=\"model.task\" #task=\"ngModel\"  [ngClass]=\"{ 'is-invalid': f.submitted && task.invalid }\"  required></div>\n              <div *ngIf=\"f.submitted && task.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"task.errors.required\">Task Name is required</div>\n            </div>\n          </div>\n           <br/>\n           <div class=\"row\">\n                  <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">Priority</span></h5></div>\n                      <div class=\"col-sm-3\"><input type=\"range\" class=\"range\" name=\"priority\" max=\"30\" min=\"1\" value=\"0\" [(ngModel)]=\"model.priority\" #priority=\"ngModel\" required ></div>\n           </div>       \n           <br/>\n           <div class=\"row\">\n                <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">Parent Task</span></h5></div>\n                    <div class=\"col-sm-3 form-group\" >\n                        <select id=\"id\" name=\"parentTask\"  class=\"form-control\" [(ngModel)]=\"model.parentTask\" #parentTask=\"ngModel\">\n                            <option value=\"\" [disabled]=\"true\">--Select a Parent Task--</option>\n                            <!-- <option [ngValue]=\"k\" *ngFor=\"let k of taskList\" [selected]=\"k.parentTask.parentTask == selectedParentVal\">  \n                                {{k.parentTask.parentTask ? k.parentTask.parentTask : k.task}}  \n                             </option> -->\n                             <option [ngValue]=\"k\" *ngFor=\"let k of taskList\" [selected]=\"k.task == selectedParentVal\">  \n                                {{k.task}}  \n                             </option>  \n                        </select>  \n                    </div>\n            </div>\n           <!-- <div class=\"row\">\n                  <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">Parent Task</span></h5></div>\n                      <div class=\"col-sm-3\"><input type=\"text\" [formControl]=\"taskFormGrp.controls['parentTask']\"></div>\n           </div> -->\n           <br/>\n           <div class=\"row\">\n                  <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">Start date</span></h5></div>\n                      <div class=\"col-sm-3\"><input type=\"date\" name=\"startDate\" [(ngModel)]=\"model.startDate\" #startDate=\"ngModel\" required ></div>\n           </div>\n           <br/>\n           <div class=\"row\">\n                  <div class=\"col-sm-2\"><h5><span class=\"badge badge-info \">End date</span></h5></div>\n                      <div class=\"col-sm-3\"><input type=\"date\" name=\"endDate\" [(ngModel)]=\"model.endDate\" #endDate=\"ngModel\" required ></div>\n           </div>\n           <br/>\n           <div class=\"row\">\n                  <div class=\"col-sm-2\"><span></span></div>\n                  <div class=\"col-sm-1.5\" *ngIf=\"addTaskFlag\"><input type=\"submit\" (click)=\"addTask(f.value)\" [(disabled)]=\"!f.form.valid\" value=\"Add Task\" class=\"btn btn-primary\"></div>\n                  <div class=\"col-sm-1.5\" *ngIf=\"updatetaskFlag\"><input type=\"submit\" (click)=\"updateTask(f.value)\" [(disabled)]=\"!f.form.valid\" value=\"Update Task\" class=\"btn btn-primary\"></div>\n                  <div class=\"col-sm-1\"><input type=\"submit\" (click)=\"reset()\" value=\"Reset\" class=\"btn btn-primary\"></div>\n            </div>\n      </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponenT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponenT", function() { return AddTaskComponenT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Task_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Task.modal */ "./src/app/Task.modal.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _ParentTask_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ParentTask.modal */ "./src/app/ParentTask.modal.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTaskComponenT = /** @class */ (function () {
    function AddTaskComponenT(taskService, fb, route, routedData) {
        var _this = this;
        this.taskService = taskService;
        this.route = route;
        this.routedData = routedData;
        this.model = {};
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
        this.addTaskFlag = true;
        this.updatetaskFlag = false;
        this.getParentList();
        this.routedData.params.subscribe(function (parameters) {
            _this.routedTask = null;
            _this.routedTask = JSON.parse(parameters['task']);
        });
        if (this.routedTask) {
            this.updatetaskFlag = true;
            this.addTaskFlag = false;
            this.model.task = this.routedTask.task;
            this.model.priority = this.routedTask.priority;
            this.model.startDate = this.pipe.transform(this.routedTask.startDate, 'yyyy-MM-dd');
            this.model.endDate = this.pipe.transform(this.routedTask.endDate, 'yyyy-MM-dd');
            this.model.parentTask = this.routedTask.parentTask;
            this.model.task_id = this.routedTask.task_id;
            this.selectedParentVal = this.routedTask.parentTask.parentTask;
        }
    }
    AddTaskComponenT.prototype.getParentList = function () {
        var _this = this;
        this.taskService.getParentTaskList().subscribe(function (data) {
            _this.taskList = data;
        });
    };
    AddTaskComponenT.prototype.addTask = function (form) {
        this.model = form;
        var parentTaskObj = null;
        if (this.model) {
            if (this.model.parentTask) {
                parentTaskObj = new _ParentTask_modal__WEBPACK_IMPORTED_MODULE_3__["ParentTask"](this.model.parentTask.task_id, this.model.parentTask.task);
            }
            else {
                parentTaskObj = new _ParentTask_modal__WEBPACK_IMPORTED_MODULE_3__["ParentTask"](null, null);
            }
            var taskObj = new _Task_modal__WEBPACK_IMPORTED_MODULE_1__["Task"](null, this.model.task, this.model.priority, parentTaskObj, this.model.startDate, this.model.endDate);
            this.taskService.createTask(taskObj).subscribe(function (data) { alert("Task created successfully."); });
        }
    };
    AddTaskComponenT.prototype.updateTask = function (form) {
        this.model = form;
        var parentTaskObj = null;
        if (this.model) {
            if (this.model.parentTask) {
                parentTaskObj = new _ParentTask_modal__WEBPACK_IMPORTED_MODULE_3__["ParentTask"](this.model.parentTask.task_id, this.model.parentTask.task);
            }
            else {
                parentTaskObj = new _ParentTask_modal__WEBPACK_IMPORTED_MODULE_3__["ParentTask"](null, null);
            }
            var taskObj = new _Task_modal__WEBPACK_IMPORTED_MODULE_1__["Task"](this.model.task_id, this.model.task, this.model.priority, parentTaskObj, this.model.startDate, this.model.endDate);
            this.taskService.updateTask(taskObj).subscribe(function (data) { alert("Task updated successfully."); });
        }
    };
    AddTaskComponenT.prototype.reset = function () {
        this.model = {};
    };
    AddTaskComponenT = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddTaskComponenT);
    return AddTaskComponenT;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\" style=\"text-align:left\">\n      <h2 style=\"text-align:left\">Task Manager</h2>\n      <ul class=\"nav nav-tabs justify-content-left\">\n      <br/>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" [routerLink]=\"['/addTask']\">Add Task</a> \n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" [routerLink]=\"['/viewTask']\">View Task</a>\n          </li>\n          </ul>\n          <div  class=\"tab-content bgclass\" style=\"text-align:left;height: 524px;width: 100%; overflow:auto; \">\n              <router-outlet></router-outlet> \n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tm-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "addTask", component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponenT"] },
    { path: "viewTask", component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__["ViewTaskComponent"] },
    { path: "updateTask/:task", component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponenT"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponenT"],
                _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__["ViewTaskComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, taskSearch, parentSearch, startDateSearch, endDateSearch, priorityFromSearch, priorityToSearch) {
        if (items && items.length) {
            return items.filter(function (it) {
                if (taskSearch && it.task.toLowerCase().indexOf(taskSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (parentSearch && it.parentTask.parentTask.toLowerCase().indexOf(parentSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (startDateSearch && it.startDate.toLowerCase().indexOf(startDateSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (endDateSearch && it.endDate.toLowerCase().indexOf(endDateSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (priorityFromSearch && priorityToSearch) {
                    if (it.priority >= parseInt(priorityFromSearch) && it.priority <= parseInt(priorityToSearch)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'arrayFilter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = '/api/tasks';
    }
    TaskService.prototype.extractData = function (res) {
        var content = res;
        return content || [{}];
    };
    TaskService.prototype.createTask = function (task) {
        return this.http.post(this.apiUrl, JSON.stringify(task), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
        //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.put(this.apiUrl + '/updateTask/' + task.taskId, JSON.stringify(task), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
        //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    };
    TaskService.prototype.getParentTaskList = function () {
        return this.http.get(this.apiUrl + '/getParentTaskList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
        //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    };
    TaskService.prototype.getParentTaskById = function (taskId) {
        return this.http.get(this.apiUrl + '/' + taskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
        //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    };
    TaskService.prototype.endTask = function (task) {
        return this.http.delete(this.apiUrl + '/' + task.task_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
        //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdGFzay92aWV3LXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container-fluid form-group\">\n      <br/>\n      <div class=\"row\">\n            <div class=\"col-sm-2\"><span>Task: </span></div> <div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" maxlength=\"32\" pattern=\"[A-Za-z]{1,32}\" name=\"task\" [(ngModel)] =\"taskSearch\"></div>\n            <div class=\"col-sm-2\"><span>Parent Task: </span></div><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" [(ngModel)] =\"parentSearch\"></div>\n      </div>\n           <br/>\n      <div class=\"row\">\n                  <div class=\"col-sm-1.2\"><span>Priority From: </span></div><div class=\"col-sm-1.2\"><input type=\"text\" class=\"form-control\" [(ngModel)] =\"priorityFromSearch\"></div>\n                  <div class=\"col-sm-1.2\"><span>Priority To: </span></div><div class=\"col-sm-1.2\"><input type=\"text\" class=\"form-control\" [(ngModel)] =\"priorityToSearch\"></div>\n                  <div class=\"col-sm-1.2\"><span>Start date: </span></div><div class=\"col-sm-1.2\"><input type=\"date\" class=\"form-control\" [(ngModel)] =\"startDateSearch\"></div>\n                  <div class=\"col-sm-1.2\"><span>End date: </span></div><div class=\"col-sm-1.2\"><input type=\"date\" class=\"form-control\" [(ngModel)] =\"endDateSearch\"></div>\n      </div>\n           <br/>\n  </div>\n  <br/>\n<table width=\"90%\" class=\"container-fluid form-group\">\n  <thead class=\"col-sm-2\">\n    <th>Task</th>\n    <th>ParentTask</th>\n    <th>Priority</th>\n    <th>Start Date</th>\n    <th>End Date</th>\n    <th></th>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let taskObj of taskList | arrayFilter : taskSearch:parentSearch:startDateSearch:endDateSearch:priorityFromSearch:priorityToSearch\">\n        <td>{{taskObj.task}}</td>\n        <td>{{taskObj.parentTask.parentTask || 'This task has no parent'}}</td>\n        <td>{{taskObj.priority}}</td>\n        <td>{{taskObj.startDate | date:'dd/M/yyyy'}} </td>\n        <td>{{taskObj.endDate | date:'dd/M/yyyy'}}</td>\n        <td><input type=\"button\" value=\"Edit\" (click)=\"editTask(taskObj)\" class=\"btn btn-primary\"></td>\n        <td><input type=\"button\" value=\"End Task\" (click)=\"endTask(taskObj)\" class=\"btn btn-primary\" ></td>\n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(taskService, route) {
        this.taskService = taskService;
        this.route = route;
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getParentTaskList().subscribe(function (data) {
            _this.taskList = data;
        });
    };
    ViewTaskComponent.prototype.getTaskList = function () {
        var _this = this;
        this.taskList = [];
        this.taskService.getParentTaskList().subscribe(function (data) {
            _this.taskList = data;
        });
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        this.taskService.endTask(task).subscribe(function (data) { alert("Task ended successfully."); });
        this.route.navigate(['/viewTask']);
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        this.route.navigate(['updateTask/' + JSON.stringify(task)]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ViewTaskComponent.prototype, "taskList", void 0);
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Kapil\IIHT_Assignments\taskManager\taskManager-ui\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map