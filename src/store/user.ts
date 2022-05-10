import { defineStore } from "pinia";

// export const userUserStore = defineStore({
//   id: 'user', // id 必填
// })

// or 创建时候定义 ID

interface Person {
  name: string;
  age?: number;
}

export const userUserStore = defineStore('user', {
  // 必有的三个属性 

  // state  初始化的仓库
  // 问： state 为什么是箭头函数
  state: (): Person => {
    return {
      name: 'Yellow-sea',
      age: 123
    }
  },

  // getters 表示 在 Store 的计算属性
  getters: {
    // 计算属性
    // 对属性进行加工
    // 定义一个方法，并且具有返回值
    // TS定义必须要指定 返回值的类型
    firstName(state): string {
      // return state.name.split('-')[0]  // 使用 state方法
      return this.name.split('-')[0]    // 可以使用 this 访问
    },
    lastName(state): string {
      return state.name.split('-')[1]
    }
  },

  // 第三个属性
  actions: {
    // 进行异步 方法的调用,  和修改 state 的数据
    changeState() {
      console.log('changeState被调用了')
      this.age!++;
      this.name = this.name + "###########"
    },

    getProps(props: string) {
      console.log(props)
    }
  }
})
