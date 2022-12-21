import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStudentListApi, addStudentApi, updateStudentApi, deleteStudentApi } from '../api/stuSys'

export const getStudentListAsync = createAsyncThunk(
  'students/getStudentListAsync',
  async (_, thunkApi) => {
    const res = await getStudentListApi()
    thunkApi.dispatch(getStudentList(res))
  }
)
export const addStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async (params, thunkApi) => {
    const res = await addStudentApi(params)
    thunkApi.dispatch(addStudent(res))
  }
)

export const updateStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async (params, thunkApi) => {
    const res = await updateStudentApi(params.id, params.studentInfo)
    thunkApi.dispatch(updateStudent({ id: params.id, studentInfo: { ...params.studentInfo, id: params.id } }))
  }
)

export const deleteStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async (id, thunkApi) => {
    const res = await deleteStudentApi(id)
    thunkApi.dispatch(deleteStudent(id))
  }
)

export const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: []
  },
  reducers: {
    getStudentList: (state, { payload }) => {
      state.list = payload
    },
    addStudent: (state, { payload }) => {
      state.list.push(payload)
    },
    updateStudent: (state, { payload }) => {
      const index = state.list.findIndex(item => item.id === payload.id)
      index && state.list.splice(index, 1, payload.studentInfo)
    },
    deleteStudent: (state, { payload }) => {
      const index = state.list.findIndex(item => item.id === payload)
      index && state.list.splice(index, 1)
    },
  }
})

export const { getStudentList, addStudent, updateStudent, deleteStudent } = studentSlice.actions
export default studentSlice.reducer