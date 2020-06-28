import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 导出
export async function ProductExport(params) {
  return request(
    `/product/export?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 查询-产品种类-列表
export async function ProductList(params) {
  return request(
    `/product/list?${stringify(params, { arrayFormat: "comma" })}`
  );
}
