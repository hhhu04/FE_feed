<template>
	<div>
		<h1 class="title">게시판 등록</h1>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td><input type="text" v-model="subject" ref="subject" /></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="cont" ref="cont"></textarea></td>
					</tr>
          <tr>
            <td>사진</td>
            <td><input type="file" v-on:change="onInutImage" multiple accept="image/*" id="file" ref="image"></td>
          </tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
	</div>
</template>

<script>
export default {
	data() { 
		return{
			subject:'',
			cont:'',
      img: ''
		}
	}
	,methods:{
    onInutImage(e){
      var file = e.target.files[0]
	this.img = file
    },
		fnList(){ 
			this.$router.push('/');
			
		}
		,fnAddProc() { 
			if(!this.subject) { 
				alert("제목을 입력해 주세요");
				return;
			}

			if(!this.cont){
				alert("본문을 입력하세요")
				return;
			}

			let data = new FormData()
			data.append('title',this.subject)
			data.append('body',this.cont)
			data.append('img',this.img)

			var url = this.$host+'/feed/new'
			
			this.$axios.post(url,data,{
                headers: {
                Authorization:this.$cookies.get("token"),
				'Content-Type' : 'multipart/form-data'
            }
        })
			.then((res)=>{
				if(res.status === 200) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
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

<style scoped>
  h1 {text-align: center;}
	.tbAdd{border-top:1px solid #888; width: 90%; text-align: center;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbAdd td{padding:10px 10px; box-sizing:border-box;}
	.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>

