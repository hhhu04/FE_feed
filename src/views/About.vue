<template>
<div>
    <h1>home</h1>
    <input type="text" v-model="title" />
    <button type="button" @click="getData">get</button>
    <button type="button" @click="setData">set</button>
    <input type="text" v-model="test">

    <div id="this.$summernote">

    </div>
</div>
</template>
<script>

export default {
    data(){
        return  { 
            title: "개발자",
            test: this.$router.query
        };
    },
    methods:{
        getData() {
            alert(this.$host);
        },
        setData() {
            this.title="12345"
        }
    }
}
</script>