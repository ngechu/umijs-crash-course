import { useQuery } from 'react-query';
import { getAllProducts } from '@/services/products';
import ProductCard from '@/components/productCard';

export default function HomePage() {
  const { data, isLoading } = useQuery(['products'], getAllProducts);
  if (isLoading) {
    return '....................loading';
  }
  console.log(data);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Get the latest Merch
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((e: any) => {
            return (
              <div key={e.id}>
                <ProductCard product={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
