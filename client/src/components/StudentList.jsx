import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd';
import { getStudentListApi, deleteStudentApi } from '../api/stuSys'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getStudentList } from '../redux/studentSlice'
import { getStudentListAsync, deleteStudentAsync } from '../redux/studentSlice'

function useStudentList() {
  let list = useSelector(state => state.studentReducer.list)
  list = list.map(item => {
    return {
      ...item,
      key: item.id
    }
  })
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  const goEdit = (id, type) => {
    navigate(`/${type}/${id}`)
  }
  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id)).then(() => {
      messageApi.open({
        type: 'success',
        content: '删除成功'
      })
    })
  }
  const columns = [
    {
      title: '学号',
      dataIndex: 'studentNo',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: '操作',
      width: 300,
      align: 'center',
      render(text, record, index) {
        return (
          <>
            <Button type="primary" onClick={() => goEdit(record.id, 'detail')}>详情</Button>
            <Button onClick={() => goEdit(record.id, 'edit')}>编辑</Button>
            <Button onClick={() => handleDelete(record.id)}>删除</Button>
          </>
        )
      }
    }
  ]
  useEffect(() => {
    // dispatch(getStudentList()) // 同步方式
    if (!list.length) {
      dispatch(getStudentListAsync()) // 异步方式
    }
  }, [])
  const navigate = useNavigate()
  const add = () => {
    navigate('/add/0')
  }
  return (
    <>
      <div className='student-list-header'>
        <h1>学习列表</h1>
        <Button type='primary' onClick={add}>添加学生</Button>
      </div>
      <Table
        columns={columns}
        dataSource={list}
        bordered
        pagination={false}
      />
      {contextHolder}
    </>
  )
}
export default useStudentList