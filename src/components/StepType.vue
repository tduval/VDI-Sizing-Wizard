<template>
    <div>
        <v-container fluid text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex>
                    <h2>Select the type of virtual solution</h2>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm4>
                    <v-card>
                        <v-card-text class="text-xs-center">
                            <v-radio-group v-model="type">
                                <v-radio v-for="item in GET_SOLUTION_TYPE_COLLECTION" :key="item.id" :value="item.tag" v-on:click.native="setSolutionType(item.tag)">
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
      type: 'vdi'
    }
  },
  computed: {
    GET_SOLUTION_TYPE_COLLECTION () {
      return this.$store.state.solutionTypeCollection
    }
  },
  methods: {
    setSolutionType: function (type) {
      this.$store.commit('SET_SOLUTION_TYPE', type)
    }
  }
}
</script>

<style>
</style>
