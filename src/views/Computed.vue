<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex>
                    <h2>Computed Results : </h2>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex>
                    Overall VMs: {{ COMPUTE_USERS }}
                </v-flex>
                <v-flex>
                    Overall vCPU required: {{ COMPUTE_VCPU }}<br>
                    Overall pCPU required: {{ COMPUTE_PCPU }}
                </v-flex>
                <v-flex>
                    Overall Memory RAM required (GB): {{ COMPUTE_MEMORY }}<br>
                </v-flex>
                <v-flex>
                    Overall Disk storage required (GB): {{ COMPUTE_DISK }}
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex>
                    <code>{{ STATE }}</code>
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
</style>
