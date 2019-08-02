<template>
    <div>
        <v-container fluid>
            <v-layout row wrap justify-center>
                <v-flex text-center>
                    <h2>Select your VDI-based solution</h2>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm4>
                    <v-card>
                        <v-card-text class="text-xs-center">
                            <v-radio-group v-model="SOLUTION_VENDOR">
                                <v-radio v-for="item in GET_SOLUTION_VENDOR_COLLECTION" :key="item.id" :value="item.tag">
                                  <div slot="label">{{ item.title }}</div>
                                </v-radio>
                            </v-radio-group>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'StepVendor',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    GET_SOLUTION_VENDOR_COLLECTION () {
      return this.$store.state.solutionVendorCollection
    },
    SOLUTION_VENDOR: {
      get () {
        return this.$store.state._selectedSolutionVendor
      },
      set (value) {
        this.$store.commit('SET_SOLUTION_VENDOR', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
