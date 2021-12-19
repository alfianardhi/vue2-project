<template>
  <div id="app">
     <!--<header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name:'Home'}" exact>ALOGO</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'About'}" exact>About</router-link>
          </li>
        </ul>
      </nav>
    </header>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>

</style>
