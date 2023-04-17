import { ChangeEvent, useState } from 'react';

import './style.css';

import RestaurantList from './RestaurantList';
import RestaurantDetailModal from '../RestaurantDetailModal';

import { useModal } from '../common/Modal/useModal';
import {
  CATEGORIES,
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  SORT_BY,
} from '../../domain/constants';
import type { FilterCategory, Restaurant, SortBy } from '../../domain/type';

interface Props {
  restaurants: Restaurant[];
}

const RestaurantListContainer = ({ restaurants }: Props) => {
  const [clickedRestaurant, setClickedRestaurant] = useState<Restaurant | null>(
    null,
  );
  const [category, setCategory] = useState<FilterCategory>(DEFAULT_CATEGORY);
  const [sortBy, setSortBy] = useState<SortBy>(DEFAULT_SORT_BY);

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as FilterCategory);
  };

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortBy);
  };

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setClickedRestaurant(restaurant);
    openModal();
  };

  return (
    <>
      <main>
        <section className="filter-section">
          <select name="category" id="category" onChange={handleCategoryChange}>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select name="sortBy" id="sortBy" onChange={handleSortByChange}>
            {SORT_BY.map((sortBy) => (
              <option key={sortBy} value={sortBy}>
                {sortBy}
              </option>
            ))}
          </select>
        </section>
        <section className="restaurant-list-section">
          <RestaurantList
            restaurants={restaurants}
            category={category}
            sortBy={sortBy}
            onClickRestaurant={handleRestaurantClick}
          />
        </section>
      </main>
      {isModalOpen && clickedRestaurant && (
        <RestaurantDetailModal
          restaurant={clickedRestaurant}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};

export default RestaurantListContainer;
