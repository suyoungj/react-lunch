import { Component } from 'react';

import './style.css';

import CategoryIcon from '../../../common/CategoryIcon';

interface Props {
	restaurantData: any;
}

class Restaurant extends Component<Props> {
	render() {
		const { category, name, distance, description } = this.props.restaurantData;

		return (
			<li className="restaurant">
				<div className="restaurant__category">
					<CategoryIcon category={category} />
				</div>
				<div className="restaurant__info">
					<div className="flex">
						<div>
							<h2 className="restaurant__name text-subtitle">{name}</h2>
							<span className="restaurant__distance text-body">
								캠퍼스부터 {distance}분 내
							</span>
						</div>
					</div>
					<p className="restaurant__description text-body">{description}</p>
				</div>
			</li>
		);
	}
}

export default Restaurant;
