import { ref } from "vue"

const getCurrency = () => {
  const currencies = ref([])
  const getApi = async () => {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    )
    const data = await response.json()
    if (data) currencies.value = data
  }

  return { currencies, getApi }
}

export default getCurrency
