"use strict";
const FetchJson = require("./fetch-mock");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const prettier = require("prettier");
const { first2UpperCase } = require("./utils");
// 获取配置项
const CONFIGRUE_TXT = fs.readFileSync("./mock_config.json", "utf8");
const configrue = JSON.parse(CONFIGRUE_TXT);

// 获取模板 ejs
const content = fs.readFileSync(
    __dirname + configrue.templatePath || "./template/service.ejs",
    "utf8"
);

// 获取 swagger Json
const fetchJson = new FetchJson(configrue);
fetchJson.getApiInfo().then((res) => {
    const fileList = {};
    // 根据 json，模板  生成 js Api文件内容
    Object.keys(res).forEach((item) => {
        fileList[item] = prettier.format(ejs.render(content, {
            data: res[item].map((item) => ({
                ...item,
                funcName: item.path
                    .split("/")
                    .map((str, idx) => idx === 0 ? str : first2UpperCase(str))
                    .join(""),
            })),
        }), { parser: "babel" });
        // 写入文件
        fs.writeFileSync(
            path.join(__dirname, `/api/${item}.js`),
            fileList[item],
            "utf-8"
        );
    });
});

console.log('生成完毕')
