interface NestedState {
	foo: string
}

interface NestedGetters {
	twoBars: (state: NestedState) => string
}

const nestedModule = {
	namespaced: true,
	state: (): NestedState => ({
		foo: 'bar',
	}),
	getters: {
		twoBars: (state: NestedState): string => state.foo.repeat(2),
	},
}

export default nestedModule
