import { assign } from '@ctx-core/object';
import { set_localStorage_ctx } from './set_localStorage_ctx';
import { load_localStorage_ctx } from './load_localStorage_ctx';
export function assign_localStorage_ctx() {
    const ctx = assign(load_localStorage_ctx(), ...arguments);
    set_localStorage_ctx(ctx);
    return ctx;
}
export { assign_localStorage_ctx as assign__ctx__localStorage };
//# sourceMappingURL=src/assign_localStorage_ctx.js.map