<template>
  <van-nav-bar
    fixed
    left-arrow
    :title="title"
    :right-text="rightText"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
  </van-nav-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// props 外界传入的变量
const props = defineProps<{
  title?: string
  rightText?: string
  back?: () => void
}>()
// 组件自定义事件
const emit = defineEmits<{
  (e: 'click-right'): void
}>()
const router = useRouter()
const onClickLeft = () => {
  if (props.back) {
    return props.back()
  }
  // 此时会有一个问题，如果直接用地址栏访问，那么点击 < 会直接返回到浏览器页面
  // 所以需要判断一下是否存在本网站的历史记录
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/home')
  }
}
const onClickRight = () => {
  emit('click-right')
}
</script>

<style lang="scss" scoped>
::v-deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }
    &__text {
      font-size: 15px;
    }
  }
}
</style>
