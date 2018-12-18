import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vendorList: [{
      title: 'VMware Horizon 7',
      imgSrc: '/vmware-horizon-logo_300x200.png',
      description: 'https://www.vmware.com/products/horizon.html',
      tag: 'vmware'
    }, {
      title: 'Citrix XenDesktop 7',
      imgSrc: '/citrix-xendesktop-logo_300x200.png',
      description: 'https://www.citrix.com/products/citrix-virtual-apps-and-desktops/',
      tag: 'citrix'
    }],
    vendorSelected: null
  },
  mutations: {
    SET_VENDOR_SELECTED (state, payload) {
      // eslint-disable-next-line
      state.vendorSelected = payload
    }
  },
  actions: {

  }
})
