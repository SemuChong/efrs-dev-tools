# efrs-dev-tools

> efrs研发运维工具

## 一期功能（原型）

``` bash
1、投产支持-联系人名单，点击手机号弹出手机拨号
2、投产验证点清单
```

For a detailed explanation on how things work, check out the [guide](https://mp.weixin.qq.com/wxopen) and [docs for 微信小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html).

请在根目录下新建`project.config.json`：
``` bash
{
	"description": "项目配置文件。",
	"packOptions": {
		"ignore": []
	},
	"setting": {
		"urlCheck": true,
		"es6": true,
		"postcss": true,
		"minified": true,
		"newFeature": true
	},
	"compileType": "miniprogram",
	"libVersion": "2.0.9",
	"appid": "项目的appid",
	"projectname": "项目的名称",
	"isGameTourist": false,
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"game": {
			"currentL": -1,
			"list": []
		},
		"miniprogram": {
			"current": -1,
			"list": []
		}
	}
}


```