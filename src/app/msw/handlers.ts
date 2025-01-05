import { HttpResponse, http } from 'msw';
import json from '../../shared/lib/data.json';
import { positionsHandlers } from 'entities/positions';

const getPosts = http.get('/posts', () => {
  return new HttpResponse(JSON.stringify(json), {
    status: 201
  })
})

export const handlers = [...positionsHandlers];