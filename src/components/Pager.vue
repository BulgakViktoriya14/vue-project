<template>
    <div class="pager">
        <div v-for="pageNumber in totalPage" :key="page" class="pager__item"
             :class="{'pager__item_current': page === pageNumber }" @click="changePage(pageNumber)">
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "pager",
        data() {
            return {}
        },

        props: {
            page: {
                type: Number
            },
            limit: {
                type: Number
            },
            totalPage: {
                type: Number
            },
        },

        methods: {
            changePage(pageNumber) {
                this.$emit('changePage', pageNumber);
            },
        }
    }
</script>

<style scoped>
    .pager {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 50px 0 0 0;
    }

    .pager__item {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px 10px 10px;
        border: 1px solid #e53f00;
        width: 30px;
        cursor: pointer;
    }

    .pager__item_current {
        background-color: #e53f00;
        color: #fff;
    }
</style>
