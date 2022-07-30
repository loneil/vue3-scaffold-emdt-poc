<script setup lang="ts">
import { ref, inject } from "vue";
import Button from "primevue/button";
import axios from "axios";

/**
 * ##callBackend
 * Check a call to the tenantUI backend
 */
const callBackend = () => {

  axios({
    method: "get",
    url: "/hello"
  })
    .then((res) => {
      alert(res);
    });
};

/**
 * ##callTraction
 * Check a call to the tenantUI backend
 */
const callTraction = () => {

  axios({
    method: "get",
    url: "/hello"
  })
    .then((res) => {
      alert(res);
    });
};
</script>

<template>
  <Button label="Call Backend API" @click="callBackend"></Button>
  <Button label="Call Traction API" @click="callTraction"></Button>
</template>
