class EventEmitter {
	constructor() {
		this.listeners = {}
	}

	on(eventName, listener) {
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = []
		}

		this.listeners[eventName].push(listener)
	}

	off(eventName, listener) {
		if (!this.listeners[eventName]) return

		if (!listener) {
			this.listeners[eventName] = null
			return
		}

		const index = this.listeners[eventName].indexOf(listener)
		if (index > -1) {
			this.listeners[eventName].splice(index, 1)
		}
	}

	emit(eventName, ...args) {
		if (!this.listeners[eventName]) return

		this.listeners[eventName].forEach((listener) => {
			if (listener instanceof Function) listener(...args)
		})
	}
}

export default new EventEmitter()
