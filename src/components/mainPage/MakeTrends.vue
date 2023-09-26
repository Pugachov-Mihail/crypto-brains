<template>
    <div class="flex justify-between">
        <h1 class="text-4xl font-bold text-white ml-20">
            Market Trends 
        </h1>
        <ul class="flex mr-20">
            <li v-for="item in navList" 
                :key="item.id" 
                class="text-gray-400 m-3">
                <a :href="item.url">
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </div>
    <div class="mt-10">
        <item-market />
    </div>
</template>

<script>
export default {
    name: "market-trends",
    data(){
        return {
            navList: [
                {id: 1, title: "All", url: "#"},
                {id: 2, title: "Top Gainers", url: "#"},
                {id: 3, title: "Top Losers", url: "#"},
                {id: 4, title: "New Listing", url: "#"},
                {id: 5, title: "Defi", url: "#"},
                {id: 6, title: "Metaverse", url: "#"},
            ]
        }
    }
}
</script>

