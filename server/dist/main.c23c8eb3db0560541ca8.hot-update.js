exports.id = "main";
exports.modules = {

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