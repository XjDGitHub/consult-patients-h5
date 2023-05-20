<script setup lang="ts">
import type { ConsutlType } from '@/enums'
import { getConsultOrderList } from '@/services/consult'
import type { ConsultOrderItem, ConsultOrderListParams } from '@/types/consult'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ConsultItem from './ConsultItem.vue'

const props = defineProps<{
  type: ConsutlType
}>()
const params = ref<ConsultOrderListParams>({
  type: props.type,
  current: 1,
  pageSize: 5
})
const loding = ref(false)
const finished = ref(false)
const list = ref<ConsultOrderItem[]>([])
const onload = async () => {
  const res = await getConsultOrderList(params.value)
  loding.value = false
  console.log(res)
  list.value?.push(...res.data.rows)
  if (params.value.current < res.data.pageTotal) {
    params.value.current++
  } else {
    finished.value = true
  }
}

// 删除数据在list
const onDelete = (id: string) => {
  list.value = list.value.filter((item) => item.id !== id)
  if (!list.value.length) onload()
}
const router = useRouter()
</script>

<template>
  <div class="consult-list">
    <van-list
      v-model:loading="loding"
      :finished="finished"
      finished-text="没有更多了"
      @load="onload"
    >
      <consult-item @on-delete="onDelete" v-for="item in list" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.consult-list {
  padding: 10px 15px;
}
</style>
