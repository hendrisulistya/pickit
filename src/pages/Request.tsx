import React, { useState } from 'react';
import { productData } from '../data/productData';
import { Product } from '../data/productData';

const productCatalog: Product[] = productData;

const Tab: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({
  label,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
);

const ProductCard: React.FC<{ product: Product; isSelected: boolean; onSelect: () => void }> = ({
  product,
  isSelected,
  onSelect,
}) => (
  <div
    className={`bg-white rounded-lg p-4 border shadow-md md:flex ${
      isSelected ? 'border-blue-500' : ''
    }`}
    onClick={onSelect}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full md:w-40 h-40 object-cover mb-4 md:mb-0 md:mr-4"
    />
    <div className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-500 text-justify mb-4">{product.description}</p>
      </div>
      <p className="text-blue-500">{product.category}</p>
    </div>
  </div>
);

const Request: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productCatalog);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);

  const handleTabClick = (category: string) => {
    if (category === 'All') {
      setFilteredProducts(productCatalog);
    } else {
      const filtered = productCatalog.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setActiveTab(category === activeTab ? 'All' : category);
  };

  const toggleProductSelection = (productId: number) => {
    setSelectedProductIds(prevSelectedIds =>
      prevSelectedIds.includes(productId)
        ? prevSelectedIds.filter(id => id !== productId)
        : [...prevSelectedIds, productId]
    );
  };

  const handleSubmit = () => {
    const Payload: number[] = selectedProductIds;
    console.log(Payload);
    // You can use the Payload array as needed, e.g., send it to a server
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="flex flex-wrap justify-center md:justify-start p-2 space-x-2 mb-4 md:mb-0 mt-2 md:mt-0">
        {['All', 'Jilbab', 'Tas', 'Sandal', 'Sepatu'].map(category => (
          <Tab
            key={category}
            label={category}
            isActive={activeTab === category}
            onClick={() => handleTabClick(category)}
          />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProductIds.includes(product.id)}
            onSelect={() => toggleProductSelection(product.id)}
          />
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Request;
