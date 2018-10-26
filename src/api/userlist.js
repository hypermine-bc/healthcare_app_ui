import request from '@/utils/request'
import store from '@/store'
let base_url = store.state.app.bcBaseUrl

export function fetchIqvia(query) {
  return request({
    url: base_url+'/api/IQVIA',
    method: 'get',
    params: {}
  })
}

export function fetchPatient(query) {
  return request({
    url: base_url+'/api/Patient',
    method: 'get',
    params: query
  })
}

export function fetchDoctor(query) {
  return request({
    url: base_url+'/api/Doctor',
    method: 'get',
    params: query
  })
}

export function fetchPharma(query) { 
  return request({
    url: base_url+'/api/Pharma',
    method: 'get',
    params: query
  })
}

export function fetchCharity(query) {
  return request({
    url: base_url+'/api/Charity',
    method: 'get',
    params: query
  })
}

export function updateUser(data,type) {
  return request({
    url: base_url+'/api/'+type+'/'+data.email,
    method: 'put',
    data
  })
}
