<template>
  <div class="text-center">
    <div style="font-size: 72px; color: red;">404</div>
    <div>
      <router-link :to="{ name: 'home' }" class="btn btn-sm btn-primary">
        <a>Homepage</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
