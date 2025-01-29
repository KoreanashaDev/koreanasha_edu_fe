document.addEventListener("DOMContentLoaded", function () {
    i18next
        .use(i18nextBrowserLanguageDetector) // 언어 자동 감지
        .init({
            lng: localStorage.getItem("lang") || "ko", // 저장된 언어 가져오기
            fallbackLng: "ko", // 기본 언어 설정
            debug: true, // 디버깅 모드 활성화
            resources: {
                ko: {
                    translation: {
                        header_menu_about_us: "유학원 소개",
                        header_menu_pricing_plans: "가격 안내",
                        header_menu_koreanasha_services: "서비스 안내",
                        header_menu_reviews: "사용자 후기",
                        header_menu_faq: "자주 묻는 질문",
                        header_btn: "무료 상담받기",

                        banner_title: "한국 유학 쉽습니다!",
                        banner_description: "당신의 꿈을 현실로 만들어 드립니다.<br>한국 유학의 첫걸음, 무료 상담으로 시작하세요!",
                        banner_btn: "무료 상담받기",
                    }
                },
                ru: {
                    translation: {
                        header_menu_about_us: "О компании",
                        header_menu_pricing_plans: "Тарифы",
                        header_menu_koreanasha_services: "Услуги",
                        header_menu_reviews: "Отзывы",
                        header_menu_faq: "FAQ",
                        header_btn: "Бесплатная консультация",
                        
                        banner_title: "Учеба в Корее - это просто!",
                        banner_description: "Поможем воплотить ваши мечты в реальность.<br>Начните свой первый шаг к мечте с бесплатной консультации!",
                        banner_btn: "Бесплатная консультация",
                    }
                }
            }
        }, function (err, t) {
            if (err) return console.error("i18next 초기화 오류:", err);
            updateContent();
            document.body.style.display = "block"; // 번역 후 표시
        });
});

function changeLanguage(lang) {
    i18next.changeLanguage(lang, function () {
        localStorage.setItem("lang", lang); // 선택한 언어 저장
        updateContent();
    });
}

function updateContent() {
    Object.keys(i18next.store.data[i18next.language].translation).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = i18next.t(key);
        }
    });
}