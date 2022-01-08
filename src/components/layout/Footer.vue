<template>
    <div class="base">   
        <hr>
        <p><a href="javascript:;" @click="newPark">newPark</a>&nbsp;
        <a href="javascript:;" @click="doram2">dogram2</a>&nbsp;
        <a href="javascript:;" @click="park">park</a>&nbsp;
        <a href="javascript:;" @click="dogram">dogram</a></p>
        <hr>
    </div>
</template>


<script>
export default {
     name:"Footer",
     methods:{
        newPark(){
            window.location = this.$host+'/down/newPark'
        }
     }
}
</script>


<style scoped>
.base {text-align: center;}
</style>
