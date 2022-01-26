<template>
<div id="Detail">
    <div>
        <table class="tbAdd" >
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            <tr>
                <th>제목</th>
                <td>{{title}}</td>
            </tr>
            <tr>
                <th>글쓴이</th>
                <td>{{nickName}}</td>
            </tr>
            <tr>
                <th>작성시간</th>
                <td>{{time}}</td>
            </tr>
            <tr v-if="img">
                <th>사진</th>
                <td class="txt_cont"><img :src="imgUrl" class="social"></td>
            </tr>
            <tr>
                <th>내용</th>
                <td class="txt_cont">{{body}}</td>
            </tr>
        </table>
        <hr>
        <vue-good-table
            :columns="columns"
            :rows="comments"
            :line-numbers="true"
            :pagination-options="{
                enabled: true,
                perPage: 2,
            }"
            />
        
        <form>
            <input type="text" v-model="commentBody" style="width:85%">
            <b-button block variant="outline-secondary" @click="newComment()">댓글 저장</b-button>&nbsp; <b-button block variant="outline-secondary" @click="back()">뒤로</b-button>
        </form>
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
             columns: [
        {
          label: 'Name',
          field: 'nickName',
        },
         {
          label: 'body',
          field: 'body',
          type: 'String',
        },
        {
          label: 'Created At',
          field: 'createdAt',
          type: 'String',
        },
      ],
            title:'',
            nickName:'',
            body:'',
            img:'',
            time:'',
            comments:[],
            commentBody:'',
            token: this.$cookies.get("token"),
            imgUrl: ''
        }
    },
    methods:{
        back(){
            this.$router.push("/")
        },
        newComment(){
            const str = {
                feedId:id,
                body:this.commentBody
            }

            var url = this.$host + '/comment/new'

             this.$axios
            .post(url,str,{
                headers: {
                Authorization:this.$cookies.get("token")
            }
        })
            .then((res) => {
                if(res.status === 200 && res.data.data != null){
                    this.$router.go();
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
        getImg() {
            var imgUrl = this.$host + '/feed/img?image='+this.img
            this.$axios
                .get(imgUrl,{
                headers: {
                Authorization:this.$cookies.get("token")
            }
        })
                .then((res) => {
                    this.imgUrl = "data:image/jpg;base64," + res.data;
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getData() {
            var url = this.$host + '/feed/'+id

            this.$axios
            .get(url,{
                headers: {
                Authorization:this.$cookies.get("token")
            }
        })
            .then((res) => {
                if(res.status === 200){
                    this.comments = res.data.data.comments
                    this.title = res.data.data.title
                    this.nickName = res.data.data.nickName
                    this.body = res.data.data.body
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
