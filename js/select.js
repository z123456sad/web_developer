/*
* @Author: ccccc
* @Date:   2018-03-05 02:46:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-05 13:18:45
*/
$.fn.SelectCity = function(){
	// 查找三个下拉框
	$sel1 = this.find('select').eq(0);
	$sel2 = this.find('select').eq(1);
	$sel3 = this.find('select').eq(2);

	// 省级下拉框插入数据
	$.each(cities,function(index){
		$sel1.append("<option value='"+index+"'>"+index+"</option>");
	});
	// 根据省级查找市级
	
	$sel1.change(function(){

		var s = cities[this.value];
		$sel2.html('');
		$.each(s,function(index){
			$sel2.append("<option value='"+index+"'>"+index+"</option>");
			
		})

		$sel2.change();

	})

	// 根据市级查询
	$sel2.change(function(){
		var q = (cities[$(this).prev().val()])[this.value];
		$sel3.html('');
		$.each(q,function(index){
			$sel3.append("<option value='"+q[index]+"'>'"+q[index]+"</optin>");
		})
		
	})
	

	
}