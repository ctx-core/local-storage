export function _set_ctx_from_localStorage_json(in_scope:string) {
	const json = localStorage.getItem(in_scope)
	const set_ctx:Record<string, any> = {}
	if (json) {
		try {
			set_ctx[in_scope] = JSON.parse(json)
		} catch (e) {
			console.warn(`_set_ctx__from_localStorage_json|error|JSON.parse`)
			console.warn(e)
		}
	}
	return set_ctx
}
export {
	_set_ctx_from_localStorage_json as _set_ctx__from_localStorage_json,
	_set_ctx_from_localStorage_json as _ctx__set__json__from__localStorage
}
