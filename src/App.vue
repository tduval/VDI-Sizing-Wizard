<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <span>VDI Sizing Wizard</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
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

<style>
</style>
