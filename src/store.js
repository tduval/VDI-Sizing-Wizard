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
      tag: 'CITRIX'
    }, {
      title: 'VMware Horizon',
      imgSrc: '/vmware-horizon-logo_300x200.png',
      description: 'https://www.vmware.com/products/horizon.html',
      tag: 'VMWARE'
    }],

    solutionTypeCollection: [{
      title: 'Virtual Desktop',
      description: '(Pooled, Dedicated)',
      tag: 'VDI'
    }, {
      title: 'Server Based Computing',
      description: '(Shared Session, Published Application)',
      tag: 'SBC'
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
      name: 'VDI',
      value: [{
        name: 'experience',
        value: 6
      }, {
        name: 'density',
        value: 8
      }]
    }, {
      name: 'SBC',
      value: [{
        name: 'experience',
        value: 1.5
      }, {
        name: 'density',
        value: 2
      }]
    }],

    averageWorkloadIOPS: [{
      name: 'Light',
      os: [{
        name: 'wd7',
        value: [{
          ramcache: false,
          iops: 10
        }, {
          ramcache: true,
          iops: 1
        }]
      }, {
        name: 'wd10',
        value: [{
          ramcache: false,
          iops: 12
        }, {
          ramcache: true,
          iops: 1
        }]
      }, {
        name: 'ws12',
        value: [{
          ramcache: false,
          iops: 3
        }, {
          ramcache: true,
          iops: 0.5
        }]
      }, {
        name: 'ws16',
        value: [{
          ramcache: false,
          iops: 4
        }, {
          ramcache: true,
          iops: 1
        }]
      }]
    }, {
      name: 'Medium',
      os: [{
        name: 'wd7',
        value: [{
          ramcache: false,
          iops: 15
        }, {
          ramcache: true,
          iops: 1
        }]
      }, {
        name: 'wd10',
        value: [{
          ramcache: false,
          iops: 20
        }, {
          ramcache: true,
          iops: 1.5
        }]
      }, {
        name: 'ws12',
        value: [{
          ramcache: false,
          iops: 4
        }, {
          ramcache: true,
          iops: 0.5
        }]
      }, {
        name: 'ws16',
        value: [{
          ramcache: false,
          iops: 6
        }, {
          ramcache: true,
          iops: 1
        }]
      }]
    }, {
      name: 'Heavy',
      os: [{
        name: 'wd7',
        value: [{
          ramcache: false,
          iops: 25
        }, {
          ramcache: true,
          iops: 2
        }]
      }, {
        name: 'wd10',
        value: [{
          ramcache: false,
          iops: 35
        }, {
          ramcache: true,
          iops: 3
        }]
      }, {
        name: 'ws12',
        value: [{
          ramcache: false,
          iops: 5
        }, {
          ramcache: true,
          iops: 0.5
        }]
      }, {
        name: 'ws16',
        value: [{
          ramcache: false,
          iops: 8
        }, {
          ramcache: true,
          iops: 1
        }]
      }]
    }],

    _selectedSolutionVendor: 'CITRIX',
    _selectedSolutionType: 'VDI',
    _selectedArchetypeWorkload: 'Light',
    _selectedArchetypeResourceAllocation: 'experience',
    _selectedArchetypeOS: 'wd10',
    _selectedArchetypeAssignment: 'pooled',
    _selectedConcurrentUsers: 100,
    _selectedSolutionRAMCache: true
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
      return state.OvercommitRatioCPU.find(def => def.name === state._selectedSolutionType).value.find(def => def.name === state._selectedArchetypeResourceAllocation).value
    },
    getAverageWorkloadIOPS: (state) => () => {
      return state.averageWorkloadIOPS.find(def => def.name === state._selectedArchetypeWorkload).os.find(def => def.name === state._selectedArchetypeOS).value.find(def => def.ramcache === state._selectedSolutionRAMCache).iops
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
      if (payload === 'SBC') {
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
      if (payload === 'dedicated') {
        state._selectedSolutionRAMCache = false
      }
      // eslint-disable-next-line
      state._selectedArchetypeAssignment = payload
    },
    SET_CONCURRENT_USERS (state, payload) {
      // eslint-disable-next-line
      state._selectedConcurrentUsers = payload
    },
    SET_SOLUTION_RAM_CACHE (state, payload) {
      // eslint-disable-next-line
      state._selectedSolutionRAMCache = payload
    }
  },
  actions: {

  }
})
