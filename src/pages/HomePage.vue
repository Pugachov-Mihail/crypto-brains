<template>
    <div class="w-full mt-5">
        <div>
            <index-main-page></index-main-page>
        </div>
        <div class="container ml-auto flex mx-auto pb-20 w-full">
            <items-currency v-for="item in tikets" :currency="item" :key="item.id"/>
        </div>
    </div>
    <div>
        <market-trends></market-trends>
    </div>
</template>

<script>
import axios from 'axios';
import IndexMainPage from "@/components/mainPage/IndexMainPage.vue"
import MakeTrends from '@/components/mainPage/MakeTrends.vue';

export default {
    name: "home-page",
    components: {
        "index-main-page": IndexMainPage,
        "market-trends": MakeTrends,
    },
    data (){
        return {
            tikets: []
        }
    },
    methods: {
        async getAllTicket(){
            //https://api.binance.com/api/v3/ticker/24hr?symbols=["BNBBTC","ETHBTC", "LTCBTC", "QTUMETH", "LRCETH"]
            const res = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbols=["BNBBTC","ETHBTC","LTCBTC","QTUMETH","LRCETH","ANKRBTC"]')
            this.tikets = res.data
            console.log(this.tikets)
        }
    },
    mounted() {
        this.getAllTicket()
    }  
}
</script>

<style scoped>

.main {
    display: flex;
    justify-content: space-between;
    padding: 2em;
}

</style>