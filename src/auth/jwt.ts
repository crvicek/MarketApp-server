import * as jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || '7PqzAa6qS4G7*hDq-8aZB=c5kjnD*7'
const ttl = 3600 * 24 // JWT tokens are valid for 24 hours

interface JwtPayload {
    id: number
}

export const sign = (data: JwtPayload) =>
    jwt.sign({ data }, secret, { expiresIn: ttl })

export const verify = (token: string): { data: JwtPayload } =>
    jwt.verify(token, secret) as { data: JwtPayload }
