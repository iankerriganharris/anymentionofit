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

/***/ })

};