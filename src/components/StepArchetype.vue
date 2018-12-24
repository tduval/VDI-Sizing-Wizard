<template>
    <div>
        <v-container fluid text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex>
                    <h2>Select the required specifications of the environment</h2>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid text-xs-center>
            <v-layout row wrap>
                <v-flex xs3>
                    <v-card dark>
                        <v-card-title primary-title>
                            <div class="headline">VDI Specifications</div>
                        </v-card-title>
                        <v-card-text>
                            <div class="text-xs-left pb-3">
                                <span> {{ CONCURRENT_USERS }} Concurrent Users</span><br>
                                <span> Machine <strong>{{ ARCHETYPE_ASSIGNMENT }}</strong> to users</span><br>
                                <span> <strong><v-icon small>fas fa-desktop</v-icon> {{ ARCHETYPE_OS }}</strong></span><br>
                            </div>
                                <v-layout row wrap class="grey darken-2">
                                    <v-flex><span> <strong>{{ ARCHETYPE_WORKLOAD }}</strong> Workload</span></v-flex>
                                    <v-flex>
                                        <v-icon small>fas fa-microchip</v-icon>
                                        {{ GET_SELECTED_ARCHETYPE_CPU }} Core
                                    </v-flex>
                                    <v-flex>
                                        <v-icon small>fas fa-memory</v-icon>
                                        {{ GET_SELECTED_ARCHETYPE_MEMORY }} GB
                                    </v-flex>
                                    <v-flex>
                                        <v-icon small>fas fa-hdd</v-icon>
                                        {{ GET_SELECTED_ARCHETYPE_DISK }} GB
                                    </v-flex>
                                </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex class="ml-3">
                    <v-form>
                        <v-card class="pt-5">
                            <v-card-text class="text-xs-center">

                                <v-layout row wrap justify-space-around>
                                    <v-flex xs3>
                                        <v-text-field prepend-icon="fas fa-users" mask="#####" type="number" v-model="CONCURRENT_USERS">
                                            <template slot="label">
                                                How many <strong>concurrent</strong> users ?
                                            </template>
                                        </v-text-field>
                                    </v-flex>

                                    <v-flex xs6>
                                        <v-slider
                                            label="What type of user's workload ?"
                                            v-model="ARCHETYPE_WORKLOAD"
                                            :tick-labels="workloadLabel"
                                            always-dirty
                                            max="2"
                                            step="1"
                                            thumb-label
                                            thumb-size="48"
                                            ticks="always"
                                            tick-size="5">
                                            <template slot="thumb-label" slot-scope="props">
                                                <span>
                                                    {{ workloadLabel[props.value] }}
                                                </span>
                                            </template>
                                        </v-slider>
                                    </v-flex>
                                </v-layout>
                                <v-divider></v-divider>
                                <v-layout row wrap justify-space-around>
                                    <v-flex xs3>
                                        <v-radio-group v-model="ARCHETYPE_RESALLOCATION">
                                            <div slot="label">Define the virtual resources allocation</div>
                                            <v-radio value="experience">
                                                <div slot="label">Higher <strong>User Experience</strong></div>
                                            </v-radio>
                                            <v-radio value="density">
                                                <div slot="label">Higher <strong>Density</strong></div>
                                            </v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-radio-group v-model="ARCHETYPE_OS">
                                            <div slot="label">Define the VDI Operating Systems</div>
                                            <v-radio value="windows10">
                                                <div slot="label">Windows <strong>10</strong></div>
                                            </v-radio>
                                            <v-radio value="windows7">
                                                <div slot="label">Windows <strong>7</strong></div>
                                            </v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-radio-group v-model="ARCHETYPE_ASSIGNMENT">
                                            <div slot="label">Define the VDI type</div>
                                            <v-radio value="pooled">
                                                <div slot="label">Pooled <strong>Non-Persistent</strong> desktop</div>
                                            </v-radio>
                                            <v-radio value="dedicated" disabled>
                                                <div slot="label">Dedicated <strong>Persistent</strong> desktop</div>
                                            </v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                </v-layout>

                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'StepArchetype',
  props: {
  },
  data () {
    return {
      workloadLabel: ['Light', 'Medium', 'Heavy']
    }
  },
  computed: {
    GET_SELECTED_ARCHETYPE_CPU () {
      return this.$store.getters.getSelectedArchetypeCPU()
    },
    GET_SELECTED_ARCHETYPE_MEMORY () {
      return this.$store.getters.getSelectedArchetypeMemory()
    },
    GET_SELECTED_ARCHETYPE_DISK () {
      return this.$store.getters.getSelectedArchetypeDisk()
    },
    ARCHETYPE_OS: {
      get () {
        return this.$store.state._selectedArchetypeOS
      },
      set (value) {
        this.$store.commit('SET_ARCHETYPE_OS', value)
      }
    },
    ARCHETYPE_WORKLOAD: {
      get () {
        return this.$store.state._selectedArchetypeWorkload
      },
      set (value) {
        if (!Number.isNaN(value)) {
          this.$store.commit('SET_ARCHETYPE_WORKLOAD', this.workloadLabel[value])
        }
      }
    },
    ARCHETYPE_RESALLOCATION: {
      get () {
        return this.$store.state._selectedArchetypeResourceAllocation
      },
      set (value) {
        this.$store.commit('SET_ARCHETYPE_RESALLOCATION', value)
      }
    },
    ARCHETYPE_ASSIGNMENT: {
      get () {
        return this.$store.state._selectedArchetypeAssignment
      },
      set (value) {
        this.$store.commit('SET_ARCHETYPE_ASSIGNMENT', value)
      }
    },
    CONCURRENT_USERS: {
      get () {
        return this.$store.state._selectedConcurrentUsers
      },
      set (value) {
        this.$store.commit('SET_CONCURRENT_USERS', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
