<template>
    <div class="nav__bar">
        <div class="logo__nav">
            <img src="../assets/logo.svg"/>
        </div>
        <div>
            <ul class="nav__items">
                <li v-for="item in menu" :key="item.id">
                   <a :href="item.url">
                        {{ item.text }}
                   </a>
                </li>
            </ul>
        </div>
        <div class="log_in">
            <a>Log In</a>
            <btn-ui :name="'Sing Up'"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: {
        menu: {
            types: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.nav__bar {
    display: flex;
    justify-content: space-between;
    background-color: #1E1F25;
    padding: 3vh;
    color: #ADB3BF;
    padding-left: 5em;
    padding-right: 5em;
 }
.logo__nav {
    border-right: 1px solid #ADB3BF;
}   
.logo__nav img {
    padding-right: 1em;
    margin-top: .5em;
}
.nav__items li{
    display: inline;
    margin: 1em;
}
.nav__items {
    font-size: 18px;
    font-weight: 600;
    margin: .5em;
}
.log_in a {
    padding: 1em;
    font-size: 18px;
    font-weight: 600;
}
</style>