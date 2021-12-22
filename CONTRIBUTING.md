# 기여방법!

### 🚧 주의

> 인터넷의 무료 아이콘 사용 시 `라이센스`를 반드시 확인해주세요!

## RULE

1. Issue 작성
2. PR

### commit rule

```
[feat] 영어로 작성해주세요!
```

- feat: 새로운 기능/아이콘 추가
- refactor: 코드 수정
- fix: 버그 수정
- test: 테스트 코드
- docs: 문서
- chore: 환경설정

## 새로운 아이콘을 추가/수정하고자 할 경우!

1. static폴더에 `icon이름-icon.svg` 형식으로 추가
2. src/pages/index.tsx의 techSrc배열에 `icon이름-icon.svg` 삽입
3. `npm run develop` 실행 후 8000번 포트에서 테스트!
