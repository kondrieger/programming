<template>
    <div @click="onClose" class="modal-mask">
        <div
            ref="wrapper"
            class="modal-wrapper"
            tabindex="0"
            @keydown="keyDown"
            :class="{ 'modal-wrapper--fullscreen': type === 'fullscreen' }"
        >
            <div
                class="modal-container popup"
                :class="{ [`popup--${type}`]: type, [`popup--${name}`]: name }"
                ref="popup"
                @mousedown="onPopupMouseDown"
                @mouseup="onPopupMouseUp"
            >
                <div class="modal-header popup__header">
                    <slot name="header">
                        <!-- Default header -->
                    </slot>
                </div>

                <div class="modal-body popup__body">
                    <slot name="body">
                        <!-- Default body -->
                    </slot>
                </div>

                <div class="modal-footer popup__footer" v-if="footerEnabled">
                    <slot name="footer"></slot>
                </div>
                <button
                    type="button"
                    title="Закрыть"
                    class="modal-default-button popup__close"
                    v-on:click="$emit('close')"
                >
                    <svg class="icon icon--cross-big" width="20px" height="20px">
                        <use xlink:href="#icon-cross" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import './modal.css';

export default {
    name: 'modal',
    props: {
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        closeOnBtn: {
            type: Boolean,
            default: true,
        },
        close: {
            type: Function,
            default: () => {},
        },
        footerEnabled: {
            type: Boolean,
            default: false,
        },
    },
    components: {},
    data() {
        return {
            clickInside: false,
        };
    },
    methods: {
        onPopupMouseDown(e) {
            this.clickInside = true;
        },
        onPopupMouseUp(e) {
            this.clickInside = false;
        },
        onClose(e) {
            const { popup } = this.$refs;
            if (popup && popup !== e.target && !popup.contains(e.target)) {
                if (!this.clickInside) this.$emit('close');
                else this.clickInside = false;
            }
        },
        keyDown(e) {
            switch (e.key) {
                case 'Escape':
                    if (this.closeOnBtn) this.$emit('close');
                    e.preventDefault();
                    break;
            }
        },
    },
    mounted() {
        this.$refs.wrapper.focus();
    },
    beforeDestroy() {},
};
</script>
