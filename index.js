"use strict";
const Yapi = require("./yapi");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const prettier = require("prettier");
const { path2FunctionName } = require("./utils/templateData");
// 获取配置项
const CONFIGRUE_TXT = fs.readFileSync("./mock_config.json", "utf8");
const configrue = JSON.parse(CONFIGRUE_TXT);

// 获取模板 ejs
const content = fs.readFileSync(
    __dirname + configrue.templatePath || "./template/service.ejs",
    "utf8"
);

// 获取 yapi Json
const yapi = new Yapi(configrue);
yapi.getApiInfo().then((res) => {
    const fileList = {};
    // 根据 json，模板  生成 js Api文件内容
    Object.keys(res).forEach((item) => {
        fileList[item] = prettier.format(ejs.render(content, {
            data: res[item].map((item) => {
              const { req_query = [], req_params = [] } = item;
              return {
                ...item,
                funcName: path2FunctionName(item.path),
                query: req_query.map(item => item.name),
                params: req_params.map(item => item.name.replace(':', '')),
                path: item.path.split(':')[0]
              }
            }),
        }), { parser: "babel" });
        // 写入文件
        fs.writeFileSync(
            path.join(__dirname, `/dist/api/${item}.js`),
            fileList[item],
            "utf-8"
        );
      });
      console.log('生成完毕')
});

