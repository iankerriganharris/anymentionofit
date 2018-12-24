import { CacheModuleOptions } from 'cache-manager'
import * as redisStore from 'cache-manager-redis-store'

export const cacheConfig: CacheModuleOptions = {
  host: process.env.CACHE_HOST,
  port: Number(process.env.CACHE_PORT) || 6379,
  store: redisStore
}
