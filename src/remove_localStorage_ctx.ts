import { load_localStorage_ctx } from './load_localStorage_ctx.js'
import { set_localStorage_ctx } from './set_localStorage_ctx.js'
export function remove_localStorage_ctx<Ctx = any>(...args:string[]):Ctx {
	let ctx = load_localStorage_ctx()
	for (let key in args) {
		ctx[key] = null
	}
	set_localStorage_ctx(ctx)
	return ctx
}
