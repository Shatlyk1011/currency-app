<template>
  <main class="app">
    <h1>Конвертер валют</h1>

    <div class="container">
      <div class="wrap">
        <div class="amount">
          <label> Количество</label>
          <input type="text" />
        </div>
        <div class="from">
          <label></label>
          <input type="text" />
        </div>
        <div class="to">
          <label>Хочу</label>
          <input type="text" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/globals";
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    margin-bottom: 4rem;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    .wrap {
      background-color: $color-accent;
      padding: 2rem 3rem;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      label {
        font-size: 1.4rem;
        font-weight: 500;
      }

      input {
        all: unset;
        border-radius: 6px;
        padding: 6px;
        border: 1px solid $color-text;

        &:focus {
          border: 1px solid $color-main-2;
        }
      }

      .amount,
      .from,
      .to {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .amount {
      }

      .from {
      }

      .to {
      }
    }
  }
}
</style>
