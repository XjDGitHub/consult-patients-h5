import type { ConsultOrderItem, FollowType } from '@/types/consult'
import { cancelOrder, deleteOrder, followOrUnfollow, getPrescriptionPic } from '@/services/consult'
import { ref } from 'vue'
import { showFailToast, showImagePreview, showSuccessToast } from 'vant'
import { OrderType } from '@/enums'

export const useFollow = (type: FollowType) => {
  // 关注逻辑
  const loading = ref(false)
  const follow = async (item: { id: string; likeFlag: 0 | 1 }) => {
    loading.value = true
    try {
      await followOrUnfollow(item.id, type)
      item.likeFlag = item.likeFlag === 1 ? 0 : 1
    } finally {
      loading.value = false
    }
  }
  return { loading, follow }
}

// 查看处方
export const useShowPrescription = () => {
  const showPrescription = async (id?: string) => {
    if (id) {
      const res = await getPrescriptionPic(id)
      showImagePreview([res.data.url])
    }
  }
  return { showPrescription }
}

// 取消订单
export const useCancelOrder = () => {
  const loding = ref(false)
  const cancelConsultOrder = async (item: ConsultOrderItem) => {
    try {
      loding.value = true
      await cancelOrder(item.id)
      item.status = OrderType.ConsultCancel
      item.statusValue = '已取消'
      showSuccessToast('取消成功')
    } catch (error) {
      showFailToast('取消失败')
    } finally {
      loding.value = false
    }
  }
  return { loding, cancelConsultOrder }
}

// 删除订单
export const useDeleteOrder = (cb: () => void) => {
  const deleteLoading = ref(false)
  const deleteConsultOrder = async (item: ConsultOrderItem) => {
    try {
      deleteLoading.value = true
      await deleteOrder(item.id)
      showSuccessToast('删除成功')
      cb && cb()
    } catch (error) {
      showFailToast('删除失败')
    } finally {
      deleteLoading.value = false
    }
  }
  return { deleteLoading, deleteConsultOrder }
}
