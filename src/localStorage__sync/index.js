/**
 * @param key{string}
 * @param value{string}
 * @returns {string}
 */
export function localStorage__sync(key, value) {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, value)
	}
	return value
}
export {
	localStorage__sync as sync_localStorage,
	localStorage__sync as sync__localStorage,
	localStorage__sync as store__localStorage,
}
