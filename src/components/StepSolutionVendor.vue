<template>
  <v-container>
    <v-row>
      <v-col>
        <v-radio-group v-model="SOLUTION_VENDOR">
          <v-radio v-for="item in GET_SOLUTION_VENDOR_COLLECTION" :key="item.id" :value="item.tag" :label="item.title">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StepSolutionVendor',
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
