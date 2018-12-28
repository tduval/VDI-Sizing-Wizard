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
                <v-layout row wrap justify-space-around class="mt-5" fill-height>
                    <v-flex xs3>
                        <v-card>
                            <v-img :src="GET_SELECTED_SOLUTION_VENDOR.imgSrc" aspect-ratio :alt="GET_SELECTED_SOLUTION_VENDOR.title" height="125" contain>
                                <div class="fill-height bottom-gradient"></div>
                            </v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ GET_SELECTED_SOLUTION_VENDOR.title }}</h3>
                                    <div><span v-html="GET_SELECTED_SOLUTION_VENDOR.description"></span></div>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn flat color="#42b883" :href="GET_SELECTED_SOLUTION_VENDOR.website" target="_blank">Visit official website</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex xs3>
                        <v-card>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ GET_SELECTED_SOLUTION_TYPE.title }}</h3>
                                    <div><span v-html="GET_SELECTED_SOLUTION_TYPE.description"></span></div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card>
                            Overall VMs: {{ COMPUTE_USERS }}
                            Overall vCPU required: {{ COMPUTE_VCPU }}<br>
                            Overall pCPU required: {{ COMPUTE_PCPU }}
                            Overall Memory RAM required (GB): {{ COMPUTE_MEMORY }}<br>
                            Overall Disk storage required (GB): {{ COMPUTE_DISK }}
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
    COMPUTE_USERS () {
      return this.$store.state._selectedConcurrentUsers
    },
    COMPUTE_VCPU () {
      return this.$store.getters.getSelectedArchetypeCPU() * this.COMPUTE_USERS
    },
    COMPUTE_MEMORY () {
      return this.$store.getters.getSelectedArchetypeMemory() * this.COMPUTE_USERS
    },
    COMPUTE_DISK () {
      return this.$store.getters.getSelectedArchetypeDisk() * this.COMPUTE_USERS
    },
    COMPUTE_PCPU () {
      return this.COMPUTE_VCPU / this.$store.getters.getOvercommitRatioCPU()
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
