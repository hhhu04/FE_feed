<template>
<div id="Main">
    <h2>젠킨스 테스트</h2> 
    <div>
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
            }"
            @on-row-click="onRowClick"
            >
        </vue-good-table><br>
        <b-button block variant="outline-secondary" @click="newFeed()">글쓰기</b-button>
    </div>
</div>
</template>

<script>
export default {
    name: "Main",
   mounted:window.onload = function(){
      this.getData()
  },
  data: function(){
        return {
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
         onRowClick(params) {
             this.$router.replace('/feed/'+params.row.id)
             this.$router.go()
         },
        newFeed(){
            this.$router.replace('/feed/new')
        },
        getData() {
            var url = this.$host + '/all_feed'
            this.$axios
            .get(url)
            .then((res) => {
                if(res.status === 200){
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