<template>
    <v-container>
      <v-row>
        <v-col>
          <div class="display-3">VDI Sizing Wizard</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <span>This tool is made to kickstart a new VDI/SBC project by providing usefull sizing for all necessary component.</span>
          <br>
          <span>The sizer actually support both <strong>Citrix</strong> and <strong>VMware</strong> product and the calculation are based on industry best-practices provided by <a href="https://docs.citrix.com/en-us/xenapp-and-xendesktop/7-15-ltsr/downloads/handbook-715-ltsr.pdf" target="_blank">Citrix Handbook</a> and <a href="https://techzone.vmware.com/resource/workspace-one-and-horizon-reference-architecture" target="_blank">VMware Horizon Architecture Reference</a> guide.</span>
          <div class="mt-5">Start using the wizard : <v-btn small rounded color="primary" to="/project"><v-icon left>add</v-icon>Create new project</v-btn></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="display-1">What is VDI?</div>
          <blockquote class="blockquote">
            <v-icon>mdi-format-quote-open</v-icon>
            <strong>Virtual Desktop Infrastructure</strong>, or VDI, refers to the process of running a user desktop inside a virtual machine that lives on a server in the datacenter. It’s a powerful form of desktop virtualization because it enables fully personalized desktops for each user with all the security and simplicity of centralized management.
            <v-icon>mdi-format-quote-close</v-icon><span class="caption">from <a href="https://www.citrix.com/glossary/vdi.html" target="_blank">Citrix Glossary</a></span>
          </blockquote>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="display-1">What is SBC?</div>
          <blockquote class="blockquote">
            <v-icon>mdi-format-quote-open</v-icon>
            <strong>Server-Based Computing</strong> - also known as RDSH/SBC/HSD,  run multiple sessions from a single machine to deliver multiple applications and desktops to multiple, simultaneously connected users. Each user requires a single session from which they can run all their hosted applications.
            <v-icon>mdi-format-quote-close</v-icon><span class="caption">from <a href="https://docs.citrix.com/en-us/citrix-virtual-apps-desktops/technical-overview/delivery-methods/published-apps-desktops.html" target="_blank">Citrix Docs</a></span>
          </blockquote>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="display-1">Who are the main VDI vendor?</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="vendor in STATE.solutionVendorCollection" :key="vendor.tag">
          <v-card>
            <div align="center">
              <v-img :src="vendor.imgSrc" aspect-ratio :alt="vendor.title" height="125" max-width="500" contain></v-img>
            </div>
              <v-card-title>{{ vendor.title }}</v-card-title>
              <v-card-text><span v-html="vendor.description"></span></v-card-text>
              <v-card-actions><v-btn text :href="vendor.website" target="_blank">Visit official website</v-btn></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
    STATE () {
      return this.$store.state
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
