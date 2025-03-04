<script>
  import { onMount } from 'svelte';
  import { createFactory } from './factory';

  let product;
  let selectedProductType = 'ProductTypeA';

  const productTypes = ['ProductTypeA', 'ProductTypeB', 'ProductTypeC', 'ProductTypeD'];

  function createProduct() {
    try {
      const factory = createFactory(selectedProductType);
      product = factory.createProduct();
    } catch (error) {
      console.error('Error creating product:', error);
      product = null;
    }
  }

  onMount(() => {
    createProduct();
  });
</script>

<main>
  <h1>Abstract Factory Demo</h1>
  <select bind:value={selectedProductType} on:change={createProduct}>
    {#each productTypes as type}
      <option value={type}>{type}</option>
    {/each}
  </select>
  {#if product}
    <p>Product created: {product.name}</p>
  {:else}
    <p>Unknown product. Add ProductTypeDFactory to the factory file</p>
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