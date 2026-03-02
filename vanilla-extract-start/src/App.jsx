import { useState } from 'react';
import * as styles from './app.css.js';
import { darkTheme, lightTheme } from './styles/theme.css.js';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeTheme = isDarkMode ? darkTheme : lightTheme;
  return (
    <div className={`${activeTheme} ${styles.page}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>vanilla-extract 스타일 연습</h1>
          <p>
            공용 컴포넌트와 토큰을 먼저 만들어두면 화면 작업 속도가 빨라집니다.
          </p>

          {/* <Button
            variant="secondary"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </Button> */}

          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </button>
        </header>

        <section className={styles.card}>
          <h2>Button Variants</h2>
          <div className={styles.buttonRow}>
            {/* TODO: Button 컴포넌트를 완성한 후 여기에 버튼들을 추가하세요 */}
            {/* 
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
            */}
            <p style={{ color: '#6b7280' }}>Button 컴포넌트를 완성해주세요!</p>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Input</h2>
          <div className={styles.formRow}>
            {/* TODO: Input 컴포넌트를 완성한 후 여기에 인풋들을 추가하세요 */}
            {/* 
            <Input placeholder="검색어를 입력하세요" />
            <Input placeholder="비활성화 상태" disabled />
            */}
            <p style={{ color: '#6b7280' }}>Input 컴포넌트를 완성해주세요!</p>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h3>Modal Preview</h3>
            <p>필요한 순간에만 모달을 열어 사용자 흐름을 방해하지 않습니다.</p>
            {/* TODO: Modal 컴포넌트를 완성한 후 아래 주석을 해제하세요 */}
            {/* <Button onClick={() => setIsModalOpen(true)}>모달 열기</Button> */}
            <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
          </article>
          <article className={styles.card}>
            <h3>Design Tokens</h3>
            <p>
              색상과 간격을 토큰으로 관리하면 전체 톤을 쉽게 통일할 수 있습니다.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Responsive</h3>
            <p>이 카드 그리드는 768px 이상에서 3열로 변합니다.</p>
          </article>
        </section>
      </div>

      {/* TODO: Modal 컴포넌트를 완성한 후 아래 주석을 해제하세요 */}

      {isModalOpen ? (
        <Modal title="알림" onClose={() => setIsModalOpen(false)}>
          공용 모달은 메시지를 바꿔가며 재사용할 수 있습니다.
        </Modal>
      ) : null}
    </div>
  );
}
