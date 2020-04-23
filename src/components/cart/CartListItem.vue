<template>
  <tr>
    <td>{{ item.title }}</td>
    <td>
      <input
        type="number"
        class="form-control"
        min="1"
        style="width:100px"
        v-model="item.qty"
      />
    </td>
    <td>${{ itemTotalPrice }}</td>
    <td>
      <button class="btn btn-danger" @click="removeFromCart(item)">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["item"],
  methods: {
    ...mapActions(["removeFromCart"]),
  },
  computed: {
    itemTotalPrice() {
      return (Number(this.item.qty) * Number(this.item.price)).toFixed(2);
    },
  },
};
</script>
