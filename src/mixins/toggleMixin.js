export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        hideModalWindow() {
            this.$emit('update:show', false);
        }
    }
}
