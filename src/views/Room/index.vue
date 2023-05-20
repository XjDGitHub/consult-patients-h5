<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'
import { nextTick, onMounted, onUnmounted, provide, ref } from 'vue'
import { baseURL } from '@/utils/request'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import type { TimeMessages, Message } from '@/types/room'
import { MsgType, OrderType } from '@/enums'
import type { ConsultOrderItem, Image } from '@/types/consult'
import { getConsultOrderDetail } from '@/services/consult'
import dayjs from 'dayjs'
import { showToast } from 'vant'

const store = useUserStore()
const route = useRoute()

let socket: Socket
const list = ref<Message[]>([])
onMounted(() => {
  socket = io(baseURL, {
    // 用于身份认证
    auth: {
      token: `Bearer ${store.user?.token}`
    },
    query: {
      orderId: route.query.orderId
    }
  })
  socket.on('connect', () => {
    list.value = []
    // 建立连接成功
    console.log('连接成功')
  })
  socket.on('error', () => {
    // 错误异常消息
    console.log('error')
  })
  socket.on('disconnect', () => {
    // 已经断开连接
    console.log('disconnect')
  })
  socket.on('chatMsgList', ({ data }: { data: TimeMessages[] }) => {
    // console.log(data)
    const arr: Message[] = []
    data.forEach((item, i) => {
      if (i === 0) time.value = item.createTime
      arr.push({
        id: item.createTime,
        createTime: item.createTime,
        msgType: MsgType.Notify,
        msg: { content: item.createTime }
      }),
        arr.push(...item.items)
    })
    // 追加聊天记录到消息列表
    list.value.unshift(...arr)
    // console.log(arr)
    loding.value = false
    if (!data.length) {
      return showToast('没有聊天记录了')
    }
    nextTick(() => {
      if (initialMsg.value) {
        socket.emit('updateMsgStatus', arr[arr.length - 1].id)
        window.scrollTo(0, document.body.scrollHeight)
        initialMsg.value = false
      }
    })
  })
  // 状态改变
  socket.on('statusChange', async () => {
    const res = await getConsultOrderDetail(route.query.orderId as string)
    consult.value = res.data
  })
  // 发过消息，从后台接收数据
  socket.on('receiveChatMsg', async (msg) => {
    list.value.push(msg)
    await nextTick()
    socket.emit('updateMsgStatus', msg.id)
    window.scrollTo(0, document.body.scrollHeight)
  })
})
onUnmounted(() => {
  socket.close()
})
// 初始化需要订单信息，订单状态发送变化，需要更新订单信息
// 状态组件，根据状态展示对应信息
// 待接诊，绿色文字提示
// 问诊中，倒计时显示
// 已结束or已取消，显示问诊结束
// 底部操作组件，禁用和启用
// 订单信息
const consult = ref<ConsultOrderItem>()
onMounted(async () => {
  const res = await getConsultOrderDetail(route.query.orderId as string)
  consult.value = res.data
  console.log(consult.value)
  console.log(consult.value.status)
})

// 底部操作组件，可以输入文字，触发 send-text 事件传出文字
// 问诊室组件，监听 send-text 事件接收文字
// 获取订单详情，需要使用医生ID，作为收信息人的标识
// 通过 socket.emit 的 sendChatMsg 发送文字给服务器
// 通过 socket.on 的 receiveChatMsg 接收发送成功或者医生发来的消息
// 展示消息
// 发送文字消息
const sendText = (text: string) => {
  socket.emit('sendChatMsg', {
    from: store.user?.id,
    to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgText,
    msg: {
      content: text
    }
  })
}

// 底部操作组件，可以上传图片，触发 send-image 事件传出图片对象
// 问诊室组件，监听 send-image 事件接收图片对象
// 通过 socket.emit 的 sendChatMsg 发送图片给服务器
// 展示消息

const sendImage = (image: Image) => {
  socket.emit('sendChatMsg', {
    from: store.user?.id,
    to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgImage,
    msg: { picture: image }
  })
}

// 实现下拉刷新效果
// 记录每段消息的开始时间，作为下一次请求的开始时间
// 触发刷新，发送获取聊天记录消息
// 在接收聊天记录事件中
// 关闭刷新中效果
// 判断是否有数据？没有提示 没有聊天记录了
// 如果是初始化获取的聊天，需要滚动到最底部
const initialMsg = ref(true)
// 如果是第二，三...次获取消息,不需要滚动到底部
// 如果断开连接后再次连接，需要清空聊天记录

const loding = ref(false)
// 记录时间
const time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

const onRefresh = () => {
  //触发下拉
  socket.emit('getChatMsgList', 20, time.value, route.query.orderId)
}

// 评价需要医生id等信息 需要从consult （订单信息）中获取
provide('consult', consult)
// 成功后修改消息
const completeEva = (score: number) => {
  const item = list.value.find((item) => item.msgType === MsgType.CardEvaForm)
  if (item) {
    item.msgType = MsgType.CardEva
    item.msg.evaluateDoc = { score }
  }
}
provide('completeEva', completeEva)
// console.log(consult.value.status)
</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="医生问诊室" />
    <room-status :status="consult?.status" :countDown="consult?.countdown" />
    <room-action
      @sendText="sendText"
      @sendImage="sendImage"
      :disabled="consult?.status !== OrderType.ConsultChat"
    ></room-action>
    <van-pull-refresh v-model="loding" @refresh="onRefresh">
      <RoomMessage :list="list"></RoomMessage>
    </van-pull-refresh>
  </div>
</template>
<style lang="scss" scoped>
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>
