<script setup lang="ts">
import { ref } from 'vue'
import type { KnowledgeType, KnowledgeParams, Knowledge, KnowledgeList } from '@/types/consult'
import { getKnowledgePage } from '@/services/consult'
import KnowledgeCard from './KnowledgeCard.vue'
// 传入需要查询的类型
const props = defineProps<{
  type: KnowledgeType
}>()
const list = ref<KnowledgeList>([])
const loading = ref(false)
const finished = ref(false)
const params = ref<KnowledgeParams>({
  type: props.type,
  current: 1,
  pageSize: 5
})
const onLoad = async () => {
  // 模拟数据
  // setTimeout(() => {
  //   let data = [1, 2, 3, 4, 5]
  //   list.value.push(...data)
  //   loading.value = false
  //   if (list.value.length > 20) {
  //     finished.value = true
  //   }
  // }, 1000)

  //真实数据
  const res = await getKnowledgePage(params.value)
  list.value.push(...res.data.rows)
  loading.value = false
  if (params.value.current >= res.data.pageTotal) {
    finished.value = true
  } else {
    params.value.current++
  }
}
</script>

<template>
  <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <knowledge-card v-for="item in list" :key="item.id" :item="item"></knowledge-card>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
