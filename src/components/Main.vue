<template>
    <div class="main">
      <SideNav />
      <div class="content">
        <slot></slot>        
      </div>
    </div>
</template>

<script>
import SideNav from './SideNav';

export default {
  name: 'Main',
  components: {
    SideNav
  }
}
</script>
<style scoped>
  .main {
    width: 100%;
    display: flex;
  }
  .content {    
    margin-left: 50px;
    flex-grow: 1;
  }

</style>
