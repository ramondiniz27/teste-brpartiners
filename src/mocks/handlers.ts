import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/', () => {
    return HttpResponse.json({
      message: 'Usuário encontrado',
    })
  }),
  http.post('api/user', () => {
    return HttpResponse.json({})
  }),
  http.put('api/user/:id', () => {
    return HttpResponse.json({})
  }),
  http.delete('api/user/:id', () => {
    return HttpResponse.json({})
  }),
]
