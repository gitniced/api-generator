import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-数据质量-列表
export async function DataQualityList(params) {
  return request(
    `/dataQuality/list?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 删除-数据质量管理
export async function DataQualityDelete(params) {
  return request(
    `/dataQuality/delete?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 查询
export async function DataQualityDetail(params) {
  return request(
    `/dataQuality/detail?${stringify(params, { arrayFormat: "comma" })}`
  );
}

// 更新
export async function DataQualityUpdate(params) {
  return request(
    `/dataQuality/update?${stringify(params, { arrayFormat: "comma" })}`
  );
}
