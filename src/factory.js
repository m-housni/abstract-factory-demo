export function createFactory(type) {
  switch (type) {
    case 'ProductTypeA':
      return new ProductTypeAFactory();
    case 'ProductTypeB':
      return new ProductTypeBFactory();
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
