
(function($, jsonPaperList) {
	jsonPaperList.createPaperList=function (num){
		var str = new Object();
		str.paperList=[];
		str.paperClassList=[];
		for(var i=0;i<num;i++){
			str.paperList[i]=new Object();
			str.paperList[i].paperId="123";	
			str.paperList[i].paperName="幸福";	
			str.paperList[i].paperDate="2015-04-06";	
			str.paperList[i].paperAuthor="陈陈";	
			str.paperList[i].paperAbstract="能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？";	
			str.paperList[i].paperContent="这是文章内容";	
			
			if(i%2){
				str.paperList[i].paperClass="学习";
			}else if(i%3){
				str.paperList[i].paperClass="娱乐";
			}else if(i%5){
				str.paperList[i].paperClass="游戏";
			}else{
				str.paperList[i].paperClass="其他";
			}
		}
		str.paperClassList[0]="学习";
		str.paperClassList[1]="娱乐";
		str.paperClassList[2]="游戏";
		str.paperClassList[3]="其他";
		
		
		return str;	
		
	};
	
	jsonPaperList.createPaperClassList=function (num){
		var str = new Object();
		
		str.paperClassList=[];
		
		str.paperClassList[0]="学习";
		str.paperClassList[1]="娱乐";
		str.paperClassList[2]="游戏";
		str.paperClassList[3]="其他";
		
		
		return str;	
		
	};
}(mui, window.jsonPaperList = {}));




function createPaperElement(paperId,paperName,paperDate,paperAuthor,paperAbstract){
	var paperElement = document.createElement("li");
	paperElement.className="mui-table-view-cell mui-media";
	var paperLink = document.createElement("a");
	paperElement.insertBefore(paperLink,paperElement.firstChild);
	paperLink.id = "paperId";
	paperLink.className="paperLink";
	var paperDiv = document.createElement("div");
	paperLink.insertBefore(paperDiv,paperLink.firstChild);
	paperDiv.className="mui-media-body";
	
	var innerHtml = paperName+"<br/>"+"<span style='color:#F0AD4E; font-size: 13px;'>作者：<span id='author' >"+
					paperAuthor+"</span></span><br/><span style='color:#F0AD4E;font-size: 13px;'>时间：<span id='author' >"+
					paperDate+"</span></span><p class='mui-ellipsis'>"+
					paperAbstract+"</p>";
	
	paperDiv.innerHTML=innerHtml;
	
	return paperElement;
	
//<li class="mui-table-view-cell mui-media">
//	<a id="1234" class="paperLink" href="javascript:;">
//		<div class="mui-media-body">
//			幸福<br/>  
//			<span style="color:#F0AD4E; font-size: 13px;">作者：<span id="author" >陈陈</span></span>
//			<br/> 
//			<span style="color:#F0AD4E;font-size: 13px;">时间：<span id="author" >2014-03-04</span></span>
//			<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
//		</div>
//	</a>
//</li>
}


(function($, jsonFileList) {
			jsonFileList.createFileList=function (num,n){
				var str = new Object();
				str.fileList=[];//存放详细的文件
				str.fileClassList=[];//存放文件类别
				for(var i=0;i<num;i++){
					str.fileList[i]=new Object();
					str.fileList[i].fileId=i;	
					str.fileList[i].fileName="文件"+i;	
					str.fileList[i].fileDate="2015-04-06";	
					str.fileList[i].fileUrl="http://documents-oss.oss-cn-qingdao.aliyuncs.com/36/taslp08.ppt.pdf";
					str.fileList[i].fileSize="20k";
					str.fileList[i].fileRemark="这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！这里是备注！";
					
					if(i%2==0){
						str.fileList[i].fileClass="学习";	
						str.fileList[i].fileType="file";
					}else if(i%3==0){
						str.fileList[i].fileClass="娱乐";	
						str.fileList[i].fileType="video";
					}else if(i%5==0){
						str.fileList[i].fileClass="工作";
						str.fileList[i].fileType="word";
					}else{
						str.fileList[i].fileClass="其他";	
						str.fileList[i].fileType="ppt";
					}
					
				}
				str.fileList[num-1].fileType="image";
				str.fileList[num-1].fileUrl="http://documents-oss.oss-cn-qingdao.aliyuncs.com/36/6c7d9e93jw1e5wlz1nw6xj20zk0sgwjg.jpg";
				
				str.fileClassList[0]="学习";	
				str.fileClassList[1]="娱乐";	
				str.fileClassList[2]="工作";	 
				str.fileClassList[3]="其他";	
				
				return str;	
				
			};
}(mui, window.jsonFileList = {}));

function refreshPaperDom(paperShowElement,paperClassElementList,jsonData){
	/*
	 * 函数有三个参数
	 * 1，paperShowElement：文件列表显示区域的element
	 * 2，fileClassElement：是一个数组，每个元素都是一个用于选择文件类的select元素
	 * 
	 * Dom更新包含两部分，第一部分是要根据json数据更新文件列表，第二部分是更新类别列表，类别列表有两个。
	 */
	var paperClassList=jsonData.paperClassList;//数组 
	var paperList=jsonData.paperList;//数组
	var li_element_array=new Array();
	
	//以下根据类别数，分别生成对应的显示区域
	for(var i=0;i<paperClassList.length;i++){
		//alert("145:"+i);
		var li = document.createElement("li");
		paperShowElement.appendChild(li);
		li.className="mui-table-view-cell mui-collapse ";
			var a = document.createElement("a");
			a.className="mui-navigate-right";
			a.href="#";
			a.innerHTML=paperClassList[i];
		li.appendChild(a,li.firstChild);
			var div = document.createElement("div");
			div.className="mui-collapse-content";
		li.appendChild(div);
		li_element_array[paperClassList[i]]=div;
	}
	
	//把每个具体的文件，根据其类别，放在对应的显示区
	for(var i=0;i<paperList.length;i++){
		var div = document.createElement("div");
		div.className="mui-table-view-cell mui-media";
			var div2 = document.createElement("div");
			div2.className="mui-media-body";
			div.appendChild(div2);
				var a = document.createElement("a");
				a.id=paperList[i].paperId;
				a.className="itemLink";
//				a.setAttribute("data-Type",paperList[i].fileType);
//				a.setAttribute("data-FileUrl",paperList[i].fileUrl);
//				a.setAttribute("data-FileRemark",paperList[i].fileRemark);
				//a.href=paperList[i].fileUrl;
				
				div2.appendChild(a);   
				
		
				var div3 = document.createElement("div");
				var str = paperList[i].paperName+"<br/>"+"<span style='color:#F0AD4E; font-size: 13px;'>时间：<span id='author' >"+
				paperList[i].paperDate+"</span></span><br/><span style='color:#F0AD4E;font-size: 13px;'> <span class='mui-col-xs-6'>"+
				paperList[i].paperContent+"</span></span>";
				
				div3.innerHTML=str;
				a.appendChild(div3);
//				alert(paperList[i].paperClass); 
		li_element_array[paperList[i].paperClass].appendChild(div);	
		
				
				 
		
	}
	
	//长按某项，执行该函数
			mui(".mui-media-body").on('longtap','.itemLink',function(){
			  //获取id
			  var id = this.getAttribute("id");
			  alert(this.id);
			  focusId=this.id;
			  mui('#mui-popover-longtapItem').popover('show',document.getElementById(this.id));
			}); 
			
			//单击某项，执行该函数
			mui(".mui-media-body").on('tap','.itemLink',function(){
			  focusId=this.id;
			  alert("205"+"tap");
			  
			  
			});  
	

}

function getPaperListByAjax(){
	var ajaxData = null;
	var stateText = localStorage.getItem('$state') || "{}";
	var state = JSON.parse(stateText);
	info={};
	info.name = state.name;
	 
	mui.ajax('http://139.129.34.134/share/mobile/getPaperList.do',{
				data:JSON.stringify(info),
				dataType:'json',//服务器返回json格式数据
				contentType: "application/json",
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	
				async:false,
				success:function(data){
					//alert(data.status);
					//服务器返回响应，根据响应结果，分析是否登录成功；
					mui.toast("获取PaperList成功");
					ajaxData =  data;
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					mui.toast("获取PaperList失败");
				},
				headers: { 
					'Access-Control-Allow-Headers':'X-Requested-With'
				}
			});	
	return ajaxData;
}

function sendNewPaperByAjax(paper){
	var stateText = localStorage.getItem('$state') || "{}";
	var state = JSON.parse(stateText);
	var blog ={};
	blog.name = paper.paperTitle;
	blog.content = paper.paperContent;
	blog.className = paper.paperClass;
	blog.author = state.name;
	mui.ajax('http://139.129.34.134/share/mobile/sendNewPaper.do',{
				data:JSON.stringify(blog),
				dataType:'json',//服务器返回json格式数据
				contentType: "application/json",
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	
				async:false,
				success:function(data){
					//alert(data.status);
					//服务器返回响应，根据响应结果，分析是否登录成功；
					mui.toast("上传成功");
				
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					mui.toast("上传失败");
				},
				headers: { 
					'Access-Control-Allow-Headers':'X-Requested-With'
				}
			});	
}
function sendReEditPaperByAjax(paper){
	var stateText = localStorage.getItem('$state') || "{}";
	var state = JSON.parse(stateText);
	var blog ={};
	blog.name = paper.paperTitle;
	blog.content = paper.paperContent;
	blog.className = paper.paperClass;
	blog.id = paper.paperId;
	blog.author = state.name;
	mui.ajax('http://139.129.34.134/share/mobile/sendReEditPaper.do',{
				data:JSON.stringify(paper),
				dataType:'json',//服务器返回json格式数据
				contentType: "application/json",
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	
				async:false,
				success:function(data){
					//alert(data.status);
					//服务器返回响应，根据响应结果，分析是否登录成功；
					mui.toast("上传成功");
				
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					mui.toast("上传失败");
				},
				headers: { 
					'Access-Control-Allow-Headers':'X-Requested-With'
				}
			});	
}

function addPaperClassByAjax(className){
	var stateText = localStorage.getItem('$state') || "{}";
	var state = JSON.parse(stateText);
	var jsonData = {};
	jsonData.username = state.name;
	jsonData.className = className;
	mui.ajax('http://139.129.34.134/share/mobile/addPaperClass.do',{
				data:JSON.stringify(jsonData),
				dataType:'json',//服务器返回json格式数据
				contentType: "application/json",
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	
				async:false,
				success:function(data){
					//alert(data.status);
					//服务器返回响应，根据响应结果，分析是否登录成功；
					mui.toast("上传成功");
				
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					mui.toast("上传失败");
				},
				headers: { 
					'Access-Control-Allow-Headers':'X-Requested-With'
				}
			});	
}

function deletePapersClassByAjax(deleteClassName){
	var stateText = localStorage.getItem('$state') || "{}";
	var state = JSON.parse(stateText);
	var jsonData = {};
	jsonData.username = state.name;
	jsonData.className = deleteClassName;
	mui.ajax('http://139.129.34.134/share/mobile/addPaperClass.do',{
				data:JSON.stringify(jsonData),
				dataType:'json',//服务器返回json格式数据
				contentType: "application/json",
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	
				async:false,
				success:function(data){
					//alert(data.status);
					//服务器返回响应，根据响应结果，分析是否登录成功；
					mui.toast("上传成功");
				
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					mui.toast("上传失败");
				},
				headers: { 
					'Access-Control-Allow-Headers':'X-Requested-With'
				}
			});	
}
//<div class="mui-table-view-cell mui-media">
//	<div id="123" class="mui-media-body">
//		<a id="1" class="itemLink" href="javascript:" onclick="tapIn(this.id)">
//		<div id="">
//			文件名<br/>  
//			<span style="color:#F0AD4E; font-size: 13px;">文件大小：<span id="author" >20k</span></span>
//			<br/> 
//			<span style="color:#F0AD4E;font-size: 13px;">时间：<span id="author" >2014-03-04</span></span>
//		</div>
//		</a>
//	</div> 
//</div>
							
//<li class="mui-table-view-cell mui-collapse ">
//	<a class="mui-navigate-right" href="#">学习</a>
//	<div class="mui-collapse-content">

//		<div class="mui-table-view-cell mui-media">
//			<div id="123" class="mui-media-body">
//				<a id="1" class="itemLink" href="javascript:" onclick="tapIn(this.id)">
//					<div id="">
//						幸福<br/>  
//						<span style="color:#F0AD4E; font-size: 13px;">作者：<span id="author" >陈陈</span></span>
//						<br/> 
//						<span style="color:#F0AD4E;font-size: 13px;">时间：<span id="author" >2014-03-04</span></span>
//						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
//					</div>
//				</a>
//			</div>					
//		</div>
//							<div class="mui-table-view-cell mui-media">
//								<div id="123" class="mui-media-body">
//									<a id="2" class="itemLink" href="javascript:" onclick="tapIn(this.id)">
//										<div id="">
//											幸福<br/>  
//											<span style="color:#F0AD4E; font-size: 13px;">作者：<span id="author" >陈陈</span></span>
//											<br/> 
//											<span style="color:#F0AD4E;font-size: 13px;">时间：<span id="author" >2014-03-04</span></span>
//											<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
//										</div>
//									</a>
//								</div>
//							
//							</div>
//						</div>
//					</li>