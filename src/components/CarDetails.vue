<template>
  <div
    class="flex flex-col w-full min-h-[100vh] bg-dark items-center justify-center font-montserrat"
  >
    <div class="flex flex-col w-5/6 p-10 gap-20 items-center bg-zinc-50">
      <h1 class="font-bold text-dark pt-10 text-5xl">Car Details:</h1>

      <div
        class="flex p-5 bg-white flex-col rounded-lg gap-4 items-center justify-center w-5/12 shadow-xl"
      >
        <h4 class="font-bold text-[16px]">test</h4>
        <div
          class="flex lg:flex-row text-center items-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Model:</span>
          <p class="italic">test</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Description:</span>
          <p class="italic">test</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Features: </span>
          <p class="italic">test</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Mileage:</span>
          <p class="italic">0</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Price:</span>
          <p class="italic">112344</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
