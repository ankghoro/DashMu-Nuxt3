import { useBase, createRouter, defineEventHandler } from 'h3'
import * as careerCtrl from '@/server/controllers/careers'

const router = createRouter()

router.get('/careers', defineEventHandler(careerCtrl.read))

export default useBase('/api', router.handler)
