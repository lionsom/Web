/*
 * 搜索歌曲
 *  API：https://autumnfish.cn/search?keywords=蔡依林
 */

var vm = new Vue({
  el: "#app",
  data: {
    query: "", // 搜索关键字
    musicList: [], // 搜索数据
    currentMusicURL: "", // 当前播放的url
    currentMVURL: "", // 当前播放的MVurl
    isShowMV: false, // 是否显示MV
  },
  created() {
    this.defaultSearch();
  },
  methods: {
    // 默认搜索
    defaultSearch: function () {
      this.query = "蔡依林";
      this.searchMusic();
    },
    // 关键字搜索歌曲
    searchMusic: function () {
      console.log(this.query);
      // 缓存this
      var that = this;

      axios
        .get("https://autumnfish.cn/search?keywords=" + this.query)
        .then(function (response) {
          if (response.data.code == 200) {
            console.log("请求成功啦啦啦");
            that.musicList = response.data.result.songs;
            console.log(response);
          } else {
            alert("接口传参错误");
            console.log(response);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    // 根据音乐id获取播放地址
    getMusicURL: function (musicId) {
      var that = this;
      axios
        .get("https://autumnfish.cn/song/url?id=" + musicId)
        .then(function (response) {
          if (response.data.code == 200) {
            console.log(response.data);
            that.currentMusicURL = response.data.data[0].url;
          } else {
            console.log(response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //
    getMV: function (mvId) {
      var that = this;
      axios
        .get("https://autumnfish.cn/mv/url?id=" + mvId)
        .then(function (response) {
          if (response.data.code == 200) {
            console.log(response.data.data.url);
            that.currentMVURL = response.data.data.url;
            that.isShowMV = true;
          } else {
            console.log(response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 隐藏
    hide: function () {
      this.isShowMV = false;
    },
  },
});
