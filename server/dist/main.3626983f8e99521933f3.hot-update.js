exports.id = "main";
exports.modules = {

/***/ "./src/modules/scanners/scanners.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/scanners/scanners.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst scanners_service_1 = __webpack_require__(/*! ./scanners.service */ \"./src/modules/scanners/scanners.service.ts\");\nlet ScannersController = class ScannersController {\n    constructor(scannersService) {\n        this.scannersService = scannersService;\n    }\n    async index(res) {\n        const Scanners = await this.scannersService.findAll();\n        return res.status(common_1.HttpStatus.OK).json(Scanners);\n    }\n    async one(id) {\n        return this.scannersService.findById(id);\n    }\n};\n__decorate([\n    common_1.Get(),\n    __param(0, common_1.Response()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], ScannersController.prototype, \"index\", null);\n__decorate([\n    common_1.Get(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], ScannersController.prototype, \"one\", null);\nScannersController = __decorate([\n    common_1.Controller('scanners'),\n    __metadata(\"design:paramtypes\", [scanners_service_1.ScannersService])\n], ScannersController);\nexports.ScannersController = ScannersController;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanners.controller.ts?");

/***/ }),

/***/ "./src/modules/scanners/scanners.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/scanners/scanners.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst scanners_controller_1 = __webpack_require__(/*! ./scanners.controller */ \"./src/modules/scanners/scanners.controller.ts\");\nconst scanners_service_1 = __webpack_require__(/*! ./scanners.service */ \"./src/modules/scanners/scanners.service.ts\");\nconst scanner_entity_1 = __webpack_require__(/*! ./scanner.entity */ \"./src/modules/scanners/scanner.entity.ts\");\nconst frequencies_module_1 = __webpack_require__(/*! ../frequencies/frequencies.module */ \"./src/modules/frequencies/frequencies.module.ts\");\nlet ScannersModule = class ScannersModule {\n};\nScannersModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forFeature([scanner_entity_1.Scanner]),\n            frequencies_module_1.FrequenciesModule\n        ],\n        providers: [scanners_service_1.ScannersService],\n        controllers: [scanners_controller_1.ScannersController],\n        exports: [scanners_service_1.ScannersService],\n    })\n], ScannersModule);\nexports.ScannersModule = ScannersModule;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanners.module.ts?");

/***/ }),

/***/ "./src/modules/scanners/scanners.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/scanners/scanners.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst scanner_entity_1 = __webpack_require__(/*! ./scanner.entity */ \"./src/modules/scanners/scanner.entity.ts\");\nconst frequencies_service_1 = __webpack_require__(/*! ../frequencies/frequencies.service */ \"./src/modules/frequencies/frequencies.service.ts\");\nlet ScannersService = class ScannersService {\n    constructor(scannersRepository, frequenciesService) {\n        this.scannersRepository = scannersRepository;\n        this.frequenciesService = frequenciesService;\n    }\n    async findAll(options) {\n        return await this.scannersRepository.find(options);\n    }\n    async findById(id) {\n        return await this.scannersRepository.findOne(id);\n    }\n    async create(Scanner) {\n        const frequenciesToScan = Scanner.filterFrequencies ?\n            await this.frequenciesService.findAll({\n                id: typeorm_2.In(Scanner.filterFrequencies)\n            }) : await this.frequenciesService.findAll();\n        const createdScanner = await this.scannersRepository.create(Scanner);\n        createdScanner.frequencies = frequenciesToScan;\n        const saved = await this.scannersRepository.save(createdScanner);\n        return saved;\n    }\n};\nScannersService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(scanner_entity_1.Scanner)),\n    __param(1, common_1.Inject(frequencies_service_1.FrequenciesService)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository,\n        frequencies_service_1.FrequenciesService])\n], ScannersService);\nexports.ScannersService = ScannersService;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanners.service.ts?");

/***/ }),

/***/ "./src/modules/topics/topics.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/topics/topics.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst topic_entity_1 = __webpack_require__(/*! ./topic.entity */ \"./src/modules/topics/topic.entity.ts\");\nconst scanners_service_1 = __webpack_require__(/*! ../scanners/scanners.service */ \"./src/modules/scanners/scanners.service.ts\");\nlet TopicsService = class TopicsService {\n    constructor(topicsRepository, scannersService) {\n        this.topicsRepository = topicsRepository;\n        this.scannersService = scannersService;\n    }\n    async findAll(options) {\n        return await this.topicsRepository.find(options);\n    }\n    async findById(id) {\n        return await this.topicsRepository.findOne(id);\n    }\n    async create(topic) {\n        const scanner = {\n            name: 'myScanner',\n            ...topic.scannerOptions\n        };\n        const createdScanner = await this.scannersService.create(scanner);\n        const createdTopic = await this.topicsRepository.create(topic);\n        createdTopic.scanners = [createdScanner];\n        const saved = await this.topicsRepository.save(createdTopic);\n        return saved;\n    }\n};\nTopicsService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(topic_entity_1.Topic)),\n    __param(1, common_1.Inject(scanners_service_1.ScannersService)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository,\n        scanners_service_1.ScannersService])\n], TopicsService);\nexports.TopicsService = TopicsService;\n\n\n//# sourceURL=webpack:///./src/modules/topics/topics.service.ts?");

/***/ })

};