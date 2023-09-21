<template>
  <div class="flex w-full min-h-[100vh] bg-dark justify-center font-montserrat">
    <div class="flex flex-col w-5/6 gap-20 items-center bg-zinc-50">
      <h1 class="font-bold text-dark pt-10 text-5xl">List car</h1>

      <div
        class="flex bg-white flex-col rounded-lg items-center w-2/4 shadow-xl"
      >
        <div class="relative flex m-3 w-10/12 flex-row-reverse rounded-lg">
          <input
            name="searchInput"
            class="peer w-full rounded-r-lg p-2 border border-slate-400 px-2 text-dark placeholder-slate-400 transition-colors duration-300 focus:border-dark focus:outline-none"
            type="text"
          />
          <label
            class="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-dark transition-colors duration-300 peer-focus:border-dark peer-focus:bg-dark peer-focus:text-white"
            for="searchInput"
          >
            search
          </label>
        </div>

        <ul class="flex flex-col w-10/12 py-4">
          <li
            class="flex lg:flex-col items-center hover:bg-gray-200 rounded-lg justify-between px-10 py-3 w-full"
            v-for="car in cars"
          >
            <p>{{ car.make }} {{ car.model }} {{ car.price }}</p>

            <button class="primary-btn">
              <span>Show more</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import getCars from "../utility/getCars";

// Car type interface
export interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
  description: string;
  features: string;
  mileage: number;
}

const cars = ref<Car[]>([]); // cars as an array on CarType based

onMounted(async () => {
  //get the data when the component mount
  const data = await getCars();
  if (data) {
    cars.value = data;
  }
});
</script>
