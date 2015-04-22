
$(function() {
	$.ajax({
		  url: 'http://weather.livedoor.com/forecast/webservice/json/v1?city=012010',
		  dataType: 'jsonp', // 追加
		  type: "GET",
		  success: function(res) {
		    console.log(res);
		  }
	});

//	$.getJSON("./json/api.json",function(json){
	$.getJSON("http://weather.livedoor.com/forecast/webservice/json/v1?city=012010",function(json){
		alert("JSON Data" + json.forecasts[0].date);
	});
})