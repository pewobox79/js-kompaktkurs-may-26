import request from 'supertest'
import app from '../server.js'

describe("user Status und body test", () => {
    test('GET /users Status', async () => {
        const res = await request(app).get('/api/ph/v1/users')
        expect(res.statusCode).toBe(200)
    })

    test('GET /users body', async () => {
        const res = await request(app).get('/api/ph/v1/users')
        expect(res.body.length).toBeGreaterThan(0)
    })
})
