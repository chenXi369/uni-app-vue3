import {
	PLATFORM
} from '@/store/mutation-types'
import storage from '@/utils/storage'


const state = {
	// 当前终端平台
	platform: ''
}

const mutations = {
	SET_PLATFORM(state, value) {
		state.platform = value
	}
}

export default {
	state,
	mutations
}