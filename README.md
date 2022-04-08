# 开始

```shell
$ npm i
$ npm start
```

# 照片墙文件

把照片文件放在`./public/img/`目录下，在`./src/reducer.js`中的`imgs`，`titles`，`descs`中配置完即可。


# React转Git

1. `npm run eject`

2. 在`./config/paths.js`里面把`buildPath`改为docs
> 注意是否env变量中存在BUILD_PATH

3. 将静态页面的js、css、文件等内容改为url形式，前缀加应用名称（git仓库名称）

4. 将`webpack.config.js`的`publicPath`改成`/${paths.appPrefix}/\`，同时在`paths.js`中添加`appPrefix`
