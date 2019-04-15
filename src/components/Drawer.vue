<template>
    <q-layout-drawer
      v-model="drawerStatus"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item v-for="(item, index) in drawerItems" :key="index" :to="item.destination">
          <q-item-side :icon="item.icon"/>
          <q-item-main :label="item.label" :sublabel="item.sublabel"/>
        </q-item>
      </q-list>
    </q-layout-drawer>
</template>
<script>
export default {
  data: () => ({
    leftDrawerOpen: this.$q.platform.is.desktop,
    drawerItems: [
      {
        label: 'Menu item',
        sublabel: ' sublabel',
        destination: 'home',
        icon: 'home'
      }
    ]
  }),
  computed: {
    drawerStatus () {
      return this.$store.getters['Drawer/getStatusDrawer']
    }
  }
}
</script>
