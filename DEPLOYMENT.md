# 🚀 포트폴리오 배포 가이드

이 문서는 포트폴리오 웹사이트를 무료로 배포하는 방법을 설명합니다.

## 📋 배포 전 준비사항

1. **GitHub 계정** (무료)
2. **Node.js** 설치 (이미 완료)
3. **Git** 설치 (이미 완료)

## 🎯 추천 배포 방법

### 1. **Netlify (가장 쉬운 방법) ⭐**

#### 방법 A: 드래그 앤 드롭 (즉시 배포)
1. [Netlify](https://netlify.com) 접속
2. 회원가입/로그인
3. `build` 폴더를 Netlify 대시보드에 드래그 앤 드롭
4. 자동으로 배포 완료!

#### 방법 B: GitHub 연동 (자동 배포)
1. GitHub에 프로젝트 업로드
2. Netlify에서 "New site from Git" 클릭
3. GitHub 선택 후 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `build`
5. "Deploy site" 클릭

**장점:**
- 완전 무료
- 자동 HTTPS
- 커스텀 도메인 지원
- 자동 배포 (Git push 시)
- CDN 제공

---

### 2. **Vercel (빠른 배포)**

#### 방법 A: Vercel CLI 사용
```bash
npm install -g vercel
vercel login
vercel
```

#### 방법 B: 웹 인터페이스
1. [Vercel](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 자동 배포 완료!

**장점:**
- 완전 무료
- 매우 빠른 배포
- 자동 HTTPS
- 서버리스 함수 지원

---

### 3. **GitHub Pages (무료 호스팅)**

#### 단계별 가이드:

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **GitHub에 업로드**
   - GitHub에서 새 저장소 생성
   - 로컬 저장소와 연결
   ```bash
   git remote add origin https://github.com/yourusername/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **gh-pages 설치**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **package.json 수정** (이미 완료)
   - `homepage` 필드에 GitHub Pages URL 추가
   - `deploy` 스크립트 추가

5. **배포 실행**
   ```bash
   npm run deploy
   ```

6. **GitHub Pages 활성화**
   - 저장소 Settings → Pages
   - Source를 "gh-pages" 브랜치로 설정

**URL 형식:** `https://yourusername.github.io/my-portfolio`

---

### 4. **Firebase Hosting (Google)**

#### 설정 방법:
1. [Firebase Console](https://console.firebase.google.com) 접속
2. 새 프로젝트 생성
3. Hosting 활성화
4. Firebase CLI 설치:
   ```bash
   npm install -g firebase-tools
   ```
5. 프로젝트 초기화:
   ```bash
   firebase login
   firebase init hosting
   ```
6. 배포:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🔧 배포 전 체크리스트

### 1. **개인 정보 수정**
- [ ] `src/components/Hero.js` - 이름, 직함
- [ ] `src/components/About.js` - 개인 정보, 경력
- [ ] `src/components/Contact.js` - 연락처 정보
- [ ] `src/components/Projects.js` - 프로젝트 정보

### 2. **이미지 최적화**
- [ ] 프로젝트 이미지 압축
- [ ] WebP 포맷 사용 권장
- [ ] 적절한 크기로 리사이징

### 3. **SEO 최적화**
- [ ] `public/index.html` 메타 태그 수정
- [ ] 제목, 설명, 키워드 설정
- [ ] Open Graph 태그 추가

### 4. **성능 최적화**
- [ ] `npm run build` 실행 확인
- [ ] 번들 크기 확인
- [ ] 이미지 lazy loading 적용

---

## 🌐 커스텀 도메인 설정

### Netlify에서 커스텀 도메인 설정:
1. Netlify 대시보드 → Site settings
2. Domain management → Add custom domain
3. 도메인 입력 후 DNS 설정
4. SSL 인증서 자동 발급

### GitHub Pages에서 커스텀 도메인:
1. 저장소 Settings → Pages
2. Custom domain 입력
3. `CNAME` 파일 생성
4. DNS 설정 업데이트

---

## 📊 배포 후 확인사항

### 1. **기능 테스트**
- [ ] 모든 섹션이 정상 표시
- [ ] 반응형 디자인 확인
- [ ] 애니메이션 작동 확인
- [ ] 연락처 폼 테스트

### 2. **성능 테스트**
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) 테스트
- [ ] 모바일 성능 확인
- [ ] 로딩 속도 측정

### 3. **SEO 테스트**
- [ ] Google Search Console 등록
- [ ] 메타 태그 확인
- [ ] 소셜 미디어 공유 테스트

---

## 🚨 문제 해결

### 빌드 오류
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 클리어
npm run build -- --reset-cache
```

### 라우팅 문제
- SPA 라우팅을 위한 리다이렉트 설정 확인
- `netlify.toml` 또는 `vercel.json` 설정 확인

### 이미지 로딩 문제
- 이미지 경로 확인
- CDN 사용 권장
- WebP 포맷 사용

---

## 📞 지원

배포 중 문제가 발생하면:
1. 브라우저 개발자 도구 확인
2. 배포 플랫폼 로그 확인
3. GitHub Issues 등록

---

**🎉 축하합니다! 이제 당신의 포트폴리오가 전 세계에서 접근 가능합니다!** 