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
  PartialConsult
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
