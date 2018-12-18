<template>
    <div>
        <v-stepper v-model="currentStep">
            <v-stepper-header>
                <v-stepper-step :complete="currentStep > 1" step="1">
                    Vendor
                </v-stepper-step>
                <v-divider></v-divider>

                <v-stepper-step :complete="currentStep > 2" step="2">
                    Type
                </v-stepper-step>
                <v-divider></v-divider>

                <v-stepper-step step="3">
                    Archetype
                </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-5" color="grey lighten-1" height="auto">
                        <StepVendor></StepVendor>
                    </v-card>

                    <v-btn v-if="VENDOR_SELECTED" color="primary" @click="currentStep = 2">
                        Continue
                        <v-icon right>fas fa-angle-right</v-icon>
                    </v-btn>
                    <v-btn v-else disabled color="primary" @click="currentStep = 2">
                        Continue
                        <v-icon right>fas fa-angle-right</v-icon>
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                    </v-card>

                    <v-btn color="primary" @click="currentStep = 3">
                        Continue
                        <v-icon right>fas fa-angle-right</v-icon>
                    </v-btn>

                    <v-btn flat @click="currentStep--">
                        <v-icon left>fas fa-angle-left</v-icon>
                        Previous
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                    </v-card>

                    <v-btn color="success" @click="currentStep = 1">
                        Finish
                    </v-btn>

                    <v-btn flat @click="currentStep--">
                        <v-icon left>fas fa-angle-left</v-icon>
                        Previous
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import StepVendor from '@/components/StepVendor.vue'
import StepType from '@/components/StepType.vue'
import StepArchetype from '@/components/StepArchetype.vue'

export default {
  name: 'home',
  components: {
    StepVendor,
    StepType,
    StepArchetype
  },
  data () {
    return {
      currentStep: 0,
      steps: [{
        title: 'Vendor',
        content: 'Select your VDI-based solution',
        component: StepVendor
      }, {
        title: 'Desktop Type',
        content: 'Which kind of virtual desktop',
        component: StepType
      }, {
        title: 'Archetype',
        content: 'Archetype and quantity desired',
        component: StepArchetype
      }]
    }
  },
  computed: {
    VENDOR_SELECTED () {
      return this.$store.state.vendorSelected
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
