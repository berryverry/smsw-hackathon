# CubeVerse

[![Netlify Status](https://api.netlify.com/api/v1/badges/db07b0b6-69af-4859-9999-436f9a02a666/deploy-status)](https://app.netlify.com/sites/superb-brigadeiros-1bcd78/deploys) <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" /> <img src="https://img.shields.io/badge/express-000000?style=flat-square&logo=Express&logoColor=white" /> <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white" /> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" />

### 🔹분야

웹

## 🔶서비스 개요

---

지구와 공존하기 위한 3차원 가상세계, CubeVerse!

## 🔶서비스 목적

---

현재 지구는 기후변화로 인해 위기를 맞이했습니다. 무너진 자연과의 균형을 되찾기 위해서 많은 사람들의 관심과 실천이 필요한 상황입니다.
이 사이트는 3차원 가상공간에서 환경에 대한 인식을 높이고, 관련 행동을 촉구하기 위해 만들어졌습니다.

## 🔶핵심 기술 및 주요 기능

---

- 움직이는 지구본

지구본을 자유자재로 움직이며 관찰해보세요!

- 멸종위기종과 자연을 담은 큐브 게임

여러 큐브를 통해 우리 지구에 대해 알아보세요!

사라져가는 생물들과 자연의 모습을 마주하면서 환경에 대해 다시금 생각해볼 수 있습니다.

사용한 기술 스택:

| frontend(client)       | React.js Three.js React-Query React-Three/fiber, drei, cannon, vite |
| ---------------------- | ------------------------------------------------------------------- |
| backend(server)        | node.js express                                                     |
| DB                     | Mongo DB Atlas                                                      |
| Deploy (Cloud Service) | Netlify Cloudtype                                                   |

## 🔶기대 효과

---

환경 문제를 시각적으로 마주함으로써 더욱 생생하게 사용자들의 경각심을 일깨울 수 있습니다.

아바타를 통해 능동적으로 활동에 참여하기 때문에 몰입도를 높일 수 있습니다.

이러한 메타버스만의 장점을 통해 가상세계에서의 활동이 실제 현실세계에서의 행동으로까지 이어지기를 기대합니다.

## 🔶페이지 구성(시나리오)

---

- Index Page
  - 지구본을 사용한 Index Page로 사이트의 주제인 환경에 가장 핵심인 지구를 표현했습니다.
  - 지구본을 더 크게 관찰할 수도 멀리서 바라볼 수도 돌려볼 수도 있으며 햇빛과 여러 별들을 표현하여 낮과 밤도 관찰할 수 있습니다.
  - 전세계가 하나 되어 생각하여야 하는 문제인 환경인 만큼 모든 사람이 하나 되는 웹의 의미가 있습니다.
- About Page
  - 웹사이트에 대한 간단한 소개가 담겨있으며 주요 서비스인 큐브 게임에 대한 규칙을 확인할 수 있습니다.
- Play Page
  - 메타버스 공간에 큐브가 랜덤으로 생성되고, 큐브에는 우리가 지켜내야 할 멸종위기종과 자연 사진을 넣어 환경보호에 관한 관심을 유도했습니다.
  - 키보드(w,a,s,d)와 마우스를 이용해 큐브에게 다가가거나, 움직이거나, 지울 수 있습니다.
  - cannon을 사용하여 1인칭 시점의 실제 물리적인 공간을 구현했습니다.
  - 실제로 물체 사이 충돌이 발생하고 큐브들을 움직일 수 있다.
- Sign In Page
  - 이메일과 비밀번호를 통해 로그인할 수 있습니다.
  - mongodb 데이터에 저장한 데이터와 비교하여 요청을 수행합니다.
- Sign Up Page
  - 이름, 이메일, 비밀번호를 입력하면 회원가입을 할 수 있습니다.
  - mongodb에 직접 데이터를 저장하여 jwt 토큰을 발행합니다.

---

![스크린샷 2022-08-28 오후 9.30.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e2e6871-69ff-414f-9e86-57bc78104dc7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-08-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.30.49.png)
![스크린샷 2022-08-28 오후 9.32.35.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f8cb1a9-509f-4b91-b00a-08bffbd49123/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-08-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.32.35.png)
