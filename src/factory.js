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
