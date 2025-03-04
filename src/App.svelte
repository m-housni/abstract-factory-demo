<script>
  import { onMount } from 'svelte';
  import { createFactory } from './factory';

  let product;

  onMount(() => {
    const factory = createFactory('ProductTypeA');
    product = factory.createProduct();
  });
</script>

<main>
  <h1>Abstract Factory Demo</h1>
  {#if product}
    <p>Product created: {product.name}</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
  }
</style>