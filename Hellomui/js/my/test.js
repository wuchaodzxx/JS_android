
(function($, jsonPaperList) {
	jsonPaperList.createPaperList=function (num){
		var str = new Object();
		str.paperList=[];
		for(var i=0;i<num;i++){
			str.paperList[i]=new Object();
			str.paperList[i].paperId="123";	
			str.paperList[i].paperName="幸福";	
			str.paperList[i].paperDate="2015-04-06";	
			str.paperList[i].paperAuthor="陈陈";	
			str.paperList[i].paperAbstract="能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？";	
		}
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
					str.fileList[i].fileUrl="www.baidu.com";
					str.fileList[i].fileSize="20k";
					if(i%2==0){
						str.fileList[i].fileClass="学习";	
					}else if(i%3==0){
						str.fileList[i].fileClass="娱乐";	
					}else if(i%5==0){
						str.fileList[i].fileClass="工作";	
					}else{
						str.fileList[i].fileClass="其他";	
					}
					
				}
				
				str.fileClassList[0]="学习";	
				str.fileClassList[1]="娱乐";	
				str.fileClassList[2]="工作";	 
				str.fileClassList[3]="其他";	
				
				return str;	
				
			};
}(mui, window.jsonFileList = {}));

function refreshDom(element,jsonData){
	var fileClassList=jsonData.fileClassList;//数组
	var fileList=jsonData.fileList;//数组
	var li_element_array=new Array();
	
	for(var i=0;i<fileClassList.length;i++){
		var li = document.createElement("li");
		element.appendChild(li);
		li.className="mui-table-view-cell mui-collapse ";
			var a = document.createElement("a");
			a.className="mui-navigate-right";
			a.href="#";
			a.innerHTML=fileClassList[i];
		li.appendChild(a,li.firstChild);
			var div = document.createElement("div");
			div.className="mui-collapse-content";
		li.appendChild(div);
		li_element_array[fileClassList[i]]=div;
	}
	
	for(var i=0;i<fileList.length;i++){
		var div = document.createElement("div");
		div.className="mui-table-view-cell mui-media";
			var div2 = document.createElement("div");
			div2.className="mui-media-body";
			div.appendChild(div2);
				var a = document.createElement("a");
				a.id=fileList[i].fileId;
				a.className="itemLink";
				a.href="javascript:";
				a.onclick="tapIn(this.id)";
				
				div2.appendChild(a);
				
				var div3 = document.createElement("div");
				var str = fileList[i].fileName+"<br/>"+"<span style='color:#F0AD4E; font-size: 13px;'>文件大小：<span id='author' >"+
				fileList[i].fileSize+"</span></span><br/><span style='color:#F0AD4E;font-size: 13px;'>时间：<span id='author' >"+
				fileList[i].fileDate+"</span></span>";
				
				div3.innerHTML=str;
				div2.appendChild(div3);
		li_element_array[fileList[i].fileClass].appendChild(div);	
		
				
				
		
	}
	
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