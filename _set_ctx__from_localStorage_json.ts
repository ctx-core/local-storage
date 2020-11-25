export function _set_ctx__from_localStorage_json(scope__) {
	const json = localStorage.getItem(scope__)
	const set_ctx = {}
	if (json) {
		try {
			set_ctx[scope__] = JSON.parse(json)
		} catch (e) {
			console.warn(`_set_ctx__from_localStorage_json|error|JSON.parse`)
			console.warn(e)
		}
	}
	return set_ctx
}
export { _set_ctx__from_localStorage_json as _ctx__set__json__from__localStorage }
