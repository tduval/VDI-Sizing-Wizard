<template>
  <v-container>
    <v-row>
      <v-col>
        <v-radio-group v-model="SOLUTION_PROVISIONNING">
          <v-radio v-for="item in GET_SOLUTION_PROVISIONNING_COLLECTION" :key="item.id" :value="item.tag">
            <div slot="label"> <strong>{{ item.title }}</strong> ({{ item.tag }})</div>
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StepSolutionProvisionning',
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
    GET_SOLUTION_TYPE_COLLECTION () {
      return this.$store.state.solutionTypeCollection
    },
    GET_SOLUTION_PROVISIONNING_COLLECTION () {
      return this.$store.getters.getSolutionProvisionningbySelectedSolutionVendor()
    },
    SOLUTION_PROVISIONNING: {
      get () {
        return this.$store.state._selectedSolutionProvisionning
      },
      set (value) {
        this.$store.commit('SET_SOLUTION_PROVISIONNING', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
