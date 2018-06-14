//window.onload = getProvince;
window.onload = getProvinceList;

 
function displayProvince() {//将获取的数据动态增加至select
  if (request.readyState == 4) {
    if (request.status == 200) {
		var a=new Array;
		var b=request.responseText;//将PHP返回的数据赋值给b
		a=b.split(",");//通过","将这一数据保存在数组a中
		document.getElementById("sheng").length=1;
		var obj=document.getElementById("sheng");  
		 for(var i=0;i<a.length;i++) {
			obj.options.add(new Option(a[i],i+1)); //动态生成OPTION加到select中，第一个参数为Text,第二个参数为Value值.
		 }
    }
  }
}

 
function displayCity() {//将获取的数据动态增加至select
  if (request.readyState == 4) {
    if (request.status == 200) {
		var a=new Array;
		var b=request.responseText;
		a=b.split(",");
		document.getElementById("shi").length=1;//重新选择
		document.getElementById("xian").length=1;//重新选择
		if(document.getElementById("sheng").value!="province"){
			var obj=document.getElementById('shi');  
			for(i=0;i<a.length;i++) {
				obj.options.add(new Option(a[i], document.getElementById("sheng").value*100+i+1)); //ocument.getElementById("sheng").value*100+i+1对应的是市的ID。
			}
		}
    }
  }
}

function displayCounty() {//将获取的数据增加至select
  if (request.readyState == 4) {
    if (request.status == 200) {
		var a=new Array;
		var b=request.responseText;
		a=b.split(",");
		document.getElementById("xian").length=1;
		if(document.getElementById("sheng").value!="province"&&document.getElementById("shi").value!="city"){
			var obj=document.getElementById('xian');  
			for(i=0;i<a.length;i++) {
				obj.options.add(new Option(a[i],i+1001)); 
			}
	}
	}
  }
}

function xianChange(){
		var obj=document.getElementById('xian');  
		document.getElementById("areaid").value= obj.value;  
		document.getElementById("areaname").value= obj.options[obj.selectedIndex].text; 
}

function getXianList(cid){	 
		var obj = document.getElementById("shi");
		document.getElementById("cityid").value= obj.value;  
		document.getElementById("cityname").value= obj.options[obj.selectedIndex].text; 
		document.getElementById("areaid").value= "";  
		document.getElementById("areaname").value= ""; 

		/*生成url链接，根据地市id,获取区县列表*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=xian&ID=" + escape(cid);;
		/*使用xmlhttprequest技术运行页面*/
		var msg="";
		var xmlHttp = createXMLHttpRequest(); 
		xmlHttp.open("GET",url,true);
		
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4) {
				msg = xmlHttp.responseText;
				if (msg != "")	{

					var a=new Array;
					a=msg.split(",");
					document.getElementById("xian").length=1;
					var obj=document.getElementById("xian");  
					for(var i=0;i<a.length-1;i++) {
						obj.options.add(new Option(a[i+1],a[i])); //动态生成OPTION加到select中，第一个参数为Text,第二个参数为Value值.
						i++;
					}
					return true;
				} else {
					return false;
				}
			}
		}
		xmlHttp.send(null);
}

function getCityList(pid){	 
	var obj = document.getElementById("sheng");
	document.getElementById("provinceid").value= obj.value;  
	document.getElementById("provincename").value= obj.options[obj.selectedIndex].text; 
		document.getElementById("cityid").value= "";  
		document.getElementById("cityname").value= ""; 
		document.getElementById("areaid").value= "";  
		document.getElementById("areaname").value= ""; 

		/*生成url链接，根据省id,获取城市列表*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=city&ID=" + escape(pid);;
		/*使用xmlhttprequest技术运行页面*/
		var msg="";
		var xmlHttp = createXMLHttpRequest(); 
		xmlHttp.open("GET",url,true);
		
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4) {
				/*根据不同的返回值，在div标签中输出不同信息*/
				msg = xmlHttp.responseText;
				if (msg != "")	{
					/*密码核对正确，允许提交表单*/
					var a=new Array;
					a=msg.split(",");
					document.getElementById("shi").length=1;
					var obj=document.getElementById("shi");  
					for(var i=0;i<a.length-1;i++) {
						obj.options.add(new Option(a[i+1],a[i])); //动态生成OPTION加到select中，第一个参数为Text,第二个参数为Value值.
						i++;
					}

					return true;
				} else {
					//alert("密码不正确，请重新输入！");
					//document.frmpassword.oldpw.focus();
					return false;
				}
			}
		}
		xmlHttp.send(null);
}

function getProvinceList(){	 
		/*生成url链接，提交addscore.php增加行为积分*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=sheng";
		/*使用xmlhttprequest技术运行页面*/
		var msg="";
		var xmlHttp = createXMLHttpRequest(); 
		xmlHttp.open("GET",url,true);
		
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4) {
				/*根据不同的返回值，在div标签中输出不同信息*/
				msg = xmlHttp.responseText;
				if (msg != "")	{
					/*密码核对正确，允许提交表单*/
					var a=new Array;
					a=msg.split(",");
					document.getElementById("sheng").length=1;
					var obj=document.getElementById("sheng");  
					for(var i=0;i<a.length-1;i++) {
						obj.options.add(new Option(a[i+1],a[i])); //动态生成OPTION加到select中，第一个参数为Text,第二个参数为Value值.
						i++;
					}
					return true;
				} else {
					//alert("密码不正确，请重新输入！");
					//document.frmpassword.oldpw.focus();
					return false;
				}
			}
		}
		xmlHttp.send(null);
}

/*
*/
function createXMLHttpRequest() { 
	var xmlHttp; 
	try { 
		xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); 
	} catch(ex) { 
		try { 
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
		} catch(except) { 
			xmlHttp = false; 
		} 
	} 
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') { 
		xmlHttp = new XMLHttpRequest(); 
	} 
	return xmlHttp; 
}

