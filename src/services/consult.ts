import type {
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  DoctorPage,
  FollowType,
  Image,
  TopDep,
  ConsultOrderPreParams,
  ConsultOrderPreData,
  PartialConsult,
  ConsultOrderItem,
  ConsultOrderListParams,
  ConsultOrderPage
} from '@/types/consult'
import type { Patient } from '@/types/user'
import { request } from '@/utils/request'

// 知识加载查询参数
export const getKnowledgePage = (parmars: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', parmars)

// 获取推荐关注的医生
export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)

//关注和取消关注的逻辑
export const followOrUnfollow = (id: string, type: FollowType) =>
  request('/like', 'POST', { id, type })

// 获取科室信息
export const getAllDep = () => request<TopDep[]>('/dep/all', 'GET')

// 图片上传
export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)
  return request<Image>('/upload', 'POST', fd)
}

// 拉取预支付订单信息
export const getConsultOrderPre = (params: ConsultOrderPreParams) =>
  request<ConsultOrderPreData>('/patient/consult/order/pre', 'GET', params)

// 获取病人信息
export const getPatientDetail = (id: string) => request<Patient>(`/patient/info/${id}`, 'GET')

//生成订单
export const createConsultOrder = (data: PartialConsult) =>
  request<{ id: string }>('/patient/consult/order', 'POST', data)

// 获取支付地址  0 是微信  1 支付宝
export const getConsultOrderPayUrl = (params: {
  paymentMethod: 0 | 1
  orderId: string
  payCallback: string
}) => request<{ payUrl: string }>('/patient/consult/pay', 'POST', params)

// 获取订单信息
export const getConsultOrderDetail = (orderId: string) =>
  request<ConsultOrderItem>('/patient/consult/order/detail', 'GET', { orderId })

// 查看处方
export const getPrescriptionPic = (id: string) =>
  request<{ url: string }>(`/patient/consult/prescription/${id}`, 'GET')

// 提交评价
export const evaluateConsultOrder = (data: {
  docId: string
  orderId: string
  score: number
  content: string
  anonymousFlag: 0 | 1
}) => request<{}>('/patient/order/evaluate', 'POST', data)

// 查询订单
export const getConsultOrderList = (params: ConsultOrderListParams) =>
  request<ConsultOrderPage>('/patient/consult/order/list', 'GET', params)

// 取消订单
export const cancelOrder = (id: string) => request(`/patient/order/cancel/${id}`, 'PUT')

//删除订单
export const deleteOrder = (id: string) => request(`/patient/order/${id}`, 'DELETE')
