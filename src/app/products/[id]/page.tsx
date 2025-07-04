import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetails';
import { getProductById } from '@/lib/data';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <ProductDetail product={product} />
    </div>
  );
} 