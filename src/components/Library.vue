<template>
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
                        <tr v-for="item in allBookList" :key="item.id" style="color: red">  
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
                    <div v-for="item in ownBookList" :key="item.id" style="color: red">
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
</template>
<script>
import axios from "axios";
import moment from 'moment';
export default {    
    name: 'Library',
    data() {
        return {
            allBookList:[],
            ownBookList:[]
        }
    }, 
    methods: {
    async showData() {
        let result = await axios.get("http://192.168.0.17:8081/library/allBooks");
        this.allBookList = result.data;
            },
        async showOwnBooks() {
            let result1 = await axios.get("http://192.168.0.17:8081/library/userBooks?kullaniciId=" + this.kulNo);
            if(Object.keys(result1.data).length == 0) {
                alert('hiç kayıt yok');
            }
            this.ownBookList = result1.data;
            },
            getFormattedDate(date) {
                if(date == null) return "";
            return moment(date).format("DD/MM/YYYY")
            }
}
};
</script>