import userRouter from './userRoute'
import pondRouter from './pondRoute'

function route(app) {
    app.use('/user', userRouter)
    app.use('/ponds', pondRouter)
    app.get('/', (req, res, next) => {res.send('')})
}

export default route