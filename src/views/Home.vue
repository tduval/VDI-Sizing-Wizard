<template>
    <v-container text-center>
        <v-layout wrap>
            <v-flex>
              <span class="display-3">VDI Sizing Wizard</span>
            </v-flex>
            <v-flex>
              <div class="my-4">
                <span>This tool is made to kickstart a new VDI/SBC project by providing usefull sizing for all necessary component.</span>
                <br>
                <span>The sizer actually support both <strong>Citrix</strong> and <strong>VMware</strong> product and the calculation are based on industry best-practices provided by <a href="https://docs.citrix.com/en-us/xenapp-and-xendesktop/7-15-ltsr/downloads/handbook-715-ltsr.pdf">Citrix Handbook</a> and <a href="https://techzone.vmware.com/resource/workspace-one-and-horizon-reference-architecture">VMware Horizon Architecture Reference</a> guide.</span>
              </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
