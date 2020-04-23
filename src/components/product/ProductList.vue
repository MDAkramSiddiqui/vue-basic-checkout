<template>
  <div>
    <ProductListItem
      v-for="product in productItems"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
