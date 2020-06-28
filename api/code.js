import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-电商平台-列表查询
export async function CodeBmDspt(params) {
  return request(`/code/bmDspt?${stringify(params, { arrayFormat: "comma" })}`);
}

// 查询-产品种类-列表查询
export async function CodeBmCpzl(params) {
  return request(`/code/bmCpzl?${stringify(params, { arrayFormat: "comma" })}`);
}
