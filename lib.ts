import { assign } from '@ctx-core/object'
export function load__ctx__localStorage() {
	const json__ctx__localStorage = localStorage.getItem('ctx')
	const ctx =
		json__ctx__localStorage
		? JSON.parse(json__ctx__localStorage)
		: {}
	return ctx
}
export function assign__ctx__localStorage() {
	const ctx = assign(load__ctx__localStorage(), ...arguments)
	set__ctx__localStorage(ctx)
	return ctx
}
export function set__ctx__localStorage(ctx) {
	localStorage.setItem('ctx', JSON.stringify(ctx))
	return ctx
}
export function remove__ctx__localStorage(...args) {
	let ctx = load__ctx__localStorage()
	for (let key in args) {
		ctx[key] = null
	}
	set__ctx__localStorage(ctx)
	return ctx
}
export function _ctx__set__json__from__localStorage(scope__) {
	const json = localStorage.getItem(scope__)
	const ctx__set = {}
	if (json) {
		try {
			ctx__set[scope__] = JSON.parse(json)
		} catch (e) {
			console.warn(`_ctx__set__json__from__localStorage|error|JSON.parse`)
			console.warn(e)
		}
	}
	return ctx__set
}
export function sync__json__localStorage(key, value) {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
	return value
}
export const store__json__localStorage = sync__json__localStorage
export function sync__localStorage(key, value) {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, value)
	}
	return value
}
export const store__localStorage = sync__localStorage
