//index.js
//获取应用实例
const app = getApp();

/* Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickFn: function() {
    console.log(1111);
  },
  getuserinfo: function(data) {
    console.log(data);
  }
}) */

// Page({
//   data: {
//     show: false,
//   },
//   showPopup() {
//     this.setData({ show: true });
//   },
//   onClose() {
//     this.setData({ show: false });
//   },
// });

// Page({
//   data: {
//     date: '',
//     show: false,
//   },
//   onDisplay() {
//     this.setData({ show: true });
//   },
//   onClose() {
//     this.setData({ show: false });
//   },
//   formatDate(date) {
//     date = new Date(date);
//     return `${date.getMonth() + 1}/${date.getDate()}`;
//   },
//   onConfirm(event) {
//     console.log(event);
//     this.setData({
//       show: false,
//       date: this.formatDate(event.detail),
//     });
//   },
// });

// Page({
//   data: {
//     text: '',
//     show: false,
//   },
//   onDisplay() {
//     this.setData({
//       show: true,
//     });
//   },
//   onClose() {
//     this.setData({
//       show: false,
//     });
//   },
//   onConfirm(event) {
//     this.setData({
//       show: false,
//       text: `选择了${event.detail.length}个日期`,
//     });
//   },
// });

// Page({
//   data: {
//     date: '',
//     show: false,
//     minDate: new Date(2010, 0, 1).getTime(),
//     maxDate: new Date(2010, 0, 31).getTime(),
//   },
//   onDisplay() {
//     this.setData({
//       show: true,
//     });
//   },
//   onClose() {
//     this.setData({
//       show: false,
//     });
//   },
//   formatDate(date) {
//     date = new Date(date);
//     return `${date.getMonth() + 1}/${date.getDate()}`;
//   },
//   onConfirm(event) {
//     const [start, end] = event.detail;
//     this.setData({
//       show: false,
//       date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
//     });
//   },
// });

// Page({
//   data: {
//     formatter(day) {
//       const month = day.date.getMonth() + 1;
//       const date = day.date.getDate();

//       if (month === 5) {
//         if (date === 1) {
//           day.topInfo = '劳动节';
//         } else if (date === 4) {
//           day.topInfo = '五四青年节';
//         } else if (date === 11) {
//           day.text = '今天';
//         }
//       }

//       if (day.type === 'start') {
//         day.bottomInfo = '入住';
//       } else if (day.type === 'end') {
//         day.bottomInfo = '离店';
//       }

//       return day;
//     },
//     show: false,
//   },
//   onDisplay() {
//     this.setData({
//       show: true,
//     });
//   },
// });

// Page({
//   data: {
//     show: false,
//   },
//   onDisplay() {
//     this.setData({
//       show: true
//     })
//   },
//   onClose() {
//     this.setData({
//       show: false
//     })
//   }
// });

// Page({
//   data: {
//     checked: true,
//     activeIcon: '//img.yzcdn.cn/icon-active.png',
//     inactiveIcon: '//img.yzcdn.cn/icon-normal.png',
//   },

//   onChange(event) {
//     this.setData({
//       checked: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     result: ['a', 'b'],
//   },
//   onChange(event) {
//     this.setData({
//       result: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     list: ['a', 'b', 'c'],
//     result: ['a', 'b'],
//   },
//   onChange(event) {
//     this.setData({
//       result: event.detail,
//     });
//   },
//   toggle(event) {
//     const { index } = event.currentTarget.dataset;
//     const checkbox = this.selectComponent(`.checkboxes-${index}`);
//     checkbox.toggle()
//   },
//   noop() {}
// });

// Page({
//   data: {
//     minHour: 10,
//     maxHour: 20,
//     minDate: new Date().getTime(),
//     maxDate: new Date(2029, 10, 1).getTime(),
//     currentDate: new Date().getTime(),
//   },

//   onInput(event) {
//     this.setData({
//       currentDate: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     currentDate: new Date().getTime(),
//     minDate: new Date().getTime(),
//     formatter(type, value) {
//       if (type === 'year') {
//         return `${value}年`;
//       } else if (type === 'month') {
//         return `${value}月`;
//       }

//       return value;
//     },
//   },
//   onInput(event) {
//     this.setData({
//       currentDate: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     currentDate: new Date().getTime(),
//     minDate: new Date().getTime(),
//   },
//   onInput(event) {
//     this.setData({
//       currentDate: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     currentDate: '12:00',
//     filter(type, options) {
//       if (type === 'minute') {
//         return options.filter((option) => option % 5 === 0);
//       }
//       return options
//     },
//   },
//   onInput(event) {
//     this.setData({
//       currentDate: event.detail,
//     });
//   },
// });

// Page({
//   data: {
//     value: ''
//   },
//   onChange(event) {
//     console.log(this.data.value);
//   }
// })

Page({
  data: {
    username: '',
    password: '',
  },
  onClickIcon(event) {
    console.log(event);
  }
});
