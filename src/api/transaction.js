import request from '@/utils/request'

export function fetchIqvia(query) {
  return request({
    url: 'http://localhost:3000/api/IQVIA',
    method: 'get',
    params: {}
  })
}

export function fetchList(query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}

export function fetchDoctor(query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}

export function fetchPharma(query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}

export function fetchCharity(query) {
  return request({
    url: 'http://localhost:3000/api/Charity',
    method: 'get',
    params: query
  })
}
