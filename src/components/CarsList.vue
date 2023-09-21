<script setup lang="ts"></script>
<template>
  <div class="flex w-full min-h-[100vh] bg-dark justify-center font-montserrat">
    <div class="flex flex-col w-5/6 gap-20 items-center bg-zinc-50">
      <h1 class="font-bold text-dark pt-10 text-5xl">List car</h1>

      <div
        class="flex bg-white flex-col rounded-lg items-center w-2/4 shadow-xl"
      >
        <ul class="flex flex-col w-10/12 py-4">
          <li
            class="flex items-center hover:bg-gray-200 rounded-lg justify-between px-10 py-3 w-full"
          >
            <p>Brand Model 1244531</p>

            <button class="primary-btn">
              <span class="m-2 whitespace-nowrap">Show more</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
