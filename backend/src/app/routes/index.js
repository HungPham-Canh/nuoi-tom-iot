import userRouter from './userRoute'
import pondRouter from './pondRoute'

function route(app) {
    app.use('/user', userRouter)
    app.use('/pond', pondRouter)
}

export default route