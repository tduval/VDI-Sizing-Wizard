<template>
    <div>
        <v-dialog v-model="GET_DIALOG_SETTINGS" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card class="grey lighten-3">

                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="SET_DIALOG_SETTINGS(false)">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Default Values</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="SET_DIALOG_SETTINGS(false)">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-container>
                    <v-layout row wrap justify-center>
                        <v-flex xs10>
                            <v-expansion-panel popout>
                                <v-expansion-panel-content>
                                    <div slot="header">Workload Definition</div>
                                    <v-data-table :headers="[{text: 'Workload Type', value: 'name'},
                                                    { text: 'vCPU', value: 'cpu' },
                                                    { text: 'Memory (GB)', value: 'memory' },
                                                    { text: 'Write Disk (GB)', value: 'disk' }]"
                                        :items="GET_ARCHETYPE_WORKLOAD_DEFINITION"
                                        class="elevation-1 px-5">
                                        <template slot="items" slot-scope="props">
                                            <td><strong>{{ props.item.name }}</strong></td>
                                            <td>{{ props.item.cpu }}</td>
                                            <td>{{ props.item.memory }}</td>
                                            <td>{{ props.item.disk }}</td>
                                        </template>
                                    </v-data-table>
                                </v-expansion-panel-content>

                                <v-expansion-panel-content>
                                    <div slot="header">Overcommit vCPU per pCPU Ratio Definition</div>
                                    <v-data-table :headers="[{text: 'Resources Allocation Type', value: 'name'},
                                                    { text: 'value', value: 'value' }]"
                                        :items="GET_OVERCOMMIT_CPU_DEFINITION"
                                        class="elevation-1 px-5">
                                        <template slot="items" slot-scope="props">
                                            <td><strong>{{ props.item.name }}</strong></td>
                                            <td><code>{{ props.item.value }}</code></td>
                                        </template>
                                    </v-data-table>
                                </v-expansion-panel-content>

                                <v-expansion-panel-content>
                                    <div slot="header">Citrix XenDesktop Core Infrastructure Definition</div>
                                </v-expansion-panel-content>

                                <v-expansion-panel-content>
                                    <div slot="header">VMware Horizon Core Infrastructure Definition</div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-flex>
                    </v-layout>
                </v-container>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  name: 'SettingsDialog',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    GET_DIALOG_SETTINGS () {
      return this.$store.state.dialogSettings
    },
    GET_ARCHETYPE_WORKLOAD_DEFINITION () {
      return this.$store.state.ArchetypeWorkloadDefinition
    },
    GET_OVERCOMMIT_CPU_DEFINITION () {
      return this.$store.state.OvercommitRatioCPU
    }
  },
  methods: {
    SET_DIALOG_SETTINGS (val) {
      this.$store.commit('SET_DIALOG_SETTINGS', val)
    }
  }
}
</script>

<style>
</style>
