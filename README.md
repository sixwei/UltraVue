# ultravue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#### 项目主要依赖

* axios vue-axios 一部请求
* vue-router  路由
* vuex   仓储
* vue-i18n  国际化
* monent    时间处理
* js-cookies  Cookie处理
* iview  样式
* echart  使用的是全局引入;
* less less-loader  less 依赖  npm install less less-loader --save

### 项目修改

* 前台请求后台数据  IP地址可配置
> 采用window  全局变量的方式，保存配置文件，把配置文件引入到  index.html中
  


* 导航和  路由 相同配置,
    导航的展示方式，去除掉在template中使用   if...else
    在请求权限的时候，根据权限和，前台配置文件，进行数据的重新组织，直接进行数据的渲染，
    权限保存全局状态中，避免直接url方式，访问到页面
    
* 多页应用的可能性，
    vue怎么处理多页应用，在多页应用中怎么设置，部署，程序入口，全局的  store，session，cookie，是否保持不变；    
