exports.id = "main";
exports.modules = {

/***/ "./src/modules/frequencies/abstracts/FrequencyApi.repository.ts":
false,

/***/ "./src/modules/frequencies/frequencies.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/frequencies/frequencies.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst frequencies_controller_1 = __webpack_require__(/*! ./frequencies.controller */ \"./src/modules/frequencies/frequencies.controller.ts\");\nconst frequencies_service_1 = __webpack_require__(/*! ./frequencies.service */ \"./src/modules/frequencies/frequencies.service.ts\");\nconst frequency_entity_1 = __webpack_require__(/*! ./frequency.entity */ \"./src/modules/frequencies/frequency.entity.ts\");\nlet FrequenciesModule = class FrequenciesModule {\n};\nFrequenciesModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forFeature([frequency_entity_1.Frequency])\n        ],\n        providers: [,\n            frequencies_service_1.FrequenciesService,\n        ],\n        controllers: [frequencies_controller_1.FrequenciesController],\n        exports: [\n            frequencies_service_1.FrequenciesService,\n        ],\n    })\n], FrequenciesModule);\nexports.FrequenciesModule = FrequenciesModule;\n\n\n//# sourceURL=webpack:///./src/modules/frequencies/frequencies.module.ts?");

/***/ }),

/***/ "./src/modules/frequencies/frequencyApi.service.ts":
false,

/***/ "./src/modules/scanners/scanners.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/scanners/scanners.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst scanners_controller_1 = __webpack_require__(/*! ./scanners.controller */ \"./src/modules/scanners/scanners.controller.ts\");\nconst scanners_service_1 = __webpack_require__(/*! ./scanners.service */ \"./src/modules/scanners/scanners.service.ts\");\nconst scanner_entity_1 = __webpack_require__(/*! ./scanner.entity */ \"./src/modules/scanners/scanner.entity.ts\");\nconst frequencies_module_1 = __webpack_require__(/*! ../frequencies/frequencies.module */ \"./src/modules/frequencies/frequencies.module.ts\");\nlet ScannersModule = class ScannersModule {\n};\nScannersModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forFeature([scanner_entity_1.Scanner]),\n            frequencies_module_1.FrequenciesModule\n        ],\n        providers: [scanners_service_1.ScannersService],\n        controllers: [scanners_controller_1.ScannersController],\n        exports: [scanners_service_1.ScannersService],\n    })\n], ScannersModule);\nexports.ScannersModule = ScannersModule;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanners.module.ts?");

/***/ })

};