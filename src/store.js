import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogSettings: false,
    solutionVendorCollection: [{
      title: 'Citrix XenDesktop',
      imgSrc: '/citrix-xendesktop-logo_300x200.png',
      description: 'https://www.citrix.com/products/citrix-virtual-apps-and-desktops/',
      tag: 'citrix'
    }, {
      title: 'VMware Horizon',
      imgSrc: '/vmware-horizon-logo_300x200.png',
      description: 'https://www.vmware.com/products/horizon.html',
      tag: 'vmware'
    }],

    solutionTypeCollection: [{
      title: 'Virtual Desktop',
      description: '(Pooled, Dedicated)',
      tag: 'vdi'
    }, {
      title: 'Server Based Computing',
      description: '(Shared Session, Published Application)',
      tag: 'sbc'
    }],

    archetypeOSCollection: [{
      name: 'Windows 10',
      type: 'Desktop',
      family: 'Windows',
      icon: 'fab fa-windows',
      tag: 'wd10'
    }, {
      name: 'Windows 7',
      type: 'Desktop',
      family: 'Windows',
      icon: 'fab fa-windows',
      tag: 'wd7'
    }, {
      name: 'Windows Server 2016',
      type: 'Server',
      family: 'Windows',
      icon: 'fab fa-windows',
      tag: 'ws16'
    }, {
      name: 'Windows Server 2012R2',
      type: 'Server',
      family: 'Windows',
      icon: 'fab fa-windows',
      tag: 'ws12'
    }, {
      name: 'Linux Desktop',
      type: 'Desktop',
      family: 'Linux',
      icon: 'fab fa-linux',
      tag: 'ld'
    }, {
      name: 'Linux Server',
      type: 'Server',
      family: 'Linux',
      icon: 'fab fa-linux',
      tag: 'ls'
    }],

    ArchetypeWorkloadDefinition: [{
      name: 'Light',
      allocationType: [{
        name: 'experience',
        cpu: 2,
        memory: 3,
        disk: 10
      }, {
        name: 'density',
        cpu: 2,
        memory: 2,
        disk: 10
      }]
    }, {
      name: 'Medium',
      allocationType: [{
        name: 'experience',
        cpu: 3,
        memory: 4,
        disk: 15
      }, {
        name: 'density',
        cpu: 2,
        memory: 3,
        disk: 15
      }]
    }, {
      name: 'Heavy',
      allocationType: [{
        name: 'experience',
        cpu: 4,
        memory: 6,
        disk: 20
      }, {
        name: 'density',
        cpu: 3,
        memory: 8,
        disk: 20
      }]
    }],

    OvercommitRatioCPU: [{
      name: 'experience',
      value: [{
        name: 'vdi',
        value: 6
      }, {
        name: 'sbc',
        value: 1.5
      }]
    }, {
      name: 'density',
      value: [{
        name: 'vdi',
        value: 8
      }, {
        name: 'sbc',
        value: 2
      }]
    }],

    _selectedSolutionVendor: 'citrix',
    _selectedSolutionType: 'vdi',
    _selectedArchetypeWorkload: 'Light',
    _selectedArchetypeResourceAllocation: 'experience',
    _selectedArchetypeOS: 'wd10',
    _selectedArchetypeAssignment: 'pooled',
    _selectedConcurrentUsers: 100
  },
  getters: {
    getSelectedArchetypeWorkloadDefinition: (state) => (name) => {
      return state.ArchetypeWorkloadDefinition.find(def => def.name === name)
    },
    getSelectedArchetypeOSCollection: (state) => () => {
      return state.archetypeOSCollection.find(def => def.tag === state._selectedArchetypeOS)
    },
    getSelectedArchetypeCPU: (state) => () => {
      return state.ArchetypeWorkloadDefinition.find(def => def.name === state._selectedArchetypeWorkload).allocationType.find(def => def.name === state._selectedArchetypeResourceAllocation).cpu
    },
    getSelectedArchetypeMemory: (state) => () => {
      return state.ArchetypeWorkloadDefinition.find(def => def.name === state._selectedArchetypeWorkload).allocationType.find(def => def.name === state._selectedArchetypeResourceAllocation).memory
    },
    getSelectedArchetypeDisk: (state) => () => {
      return state.ArchetypeWorkloadDefinition.find(def => def.name === state._selectedArchetypeWorkload).allocationType.find(def => def.name === state._selectedArchetypeResourceAllocation).disk
    },
    getSolutionType: (state) => () => {
      return state.solutionTypeCollection.find(def => def.tag === state._selectedSolutionType)
    },
    getOvercommitRatioCPU: (state) => () => {
      return state.OvercommitRatioCPU.find(def => def.name === state._selectedArchetypeResourceAllocation).value.find(def => def.name === state._selectedSolutionType).value
    }
    // getContainerPerImageById: state => id =>
    //   state.containers.filter(container => container.Image === id),
  },
  mutations: {
    SET_DIALOG_SETTINGS (state, payload) {
      // eslint-disable-next-line
      state.dialogSettings = payload
    },
    SET_SOLUTION_VENDOR (state, payload) {
      // eslint-disable-next-line
      state._selectedSolutionVendor = payload
    },
    SET_SOLUTION_TYPE (state, payload) {
      if (payload === 'sbc') {
        state._selectedArchetypeOS = 'ws16'
      }
      // eslint-disable-next-line
      state._selectedSolutionType = payload
    },
    SET_ARCHETYPE_WORKLOAD (state, payload) {
      // eslint-disable-next-line
      state._selectedArchetypeWorkload = payload
    },
    SET_ARCHETYPE_RESALLOCATION (state, payload) {
      // eslint-disable-next-line
      state._selectedArchetypeResourceAllocation = payload
    },
    SET_ARCHETYPE_OS (state, payload) {
      // eslint-disable-next-line
      state._selectedArchetypeOS = payload
    },
    SET_ARCHETYPE_ASSIGNMENT (state, payload) {
      // eslint-disable-next-line
      state._selectedArchetypeAssignment = payload
    },
    SET_CONCURRENT_USERS (state, payload) {
      // eslint-disable-next-line
      state._selectedConcurrentUsers = payload
    }
  },
  actions: {

  }
})
