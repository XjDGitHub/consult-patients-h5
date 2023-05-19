<script setup lang="ts">
import { uploadImage } from '@/services/consult'
import type { Image } from '@/types/consult'
import { Toast } from 'vant'
import type { UploaderAfterRead } from 'vant/lib/uploader/types'
import { ref } from 'vue'

defineProps<{
  disabled: boolean
}>()

// 底部操作组件，可以输入文字，触发 send-text 事件传出文字
// 问诊室组件，监听 send-text 事件接收文字
// 获取订单详情，需要使用医生ID，作为收信息人的标识
// 通过 socket.emit 的 sendChatMsg 发送文字给服务器
// 通过 socket.on 的 receiveChatMsg 接收发送成功或者医生发来的消息
// 展示消息

// 底部操作组件，可以上传图片，触发 send-image 事件传出图片对象
// 问诊室组件，监听 send-image 事件接收图片对象
// 通过 socket.emit 的 sendChatMsg 发送图片给服务器
// 展示消息

const text = ref<string>('')
const emit = defineEmits<{
  (e: 'sendText', text: string): void
  (e: 'sendImage', img: Image): void
}>()
const sendText = () => {
  emit('sendText', text.value)
  text.value = ''
}
const sendImage: UploaderAfterRead = async (data) => {
  if (Array.isArray(data)) return
  if (!data.file) return
  const t = Toast.loading('正在上传')
  const res = await uploadImage(data.file)
  t.clear()
  emit('sendImage', res.data)
}
</script>

<template>
  <div class="room-action">
    <van-field
      type="text"
      class="input"
      :border="false"
      placeholder="问医生"
      autocomplete="off"
      :disabled="disabled"
      v-model="text"
      @keyup.enter="sendText"
    ></van-field>
    <van-uploader :after-read="sendImage" :preview-image="false" :disabled="disabled">
      <cp-icon name="consult-img" />
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped>
.room-action {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 1;
  box-sizing: border-box;
  .input {
    background-color: var(--cp-bg);
    border: none;
    border-radius: 25px;
    margin-right: 10px;
    padding: 8px 15px;
  }
  .cp-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
