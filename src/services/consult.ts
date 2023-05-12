import type {
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  DoctorPage,
  FollowType
} from '@/types/consult'
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
