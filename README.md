## Vue

## Vue 시작하기

#### Vue CLI 설치 및 시작
```
npm install -g @vue/cli
```

#### Project Create
```
npm create vue@latest
```

[(링크) 프로젝트 생성 시 초기 설정](https://deve1oper.tistory.com/20)

#### Project Start
```
npm run serve
npm run dev
```

#### Vuetify
- 자동
```
vue add vuetify
```

- 수동 (설정 필요)
```
npm install vuetify
npm install vite-plugin-vuetify@latest || npm install vue-cli-plugin-vuetify
npm install --save material-design-icons-iconfont
```

※ 자동으로 할 경우 기존 프로젝트에서는 덮어 씌어져 데이터가 삭제될 수 있음.

> **(package.json) Vue CLI**
>```
> "scripts": {
>  "serve": "vue-cli-service serve",
>  "build": "vue-cli-service build",
>  "lint": "vue-cli-service lint"
> }
>```
> **(package.json) Vite**
> ```
> "scripts": {
>  "dev": "vite",
>  "build": "vite build",
>  "preview": "vite preview"
> }
> ```

#### Project Build
```
npm run build
```

#### CDN Vue
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

#### Vuetify Play

<a href="https://play.vuetifyjs.com/?ref=github">
  ▶︎ Play
</a>
<br><br>



- - - - -

## json-server

#### Json-server Start
```
json-server --watch file.json [--port 3001]
```
```
npm run db
```

#### Json-server + vite
```
npm install concurrently --save-dev
```

#### (package.json) 프로젝트와 동작 설정
```
"scripts": {
  "dev": "concurrently \"json-server --watch db.json --port 3001\" \"vite\""
}
```


### 오류 해결 문서

1.  'concurrently'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. <br>
```
 npm audit fix --force
```
