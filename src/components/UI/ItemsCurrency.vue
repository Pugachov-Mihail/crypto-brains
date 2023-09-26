<template>
    <div class="flex pr-5 w-full">
        <div>
            <div class="flex">
                <div>
                    {{ currency.symbol }} 
                </div>
                <div 
                    class="pl-2" 
                    :style="{color: currency.priceChangePercent >= 0 ? 'green' : 'red'}">
                    {{ currency.priceChangePercent }}%
                </div>
            </div>
            <h3>{{ parseFloat(currency.volume).toFixed(3) }}</h3>
        </div>
        <div class="line">
        </div>
    </div>
</template>

<script>
export default {
    name: 'items-currency',
    props: {
        currency: {
            type: Object
        },
    },
}
</script>

<style scoped>

.line {
    margin-left: 2em;
    margin-top: .5em;
    vertical-align: middle;
    height: 1.8em;
    border-right: 1px solid #ADB3BF;
}

</style>