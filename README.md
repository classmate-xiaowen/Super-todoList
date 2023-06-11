# TaskList （全栈项目）
项目简介：

> 总项目 All in one 的其中一部分，支持未来计划制定、今日待办事项查看和闹钟提醒、以及计划类型进行数据可视化展示

后续改进：

> 可独立设计为桌面端应用

# 项目展示

- 今日待办展示

> 将总数据进行过滤渲染到该页面，并且可以支持勾选、删除等功能

![image-20230611114803363](C:\Users\xiaowen\AppData\Roaming\Typora\typora-user-images\image-20230611114803363.png)

- 定制未来任务功能

> 通过二次封装 ElementUI 组件的 calendar 组件，扩展该组件的功能，支持动态定制添加、删除任务todo，美化原组件的 UI 设计

![image-20230611114527357](C:\Users\xiaowen\AppData\Roaming\Typora\typora-user-images\image-20230611114527357.png)

![image-20230611114423982](C:\Users\xiaowen\AppData\Roaming\Typora\typora-user-images\image-20230611114423982.png)

- 数据化展示

> 通过 Echarts 数据可视化插件将任务 todo 的类型分类展示（目前并未完善，更多数据展示有待开发）

![image-20230611115206485](C:\Users\xiaowen\AppData\Roaming\Typora\typora-user-images\image-20230611115206485.png)

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





