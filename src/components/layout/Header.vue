<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="category" right>
        <b-dropdown-item href="/store">store</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="javascript:;" @click="logout" v-if="token">Sign Out</b-dropdown-item>
        <b-dropdown-item href="/mypage" v-if="token">My Page</b-dropdown-item>
        <b-dropdown-item href="/login" v-else>Sign In</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>

export default {
    name:"Header",
    data(){
        return  { 
            token: this.$cookies.remove("token")
          
        };
    },
    methods:{
      logout(){
        this.$cookies.set
      }
    }
}
</script>



