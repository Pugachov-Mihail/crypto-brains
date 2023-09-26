<template>
 <div class="flex mt-2">
    <div class="header w-9/12">
        <div>
            <h4>
                Crypto Brains
            </h4>
        </div>
        <div>
            <h2>
                Buy & Sell Crypto Easy With Crypto Brains
            </h2>
        </div>
        <div>
            <p> 
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
        </div>
    </div>
    <div class="w-6/12">
        <img src="@/assets/home_page.svg">
    </div>
 </div>
</template>

<script>
export default {
    name: "index-main-page"
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 10%;
    margin-top: 2.5em;
}

.header h4 {
    color: #1B70F1
}
img {
    width: 60%;
    margin-left: 10%;
    margin-top: -5%;
}
.header h2 {
    line-height: 1.5em;
    font-size: 2.5em;
}
</style>