const request = require("request");
const url = require("url");
const qs = require("qs");
const util = require("util");
const { forEachSync } = require("../utils");

const httpGet = util.promisify(request.get);
const interf = {
    getList: "/api/interface/list",
    getListMenu: "/api/interface/list_menu",
    getDetails: "/api/interface/get",
};

const options = {
    headers: {
        Cookie: [
            "_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjI2LCJpYXQiOjE1OTMzMTQ0NzUsImV4cCI6MTU5MzkxOTI3NX0.7gwrXLH4L3OcYtZ8X-3ykGymEtMiDg42OS0GILLHrm0",
            "_yapi_uid=26",
        ],
    },
};

/**
 * 获取 Yapi Json
 */
class Yapi {
    constructor(config) {
        const urlObj = url.parse(config.originUrl);
        this.info = {
            project_id: urlObj.path.split("/")[2],
            base_url: `${urlObj.protocol}//${urlObj.host}`,
        };
        console.log(urlObj);
    }

    // 获取api列表
    async getApiListSync() {
        const { project_id, base_url } = this.info;
        const query = qs.stringify({
            project_id,
            page: 1,
            limit: 10000,
        });
        const result = await httpGet(
            `${base_url}${interf.getList}?${query}`,
            options
        )
            .then((res) => {
                if (res.statusCode === 200) {
                    return JSON.parse(res.body);
                } else {
                    console.error(res.statusMessage);
                }
            })
            .catch((err) => {
                console.error(err);
            });
        return result;
    }

    // 获取api分类列表
    async getListMenuSync() {
        const { project_id, base_url } = this.info;
        const query = qs.stringify({
            project_id,
            page: 1,
            limit: 10000,
        });
        const result = await httpGet(
            `${base_url}${interf.getListMenu}?${query}`,
            options
        )
            .then((res) => {
                if (res.statusCode === 200) {
                    return JSON.parse(res.body);
                } else {
                    console.error(res.statusMessage);
                }
            })
            .catch((err) => {
                console.error(err);
            });
        return result;
    }

    // 获取单个接口信息
    async getDetailsSync(id) {
        const { base_url } = this.info;
        const query = qs.stringify({ id });
        const result = await httpGet(
            `${base_url}${interf.getDetails}?${query}`,
            options
        )
            .then((res) => {
                if (res.statusCode === 200) {
                    return JSON.parse(res.body);
                } else {
                    console.error(res.statusMessage);
                }
            })
            .catch((err) => {
                console.error(err);
            });
        return result;
    }

    async getApiInfo() {
        return this.getListMenuSync().then(async (res) => {
            const apiMenu = {};

            await forEachSync(res.data, async (item) => {
                await forEachSync(item.list, async (apiInfo) => {
                    await this.getDetailsSync(apiInfo._id).then(response => {
                        const info = response.data;
                        const sort = info.path.split("/")[1];
                        apiMenu[sort] = apiMenu[sort]
                        ? [...apiMenu[sort], info]
                        : [info];
                    });
                });
            });
            return apiMenu;
        });
    }
}

module.exports = Yapi;
