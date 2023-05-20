<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'on-delete'): void
  (e: 'on-preview'): void
}>()

const showPopover = ref(false)
const actions = computed(() => [
  { text: '查看处方', disabled: props.disabled },
  { text: '删除订单' }
])
const onSelect = (actions: { text: string; disabled?: boolean }, i: number) => {
  if (i === 1) {
    emit('on-delete')
  }
  if (i === 0) {
    emit('on-preview')
  }
  //
}
</script>
<template>
  <van-popover
    placement="top-start"
    v-model:show="showPopover"
    :actions="actions"
    @select="onSelect"
  >
    <template #reference> 更多 </template>
  </van-popover>
</template>

<style lang="scss" scoped></style>
