<template>
  <div id="app">
      <a-layout>

        <a-layout-header>
          <div class="logo" />
          <a-menu
            theme="dark"
            mode="horizontal"
            :defaultSelectedKeys="['1']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1"><router-link to="/">Home</router-link></a-menu-item>
            <a-menu-item key="2"><router-link to="/">New Project</router-link></a-menu-item>
          </a-menu>
        </a-layout-header>

        <a-layout-content style="padding: 50px 50px">
          <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"><router-view/></div>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
            Project released on <a href="https://github.com/tduval/VDI-Sizing-Wizard" target="_blank" rel="noopener">Github</a>
        </a-layout-footer>

      </a-layout>
  </div>
</template>

<style>
</style>
