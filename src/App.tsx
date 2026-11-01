import { useState, type ReactNode } from 'react'
import ayoneMark from './assets/ayone-mark.svg'
import everydayImage from './assets/everyday.png'
import lightImage from './assets/light.png'
import nebulaImage from './assets/nebula.png'

type IconName =
  | 'arrow'
  | 'check'
  | 'chevron'
  | 'code'
  | 'download'
  | 'feather'
  | 'layers'
  | 'menu'
  | 'phone'
  | 'rocket'
  | 'shield'
  | 'sparkle'
  | 'terminal'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    feather: <><path d="M20 7c-4-4-10-4-14 0-3 3-3 8-3 12 4 0 9 0 12-3 4-4 4-10 0-14" /><path d="M3 19 15 7" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="3" /><path d="M10 5h4" /><path d="M11 18h2" /></>,
    rocket: <><path d="M14 4c3-2 5-1 6-1 0 1 1 3-1 6l-6 6-4-4 5-7Z" /><path d="m9 11-4 1-2 3 6 1" /><path d="m13 15-1 4-3 2-1-6" /><path d="M5 19c1-2 2-2 4-3" /></>,
    shield: <><path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z" /><path d="m9 12 2 2 4-5" /></>,
    sparkle: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
    terminal: <><path d="m5 7 4 4-4 4" /><path d="M11 16h7" /><rect x="2" y="3" width="20" height="18" rx="3" /></>,
    x: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  )
}

const editions = [
  {
    id: 'everyday',
    name: 'Everyday',
    desktop: 'KDE Plasma',
    label: 'Для каждого дня',
    description: 'Знакомый, красивый и гибкий рабочий стол для работы, учёбы и игр.',
    image: everydayImage,
    icon: 'sparkle' as IconName,
    className: 'edition-orange',
  },
  {
    id: 'light',
    name: 'Light',
    desktop: 'XFCE',
    label: 'Для старых компьютеров',
    description: 'Лёгкая и отзывчивая система, которая бережно относится к ресурсам.',
    image: lightImage,
    icon: 'feather' as IconName,
    className: 'edition-purple',
  },
  {
    id: 'angel',
    name: 'Angel',
    desktop: 'Niri + AngelOS',
    label: 'Для новых ощущений',
    description: 'Тайлинговый Wayland-композитор Niri и продуманная среда от MixaDoDs.',
    icon: 'layers' as IconName,
    className: 'edition-blue',
  },
  {
    id: 'barebone',
    name: 'Barebone',
    desktop: 'Только TTY',
    label: 'Для экспертов и серверов',
    description: 'Чистая база без графической среды. Соберите систему точно под себя.',
    icon: 'terminal' as IconName,
    className: 'edition-dark',
  },
  {
    id: 'nebula',
    name: 'Nebula',
    desktop: 'GNOME Shell',
    label: 'Интерфейс в духе смартфона',
    description: 'GNOME Shell с лаконичной навигацией и визуальным подходом, знакомым по мобильным системам.',
    image: nebulaImage,
    icon: 'phone' as IconName,
    className: 'edition-green',
  },
]

const releaseUrl = 'https://github.com/AyOS-Linux/ayosiso/releases/tag/26.11'
const repoUrl = 'https://github.com/AyOS-Linux/ayosiso'

const roadmap = [
  { title: 'Создание образа', done: true },
  { title: 'Создание оформления', done: true },
  { title: 'Полное тестирование', done: false },
  { title: 'Появление логотипа в fastfetch', done: false },
  { title: 'Добавление новых сборок для новичков', done: false },
  { title: 'Создание своего GUI-менеджера приложений', done: false },
  { title: 'Адаптация под новичков', done: false },
  { title: 'Создание дистрибутива на другой базе', done: false },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedEdition, setSelectedEdition] = useState('everyday')

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AyOS — на главную">
          <span className="brand-mark"><img src={ayoneMark} alt="" /></span>
          <span>AyOS</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#editions">Редакции</a>
          <a href="#features">Возможности</a>
          <a href={repoUrl} target="_blank" rel="noreferrer">Документация</a>
        </nav>

        <a className="header-download" href={releaseUrl} target="_blank" rel="noreferrer">
          <Icon name="download" size={18} />
          Скачать
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            <a href="#editions" onClick={closeMenu}>Редакции <Icon name="arrow" /></a>
            <a href="#features" onClick={closeMenu}>Возможности <Icon name="arrow" /></a>
            <a href={repoUrl} target="_blank" rel="noreferrer">Документация <Icon name="arrow" /></a>
            <a className="mobile-download" href={releaseUrl} target="_blank" rel="noreferrer">
              <Icon name="download" /> Скачать AyOS
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <aside className="beta-notice" aria-label="Предупреждение о бета-тестировании">
          <span className="beta-icon">β</span>
          <p><strong>AyOS находится в бета-тесте.</strong> Пробуйте на свой страх и риск!</p>
          <span className="beta-label">Beta</span>
        </aside>

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> AyOS Material 26.11</div>
            <h1>Linux, который<br /><em>чувствует тебя.</em></h1>
            <p className="hero-description">
              Свежий Arch внутри. Простой установщик снаружи.
              Выбери свою редакцию — и сделай систему по-настоящему своей.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={releaseUrl} target="_blank" rel="noreferrer">
                <Icon name="download" />
                Скачать AyOS
              </a>
              <a className="button button-tonal" href="#editions">
                Выбрать редакцию
                <Icon name="arrow" />
              </a>
            </div>
            <div className="hero-meta">
              <span><Icon name="check" size={17} /> x86_64</span>
              <span><Icon name="check" size={17} /> Без телеметрии</span>
              <span><Icon name="check" size={17} /> На базе Arch</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Рабочий стол AyOS">
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="desktop-frame">
              <div className="desktop-topbar">
                <span>AyOS</span>
                <div><i></i><i></i><i></i></div>
                <span>12:42</span>
              </div>
              <div className="desktop-welcome">
                <span className="desktop-logo"><img src={ayoneMark} alt="" /></span>
                <small>Добро пожаловать в</small>
                <strong>AyOS</strong>
                <p>Система готова к знакомству</p>
                <span className="desktop-pill">Начать установку <Icon name="arrow" size={14} /></span>
              </div>
              <div className="desktop-dock">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div className="floating-chip chip-release"><Icon name="sparkle" size={18} /> Material 26.11</div>
            <div className="floating-chip chip-kernel"><span className="pulse"></span> Linux Zen готов</div>
          </div>
        </section>

        <section className="editions-section" id="editions">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Один AyOS. Пять характеров.</span>
              <h2>Найди свою редакцию</h2>
            </div>
            <p>Не нужно разбираться в сотнях настроек. Начни с готовой основы, которая подходит именно тебе.</p>
          </div>

          <div className="edition-grid">
            {editions.map((edition) => (
              <article
                className={`edition-card ${edition.className} ${selectedEdition === edition.id ? 'is-selected' : ''}`}
                key={edition.id}
                onClick={() => setSelectedEdition(edition.id)}
              >
                <button
                  className="edition-select"
                  type="button"
                  aria-label={`Выбрать AyOS ${edition.name}`}
                  aria-pressed={selectedEdition === edition.id}
                />
                <div
                  className="edition-art"
                  style={edition.image ? { backgroundImage: `url(${edition.image})` } : undefined}
                >
                  {!edition.image && (
                    <div className="abstract-edition">
                      <span className="abstract-icon"><Icon name={edition.icon} size={38} /></span>
                      {edition.id === 'barebone' && <code><b>$</b> ayos ready_</code>}
                    </div>
                  )}
                  <span className="edition-desktop">{edition.desktop}</span>
                  {selectedEdition === edition.id && <span className="selected-check"><Icon name="check" size={16} /></span>}
                </div>
                <div className="edition-body">
                  <div className="edition-title-row">
                    <div>
                      <span>AyOS</span>
                      <h3>{edition.name}</h3>
                    </div>
                    <span className="edition-arrow"><Icon name="chevron" /></span>
                  </div>
                  <strong>{edition.label}</strong>
                  <p>{edition.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="edition-hint">
            <Icon name="sparkle" size={18} />
            Не уверены? <button type="button" onClick={() => setSelectedEdition('everyday')}>Начните с Everyday</button> — это универсальный выбор.
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="feature-intro">
            <span className="section-kicker">Просто работает</span>
            <h2>Arch без<br />лишней сложности.</h2>
            <p>Вся мощь и свежесть Arch Linux — в дружелюбной системе, готовой к работе сразу после установки.</p>
            <a href={repoUrl} target="_blank" rel="noreferrer">Как устроен AyOS <Icon name="arrow" /></a>
          </div>

          <div className="feature-cards">
            <article className="feature-card feature-large">
              <span className="feature-icon"><Icon name="rocket" size={26} /></span>
              <div>
                <span>Настоящая установка</span>
                <h3>Calamares + pacstrap</h3>
                <p>Понятный графический установщик создаёт чистую Arch-систему, а не просто копирует live-образ.</p>
              </div>
              <div className="installer-steps">
                <span className="done"><Icon name="check" size={14} /> Диск</span>
                <i></i>
                <span className="done"><Icon name="check" size={14} /> Редакция</span>
                <i></i>
                <span className="active">Ядро</span>
                <i></i>
                <span>Готово</span>
              </div>
            </article>

            <article className="feature-card">
              <span className="feature-icon"><Icon name="layers" size={25} /></span>
              <span>Выбор ядра</span>
              <h3>Linux, LTS или Zen</h3>
              <p>Стабильность, совместимость или отзывчивость — решать тебе прямо во время установки.</p>
              <div className="kernel-chips"><span>linux</span><span>linux-lts</span><span>linux-zen</span></div>
            </article>

            <article className="feature-card accent-feature">
              <span className="feature-icon"><Icon name="shield" size={25} /></span>
              <span>Уважает приватность</span>
              <h3>Ноль телеметрии</h3>
              <p>AyOS не собирает данные об использовании. Твой компьютер остаётся твоим.</p>
              <strong>0<small> фоновых трекеров</small></strong>
            </article>
          </div>
        </section>

        <section className="roadmap-section" aria-labelledby="roadmap-title">
          <div className="roadmap-heading">
            <div>
              <span className="section-kicker">Путь к стабильному релизу</span>
              <h2 id="roadmap-title">To Do</h2>
            </div>
            <div className="roadmap-progress" aria-label="Выполнено 2 из 8 задач">
              <span><strong>2</strong> / 8 готово</span>
              <div><i></i></div>
            </div>
          </div>

          <ol className="roadmap-list">
            {roadmap.map((item, index) => (
              <li className={item.done ? 'is-done' : ''} key={item.title}>
                <span className="roadmap-status">
                  {item.done ? <Icon name="check" size={18} /> : String(index + 1).padStart(2, '0')}
                </span>
                <span className="roadmap-title">{item.title}</span>
                <span className="roadmap-state">{item.done ? 'Готово' : 'В планах'}</span>
              </li>
            ))}
          </ol>
          <p className="roadmap-note"><span>*</span> Звёздочкой в исходном списке отмечены выполненные задачи.</p>
        </section>

        <section className="download-section" id="download">
          <div className="download-decoration decoration-one"></div>
          <div className="download-decoration decoration-two"></div>
          <div className="download-logo"><img src={ayoneMark} alt="" /></div>
          <span className="section-kicker">Готовы попробовать?</span>
          <h2>Твоя система.<br />Твои правила.</h2>
          <p>Скачай AyOS Material 26.11 и выбери свою редакцию во время установки.</p>
          <div className="download-actions">
            <a className="button button-dark" href={releaseUrl} target="_blank" rel="noreferrer">
              <Icon name="download" />
              Скачать релиз
            </a>
            <a className="button button-light" href={repoUrl} target="_blank" rel="noreferrer">
              <Icon name="code" />
              Исходный код
            </a>
          </div>
          <span className="download-note">UEFI · x86_64 · Свободное ПО</span>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><img src={ayoneMark} alt="" /></span>
          <span>AyOS</span>
        </a>
        <p>GNU/Linux, сделанный с заботой.</p>
        <div className="footer-links">
          <a href={repoUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`${repoUrl}/issues`} target="_blank" rel="noreferrer">Сообщить об ошибке</a>
        </div>
        <span>© 2026 AyOS Project</span>
      </footer>
    </div>
  )
}

export default App
