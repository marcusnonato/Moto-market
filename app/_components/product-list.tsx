import { db } from "../_lib/prisma";
import { MotionDiv } from "./animated-component";
import ProductItem from "./product-item";

interface ProductListProps {
  category?: string;
}

async function ProductList({ category }: ProductListProps) {
  const products = await db.motorbike.findMany({
    where: {
      category: (category && category) || undefined,
    },
  });

  return (
    <div className="mt-12 grid grid-cols-1 justify-items-center gap-12 px-4 lg:grid-cols-3">
      {products.map((product, index) => (
        <MotionDiv
          key={product.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductItem key={product.id} product={product} />
        </MotionDiv>
      ))}
    </div>
  );
}

export default ProductList;
