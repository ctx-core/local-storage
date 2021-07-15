import { assign } from '@ctx-core/object'
import { set_localStorage_ctx } from './set_localStorage_ctx.js'
import { load_localStorage_ctx } from './load_localStorage_ctx.js'
export function assign_localStorage_ctx<Ctx = any>():Ctx {
	const ctx = assign(load_localStorage_ctx(), ...arguments)
	set_localStorage_ctx(ctx)
	return ctx
}
export { assign_localStorage_ctx as assign__ctx__localStorage }
