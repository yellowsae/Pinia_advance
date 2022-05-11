import { defineStore } from "pinia"

interface ListPage<T> {
  TestList: Array<T>
}

export const InfoStore = defineStore('info', {
  state: (): ListPage<string> => {
    return {
      TestList: ['test1', 'test2', 'test3']
    }
  }
})
