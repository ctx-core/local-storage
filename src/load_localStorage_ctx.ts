export function load_localStorage_ctx<Ctx = any>():Ctx {
	const localStorage_ctx_json = localStorage.getItem('ctx')
	const ctx =
		localStorage_ctx_json
		? JSON.parse(localStorage_ctx_json)
		: {}
	return ctx
}
export { load_localStorage_ctx as load__ctx__localStorage }
