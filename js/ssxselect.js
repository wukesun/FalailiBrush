//window.onload = getProvince;
window.onload = getProvinceList;

 
function displayProvince() {//����ȡ�����ݶ�̬������select
  if (request.readyState == 4) {
    if (request.status == 200) {
		var a=new Array;
		var b=request.responseText;//��PHP���ص����ݸ�ֵ��b
		a=b.split(",");//ͨ��","����һ���ݱ���������a��
		document.getElementById("sheng").length=1;
		var obj=document.getElementById("sheng");  
		 for(var i=0;i<a.length;i++) {
			obj.options.add(new Option(a[i],i+1)); //��̬����OPTION�ӵ�select�У���һ������ΪText,�ڶ�������ΪValueֵ.
		 }
    }
  }
}

 
function displayCity() {//����ȡ�����ݶ�̬������select
  if (request.readyState == 4) {
    if (request.status == 200) {
		var a=new Array;
		var b=request.responseText;
		a=b.split(",");
		document.getElementById("shi").length=1;//����ѡ��
		document.getElementById("xian").length=1;//����ѡ��
		if(document.getElementById("sheng").value!="province"){
			var obj=document.getElementById('shi');  
			for(i=0;i<a.length;i++) {
				obj.options.add(new Option(a[i], document.getElementById("sheng").value*100+i+1)); //ocument.getElementById("sheng").value*100+i+1��Ӧ�����е�ID��
			}
		}
    }
  }
}

function displayCounty() {//����ȡ������������select
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

		/*����url���ӣ����ݵ���id,��ȡ�����б�*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=xian&ID=" + escape(cid);;
		/*ʹ��xmlhttprequest��������ҳ��*/
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
						obj.options.add(new Option(a[i+1],a[i])); //��̬����OPTION�ӵ�select�У���һ������ΪText,�ڶ�������ΪValueֵ.
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

		/*����url���ӣ�����ʡid,��ȡ�����б�*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=city&ID=" + escape(pid);;
		/*ʹ��xmlhttprequest��������ҳ��*/
		var msg="";
		var xmlHttp = createXMLHttpRequest(); 
		xmlHttp.open("GET",url,true);
		
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4) {
				/*���ݲ�ͬ�ķ���ֵ����div��ǩ�������ͬ��Ϣ*/
				msg = xmlHttp.responseText;
				if (msg != "")	{
					/*����˶���ȷ�������ύ��*/
					var a=new Array;
					a=msg.split(",");
					document.getElementById("shi").length=1;
					var obj=document.getElementById("shi");  
					for(var i=0;i<a.length-1;i++) {
						obj.options.add(new Option(a[i+1],a[i])); //��̬����OPTION�ӵ�select�У���һ������ΪText,�ڶ�������ΪValueֵ.
						i++;
					}

					return true;
				} else {
					//alert("���벻��ȷ�����������룡");
					//document.frmpassword.oldpw.focus();
					return false;
				}
			}
		}
		xmlHttp.send(null);
}

function getProvinceList(){	 
		/*����url���ӣ��ύaddscore.php������Ϊ����*/
		var url ="http://www.hezhong.biz/wap/getSsxDetails.php?ACT=sheng";
		/*ʹ��xmlhttprequest��������ҳ��*/
		var msg="";
		var xmlHttp = createXMLHttpRequest(); 
		xmlHttp.open("GET",url,true);
		
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4) {
				/*���ݲ�ͬ�ķ���ֵ����div��ǩ�������ͬ��Ϣ*/
				msg = xmlHttp.responseText;
				if (msg != "")	{
					/*����˶���ȷ�������ύ��*/
					var a=new Array;
					a=msg.split(",");
					document.getElementById("sheng").length=1;
					var obj=document.getElementById("sheng");  
					for(var i=0;i<a.length-1;i++) {
						obj.options.add(new Option(a[i+1],a[i])); //��̬����OPTION�ӵ�select�У���һ������ΪText,�ڶ�������ΪValueֵ.
						i++;
					}
					return true;
				} else {
					//alert("���벻��ȷ�����������룡");
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

