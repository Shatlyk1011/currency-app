<template>
  <main class="app">
    <h1>Конвертер валют</h1>

    <div class="container">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="wrap">
          <Input label="Количество" v-model="amount" />

          <Input
            @update:selected="handleUpdate"
            v-model.trim.lazy="value1"
            label="У меня есть"
            @focus="show1 = true"
            :currencies="currencies"
          />

          <span @click="changeValues">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="14"
              height="14"
              fill="#faffff"
            >
              <path
                d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"
              />
            </svg>
          </span>

          <Input
            @focus="show2 = true"
            @update:selected="handleUpdate"
            v-model.trim.lazy="value2"
            label="Хочу приобрести"
            :currencies="currencies"
          />
        </div>

        <div class="error" v-if="error">{{ error }}</div>

        <div class="result" v-if="result">
          <div class="p">
            <div class="from">{{ amount }} {{ value1 }}</div>
            равен <br />

            <div class="to">{{ result }} {{ value2 }}</div>
          </div>

          <div class="date">Дата: {{ date }}</div>
        </div>
      </form>
    </div>

    <a
      target="_blank"
      href="https://github.com/fawazahmed0/currency-api#readme"
      class="api-link"
    >
      api link
    </a>
  </main>
</template>

<script setup>
import { ref, watch } from "vue"
import getCurrency from "@/composables/getCurrency"
import axios from "axios"

import Input from "@/components/shared/Input.vue"

const { currencies, getApi } = getCurrency()
getApi()

const amount = ref("1")
const value1 = ref(null)
const value2 = ref(null)

const result = ref(null)
const date = ref(null)

const error = ref(null)

const changeValues = () => {
  let val1 = value1.value
  let val2 = value2.value
  value1.value = val2
  value2.value = val1
}

const handleUpdate = (payload, label) => {
  if (label == "У меня есть") value1.value = payload
  else if (label == "Хочу приобрести") value2.value = payload
}

const handleSubmit = () => {
  let obj = currencies.value
  error.value = null
  result.value = null

  let from = null
  let to = null
  for (let key in obj) {
    if (obj[key] == value1.value) from = key
    if (obj[key] == value2.value) to = key
  }

  if (from && to) {
    error.value = null

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`

    axios.get(url).then((res) => {
      if (res.data) {
        result.value = amount.value ? res.data[to] * amount.value : res.data[to]
        date.value = res.data.date
      }
    })
  } else {
    error.value = "Пожалуйста, выберите  валюту"
  }
}

watch([value1, value2, amount], () => {
  if (value1.value && value2.value) {
    handleSubmit()
  }
})
</script>

<style lang="scss">
@import "@/globals";
.app {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15rem 5rem;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;

  h1 {
    margin-bottom: 4rem;
    color: $color-main;
  }

  .container {
    max-width: 80rem;
    margin: 0 auto;
    background-color: $color-main-2;
    padding: 2rem 3rem;
    border-radius: 6px;

    .form {
      display: flex;
      gap: 3rem;
      flex-direction: column;

      .wrap {
        display: flex;
        gap: 1rem;

        span {
          display: flex;
          align-self: flex-start;
          margin-top: 2.4rem;
          padding: 1rem;
          border-radius: 30rem;
          border: 1px solid currentColor;
          transition: all 0.15s ease;

          &:hover {
            background-color: $color-main;
            border-color: $color-main;
          }
          svg {
            fill: $color-text;
          }
        }
      }

      .result {
        border: 1px solid rgba(#fff, 0.2);
        padding: 1rem;
        .p {
          line-height: 1.8;
          font-size: 1.8rem;
          .from {
            display: inline-block;
            font-weight: 500;
          }

          .to {
            font-weight: 500;
            font-size: 2.4rem;
          }
        }
        .date {
          margin-top: 2rem;
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }

      button {
        all: unset;
        font-size: 1.4rem;
        font-weight: 500;
        border-radius: 4px;
        letter-spacing: 0.3px;
        align-self: flex-end;
        padding: 1rem 1.6rem;
        background: $color-main;
        transition: all 0.15s ease;
        &:hover {
          background: $color-accent;
        }
      }
    }
  }

  .api-link:link,
  .api-link:visited {
    margin-top: 4rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: $color-text;
  }
}
</style>
