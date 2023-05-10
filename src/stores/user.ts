import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    //   用户信息
    const user = ref<User>()
    //   添加用户信息
    const setUser = (u: User) => {
      user.value = u
    }
    //   删除用户信息
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  //   用户信息持久化存储
  {
    persist: true
  }
)
