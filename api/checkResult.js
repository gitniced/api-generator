import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-抽查结果-列表
export async function CheckResultList(params) {
  return request(
    `/checkResult/list?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 详情-抽查结果
export async function CheckResultDetail(params) {
  return request(
    `/checkResult/detail?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 删除-抽查结果
export async function CheckResultDelete(params) {
  return request(
    `/checkResult/delete?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 详情-抽查结果-修改页面
export async function CheckResultToUpdate(params) {
  return request(
    `/checkResult/toUpdate?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 修改-抽查结果
export async function CheckResultUpdate(params) {
  return request(`/checkResult/update`, {
    methods: "POST",
    body: param,
  });
}

// 导入
export async function CheckResultImport(params) {
  return request(`/checkResult/import`, {
    methods: "POST",
    body: param,
  });
}

// 导出
export async function CheckResultExport(params) {
  return request(
    `/checkResult/export?${stringify(params, { arrayFormat: "comma" })}`
  );
}
