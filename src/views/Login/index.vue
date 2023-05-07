<template>
  <div class="login-page">
    <CpNavBar rightText="注册" @click-right="$router.push('/register')"></CpNavBar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>{{ isPass ? '密码登录' : '验证码登录' }}</h3>
      <a href="javascript:;" @click="isPass = !isPass">
        <span>{{ isPass ? '短信验证码登录' : '密码登录' }}</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="login">
      <van-field
        name="mobile"
        v-model="mobile"
        :rules="mobileRules"
        type="tel"
        placeholder="请输入手机号"
      ></van-field>
      <van-field
        v-if="isPass"
        v-model="password"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        placeholder="请输入密码"
      >
        <template #button>
          <cp-icon @click="show = !show" :name="`login-eye-${show ? 'on' : 'off'}`"></cp-icon>
        </template>
      </van-field>
      <van-field v-else v-model="code" :rules="codeRules" placeholder="请输入验证码">
        <template #button>
          <span class="btn-send" :class="{ active: time > 0 }" @click="send">
            {{ time > 0 ? `${time}s后再次发送` : '发送验证码' }}
          </span>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="agree">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button block native-type="submit" round type="primary">登 录</van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mobileRules, passwordRules, codeRules } from '@/utils/rules'
import { showFailToast, showSuccessToast, showToast, type FormInstance } from 'vant'
import { ref } from 'vue'
import { loginByPassword, sendMobileCode, loginByMobile } from '@/services/user'
import { useUserStore } from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'
import { onUnmounted } from 'vue'
// 控制单选框
const agree = ref(false)
// 表单数据
const mobile = ref('')
const password = ref('')
// 控制密码是否显示
const show = ref(false)
// 引入user store仓库
const store = useUserStore()
// 引入router route
const router = useRouter()
const route = useRoute()
// 短信 密码登录切换
const isPass = ref(true)
// 表单提交事件
const login = async () => {
  if (!agree.value) return showFailToast('请勾选用户条例')
  const res = isPass.value
    ? await loginByPassword(mobile.value, password.value)
    : await loginByMobile(mobile.value, code.value)
  console.log(res)
  store.setUser(res.data)
  // 如果有回跳地址，就会跳，没有就个人中心
  router.push((route.query.returnUrl as string) || '/user')
  console.log(1)
  showToast('登录成功')
}
// 发送验证码逻辑
const code = ref('')
const time = ref(0)
const form = ref<FormInstance | undefined>(undefined)
let timeId: number
const send = async () => {
  if (time.value > 0) return
  await form.value?.validate('mobile')
  const res = await sendMobileCode(mobile.value, 'login')
  console.log(res)
  showToast('发送成功')
  time.value = 60
  // 倒计时
  clearInterval(timeId)
  timeId = window.setInterval(() => {
    time.value--
    if (time.value <= 0) window.clearInterval(timeId)
  }, 1000)
}
// 退出该页面时清楚计时器
onUnmounted(() => {
  clearInterval(timeId)
})
</script>

<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 46px;
  }
  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    h3 {
      font-weight: normal;
      font-size: 24px;
    }
    a {
      font-size: 15px;
    }
  }
  &-other {
    margin-top: 60px;
    padding: 0 30px;
    .icon {
      display: flex;
      justify-content: center;
      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}
.van-form {
  padding: 0 14px;
  .cp-cell {
    height: 52px;
    line-height: 24px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .van-checkbox {
      a {
        color: var(--cp-primary);
        padding: 0 5px;
      }
    }
  }
  .btn-send {
    color: var(--cp-primary);
    &.active {
      color: rgba(22, 194, 163, 0.5);
    }
  }
}
</style>
