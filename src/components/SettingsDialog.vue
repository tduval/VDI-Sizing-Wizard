<template>
    <div>
        <v-dialog v-model="GET_DIALOG_SETTINGS" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card class="grey lighten-3">

                <v-app-bar dark color="primary">
                    <v-btn icon dark @click="SET_DIALOG_SETTINGS(false)">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Default Values</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="SET_DIALOG_SETTINGS(false)">Save</v-btn>
                    </v-toolbar-items>
                </v-app-bar>

                <v-container>
                    <v-layout row wrap justify-center>
                        <v-flex xs10>
                            <v-expansion-panels popout>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Workload Definition</v-expansion-panel-header>
                                    <v-expansion-panel-content>
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
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-header>Overcommit vCPU per pCPU Ratio Definition</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-data-table :headers="[{text: 'Solution Type', value: 'name'},
                                                        { text: 'Overcommit Ratio (vCPU per pCPU) for User Experience', value: 'value[0].value' },
                                                        { text: 'Overcommit Ratio (vCPU per pCPU) for Scalable Density', value: 'value[1].value' }]"
                                            :items="GET_OVERCOMMIT_CPU_DEFINITION"
                                            class="elevation-1 px-5">
                                            <template slot="items" slot-scope="props">
                                                <td><strong>{{ props.item.name }}</strong></td>
                                                <td>{{ props.item.value[0] }}</td>
                                                <td>{{ props.item.value[1] }}</td>
                                            </template>
                                        </v-data-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-header>Citrix XenDesktop Core Infrastructure Definition</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-header>VMware Horizon Core Infrastructure Definition</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
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
