<template>
    <div style="margin: 50px 0;">
        <a-row :gutter="48" type="flex" justify="center">
            <a-col>
                <a-card hoverable style="width: 480px;">
                    <img
                        alt="VMware Horizon 7"
                        src="vmware-horizon-logo_300x200.png"
                        slot="cover"
                        style="width: auto; height: auto; margin: auto; padding-top: 25px"
                    />
                    <a-card-meta title="VMware Horizon 7">
                        <template slot="description">https://www.vmware.com/products/horizon.html</template>
                    </a-card-meta>
                </a-card>
            </a-col>

            <a-col>
                <a-card hoverable style="width: 480px;">
                    <img
                        alt="Citrix XenDesktop 7"
                        src="citrix-xendesktop-logo_300x200.png"
                        slot="cover"
                        style="width: auto; height: auto; margin: auto; padding-top: 25px"
                    />
                    <a-card-meta title="Citrix XenDesktop 7">
                        <template slot="description">https://www.citrix.com/products/citrix-virtual-apps-and-desktops/</template>
                    </a-card-meta>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
  name: 'StepVendor',
  props: {
    vendor: null
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

<style>
</style>
