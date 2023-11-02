* [json-server](https://github.com/typicode/json-server)





# 全局安装

```bash
# 命令
$ pnpm install -g json-server

# 报错
ERR_PNPM_NO_GLOBAL_BIN_DIR  Unable to find the global bin directory

Run "pnpm setup" to create it automatically, or set the global-bin-dir setting, or the PNPM_HOME env variable. The global bin directory should be in the PATH.

# 原因
pnpm升级了

# 解决
$ pnpm setup
$ source /Users/qiyeyun/.zshrc
```

```bash
# 验证
$ json-server -v                                                                                                                                                                                 
0.17.3
```



# 初体验

Install JSON Server

```
npm install -g json-server
```



Create a `db.json` file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```



Start JSON Server

```
json-server --watch db.json
```

Now if you go to http://localhost:3000/posts/1, you'll get

```
{ "id": 1, "title": "json-server", "author": "typicode" }
```



## 实操

![](images/001.png)

```shell
$ json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...



GET /posts 200 10.225 ms - 77
GET /profile 200 4.043 ms - 24
GET /db 200 0.428 ms - 243
GET /__rules 404 2.619 ms - 2
GET /comments 200 3.295 ms - 68
```









