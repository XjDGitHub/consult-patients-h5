// 为所有的组件添加类型识别提示
import CpNavBar from '@/components/CpNavBar.vue'
import CpIcon from '@/components/CpIcon.vue'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
import ConsultMore from '@/components/ConsultMore.vue'
import CpPaySheet from '@/components/CpPaySheet.vue'
declare module 'vue' {
  interface GlobalComponents {
    CpNavBar: typeof CpNavBar
    CpIcon: typeof CpIcon
    CpRadioBtn: typeof CpRadioBtn
    ConsultMore: typeof ConsultMore
    CpPaySheet: typeof CpPaySheet
  }
}
