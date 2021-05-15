export function sync_localStorage(key:string, value:any) {
	if (value == null) {
		localStorage.removeItem(key)
	} else {
		localStorage.setItem(key, value)
	}
	return value
}
export {
	sync_localStorage as sync__localStorage,
	sync_localStorage as store__localStorage,
}
