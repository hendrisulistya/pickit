import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../data/productData';
import { Product as ProductType } from '../data/productData';
import InvalidData from '../components/InvalidData';

const Order: React.FC = () => {
  const { orderData } = useParams<{ orderData?: string }>();

  if (orderData === undefined) {
    return <div>Invalid data</div>;
  }

  // Decode the orderData and handle decoding errors
  let decodedData: number[] = [];
  try {
    const decodedString = atob(orderData);
    decodedData = decodedString.split(',').map(Number);
  } catch (error) {
    return (
      <InvalidData />
    )
  }

  const newProduct: ProductType[] = productData;
  const orderedIds: number[] = decodedData.map(Number);

  const orderedProducts: ProductType[] = newProduct.filter(product =>
    orderedIds.includes(product.id)
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-400 to-blue-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Ordered Item</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {orderedProducts.map(product => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-500 text-justify">{product.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
