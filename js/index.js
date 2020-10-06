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
                            <button type="button" class="btn" data-toggle="modal" data-target=".wq-add">
                                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                                改
                            </button>
                        </th>
                </tr>
            `;
            });
        $("#mybody").prepend(str);
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