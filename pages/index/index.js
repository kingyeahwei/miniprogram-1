//index.js
//获取应用实例
// import Toast from '@vant/weapp/toast/toast';

// import Dialog from '@vant/weapp/dialog/dialog';
import Notify from '@vant/weapp/notify/notify'
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

// Page({
//   data: {
//     username: '',
//     phone: '',
//   },
//   onClickIcon(event) {
//     console.log(event);
//   }
// });

// Page({
//   data: {
//     columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
//   },
//   onConfirm(event) {
//     const {picker, value, index} = event.detail;
//     Toast(`当前值: ${value}, 当前索引: ${index}`)
//   },
//   onCancel() {
//     Toast("取消");
//   }
// })

// const citys = {
//   浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
//   福建: ['福州', '厦门', '莆田', '三明', '泉州'],
// };

// Page({
//   data: {
//     columns: [
//       {
//         values: Object.keys(citys),
//         className: 'column1',
//       },
//       {
//         values: citys['浙江'],
//         className: 'column2',
//         defaultIndex: 2,
//       },
//     ],
//   },
//   onChange(event) {
//     const { picker, value, index } = event.detail;
//     console.log(event.detail);
//     picker.setColumnValues(1, citys[value[0]]);
//   },
// });

// Page({
//   data: {
//     columns: [
//       {text: '杭州', disabled: true},
//       {text: '宁波'},
//       {text: '温州'},
//     ]
//   }
// })

// Page({
//   data: {
//     radio: '1',
//   },
//   onChange(event) {
//     console.log('1111');
//     this.setData({
//       radio: event.detail,
//     });
//   },
//   onClick(event) {
//     console.log(event);
//     const {name} = event.currentTarget.dataset;
//     this.setData({
//       radio: name
//     })
//   }
// });

// Page({
//   data: {
//     value: '',
//   },
//   onChange(event) {
//     this.setData({
//       value: event.detail,
//     });
//   },
//   onSearch() {
//     console.log('搜索' + this.data.value);
//   },
//   onClick() {
//     console.log('搜索' + this.data.value);
//   }
// });

// Page({
//   onChange(event) {
//     wx.showToast({
//       icon: "none",
//       title: `当前值: ${event.detail}`
//     })
//   }
// })

// Page({
//   data: {
//     currentValue: 50,
//   },
//   onDrag(event) {
//     this.setData({
//       currentValue: event.detail.value,
//     });
//   },
// });

// Page({
//   onChange(event) {
//     console.log(event.detail);
//   }
// })

// Page({
//   data: {
//     value: 1,
//   },
//   onChange(value) {
//     setTimeout(() => {
//       this.setData({
//         value:value.detail
//       })
//     }, 500);
//   }
// })

// Page({
//   data: {
//     checked: true
//   },
//   onChange({detail}) {
//     this.setData({
//       checked: detail
//     })
//   }
// })

// Page({
//   data: {
//     checked: true,
//   },
//   onChange({ detail }) {
//     wx.showModal({
//       title: '提示',
//       content: '是否开启开关?',
//       success: (res) => {
//         if (res.confirm) {
//           this.setData({ checked: detail });
//         }
//       },
//     });
//   },
// });

// Page({
//   data: {
//     show: false,
//     actions: [
//       { name: '选项', color: '#07c160', subname: '描述' },
//       { loading: true },
//       { name: '禁用选项', disabled: true },
//     ],
//   },
//   btnClick() {
//     this.setData({
//       show: !this.data.show
//     })
//   }
// });

// Page({
//   data: {
//     show: false,
//     actions: [
//       { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
//     ],
//   },
//   onClose() {
//     console.log('close');
//     this.setData({
//       show: false,
//     });
//   },
//   onGetUserInfo(e) {
//     console.log(e.detail);
//   },
//   btnClick() {
//     this.setData({
//       show: !this.data.show
//     })
//   }
// });

// Page({
//   data: {},
//   btnClick() {
//     // Dialog({
//     //   title: "标题",
//     //   message: "弹窗内容",
//     //   theme: "round-button"
//     // }).then(() => {
//     //   console.log('成功');
//     // })

//     Dialog.confirm({
//       title: "标题",
//       message: "弹窗内容",
//       asyncClose: true
//     }).then(() => {
//       setTimeout(() => {
//         Dialog.close()
//       }, 1000);
//     }).catch(() => {
//       Dialog.close()
//     })
//   }
// })

// Page({
//   data: {
//     show: true,
//   },
//   getUserInfo(event) {
//     console.log(event.detail);
//   },
//   onClose() {
//     console.log('close');
//     this.setData({ close: false });
//   },
// });

// Page({
//   data: {
//     option1: [
//       { text: '全部商品', value: 0 },
//       { text: '新款商品', value: 1 },
//       { text: '活动商品', value: 2 },
//     ],
//     option2: [
//       { text: '默认好评', value: 'a' },
//       { text: '好评排序', value: 'b' },
//       { text: '销量排序', value: 'c' },
//     ],
//     value1: 0,
//     value2: 'a',
//   },
// });

// Page({
//   data: {
//     switchTitle1: '包邮',
//     switchTitle2: '团购',
//     itemTitle: '筛选',
//     option1: [
//       {text: '全部商品', value: 0},
//       {text: '新款商品', value: 1},
//       {text: '活动商品', value: 2},
//     ],
//     value1: 0
//   },
//   onConfirm() {
//     this.selectComponent('#item').toggle()
//   },
//   onSwitch1Change({detail}) {
//     this.setData({
//       switch1: detail
//     })
//   },
//   onSwitch2Change({detail}) {
//     this.setData({
//       switch2: detail
//     })
//   }
// })

Page({
  data: {},
  btnClick() {
    // Notify('通知内容')
    // Notify({type: "primary", message: '通知内容'})
    // Notify({type: "success", message: '通知内容'})
    // Notify({type: "danger", message: '通知内容'})
    // Notify({type: "warning", message: '通知内容'})

    // Notify({
    //   message: '自定义颜色',
    //   color: '#ad0000',
    //   background: '#ffe1e1'
    // })

    Notify({
      message: '自定义节点选择器',
      duration: 1000,
      selector: '#custom-selector'
    })
  }
})