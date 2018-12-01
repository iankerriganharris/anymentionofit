exports.id = "main";
exports.modules = {

/***/ "./src/modules/scanners/scanner.entity.ts":
/*!************************************************!*\
  !*** ./src/modules/scanners/scanner.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst frequency_entity_1 = __webpack_require__(/*! ../frequencies/frequency.entity */ \"./src/modules/frequencies/frequency.entity.ts\");\nlet Scanner = class Scanner {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Scanner.prototype, \"id\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Scanner.prototype, \"name\", void 0);\n__decorate([\n    typeorm_1.ManyToMany(type => frequency_entity_1.Frequency, { eager: true }),\n    typeorm_1.JoinTable(),\n    __metadata(\"design:type\", Array)\n], Scanner.prototype, \"frequencies\", void 0);\nScanner = __decorate([\n    typeorm_1.Entity()\n], Scanner);\nexports.Scanner = Scanner;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanner.entity.ts?");

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
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst scanner_entity_1 = __webpack_require__(/*! ./scanner.entity */ \"./src/modules/scanners/scanner.entity.ts\");\nconst frequencies_service_1 = __webpack_require__(/*! ../frequencies/frequencies.service */ \"./src/modules/frequencies/frequencies.service.ts\");\nlet ScannersService = class ScannersService {\n    constructor(scannersRepository, frequenciesService) {\n        this.scannersRepository = scannersRepository;\n        this.frequenciesService = frequenciesService;\n    }\n    async findAll(options) {\n        return await this.scannersRepository.find(options);\n    }\n    async findById(id) {\n        return await this.scannersRepository.findOne(id);\n    }\n    async create(Scanner) {\n        const frequenciesToScan = Scanner.filterFrequencies ?\n            await this.frequenciesService.findAll({\n                id: typeorm_2.In(Scanner.filterFrequencies)\n            }) : await this.frequenciesService.findAll();\n        const createdScanner = await this.scannersRepository.create(Scanner);\n        createdScanner.frequencies = frequenciesToScan;\n        const saved = await this.scannersRepository.save(createdScanner);\n        return saved;\n    }\n    async scan(id) {\n        return await this.scannersRepository.findOne(id);\n    }\n};\nScannersService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(scanner_entity_1.Scanner)),\n    __param(1, common_1.Inject(frequencies_service_1.FrequenciesService)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository,\n        frequencies_service_1.FrequenciesService])\n], ScannersService);\nexports.ScannersService = ScannersService;\n\n\n//# sourceURL=webpack:///./src/modules/scanners/scanners.service.ts?");

/***/ }),

/***/ "./src/modules/topics/topic.entity.ts":
/*!********************************************!*\
  !*** ./src/modules/topics/topic.entity.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst scanner_entity_1 = __webpack_require__(/*! ../scanners/scanner.entity */ \"./src/modules/scanners/scanner.entity.ts\");\nlet Topic = class Topic {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Topic.prototype, \"id\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Topic.prototype, \"name\", void 0);\n__decorate([\n    typeorm_1.ManyToMany(type => scanner_entity_1.Scanner),\n    typeorm_1.JoinTable(),\n    __metadata(\"design:type\", Array)\n], Topic.prototype, \"scanners\", void 0);\nTopic = __decorate([\n    typeorm_1.Entity()\n], Topic);\nexports.Topic = Topic;\n\n\n//# sourceURL=webpack:///./src/modules/topics/topic.entity.ts?");

/***/ })

};