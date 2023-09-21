<template>
  <div
    class="flex flex-col w-full min-h-[100vh] bg-dark items-center justify-center font-montserrat"
  >
    <div class="flex flex-col w-5/6 p-10 gap-20 items-center bg-zinc-50">
      <h1 class="font-bold text-dark pt-10 text-5xl">Car Details:</h1>
      <!-- check if car isn't undefined-->
      <div
        v-if="car"
        class="flex p-5 bg-white flex-col rounded-lg gap-4 items-center justify-center w-5/12 shadow-xl"
      >
        <h4 class="font-bold text-[16px]">
          {{ car.make.toLocaleUpperCase() }}
        </h4>
        <div
          class="flex lg:flex-row text-center items-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Model:</span>
          <p class="italic">{{ car.model }}</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Description:</span>
          <p class="italic">{{ car.description }}</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Features: </span>
          <p class="italic">{{ car.features }}</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Mileage:</span>
          <p class="italic">{{ car.mileage }}</p>
        </div>
        <div
          class="flex lg:flex-row items-center text-center justify-center flex-col"
        >
          <span class="not-italic font-bold text-m pr-3">Price:</span>
          <p class="italic">{{ car.price }}</p>
        </div>
      </div>
      <div v-else>
        <h1>Error</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import getCars from "../utility/getCars"; //
import { Car } from "./CarsList.vue"; //import car interface type

const car = ref<Car | null>(null);
const route = useRoute();

//get the data when the component mount
onMounted(async () => {
  const carId = Number(route.params.id); //getting the id from the route params (:id) and cast as a number
  const data = await getCars();

  if (data) {
    car.value = data.find((c: Car) => c.id === carId) || null; //get the correct car by using the id passed from the route
  }
});
</script>
