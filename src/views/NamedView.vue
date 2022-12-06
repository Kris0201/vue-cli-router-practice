<template>
  <h2>命名視圖(元件中有多個router-view)</h2>
  <div class="row">
    <div class="col-6">
      <router-view name="left"></router-view>
    </div>
    <div class="col-6">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>
