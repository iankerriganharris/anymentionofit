exports.id = "main";
exports.modules = {

/***/ "./src/modules/app.module.ts":
/*!***********************************!*\
  !*** ./src/modules/app.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst topics_module_1 = __webpack_require__(/*! ./topics/topics.module */ \"./src/modules/topics/topics.module.ts\");\nconst frequencies_module_1 = __webpack_require__(/*! ./frequencies/frequencies.module */ \"./src/modules/frequencies/frequencies.module.ts\");\nconst common_2 = __webpack_require__(/*! ./common */ \"./src/modules/common/index.ts\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst nest_winston_1 = __webpack_require__(/*! nest-winston */ \"nest-winston\");\nlet ApplicationModule = class ApplicationModule {\n    constructor(connection) {\n        this.connection = connection;\n    }\n};\nApplicationModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                ...common_2.databaseConfig[\"development\"],\n                entities: ['./**/*.entity{.ts,.js}'],\n                synchronize: true,\n            }),\n            topics_module_1.TopicsModule,\n            frequencies_module_1.FrequenciesModule,\n            nest_winston_1.WinstonModule.forRoot(common_2.winstonLogger),\n        ]\n    }),\n    __metadata(\"design:paramtypes\", [typeorm_2.Connection])\n], ApplicationModule);\nexports.ApplicationModule = ApplicationModule;\n\n\n//# sourceURL=webpack:///./src/modules/app.module.ts?");

/***/ }),

/***/ "./src/modules/frequencies/frequencies.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/frequencies/frequencies.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst frequencies_controller_1 = __webpack_require__(/*! ./frequencies.controller */ \"./src/modules/frequencies/frequencies.controller.ts\");\nconst frequencies_service_1 = __webpack_require__(/*! ./frequencies.service */ \"./src/modules/frequencies/frequencies.service.ts\");\nconst frequency_entity_1 = __webpack_require__(/*! ./frequency.entity */ \"./src/modules/frequencies/frequency.entity.ts\");\nlet FrequenciesModule = class FrequenciesModule {\n};\nFrequenciesModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forFeature([frequency_entity_1.Frequency])\n        ],\n        providers: [,\n            frequencies_service_1.FrequenciesService,\n        ],\n        controllers: [frequencies_controller_1.FrequenciesController],\n        exports: [\n            frequencies_service_1.FrequenciesService,\n        ],\n    })\n], FrequenciesModule);\nexports.FrequenciesModule = FrequenciesModule;\n\n\n//# sourceURL=webpack:///./src/modules/frequencies/frequencies.module.ts?");

/***/ })

};