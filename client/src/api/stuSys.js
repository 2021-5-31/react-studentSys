import request from './request'

export function getStudentListApi() {
  return request({
    url: '/students',
    method: 'get'
  })
}

export function addStudentApi(data) {
  return request({
    url: '/students',
    method: 'post',
    data
  })
}

export function updateStudentApi(id, data) {
  return request({
    url: `/students/${id}`,
    method: 'patch',
    data
  })
}

export function deleteStudentApi(id) {
  return request({
    url: `/students/${id}`,
    method: 'delete'
  })
}

export function getStudentDetailApi(id) {
  return request({
    url: `/students/${id}`,
    method: 'get'
  })
}