<template>
<router-view />
<!--<img alt="Vue logo" src="./assets/logo.png"> -->
<!--
<HelloWorld msg="Welcome to Your Vue.js App mehmet" />
<Merhaba /> 
<Login /> -->
    <!--<h1>Uygulamaya giriş yapınız</h1>
    <input type="text" placeholder="kullanıcı numarası giriniz" v-model="kulNo"/>
    <br/><br/>
    <input type="password" placeholder="şifre giriniz" v-model="sifre"/>
    <br/><br/>
    <button type="button" v-on:click="loginSystem()">Giriş</button>
    <button type="button" @click="showData()">Tüm kitapları getir</button>
    <button type="button" @click="showOwnBooks()">Bendeki kitapları getir</button>

    <div class="float-container">
        <div class="float-child">
            <div class="green">
                <table>
                    <thead>
                        <tr>
                            <th> Kitap Id </th> 
                            <th> Kitabın Adı </th> 
                            <th> Kitabın Yazarı </th> 
                            <th> Yayın Evi </th> 
                            <th> Basım Tarihi </th> 
                            <th> Baskı Sayısı </th> 
                            <th> Kitabın Türü </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in list" :key="item.id" style="color: red">  
                            <td> {{item.id}} </td> -
                            <td> {{item.adi}} </td> -
                            <td> {{item.yazari}} </td> -
                            <td> {{item.yayinEvi}} </td> -
                            <td> <span v-text="getFormattedDate(item.basimTarihi)"/> </td> -
                            <td> {{item.baskiSayisi}} </td> -
                            <td> {{item.turu}} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="float-child">
            <div class="blue">
                <table>
                    <div style="color:blue">
                        <tr>
                            <th> Kullanıcı Id </th> -
                            <th> Kitap Id </th> -
                            <th> Teslim Alma Tarihi </th> -
                            <th> Teslim Etme Tarihi </th> 
                        </tr>
                    </div>
                    <div v-for="item in list2" :key="item.id" style="color: red">
                        <tr>  
                            <td> {{item.kullaniciId}} </td> -
                            <td> {{item.kitapId}} </td> -
                            <td> <span v-text="getFormattedDate(item.teslimAlmaTarihi)"/> </td> -
                            <td> <span v-text="getFormattedDate(item.teslimEtmeTarihi)"/> </td> 
                        </tr>
                    </div>
                </table>
            </div>
        </div>
    </div>

    <div style="text-align:left;">
        
    </div>

    <div style="text-align:right;">
        
    </div>-->
</template>

<script>
import axios from "axios";
import moment from 'moment';

//import HelloWorld from './components/HelloWorld.vue'
//import Merhaba from './components/Merhaba.vue'
//import Login from './components/Login.vue';

export default {
    name: 'App',
    data() {
        return {
            list:[],
            list2:[],
            kulNo : null,
            sifre : null
        }
    },
    methods:{
          async loginSystem() {
               // alert(this.kulNo + "--" + this.sifre);
               let result = await axios.get("http://192.168.0.17:8081/login/check?id=" + this.kulNo + "&sifre=" + this.sifre);
               console.warn(result);
               if(result.data == true) {
                    alert(result.data);
                    this.$router.push({name: 'library'} );
               } else {
                   alert('Hatalı kullanıcı veya şifre!!!');     
               }
            },

        async showData() {
               let result = await axios.get("http://192.168.0.17:8081/library/allBooks");
               this.list = result.data;
            },
        async showOwnBooks() {
             //   alert(this.kulNo);
               let result1 = await axios.get("http://192.168.0.17:8081/library/userBooks?kullaniciId=" + this.kulNo);
               console.log(result1.data);
               if(Object.keys(result1.data).length == 0) {
                alert('hiç kayıt yok');
               }
               this.list2 = result1.data;
            },
            getFormattedDate(date) {
                if(date == null) return "";
            return moment(date).format("DD/MM/YYYY")
            }
        },
    components: {
 //   HelloWorld,
 //   Merhaba,
 //   Login
    },
 //   async mounted() {
        //let result = await axios.get("http://192.168.0.17:8081/library/allBooks");
        //this.list = result.data;
 //       let result = await axios.get("http://192.168.0.17:8081/login/check?id" + this.user + "&sifre" + this.password);
 //       console.warn(result);
        //this.list = result.data;
 //   }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.float-container {
    border: 3px solid  #fff;
    padding: 20px;
}

.float-child {
    width: 50%;
    float: left;
    padding: 5px;
    border: 2px solid #c18b8b;
}  
</style>
