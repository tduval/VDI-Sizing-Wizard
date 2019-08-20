<template>
  <v-container>
    <v-row>
      <v-col>
        <v-radio-group v-model="SOLUTION_TYPE">
          <v-radio v-for="item in GET_SOLUTION_TYPE_COLLECTION" :key="item.id" :value="item.tag">
            <div slot="label"> <strong>{{ item.title }}</strong> {{ item.description }}</div>
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StepSolutionType',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    GET_SOLUTION_TYPE_COLLECTION () {
      return this.$store.state.solutionTypeCollection
    },
    SOLUTION_TYPE: {
      get () {
        return this.$store.state._selectedSolutionType
      },
      set (value) {
        this.$store.commit('SET_SOLUTION_TYPE', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
