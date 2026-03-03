import { useState } from 'react';
import * as styles from '@/styles/home.css.js';

export default function Home() {
  const [recommendation, setRecommendation] = useState(null);
  const fetchRecommendation = async () => {
    try {
      const res = await fetch('/api/recommend');
      const data = await res.json();
      setRecommendation(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={fetchRecommendation}>오늘의 추천 영화 받기</button>

      {recommendation && (
        <div className={styles.result}>{recommendation.title}</div>
      )}
    </div>
  );
}
