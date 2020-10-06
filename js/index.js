// 将数据展示到页面中
function show(){
        // 得到的数据是数组，值是对象，对象里面有4个可用值分别是pd、title、price、avaliable
        axios.get(" http://localhost:3000/products").then(res=>{
        str="";
        res.data.forEach(ele => {
            str+=`
                <tr id="mybg">
                        <th class="col-md-1 text-center">
                            <input type="checkbox" value="">  
                        </th>
                        <th class="col-md-2 text-center">${ele.pd}</th>
                        <th class="col-md-3 text-center">${ele.title}</th>
                        <th class="col-md-2 text-center">${ele.price}</th>
                        <th class="col-md-2 text-center">${ele.avaliable}</th>
                        <th class="col-md-2 text-center wq-title">
                            <button type="button" class="btn revise" data-toggle="modal" data-target=".wq-add" data-id=${ele.id}>
                                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                                改
                            </button>
                        </th>
                </tr>
            `;
            });
        $("#mybody").prepend(str);
        // 点击修改按钮展示当前id的内容
        $(".revise").click(function(){
            
            var id=$(this).attr("data-id");
            axios.get("http://localhost:3000/products?id="+id).then(res=>{
                $("#myhd").val(res.data[0].pd);
                $("#mytitle").val(res.data[0].title);
                $("#myprice").val(res.data[0].price);
                $("#myaval").val(res.data[0].avaliable);
            });
            // 弹出层内容改变，保存改变(有点小问题，修改不再原位置上面改而是加id)
            $(".myalert input").each(ele=>{
                if($(".myalert input")[ele].change){
                    axios.patch("http://localhost:3000/products?id="+id).then(res=>{
                        id:id,
                        res.data[0][ele + 1]=$(".myalert input")[ele].change().val()
                    });
                }
            });
            
        });
        
    })   
}
// 添加数据
function Add(){
	// 添加功能(存在的问题：不能实时刷新要手动刷新)
    $("#mybtn").click(function(){
        // console.log($("#myhd").change().val());
        axios.post("http://localhost:3000/products",{
            pd:$("#myhd").change().val(),
            title:$("#mytitle").change().val(),
            price:$("#myprice").change().val(),
            avaliable:$("#myaval").change().val()
        });
    });		
}