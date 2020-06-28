'use strict'

const fs = require('fs');

// 获取配置项
// 获取模板
// 获取 swagger Json
// 根据 json，模板  生成 js Api文件

const CONFIGRUE = fs.readFileSync('./mock_config.json');
console.log(CONFIGRUE)