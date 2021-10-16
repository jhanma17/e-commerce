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
      {
        precio: 500,
        id: 1,
        title: "Café",
        thumbnailUrl: "https://picsum.photos/id/0/600"
      },
      {
        precio: 300,
        id: 2,
        title: "Pizza",
        thumbnailUrl: "https://picsum.photos/id/10/600"
      },
      {
        precio: 100,
        id: 3,
        title: "Agua",
        thumbnailUrl: "https://picsum.photos/id/20/600"
      },
      {
        precio: 50,
        id: 4,
        title: "Sandía",
        thumbnailUrl: "https://picsum.photos/id/30/600"
      }
      ,
      {
        precio: 50,
        id: 4,
        title: "Sandía",
        thumbnailUrl: "https://picsum.photos/id/30/600"
      }
      ,
      {
        precio: 50,
        id: 4,
        title: "Sandía",
        thumbnailUrl: "https://picsum.photos/id/30/600"
      }
    ],
    user:null,
    pass:null,
    carrito: {}
  },
  mutations: {
    setProductos(payload) {
      this.state.comprainfo = payload
      console.log(this.state.comprainfo)
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
    },
  },
  actions: {
    agregarCarrito({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id-1].cantidad + 1
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
    totalPrecio: (state) => () =>{
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    },
    getActual:(state) => (id) => {
      return state.comprainfo[id-1]
    }
  }
})
