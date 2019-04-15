<template>
  <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="openCloseDrawer()" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          App title
          <div slot="subtitle">Subtitle</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
</template>
<script>
export default {
  data: () => ({

  }),
  methods: {
    openCloseDrawer () {
      this.$store.commit('Drawer/toogleStatus')
    }
  }
}
</script>
<style>

</style>
