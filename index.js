/**
 * @author Krystal <p.krystalvv@gmail.com>
 * @version 1.0.0
 * @copyright illi 2024
 */

/** 프로젝트 전체적으로 적용되는 API 입니다.
 * @namespace Common
 */

/**
 * form의 input data가 변경될때 formData를 변경합니다.
 * @function inputChange
 * @memberof Common
 * @param {String} name key
 * @param {String} value value
 */

/**
 * 숫자를 화폐 단위로 반환합니다.
 * @function formattedAmount
 * @memberof Common
 * @param {Number} amount 금액
 * @returns {String} 화폐표기 포맷으로 변환된 문자열
 */

/**
 * 숫자를 한글로 변환합니다.
 * @function formatNumberAll
 * @memberof Common
 * @param {Number} number 숫자
 * @returns {String} 숫자를 한글로 변환한 문자열
 */

/**
 * 현재 라우팅 된 path 이름을 반환합니다.
 * @function getPath
 * @memberof Common
 * @param {String} str 전체 url 주소
 * @returns {String} 현재 라우팅 된 페이지의 path
 */

/**
 * 날짜를 YYYY-MM-DD 형식으로 반환합니다.
 * @function getStrDate
 * @memberof Common
 * @param {Date} date 날짜
 * @returns {String} YYYY-MM-DD 형식으로 변환된 문자열
 */

/**
 * 타임스탬프롤 날짜로 변환합니다.
 * @function getDate
 * @memberof Common
 * @param {Timestamp} timestamp 타임스탬프
 * @returns {String} YYYY-MM-DD 형식으로 변환된 문자열
 */

/**
 * 타임스탬프롤 시간으로 변환합니다.
 * @function getTime
 * @memberof Common
 * @param {Timestamp} timestamp 타임스탬프
 * @returns {String} hh:mm 형식으로 변환된 문자열
 */

/**
 * 문자열을 Date로 변환합니다.
 * @function parseDate
 * @memberof Common
 * @param {String} strDate YYYY-MM-DD 형식으로 작성된 문자열
 * @returns {Date} date
 */

/**
 * 오늘 기준으로 지정된 날짜가 지났는지, 안지났는지를 파악합니다.
 * @function compareDate
 * @memberof Common
 * @param {Date} date 기준 날짜
 * @returns {Boolean} false : 해당 날짜가 도달하지 않았습니다. true : 해당 날짜가 지났습니다.
 */

/**
 * Firebase 문서의 CRUD에 관한 API입니다.
 * @namespace Firebase
 */

/**
 * 문서를 추가합니다
 * @function addDoucument
 * @memberof Firebase
 * @param {String} collectionId 컬렉션 id
 * @param {Object} newData 추가할 데이터
 * @returns {Object} 추가된 doc 문서를 반환
 */

/**
 * 문서를 삭제합니다
 * @function deleteDocument
 * @memberof Firebase
 * @param {String} collectionId 컬렉션 id
 * @param {String} docId 삭제할 doc의 id
 */

/**
 * 특정 상태의 문서를 반환합니다
 * @function getList
 * @memberof Firebase
 * @param {String} type ≈
 * @param {String} state 필터링할 상태값(모든 배열을 출력히려면 "all")
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/**
 * 컬렉션 내의 모든 문서를 반환합니다
 * @function getAllList
 * @memberof Firebase
 * @param {String} collectionId 컬렉션 id
 * @returns {Array} 컬렉션 내의 모든 문서를 반환합니다
 */

/**
 * 문서를 조회합니다
 * @function getDocument
 * @memberof Firebase
 * @param {String} collectionId 컬렉션 id
 * @param {String} docId 조회할 문서의 id
 * @returns {Object} 조회된 문서를 반환
 */

/**
 * 문서의 필드를 업데이트 합니다.
 * @function updateData
 * @memberof Firebase
 * @param {String} type 컬렉션 id
 * @param {String} id 업데이트 할 문서의 id
 * @param {String} data 수정/삽입할 데이터
 */

/**
 * feild의 value가 중복이 되는 데이터가 있는지 확인합니다.
 * @function isDuplication
 * @memberof Firebase
 * @param {String} collectionId 컬렉션 id
 * @param {String} field 검색할 필드
 * @param {String} value 필드의 값
 * @returns {Number} 중복되는 문서의 수
 */

/** 계정을 관리합니다.
 * @namespace User
 */

/**
 * 입점 승인 여부를 수정합니다.
 * @function updateSubmit
 * @memberof User
 */

/**
 * 입점 신청 리스트를 조회합니다.
 * @function getSubmitList
 * @memberof User
 * @param {Object} filter 검색할 조건(json 형식)
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/**
 * 현재 로그인 된 owner의 정보를 조회합니다.
 * @function getOwner
 * @memberof User
 * @param {String} ownerId 현재 로그인된 owner의 id
 * @returns {Object} owner의 정보를 반환합니다.
 */

/**
 * 현재 로그인 된 customer의 정보를 조회합니다.
 * @function getCustomer
 * @memberof User
 * @param {String} customerId 현재 로그인된 customer의 id
 * @returns {Object} customer의 정보를 반환합니다.
 */

/**
 * 현재 로그인 된 owner의 정산 요일을 조회합니다.
 * @function getOwnersettlementday
 * @memberof User
 * @param {String} ownerId 현재 로그인된 owner의 id
 * @returns {String} 정산 요일 반환
 * @default null 월 단위 정산
 */

/**
 * 로그인된 사용자의 정보를 조회합니다.
 * @function getAccount
 * @memberof User
 * @param {String} collectionId 컬렉션 id
 * @param {String} type 아이디타입(이메일/휴대전화)
 * @param {String} value 아이디 값
 * @param {String} password 패스워드
 * @returns {Object} 로그인 정보가 일치하는 사용자 문서를 반환합니다.
 */

/**
 * 패스워드 패턴 확인(아래 조건 중 2개 이상 만족해야 함)
 * - 비밀번호 길이가 8~32자 사이인지 확인
 * - 영문 대문자, 영문 소문자, 숫자, 특수 문자 중 2가지 이상을 조합한 패턴 검사
 * - 영문 대문자 확인
 * - 영문 소문자 확인
 * - 숫자 확인
 * - 특수 문자 확인
 * @function validatePassword
 * @param {String} password 패스워드
 * @memberof User
 */

/** 중복된 계정이 있는지 체크
 * @function checkDuplication
 * @param {String} type 닉네임 / 이메일
 * @param {String} value 계정
 * @memberof User
 */

/** 비밀번호 찾기
 * @function find
 * @memberof User
 */

/** 비밀번호 변경
 * @function changePw
 * @memberof User
 */

/** 로그인
 * @function login
 * @memberof User
 */

/** 상점 정보를 관리합니다.
 * @namespace Shop
 */

/**
 * owner의 shop 정보를 조회합니다.
 * @function getShop
 * @memberof Shop
 * @param {String} ownerId 현재 로그인된 owner의 id
 * @returns {Object} owner의 shop 정보를 반환합니다.
 */

/**
 * owner의 shop 정보를 수정합니다.
 * @function updateShopInfo
 * @memberof Shop
 */

/**
 * 필터링된 상점 리스트를 조회합니다.
 * @function search
 * @memberof Shop
 */

/**
 * 상점 조회의 필터를 리셋합니다.
 * @function reset
 * @memberof Shop
 */

/** 상품 정보를 관리합니다.
 * @namespace Product
 */

/**
 * 현재 로그인 되어있는 owner의 상품 리스트를 조회합니다.
 * @function getShopProductList
 * @memberof Product
 * @param {String} ownerId 현재 로그인 되어있는 ownerId
 * @returns {Array} 상품 리스트를 반환합니다.
 */

/**
 * 상품 리스트를 조회합니다.
 * @function getProductList
 * @memberof Product
 * @param {Object} filter 검색할 조건(json 형식)
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/**
 * 필터링된 상품 리스트를 조회합니다.
 * @function search
 * @memberof Product
 */

/**
 * 상품 조회의 필터를 리셋합니다.
 * @function resetFilter
 * @memberof Product
 */

/**
 * input에 입력한 태그를 추가합니다.
 * @function addTag
 * @memberof Product
 */

/**
 * 태그를 삭제합니다.
 * @function delTag
 * @param {String} value 삭제할 tag의 값
 * @memberof Product
 */

/**
 * 옵션을 선택합니다.
 * @function addOption
 * @param {Number} option 옵션 index
 * @memberof Product
 */

/**
 * 옵션을 삭제합니다.
 * @function delOption
 * @param {Number} option 옵션 index
 * @memberof Product
 */

/**
 * 총 상품 금액을 계산합니다.
 * @function getTotalCost
 * @param {Number} totalCount_ 상품 구매 개수
 * @param {Array} optionList 선택한 옵션 리스트
 * @memberof Product
 */

/**
 * 관심 상품에 등록합니다.
 * @function addGoods
 * @memberof Product
 */

/** 장바구니 정보를 관리합니다.
 * @namespace Cart
 */

/**
 * 픽업 / 배송 장바구니를 선택하는 모달을 띄웁니다.
 * @function openCartModal
 * @memberof Cart
 */

/**
 * 장바구니 리스트를 조회합니다.
 * @function getCartData
 * @memberof Cart
 */

/**
 * 장바구니에 상품을 담습니다.
 * @function addCart
 * @param {String} type 픽업 / 배송
 * @memberof Cart
 */

/**
 * 장바구니를 비웁니다.
 * @function clearCart
 * @memberof Cart
 */

/**
 * 구매 화면에 장바구니의 정보를 전달하여 이동합니다.
 * @function sendData
 * @memberof Cart
 */

/** 포트폴리오 정보를 관리합니다.
 * @namespace Portfolio
 */

/**
 * 현재 로그인 되어있는 owner의 필터 조건이 적용된 포트폴리오 리스트를 조회합니다.
 * @function getPortfolioList
 * @memberof Portfolio
 * @param {Object} filter 검색할 조건(json 형식)
 * @param {String} ownerId 현재 로그인 되어있는 ownerId
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/**
 * 현재 로그인 되어있는 owner의 전체 포트폴리오 리스트를 조회합니다.
 * @function getPortfolioList
 * @memberof Portfolio
 * @param {String} ownerId 현재 로그인 되어있는 ownerId
 * @returns {Array} 현재 로그인 되어있는 owner의 전체 포트폴리오 리스트를 반환합니다.
 */

/** 매출 정보를 관리합니다.
 * @namespace Sale
 * @todo PG API 적용 후 추가 API 작성 필요
 */

/**
 * 매출 리스트를 조회합니다.
 * @function getSaleList
 * @memberof Sale
 * @param {Object} filter 검색할 조건(json 형식)
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/** 일정 정보를 관리합니다.
 * @namespace Plan
 */

/**
 * 일정 리스트를 조회합니다.
 * @function getPlan
 * @memberof Plan
 * @param {String} ownerId 현재 로그인 되어있는 ownerId
 * @param {Date} date 조회할 일정의 날짜
 * @returns {Array} 해당 날짜에 존재하는 일정 리스트 반환
 */

/**
 * 일정 리스트를 조회합니다.
 * @function getPlan
 * @memberof Plan
 * @param {String} ownerId 현재 로그인 되어있는 ownerId
 * @param {Date} date 조회할 일정의 날짜
 * @returns {Array} 해당 날짜에 존재하는 일정 리스트 반환
 */

/** 공지 및 이벤트를 관리합니다.
 * @namespace Notice
 */

/**
 * 공지 리스트를 조회합니다.
 * @function getNotice
 * @memberof Notice
 * @param {Object} filter 검색할 조건(json 형식)
 * @returns {Array} 필터링 된 배열을 반환합니다.
 */

/**
 * 공지 수정 페이지의 공지를 삭제합니다.
 * @function deleteNotice
 * @memberof Notice
 */

/**
 * 공지 수정 페이지의 공지를 수정합니다.
 * @function update
 * @memberof Notice
 */

/**
 * 공지 수정 페이지의 공지를 등록합니다.
 * @function submit
 * @memberof Notice
 */

/**
 * 공지 조회의 필터를 리셋합니다.
 * @function reset
 * @memberof Notice
 */

/**
 * 필터링된 공지 리스트를 조회합니다.
 * @function search
 * @memberof Notice
 */
/** 후기 정보를 관리합니다.
 * @namespace Review
 */

/**
 * customer가 작성한 후기 리스트를 조회합니다.
 * @function getReviewList
 * @memberof Review
 * @param {String} customerId 현재 로그인 되어있는 customerId
 * @returns {Array} customer가 작성한 후기 리스트를 반환합니다.
 */

/**
 * 특정 상품에 작성된 후기 리스트를 조회합니다.
 * @function getReview
 * @memberof Review
 * @param {String} productId 상품 id
 * @returns {Array} 특정 상품에 작성된 후기 리스트를 반환합니다.
 */

/**
 * 리뷰를 등록합니다.
 * @function submitReview
 * @memberof Review
 */

/**
 * 리뷰를 삭제합니다.
 * @function deleteReview
 * @memberof Review
 * @param {String} reviewId 리뷰 id
 */

/** 주문 정보를 관리합니다.
 * @namespace Order
 * @todo 바로고 연동 동작 확인이 필요합니다.
 */

/**
 * customer의 주문 리스트를 조회합니다.
 * @function getOrder
 * @memberof Order
 * @param {String} customerId 현재 로그인 되어있는 customerId
 * @returns {Array} 현재 로그인 된 customer의 주문 리스트를 반환합니다.
 */

/**
 * 현재 로그인 된 owner에게 접수된 주문 리스트를 조회합니다.
 * @function getOrder
 * @memberof Order
 * @param {Object} filter 검색할 조건(json 형식)
 * @returns {Array} 현재 로그인 된 owner의 주문 리스트를 반환합니다.
 */

/**
 * 바로고 모듈에 주문 정보를 전달합니다.
 * @function getBarogo
 * @memberof Order
 */

/**
 * 주문 정보를 저장힙니다.
 * @function onPurchase
 * @memberof Order
 * @todo PG사 API 연결
 */

/** 광고 정보를 관리합니다.
 * @namespace Advertise
 */

/**
 * 현재 로그인 된 owner의 광고 리스트를 조회합니다.
 * @function getAdvertiseList
 * @memberof Advertise
 * @returns {Array} 현재 로그인 된 owner의 광고 리스트를 반환합니다.
 */

/**
 * 광고를 등록합니다
 * @function savePlan
 * @memberof Advertise
 */

/**
 * 광고를 신청합니다
 * @function addAdvertise
 * @memberof Advertise
 */

/**
 * 광고를 수정합니다
 * @function updatePlan
 * @memberof Advertise
 */

/**
 * 광고를 삭제합니다.
 * @function deletePlan
 * @memberof Advertise
 */

/**
 * 선택된 날짜에 접수된 광고룰 조회합니다.
 * @function getAdProduct
 * @memberof Advertise
 * @param {Date} date 달력에서 선택한 날짜
 */

/**
 * 현재 로그인 된 owner의 광고 리스트를 조회합니다.
 * @function getAdvertiseList
 * @memberof Advertise
 * @returns {Array} 현재 로그인 된 owner의 광고 리스트를 반환합니다.
 */

/** 쿠폰 정보를 관리합니다.
 * @namespace Coupon
 */

/**
 * 쿠폰을 삭제합니다.
 * @function deleteCoupon
 * @memberof Coupon
 * @param {String} key 쿠폰 id
 */

/**
 * 쿠폰을 삭제합니다.
 * @function getCouponList
 * @memberof Coupon
 * @param {String} type 쿠폰이 적용되는 고객군을 지정합니다.
 */

/**
 * 쿠폰 정보를 조회합니다.
 * @function getCoupon
 * @memberof Coupon
 * @param {String} key 쿠폰 id
 * @returns {Object} 쿠폰 정보
 */

/**
 * 쿠폰 정보를 저장하고 이전 페이지로 돌아갑니다.
 * @function saveCoupon
 * @memberof Coupon
 * @throws {NonNullable} 쿠폰 이미지가 비어있으면 저장할 수 없습니다.
 */

/**
 * 쿠폰이미지를 coupon 폴더 내에 저장합니다.
 * @function uploadFile
 * @memberof Coupon
 * @param {File} file 쿠폰 이미지
 */

/** 채팅 정보를 관리합니다.
 * @namespace Chat
 */

/**
 * 채팅방 내의 대화 내용을 가지고 옵니다.
 * @function updateChat
 * @memberof Chat
 */

/**
 * 전체 채팅방 리스트를 가지고 옵니다.
 * @function getChatList
 * @memberof Chat
 */

/**
 * 메세지를 입력합니다.
 * @function sendMessage
 * @memberof Chat
 */
