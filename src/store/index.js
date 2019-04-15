import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import drawer from './Drawer'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      drawer,
      example
    }
  })

  return Store
}
