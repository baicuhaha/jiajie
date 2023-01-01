import { observable, action } from 'mobx-miniprogram'
export default observable({
  // 被共享的数据
  token: 'Klaus',

  // 计算属性 
  // 一般情况下 计算属性不需要被设置
  // 只需要根据对应的依赖项进行计算即可
  // 所以在mobx-miniprogram中使用getter定义计算属性
  get doubleAge() {
    return this.age * 2
  },

  // 定义action方法 来修改共享的数据
  // 在mobx-miniprogram中修改共享状态的唯一方法只有通过action方法
  // 直接修改共享状态 会 静默失效
  
  // 为了避免和组件或页面中的方法命名冲突
  // 对应的action方法一般使用Action作为后缀名结尾
  
  // action中传入的方法 必须使用普通函数形式进行定义
  // 不可以使用箭头函数形式进行定义
  // 当使用普通函数形式定义的时候，aciton的回调函数再被调用的时候，会将当前store实例作为this值传入
  // 而使用箭头函数的时候，因为箭头函数内部不绑定this值，所以对应的回调函数中的this值将是undefined
  updateNameAction: action(function(name) {
    this.name = name
  }),

  updateAgeAction: action(function(age) {
    this.age = age
  })
})

