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
                            <div class="display-2">{{ GET_SELECTED_SOLUTION_TYPE }} Specifications</div>
                        </v-card-title>
                        <v-card-text v-if="GET_SELECTED_SOLUTION_TYPE == 'VDI'">
                            <div class="text-xs-left pb-3">
                                <span class="subheading"> <v-icon small>fas fa-users</v-icon> <strong> {{ CONCURRENT_USERS }}</strong> Concurrent users</span><br>
                                <span class="subheading"> <v-icon small>fas fa-desktop</v-icon> Machine <strong> {{ ARCHETYPE_ASSIGNMENT }}</strong> to users</span><br>
                                <span class="title"> <v-icon>{{ GET_SELECTED_ARCHETYPE_OS_DEFINITION.icon }}</v-icon> <strong> {{ GET_SELECTED_ARCHETYPE_OS_DEFINITION.name }}</strong></span><br>
                            </div>
                            <div class="grey darken-2">
                                <v-layout row wrap justify-space-between>
                                    <v-flex class="text-xs-left pl-2"><span>Workload <strong>{{ ARCHETYPE_WORKLOAD }}</strong></span></v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-microchip</v-icon>
                                                {{ GET_SELECTED_ARCHETYPE_CPU }} Core
                                            </div>
                                            <span>vCPU per VDI</span>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-memory</v-icon>
                                                {{ SOLUTION_RAM_CACHE === 'true' ? (GET_SELECTED_ARCHETYPE_MEMORY + GET_SELECTED_ARCHETYPE_RAMCACHE)/1024 : GET_SELECTED_ARCHETYPE_MEMORY/1024 }} GB
                                            </div>
                                            <span>RAM per VDI</span>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-hdd</v-icon>
                                                {{ GET_SELECTED_ARCHETYPE_DISK }} GB
                                            </div>
                                            <span>Write Disk per VDI</span>
                                        </v-tooltip>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap justify-space-between>
                                    <v-flex class="text-xs-left pl-2"><span>Average expected storage IOPS per user</span></v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-tachometer-alt</v-icon>
                                                <strong> {{ GET_SELECTED_AVERAGE_WORKLOAD_IOPS }} IOPS</strong>
                                            </div>
                                            <span>Steady-State IOPS per VDI</span>
                                        </v-tooltip>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card-text>
                        <v-card-text v-else>
                            <div class="text-xs-left pb-3">
                                <span class="subheading"> <v-icon small>fas fa-users</v-icon> <strong> {{ CONCURRENT_USERS }}</strong> Concurrent users</span><br>
                                <span class="subheading"> <v-icon small>fas fa-cubes</v-icon>  Hosted <strong class="text-capitalize"> {{ ARCHETYPE_ASSIGNMENT }}</strong></span><br>
                                <span class="title"> <v-icon>{{ GET_SELECTED_ARCHETYPE_OS_DEFINITION.icon }}</v-icon> <strong> {{ GET_SELECTED_ARCHETYPE_OS_DEFINITION.name }}</strong></span><br>
                            </div>
                            <div class="grey darken-2">
                                <v-layout row wrap justify-space-between>
                                    <v-flex class="text-xs-left pl-2"><span>Workload <strong>{{ ARCHETYPE_WORKLOAD }}</strong></span></v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-microchip</v-icon>
                                                {{ GET_SELECTED_ARCHETYPE_CPU }} Core
                                            </div>
                                            <span>vCPU per SBC</span>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-memory</v-icon>
                                                {{ SOLUTION_RAM_CACHE === 'true' ? ((GET_SELECTED_ARCHETYPE_MEMORY * CONCURRENT_USERS_PER_SBC)+ GET_SELECTED_ARCHETYPE_RAMCACHE)/1024 : (GET_SELECTED_ARCHETYPE_MEMORY * CONCURRENT_USERS_PER_SBC)/1024 }} GB
                                            </div>
                                            <span>RAM per SBC</span>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex>
                                        <v-tooltip top>
                                            <div slot="activator">
                                                <v-icon small>fas fa-hdd</v-icon>
                                                {{ GET_SELECTED_ARCHETYPE_DISK }} GB
                                            </div>
                                            <span>Write Disk per SBC</span>
                                        </v-tooltip>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap justify-space-between>
                                    <v-flex class="text-xs-left pl-2"><span>Average expected storage IOPS per user</span></v-flex>
                                    <v-tooltip top>
                                        <div slot="activator">
                                            <v-icon small>fas fa-tachometer-alt</v-icon>
                                            <strong> {{ GET_SELECTED_AVERAGE_WORKLOAD_IOPS }} IOPS</strong>
                                        </div>
                                        <span>Steady-State IOPS per user</span>
                                    </v-tooltip>
                                </v-layout>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex class="ml-3">
                    <v-form>
                        <v-card>
                            <v-card-text class="text-xs-center">

                                <v-layout row wrap justify-space-around>
                                    <v-flex xs3>
                                        <div v-if="GET_SELECTED_SOLUTION_TYPE == 'VDI'">
                                            <v-radio-group v-model="ARCHETYPE_ASSIGNMENT">
                                                <div slot="label">Define the VDI type
                                                    <v-tooltip top max-width="800px">
                                                        <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                        <span><strong>Pooled Desktop</strong> – The pooled desktop model provides each user with a random, temporary desktop operating system. This model is good for simplicity and standardization.<br>
                                                        <strong>Personal Desktop</strong> – The personal desktop model provides each user with a statically assigned, customizable, persistent desktop operating system. This model is good for performance and personalization</span>
                                                    </v-tooltip>
                                                </div>
                                                <v-radio value="pooled">
                                                    <div slot="label">Pooled <strong>Non-Persistent</strong> desktop</div>
                                                </v-radio>
                                                <v-radio value="dedicated">
                                                    <div slot="label">Dedicated <strong>Persistent</strong> desktop</div>
                                                </v-radio>
                                            </v-radio-group>
                                        </div>
                                        <div v-else>
                                            <v-radio-group v-model="ARCHETYPE_ASSIGNMENT">
                                                <div slot="label">Define the SBC type
                                                    <v-tooltip top max-width="800px">
                                                        <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                        <span><strong>Hosted Apps</strong> – The hosted apps model delivers only the application interface to the user. This approach provides a seamless way for organizations to deliver a centrally managed and hosted application into the user’s local PC. The Hosted Apps model is often utilized when organizations must simplify management of a few line-of-business applications.<br>
                                                        <strong>Shared Desktop</strong> – With the shared desktop model, multiple user desktops are hosted from a single, server-based operating system. The shared desktop model provides a low-cost, high-density solution; however, applications must be compatible with a multi-user server based operating system. In addition, because multiple users share a single operating system instance, users are restricted from performing actions that negatively impact other users, for example installing applications, changing system settings and restarting the operating system.</span>
                                                    </v-tooltip>
                                                </div>
                                                <v-radio value="session">
                                                    <div slot="label">Shared <strong>Desktop</strong>-based session</div>
                                                </v-radio>
                                                <v-radio value="apps">
                                                    <div slot="label">Published <strong>Hosted Apps</strong></div>
                                                </v-radio>
                                            </v-radio-group>
                                        </div>
                                    </v-flex>
                                    <v-divider vertical></v-divider>
                                    <v-flex xs3>
                                        <div v-if="ARCHETYPE_ASSIGNMENT != 'dedicated' && this.$store.state._selectedSolutionVendor == 'CITRIX'">
                                            <v-radio-group v-model="SOLUTION_RAM_CACHE">
                                                <div slot="label">Define the Write-Cache Model
                                                    <v-tooltip top>
                                                        <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                        <span>Tooltip</span>
                                                    </v-tooltip>
                                                </div>
                                                <v-radio value='true'>
                                                    <div slot="label"><strong>RAM-based Cache</strong> with overflow on disk</div>
                                                </v-radio>
                                                <v-radio value='false'>
                                                    <div slot="label"><strong>Disk-based Cache</strong> only</div>
                                                </v-radio>
                                            </v-radio-group>
                                        </div>
                                    </v-flex>
                                    <v-divider vertical></v-divider>
                                    <v-flex xs3>
                                        <v-radio-group v-model="ARCHETYPE_RESALLOCATION">
                                            <div slot="label">Define the virtual resources allocation
                                                <v-tooltip top>
                                                    <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                    <span>Tooltip</span>
                                                </v-tooltip>
                                            </div>
                                            <v-radio value="experience">
                                                <div slot="label">Higher <strong>User Experience</strong></div>
                                            </v-radio>
                                            <v-radio value="density">
                                                <div slot="label">Higher <strong>Density</strong></div>
                                            </v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                </v-layout>

                                <v-divider></v-divider>
                                <v-layout row wrap justify-space-around class="py-3">
                                    <v-flex xs3>
                                        <v-text-field prepend-icon="fas fa-users" mask="#####" type="number" v-model="CONCURRENT_USERS">
                                            <template slot="label">
                                                How many <strong>concurrent</strong> users ?
                                            </template>
                                        </v-text-field>
                                    </v-flex>

                                    <v-divider vertical></v-divider>
                                    <v-flex xs6>
                                        <v-slider
                                            v-model="ARCHETYPE_WORKLOAD"
                                            :tick-labels="workloadLabel"
                                            always-dirty
                                            max="2"
                                            step="1"
                                            thumb-label
                                            thumb-size="48"
                                            ticks="always"
                                            tick-size="5">
                                            <div slot="label">What type of user's workload ?
                                                <v-tooltip top>
                                                    <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                    <span>Tooltip</span>
                                                </v-tooltip>
                                            </div>
                                            <template slot="thumb-label" slot-scope="props">
                                                <span>
                                                    {{ workloadLabel[props.value] }}
                                                </span>
                                            </template>
                                        </v-slider>
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap justify-space-around class="py-3" v-if="GET_SELECTED_SOLUTION_TYPE == 'SBC'">
                                    <v-flex xs8>
                                        <v-slider
                                            v-model="CONCURRENT_USERS_PER_SBC"
                                            ticks
                                            step="5"
                                            always-dirty
                                            min="10"
                                            thumb-color="error"
                                            thumb-label="always">
                                            <div slot="label">How many users per SBC server in average ?
                                                <v-tooltip top>
                                                    <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                    <span>Tooltip</span>
                                                </v-tooltip>
                                            </div>
                                        </v-slider>
                                    </v-flex>
                                    <v-flex xs3>
                                        <div class="theme--light v-label mt-3 pt-1">Required number of SBC Server</div>
                                        <div>
                                            <div class="headline mt-1 pt-3"><span class="font-weight-black error--text">{{ CONCURRENT_USERS / CONCURRENT_USERS_PER_SBC }}</span> </div>
                                        </div>
                                    </v-flex>
                                </v-layout>

                                <v-divider></v-divider>
                                <v-layout row wrap justify-space-around class="py-3">
                                    <v-flex xs3>
                                        <div class="theme--light v-label text-xs-left mt-3 pt-1">Select your target Operating System
                                            <v-tooltip top>
                                                <v-icon slot="activator" small color="primary">far fa-question-circle</v-icon>
                                                <span>Tooltip</span>
                                            </v-tooltip>
                                        </div>
                                        <v-select
                                          v-model="ARCHETYPE_OS"
                                          :hint="GET_SELECTED_ARCHETYPE_OS_DEFINITION.family+' '+GET_SELECTED_ARCHETYPE_OS_DEFINITION.type+' family'"
                                          :prepend-icon="GET_SELECTED_ARCHETYPE_OS_DEFINITION.icon"
                                          persistent-hint
                                          :items="GET_SELECTED_SOLUTION_TYPE == 'VDI' ?
                                            GET_ARCHETYPE_OS_COLLECTION.filter(def => def.family == 'Windows').filter(def => def.type == 'Desktop') : GET_ARCHETYPE_OS_COLLECTION.filter(def => def.family == 'Windows').filter(def => def.type == 'Server')"
                                          item-text="name"
                                          item-value="tag"
                                        >
                                        </v-select>
                                    </v-flex>
                                    <v-flex xs2>
                                        <div class="theme--light v-label mt-3 pt-1">Processor</div>
                                        <div v-if="GET_SELECTED_SOLUTION_TYPE == 'VDI'">
                                            <div class="headline mt-1 pt-3"><span class="font-weight-black">{{ GET_SELECTED_ARCHETYPE_CPU }}</span> vCPU</div>
                                        </div>
                                        <div v-else>
                                            <div class="headline mt-1 pt-3"><span class="font-weight-black">{{ GET_SELECTED_ARCHETYPE_CPU }}</span> vCPU</div>
                                            <div class="headline mt-1"><span class="font-weight-thin">(NUMA Node)</span></div>
                                        </div>
                                    </v-flex>
                                    <v-flex xs2>
                                        <div class="theme--light v-label mt-3 pt-1">Memory RAM</div>
                                        <div v-if="GET_SELECTED_SOLUTION_TYPE == 'VDI'">
                                            <div class="headline mt-1 pt-3"><span class="font-weight-black">{{ GET_SELECTED_ARCHETYPE_MEMORY }}</span> MB</div>
                                            <div class="headline mt-1" v-if="SOLUTION_RAM_CACHE == 'true'"><span class="font-weight-medium">+ {{ GET_SELECTED_ARCHETYPE_RAMCACHE }} MB</span><span class="caption"> of RAM Cache</span></div>
                                        </div>
                                        <div v-else>
                                            <div class="headline mt-1 pt-3"><span class="font-weight-black">{{ GET_SELECTED_ARCHETYPE_MEMORY * CONCURRENT_USERS_PER_SBC }}</span> MB <span class="caption">({{ GET_SELECTED_ARCHETYPE_MEMORY }}MB per user)</span></div>
                                            <div class="headline mt-1" v-if="SOLUTION_RAM_CACHE == 'true'"><span class="font-weight-medium">+ {{ GET_SELECTED_ARCHETYPE_RAMCACHE }} MB</span><span class="caption"> of RAM Cache</span></div>
                                        </div>
                                    </v-flex>
                                    <v-flex xs2>
                                        <div class="theme--light v-label mt-3 pt-1">Write-Cache Disk</div>
                                        <div class="headline mt-1 pt-3"><span class="font-weight-black">{{ GET_SELECTED_ARCHETYPE_DISK }}</span> GB</div>
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
    GET_SELECTED_SOLUTION_TYPE () {
      return this.$store.state._selectedSolutionType
    },
    GET_SELECTED_ARCHETYPE_CPU () {
      return this.$store.getters.getSelectedArchetypeCPU()
    },
    GET_SELECTED_ARCHETYPE_MEMORY () {
      return this.$store.getters.getSelectedArchetypeMemory()
    },
    GET_SELECTED_ARCHETYPE_DISK () {
      return this.$store.getters.getSelectedArchetypeDisk()
    },
    GET_SELECTED_ARCHETYPE_RAMCACHE () {
      return this.$store.getters.getSelectedArchetypeRamCache()
    },
    GET_ARCHETYPE_OS_COLLECTION () {
      return this.$store.state.archetypeOSCollection
    },
    GET_SELECTED_ARCHETYPE_OS_DEFINITION () {
      return this.$store.getters.getSelectedArchetypeOSCollection()
    },
    GET_SELECTED_AVERAGE_WORKLOAD_IOPS () {
      return this.$store.getters.getAverageWorkloadIOPS()
    },
    GET_TOTAL_RAM_MEMORY () {
      return this.SOLUTION_RAM_CACHE === 'true' ? this.GET_SELECTED_ARCHETYPE_MEMORY + this.GET_SELECTED_ARCHETYPE_RAMCACHE : this.GET_SELECTED_ARCHETYPE_MEMORY
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
    },
    SOLUTION_RAM_CACHE: {
      get () {
        return this.$store.state._selectedSolutionRAMCache
      },
      set (value) {
        this.$store.commit('SET_SOLUTION_RAM_CACHE', value)
      }
    },
    CONCURRENT_USERS_PER_SBC: {
      get () {
        return this.$store.state._selectedCCUperSBC
      },
      set (value) {
        this.$store.commit('SET_CONCURRENT_USERS_PER_SBC', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
