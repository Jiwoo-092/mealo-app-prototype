import { Link, usePathname } from '../lib/router';
import Icon from './Icon';

/**
 * 하단 플로팅 탭바 — Figma 'tab bar' (136×60 — 홈 · 아카이브 두 개, 아이콘 32)
 * 선택된 탭은 fill 아이콘 + 다크 배경, 나머지는 line 아이콘.
 */
const TABS = [
  { to: '/home', label: '홈', icon: 'home_light', active: 'home_fill', match: ['/home', '/polaroids'] },
  { to: '/archive/folders', label: '아카이빙', icon: 'box', active: 'box_fill', match: ['/archive'] },
];

/** inArtboard: 홈처럼 375×812 아트보드 안에 그릴 때(디자인 좌표 top 727) */
export default function TabBar({ inArtboard = false }: { inArtboard?: boolean }) {
  const pathname = usePathname();
  return (
    <nav className={`tabbar${inArtboard ? ' tabbar--art' : ''}`} aria-label="주요 메뉴">
      {TABS.map(({ to, label, icon, active, match }) => {
        const on = match.some((m) => pathname.startsWith(m));
        return (
          <Link key={to} to={to} className="tabbar__tap" aria-label={label} aria-current={on ? 'page' : undefined}>
            <Icon name={on ? active : icon} size={32} />
          </Link>
        );
      })}
    </nav>
  );
}
