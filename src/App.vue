<template>
    <v-app>
        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="title ml-3 mr-5">VDI Sizing&nbsp;<span class="font-weight-light">Wizard</span></span>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn v-on:click="SET_DIALOG_SETTINGS(true)" text>Settings</v-btn>
                <SettingsDialog />
                <v-divider inset vertical></v-divider>
                <v-btn text>N/A</v-btn>
                <v-divider inset vertical></v-divider>
                <v-btn icon href="https://github.com/tduval/VDI-Sizing-Wizard" target="_blank">
                    <v-icon>mdi-github-circle</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense nav>
                <v-list-item link href="/">
                    <v-list-item-icon>
                        <v-icon>home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link href="/project">
                    <v-list-item-icon>
                        <v-icon>add</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Create new project</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider dark class="my-4"></v-divider>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>settings</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link href="https://github.com/tduval/VDI-Sizing-Wizard" target="_blank">
                    <v-list-item-icon>
                        <v-icon>mdi-github-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Github</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

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
  data () {
    return {
      drawer: null
    }
  },
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
