import RestaurantItem from './RestaurantItem';

import { DEFAULT_SORT_BY } from '../../../domain/constants';
import { restaurantService } from '../../../domain/restaurantService';
import type { FilterCategory, Restaurant } from '../../../domain/type';

interface Props {
  restaurants: Restaurant[];
  category: FilterCategory;
  sortBy: string;
  onClickRestaurant: (restaurant: Restaurant) => void;
}

const RestaurantList = ({
  restaurants,
  category,
  sortBy,
  onClickRestaurant,
}: Props) => {
  const filteredRestaurants = restaurantService.filterByCategory(
    restaurants,
    category,
  );
  const sortedRestaurants =
    sortBy === DEFAULT_SORT_BY
      ? restaurantService.sortByName(filteredRestaurants)
      : restaurantService.sortByDistance(filteredRestaurants);

  return (
    <ul className="restaurant-list">
      {sortedRestaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onClickRestaurant={onClickRestaurant}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
