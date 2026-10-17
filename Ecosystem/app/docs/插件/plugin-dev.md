# 插件：插件脚手架（plugin-dev）

***

生成新插件目录模板（`plugin.json` + `main.js` + `ui.js`），让生态可以**自我扩展**；支持只预览模板、不落盘。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `template` | `{ id, name, description, withUi }` | `{ id, files: { 文件名: 内容 } }` |
| `scaffold` | 同上 | `{ ok, id, dir, files[] }`（写入 `app/plugins/<id>/`） |
| `list` | — | `{ plugins[] }` |

## 安全约束

- `id` 必须匹配 `^[a-z][a-z0-9-]{1,40}$`；
- 目标目录已存在时**拒绝覆盖**（409）；
- 只写入 `app/plugins/` 下。

## 案例

```text
POST /api/v1/plugins/plugin-dev/command
{ "command": "scaffold", "args": { "id": "my-plugin", "name": "我的插件", "description": "示例", "withUi": true } }
```

生成：

```text
app/plugins/my-plugin/plugin.json
app/plugins/my-plugin/main.js
app/plugins/my-plugin/ui.js
```

重启后端后，插件中心即可看到新插件（清单扫描是启动时/按需进行的）。

***

## 相关

- UI：`plugins/plugin-dev/ui.js`（填写 → 预览 / 创建）
- 规范：`app/docs/插件/README.md`、`通信协议.md`
