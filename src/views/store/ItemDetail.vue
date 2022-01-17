<template>
<div id="Detail">
    <div>
        <table class="tbAdd" >
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            <tr>
                <th>품명</th>
                <td>{{name}}</td>
            </tr>
            <tr>
                <th>등록자</th>
                <td>{{nickName}}</td>
            </tr>
            <tr>
                <th>가격</th>
                <td>{{price}}</td>
            </tr>
            <tr>
                <th>수량</th>
                <td>{{amount}}</td>
            </tr>
            <tr>
                <th>등록시간</th>
                <td>{{time}}</td>
            </tr>
            <tr v-if="img">
                <th>사진</th>
                <td class="txt_cont"><img :src="require(`../../assets/${img}`)" class="social"></td>
            </tr>
           
        </table>
        <hr>
      
        <b-button block variant="outline-secondary" @click="back()">뒤로</b-button>
    </div>
</div>
</template>

<script>
var pathName = location.pathname.split("/")
var id = pathName[2]
export default {
    name: "Detail",
   mounted:window.onload = function(){
      this.getData()
  },
  data: function(){
        return {
            name:'',
            nickName:'',
            img:'',
            time:'',
            price:'',
            amount:'',
            userid: '',
            token: this.$cookies.get("token"),
            imgUrl: ''
            // C:\Users\cat\FE_feed\src
            // C:/Users/cat/Desktop/img/
        }
    },
    methods:{
        back(){
            this.$router.push("/")
        },
        getData() {
            var url = this.$host + '/store/'+id
            this.$axios
            .get(url,{
                headers: {
                Authorization:this.$cookies.get("token")
            }
        })
            .then((res) => {
                if(res.status === 200){
                    this.price = res.data.data.price
                    this.name = res.data.data.name
                    this.nickName = res.data.data.nickName
                    this.amount = res.data.data.total
                    this.time = res.data.data.createdAt
                    if(res.data.data.img === '-1') this.img = false
                    else {
                        var im = '../../assets/'+res.data.data.img
                        console.log(im)
                        this.img = res.data.data.img
                        console.log(this.img)
                    }
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
