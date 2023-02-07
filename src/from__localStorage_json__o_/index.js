/**
 * @param in_scope{string}
 * @returns {*}
 * @private
 */
export function from__localStorage_json__o_(in_scope) {
	const json = localStorage.getItem(in_scope)
	const set_ctx = {}
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
	from__localStorage_json__o_ as set_ctx_from_localStorage_json_,
	from__localStorage_json__o_ as _set_ctx_from_localStorage_json,
	from__localStorage_json__o_ as _set_ctx__from_localStorage_json,
	from__localStorage_json__o_ as _ctx__set__json__from__localStorage,
}
