<template>
<div>
    <h1>home</h1>
    <input type="text" v-model="title" />
    <button type="button" @click="getData">get</button>
    <button type="button" @click="setData">set</button>

    <div id="this.$summernote">

    </div>
</div>
</template>
<script>
export default {
    data(){
        return  { 
            title: "개발자"
        };
    },
    methods:{
        getData() {
            alert(this.title);
        },
        setData() {
            this.title="12345"
        }
    }
}
</script>