import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-区划编码-列表查询
export async function BmSzqhList(params) {
  return request(`/bmSzqh/list?${stringify(params, { arrayFormat: "comma" })}`);
}
