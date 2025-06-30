
import React from 'react';
import { Category } from '@/data/portfolioData';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-12 gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-sm text-sm font-light transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-stone-700 text-stone-50'
              : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
