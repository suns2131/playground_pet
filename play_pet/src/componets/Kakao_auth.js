const CLIENT_ID = '3d433ae3100be5ad2d51f82583a2330b';
const REDIRECT_URL = "http://localhost:3000/auth/kakao/callback"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;