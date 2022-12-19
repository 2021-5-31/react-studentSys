import React, { useState, useEffect } from 'react'
import { Button, Form, Input, message } from 'antd';
import { addStudentApi, updateStudentApi, getStudentDetailApi } from '../api/stuSys'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function EditStudent() {
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const pageType = location.pathname.split('/')[1]
  const isDisabled = pageType === 'detail'
  useEffect(() => {
    if (pageType !== 'add') {
      getStudentDetailApi(id).then(res => {
        form.setFieldsValue(res)
      })
    }
  }, [])
  const onFinish = () => {
    const params = {
      studentNo: form.getFieldValue('studentNo'),
      name: form.getFieldValue('name')
    }
    if (pageType === 'add') {
      addStudentApi(params).then(res => {
        messageApi.open({
          type: 'success',
          content: '添加成功',
          onClose: () => { navigate('/student') }
        })
      })
    } else if (pageType === 'edit') {
      updateStudentApi(id, params).then(res => {
        messageApi.open({
          type: 'success',
          content: '修改成功',
          onClose: () => { navigate('/student') }
        })
      })
    }
  }
  return (
    <div>
      <Form
        name="basic"
        form={form}
        disabled={isDisabled}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 6,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="学号"
          name="studentNo"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="姓名"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  )
}
