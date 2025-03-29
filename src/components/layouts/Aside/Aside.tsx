import { BadgePlus, Flame, LucideProps, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import * as style from './Aside.css';

type Anchor = {
  path: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
};

const ANCHORS: Anchor[] = [
  {
    path: '/',
    name: 'New',
    icon: Sparkles,
  },
  {
    path: '/popular',
    name: 'Popular',
    icon: Flame,
  },
  {
    path: '/create',
    name: 'Create',
    icon: BadgePlus,
  },
];

function Aside() {
  const { pathname } = useLocation();

  return (
    <aside className={style.aside}>
      {ANCHORS.map((it) => {
        const isActive = it.path === pathname;

        const Icon = it.icon;

        return (
          <Link to={it.path} className={style.anchor} key={it.path}>
            <div className={style.iconHolder}>
              <Icon
                size={24}
                className={isActive ? style.activeIcon : style.icon}
              />
            </div>
            <p className={isActive ? style.activeAnchorText : style.anchorText}>
              {it.name}
            </p>
          </Link>
        );
      })}
    </aside>
  );
}

export default Aside;
