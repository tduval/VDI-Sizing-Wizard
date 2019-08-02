<template>
    <div>
        <v-container fluid>
            <v-layout row wrap justify-center>
                <v-flex text-center>
                    <h2>Select the type of virtual solution</h2>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm4>
                    <v-card>
                        <v-card-text class="text-xs-center">
                            <v-radio-group v-model="SOLUTION_TYPE">
                                <v-radio v-for="item in GET_SOLUTION_TYPE_COLLECTION" :key="item.id" :value="item.tag">
                                    <div slot="label"> <strong>{{ item.title }}</strong> {{ item.description }}</div>
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
  name: 'StepType',
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
