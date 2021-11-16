<template>
    <div class="modal-window" v-if="show" @click="hideModalWindow">
        <div class="modal-window__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import toggleMixin from "../../mixins/toggleMixin";

    export default {
        name: "modal-window",
        mixins: [toggleMixin]
    }
</script>

<style scoped>
    .modal-window {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-window__content {
        padding: 20px;
        background-color: #fff;
        width: 50%;
    }
</style>
