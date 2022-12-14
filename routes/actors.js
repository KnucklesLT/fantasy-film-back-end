import { Router } from 'express'
import * as actorsCtrl from '../controllers/actors.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, actorsCtrl.index)
router.post('/favorite', checkAuth, actorsCtrl.favorite)
router.delete('/favorite', checkAuth, actorsCtrl.deleteFavorite)
router.get('/:id',checkAuth, actorsCtrl.show)
router.put('/:id', checkAuth, actorsCtrl.update)
router.post('/', checkAuth, actorsCtrl.create)
router.post('/search', checkAuth, actorsCtrl.search)
router.delete('/:id', checkAuth, actorsCtrl.delete)
export { router }
