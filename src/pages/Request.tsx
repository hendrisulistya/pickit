import React, { useState } from 'react';
import { productData } from '../data/productData'

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
};

const productCatalog: Product[] =  productData
const Tab: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
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
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-4 border shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <p className="text-blue-500">{product.category}</p>
    </div>
  );
};

const Request: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productCatalog);

  const handleTabClick = (category: string) => {
    if (category === 'All') {
      setFilteredProducts(productCatalog);
    } else {
      const filtered = productCatalog.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setActiveTab(category);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="flex flex-wrap justify-center md:justify-start p-2 space-x-2 mb-4 md:mb-0 mt-2 md:mt-0">
  <Tab label="All" isActive={activeTab === 'All'} onClick={() => handleTabClick('All')} />
  <Tab label="Jilbab" isActive={activeTab === 'Jilbab'} onClick={() => handleTabClick('Jilbab')} />
  <Tab label="Tas" isActive={activeTab === 'Tas'} onClick={() => handleTabClick('Tas')} />
  <Tab label="Sandal" isActive={activeTab === 'Sandal'} onClick={() => handleTabClick('Sandal')} />
  <Tab label="Sepatu" isActive={activeTab === 'Sepatu'} onClick={() => handleTabClick('Sepatu')} />
  {/* Add more tab buttons for different categories */}
</div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Request
