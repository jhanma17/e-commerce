import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
    ],
    categorias: [
      "ropa",
      "calzado",
      "muebles",
      "accesorios",
      "computacion"
    ],
    proinfo:[
      {nombre:"Cafe", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"5000"},
      {nombre:"Jhan", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"30000"},
      {nombre:"Karem", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"500000"},
      {nombre:"Carlos", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"20000"},
      {nombre:"Jesu", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"20000"}
    ],
    comprainfo:[
      {nombre:"Cafe", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"2300", cantidad:"1"},
      {nombre:"Jhan", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"30000", cantidad:"1"},
      {nombre:"Karem", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"500000", cantidad:"1"},
      {nombre:"Carlos", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"20000", cantidad:"1"}
    ],
    user:null,
    pass:null,
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload }
      console.log(state.carrito)
    },
    setVaciar(state) {
      state.carrito = {}
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const productos = await res.json()
        commit('setProductos', productos)
      } catch (error) {
        console.log(error)
      }
    },
    agregarCarrito({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  modules: {
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    }
  }
})
