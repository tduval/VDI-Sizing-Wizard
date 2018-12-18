<template>
    <div>
        <v-container fluid text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm4 md4>
                    <h2>Select your VDI-based solution</h2>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm4 md3>
                    <v-card>
                        <v-card-text class="text-xs-center">
                            <v-radio-group>
                                <v-radio v-for="item in VENDOR_LIST" :key="item.id" :label="item.title" :value="item.tag" v-on:click.native="selectVendor(item.tag)"></v-radio>
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
  name: 'StepVendor',
  props: {
  },
  data () {
    return {
      vendor: null
    }
  },
  computed: {
    VENDOR_LIST () {
      return this.$store.state.vendorList
    }
  },
  methods: {
    selectVendor: function (vendor) {
      this.$store.commit('SET_VENDOR_SELECTED', vendor)
    }
  }
}
</script>

<style>
</style>
