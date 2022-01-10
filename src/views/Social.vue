<template>
<div>
</div>
</template>

<script>


export default {
    mounted:window.onload = function(){
      this.getData()
    },
    data: function(){
        return {
            token: location.path
        }
    },
    methods:{
        getData(){
            var token = window.location.search.split("=")[1]
            this.$cookies.set("token",token,"60*30");
            window.close()
        }
    }

}
</script>
