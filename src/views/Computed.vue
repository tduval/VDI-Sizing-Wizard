<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex>
                    <span class="display-2">Computed Results</span>
                </v-flex>
            </v-layout>
            <v-divider class="mt-1"></v-divider>
            <v-container grid-list-xl fluid class="pa-0">
                <v-layout row wrap class="mt-5">
                    <v-flex xs3>
                        <v-card>
                            <v-img :src="GET_SELECTED_SOLUTION_VENDOR.imgSrc" aspect-ratio :alt="GET_SELECTED_SOLUTION_VENDOR.title" height="125" contain>
                                <div class="fill-height bottom-gradient"></div>
                            </v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ GET_SELECTED_SOLUTION_VENDOR.title }}</h3>
                                    <div><span class="subtitle-1" v-html="GET_SELECTED_SOLUTION_VENDOR.description"></span></div>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn text color="#42b883" :href="GET_SELECTED_SOLUTION_VENDOR.website" target="_blank">Visit official website</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex d-flex text-center>
                        <v-card>
                            <v-layout row wrap justify-space-between>
                                <v-flex>
                                    <div class="font-weight-medium display-1 text-xs-center">Type of Solution</div>
                                    <div class="font-weight-thin display-1 text-xs-center mt-3">{{ GET_SELECTED_SOLUTION_TYPE.title }}</div>
                                </v-flex>
                                <v-flex>
                                    <div class="font-weight-medium display-1 text-xs-center">Type of usage</div>
                                    <div class="font-weight-thin display-1 text-xs-center mt-3">{{ ARCHETYPE_ASSIGNMENT }}</div>
                                </v-flex>
                            </v-layout>
                            <v-divider class="mx-5 my-3"></v-divider>

                            <v-layout row wrap justify-space-between>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">Concurrent Users</div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">{{ CONCURRENT_USERS }}</div>
                                </v-flex>
                                <v-flex class="ma-0 pa-0">
                                    <div class="font-weight-medium headline text-xs-center"> </div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">/</div>
                                </v-flex>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">Number of users per VM</div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">
                                        <v-progress-circular :value="CONCURRENT_USERS_PER_VM" size="50">{{ CONCURRENT_USERS_PER_VM }}</v-progress-circular>
                                    </div>
                                </v-flex>
                                <v-flex class="ma-0 pa-0">
                                    <div class="font-weight-medium headline text-xs-center"></div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">=</div>
                                </v-flex>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">Required number of VMs</div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">{{ NUMBER_OF_VM }}</div>
                                </v-flex>
                            </v-layout>

                            <v-divider class="mx-5 my-3"></v-divider>
                            <v-layout row wrap justify-space-between>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">Workload Type</div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">{{ ARCHETYPE_WORKLOAD }}</div>
                                </v-flex>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">Operating System</div>
                                    <div class="font-weight-thin headline text-xs-center mt-3">
                                        <v-icon>{{ GET_SELECTED_ARCHETYPE_OS_DEFINITION.icon }}</v-icon>
                                        {{ GET_SELECTED_OS.name }}
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="font-weight-medium headline text-xs-center">VM Resources</div>
                                    <v-divider></v-divider>
                                    <v-layout row wrap justify-space-between>
                                        <v-flex class="pa-0">
                                            <div class="font-weight-thin headline text-xs-center mt-3">{{ GET_SELECTED_ARCHETYPE_CPU }} vCPU</div>
                                        </v-flex>
                                        <v-divider vertical inset></v-divider>
                                        <v-flex class="pa-0">
                                            <div class="font-weight-thin headline text-xs-center mt-3">{{ GET_SELECTED_MEMORY | units('MB', 'GB', true) }} RAM</div>
                                        </v-flex>
                                        <v-divider vertical inset></v-divider>
                                        <v-flex class="pa-0">
                                            <div class="font-weight-thin headline text-xs-center mt-3">{{ GET_SELECTED_ARCHETYPE_DISK | units('GB', 'GB', true) }} Disk</div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>

                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-layout row wrap>
                <v-flex>
                    <!-- <code>{{ STATE }}</code> -->
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

export default {
  name: 'computed',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    STATE () {
      return this.$store.state
    },
    GET_SELECTED_SOLUTION_VENDOR () {
      return this.$store.getters.getSolutionVendor()
    },
    GET_SELECTED_SOLUTION_TYPE () {
      return this.$store.getters.getSolutionType()
    },
    GET_SELECTED_OS () {
      return this.$store.getters.getSelectedArchetypeOSCollection()
    },
    GET_SELECTED_ARCHETYPE () {
      return this.$store.getters.getSelectedArchetype()
    },
    GET_SELECTED_ARCHETYPE_CPU () {
      return this.$store.getters.getSelectedArchetypeCPU()
    },
    GET_SELECTED_ARCHETYPE_MEMORY () {
      return this.$store.getters.getSelectedArchetypeMemory()
    },
    GET_SELECTED_MEMORY () {
      if (this.GET_SELECTED_SOLUTION_TYPE.tag === 'SBC') {
        return this.$store.getters.getSelectedArchetypeMemory() * this.CONCURRENT_USERS_PER_VM
      }
      return this.$store.getters.getSelectedArchetypeMemory()
    },
    GET_SELECTED_ARCHETYPE_DISK () {
      return this.$store.getters.getSelectedArchetypeDisk()
    },
    GET_SELECTED_ARCHETYPE_RAMCACHE () {
      return this.$store.getters.getSelectedArchetypeRamCache()
    },
    GET_SELECTED_ARCHETYPE_OS_DEFINITION () {
      return this.$store.getters.getSelectedArchetypeOSCollection()
    },
    GET_SELECTED_AVERAGE_WORKLOAD_IOPS () {
      return this.$store.getters.getAverageWorkloadIOPS()
    },
    COMPUTE_VCPU () {
      return this.$store.getters.getSelectedArchetypeCPU() * this.NUMBER_OF_VM
    },
    COMPUTE_MEMORY () {
      return this.$store.getters.getSelectedArchetypeMemory() * this.NUMBER_OF_VM
    },
    COMPUTE_DISK () {
      return this.$store.getters.getSelectedArchetypeDisk() * this.NUMBER_OF_VM
    },
    COMPUTE_PCPU () {
      return this.COMPUTE_VCPU / this.$store.getters.getOvercommitRatioCPU()
    },
    ARCHETYPE_WORKLOAD () {
      return this.$store.state._selectedArchetypeWorkload
    },
    ARCHETYPE_RESALLOCATION () {
      return this.$store.state._selectedArchetypeResourceAllocation
    },
    ARCHETYPE_ASSIGNMENT () {
      return this.$store.state._selectedArchetypeAssignment
    },
    SOLUTION_RAM_CACHE () {
      return this.$store.state._selectedSolutionRAMCache
    },
    CONCURRENT_USERS () {
      return this.$store.state._selectedConcurrentUsers
    },
    CONCURRENT_USERS_PER_VM () {
      return this.$store.state._selectedCCUperVM
    },
    NUMBER_OF_VM () {
      return this.$store.getters.getNumberOfRequiredVMs()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.bottom-gradient {
    background-image: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(246,246,246,0.3) 47%, rgba(237,237,237,0.7) 100%);
  }
</style>
