export function set_localStorage_ctx(ctx:object) {
	localStorage.setItem('ctx', JSON.stringify(ctx))
	return ctx
}
export { set_localStorage_ctx as set__ctx__localStorage }
