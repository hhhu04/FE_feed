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
                <!-- <td class="txt_cont"><img :src="require(`@/assets/${img}`)" class="social"></td> -->
                <td class="txt_cont"><img :src="imgUrl" class="social"></td>
            </tr>
            <tr><b-button block variant="outline-secondary" @click="box()">장바구니 넣기</b-button></tr>
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
            imgUrl: '',
            id: ''
        }
    },
    methods:{
        box(){
            var url = this.$host + '/store/insert_box'
            const str = {
                id:this.id,
            }

            this.$axios
            .put(url,str,{
                headers: {
                Authorization:this.$cookies.get("token")
            }
        })
            .then((res) => {
                if(res.status === 200){
                    console.log(res.data)
                }
                
            })
            .catch((err) => {
                console.log(1)
                console.log(err);
                 if(err.response.status === 403){
                    alert("로그인해 주세요")
                    this.$router.push('/login')
                }
            })
        
        },
        back(){
            this.$router.push("/store")
        },
        getImg() {
            var imgUrl = this.$host + '/store/img?image='+this.img
            this.$axios
                .get(imgUrl)
                .then((res) => {
                    this.imgUrl = "data:image/jpg;base64," + res.data;
                })
                .catch((error) => {
                    console.log(error)
                })
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
                    this.id = res.data.data.id
                    this.price = res.data.data.price
                    this.name = res.data.data.name
                    this.nickName = res.data.data.nickName
                    this.amount = res.data.data.total
                    this.time = res.data.data.createdAt
                    if(res.data.data.img === '-1') this.img = false
                    else {
                        this.img = res.data.data.img
                        this.getImg()
                    }
                }
                else {
                    console.log(res.data)
                
                }
                
            })
            .catch((err) => {
                console.log(1)
                console.log(err);
                 if(err.response.status === 403){
                    alert("로그인해 주세요")
                    this.$router.push('/login')
                }
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
