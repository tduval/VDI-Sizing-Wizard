<template>
    <div>
        <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">{{steps[current].content}}
            <keep-alive>
                <component v-bind:is="steps[current].component">
                </component>
            </keep-alive>
        </div>

        <div class="steps-action">
            <a-button
                v-if="current < steps.length - 1"
                type="primary" @click="next"
            >
                Next
            </a-button>
            <a-button
                v-if="current == steps.length - 1"
                type="primary"
                @click="$message.success('Processing complete!')"
            >
                Done
            </a-button>
            <a-button
                v-if="current>0"
                style="margin-left: 8px"
                @click="prev"
            >
                Previous
            </a-button>
        </div>
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
      current: 0,
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
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
}
</script>

<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
