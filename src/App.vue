<template>
  <main class="app">
    <h1>Конвертер валют</h1>

    <div class="container">
      <form class="form" @submit.prevent="">
        <div class="wrap">
          <div class="amount">
            <label>Количество</label>
            <input type="text" />
          </div>
          <div class="from">
            <label>Есть</label>
            <input type="text" />
          </div>

          <span>
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

          <div class="to">
            <label>Хочу</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit">Конвертировать</button>
      </form>
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
    color: $color-main;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    .form {
      display: flex;
      gap: 3rem;
      flex-direction: column;
      background-color: $color-main-2;
      padding: 2rem 3rem;
      border-radius: 6px;
      .wrap {
        display: flex;
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
            border: 1px solid $color-main;
          }
        }

        .amount,
        .from,
        .to {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
        }

        .amount {
        }

        .from {
        }

        .to {
        }

        span {
          display: flex;
          align-self: flex-end;
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
}
</style>
