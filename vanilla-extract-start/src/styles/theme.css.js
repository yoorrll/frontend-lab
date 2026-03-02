import { createTheme, createThemeContract } from '@vanilla-extract/css';

// 1단계: 토큰 구조 정의 (어떤 값이 필요한지)
export const vars = createThemeContract({
  color: {
    primary: null,
    primaryHover: null,
    surface: null,
    background: null,
    border: null,
    text: null,
    muted: null,
  },
});

// 2단계: 라이트 테마 값 채우기
export const lightTheme = createTheme(vars, {
  color: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    surface: '#ffffff',
    background: '#f8fafc',
    border: '#e5e7eb',
    text: '#111827',
    muted: '#6b7280',
  },
});

// 3단계: 다크 테마 값 채우기
export const darkTheme = createTheme(vars, {
  color: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    surface: '#111827',
    background: '#0b1120',
    border: '#334155',
    text: '#f8fafc',
    muted: '#94a3b8',
  },
});
