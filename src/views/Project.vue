<template>
    <v-container>
        <v-row>
            <v-col>
                <v-stepper v-model="currentStep" vertical>
                    <v-stepper-step editable :complete="currentStep > 1" step="1">Select a solution vendor</v-stepper-step>
                    <v-stepper-content step="1">
                        <StepSolutionVendor></StepSolutionVendor>

                        <v-btn :disabled="!VENDOR_SELECTED" color="primary" @click="currentStep++">Continue</v-btn>
                    </v-stepper-content>

                    <v-stepper-step editable :complete="currentStep > 2" step="2">Select the type of the solution</v-stepper-step>
                    <v-stepper-content step="2">
                        <StepSolutionType></StepSolutionType>

                        <v-btn :disabled="!TYPE_SELECTED" color="primary" @click="currentStep++">Continue</v-btn>
                        <v-btn text @click="currentStep--">Previous</v-btn>
                    </v-stepper-content>

                    <v-stepper-step editable step="3">Select the type of provisionning </v-stepper-step>
                    <v-stepper-content step="3">
                        <StepSolutionProvisionning></StepSolutionProvisionning>

                        <v-btn :disabled="!PROVISIONNING_SELECTED" color="primary" @click="currentStep++">Continue</v-btn>
                        <v-btn text @click="currentStep--">Previous</v-btn>
                    </v-stepper-content>

                    <v-stepper-step editable step="4">Select the type of assignment </v-stepper-step>
                    <v-stepper-content step="3">
                        <StepArchetype></StepArchetype>

                        <v-btn color="#42b883" to="/computed" dark>Continue</v-btn>
                        <v-btn text @click="currentStep--">Previous</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import StepSolutionVendor from '@/components/StepSolutionVendor.vue'
import StepSolutionType from '@/components/StepSolutionType.vue'
import StepSolutionProvisionning from '@/components/StepSolutionProvisionning.vue'
import StepArchetype from '@/components/StepArchetype.vue'

export default {
  name: 'project',
  components: {
    StepSolutionVendor,
    StepSolutionType,
    StepSolutionProvisionning,
    StepArchetype
  },
  data () {
    return {
      currentStep: 0
    }
  },
  computed: {
    VENDOR_SELECTED () {
      return this.$store.state._selectedSolutionVendor
    },
    TYPE_SELECTED () {
      return this.$store.state._selectedSolutionType
    },
    PROVISIONNING_SELECTED () {
      return this.$store.state._selectedSolutionProvisionning
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
