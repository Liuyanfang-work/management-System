# json-server
参考资料：https://github.com/typicode/json-server
1. cnpm install json-server -g（第一次安装）
2. 创建一个.json文件
注意：这个文件不能和项目在一个文件夹里面，因为我之前下载了nodemon（自动更新）
{
    "数据名称1":[
    {},{},{}
    ]
    "数据名称2":[
    {},{},{}
    ]
}
3. 在vscode里面将文件在资源管理器中显示，然后按住shift右键选择在此处打开Powershell窗口
4. 输入命令：json-server -w 文件名.json,创建接口完成
# axios
参考资料：http://www.axios-js.com/zh-cn/docs/
1. Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
2. 使用在html文件中引入<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
3.  方法
(1)取值
    A、axios.get("我的json-server接口/1")就可以获取到接口里面相应id的值。（1表示id，返回一个对象）
    B、axios.get("我的json-server接口?id=1")。(返回一个数组)
    C、axios.get("我的json-server接口"，{params:{price:100}})。(返回一个数组)
(2)增加值
    axios.post("我的json-server接口",{id：3,title:300})
(3)修改
    A、axios.put("我的json-server接口",{id:8}),修改全部
    B、axios.patch("我的json-server接口",{id:8}),修改局部
(4)删除
    axios.delete("我的json-server接口/10")
