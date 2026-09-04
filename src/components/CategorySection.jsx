import {
  Home,
  Gift,
  Heart,
  Flower2,
  Baby,
  Sparkles,
} from "lucide-react";

const categoryData = [
  {
    name: "Home Decor",
    icon: Home,
    description: "Beautiful handmade pieces",
  },
  {
    name: "Gifts",
    icon: Gift,
    description: "Made for special moments",
  },
  {
    name: "Accessories",
    icon: Sparkles,
    description: "Cute everyday creations",
  },
  {
    name: "Toys",
    icon: Baby,
    description: "Soft handmade friends",
  },
  {
    name: "Wall Decor",
    icon: Flower2,
    description: "Add warmth to your walls",
  },
  {
    name: "Custom",
    icon: Heart,
    description: "Made just for you",
  },
];

export default function CategorySection() {
  return (
    <section className="categories-section">

      <div className="section-heading">
        <span>SHOP BY CATEGORY</span>
        <h2>Made For Every Little Moment</h2>
        <p>
          Discover our collection of handmade crochet creations.
        </p>
      </div>

      <div className="category-grid">

        {categoryData.map((category) => {
          const Icon = category.icon;

          return (
            <div className="category-card" key={category.name}>

              <div className="category-icon">
                <Icon size={27} />
              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span className="category-arrow">
                →
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}