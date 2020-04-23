<template>
  <div>
    <p class="lead">Product Cart</p>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <CartListItem v-for="item in cartItems" :key="item.id" :item="item" />
      </tbody>
    </table>
    <hr />
    <button class="btn btn-success btn-lg">
      Checkout
      <span>($)</span>
    </button>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  created() {
    this.$store.dispatch("fetchCarts");
  },
};
</script>
