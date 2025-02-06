import { MotionDiv } from "../_components/animated-component";
import BottomSheet from "../_components/bottomSheet";
import Footer from "../_components/footer";
import Header from "../_components/header";
import ProductList from "../_components/product-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../_components/ui/breadcrumb";
import { Separator } from "../_components/ui/separator";

interface ProductsProps {
  searchParams: {
    category: string;
  };
}

function Products({ searchParams }: ProductsProps) {
  return (
    <div>
      <Header isMenuOpen />
      <Breadcrumb className="mt-4 px-4 lg:px-32">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold" href="/">
              Página inicial
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold">Motos</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-12 flex flex-col px-4 lg:px-32">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-2xl font-bold lg:text-5xl">MELHORES PREÇOS</h1>
          <BottomSheet />
        </MotionDiv>
        <MotionDiv
          transition={{ duration: 0.4 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Separator className="h-[2px] bg-primary" />
        </MotionDiv>
      </div>

      <div className="mb-12 px-32">
        <ProductList category={searchParams.category} />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
