<template>
<div id="Store">
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
        <b-button block variant="outline-secondary" @click="newItem()">상품등록</b-button>
    </div>
</div>
</template>

<script>
export default {
    name: "Store",
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
                label: 'item',
                field: 'name',
                type: 'String',
                },
                {
                label: 'Created At',
                field: 'createdAt',
                type: 'String',
                },
                {
                label: 'amount',
                field: 'total',
                type: 'number',
                },
            ],
            rows: [],
        }
    },
    methods:{
         onRowClick(params) {
             this.$router.replace('/store/'+params.row.id)
             this.$router.go()
         },
        newItem(){
            this.$router.replace('/store/new')
        },
        getData() {
            var url = this.$host + '/all_item'
            this.$axios
            .get(url)
            .then((res) => {
                if(res.status === 200){
                    this.rows = res.data.data.content
                }
                else {
                    console.log(res.data)
                }
                
            })
            .catch((err) => {
                console.log(1)
                console.log(err);
                if(err.status === 403){
                    alert("로그인해 주세요")
                    this.$router.push('/login')
                }
            })
        
        }
    }

  

}

</script>