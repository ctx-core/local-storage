/**
 * @param key{string}
 * @param value{*}
 * @returns {*}
 */
export function localStorage__json__sync(key, value) {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
	return value
}
export {
	localStorage__json__sync as sync_localStorage_json,
	localStorage__json__sync as sync__json__localStorage,
	localStorage__json__sync as store__json__localStorage,
}
