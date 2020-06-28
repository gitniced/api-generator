import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-主体管理-列表
export async function SubjectList(params) {
  return request(
    `/subject/list?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 详情-主体产品抽查-产品列表
export async function SubjectCplist(params) {
  return request(
    `/subject/cplist?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 查询-根据统一社会信用代码
export async function SubjectInfo(params) {
  return request(
    `/subject/info?${stringify(params, { arrayFormat: "comma" })}`
  );
}
