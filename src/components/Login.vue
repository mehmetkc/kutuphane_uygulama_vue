<template>
<img alt="Vue logo" src="../assets/logo.png"> 
    <div class="box">
	<form>
		<span class="text-center">Uygulamaya giriş yapınız</span>
        <div class="input-container">
            <input type="text" required="true" v-model="kulNo"/>
            <label>Kullanıcı No</label>		
        </div>
        <div class="input-container">		
            <input type="password" required="true" v-model="sifre"/>
            <label>Şifre</label>
        </div>
        <button type="button" class="btn" v-on:click="getData()">Giriş</button>
    </form>	
</div>
<!--   <input type="text" id="userCode" placeholder="kullanıcı numarası giriniz" v-model="kulNo"/>
    <br/><br/>
    <input type="password" id="userPassword" placeholder="şifre giriniz" v-model="sifre"/>
    <br/><br/>
    <button type="button" v-on:click="getData()">Giriş</button>-->
</template>
<script>
import axios from "axios";
    export default {
        name :  "Login",
        data()
        {
            return {
                kulNo : null,
                sifre : null
            }
        },
        methods:{
            async getData() {
            let result = await axios.get("http://192.168.0.17:8081/login/check?id=" + this.kulNo + "&sifre=" + this.sifre);
            console.warn(result);
            if(result.data == true) {
                    this.$router.push({name: 'Library'} );
                } else {
                    alert('Hatalı kullanıcı veya şifre!!!');     
                }
            }
        }
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

body{
	background-image: url("../assets/background.jpg");
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:100vh;
	font-family: 'Noto Sans', sans-serif;
}
.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
}
.box{
	position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
}
.input-container{
	position:relative;
	margin-bottom:25px;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
	transition: all 0.5s ease-in-out;
}
.input-container input{ 
border:0;
border-bottom:1px solid #555;  
background:transparent;
width:100%;
padding:8px 0 5px 0;
font-size:16px;
color:#fff;
}
.input-container input:focus{ 
    border:none;	
    outline:none;
    border-bottom:1px solid #e74c3c;	
}
.btn{
	color:#fff;
	background-color:#e74c3c;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/
.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-12px;
	font-size:12px;
	
}


</style>