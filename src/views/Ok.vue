<template>
<div>
</div>
</template>

<script>
var path = location.href.split("?")
var pg = path[1]




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

            var tradeNumber = this.$cookies.get("tradeNumber")
            var tids = this.$cookies.get("tids")
            var price = this.$cookies.get("price")
            this.$cookies.remove("tradeNumber")
            this.$cookies.remove("tids")
            this.$cookies.remove("price")
            var str = "&tradeNumber="+tradeNumber+"&tids="+tids+"&price="+price

            var url = this.$host + '/store/ok?'+pg+str
            this.$axios
            .get(url,{
                headers: {
                Authorization:this.$cookies.get("token")
                }
            })
            .then((res) => {
                if(res.status === 200){
                    // alert(res.data)
                    this.$cookies.remove("tradeNumber")
                    this.$cookies.remove("tids")
                    this.$cookies.remove("price")
                    window.close()
                }
                else {
                    console.log(res.data)
                }
                
            })
            .catch((error) => {
                console.log(1)
                console.log(error);
            })

        
        }
    }

}
</script>
