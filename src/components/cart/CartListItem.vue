<template>
  <tr>
    <td>{{ item.title }}</td>
    <td>
      <input
        type="number"
        class="form-control"
        min="1"
        style="width:100px"
        :value="item.qty"
      />
    </td>
    <td>${{ item.price }}</td>
    <td>
      <button class="btn btn-danger">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartListItem",
  props: ["item"],
};
</script>
