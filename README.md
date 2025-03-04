# Abstract Factory Pattern Demo with Svelte

This repository contains a demonstration of the Abstract Factory design pattern in software development.

## Main Files

### App.svelte

```js
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
```

### factory.js

```js
export function createFactory(type) {
  switch (type) {
    case 'ProductTypeA':
      return new ProductTypeAFactory();
    case 'ProductTypeB':
      return new ProductTypeBFactory();
    case 'ProductTypeC':
      return new ProductTypeCFactory();
    default:
      throw new Error('Unknown product type');
  }
}

class ProductTypeAFactory {
  createProduct() {
    return { name: 'Product A' };
  }
}

class ProductTypeBFactory {
  createProduct() {
    return { name: 'Product B' };
  }
}

class ProductTypeCFactory {
  createProduct() {
    return { name: 'Product C' };
  }
}

```

## demo

https://m-housni.github.io/abstract-factory-demo/