# Baseball Game (야구의 신)

이 프로젝트는 React와 Vite를 사용하여 개발된 숫자 야구 게임입니다. "야구의 신" 캐릭터와 대결하며 숫자를 맞추는 게임입니다.

## 로컬에서 실행하는 방법

게임을 로컬 환경에서 실행하려면 다음 단계를 따르세요:

1. **의존성 설치**:
   터미널에서 프로젝트 루트 디렉토리로 이동한 후 다음 명령어를 입력합니다.
   ```bash
   npm install
   ```

2. **개발 서버 실행**:
   설치가 완료되면 다음 명령어를 사용하여 개발 서버를 실행합니다.
   ```bash
   npm run dev
   ```

3. **브라우저 확인**:
   터미널에 표시된 주소 (보통 `http://localhost:5173`)를 브라우저에서 엽니다.

## Vercel로 배포하는 방법

Vercel을 통해 프로젝트를 쉽게 배포할 수 있습니다.

### 방법 1: Vercel CLI 사용 (권장)

1. **Vercel CLI 설치**:
   ```bash
   npm install -g vercel
   ```

2. **Vercel 로그인**:
   ```bash
   vercel login
   ```

3. **배포 실행**:
   프로젝트 루트 디렉토리에서 다음 명령어를 실행합니다.
   ```bash
   vercel
   ```
   이후 터미널의 안내에 따라 설정을 진행하면 배포가 완료됩니다. (대부분 엔터를 눌러 기본값을 선택하면 됩니다.)

### 방법 2: Vercel 대시보드 사용 (GitHub/GitLab/Bitbucket 연동)

1. 코드를 GitHub 등의 Git 저장소에 푸시합니다.
2. [Vercel 대시보드](https://vercel.com/dashboard)에 접속합니다.
3. **'Add New...'** -> **'Project'**를 클릭합니다.
4. Git 저장소를 연결하고 해당 프로젝트를 선택(Import)합니다.
5. **Framework Preset**이 **Vite**로 자동 선택된 것을 확인하고 **Deploy** 버튼을 클릭합니다.

