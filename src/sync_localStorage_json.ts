export function sync_localStorage_json<Val extends unknown = unknown>(key:string, value:Val):Val {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
	return value
}
export {
	sync_localStorage_json as sync__json__localStorage,
	sync_localStorage_json as store__json__localStorage,
}
