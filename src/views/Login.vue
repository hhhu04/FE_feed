<template>
<div>
 <form class="main">
    <h2>로그인 페이지</h2>

    <div class="input-parent">
      <label for="email">User Email</label>
      <input type="text" id="email" v-model="email" placeholder="email">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" placeholder="password">
    </div>
    <button type="button" @click="postData" class="login">Sign In</button><br>
    <button type="button" @click="kaka()" class="kaka"><img :src="kakao" class="social"></button><br>
    <button type="button" @click="join" class="login">Sign Up</button><br>
  </form>
</div>    
</template>

<script>

export default {
    mounted:window.onload = function(){
      if(this.$cookies.isKey("token")) this.$router.replace("/")
    },
    data: function(){
        return {
            email : '',
            password: '',
            kakao: require('../assets/kakao_login_large_wide.png')
        }
    },
    methods:{
        join(){
            this.$router.replace("/join")
        },
        result(temp){
            this.$cookies.set("token",temp,"60*30")
        },
        kaka(){
            var url = this.$host + '/kakao/login'
            this.$axios
            .get(url)
            .then((res) => {
                window.open(res.data)
                this.$router.replace("/")
                
            })
            .catch((error) => {
                console.log(error);
            })
            

        },
        postData() {
            const str = {
                email:this.email,
                password:this.password
            }

            var url = this.$host + '/user/login'

            this.$axios
            .post(url,str)
            .then((res) => {
                if(res.status === 200 && res.data.data != null){
                    this.$cookies.set("token",res.data.data,"60*30");
                    this.$router.replace("/")
                    
                }
                else {
                    console.log(res.data)
                }
                
            })
            .catch((error) => {
                console.log(error);
            })
        
        }
    }
    
}


</script>

<style scoped>
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    font-family: inherit;
    box-sizing: border-box;
}
#main {
    width: max-content;
    margin: 40px auto;
    font-family: "Segoe UI", sans-serif;
    padding: 25px 28px;
    background: #151414;
    border-radius: 4px;
    border: 1px solid #302d2d;
    animation: popup 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
@keyframes popup {
    0% {
        transform: scale(0.2);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 400;
    color: #1b0202d7;
}
.input-parent {
    display: block;
    margin-bottom: 20px;
}
label {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
    color: #a4a4a4;
}
.input-parent input {
    padding: 10px 8px;
    width: 100%;
    font-size: 16px;
    background: #323131;
    border: none;
    color: #c7c7c7;
    border-radius: 4px;
    outline: none;
    transition: all 0.2s ease;
}
.input-parent input:hover {
    background: #404040;
}
.input-parent input:focus {
    box-shadow: 0px 0px 0px 1px #0087ff;
}
.login {
    padding: 10px 18px;
    font-size: 15px;
    background: #1a3969;
    display: block;
    margin: auto;
    width: 40%;
    border: 0;
    border-radius: 4px;
    color: #f4f4f4;
    transition: all 0.2s ease;
}
button:hover {
    opacity: 0.9;
}
button:focus {
    box-shadow: 0px 0px 0px 3px black;
}
.kaka {
    display: block;
    margin: auto;
    padding: 0%;
    width: 40%;
    height: 40px;
    border: 0;
}

.social {
    width: 100%;
    height: 40px;
}

</style>

