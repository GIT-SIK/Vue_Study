<template>
  <nav class="nav-container">
    <h3><router-link to="/"> HOME </router-link></h3>
    <ul>
      <li><router-link to="/sub-page1">DB</router-link></li>
      <li><router-link to="/pi">/pi</router-link></li>
      <li><router-link to="/pinp">/pinp</router-link></li>
      <li><router-link to="/po">/po</router-link></li>
      <li><router-link to="/v">/V</router-link></li>
      <li><router-link to="/card">/Card</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav-container {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex; /* h3와 ul을 한 줄로 출력 */
  justify-content: space-between; /* 두 요소 간의 간격을 자동으로 맞춰서 배치 */
}

.nav-container h3 {
  margin: 0; /* 기본 마진 제거 */
}

.nav-container ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin: 0; /* 기본 마진 제거 */
  justify-content: flex-end; /* ul 하위 항목들을 오른쪽 정렬 */
}

.nav-container li {
  margin: 0;
}

.nav-container a {
  color: white;
  text-decoration: none;
}

.nav-container a:hover {
  text-decoration: underline;
}
</style>
