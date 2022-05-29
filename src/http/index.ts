import axios from 'axios'
import { LeilaoBodyCreateDTO } from '@/interfaces/LeilaoBodyCreate.dto'
import { LanceBodyCreateDTO } from '@/interfaces/LanceBodyCreate.dto'
import { LanceSelectDTO } from '@/interfaces/LanceSelect.dto'

export function getLeiloes() {
  return axios.get('http://localhost:3000/leiloes').then(response => {
    return response.data
  })
}

export function getLeilao(id: string) {
  return axios.get(`http://localhost:3000/leiloes/${id}`).then(response => {
    return response.data
  })
}

export function getLances(id: string) {
  return axios
    .get('http://localhost:3000/lances/', { params: { leilao_id: id } })
    .then(response => {
      return response.data.map((l: LanceSelectDTO) => {
        l.data = new Date(l.data)
        return l
      })
    })
}

export function createLance(lance: LanceBodyCreateDTO) {
  return axios.post('http://localhost:3000/lances', lance).then(response => {
    return response.data.id
  })
}

export function createLeilao(leilao: LeilaoBodyCreateDTO) {
  return axios.post('http://localhost:3000/leiloes', leilao)
}
