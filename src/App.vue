<template>
    <div id="nav">
        <ul class="navLeft">
            <li v-for="(item,index) in menuList" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
        <div class="navRight">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                menuList: [
                    {path: "/", name: "Home"},
                    {path: "/about", name: "About"},
                ]
            }
        }
    }
</script>

<style lang="less">
    #app {
        width: 100%;
        height: 100%;
        color: #2c3e50;
    }

    #nav {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .navLeft {
            width: 200px;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid #42b983;

            li {
                height: 30px;
                line-height: 30px;
                font-size: 20px;

                & > a {
                    font-weight: bold;
                    color: #2c3e50;

                    &.router-link-exact-active {
                        color: #42b983;
                    }
                }
            }
        }

        .navRight {
            width: calc(100% - 200px);
            height: 100%;
            padding-left: 10px;
        }
    }
</style>
