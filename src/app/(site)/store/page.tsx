import { FadeIn } from "@/components/ui/fade-in";
import { ProductCard } from "@/components/store/ProductCard";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  type ProductCategory,
} from "@/lib/products";

export const metadata = {
  title: "Store",
};

export default function StorePage() {
  const categories = Object.keys(PRODUCT_CATEGORIES) as ProductCategory[];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn className="text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          IT <span className="text-gradient-gold">Store</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Quality computers, components, and accessories from TRADIQPH. Add
          items to your cart and pay securely via Xendit.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-16">
        {categories.map((category) => {
          const categoryProducts = PRODUCTS.filter(
            (p) => p.category === category
          );
          if (categoryProducts.length === 0) return null;

          const meta = PRODUCT_CATEGORIES[category];

          return (
            <section key={category}>
              <FadeIn>
                <h2 className="font-heading text-2xl font-bold">
                  {meta.label}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {meta.description}
                </p>
              </FadeIn>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product, i) => (
                  <FadeIn key={product.id} delay={i * 0.05}>
                    <ProductCard product={product} />
                  </FadeIn>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
