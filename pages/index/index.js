var API_URL = 'https://api.douban.com/v2/movie/top250'
Page({
  data: { 
  	title:"加载中...",
    movies:[]
   },
   onLoad:function(){
    var that = this;
   	wx.showToast({
        title:"加载中...",
        icon:"loading",
        duration:5000
   	});
   	wx.request({
   		url: API_URL,
   		data: {},
   		header:{
   			'Content-Type': 'json'
   		},
   		success:function(res){
   			wx.hideToast();
   			var data = res.data;
   			console.log(data);
   			that.setData({
                title:data.title,
                movies:data.subjects
   			});
        
   		}
   	});
   }
})
