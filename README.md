# 🚀 Modern Portfolio Website

최신 트렌드의 디자인과 기술을 적용한 모던한 포트폴리오 웹사이트입니다.

## ✨ Features

- **🎨 Modern Design**: 글래스모피즘, 그라데이션, 다크모드 등 최신 디자인 트렌드 적용
- **📱 Responsive**: 모든 디바이스에서 완벽하게 작동하는 반응형 디자인
- **⚡ Smooth Animations**: Framer Motion을 활용한 부드러운 애니메이션
- **🎯 Interactive**: 호버 효과, 스크롤 애니메이션 등 인터랙티브한 요소
- **🔍 SEO Optimized**: 검색 엔진 최적화
- **⚙️ Easy Customization**: 쉽게 커스터마이징 가능한 구조

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects section
│   ├── Contact.js      # Contact section
│   └── Footer.js       # Footer component
├── App.js              # Main App component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
`src/components/` 폴더의 각 컴포넌트에서 개인 정보를 수정할 수 있습니다:

- **Hero.js**: 이름, 직함, 소개글
- **About.js**: 개인 정보, 경력, 가치관
- **Skills.js**: 기술 스택, 숙련도
- **Projects.js**: 프로젝트 정보
- **Contact.js**: 연락처 정보

### Styling
- **Colors**: `tailwind.config.js`에서 색상 테마 수정
- **Animations**: `src/index.css`에서 커스텀 애니메이션 추가
- **Layout**: 각 컴포넌트의 className을 수정하여 레이아웃 변경

### Images
- 프로젝트 이미지는 `src/components/Projects.js`에서 URL 수정
- 프로필 이미지는 `src/components/Hero.js`에서 추가

## 📱 Responsive Design

이 포트폴리오는 다음 브레이크포인트에서 최적화되어 있습니다:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Netlify에 로그인
   - `build` 폴더를 드래그 앤 드롭
   - 또는 GitHub 연동하여 자동 배포

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/my-portfolio"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎯 Performance Optimization

- **Image Optimization**: WebP 포맷 사용 권장
- **Code Splitting**: React.lazy() 활용
- **Bundle Analysis**: `npm run build --analyze`로 번들 크기 확인
- **Lighthouse**: 성능 점수 90+ 목표

## 🔧 Available Scripts

- `npm start` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm test` - 테스트 실행
- `npm run eject` - CRA 설정 추출 (주의: 되돌릴 수 없음)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: dev@example.com
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! 