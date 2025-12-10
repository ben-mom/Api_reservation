import 'reflect-metadata'
import { createApp } from '@adonisjs/core/factories'

const app = await createApp(__dirname)
await app.startAce()
