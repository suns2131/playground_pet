import axios from "axios";

axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;

axios.post('/cat', // 미리 약속한 주소
	{name: 'perl', status: 'cute'}, // 서버가 필요로 하는 데이터를 넘겨주고,
	{headers: { 'Authorization': '내 토큰 보내주기' },} // 누가 요청했는 지 알려줍니다. (config에서 해요!)
).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });