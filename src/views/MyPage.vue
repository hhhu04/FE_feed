<template>
<div id="My">
    <div>
        <h1>게시판 등록</h1>
        <table class="tbAdd" >
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            
            <tr>
                <th>닉네임</th>
                <td>{{nickName}}</td>
            </tr>
            <tr>
                <th>생성일</th>
                <td>{{createdAt}}</td>
            </tr>
            <tr>
                <th>등급</th>
                <td>{{grade}}</td>
            </tr>
            <tr>
                <th>개시글 수</th>
                <td>{{feeds}}</td>
            </tr>
            <tr>
                <th>댓글 수</th>
                <td>{{comments}}</td>
            </tr>
            <tr>
                <th>상품 수</th>
                <td>{{items}}</td>
            </tr>
        </table>
        <b-button block variant="outline-secondary" @click="back()">뒤로</b-button>
        <b-button block variant="outline-secondary" @click="back()">장바구니</b-button>
        <b-button block variant="outline-secondary" @click="putData()">수정</b-button>
        <b-button block variant="outline-secondary" @click="deleteData()">탈퇴</b-button>
    </div>
</div>
</template>

<script>
export default {
    name: "My",
   mounted:window.onload = function(){
      this.getData()
  },
  data: function(){
        return {
            nickName: '',
            createdAt: '',
            grade: '',
            feeds: '',
            comments: '',
            items: ''
        }
    },
    methods:{
        putData(){
            this.$router.replace("/put/user")
        },
        deleteData(){
            if(confirm("정말 삭제 하시겠습니까?")){
            //     var url = this.$host + '/user/delete'
            //     this.$axios.put(url,{
            //     headers: {
            //     Authorization:this.$cookies.get("token")
            //     }
            // }).then((res) => {
            //     console.log(res.data)
                
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
            }
        },
        back(){
            this.$router.go(-1)
        },
        getData() {
            var url = this.$host + '/user/info'
            this.$axios
            .get(url,{
                headers: {
                Authorization:this.$cookies.get("token")
                }
            })
            .then((res) => {
                if(res.status === 200){
                    var data = res.data.data
                    this.nickName = data.nickName
                    this.createdAt = data.createdAt
                    this.grade = data.roles
                    this.feeds = data.feeds.length
                    this.comments = data.comments.length
                    this.items = data.items.length
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
 h1 {text-align: center;}
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


