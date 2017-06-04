var app = getApp()
Page({
  data: {
    latitude: 0,//纬度 
    longitude: 0,//经度 
    speed: 0,//速度 
    accuracy: 16,//位置精准度 
    markers: [],
    covers: [],
  },
  onLoad: function () {
  },
  getlocation: function () {
    var markers = [{
      latitude: 23.053154,
      longitude: 113.383965,
      name: '喜地大厦',
      desc: '我的位置'
    }]
    var covers = [{
      latitude: 23.053154,
      longitude: 113.383965,
      iconPath: '/image/ic_position.png',
      rotate: 0
    }]
    this.setData({
      longitude: 113.383965,
      latitude: 23.053154,
      markers: markers,
      covers: covers,
    })
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = 23.053154
        var longitude = 113.383965
        var speed = res.speed
        var accuracy = res.accuracy
        console.log("latitude:" + latitude)
        console.log("longitude:" + longitude)
        console.log("speed:" + speed)
        console.log("accuracy:" + accuracy)
        wx.openLocation({
          latitude: 23.053154,
          longitude: 113.383965,
          scale: 28
        })
      }
    })
  }
})