<template>
    <div class="text-input">
        <label class="text-input__label" :for="inputId">
            <slot />
        </label>
        <div class="text-input__container">
            <input
                v-if="tag === 'input'"
                v-bind="$attrs"
                v-on="inputListeners"
                v-mask="mask"
                class="text-input__input"
                :class="{ 'is-invalid': error }"
                :id="inputId"
                :value="display"
                :type="type"
                :aria-describedby="`${inputId}-alert`"
            />
            <textarea
                v-if="tag === 'textarea'"
                v-bind="$attrs"
                v-on="inputListeners"
                v-mask="mask"
                class="text-input__input"
                :class="{ 'is-invalid': error }"
                :id="inputId"
                :value="display"
                :aria-describedby="`${inputId}-alert`"
            />
            <slot name="after" />
        </div>

        <div :id="`${inputId}-alert`" class="error-message text-input__error" role="alert">
            <slot name="error" :error="error">
                {{ error }}
            </slot>
        </div>
    </div>
</template>

<script>
import maskMixin from './maskMixin';
import inputMixin from './inputMixin';
import './VInput.css';

const validTags = ['input', 'textarea'];

export default {
    name: 'text-input',
    inheritAttrs: false,
    mixins: [inputMixin, maskMixin],
    props: {
        value: {},
        type: { type: String, default: 'text' },
        tag: {
            type: String,
            default: 'input',
            validator(value) {
                return validTags.indexOf(value) !== -1;
            },
        },
    },
    data() {
        return {
            inputId: `text-input-id-${this._uid}`,
        };
    },
};
</script>
