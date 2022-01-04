<template>
<div id="Main">
    <div v-if="url">
        <vue-good-table 
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            :pagination-options="{
                enabled: true,
                perPage: 5,
            }"
            :search-options="{
            enabled: true,
            trigger: 'enter',
            skipDiacritics: true,
            placeholder: 'Search this table',
            }">
        </vue-good-table><br>
        <b-button block variant="outline-secondary" @click="newFeed()">글쓰기</b-button>
    </div>
</div>
</template>

<script>
const Host = "http://192.168.93.129:8080/allFeed";

export default {
    name: "Main",
   mounted:window.onload = function(){
      this.getData()
  },
  data: function(){
        return {
            // write: this.$router.push('/feed/new'),
            url : window.location.pathname === '/',
            arr: [],
            contents: [],
            columns: [
                {
                label: 'Name',
                field: 'nickName',
                },
                {
                label: 'title',
                field: 'title',
                type: 'String',
                },
                {
                label: 'Created At',
                field: 'createdAt',
                type: 'String',
                },
                {
                label: 'comments',
                field: 'comments.length',
                type: 'number',
                },
            ],
            rows: [],
        }
    },
    methods:{
        newFeed(){
            this.$router.push('/feed/new')
        },
        getData() {
            this.$axios
            .get(Host)
            .then((res) => {
                if(res.status === 200){
                    this.arr = res.data
                    this.rows = res.data.content
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