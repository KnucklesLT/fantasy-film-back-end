import { Router } from 'express'
import * as dreamcastsCtrl from '../controllers/dreamcasts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, dreamcastsCtrl.create)
router.get('/', checkAuth, dreamcastsCtrl.index)
router.get('/:id', checkAuth, dreamcastsCtrl.show)
router.put('/:dcId/cast/:castId', checkAuth, dreamcastsCtrl.update)
router.delete('/:id', checkAuth, dreamcastsCtrl.delete)
router.post('/:id/comments', checkAuth, dreamcastsCtrl.createComment)

export { router }