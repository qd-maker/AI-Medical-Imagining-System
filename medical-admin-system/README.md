# 医疗后台管理系统

这是一个基于 React + Ant Design 开发的医疗后台管理系统，提供患者管理、病历查询和影像上传等功能。

## 功能特点

- 患者列表管理
- 病历查询系统
- 医学影像上传
- 响应式设计
- 中文本地化

## 技术栈

- React 18
- TypeScript
- Ant Design 5.x
- React Router 6
- Axios

## 开始使用

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm start
```

3. 构建生产版本：

```bash
npm run build
```

## 项目结构

```
src/
  ├── components/     # 公共组件
  ├── pages/         # 页面组件
  ├── layouts/       # 布局组件
  ├── services/      # API 服务
  ├── utils/         # 工具函数
  ├── App.tsx        # 应用入口
  └── index.tsx      # 项目入口
```

## 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规范
- 使用函数式组件和 Hooks
- 组件采用模块化设计

## 浏览器支持

- Chrome >= 80
- Firefox >= 78
- Safari >= 13
- Edge >= 80 