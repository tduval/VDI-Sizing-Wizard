<template>
    <v-app>
        <v-toolbar app dark>
            <v-avatar tile>
                <img src="logo.png" alt="VueJS Logo">
            </v-avatar>
            <v-toolbar-items>
                <v-btn dark flat href="/" large>
                    <span class="title font-weight-medium">VDI Sizing Wizard</span>
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <!-- <v-btn flat>Settings</v-btn> -->
                <v-btn v-on:click="SET_DIALOG_SETTINGS(true)" flat>Settings</v-btn>
                <SettingsDialog />
                <v-btn flat>N/A</v-btn>
            </v-toolbar-items>

            <v-btn icon href="https://github.com/tduval/VDI-Sizing-Wizard" target="_blank">
                <v-icon>fab fa-github</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import SettingsDialog from '@/components/SettingsDialog.vue'

export default {
  name: 'app',
  components: {
    SettingsDialog
  },
  computed: {
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
