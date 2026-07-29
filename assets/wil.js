/* ═════════════════════════════════════════════════════════
   WIL — Workation Insight Lab | 공통 데이터 · 컴포넌트 스크립트
   출처: DearMonday_W2BI_Official_Diagnosis_Results_v2.xlsx (2026-07-28)
   ═════════════════════════════════════════════════════════ */
const S3 = 'https://dearmonday-prod-public.s3.ap-northeast-2.amazonaws.com/branch/';
const BRANCHES = [
  {n:'DearMonday 경주 라한셀렉트호텔점', r:'경상북도 경주시', cap:25, got:61, den:70, vd:'pass',
   tag:'5성 호텔 프리미엄 오피스', img:S3+'thumbnail/20250425_113651_9167f706-bc02-4b4d-be22-7562a7c2045a-%EB%9D%BC%ED%95%9C%EC%85%80%EB%A0%89%ED%8A%B8%EA%B2%BD%EC%A3%BC%20%EC%A0%84%EA%B2%BD_%EB%B2%9A%EA%BD%83%EC%8B%9C%EC%A6%8C.jpeg',
   ty:[['V','동일 건물 · 24h'],['V','25석 · 8인 협업석'],['V','전 좌석 27인치'],['V','5성급 · 뷔페']]},
  {n:'DearMonday 경주 체스터톤스호텔점', r:'경상북도 경주시', cap:11, got:61, den:70, vd:'pass',
   tag:'경주 중심지 신규 호텔', img:S3+'thumbnail/20250425_105427_04607886-7627-4b9e-a9e4-72ee89e9bf4a-%EC%99%B8%EB%B6%80%20(1).jpg',
   ty:[['V','동일 건물 · 24h'],[null,'정원 11석'],['V','24h · 전 좌석 모니터'],['V','수영장·워시가든 무료']]},
  {n:'DearMonday 제주 마레보비치호텔점', r:'제주도 제주시', cap:11, got:64, den:75, vd:'pass',
   tag:'곽지해변 애월 오션뷰', img:S3+'thumbnail/20250924_115523_97085817-6adb-479d-9894-06d2ec4296be-%EB%A7%88%EB%A0%88%EB%B3%B4%EB%B9%84%EC%B9%98%ED%98%B8%ED%85%94%20%EC%99%B8%EA%B4%80%20(3).jpg',
   ty:[['V','지하 1층 동일 건물'],[null,'정원 11석'],['V','회의실 · 빔프로젝터'],['V','40객실+ · 셀프세탁']]},
  {n:'DearMonday 시흥 르컬렉티브점', r:'경기도 시흥시', cap:15, got:61, den:75, vd:'pass',
   tag:'서울 근교 웨이브파크', img:S3+'images/3_20240913021849_thumb.jpg',
   ty:[['V','객실과 같은 건물'],['V','15석 · 회의실 예약 X'],['V','24h · 전 좌석 모니터'],['V','조식 예약 · 24h']]},
  {n:'DearMonday 경주 춘추관점', r:'경상북도 경주시', cap:11, got:68, den:85, vd:'pass',
   tag:'황리단길 독채 한옥', img:S3+'thumbnail/20250428_104941_d99619de-f1dc-4037-8a29-995ded7ca978-39_20240405153033_0_default.jpg',
   ty:[['V','신경주역 KTX 2시간'],[null,'정원 11석'],['V','전 좌석 모션데스크'],[null,'조식·프런트 미확인']]},
  {n:'DearMonday 제주 풀빌라소랑점', r:'제주도 제주시', cap:14, got:59, den:75, vd:'pass',
   tag:'제주 풀빌라 워케이션', img:S3+'thumbnail/20250425_111140_7c97a9f2-9bbd-4c15-9e46-251ac8d4b19d-9_20250312160100_0_svc.jpg',
   ty:[[null,'운영 08~23시'],[null,'정원 14석'],[null,'개방형 회의공간'],[null,'24h 미운영']]},
  {n:'DearMonday 시흥 어반스테이 거북섬점', r:'경기도 시흥시', cap:15, got:58, den:75, vd:'pass',
   tag:'탁 트인 바다 조망', img:S3+'thumbnail/20260210_122627_67f11ad6-01b2-4c23-ad09-92e6c7d12f44-%EC%8B%9C%ED%9D%A5%20%EC%96%B4%EB%B0%98%EC%8A%A4%ED%85%8C%EC%9D%B4%20%EA%B1%B0%EB%B6%81%EC%84%AC_%EC%A0%84%EA%B2%BD.jpg',
   ty:[['V','24h 운영'],[null,'회의실 1개 (15석)'],[null,'오피스 도보 10분'],['V','객실 세탁·주방 완비']]},
  {n:'DearMonday 어반스테이 당진터미널점', r:'충청남도 당진시', cap:24, got:58, den:75, vd:'hold',
   tag:'24석 최대 규모 오피스', img:S3+'thumbnail/20260507_104910_896fdc4d-c871-4527-8bfc-9b8b8e50fac8-_STL9624%20(1).jpg',
   ty:[['V*','터미널 5분 · 6층'],[null,'객실 정보 미확인'],['V*','24h · 회의실 2개'],[null,'체험 프로그램 X']]},
  {n:'DearMonday 해남126 호텔점', r:'전라남도 해남군', cap:8, got:57, den:75, vd:'pass',
   tag:'서해 석양 파노라마', img:S3+'thumbnail/20250829_153914_018f0a79-b8d0-4eb0-9805-1edc03401db6-%ED%95%B4%EB%82%A8%20126%20%EC%A0%84%EA%B2%BD%201.jpg',
   ty:[['V','호텔 1층 · 24h'],[null,'미팅룸 X · 8석'],[null,'미팅룸 X'],['V','피트니스 · 셀프빨래방']]},
  {n:'DearMonday 춘천 남이섬 호텔 정관루점', r:'강원도 춘천시', cap:12, got:46, den:65, vd:'hold',
   tag:'남이섬 한옥 호텔', img:S3+'thumbnail/20251104_155334_e6e70f1a-5865-4b17-b5cb-115ff817d72f-STL08526%20(1).jpg',
   ty:[[null,'운영 09~22시'],[null,'미팅룸 X · 12석'],[null,'24h 미운영 · 미팅룸 X'],[null,'객실 정보 미확인']]},
  {n:'DearMonday 제주 소노캄 제주점', r:'제주도 서귀포시', cap:12, got:49, den:70, vd:'fail',
   tag:'표선 바다와 맞닿은 곳', img:S3+'thumbnail/20260112_142926_0c09df99-bbe2-448a-beab-e0bc54434fcb-%EC%86%8C%EB%85%B8%EC%BA%84%20%EC%A0%9C%EC%A3%BC.jpg',
   ty:[[null,'필수 요건 미충족'],[null,'미팅룸 X'],[null,'복합기·미팅룸 X'],[null,'필수 요건 미충족']]}
];

/* 전국 지자체 시설 - 광역 단위 지역 A 1차 테스트 진단
   출처: 한국관광공사 2025 디렉토리북 pp.5-11 + 시설 공식 웹사이트 (2026-07-29 확인)
   공개 화면에서는 시설명을 광역지자체별 익명 코드로 표기한다. */
const MUNICIPAL_GROUPS = [
  {name:'광역 단위 지역 A', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:9, pass:0, fail:5, hold:4, avg:55.2}, facilities:[
    {n:'광역 단위 지역 A-1', cap:60, idx:64.6, vd:'hold', ty:[[null,'Wi-Fi · 숙소 이동 미확인'],[null,'객실 품질 미확인'],[null,'Wi-Fi · 물리 보안 미확인'],[null,'객실 · 숙소 이동 미확인']]},
    {n:'광역 단위 지역 A-2', cap:75, idx:54.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'75석 · 미팅룸 수 미확인'],[null,'Wi-Fi · 운영 시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-3', cap:20, idx:54.3, vd:'hold', ty:[[null,'Wi-Fi · 교통 미확인'],[null,'객실 · 미팅룸 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-4', cap:20, idx:60.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'객실 · 미팅룸 미확인'],[null,'장비 · 보안 미확인'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-5', cap:15, idx:61.7, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'객실 기준 · 절차 미달'],[null,'Wi-Fi · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-6', cap:15, idx:68.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'미팅룸 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-7', cap:10, idx:50.0, vd:'hold', ty:[[null,'Wi-Fi · 교통 미확인'],[null,'정원 10석 · 객실 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-8', cap:10, idx:42.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'미팅룸 X · 정원 10석'],[null,'운영 09~18시 · 미팅룸 X'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-9', cap:30, idx:42.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'객실 품질 미확인'],[null,'Wi-Fi 보안 · 장비 미확인'],[null,'필수 요건 미충족']]}
  ]},
  {name:'광역 단위 지역 B', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:4, pass:2, fail:2, hold:0, avg:66.9}, facilities:[
    {n:'광역 단위 지역 B-1', cap:30, idx:80.0, vd:'pass', ty:[['V','동일 부지 · Wi-Fi'],['V','30석 · 체험 프로그램'],[null,'보안 · 운영시간 미확인'],['V','동일 부지 · 온라인 신청']]},
    {n:'광역 단위 지역 B-2', cap:10, idx:66.2, vd:'pass', ty:[[null,'교통 · 운영시간 미확인'],[null,'정원 10석'],[null,'보안 · 운영시간 미확인'],[null,'교통 · 객실 품질 한계']]},
    {n:'광역 단위 지역 B-3', cap:24, idx:61.3, vd:'fail', ty:[[null,'Wi-Fi 미확인 · 필수 미달'],[null,'체험 프로그램 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 B-4', cap:30, idx:60.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 C', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:3, pass:1, fail:1, hold:1, avg:59.4}, facilities:[
    {n:'광역 단위 지역 C-1', cap:20, idx:50.8, vd:'fail', ty:[[null,'도서 접근 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 C-2', cap:20, idx:63.1, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 수 · 예약 미확인'],[null,'보안 · 운영시간 미확인'],[null,'숙소별 이동시간 미확인']]},
    {n:'광역 단위 지역 C-3', cap:50, idx:64.4, vd:'pass', ty:[[null,'운영 09~18시'],[null,'회의실 수 미확인'],[null,'보안 · 장시간 운영 미달'],[null,'숙소 이동 · 서류 절차']]}
   ]},
  {name:'광역 단위 지역 D', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:7, pass:1, fail:6, hold:0, avg:62.0}, facilities:[
    {n:'광역 단위 지역 D-1', cap:10, idx:60.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 10석'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-2', cap:20, idx:58.8, vd:'fail', ty:[[null,'카페형 · 운영 09~18시'],[null,'회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-3', cap:4, idx:58.7, vd:'fail', ty:[[null,'정원 4석 · Wi-Fi 미확인'],[null,'정원 4석 · 회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-4', cap:50, idx:61.3, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-5', cap:30, idx:70.0, vd:'pass', ty:[[null,'운영 09~18시'],['V','30석 · 회의실·장비'],[null,'보안 · 장시간 운영 미달'],[null,'서류·증빙사진 절차']]},
    {n:'광역 단위 지역 D-6', cap:20, idx:65.3, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-7', cap:16, idx:60.0, vd:'fail', ty:[[null,'산악권 교통 · 운영 09~18시'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 E', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:6, pass:1, fail:4, hold:1, avg:64.1}, facilities:[
    {n:'광역 단위 지역 E-1', cap:30, idx:66.7, vd:'pass', ty:[[null,'운영 09~18시 · 숙소 이동'],[null,'캠핑 숙소 · 예약체계 미확인'],[null,'보안 · 장시간 운영 미달'],[null,'캠핑 숙소 · 센터 이동']]},
    {n:'광역 단위 지역 E-2', cap:13, idx:63.5, vd:'hold', ty:[[null,'Wi-Fi · 보안 미확인'],[null,'정원 13석'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'Wi-Fi · 지역교통 제한']]},
    {n:'광역 단위 지역 E-3', cap:10, idx:68.9, vd:'fail', ty:[[null,'정원 10석 · 외곽 교통'],[null,'정원 10석'],[null,'물리 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-4', cap:5, idx:64.7, vd:'fail', ty:[[null,'정원 5석 · 회의실 X'],[null,'정원 5석 · 회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-5', cap:6, idx:55.3, vd:'fail', ty:[[null,'카페형 · 휴무일 다수'],[null,'정원 6석 · 회의실 X'],[null,'회의실 X · 운영 09~18시'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-6', cap:13, idx:65.3, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 13석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 F', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:14, pass:3, fail:5, hold:6, avg:68.2}, facilities:[
    {n:'광역 단위 지역 F-1', cap:35, idx:62.2, vd:'fail', ty:[[null,'운영 09~18시'],[null,'장비 · 회의실 최신정보 부족'],[null,'보안 · 장시간 운영 미달'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-2', cap:50, idx:77.5, vd:'pass', ty:[[null,'운영시간 · 보안 미확인'],['V','50석 · 회의실·복합기'],[null,'운영시간 · 보안 미확인'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 F-3', cap:12, idx:73.8, vd:'hold', ty:[[null,'고객대기실형 · Wi-Fi 미확인'],[null,'정원 12석'],[null,'장비 · 보안 · 운영시간'],[null,'Wi-Fi · 전용좌석 미확인']]},
    {n:'광역 단위 지역 F-4', cap:20, idx:73.8, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'전용좌석 · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-5', cap:15, idx:69.2, vd:'hold', ty:[[null,'외곽 교통 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'전용좌석 · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-6', cap:40, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-7', cap:150, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'좌석관리 · 회의실 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-8', cap:15, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-9', cap:55, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'객실 22실 · 회의실 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-10', cap:52, idx:62.7, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 복합기 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 품질 편차 · 지역교통']]},
    {n:'광역 단위 지역 F-11', cap:20, idx:75.4, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V*','20석 · 동일 호텔'],[null,'장비 · 보안 · 운영시간'],[null,'Wi-Fi · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-12', cap:64, idx:67.5, vd:'pass', ty:[[null,'숙소 이동 · 운영시간 미확인'],[null,'보안 · 운영시간 미확인'],[null,'보안 · 운영시간 미확인'],[null,'오피스·숙소 주소 분리']]},
    {n:'광역 단위 지역 F-13', cap:45, idx:73.3, vd:'pass', ty:[[null,'산악권 교통'],['V','45석 · 회의실·체험'],[null,'물리 보안 미확인'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 F-14', cap:10, idx:66.7, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 10석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'산악권 교통 · 절차 미확인']]}
   ]},
  {name:'광역 단위 지역 G', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:2, pass:0, fail:0, hold:2, avg:67.6}, facilities:[
    {n:'광역 단위 지역 G-1', cap:12, idx:67.1, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 12석'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'산악권 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 G-2', cap:45, idx:68.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'운영시간 · 보안 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'청풍면 외곽 · 절차 미확인']]}
   ]},
  {name:'광역 단위 지역 H', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:13, pass:2, fail:1, hold:10, avg:67.3}, facilities:[
    {n:'광역 단위 지역 H-1', cap:20, idx:70.7, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 이동 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-2', cap:30, idx:69.2, vd:'hold', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'카페형 · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-3', cap:50, idx:64.0, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통 미확인'],[null,'객실 4실 · 복합기 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙박 수용력 · 지역교통 제한']]},
    {n:'광역 단위 지역 H-4', cap:12, idx:61.3, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통 미확인'],[null,'정원 12석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 2실 · 지역교통 제한']]},
    {n:'광역 단위 지역 H-5', cap:20, idx:68.6, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 이동 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-6', cap:28, idx:66.7, vd:'hold', ty:[[null,'도서 접근 · Wi-Fi 미확인'],[null,'회의실 X · 장비 제한'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'선박 접근 · 섬 교통 제한']]},
    {n:'광역 단위 지역 H-7', cap:30, idx:72.0, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'숙소 이동 · 보안 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'광역교통 · 숙소 이동']]},
    {n:'광역 단위 지역 H-8', cap:5, idx:58.5, vd:'fail', ty:[[null,'정원 5석 · Wi-Fi 미확인'],[null,'정원 5석 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 H-9', cap:7, idx:72.9, vd:'hold', ty:[[null,'정원 7석 · 운영시간 미확인'],[null,'정원 7석 · 회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-10', cap:6, idx:68.6, vd:'hold', ty:[[null,'정원 6석 · Wi-Fi 미확인'],[null,'정원 6석 · 회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-11', cap:10, idx:65.7, vd:'hold', ty:[[null,'정원 10석 · Wi-Fi 미확인'],[null,'정원 10석 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-12', cap:8, idx:73.3, vd:'hold', ty:[[null,'미팅룸형 · Wi-Fi 미확인'],[null,'정원 8석'],[null,'개인업무 좌석 · 보안 미확인'],[null,'운영시간 · 개인좌석 미확인']]},
    {n:'광역 단위 지역 H-13', cap:15, idx:64.0, vd:'hold', ty:[[null,'해안 외곽 · Wi-Fi 미확인'],[null,'숙소 이동 · 운영시간 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 · 숙소 이동']]}
   ]},
  {name:'광역 단위 지역 I', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:15, pass:2, fail:8, hold:5, avg:63.8}, facilities:[
    {n:'광역 단위 지역 I-1', cap:64, idx:78.7, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V','64석 · 회의실·체험'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'산간 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 I-2', cap:179, idx:65.3, vd:'fail', ty:[[null,'회의실형 · Wi-Fi 미확인'],[null,'상시 전용좌석 미달'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-3', cap:40, idx:70.8, vd:'hold', ty:[[null,'선박 접근 · Wi-Fi 미확인'],[null,'회의실 · 객실 품질 한계'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'도서 교통 · 숙박 품질']]},
    {n:'광역 단위 지역 I-4', cap:50, idx:64.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'장비 · 숙소 이동 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-5', cap:50, idx:65.7, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'장비 · 숙소 이동 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-6', cap:55, idx:60.0, vd:'fail', ty:[[null,'좌석관리 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-7', cap:10, idx:56.0, vd:'fail', ty:[[null,'정원 10석 · 산간 교통'],[null,'정원 10석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-8', cap:40, idx:55.4, vd:'fail', ty:[[null,'Wi-Fi · 산간 교통'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-9', cap:20, idx:66.3, vd:'pass', ty:[[null,'운영 09~18시 · 해안 교통'],[null,'숙소 이동 · Wi-Fi 미확인'],[null,'Wi-Fi · 장시간 운영 미달'],[null,'서류·카드키 절차']]},
    {n:'광역 단위 지역 I-10', cap:46, idx:72.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V*','46석 · 회의실·장비'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 품질 편차 · 지역교통']]},
    {n:'광역 단위 지역 I-11', cap:30, idx:62.7, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통'],[null,'보안 · 운영시간 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 제한 · 객실 18실']]},
    {n:'광역 단위 지역 I-12', cap:50, idx:64.3, vd:'hold', ty:[[null,'Wi-Fi · 산악 교통'],[null,'업무 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'지역교통 · 숙박 품질']]},
    {n:'광역 단위 지역 I-13', cap:50, idx:72.9, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'업무 장비 · 숙소 이동'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'서류 제출 · 숙소 이동']]},
    {n:'광역 단위 지역 I-14', cap:100, idx:58.6, vd:'fail', ty:[[null,'세미나실형 · Wi-Fi 미확인'],[null,'개인 업무좌석 기준 미달'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-15', cap:30, idx:44.6, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'객실 1실 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]}
   ]}
];

const TYPES = [
  {c:'BT', n:'출장 연계 업무형', d:'개인·소규모 출장 기반 단기 업무 워케이션',
   k:'대중교통 접근성 · 출퇴근 난이도 · 개인 업무 시설 · Wifi · 이용 절차 · 운영 시간 · 지역 내 교통', items:[10,12,2,1,5,6,11]},
  {c:'TW', n:'팀/단체 워크샵형', d:'팀 단위 오프라인 협업 및 워크샵 집중',
   k:'협업 시설 · 개인 업무 시설 · 객실 품질 · 체험 프로그램 · 이용 절차 · 출퇴근 난이도 · 업무 지원 장비',
   items:[8,2,4,3,5,12,9], cap:15, note:'정원 15석 이상만 해당'},
  {c:'FP', n:'몰입 프로젝트형', d:'스프린트·집중 개발·프로젝트 완수형 체류',
   k:'개인 업무 시설 · 운영 시간 · Wifi · 업무 지원 장비 · 출퇴근 난이도 · 물리적 보안 · 협업 시설', items:[2,6,1,9,12,7,8]},
  {c:'RW', n:'정규 근무형', d:'월 단위 분산 근무·리텐션 복지형 장기 체류',
   k:'객실 품질 · 운영 시간 · 이용 절차 · 지역 내 교통 · 체험 프로그램 · 대중교통 접근성 · 개인 업무 시설', items:[4,6,5,11,3,10,2]}
];

const QUESTIONS = [
  {id:1, req:1, w:5,  t:'Wifi 환경 및 정보 보안', o:[
    ['Wifi 자체를 제공하지 않음', 0],['공용 Wifi만 제공', 2],['워케이션 전용 Wifi 제공', 3],
    ['전용 Wifi + 기업 보안 요건(망분리 등) 지원 가능', 5]]},
  {id:2, req:1, w:15, t:'개인 업무 시설', o:[
    ['카페·로비 등 재고 관리·예약이 불가한 유사 업무공간', 0],['전용 오피스는 있으나 좌석 관리 체계 없음', 7],
    ['사무실 수준 개인 좌석 + 정원 기반 관리', 12],['좌석 재고·예약 시스템이 자동 연동됨', 15]]},
  {id:3, req:1, w:5,  t:'체험 프로그램', o:[
    ['업무 시간 중 체험 참가가 필수인 형태', 0],['업무 외 시간 운영 프로그램 1개', 3],
    ['업무 외 시간 운영 프로그램 2개 이상', 4],['2개 이상 + 사전 예약·결제 시스템 제공', 5]]},
  {id:4, req:1, w:10, t:'객실 품질', o:[
    ['공용 욕실·기본 침구만 (도미토리·캠핑장 등)', 0],['개인 욕실 + 기본 어메니티 구비', 6],
    ['호텔급 객실 (비데·욕조·다양한 타입)', 8],['관광공사 3성 이상 (조식·부대시설·프런트·방음)', 10]]},
  {id:5, req:1, w:10, t:'이용 절차', o:[
    ['지원정책 없음 / 개인별 선별·환급 절차', 0],['개인 온라인 예약만 가능', 5],
    ['기업 신청 가능 + 지원금 신청서 전산화', 8],['기업 전용 절차 + 지원금·예약 통합 전산화 (출력·스캔 제로)', 10]]},
  {id:6, req:0, w:10, t:'운영 시간', o:[
    ['9~6시만 운영, 주말·공휴일 미운영', 1],['평일 연장 운영 (~22시)', 5],
    ['08~23시 등 장시간 운영', 6],['24시간 연중 상시 운영', 10]]},
  {id:7, req:0, w:10, t:'물리적 보안', o:[
    ['출입 통제 체계·CCTV 없음', 1],['CCTV만 운영', 4],
    ['출입 통제 + CCTV 운영', 7],['출입 통제 + 예약 연동 + 방문자 전산 관리 + CCTV 녹화 보관', 10]]},
  {id:8, req:0, w:5,  t:'협업 시설 (미팅룸)', o:[
    ['미팅룸 미제공', 1],['미팅룸은 있으나 좌석 대비 부족', 3],
    ['좌석 10석당 1개 확보 + 기본 시설', 4],['좌석 10석당 1개 + 기본 시설 + 예약 관리 시스템', 5]]},
  {id:9, req:0, w:5,  t:'업무 지원 장비 및 시설', o:[
    ['장비·시설 미제공', 1],['모니터 정도만 제공', 2],
    ['모니터 + 복합기 + 탕비실', 4],['전 좌석 모니터 + 보관함 + 복합기 + 탕비실 + 폰부스', 5]]},
  {id:10, req:0, w:10, t:'대중 교통 접근성', o:[
    ['자차 이동만 가능', 1],['시외버스 등 제한적 접근', 5],
    ['KTX·종합터미널 연계 가능', 7],['KTX + 지역 내 이동 30분 이내', 10]]},
  {id:11, req:0, w:5,  t:'지역 내 대중 교통', o:[
    ['버스·택시 이용이 현실적으로 불가', 1],['제한적 (배차 간격·운행 시간 제약)', 3],
    ['버스·택시 원활하게 이용 가능', 4],['버스·택시·지역 모빌리티 등 다양한 수단 운영', 5]]},
  {id:12, req:0, w:10, t:'출퇴근 난이도 (숙소↔오피스)', o:[
    ['수단 무관 30분 이상 소요', 1],['차량 10~30분 소요', 5],
    ['도보 10분 이내', 7],['동일 건물·동일 부지 (도보 거리)', 10]]}
];

/* ── 헤더/네비 스캐폴딩: 각 페이지 <div id="wilHeader" data-active="..."></div> 자리에 삽입 ── */
function mountHeader(active){
  const menus = [
    {href:'about.html', key:'about', label:'WIL 소개', mega:{h:'WIL 소개', items:[
      ['about.html#vision','비전과 목표'],['about.html#fields','4대 연구 분야'],['about.html#network','협력 네트워크']]}},
    {href:'indexes.html', key:'indexes', label:'Indexes', mega:{h:'INDEXES', items:[
      ['indexes.html#w2bi','W2BI 기업 요구사항 만족 지수'],['indexes.html#wibi','WIBI 사업 적합성 지수'],
      ['indexes.html#w2bi-method','W2BI 방법론'],['#','__SELF__W2BI 자가 진단']]}},
    {href:'datalab.html', key:'datalab', label:'Workation<br>DataLab', mega:{h:'WORKATION DATALAB', items:[
      ['datalab.html#results','W2BI 진단 결과'],['datalab.html#types','프로그램 유형별 시설'],['datalab.html#sources','지표 및 데이터 출처']]}},
    {href:'research.html', key:'research', label:'Research', mega:{h:'RESEARCH', items:[
      ['research.html#list','연구보고서'],['research.html#list','실증 연구'],['research.html#list','학술 협력']]}}
  ];
  const nav = menus.map(m => `<a href="${m.href}" class="${m.key === active ? 'on' : ''}">${m.label}</a>`).join('');
  const mega = menus.map(m => `<div><h6>${m.h ? '' : ''}${m.mega.h}</h6><ul>${
    m.mega.items.map(([href, label]) =>
      href === '#' ? `<li><a onclick="openSelf()">${label.replace('__SELF__', '')}</a></li>`
                   : `<li><a href="${href}">${label}</a></li>`).join('')
  }</ul></div>`).join('');

  document.getElementById('wilHeader').innerHTML = `
  <header>
    <div class="hbar">
      <a href="index.html" class="brand">
        <img class="brand-mark" src="assets/dear monday-04.png" alt="DearMonday">
        <span class="brand-div"></span>
        <span class="brand-lockup" aria-label="Workation Insight Lab">
          <span class="wil-monogram" aria-hidden="true">WIL</span>
          <span class="brand-txt"><b>WORKATION</b><span>INSIGHT LAB</span><small>RESEARCH · DATA · STANDARD</small></span>
        </span>
      </a>
      <nav class="nav" id="nav">${nav}</nav>
      <div class="hact">
        <a href="mailto:research@dearmonday.io" class="btn-sub">구독신청</a>
        <button class="burger" id="burger" aria-label="메뉴">☰</button>
      </div>
    </div>
    <div class="mega"><div class="mega-in">${mega}</div></div>
  </header>`;

  const burger = document.getElementById('burger');
  const nv = document.getElementById('nav');
  burger.onclick = () => nv.classList.toggle('open');
  nv.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nv.classList.remove('open')));
}

/* ── Footer: DearMonday 관련 링크 드롭다운 포함, 압축형 1단 구성 ── */
function mountFooter(){
  document.getElementById('wilFooter').innerHTML = `
  <footer>
    <div class="container">
      <div class="f-row">
        <div class="f-brand">
          <img src="assets/dear monday-04-white.png" alt="DearMonday">
          <span class="fb-div"></span>
          <div><b>DearMonday</b><span>Workation Insight Lab</span></div>
        </div>
        <div class="f-act">
          <a href="https://dearmonday.io/common/terms" target="_blank" rel="noopener">이용약관</a>
          <a href="https://dearmonday.io/common/privacy" target="_blank" rel="noopener">개인정보 처리방침</a>
          <div class="dd" id="dmDD">
            <button class="dd-btn" id="dmDDBtn">디어먼데이 관련 링크 <i>▾</i></button>
            <div class="dd-menu">
              <a href="https://dearmonday.io" target="_blank" rel="noopener">디어먼데이 플랫폼 <em>↗</em></a>
              <a href="https://www.youtube.com/@dearmonday" target="_blank" rel="noopener">YouTube <em>↗</em></a>
              <a href="https://www.instagram.com/dear.monday.official" target="_blank" rel="noopener">Instagram <em>↗</em></a>
              <a href="https://blog.naver.com/dear_monday" target="_blank" rel="noopener">Naver Blog <em>↗</em></a>
            </div>
          </div>
        </div>
      </div>
      <div class="f-legal">
        <b>상호명</b> 주식회사 디어먼데이 <b>대표자</b> 김정수, 김성우
        <b>사업자등록번호</b> 544-81-02720 <b>통신판매업신고번호</b> 2024-서울중구-0166호
        <b>주소</b> 서울특별시 마포구 백범로 31길, 21 지상 3층 310호 (공덕동, 서울창업허브 별관)
        <b>개인정보 관리책임자</b> 김성우 (sungwoo.kim@dearmonday.io)
        <span style="margin-left:auto">Copyright ⓒ 2026 DearMonday. All rights reserved.</span>
      </div>
    </div>
  </footer>`;
  const dd = document.getElementById('dmDD');
  document.getElementById('dmDDBtn').onclick = e => { e.stopPropagation(); dd.classList.toggle('open'); };
  document.addEventListener('click', () => dd.classList.remove('open'));
}

/* ── 히어로/배너 쇼케이스 슬라이더 (여러 페이지 공용) ── */
function mountShowcase(elId, dotsId, pickIdx){
  const sc = document.getElementById(elId), dots = document.getElementById(dotsId);
  if (!sc) return;
  pickIdx.forEach((p, i) => {
    const b = BRANCHES[p], f = document.createElement('figure');
    if (i === 0) f.className = 'on';
    f.innerHTML = `<img src="${b.img}" alt="${b.n}" decoding="async" onerror="this.style.display='none'">
      <figcaption><span class="sc-tag">${b.r}</span>
      <div class="sc-name">${b.n.replace('DearMonday ', '')}</div>
      <div class="sc-meta">${b.tag} · 오피스 ${b.cap}석</div></figcaption>`;
    sc.insertBefore(f, dots);
    if (dots) {
      const d = document.createElement('i');
      if (i === 0) d.className = 'on';
      d.onclick = () => show(i);
      dots.appendChild(d);
    }
  });
  const figs = sc.querySelectorAll('figure'), ds = dots ? dots.querySelectorAll('i') : [];
  let cur = 0, timer = setInterval(next, 5200);
  function show(n){
    cur = n;
    figs.forEach((f, i) => f.classList.toggle('on', i === n));
    ds.forEach((d, i) => d.classList.toggle('on', i === n));
    clearInterval(timer); timer = setInterval(next, 5200);
  }
  function next(){ show((cur + 1) % figs.length); }
}

/* ── W2BI 자가 진단 모달 마운트 (모든 페이지 공용) ── */
function mountSelfModal(){
  const req = QUESTIONS.filter(q => q.req), rec = QUESTIONS.filter(q => !q.req);
  const mk = q => `<div class="q">
      <div class="qt"><b>${q.id}. ${q.t}</b><span>배점 ${q.w}점</span></div>
      <div class="opts">${q.o.map(([lb, sc]) =>
        `<label class="opt"><input type="radio" name="q${q.id}" value="${sc}">
         <span>${lb}</span><em>${sc}점</em></label>`).join('')}</div>
    </div>`;
  document.getElementById('wilModal').innerHTML = `
  <div class="modal" id="selfModal">
    <div class="mbox">
      <div class="mhead">
        <div>
          <h3>W2BI 자가 진단</h3>
          <p>실제 진단에 사용하는 12개 항목·100점 만점 체계를 그대로 적용합니다.
             응답 결과는 저장되지 않으며 브라우저 안에서만 계산됩니다.</p>
        </div>
        <button class="mclose" onclick="closeSelf()" aria-label="닫기">✕</button>
      </div>
      <div class="mbody">
        <div class="result" id="selfResult"></div>
        <div class="cap-row">
          <label for="capIn">오피스 정원</label>
          <input type="number" id="capIn" value="12" min="1" max="200">
          <small>석 — 팀/단체 워크샵형(TW) 판정에 사용됩니다 (15석 이상 필요)</small>
        </div>
        <div id="qWrap">
          <div class="qlabel">필수 항목 · 5개 · 45점 — 소계 33점 미만 시 기업 매칭 추천 대상 제외</div>
          ${req.map(mk).join('')}
          <div class="qlabel">권장 항목 · 7개 · 55점</div>
          ${rec.map(mk).join('')}
        </div>
      </div>
      <div class="mfoot">
        <span style="font-size:12px;color:var(--mute)">항목을 선택하면 즉시 계산됩니다. 미선택 항목은 0점 처리됩니다.</span>
        <div style="display:flex;gap:10px">
          <button class="btn-line" style="border-color:var(--line);color:var(--body)" onclick="resetSelf()">초기화</button>
          <button class="btn-fill" onclick="calcSelf(true)">결과 보기</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('qWrap').addEventListener('change', () => calcSelf(false));
  document.getElementById('capIn').addEventListener('input', () => calcSelf(false));
  document.getElementById('selfModal').addEventListener('click', e => { if (e.target.id === 'selfModal') closeSelf(); });
}

function getScores(){
  const s = {};
  QUESTIONS.forEach(q => {
    const el = document.querySelector(`input[name="q${q.id}"]:checked`);
    s[q.id] = el ? +el.value : 0;
  });
  return s;
}

function calcSelf(scroll){
  const s = getScores();
  const cap = +document.getElementById('capIn').value || 0;
  const reqSum = [1,2,3,4,5].reduce((a, i) => a + s[i], 0);
  const recSum = [6,7,8,9,10,11,12].reduce((a, i) => a + s[i], 0);
  const total = reqSum + recSum;
  const zero = [1,2,3,4,5].filter(i => s[i] === 0);
  const pass = zero.length === 0 && reqSum >= 33;

  const tRes = TYPES.map(t => {
    const got = t.items.reduce((a, i) => a + s[i], 0);
    const den = t.items.reduce((a, i) => a + QUESTIONS.find(q => q.id === i).w, 0);
    const fit = den ? Math.round(got / den * 1000) / 10 : 0;
    const capOk = !t.cap || cap >= t.cap;
    const ok = pass && fit >= 80 && capOk;
    let why = '적합';
    if (!pass) why = '필수 요건 미충족';
    else if (!capOk) why = `정원 ${cap}석 (${t.cap}석 미만)`;
    else if (fit < 80) why = `적합도 ${fit} (기준 80 미만)`;
    return {...t, fit, ok, why};
  });

  const box = document.getElementById('selfResult');
  box.className = 'result on';
  box.innerHTML = `
    <div class="res-top">
      <div><b>${total}</b><span>W2BI 총점 / 100점</span></div>
      <div><b>${reqSum}</b><span>필수 소계 / 45점</span></div>
      <div><b>${recSum}</b><span>권장 소계 / 55점</span></div>
      <div><b>${tRes.filter(t => t.ok).length}</b><span>해당 프로그램 유형 / 4</span></div>
    </div>
    <div class="res-verdict ${pass ? 'pass' : 'fail'}">
      ${pass
        ? `필수 요건 충족 — 기업 매칭 추천 대상입니다. (필수 소계 ${reqSum}점 ≥ 33점)`
        : zero.length
          ? `필수 요건 미충족 — ${zero.map(i => i + '번 항목').join(', ')}이 0점입니다. 0점 항목이 있으면 기업 매칭 추천 대상에서 제외됩니다.`
          : `필수 요건 미충족 — 필수 소계 ${reqSum}점으로 기준 33점에 ${33 - reqSum}점 부족합니다.`}
    </div>
    <div class="res-types">
      ${tRes.map(t => `<div class="rt ${t.ok ? 'ok' : 'no'}">
        <div class="mark">${t.ok ? 'V' : '–'}</div><b>${t.n}</b>
        <span>${t.ok ? '적합도 ' + t.fit : t.why}</span>
      </div>`).join('')}
    </div>
    <p style="margin-top:14px;font-size:11.5px;color:var(--mute);line-height:1.6">
      본 자가 진단은 응답 기반 참고 결과입니다. 공식 W2BI 진단은 현장 실사 및 운영 데이터 확인을 거쳐 확정됩니다.
    </p>`;
  if (scroll) box.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function resetSelf(){
  document.querySelectorAll('#qWrap input[type=radio]').forEach(r => r.checked = false);
  document.getElementById('capIn').value = 12;
  document.getElementById('selfResult').className = 'result';
}
function openSelf(){ document.getElementById('selfModal').classList.add('on'); document.body.style.overflow = 'hidden'; }
function closeSelf(){ document.getElementById('selfModal').classList.remove('on'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSelf(); });

/* ── 스크롤 스파이(같은 페이지 섹션 이동 시) ── */
function mountSpy(ids){
  const nav = [...document.querySelectorAll('#nav a')];
  const secs = ids.map(i => document.querySelector(i)).filter(Boolean);
  if (!secs.length) return;
  const spy = () => {
    const y = window.scrollY + 180;
    let cur = -1;
    secs.forEach((s, i) => { if (s.offsetTop <= y) cur = i; });
  };
  window.addEventListener('scroll', spy, {passive:true}); spy();
}
