<script setup lang="ts">
import { getPatientList, addPatient, updatePatient, delPatient } from '@/services/user'
import type { PatientList, Patient } from '@/types/user'
import { computed, onMounted, ref } from 'vue'
import { idCardRules, nameRules } from '@/utils/rules'
import { showConfirmDialog, type FormInstance, showSuccessToast } from 'vant'
// 病人列表
const list = ref<PatientList>([])
// 渲染该列表的函数
const loadList = async () => {
  const res = await getPatientList()
  list.value = res.data
}
// 渲染按钮的数据
const options = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]
// 默认性别
const gender = ref(0)
// 侧滑栏的打开与关闭
const show = ref(false)
const showPopup = (item?: Patient) => {
  // 如果传入值就回填 否则就清空
  if (item) {
    console.log(item)
    const { id, idCard, name, gender, defaultFlag } = item
    patient.value = { id, idCard, name, gender, defaultFlag }
  } else {
    patient.value = { ...initPatient }
  }
  show.value = true
}
// 重置表单
const initPatient: Patient = {
  name: '',
  idCard: '',
  gender: 1,
  defaultFlag: 0
}
const patient = ref<Patient>({ ...initPatient })
// 默认值是否需要转换
const defaultFlag = computed({
  get() {
    return patient.value.defaultFlag === 1 ? true : false
  },
  set(value) {
    patient.value.defaultFlag = value ? 1 : 0
  }
})
// 添加用户时保存对表单整体校验
const form = ref<FormInstance>()
const onSubmit = async () => {
  await form.value?.validate()
  // 校验通过
  // 身份证倒数第二位，单数是男，双数是女
  const gender = +patient.value.idCard.slice(-2, -1) % 2
  if (gender !== +patient.value.gender) {
    await showConfirmDialog({
      title: '温馨提示',
      message: '填写的性别和身份证号中的不一致\n您确认提交吗？'
    })
  }
  patient.value.id ? await updatePatient(patient.value) : await addPatient(patient.value)
  show.value = false
  loadList()
  patient.value.id ? showSuccessToast('编辑成功') : showSuccessToast('添加成功')
}
// 编辑患者
// 删除患者
const remove = async () => {
  if (patient.value.id) {
    await showConfirmDialog({
      title: '温馨提示',
      message: `您确认要删除 ${patient.value.name} 患者信息吗 ？`
    })
    await delPatient(patient.value.id)
    show.value = false
    loadList()
    showSuccessToast('删除成功')
  }
}
onMounted(() => {
  loadList()
})
</script>

<template>
  <div class="patient-page">
    <CpNavBar title="家庭档案"></CpNavBar>
    <div class="patient-list">
      <div class="patient-item" v-for="(item, i) in list" :key="i">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="id">{{ item.idCard.replace(/^(.{6}).+(.{4})$/, '\$1********\$2') }}</span>
          <span>{{ item.genderValue }}</span>
          <span>{{ item.age }}岁</span>
        </div>
        <div class="icon"><cp-icon name="user-edit" @click="showPopup(item)" /></div>
        <div class="tag" v-if="item.defaultFlag === 1">默认</div>
      </div>
      <div class="patient-add" v-if="list.length < 6" @click="showPopup()">
        <cp-icon name="user-add" />
        <p>添加患者</p>
      </div>
      <div class="patient-tip">最多可添加 6 人</div>
    </div>
    <van-popup v-model:show="show" position="right">
      <cp-nav-bar
        :title="patient.id ? '编辑患者' : '添加患者'"
        :back="() => (show = false)"
        rightText="保存"
        @click-right="onSubmit"
      >
      </cp-nav-bar>
      <van-form autocomplete="off" ref="form">
        <van-field
          :rules="nameRules"
          v-model="patient.name"
          label="真实姓名"
          placeholder="请输入真实姓名"
        />
        <van-field
          :rules="idCardRules"
          v-model="patient.idCard"
          label="身份证号"
          placeholder="请输入身份证号"
        />
        <van-field label="性别" class="pb4">
          <!-- 单选按钮组件 -->
          <template #input>
            <cp-radio-btn :options="options" v-model="patient.gender"></cp-radio-btn>
          </template>
        </van-field>
        <van-field label="默认就诊人">
          <template #input>
            <van-checkbox v-model="defaultFlag" :icon-size="18" round />
          </template>
        </van-field>
      </van-form>
      <van-action-bar v-if="patient.id">
        <van-action-bar-button @click="remove">删除</van-action-bar-button>
      </van-action-bar>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.patient-page {
  padding: 46px 0 80px;
}
:deep() {
  .van-popup {
    width: 100%;
    height: 100%;
    padding-top: 46px;
    box-sizing: border-box;
  }
}
// 底部操作栏
.van-action-bar {
  padding: 0 10px;
  margin-bottom: 10px;
  .van-button {
    color: var(--cp-price);
    background-color: var(--cp-bg);
  }
}

.patient-list {
  padding: 15px;
}
.patient-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: var(--cp-bg);
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
  border: 1px solid var(--cp-bg);
  transition: all 0.3s;
  overflow: hidden;
  .info {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    span {
      color: var(--cp-tip);
      margin-right: 20px;
      line-height: 30px;
      &.name {
        font-size: 16px;
        color: var(--cp-text1);
        width: 80px;
        margin-right: 0;
      }
      &.id {
        color: var(--cp-text2);
        width: 180px;
      }
    }
  }
  .icon {
    color: var(--cp-tag);
    width: 20px;
    text-align: center;
  }
  .tag {
    position: absolute;
    right: 60px;
    top: 21px;
    width: 30px;
    height: 16px;
    font-size: 10px;
    color: #fff;
    background-color: var(--cp-primary);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.selected {
    border-color: var(--cp-primary);
    background-color: var(--cp-plain);
    .icon {
      color: var(--cp-primary);
    }
  }
}
.patient-add {
  background-color: var(--cp-bg);
  color: var(--cp-primary);
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  .cp-icon {
    font-size: 24px;
  }
}
.patient-tip {
  color: var(--cp-tag);
  padding: 12px 0;
}
.pb4 {
  padding-bottom: 4px;
}
</style>
