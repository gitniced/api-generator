# api-generator
api-generator Api生成器

#### EJS 模板 参数
```js
  data: [
    {
      title,    // 接口名称
      method,   // 请求方式
      path,     //路径
      params, 
      query,
      body,
      funcName, // 方法名（ path 驼峰 ）
    }
  ]
```

#### ToDoList
  [x] 生成最基础api接口
  [x] 生成params, query, body的处理
  [ ] ts 的参数校验
  [ ] 更新策略
  [ ] 封装成脚手架