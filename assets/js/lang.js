document.addEventListener("DOMContentLoaded", function () {
    i18next
        .use(i18nextBrowserLanguageDetector) // 언어 자동 감지
        .init({
            lng: localStorage.getItem("lang") || "ru", // 저장된 언어 가져오기
            fallbackLng: "ru", // 기본 언어 설정
            debug: true, // 디버깅 모드 활성화
            resources: {
                ko: {
                    translation: {
                        lang_flag: "🇰🇷",
                        header_menu_about_us: "유학원 소개",
                        header_menu_pricing_plans: "가격 안내",
                        header_menu_koreanasha_services: "서비스 안내",
                        header_menu_reviews: "사용자 후기",
                        header_menu_faq: "자주 묻는 질문",
                        header_btn: "무료 상담받기",

                        banner_title: "한국 유학 쉽습니다!",
                        banner_description: "당신의 꿈을 현실로 만들어 드립니다.<br>한국 유학의 첫걸음, 무료 상담으로 시작하세요!",
                        banner_btn: "무료 상담받기",
                        banner_btn_only_mobile: "무료 상담받기",

                        about_us_subtitle: "유학원 소개",
                        about_us_title: "당신의 한국 유학 꿈,<br><span class=\"text-blue\">Koreanasha</span>와 함께 현실로!",
                        about_us_description: "어학원부터 박사 과정까지, 처음부터 끝까지 함께합니다.",
                        about_us_section1_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">김예찬</h5>Koreanasha 대표",
                        about_us_section1_title: "“70만 팔로워가 신뢰하는 한국어 교육 전문 인플루언서이자 Koreanasha의 대표 김예찬입니다.”",
                        about_us_section1_description: "한국 유학 준비부터 합격 후 유학생활까지, 여러분의 모든 여정을 함께합니다. 숙소 찾기, 현지 네트워킹, 그리고 맞춤형 지원 서비스까지! 여러분이 꿈꾸는 한국 유학생활을 완벽하게 실현할 수 있도록 든든한 파트너가 되어드리겠습니다.",
                        about_us_section2_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">체보타레바 알리나</h5>Koreanasha 컨설턴트",
                        about_us_section2_title: "“숭실대학교 국어국문학과를 졸업한 한국어와 문학 전문가, 체보타레바 알리나입니다.”",
                        about_us_section2_description: "한국 교육과 문화에 대한 깊은 통찰을 바탕으로, 차별화된 유학 컨설팅을 제공합니다. 학생의 목표와 잠재력을 최우선으로 생각하며, 개인 맞춤형 전략으로 유학 준비 과정의 모든 디테일을 세심하게 챙겨드립니다. 한국에서의 꿈을 현실로 만드는 여정, 지금 시작하세요! ",
                        about_us_section3_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">사이라노바 알렉산드라</h5>Koreanasha 컨설턴트",
                        about_us_section3_title: "“숭실대학교 국제무역 전공으로, 여러분의 유학 여정을 책임감 있게 이끌어 줄 수 있는 사이라노바 알렉산드라입니다.”",
                        about_us_section3_description: "대학 선택부터 합격까지, 막막하고 복잡했던 유학 준비 과정을 명확하고 체계적으로 해결해 드립니다. 여러분의 잠재력을 현실로 바꾸는 여정, 알렉산드라와 함께라면 꿈은 더 이상 멀지 않습니다. \"당신의 꿈이 시작되는 순간, 제가 함께합니다.\"",

                        why_koreanasha_title: "Koreanasha와 함께라면,<br><span class=\"text-gradation\">유학의 길이 달라집니다!</span>",
                        why_koreanasha_section1_title: "완벽 지원,<br>시작부터 성공까지",
                        why_koreanasha_section1_description: "한국 유학의 모든 과정을 책임집니다. 프로그램 선택, 서류 준비, 입국 절차까지, 처음부터 끝까지 당신 곁에 있습니다. Koreanasha는 단순한 상담이 아닌, 성공의 파트너입니다.",
                        why_koreanasha_section2_title: "100% 맞춤형 전략,<br>오직 당신만을 위해",
                        why_koreanasha_section2_description: "모든 학생의 꿈과 목표는 다릅니다. 당신의 강점과 목표를 반영한 맞춤형 학업 계획으로, 꿈을 실현할 최고의 길을 설계합니다. Koreanasha는 당신의 가능성을 극대화합니다.",
                        why_koreanasha_section3_title: "가장 합리적인 비용,<br>최고의 결과",
                        why_koreanasha_section3_description: "비용 걱정 없이 한국 유학을 시작하세요! Koreanasha는 합리적인 가격에 프리미엄 서비스를 제공하며, 성공적인 유학생활을 보장합니다. 최고의 가성비로 차원이 다른 유학 지원을 경험하세요.",

                        korean_universities_title: "<h2 class=\"mb-4\"><span class=\"text-blue\">50+개 이상의 한국 대학교</span>가<br>여러분의 입학을 기다리고 있습니다.</h2>",

                        pricing_plans_subtitle: "가격 안내",
                        pricing_plans_title: "준비부터 입학까지,<br><span style=\"color: #FF4242;\">한국 유학은 Koreanasha</span>",
                        pricing_plans_description: "한국 대학 입학을 꿈꾸는 여러분을 위해 세 가지 요금제를 준비했습니다.",

                        pills_plan_category_1_tab: "한국 대학 입학",
                        pills_plan_category_2_tab: "단기 어학 연수",

                        pricing_plans_plan1_title: "베이직 플랜",
                        pricing_plans_plan1_subtitle: "어학원, 학사 과정",
                        pricing_plans_plan1_description1: "1개 대학교 선정 + 서류 제출",
                        pricing_plans_plan1_description2: "서류 준비",
                        pricing_plans_plan1_description3: "1회 상담 + 담당자와 채팅",
                        pricing_plans_plan1_btn: "무료 상담받기",

                        pricing_plans_plan2_title: "올인원 플랜",
                        pricing_plans_plan2_subtitle: "어학원, 학사 과정, 석사 과정",
                        pricing_plans_plan2_description1: "3개 대학교 선정 + 서류 제출",
                        pricing_plans_plan2_description2: "서류 준비",
                        pricing_plans_plan2_description3: "전체 지원 과정 동행",
                        pricing_plans_plan2_description4: "3회 상담 + 담당자와 채팅",
                        pricing_plans_plan2_description5: "시험 및 인터뷰 준비",
                        pricing_plans_plan2_description6: "자기소개서 및 학업계획서 작성 지원",
                        pricing_plans_plan2_description7: "은행 잔고증명서 작성 지원",
                        pricing_plans_plan2_description8: "비자 신청 서류 준비 지원",
                        pricing_plans_plan2_description9: "숙소 탐색 및 임대 지원",
                        pricing_plans_plan2_description10: "공항 픽업 서비스",
                        pricing_plans_plan2_btn: "무료 상담받기",

                        pricing_plans_plan3_subtitle: "최대할인",
                        pricing_plans_plan3_title: "프리미엄 플랜",
                        pricing_plans_plan3_description: "어학원, 학사 과정, 석사 과정",
                        pricing_plans_plan3_description1: "3개 대학교 선정 + 서류 제출",
                        pricing_plans_plan3_description2: "서류 준비",
                        pricing_plans_plan3_description3: "전체 지원 과정 동행",
                        pricing_plans_plan3_description4: "3회 상담 + 담당자와 채팅",
                        pricing_plans_plan3_description5: "시험 및 인터뷰 준비",
                        pricing_plans_plan3_description6: "자기소개서 및 학업계획서 작성 지원",
                        pricing_plans_plan3_description7: "은행 잔고증명서 작성 지원",
                        pricing_plans_plan3_description8: "비자 신청 서류 준비 지원",
                        pricing_plans_plan3_btn: "무료 상담받기",

                        pricing_plans_plan4_title: "단기 어학 연수 과정",
                        pricing_plans_plan4_subtitle: "비자 없이 수강 가능, 1주 ~ 2개월 과정",
                        pricing_plans_plan4_description1: "3개의 어학원 선택",
                        pricing_plans_plan4_description2: "서류 준비 및 제출",
                        pricing_plans_plan4_description3: "K-ETA 신청 지원",
                        pricing_plans_plan4_description4: "컨설턴트와 채팅 지원",
                        pricing_plans_plan4_btn: "무료 상담받기",

                        koreanasha_services_subtitle: "서비스 소개",
                        koreanasha_services_title: "유학의 모든 순간,<br>Koreanasha가 <span class=\"text-blue\">완벽하게 함께</span>합니다.",
                        koreanasha_services_description: "유학 준비의 시작부터 목표를 이루는 순간까지,<br>Koreanasha가 든든히 곁을 지킵니다.",

                        koreanasha_services_section1_title: "당신만을 위한 맞춤형 대학 & 어학당 추천",
                        koreanasha_services_section1_description: "학생의 역량과 목표에 완벽히 부합하는 최적의 대학과 어학당을 제안합니다. 1:1 개별 상담으로 장학금 프로그램까지 꼼꼼히 안내하며, 입학 서류 준비부터 대학과 소통하는 것까지 모든 과정을 책임집니다.",
                        koreanasha_services_section2_title: "합격 후에도 걱정 없이, 정착까지 완벽 지원",
                        koreanasha_services_section2_description: "비자 발급, 외국인등록증 신청, 수업 등록 등 유학생활 정착의 모든 과정을 세심히 지원합니다. 새로운 환경에서도 안정적으로 시작할 수 있도록 필요한 모든 것을 함께합니다.",
                        koreanasha_services_section3_title: "함께라서 더 강한 유학 커뮤니티",
                        koreanasha_services_section3_description: "합격자 커뮤니티를 통해 정보를 나누고 새로운 인맥을 쌓을 기회를 제공합니다. 숙소 탐색, 생활 정보, 네트워킹까지 한 곳에서 해결하며, 유학생활의 모든 순간을 든든히 지원합니다.",

                        reviews_subtitle: "사용자 후기",
                        reviews_title: "“Koreanasha와 함께해서<br><span class=\"text-blue\">제 꿈을 이루게</span> 되었어요.”",

                        reviews_review1_title: "카테리나 (중앙대학교 어학당)",
                        reviews_review1_description: "\"알리나 블라디미로브나와 그녀의 팀은 저에게 대학 부설 어학원을 추천해주었습니다. 제 언어 능력이 모든 세부 사항을 충분히 고려할 수 있는 수준이 아니었기에, 큐레이터들이 학비와 숙소를 포함한 대학 목록을 선정해 주었고, 숙소 찾기까지 도와주셨습니다. 또한 비자를 발급받기 위한 상세한 계획도 작성해 주셨습니다. 그들의 도움이 없었다면 저는 이 모든 것을 할 수 없었을 것입니다. 계획대로 진행된 덕분에 저는 중앙대학교에 입학할 수 있었습니다. 이 모든 것이 제 꿈이었고, 드디어 이룰 수 있었습니다. 정말 감사드립니다.\"",
                        reviews_review2_title: "다리야 (명지대학교)",
                        reviews_review2_description: "\"많은 사람들이 저에게 어떻게 한국에 입학했는지, 그리고 언제 돌아갈 계획인지 물어보곤 합니다. 저는 아직도 한국 대학의 학생이고, 저를 도와준 선생님과 그 팀의 연락처를 공유하고 싶습니다. 입학 절차 전반을 그녀가 도와주었고, 덕분에 모든 서류를 차분히 준비해 제출할 수 있었으며, 결과적으로 합격할 수 있었습니다.\"",
                        reviews_review3_title: "엘리자벳 (건국대학교)",
                        reviews_review3_description: "\"회사와 특히 알리나의 전문성과 세심한 접근 방식에 대해 큰 감사를 드립니다! 그녀는 제가 오랫동안 꿈꿔왔던 한국어 강좌에 지원하기 위해 모든 서류 준비 과정을 단계별로 도와주었습니다. 모든 과정이 신속하고 명확하며 불필요한 번거로움 없이 제가 편리하게 사용할 수 있는 메신저를 통해 진행되었습니다. 서류 제출 기한을 맞추지 못할까봐 정말 걱정했지만, 그녀의 도움 덕분에 모든 것이 잘 진행되었습니다! 저는 강좌를 마쳤고 정말 만족합니다. 이 모든 것이 제가 오랫동안 노력해온 결과입니다. 알리나는 진정한 전문가이자 소통하기에 매우 기분 좋은 사람입니다. 적극 추천합니다!\"",
                        reviews_review4_title: "예브게니 (중앙대학교)",
                        reviews_review4_description: "\"알렉산드라, 이렇게 상세하고 기분 좋은 상담을 제공해주셔서 정말 감사합니다. 저는 제가 궁금했던 모든 질문들에 대한 답변을 받을 수 있었습니다: 가장 적합한 옵션, 여러 상황에 따른 가능한 계획 수립 등. 당신은 한국이 그렇게 멀고 닿을 수 없는 곳이 아니라는 것을 저에게 확신시켜 주었습니다. 상담도 받고, 동기부여도 받고, 기분 좋은 대화를 나누며 모든 것이 정말 만족스러웠습니다! 특히 당신의 개인적인 접근 방식, 예의 바르고 친절한 태도를 강조하고 싶습니다. 마치 아주 좋은 친구를 만나 조언을 받은 것 같은 느낌이 들었습니다. 진심으로 감사드립니다!\"",

                        faq_subtitle: "FAQ",
                        faq_title: "자주 묻는 질문",

                        faq_q1: "입학에 필요한 서류가 무엇인가요?",
                        faq_q2: "입학하려면 TOPIK를 제출해야 하나요?",
                        faq_q3: "어떤 어학시험이 치러지나요?",
                        faq_q4: "한국어를 모르는 상태에서도 준비할 수 있을까요?",
                        faq_q5: "원서접수 마감일이 어떻게 되나요?",
                        faq_q6: "외국인 학생 장학금을 지원하는 대학교는 어디인가요?",
                        faq_q7: "입학하려면 몇 학점 이상이어야 하나요?",
                        faq_q8: "입학 연령 제한이 있나요?",
                        faq_q9: "고등학교 졸업 후에 바로 입학할 수 있나요?",
                        faq_q10: "한국대학 졸업 후 직장 구하기가 쉽나요?",

                        faq_a1: "입학에 필요한 서류는 아래와 같으며, 대학과 학과에 따라 추가 서류가 필요할 수도 있고, 교사와 고용주의 추천서와 올림픽 참가 증명서를 제출할 수 있습니다.<br><br>1. * 영어로 번역되고 공증인 + 아포스티유에 의해 인증된 고등학교/전문대 졸업증명서<br>2. 공증인 + 아포스티유에 의해 인증된 영어로 번역된 성적 증명서<br>3. 여권 사본<br>4. 양친의 여권 사본 부모가 외국 여권을 가지고 있지 않은 경우, 신분증 영어로 번역하고 공증을 받아야 합니다.<br>5. 번역되고 공증된 출생증명서 또는 가족관계증명<br>6. 한국어 또는 영어(TOPIK, TOEFL, IELTS 또는 관련 증빙서류 택) 중 하나에 대한 증명서<br>7. 15,000달러 이상 은행증명서 (대학위치에 따라 금액이 변동될 수 있음) (30일 기한)",
                        faq_a2: "한국 대학에 입학하기 위해서는 한국어 또는 영어(TOPIK, TOEFL, IELTS) 자격증이 필요하며, 한국어 능력을 결정하는 내부 시험에서 여러분을 받아들일 수 있는 대학도 있습니다.",
                        faq_a3: "각 대학은 TOPIK, TOEFL, IELTS 인증을 받습니다. 하지만 한국 소재 대학 한국어 연수기관 수료 증명서 또는 한국어자격증명서(대학교 자체 한국어시험 통과자) 또는 세종학당 한국어 중급 1 이상 수료 증명서 같은 서류로 인증을 받을 수도 있는 대학교들이 있습니다.",
                        faq_a4: "영어트랙 전공을 선택하면 영어로만 공부할 수 있습니다.",
                        faq_a5: "대학과 당신이 선택한 방향에 따라 다릅니다. 편안한 문서 준비를 위해 교육 시작 최소 6개월 전에 저희와 함께 준비를 시작하는 것이 좋습니다. 어학 강좌의 기간이 좀 짧을 수도 있어요.",
                        faq_a6: "대학마다 외국인 유학생을 위한 장학금을 제공하지만 규모와 입학조건은 다릅니다.",
                        faq_a7: "한국의 대학에 지원할 수 있는 성적의 하한선은 없지만, 점수가 높을수록 원하는 대학에 입학할 가능성이 높아집니다.",
                        faq_a8: "입학 연령 제한은 없습니다. 하지만 고등학교나 전문대 졸업증명서가 필요합니다.",
                        faq_a9: "네, 고등학교나 전문대를 졸업하고 바로 한국 대학에 갈 수 있습니다.",
                        faq_a10: "한국에서 취업은 전공에 따라 다릅니다. 공학, 비즈니스 분야는 비교적으로 쉬우나 인문학 분야는 어려울 수 있습니다.",

                        footer_description: "<strong>대표</strong>: 김예찬<br><strong>이메일</strong>: koreanasha333@gmail.com<br><strong>사업자등록번호</strong>: 139-74-00672",

                        modal_title: "상담글을 작성하고<br>무료로 한국대학 컨설팅을 받아보세요.",
                        modal_label_name_title: "이름",
                        modal_label_nationality_title: "국적",
                        modal_label_age_title: "나이",
                        modal_label_education_title: "최종학위",
                        modal_label_year_option_default: "옵션 선택",
                        modal_label_education_option_default: "옵션 선택",
                        modal_label_education_option_highschool: "고등학교",
                        modal_label_education_option_bachelor: "전문대",
                        modal_label_education_option_master: "학사",
                        modal_label_education_option_phd: "석사/박사",
                        modal_label_gpa_title: "학점(GPA)",
                        modal_label_language_score_title: "어학성적 (TOPIK, TOEFL, IELTS 등)",
                        modal_label_desired_university_title: "입학하고 싶은 한국 대학교와 그 이유",
                        modal_label_major_title: "희망 전공",
                        modal_label_year_title: "입학 희망 연도",
                        modal_label_budget_title: "예상 학비 지출 금액",
                        modal_label_city_title: "희망 도시",
                        modal_label_important_factors_title: "대학 선택 시 중요하게 생각하는 점",
                        modal_label_reason_title: "한국 대학교에 입학하고 싶은 이유",
                        modal_label_consult_time_title: "상담 희망 시간",
                        modal_label_experience_title: "타 유학원 컨설팅 경험",
                        modal_label_experience_option_default: "옵션 선택",
                        modal_label_experience_option_yes: "예",
                        modal_label_experience_option_no: "아니오",
                        modal_label_contact_title: "Telegram ID / 전화번호",
                        modal_label_source_title: "Koreanasha를 알게 된 경로",
                        modal_label_source_option_default: "옵션 선택",
                        modal_label_source_option_instagram: "인스타그램",
                        modal_label_source_option_youtube: "유튜브",
                        modal_label_source_option_tiktok: "틱톡",
                        modal_label_source_option_facebook: "페이스북",
                        modal_label_source_option_VKontakte: "VK",
                        modal_label_source_option_telegram: "텔레그램",
                        modal_label_source_option_recommendation: "지인추천",
                        modal_label_source_option_search: "인터넷 검색",
                        modal_label_source_option_other: "기타",
                        modal_label_inquiries_title: "기타 문의나 의견",
                        modal_label_privacy_agreement_title: "개인정보 수집 및 이용에 동의합니다.",
                        modal_label_marketing_consent_title: "마케팅 활용 및 광고성 정보 수신 동의",
                        modal_label_final_stage_title: "상담글이 성공적으로 등록되었습니다!",
                        modal_label_final_stage_description: "답변이 등록되면 알림(텔레그램 또는 문자)을 드립니다.<br>Koreanasha는 오직 학생만을 위한 100% 맞춤형 컨설팅을 지원합니다.<br>감사합니다.",
                        modal_label_final_stage_btn: "확인",

                        other_source: "기타 입력",
                        language_score: "증명서 없을 시 현재 준비 과정 작성",

                        language_flag: "<img src=\"assets/img/icon/korea_flag_icon.svg\" width=\"24\" height=\"24\" style=\"margin-right: 3px;\" class=\"flag_icon\"><span class='only-t-and-p'>한국어</span>",
                        prevStep: "< 이전",
                        nextStep: "다음 >",
                        submit: "제출하기",

                        swal_loading_title: "신청을 처리하고 있어요!",
                        swal_loading_description: "잠시만 기다려 주세요. 곧 완료됩니다.😊",
                        swal_error_title: "❌ 신청 처리 실패",
                        swal_error_description: "알 수 없는 오류가 발생했어요. 다시 시도해주세요!",
                        swal_network_error_title: "🚨 네트워크 오류",
                        swal_network_error_description: "서버와 연결하는 데 문제가 발생했어요. 인터넷 연결을 확인한 후 다시 시도해 주세요.",
                        swal_error_btn: "확인",
                        swal_network_error_btn: "확인",
                    }
                },
                ru: {
                    translation: {
                        lang_flag: "🇷🇺",
                        header_menu_about_us: "О компании",
                        header_menu_pricing_plans: "Тарифы",
                        header_menu_koreanasha_services: "Услуги",
                        header_menu_reviews: "Отзывы",
                        header_menu_faq: "FAQ",
                        header_btn: "Бесплатная консультация",

                        banner_title: "Учеба в Корее - это просто!",
                        banner_description: "Поможем воплотить ваши мечты в реальность.<br>Сделайте первый шаг к мечте с помощью бесплатной консультации!",
                        banner_btn: "Бесплатная консультация",
                        banner_btn_only_mobile: "Бесплатная консультация",

                        about_us_subtitle: "О компании",
                        about_us_title: "Легкий путь к учебе в Корее!<br><span class=\"text-blue\">Персональная</span> поддержка с <span class=\"text-blue\">Koreanasha!</span>",
                        about_us_description: "От языковых курсов до докторской степени — Мы будем с вами на протяжении всего пути.",
                        about_us_section1_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">Ким Ечан</h5>Директор Koreanasha",
                        about_us_section1_title: "“Меня зовут Ким Ечан, я являюсь основателем Koreanasha, инфлюенсером и экспертом в области обучения корейскому языку с аудиторией в 700 тысяч подписчиков.”",
                        about_us_section1_description: "Мы поможем вам во всем: от подготовки к учебе в Корее до адаптации к жизни после поступления. Поиск жилья, помощь в тонкостях студенческой жизни в Корее, индивидуальная поддержка — все это станет доступным вместе с нами! Мы станем вашим надежным другом, чтобы вы смогли полностью воплотить свою мечту об учебе в Корее. С Koreanasha новый старт в Корее станет простым и особенным!",
                        about_us_section2_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">Чеботарева Алина</h5>куратор Koreanasha",
                        about_us_section2_title: "“Меня зовут Чеботарева Алина, я эксперт по корейскому языку и культуре, выпускница факультета корейского языка и литературы университета Soongsil.”",
                        about_us_section2_description: "Благодаря глубоким знаниям в области корейского образования и культуры, я предоставляю индивидуальный подход и консультации. Основываясь на целях студентов и раскрытии их потенциала, я создаю персонализированные стратегии и детально сопровождаю весь процесс подготовки к учебе. Начните свое путешествие к осуществлению мечты об учебе в Корее уже сейчас!",
                        about_us_section3_subtitle: "<h5 class=\"text-white\" style=\"margin-bottom: 0px;\">Сайранова Александра</h5>куратор Koreanasha",
                        about_us_section3_title: "“Я, Сайранова Александра, выпускница факультета международной торговли университета Soongsil. Я готова взять на себя ответственность за ваш образовательный путь.”",
                        about_us_section3_description: "От выбора университета до поступления, я помогу справиться со всеми сложностями и организую процесс максимально эффективно. Вместе мы превратим ваш потенциал в реальность. С Александрой ваши мечты будут ближе, чем вы думаете. \"Ваши мечты — это лишь начало вашего пути, и я буду рядом с вами на каждом этапе!\"",

                        why_koreanasha_title: "Поступление с Koreanasha<br><span class=\"text-gradation\">будет простым и комфортным!</span>",
                        why_koreanasha_section1_title: "Полная поддержка,<br>от начала до успеха!",
                        why_koreanasha_section1_description: "Мы отвечаем за все аспекты обучения за рубежом в Южной Корее. От выбора программы, подготовки документов до успешного поступления в университет— мы будем рядом с вами от начала и до конца. Koreanasha — не просто информация о поступлении, а партнер по достижению успеха.",
                        why_koreanasha_section2_title: "Индивидуальный план поступления!",
                        why_koreanasha_section2_description: "У каждого студента свои мечты и цели. Мы разрабатываем план поступления, который отражает ваши сильные стороны и помогает достигнуть поставленных целей. Koreanasha максимально раскрывает ваш потенциал и помогает вам поступить в университет вашей мечты в Корее.",
                        why_koreanasha_section3_title: "Лучшие цены на рынке!",
                        why_koreanasha_section3_description: "Начните учёбу в Южной Корее — мы поможем вам сэкономить время и гарантируем поступление без стресса! Koreanasha предоставляет услуги премиум-класса по разумным ценам. Мы поможем вам получить максимально возможную стипендию и осуществить вашу мечту Об обучении в Корее.",

                        korean_universities_title: "<h2 class=\"mb-4\"><span class=\"text-blue\">Более 50 Корейских университетов</span><br>ждут вашего поступления!</h2>",

                        pricing_plans_subtitle: "Тарифы",
                        pricing_plans_title: "От подготовки до поступления,<br><span style=\"color: #FF4242;\">поступайте в Южную Корею вместе с Koreanasha</span>",
                        pricing_plans_description: "Для тех кто мечтает поступить в корейский университет, мы подготовили три тарифных плана, которые соответствуют вашим потребностям.",

                        pills_plan_category_1_tab: "Поступление в корейские вузы",
                        pills_plan_category_2_tab: "Краткосрочное обучение",

                        pricing_plans_plan1_title: "Базовый план",
                        pricing_plans_plan1_subtitle: "Языковая школа, программа бакалавриата",
                        pricing_plans_plan1_description1: "Выбор 1 университета + подача документов",
                        pricing_plans_plan1_description2: "Подготовка документов",
                        pricing_plans_plan1_description3: "1 консультация + чат с куратором",
                        pricing_plans_plan1_btn: "Бесплатная консультация",

                        pricing_plans_plan2_title: "План 'Все включено",
                        pricing_plans_plan2_subtitle: "Языковая школа, программа бакалавриата, магистратура",
                        pricing_plans_plan2_description1: "Выбор 3 университетов + подача документов",
                        pricing_plans_plan2_description2: "Подготовка документов",
                        pricing_plans_plan2_description3: "Полное сопровождение на всех этапах",
                        pricing_plans_plan2_description4: "3 консультации + чат с куратором",
                        pricing_plans_plan2_description5: "Подготовка к экзаменам и собеседованию",
                        pricing_plans_plan2_description6: "Помощь в написании мотивационного письма и учебного плана",
                        pricing_plans_plan2_description7: "Помощь в оформлении справки о состоянии банковского счета",
                        pricing_plans_plan2_description8: "Помощь в подготовке документов для визы",
                        pricing_plans_plan2_description9: "Помощь в поиске жилья",
                        pricing_plans_plan2_description10: "Встреча в аэропорту",
                        pricing_plans_plan2_btn: "Бесплатная консультация",

                        pricing_plans_plan3_subtitle: "Максимальная скидка",
                        pricing_plans_plan3_title: "Премиум план",
                        pricing_plans_plan3_description: "Языковая школа, программа бакалавриата, магистратура",
                        pricing_plans_plan3_description1: "Выбор 3 университетов + подача документов",
                        pricing_plans_plan3_description2: "Подготовка документов",
                        pricing_plans_plan3_description3: "Полное сопровождение на всех этапах",
                        pricing_plans_plan3_description4: "3 консультации + чат с куратором",
                        pricing_plans_plan3_description5: "Подготовка к экзаменам и собеседованию",
                        pricing_plans_plan3_description6: "Помощь в написании мотивационного письма и учебного плана",
                        pricing_plans_plan3_description7: "Помощь в оформлении справки о состоянии банковского счета",
                        pricing_plans_plan3_description8: "Помощь в подготовке документов для визы",
                        pricing_plans_plan3_btn: "Бесплатная консультация",

                        pricing_plans_plan4_title: "Краткосрочный курс языкового обучения",
                        pricing_plans_plan4_subtitle: "Возможность обучения без визы, продолжительность от 1 недели до 2 месяцев",
                        pricing_plans_plan4_description1: "выбор 3 языковых школ",
                        pricing_plans_plan4_description2: "подготовка и подача документов",
                        pricing_plans_plan4_description3: "помощь в оформлении КЕТА",
                        pricing_plans_plan4_description4: "чат с куратором",
                        pricing_plans_plan4_btn: "Бесплатная консультация",

                        koreanasha_services_subtitle: "Услуги",
                        koreanasha_services_title: "<span class=\"text-blue\">Мы — одна команда!</span><br>Вместе с вами поможем достичь вашей мечты!",
                        koreanasha_services_description: "С самого начала подготовки к обучению в Южной Корее и до момента достижения ваших целей Koreanasha будет рядом с вами.",

                        koreanasha_services_section1_title: "Индивидуальные рекомендации по университетам и языковым школам специально для вас.",
                        koreanasha_services_section1_description: "Мы предлагаем лучшие университеты и языковые школы, которые идеально соответствуют способностям и целям студента. Мы предоставляем подробную консультацию по стипендиальным программам посредством индивидуальных консультаций и отвечаем за весь процесс, от подготовки вступительных документов до общения с университетами.",

                        koreanasha_services_section2_title: "Никаких беспокойств даже после поступления: полная поддержка наших студентов.",
                        koreanasha_services_section2_description: "Мы оказываем тщательную поддержку и консультации на всех этапах адаптации к студенческой жизни, включая выдачу виз, подачу заявления на получение регистрационной карты иностранца и регистрацию на занятия.",

                        koreanasha_services_section3_title: "Мы предоставим вам все необходимое для успешного старта в новой среде.",
                        koreanasha_services_section3_description: "Сообщество наших студентов предоставляет возможности для обмена информацией и поиска друзей. Мы оказываем полную поддержку на каждом этапе вашего обучения за рубежом: от поиска жилья до информации о жизни и налаживания связей — все вместе с нами в Koreanasha.",

                        reviews_subtitle: "Отзывы",
                        reviews_title: "«Вместе с Корея Наша,<br><span class=\"text-blue\">я осуществил свою мечту.»</span>",

                        reviews_review1_title: "Екатерина (Языковые курсы, университет Чун-Анг)",
                        reviews_review1_description: "\"Алина Владимировна и ее команда порекомендовала мне курсы при университете. Поскольку мои знания языка не позволяли в полной мере учесть все тонкости, кураторы сделали подборку университетов с ценами за обучение и помогли с жильем. Они также составили для меня подробный план действий по оформлению визы. Могу сказать, что без их помощи я бы не справилась. Придерживаясь намеченного плана, у меня все получилось, и я поступила в Университет Чун-Анг. За это я очень благодарна, это была моя мечта, и она сбылась. Спасибо огромное.\"",
                        reviews_review2_title: "Дарья (Университет Менджи)",
                        reviews_review2_description: "\"Многие меня спрашивали, как я поступила в Корею и когда я туда вернусь. Я все еще считаюсь студентом корейского университета и хочу поделиться контактами своего учителя и ее команды. Полностью все мое поступление курировала она и благодаря этому я спокойно собрала все документы, подала их и меня приняли\"",
                        reviews_review3_title: "Элизабет (Университет Кенхи)",
                        reviews_review3_description: "\"Огромная благодарность компании и особенно Алине за её профессионализм и внимательный подход! Она помогла мне на каждом этапе оформления документов для поступления на курсы корейского языка о которых я всегда мечтала. Всё было сделано быстро, четко и без лишних хлопот и в удобном для меня мессенджере. Я очень переживала, что не смогу уложиться в сроки подачи документов, однако, благодаря её помощи, всё получилось! Я отучилась на курсах и очень довольна, ведь это то, к чему я стремилась так долго! Алина - настоящий профессионал и очень приятный в общении человек. Рекомендую!\"",
                        reviews_review4_title: "Евгений (Поступает в университет Чун-Ан)",
                        reviews_review4_description: "\"Александра, спасибо большое за такую подробную и приятную консультацию. Я получил ответы на все интересующие меня вопросы: наиболее подходящий вариант для меня лично, проработка нескольких возможных планов при различном ходе событий и многое другое. Вы убедили меня, что Корея не так недостижима, как казалось до ЭТОГО. Получается и консультация ; и мотивация , и приятная беседа, И вообще я всем доволен!Отдельно хочу выделить Ваш личностный подход, вежливость и доброжелательность. Казалось, будто я пришел к очень хорошему другу за советом! Благодарю от всей души!\"",

                        faq_subtitle: "FAQ",
                        faq_title: "Часто задаваемые вопросы",

                        faq_q1: "Какие документы нужны для поступления?",
                        faq_q2: "Нужно ли сдавать TOPIK для поступления?",
                        faq_q3: "Какие языковые экзамены принимаются?",
                        faq_q4: "Можно ли поступить без знания корейского языка?",
                        faq_q5: "Какие сроки подачи заявок на обучение?",
                        faq_q6: "Какие университеты предоставляют стипендии для иностранных студентов?",
                        faq_q7: "Какой средний балл нужен для поступления?",
                        faq_q8: "Есть ли возрастные ограничения для поступления?",
                        faq_q9: "Можно ли поступить сразу после школы?",
                        faq_q10: "Сложно ли найти работу после окончания вуза в Корее?",

                        faq_a1: "1. Аттестат о полном среднем образовании/Диплом СПО, переведённый на английский язык и заверенный нотариусом + апостиль.<br>2. Вкладыш с оценками, переведённый на английский язык и заверенный нотариусом + апостиль.<br>3. Копия загранпаспорта.<br>4. Копии загранпаспортов обоих родителей. Если у родителей нет загранпаспорта, необходимо перевести внутренний паспорт на английский и заверить его нотариально.<br>5. Свидетельство о рождении, переведённое и заверенное нотариально.<br>6. Сертификат о знании одного из языков: корейский или английский (TOPIK, TOEFL, IELTS).<br>7. Сертификат из банка на сумму свыше $15,000 (в зависимости от местоположения университета сумма может меняться) ( срок 30 дней )<br><br>Дополнительные документы могут потребоваться в зависимости от университета и факультета. Можно предоставить рекомендательные письма от преподавателей и работодателей, а также сертификаты об участии в олимпиадах.",
                        faq_a2: "Для поступления в университеты Южной Кореи потребуются сертификаты о знании одного из языков: корейский или английский (TOPIK, TOEFL, IELTS). Так же есть университеты, которые могут принять Вас по внутреннему экзамену, который определеят Ваши знания корейского языка (для английского не предусмотренно).",
                        faq_a3: "Каждый университет принимает сертификаты TOPIK, TOEFL, IELTS. Но есть вузы, которые могут принимать с сертификатами школы Седжон, по внутреннему экзамену на знание корейского языка, по сертификату языковых курсов, пройденных при любом корейском вузе.",
                        faq_a4: "Можно, если по Вашей специальности есть направление на английском языке.",
                        faq_a5: "Зависит от вуза и выбранного Вами направления. Для комфортной подготовки документов рекомендуем начинать готовиться вместе с нами минимум за полгода до начала обучения. На языковые курсы срок может быть немного меньше.",
                        faq_a6: "Все университеты предоставляют стипендии для иностранных студентов, но размер и условия получения отличаются.",
                        faq_a7: "Нет нижнего порога оценки для подачи в корейские вузы, но чем выше Ваш балл, тем больше шансов поступить в желаемый университет.",
                        faq_a8: "Возрастных ограничений для поступления нет. Но необходим диплом о получении среднего образования.",
                        faq_a9: "Да, после окончания 11 класса или спо можно сразу поступить в корейские университеты.",
                        faq_a10: "Процесс и результаты трудоустройства зависят от специальности, которую Вы выбрали в университете.",

                        footer_description: "<strong>Генеральный директор</strong>: Ким Ечан<br><strong>Электронная почта</strong>: koreanasha333@gmail.com<br><strong>Регистрационный номер предприятия</strong>: 139-74-00672",

                        modal_title: "Заполните заявку<br>и получите бесплатную консультацию по корейским университетам.",
                        modal_label_name_title: "Имя",
                        modal_label_nationality_title: "Гражданство",
                        modal_label_age_title: "Возраст",
                        modal_label_education_title: "Уровень образования",
                        modal_label_year_option_default: "Выберите вариант",
                        modal_label_education_option_default: "Выберите вариант",
                        modal_label_education_option_highschool: "Старшая школа",
                        modal_label_education_option_bachelor: "Колледж/техникум",
                        modal_label_education_option_master: "Бакалавриат",
                        modal_label_education_option_phd: "Магистратура/Докторантура",
                        modal_label_gpa_title: "Средний балл (аттестат/диплом)",
                        modal_label_language_score_title: "Языковые сертификаты (TOPIK, TOEFL, IELTS и др.)",
                        modal_label_desired_university_title: "Желаемый университет",
                        modal_label_major_title: "Желаемая специальность",
                        modal_label_year_title: "Год поступления",
                        modal_label_budget_title: "Предполагаемые расходы на обучение",
                        modal_label_city_title: "Желаемый город",
                        modal_label_important_factors_title: "Что важно при выборе университета?",
                        modal_label_reason_title: "Почему хотите поступить в корейский университет?",
                        modal_label_consult_time_title: "Желаемое время консультации",
                        modal_label_experience_title: "Был ли у вас опыт консультаций с другими агентствами?",
                        modal_label_experience_option_default: "Выберите вариант",
                        modal_label_experience_option_yes: "Да",
                        modal_label_experience_option_no: "Нет",
                        modal_label_contact_title: "Telegram ID / Номер телефона",
                        modal_label_source_title: "Как вы узнали о Koreanasha?",
                        modal_label_source_option_default: "Выберите вариант",
                        modal_label_source_option_instagram: "Instagram",
                        modal_label_source_option_youtube: "YouTube",
                        modal_label_source_option_tiktok: "TikTok",
                        modal_label_source_option_facebook: "Facebook",
                        modal_label_source_option_VKontakte: "VK",
                        modal_label_source_option_telegram: "Telegram",
                        modal_label_source_option_recommendation: "Рекомендация друга",
                        modal_label_source_option_search: "Поиск в интернете",
                        modal_label_source_option_other: "Другое",
                        modal_label_inquiries_title: "Дополнительные вопросы или комментарии",
                        modal_label_privacy_agreement_title: "Я согласен(а) с политикой обработки персональных данных.",
                        modal_label_marketing_consent_title: "Согласие на использование маркетинга и получение рекламной информации",
                        modal_label_final_stage_title: "Заявка успешно зарегистрирована!",
                        modal_label_final_stage_description: "Как только ответ будет готов, мы уведомим вас (через Telegram или SMS).<br>Koreanasha предлагает исключительно персонализированные консультации для студентов.<br>Спасибо!",
                        modal_label_final_stage_btn: "Подтвердить",

                        other_source: "Введите другое",
                        language_score: "Укажите текущий процесс подготовки, если нет сертификата",

                        language_flag: "<img src=\"assets/img/icon/russia_flag_icon.svg\" width=\"24\" height=\"24\" style=\"margin-right: 3px;\" class=\"flag_icon\"><span class='only-t-and-p'>Русский</span>",
                        prevStep: "< Назад",
                        nextStep: "Далее >",
                        submit: "Отправить",
                        swal_loading_title: "Обрабатываем вашу заявку!",
                        swal_loading_description: "Пожалуйста, подождите немного, скоро всё будет готово.😊",
                        swal_error_title: "❌ Ошибка обработки заявки",
                        swal_error_description: "Произошла неизвестная ошибка. Попробуйте ещё раз!",
                        swal_network_error_title: "🚨 Ошибка сети",
                        swal_network_error_description: "Возникла проблема с подключением к серверу. Проверьте интернет-соединение и попробуйте снова.",
                        swal_error_btn: "ОК",
                        swal_network_error_btn: "ОК",
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
        updateContent();  // ✅ 전체 UI 번역 업데이트
    });
}

function updateContent() {
    requestAnimationFrame(() => {
        document.querySelectorAll("[id]").forEach(element => {
            const key = element.id;
            if (i18next.exists(key)) {
                if (["other_source", "language_score"].includes(key)) {
                    element.placeholder = i18next.t(key);
                } else {
                    // ✅ NEXT 버튼일 경우 4페이지에서는 "제출하기" 유지
                    if (element.id === "nextStep") {
                        if (currentStep === totalSteps) {
                            element.innerHTML = i18next.t("submit"); // ✅ "제출하기" 유지
                        } else {
                            element.innerHTML = i18next.t("nextStep"); // ✅ 다른 페이지는 정상 적용
                        }
                    } else {
                        element.innerHTML = i18next.t(key);
                    }
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    function addRequiredAsterisks() {
        document.querySelectorAll("label[for]").forEach(label => {
            const inputId = label.getAttribute("for");
            const inputField = document.getElementById(inputId);

            if (inputField && inputField.hasAttribute("required")) {
                // ✅ `*`을 동적으로 추가하되, 기존 `*`이 있으면 중복 방지
                if (!label.querySelector(".required-asterisk")) {
                    const asterisk = document.createElement("span");
                    asterisk.classList.add("required-asterisk");
                    asterisk.style.color = "red";
                    asterisk.textContent = " *";
                    label.appendChild(asterisk);
                }
            }
        });
    }

    // ✅ 페이지 로드 시 `*` 적용
    addRequiredAsterisks();

    // ✅ i18next 번역 후에도 `*`이 유지되도록 보장
    i18next.on("languageChanged", function () {
        updateContent(); // 기존 번역 적용
        addRequiredAsterisks(); // ✅ 번역 후 다시 `*` 적용
    });

    // ✅ MutationObserver를 사용하여 번역 후 자동 감지 (실시간 `*` 복구)
    const observer = new MutationObserver(() => {
        addRequiredAsterisks();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});