import { createStore } from 'vuex'
import app from '@/store/modules/app.js'
import user from '@/store/modules/user.js'

const store = createStore({
	modules: {
		app,
		user
	}
})

export default store
