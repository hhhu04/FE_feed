<template>
<div id="Basket">
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
            >
        </vue-good-table><br>
        <table class="tbAdd" >
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            <tr v-if="price > 0">
                <th>결제 예정 금액</th>
                <td>{{price}} 원</td>
                <td><b-button block variant="outline-secondary" @click="buy()">구매</b-button></td>
            </tr>
            <tr v-else>
                <td>장바구니가 비었습니다.</td>
            </tr>
        </table>
        <br>
        <hr>

        <b-button block variant="outline-secondary" @click="back()">뒤로</b-button>
    </div>
</div>
</template>

<script>
export default {
    name: "Basket",
   mounted:window.onload = function(){
      this.getData()
  },
  data: function(){
        return {
            columns: [
                {
                label: 'Name',
                field: 'name',
                },
                {
                label: 'price(원)',
                field: 'price',
                type: 'String',
                },
                {
                label: 'amount(개)',
                field: 'total',
                type: 'number',
                },
            ],
            rows: [],
            price:'',
        }
    },
    methods:{
        back() {
             this.$router.replace('/mypage')
         },
        buy(){
            var url = this.$host + '/store/payment'
            const str = {totalPrice:this.price}
            this.$axios
            .post(url,str,{
                headers: {
                Authorization:this.$cookies.get("token")
                }
            })
            .then((res) => {
                if(res.status === 200){
                    console.log(res.data[0])
                    this.$cookies.set("tradeNumber",res.data[1],"60*30")
                    this.$cookies.set("tids",res.data[2],"60*30")
                    this.$cookies.set("price",this.price,"60*30")
                    window.open(res.data[0])
                }
                else {
                    console.log(res.data)
                }
                
            })
            .catch((error) => {
                console.log(1)
                console.log(error);
            })
        
        },
        getData() {
            var url = this.$host + '/basket'
            this.$axios
            .get(url,{
                headers: {
                Authorization:this.$cookies.get("token")
                }
            })
            .then((res) => {
                if(res.status === 200){
                    this.rows = res.data.data
                    var sum = 0;
                    for(var i = 0; i < res.data.data.length;i++){
                        sum = sum + res.data.data[i].price
                    }
                    this.price = sum
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

<style scoped>
.social {
    width: 400px;
    height: 500px;
    display: block;
    margin: auto;
}
	.tbAdd{
        border-top:1px solid #888;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:200px; vertical-align:top;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>
