<template>
    <v-container>
      <v-row>
        <v-col>
          <div class="display-2">Settings</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Solution Vendor</div>
            </v-col>
          </v-row>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Title</th>
                <th class="text-left">Tag</th>
                <th class="text-left">ImgSrc</th>
                <th class="text-left">Website</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in STATE.solutionVendorCollection" :key="item.id">
                <td class="font-weight-bold">{{ item.title }}</td>
                <td>{{ item.tag }}</td>
                <td><v-img :src="item.imgSrc" max-width="100" contain></v-img></td>
                <td>{{ item.website }}</td>
                <td><span class="d-inline-block text-truncate" style="max-width: 150px;">{{ item.description }}</span></td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Solution Type</div>
            </v-col>
          </v-row>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Title</th>
                <th class="text-left">Tag</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in STATE.solutionTypeCollection" :key="item.id">
                <td class="font-weight-bold">{{ item.title }}</td>
                <td>{{ item.tag }}</td>
                <td>{{ item.description }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Solution Type Provisionning</div>
            </v-col>
          </v-row>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Title</th>
                <th class="text-left">Tag</th>
                <th class="text-left">From</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in STATE.solutionProvisionningCollection" :key="item.id">
                <td class="font-weight-bold">{{ item.title }}</td>
                <td>{{ item.tag }}</td>
                <td>{{ item.from }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Operating System</div>
            </v-col>
          </v-row>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Type</th>
                <th class="text-left">Family</th>
                <th class="text-left">Icon</th>
                <th class="text-left">Tag</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in STATE.archetypeOSCollection" :key="item.id">
                <td class="font-weight-bold">{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.family }}</td>
                <td><v-icon>{{ item.icon }}</v-icon></td>
                <td>{{ item.tag }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Archetype Workload Definition for VDI</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="item in STATE.ArchetypeWorkloadDefinition" :key="item.name">
              {{ item.name }}
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">Allocation Name</th>
                    <th class="text-left">vCPU</th>
                    <th class="text-left">Memory</th>
                    <th class="text-left">Disk</th>
                    <th class="text-left">RamCache</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="alloc in item.type.find(def => def.name === 'VDI').allocationType" :key="alloc.id">
                    <td class="font-weight-bold">{{ alloc.name }}</td>
                    <td>{{ alloc.cpu }}</td>
                    <td>{{ alloc.memory }}</td>
                    <td>{{ alloc.disk }}</td>
                    <td>{{ alloc.ramcache }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Archetype Workload Definition for SBC</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="item in STATE.ArchetypeWorkloadDefinition" :key="item.name">
              {{ item.name }}
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">Allocation Name</th>
                    <th class="text-left">vCPU</th>
                    <th class="text-left">Memory</th>
                    <th class="text-left">Disk</th>
                    <th class="text-left">RAMCache</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="alloc in item.type.find(def => def.name === 'SBC').allocationType" :key="alloc.id">
                    <td class="font-weight-bold">{{ alloc.name }}</td>
                    <td>{{ alloc.cpu }}</td>
                    <td>{{ alloc.memory }}</td>
                    <td>{{ alloc.disk }}</td>
                    <td>{{ alloc.ramcache }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Overcommit Ratio for CPU</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="item in STATE.OvercommitRatioCPU" :key="item.name">
              {{ item.name }}
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">Allocation Name</th>
                    <th class="text-left">vCPU per pCPU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="alloc in item.value" :key="alloc.id">
                    <td class="font-weight-bold">{{ alloc.name }}</td>
                    <td>{{ alloc.value }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Average IOPS per Workload Definition</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="item in STATE.averageWorkloadIOPS" :key="item.name">
              {{ item.name }}
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">OS</th>
                    <th class="text-left">Average IOPS</th>
                    <th class="text-left">Average IOPS (with Citrix RAMCache)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="obj in item.os" :key="obj.id">
                    <td class="font-weight-bold">{{ obj.name }}</td>
                    <td>{{ obj.value.find(def => def.ramcache === 'false').iops }}</td>
                    <td>{{ obj.value.find(def => def.ramcache === 'true').iops }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Infrastructure Components Definition for Citrix</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">Component</th>
                    <th class="text-left">Tag</th>
                    <th class="text-left">Role</th>
                    <th class="text-left">CPU</th>
                    <th class="text-left">Memory (GB)</th>
                    <th class="text-left">Disk (GB)</th>
                    <th class="text-left">Scalability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in STATE.infrastructureComponentDefintion.find(def => def.vendor === 'CITRIX').component" :key="item.id">
                    <td class="font-weight-bold">{{ item.name }}</td>
                    <td>{{ item.tag }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.sizing.vCPU }}</td>
                    <td>{{ item.sizing.memory }}</td>
                    <td>{{ item.sizing.disk }}</td>
                    <td>{{ item.sizing.scalability }} ({{ item.sizing.scalabilityUnit }})</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Infrastructure Components Definition for VMware</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th class="text-left">Component</th>
                    <th class="text-left">Tag</th>
                    <th class="text-left">Role</th>
                    <th class="text-left">CPU</th>
                    <th class="text-left">Memory (GB)</th>
                    <th class="text-left">Disk (GB)</th>
                    <th class="text-left">Scalability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in STATE.infrastructureComponentDefintion.find(def => def.vendor === 'VMWARE').component" :key="item.id">
                    <td class="font-weight-bold">{{ item.name }}</td>
                    <td>{{ item.tag }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.sizing.vCPU }}</td>
                    <td>{{ item.sizing.memory }}</td>
                    <td>{{ item.sizing.disk }}</td>
                    <td>{{ item.sizing.scalability }} ({{ item.sizing.scalabilityUnit }})</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'settings',
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
    GET_ARCHETYPE_VDI (item) {
      return this.$store.state.ArchetypeWorkloadDefinition.find(def => def.name === item.name).type.find(def => def.name === 'VDI')
    }
  }
}
</script>

<style scoped>
</style>
