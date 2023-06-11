# TaskList （全栈项目）
项目简介：

> 总项目 All in one 的其中一部分，支持未来计划制定、今日待办事项查看和闹钟提醒、以及计划类型进行数据可视化展示

后续改进：

> 可独立设计为桌面端应用

# 项目展示

- 今日待办展示

> 将总数据进行过滤渲染到该页面，并且可以支持勾选、删除等功能


![屏幕截图 2023-06-11 114635](https://github.com/classmate-xiaowen/taskList/assets/90508739/5be89d9a-1b0a-4de5-8b55-920abb380d66)

- 定制未来任务功能

> 通过二次封装 ElementUI 组件的 calendar 组件，扩展该组件的功能，支持动态定制添加、删除任务todo，美化原组件的 UI 设计

![屏幕截图 2023-06-11 114519](https://github.com/classmate-xiaowen/taskList/assets/90508739/8a43ccfd-91ce-4eca-9088-1f21b6f53d62)

![屏幕截图 2023-06-11 114420](https://github.com/classmate-xiaowen/taskList/assets/90508739/50d71065-2ad5-465d-b344-d480bda00ebf)

- 数据化展示

> 通过 Echarts 数据可视化插件将任务 todo 的类型分类展示（目前并未完善，更多数据展示有待开发）

![屏幕截图 2023-06-11 115200](https://github.com/classmate-xiaowen/taskList/assets/90508739/bf272012-b4b3-45ea-859d-6854c0791e79)


# 技术栈

Vite + Vue3 + ElementUI + TypeScript  + Nodejs + MySQL

# 亮点

二次封装 ElementUI 的 calendar 组件

# 配置环境

NodeJS 16.14.2（或者更高版本，低版本可能不适应项目的 Vite）

## 前后端调试运行

- 克隆项目

```js
git clone https://github.com/classmate-xiaowen/taskList.git
```

- 安装依赖

```js
pnpm i
```

- 调试运行

```js
pnpm run dev
```

- 项目打包

```js
pnpm run bulid
```





