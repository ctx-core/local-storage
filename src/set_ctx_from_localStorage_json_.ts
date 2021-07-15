export function set_ctx_from_localStorage_json_(in_scope:string):Record<string, any> {
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
	set_ctx_from_localStorage_json_ as _set_ctx_from_localStorage_json,
	set_ctx_from_localStorage_json_ as _set_ctx__from_localStorage_json,
	set_ctx_from_localStorage_json_ as _ctx__set__json__from__localStorage
}
