# Admin

## Admin 계정

| id           | pw        |
| ------------ | --------- |
| illi@illi.kr | illi0606! |

# Node 설치

## 1. Homebrew 설치

> Homebrew는 루비로 개발된 Mac 용 패키지 관리 애플리케이션으로 필요한 애플리케이션이나 개발 환경등을 설치하는데 유용하게 쓰인다

Homebrew를 설치하기 위해서 터미널을 실행(command+space)하고 다음과 같이 입력하고, 맥북 패스워드를 입력하면 설치가 진행된다.

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

버전 확인이 된다면 이제부터 Homebrew를 사용할 수 있다.

```bash
$ brew --version
Homebrew 4.2.3
```

만약 버전 확인이 되지 않는다면 다음과 같이 환경 변수를 추가하자

```bash
$ brew --version
zsh: command not found: brew

# zshrc에 homebrew path 추가
$ echo 'export PATH=/opt/homebrew/bin:$PATH' >> ~/.zshrc
# zshrc 반영
$ source ~/.zshrc
```

## 2. Node.js 설치

> React 는 Javascript를 사용하기 때문에 Javascript의 런타임인 Node.js를 설치해야한다.

```bash
$ brew install node
$ node --version
v21.5.0
$ npm --version
10.2.4
```

# React 프로젝트 생성

## 0. Project 폴더 생성

```bash
$ mkdir Project
$ ls
$ cd Project
```

## 1. create react app

```bash
$ npm install -g create-react-app
$ create-react-app first_test
```

## 2. React App 실행

```bash
$ cd first_test
$ npm start
```

# Github 연동

## 1. git 설치

```bash
$ brew install git
```

## 2. git config 설정

```bash
$ git config --global user.name "illi"
$ git config --global user.email "illi@illi.kr"
$ git config --list
```

## 3. git 환경에 ssh 설치

```bash
$ ssh-keygen
$ cat ~/.ssh/id_rsa.pub
// 공개키복사
```

github 로그인 후 프로필에 들어가서 `Setting` > `SSH and GPG Keys` 선택 SSH Key 등록

## 4. git remote 연결

```bash
$ git remote add origin https://github.com/illi/flit.git
$ git remote -v
$ git push --set-upstream origin master
```

## 5. 권한 문제 오류 시 해결

- github에서 Settings 클릭
- Developer settings 클릭
- Personal access tokens 클릭
- Generate new token 클릭
- repo 에 관한 권한을 모두 부여한 후 Generate token 클릭
- `창을 나가지 말고 토큰을 복사한다`
- Password 입력란에 복사한 토큰을 입력한다

## 6. git clone

```bash
$ git clone https://github.com/illi/flit.git
```

# Firebase 연동

## 1. Firebase 프로젝트 생성

- firebase 콘솔에서 새 프로젝트를 만듭니다
- 프로젝트 설정 페이지에서 웹 앱을 추가하고, 설정 정보를 얻습니다.

## 2. React 앱 생성

- React 앱을 생성하거나, 이미 있는 앱을 사용합니다.

## 3. Firebase SDK 설치

- React 앱 내에서 Firebase를 사용하기 위해 필요한 Firebase SDK를 설치합니다.

```bash
$ npm install firebase
```

## 4. Firebase 설정 추가

- firebase_conf.js 파일을 생성하고 1번에서 얻은 설정 정보를 사용하여 React 앱에 Firebase를 구성합니다.

```javascript
// src/firebase.js 또는 원하는 파일명으로 생성
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
```

## 5. React에서 Firebase(데이터베이스) / Firestore(저장소)를 사용합니다.

- Firestore, Storage의 규칙에서 읽기 및 쓰기 권한을 설정해야 데이터 베이스에 대한 읽기 및 쓰기가 가능합니다.
