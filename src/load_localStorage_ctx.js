export function load_localStorage_ctx() {
    const localStorage_ctx_json = localStorage.getItem('ctx');
    const ctx = localStorage_ctx_json
        ? JSON.parse(localStorage_ctx_json)
        : {};
    return ctx;
}
export { load_localStorage_ctx as load__ctx__localStorage };
//# sourceMappingURL=src/load_localStorage_ctx.js.map