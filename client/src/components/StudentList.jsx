import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd';
import { getStudentListApi, deleteStudentApi } from '../api/stuSys'
import { useNavigate } from 'react-router-dom'

function useStudentList() {
  const [messageApi, contextHolder] = message.useMessage()
  const [list, setList] = useState([])
  const goEdit = (id, type) => {
    navigate(`/${type}/${id}`)
  }
  const handleDelete = (id) => {
    deleteStudentApi(id).then(() => {
      messageApi.open({
        type: 'success',
        content: '删除成功'
      })
      getList()
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
  const getList = () => {
    getStudentListApi().then((data) => {
      const list = data.map((item) => {
        return {
          ...item,
          key: item.id
        }
      })
      setList(list)
    })
  }
  useEffect(() => {
    getList()
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