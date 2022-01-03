<template>
<div>
    <div>
    </div>
</div>
</template>
<script>
const Host = "http://192.168.93.129:8080/allFeed?size=5";
export default {
    name: "Main",
    methods:{
        getData() {
            this.$axios
            .get(Host)
            .then((res) => {
                if(res.status === 200){
                    console.log("실행")
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