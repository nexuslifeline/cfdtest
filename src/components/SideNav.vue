<template>
    <div class="sidenav">
      <ul class="sidenav__menus">
        <li v-for="(menu, idx) in menus" 
          :key="idx" 
          :class="{active: idx === activeMenuIndex}"
          @click="onMenuSelect(idx)">
            <a :href="menu.to">
              <v-icon :name="menu.icon" scale="1.7"></v-icon>
            </a>
        </li>
        
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      activeMenuIndex: 1,
      menus: [
        {'icon': 'home', to: '/#/', name: 'home'},
        {'icon': 'cogs', to: '/#/', name: 'coordinates'},
        {'icon': 'chart-pie', to: '/#/graphs', name: 'graphs'}
      ]
    }
  },
  created() {
    console.log(this.$router.currentRoute)
  },
  methods: {
    onMenuSelect(idx) {
      this.activeMenuIndex = idx;
    }
  }
}
</script>
<style scoped>
  .sidenav {
    position: fixed;
    width: 50px;    
    height: 100%;
    border-right: 1px solid #d7d7d7;
  }

  .sidenav__menus {
    padding: 0;
    margin: 0; 
  }

  .sidenav__menus li {
    margin: 0;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #d7d7d7;  
  }

  li.active {
    border-right: 1px solid white;
    margin-right: -1px;
  }


</style>
