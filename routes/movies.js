import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, moviesCtrl.index)
router.get('/:id', checkAuth, moviesCtrl.show)
router.put('/:id', checkAuth, moviesCtrl.update)
router.post('/credits/:id', checkAuth, moviesCtrl.credits)
router.post('/', checkAuth, moviesCtrl.create)
router.post('/search', checkAuth, moviesCtrl.search)
router.post('/favorite', checkAuth, moviesCtrl.favorite)
router.delete('/favorite', checkAuth, moviesCtrl.deleteFavorite)
router.delete('/:id', checkAuth, moviesCtrl.delete)

export { router }