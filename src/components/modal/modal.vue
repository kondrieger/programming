<template>
    <div @click="onClose" class="modal-mask">
        <div ref="wrapper" class="modal-wrapper modal-wrapper--fullscreen" tabindex="0" @click.stop @keydown="keyDown">
            <div
                class="modal-container popup"
                :class="{ [`popup--${type}`]: type, [`popup--${name}`]: name }"
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

                <img
                    @click="close"
                    class="modal-default-button popup__close"
                    :src="require('../../img/svg/cross.svg')"
                    alt=""
                />
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
        isScrollLocked: {
            type: Boolean,
            default: true,
        },
        close: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            clickInside: false,
            lock: false,
        };
    },
    methods: {
        onPopupMouseDown() {
            this.clickInside = true;
        },
        onPopupMouseUp() {
            this.clickInside = false;
        },
        onClose() {
            if (!this.clickInside) this.close();
            else this.clickInside = false;
        },
        keyDown(e) {
            switch (e.key) {
                case 'Escape':
                    if (this.closeOnBtn) this.close();
                    e.preventDefault();
                    break;
            }
        },
    },
    mounted() {
        this.lock = this.isScrollLocked;
        this.$refs.wrapper.focus();
    },
    beforeDestroy() {
        this.lock = false;
    },
};
</script>
