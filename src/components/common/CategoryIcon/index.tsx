import AsianIcon from './AsianIcon';
import ChineseIcon from './ChineseIcon';
import EtcIcon from './EtcIcon';
import JapaneseIcon from './JapaneseIcon';
import KoreanIcon from './KoreanIcon';
import WesternIcon from './WesternIcon';

import type { Category } from '../../../domain/type';

interface Props {
  category: Category;
}

const CATEGORY_ICONS = {
  한식: <KoreanIcon />,
  중식: <ChineseIcon />,
  일식: <JapaneseIcon />,
  양식: <WesternIcon />,
  아시안: <AsianIcon />,
  기타: <EtcIcon />,
};

const CategoryIcon = ({ category }: Props) => {
  return CATEGORY_ICONS[category];
};

export default CategoryIcon;
