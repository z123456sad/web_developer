/*
* @Author: ccccc
* @Date:   2018-03-05 01:47:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-05 16:54:23
*/

// var ajax = new XMLHttpRequest();
// ajax.open('post','js/city.js');
// ajax.onreadystatechange = function(){
// 	if(ajax.readystate == 4 && ajax.status ==200){	
// 		alert(ajax.responseText)
// 	}
// }
// ajax.send();
var $sel1 = $('.reservation select').eq(0);
var $sel2 = $('.reservation select').eq(1);
var $sel3 = $('.reservation select').eq(2);
// 载入默认省市
$.ajax({
     url:"js/citys.json",
     type:"POST",
     dataType:"json",
     success:function(data){
     	
     	for (var i = 0; i < data.provinces.length; i++) {
     		$sel1.append("<option value='"+data.provinces[i].provinceName+"'>"+data.provinces[i].provinceName+"</option>")
     	}	
     }
     });
// 根据一级查询二级城市
	$sel1.change(function(){
		$sel2.html('');
		$.ajax({
		     url:"js/citys.json",
		     type:"POST",
		     dataType:"json",
		     success:function(data){
		     	var s2 = $sel1.get(0).selectedIndex;
		     	console.log(data.provinces[s2].citys.length)

		     	for (var i = 0; i < data.provinces[s2].citys.length; i++) {
     				$sel2.append("<option value='"+data.provinces[s2].citys[i].citysName+"'>"+data.provinces[s2].citys[i].citysName+"</option>")
		     	}
		     }
		     });
	})
		


	

