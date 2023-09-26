<template>
<div class="rounded-md border w-64">
    <img :src="currency.img"/>
    <h3>
        {{ currency.text }}
    </h3>
    <h3>{{ parseFloat(currency.priceChangePercent).toFixed(3) }}</h3>
    <h3>
        {{ currency.volume }}
    </h3>
</div>
</template>

<script>
export default {
    name: "item-market",
    props: {
        currency: {
            type: Object,
        }
    }
}
</script>