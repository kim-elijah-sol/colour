import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { getForegroundColorType } from '@/utils/functions';
import { flex } from '@/utils/styles';
import {
  Activity,
  BadgeDollarSign,
  BadgePlus,
  ChartLine,
  ContactRound,
  Eye,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  RadioTower,
  Siren,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts';
import paletteIcon from './assets/palette.png';
import * as style from './style.css';

function LandingPage() {
  const { colors } = useCreatePaletteColors();

  const foregroundColors = colors
    .map(getForegroundColorType)
    .map((it) => (it === 'black' ? '#333333' : '#FFFFFF'));

  return (
    <div className={style.container}>
      <aside className={style.aside} style={{ background: `#${colors[0]}` }}>
        <div className={style.asideTop}>
          <img
            style={
              foregroundColors[0] === '#FFFFFF'
                ? {
                    filter: 'brightness(5)',
                  }
                : undefined
            }
            src={paletteIcon}
            className={style.logo}
            alt=''
          />
          <div className={style.menus}>
            <div className={style.menu}>
              <LayoutDashboard size={20} color={foregroundColors[0]} />
              <p
                className={style.menuTitle}
                style={{ color: foregroundColors[0] }}
              >
                Dashboard
              </p>
            </div>
            <div className={style.menu}>
              <ChartLine size={20} color={foregroundColors[0]} />
              <p
                className={style.menuTitle}
                style={{ color: foregroundColors[0] }}
              >
                Statistics
              </p>
            </div>
            <div className={style.menu}>
              <FlaskConical size={20} color={foregroundColors[0]} />
              <p
                className={style.menuTitle}
                style={{ color: foregroundColors[0] }}
              >
                User Test
              </p>
            </div>
            <div className={style.menu}>
              <ContactRound size={20} color={foregroundColors[0]} />
              <p
                className={style.menuTitle}
                style={{ color: foregroundColors[0] }}
              >
                User
              </p>
            </div>
            <div className={style.menu}>
              <Siren size={20} color={foregroundColors[0]} />
              <p
                className={style.menuTitle}
                style={{ color: foregroundColors[0] }}
              >
                Policy
              </p>
            </div>
          </div>
        </div>
        <div className={flex({ justify: 'end' })}>
          <LogOut color={foregroundColors[0]} />
        </div>
      </aside>
      <main className={style.page}>
        <p className={style.hello}>Hello, Good day Sol 👋</p>

        <div className={style.row}>
          <div
            className={style.row1Card}
            style={{ background: `#${colors[1]}` }}
          >
            <div className={style.row1CardTop}>
              <Activity size={16} color={foregroundColors[1]} />
              <p
                className={style.row1CardTitle}
                style={{ color: foregroundColors[1] }}
              >
                MAU
              </p>
            </div>
            <p
              style={{ color: foregroundColors[1] }}
              className={style.row1CardValue}
            >
              783,132
            </p>
          </div>
          <div
            className={style.row1Card}
            style={{ background: `#${colors[2]}` }}
          >
            <div className={style.row1CardTop}>
              <BadgeDollarSign size={16} color={foregroundColors[1]} />
              <p
                className={style.row1CardTitle}
                style={{ color: foregroundColors[1] }}
              >
                Revenue
              </p>
            </div>
            <p
              style={{ color: foregroundColors[1] }}
              className={style.row1CardValue}
            >
              $ 9,205
            </p>
          </div>
          <div
            className={style.row1Card}
            style={{ background: `#${colors[3]}` }}
          >
            <div className={style.row1CardTop}>
              <Eye size={16} color={foregroundColors[1]} />
              <p
                className={style.row1CardTitle}
                style={{ color: foregroundColors[1] }}
              >
                Today's Page View
              </p>
            </div>
            <p
              style={{ color: foregroundColors[1] }}
              className={style.row1CardValue}
            >
              241,589
            </p>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.row2Card}>
            <div className={style.row1CardTop}>
              <RadioTower size={16} />
              <p className={style.row1CardTitle}>Session</p>
            </div>
            <ResponsiveContainer width='100%' height={200}>
              <LineChart
                data={[
                  { name: '00:00', guest: 850, user: 420 },
                  { name: '03:00', guest: 780, user: 350 },
                  { name: '06:00', guest: 920, user: 480 },
                  { name: '09:00', guest: 700, user: 310 },
                  { name: '12:00', guest: 880, user: 450 },
                  { name: '15:00', guest: 950, user: 500 },
                  { name: '18:00', guest: 820, user: 390 },
                  { name: '21:00', guest: 890, user: 430 },
                ]}
              >
                <CartesianGrid strokeDasharray='3 3' opacity={0.5} />
                <Line
                  type='monotone'
                  dataKey='guest'
                  strokeWidth={2}
                  stroke={`#${colors[1]}`}
                />
                <Line
                  type='monotone'
                  dataKey='user'
                  strokeWidth={2}
                  stroke={`#${colors[0]}`}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={style.row2Card}>
            <div className={style.row1CardTop}>
              <BadgePlus size={16} />
              <p className={style.row1CardTitle}>Created Palettes Count</p>
            </div>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart
                data={[
                  { name: 'Jan', palette: 1532, gradient: 321 },
                  { name: 'Feb', palette: 1250, gradient: 247 },
                  { name: 'Mar', palette: 845, gradient: 98 },
                  { name: 'Ari', palette: 2153, gradient: 782 },
                  { name: 'May', palette: 1312, gradient: 310 },
                ]}
              >
                <CartesianGrid strokeDasharray='3 3' opacity={0.5} />
                <Bar dataKey='palette' fill={`#${colors[2]}`} />
                <Bar dataKey='gradient' fill={`#${colors[3]}`} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
