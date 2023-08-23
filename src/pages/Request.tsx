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

type CountryCode = {
  code: string,
  name: string
}
const countries: CountryCode[] = [
  { code: '+62', name: 'Indonesia' },
  { code: '+1', name: 'United States' },
];

const Request: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productCatalog);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countries[0] )
  const [phoneNumber, setPhoneNumber] = useState<string>('')

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

//   const handleSubmit = () => {
//   const payload = selectedProductIds.join(',');
//   const whatsappUrl = `https://wa.me/6282227755886?text=pickit.com%2F${payload}`;
//   window.location.href = whatsappUrl;
// };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container mx-auto p-4 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200">
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
        onClick={openModal}
      >
        Submit
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Send Request to:</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const countryCode: string = e.target.value;
                    const selected = countries.find((country) => country.code === countryCode);
                    if (selected) {
                      setSelectedCountry(selected);
                    }
                  }}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Whatsapp Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter recipient Number"
                />
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                  const payload = selectedProductIds.join(',');
                  const encodedData = btoa(JSON.stringify(payload));
                  const modPhoneNumber = phoneNumber.slice(1)
                  const Url = `https://wa.me/${selectedCountry.code}${modPhoneNumber}?text=http://pickit.com/order/${encodedData}`;
                  const whatsappUrl = encodeURI(Url)
                  window.location.href = whatsappUrl;
                  closeModal();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Request;
