# express-demo 使用nodejs 爬取喜欢的背景图图
## nodejs爬取这些美妞，你值得拥有， 😄😄😄😄😄
[![rLd6JS.md.png](https://s3.ax1x.com/2020/12/30/rLd6JS.md.png)](https://imgchr.com/i/rLd6JS)

## 使用方法

```shell
git clone https://github.com/qinyuanqiblog/express-demo.git
```

```shell
npm install
```

```js
 // bin/www  文件中修改配置
new Reptile({
    // 爬取的网站，目前只支持这个网站，😄
    reptileUrl: 'https://wallhaven.cc/hot?page=',
    // 本地保存的路径
    saveDir: 'E:/myExpressDownload/toplist4/',
    // 最大页数
    maxPage: 20,
})
```

```shell
npm start
```

## 更新记录
 * 2020-01-14：🎉🎉 支持爬取[wallpaperaccess.com](https://wallpaperaccess.com/search?q=one+piece)的图图,必须是搜索的链接才可以哦。例如： https://wallpaperaccess.com/search?q=one+piece, one+piece 其实是关键词，更改成你需要的关键词就好了
 * 2020-12-26：🎉🎉 初始化项目，支持爬取[wallhaven.cc](https://wallhaven.cc/toplist?page=2)的图图；例如  https://wallhaven.cc/toplist?page=2 这种链接的


## 思路
[nodejs 爬取喜欢的的背景图片-思否](https://segmentfault.com/a/1190000038665950)

[nodejs 爬取喜欢的的背景图片-幕布](https://mubu.com/doc/_77_RCP9GG)