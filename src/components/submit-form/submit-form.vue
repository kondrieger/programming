<template>
    <form @submit.prevent="submit" class="submit-form">
        <div class="submit-form__inputs">
            <text-input v-model="form.name" :error="nameError"> Имя </text-input>
            <text-input v-model="form.tel" :error="telError" :tag="'input-masked'" mask="+7 (###) ###-##-##" type="tel">
                Телефон
            </text-input>
            <text-input v-model="form.email" :error="emailError"> Электронная почта </text-input>
            <text-input v-model="form.birth"> Дата рождения ребенка </text-input>
        </div>
        <a-button theme="yellow" text="Оставить заявку" />
        <p class="submit-form__text">
            Нажимая, вы соглашаетесь с <a href="#">положением о защите персональных данных</a> , и отправкой вам sms и
            e-mail сообщений. <a href="#">Договор оферты</a>.
        </p>
    </form>
</template>

<script>
/* eslint-disable vue/return-in-computed-property */
import validationMixin, { required, email, tel, nameAll } from '../../plugins/validation';
import TextInput from '../text-input/text-input.vue';
import AButton from '../button/button.vue';
export default {
    name: 'submit-form',
    mixins: [validationMixin],
    components: { TextInput, AButton },
    data() {
        return {
            form: {
                name: null,
                tel: null,
                email: null,
                birth: null,
            },
        };
    },
    validations: {
        form: {
            name: {
                required,
                nameAll,
            },
            email: {
                required,
                email,
            },
            tel: {
                required,
                tel,
            },
        },
    },

    methods: {
        submit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log(this.form);
            }
        },
    },
    computed: {
        nameError() {
            if (this.$v.form.name.$dirty) {
                if (!this.$v.form.name.required) return 'Укажите свое имя';
            }
        },
        telError() {
            if (this.$v.form.tel.$dirty) {
                if (!this.$v.form.tel.required) return 'Укажите телефон';
                if (!this.$v.form.tel.tel) return 'Неверный формат';
            }
        },
        emailError() {
            if (this.$v.form.email.$dirty) {
                if (!this.$v.form.email.required) return 'Укажите почту';
                if (!this.$v.form.email.email) return 'Неверный формат';
            }
        },
    },
};
</script>

<style>
.submit-form {
    height: 556px;
    width: 414px;
    padding: 27px 31px 31px;
    background-color: var(--cl-violet);
    border-radius: 24px;

    &__inputs {
        margin-bottom: calc(var(--gs) * 4);
    }

    &__text {
        margin-top: calc(var(--gs) * 3.5);
        font-size: 12.4px;
        color: var(--cl-white);
        line-height: 1.5;

        & a {
            display: inline;
            color: var(--cl-white);
            border-bottom: 1px solid var(--cl-white);
        }
    }
}
</style>
