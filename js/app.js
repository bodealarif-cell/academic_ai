/*
   =========================================
   مِحراب العلم - المنطق وقاعدة المعرفة للأستاذ فهمان
   Venerable Fahman AI Knowledge & Interaction Engine
   =========================================
*/

// Inject dynamic shake animation CSS rule
try {
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .shake-input {
                animation: input-shake 0.4s ease-in-out;
            }
            @keyframes input-shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-6px); }
                40%, 80% { transform: translateX(6px); }
            }
        </style>
    `);
} catch (e) {
    console.error("Failed to inject shake style:", e);
}

// Safe LocalStorage Access Wrapper
const safeStorage = {
    getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn("LocalStorage read blocked or failed:", e);
            return null;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e) {
            console.warn("LocalStorage write blocked or failed:", e);
            return false;
        }
    }
};

// Unified Knowledge Base - Combined Curriculum (Biology, Geology, Chemistry, Physics, Languages)
const UNIFIED_CURRICULUM_KB = [
    // Biology (الأحياء)
    {
        keywords: [/دعام.*فسيولوج.*|فسيولوج.*/i, /دعام.*نبات.*/i, /الاسموز.*/i],
        title: "الدعامة الفسيولوجية في النبات",
        subjectName: "الأحياء",
        content: `**الدعامة الفسيولوجية** هي دعامة مؤقتة تتناول الخلية نفسها ككل.
        
### آلية الحدوث:
1. يدخل الماء إلى الفجوة العصارية للخلية النباتية بالخاصية الاسموزية (حيث يكون تركيز المحلول داخل الفجوة أعلى من تربة النبات).
2. يزيد حجم العصير الخلوي فيضغط على البروتوبلازم ويدفعه للخارج نحو الجدار.
3. يتمدد الجدار نتيجة زيادة الضغط الواقع عليه ويصبح متوتراً (مشدوداً)، وبذلك تكتسب الخلية دعامة.

### أمثلة شهيرة في المنهج:
* انتفاخ ثمار الفاكهة المنكمشة أو الجافة عند وضعها في الماء.
* ارتخاء وذبول أوراق وسوق النباتات العشبية عند الجفاف (لفقد خلاياها الدعامة الفسيولوجية)، واستقامتها عند ري التربة.`
    },
    {
        keywords: [/دعام.*تركيب.*/i, /سيليلوز|لجنين|كيوتين|سيوبيرين/i],
        title: "الدعامة التركيبية في النبات",
        subjectName: "الأحياء",
        content: `**الدعامة التركيبية** هي دعامة دائمة تتم بترسيب بعض المواد الصلبة القوية على جدر خلايا النبات أو في أجزاء منها.

### أهداف الدعامة التركيبية:
1. زيادة قدرة خلايا النبات الخارجية على الحفاظ على خلايا النبات الداخلية.
2. منع فقد الماء من خلال الخلايا.
3. إكساب الخلايا الصلابة والقوة وتدعيم النبات.

### المواد المرسبة وأماكنها:
* **الكيوتين:** مادة غير منفذة للماء تترسب على جدر خلايا البشرة الخارجية.
* **السيوبيرين:** مادة غير منفذة للماء تترسب في الخلايا الفلينية التي تحيط بالنبات.
* **السليلوز واللجنين:** تترسب في جدر الخلايا الكولنشيمية والاسكلرنشيمية (خلايا الألياف والخلايا الحجرية) لإكسابها قوة وصلابة.`
    },
    {
        keywords: [/آلية.*انقباض|انقباض.*عضل|هكسلي|خيوط.*منزلق/i, /أكتين|ميوسين|روابط.*مستعرضة/i],
        title: "آلية انقباض العضلة الهيكلية (نظرية هكسلي)",
        subjectName: "الأحياء",
        content: `تعتبر **نظرية الخيوط المنزلقة (للألماني هكسلي)** هي أصح الفروض لتفسير انقباض العضلات الهيكلية (المخططة).

### آلية الانقباض بالتفصيل:
1. **الروابط المستعرضة:** تمتد من خيوط الميوسين خيوط بروتينية تسمى (الروابط المستعرضة). وقد تكونت هذه الروابط بمساعدة **أيونات الكالسيوم ($Ca^{2+}$)**.
2. **عمل الخطاف:** تعمل هذه الروابط المستعرضة كخطاطيف تسحب بمساعدة الطاقة المخزنة في **جزيئات ATP** المجموعات المتجاورة من خيوط الأكتين باتجاه بعضها البعض، مما يؤدي إلى تقارب خطوط Z وينتج عن ذلك انقباض الليفة العضلية.
3. **أثناء الانقباض:** يقل طول المنطقة المضيئة ($I$) وشبه المضيئة ($H$) (وقد تختفي تماماً عند الانقباض التام)، بينما تظل المنطقة الداكنة ($A$) كما هي دون تغيير في الطول.

### نصيحة الأستاذ فهمان للامتحان:
انتبه يا ولدي، أيونات الكالسيوم لها دور مزدوج في الانقباض العضلي:
1. تفجير حويصلات التشابك العصبي لإطلاق النواقل الكيميائية (الأسيتيل كولين) عند زر التشابك.
2. تكوين الروابط المستعرضة الممتدة من الميوسين لتتصل بالأكتين.`
    },
    {
        keywords: [/خط.*دفاع.*ثالث|مناعة.*خلط|مناعة.*خلو|سيتوكين|إنترلوكين/i, /بائية|تائية|بيرفورين/i],
        title: "خط الدفاع الثالث والمناعة المتخصصة",
        subjectName: "الأحياء",
        content: `يمثل **خط الدفاع الثالث** الاستجابة المناعية التكيفية أو المتخصصة، حيث تتدخل الخلايا الليمفاوية لمقاومة الميكروبات التي نجحت في تخطي خط الدفاع الثاني.

### أولاً: المناعة الخلطية (بالأجسام المضادة):
* تقوم بها **الخلايا الليمفاوية البائية (B-cells)**.
* عند دخول الميكروب، تتعرف عليه الخلايا البائية وتلتصق به بواسطة مستقبلاتها، وتعرض أنتيجيناته على سطحها بواسطة بروتين التوافق النسيجي (MHC).
* تقوم الخلايا البلعمية بابتلاع الميكروب وعرض أنتيجيناته أيضاً، فتأتي الخلايا **التائية المساعدة ($T_H$)** وتتعرف عليها وتفرز **الإنترلوكين** لتنشيط الخلايا البائية.
* تنقسم الخلايا البائية النشطة إلى: خلايا بائية بلازمية تنتج الأجسام المضادة، وخلايا بائية ذاكرة تبقى في الجسم عقوداً لتذكره عند الإصابة مجدداً.

### ثانياً: المناعة الخلوية (بالخلايا التائية):
* تقوم بها **الخلايا الليمفاوية التائية ($T-cells$)** بواسطة مستقبلاتها النوعية.
* تفرز الخلايا التائية المساعدة النشطة **السيتوكينات** التي تجذب الخلايا البلعمية وتنشط الخلايا التائية القاتلة ($T_C$) والخلايا البائية والقاتلة الطبيعية (NK).
* تفرز الخلايا التائية القاتلة ($T_C$) بروتين **البيرفورين** (صانع الثقوب) وسموماً ليمفاوية تقضي على الخلايا المصابة بالفيروسات أو السرطانية.`
    },

    // Geology (الجيولوجيا)
    {
        keywords: [/فالق.*عادي|الفالق.*العادي/i, /فالق.*معكوس|الفالق.*المعكوس/i, /حائط.*علوي|حائط.*سفلي/i],
        title: "التفرقة بين الفالق العادي والفالق المعكوس",
        subjectName: "الجيولوجيا",
        content: `**الفوالق (Faults)** هي كسور وتشققات في الكتل الصخرية يصاحبها حركة نسبية للصخور المهشمة على جانبي مستوى الكسر.

### الجدول المقارن الأساسي:

| وجه المقارنة | الفالق العادي (Normal Fault) | الفالق المعكوس (Reverse Fault) |
| :--- | :--- | :--- |
| **قوة التكتونية المسببة** | قوى **شد** تكتونية. | قوى **ضغط** تكتونية. |
| **حركة صخور الحائط العلوي** | تتحرك **لأسفل** بالنسبة لصخور الحائط السفلي. | تتحرك **لأعلى** بالنسبة لصخور الحائط السفلي. |
| **أثرها على مساحة القشرة** | تسبب اتساعاً في مساحة القشرة الأرضية. | تسبب انكماشاً وتكراراً رأسياً للطبقات. |

### نصيحة الأستاذ فهمان للامتحان:
يا بني، لتحديد نوع الفالق في القطاع الجيولوجي: حدد أولاً "مستوى الفالق" (الخط المائل)، الصخور التي تقع **فوق** هذا الخط المائل هي صخور الحائط العلوي. انظر أين تحركت؛ إن كانت تحركت لأسفل فهو عادي، وإن كانت تحركت لأعلى فهو معكوس. لا تخلط بين الحائط السفلي والعلوي مطلقاً!`
    },
    {
        keywords: [/نوع.*صخر|أنواع.*الصخور|الصخور.*النارية|الصخور.*الرسوبية|الصخور.*المتحولة/i, /جرانيت|بازلت|رخام|نيس/i],
        title: "أنواع الصخور الرئيسية في القشرة الأرضية",
        subjectName: "الجيولوجيا",
        content: `تُقسم الصخور في القشرة الأرضية إلى ثلاثة أنواع رئيسية ترتبط ببعضها بدورة الصخور (للعالم جيمس هاتون):

### 1. الصخور النارية (Igneous Rocks):
أم الصخور أو الصخور الأولية لأنها أول ما تكون في القشرة.
* **جوفية (خشنة النسيج):** تبريد بطيء في باطن الأرض يسمح بتجمع بلورات كبيرة مثل **الجرانيت**.
* **بركانية/سطحية (دقيقة النسيج أو زجاجية):** تبريد سريع على السطح مثل **البازلت** و**الأوبسيديان**.
* **متداخلة (نسيج بورفيري):** بلورات كبيرة وسط أرضية من بلورات صغيرة مثل **الدوليريت**.

### 2. الصخور الرسوبية (Sedimentary Rocks):
غطي 75% من سطح الأرض في طبقات رقيقة.
* **فتاتية:** الحجر الرملي، الحجر الطيني، والكونجلوميرات.
* **كيميائية:** الجبس، وملح الطعام.
* **بيوكيميائية:** الحجر الجيري الغني بالحفريات، والفوسفات.

### 3. الصخور المتحولة (Metamorphic Rocks):
نشأت من صخور نارية أو رسوبية تعرضت لحرارة وضغط شديدين.
* **كتلية (بفعل الحرارة):** مثل **الرخام** (المتحول عن الحجر الجيري).
* **متورقة (بفعل الحرارة والضغط):** مثل **النيس** (المتحول عن الجرانيت) وتترتب بلوراته في صفوف متوازية متقطعة.`
    },

    // Chemistry (الكيمياء)
    {
        keywords: [/تحضير.*إيثين|تحضير.*الإيثين|نزع.*ماء.*كحول/i, /كبريتات.*إيثيل/i],
        title: "تحضير غاز الإيثين (الإيثيلين) في المختبر",
        subjectName: "الكيمياء العضوية",
        content: `يُحضر غاز **الإيثين ($C_2H_4$)** في المختبر بنزع الماء من الكحول الإيثيلي (الإيثانول) بواسطة حمض الكبريتيك المركز الساخن عند $180^\circ C$.

### التفاعل الإجمالي:
$$C_2H_5OH + H_2SO_4 \\xrightarrow{180^\\circ C} C_2H_4 + H_2O$$

### ميكانيكية التفاعل (خطوتان):
1. **عند $80^\circ C$:** يتفاعل الإيثانول مع حمض الكبريتيك ليعطي كبريتات الإيثيل الهيدروجينية وماء:
   $$C_2H_5OH + H_2SO_4 \\xrightarrow{80^\\circ C} C_2H_5OSO_3H + H_2O$$
2. **عند $180^\circ C$:** تنحل كبريتات الإيثيل الهيدروجينية حرارياً لتعطي الإيثين وينفصل حمض الكبريتيك مجدداً:
   $$C_2H_5OSO_3H \\xrightarrow{180^\\circ C} C_2H_4 + H_2SO_4$$

### ملاحظات هامة في التجربة:
* يمرر الغاز الناتج على **محلول هيدروكسيد الصوديوم ($NaOH$)** لمعادلة أبخرة حمض الكبريتيك الزائدة والمتطايرة.
* يجمع الإيثين بإزاحة الماء لأسفل لأنه شحيح الذوبان في الماء وأخف من الهواء.`
    },
    {
        keywords: [/خلية.*جلفانية|خلايا.*جلفانية/i, /خلية.*دانيال/i, /أنود|كاثود|قنطرة.*ملحية/i],
        title: "الخلايا الجلفانية وتركيب خلية دانيال",
        subjectName: "الكيمياء الكهربية",
        content: `**الخلايا الجلفانية** هي أنظمة تحول الطاقة الكيميائية إلى طاقة كهربائية من خلال تفاعلات أكسدة واختزال تلقائية.

### نموذج خلية دانيال (Daniell Cell):
تتكون من نصفين متصلين:
1. **الأنود (القطب السالب):** لوح من **الخارصين ($Zn$)** مغمور في محلول كبريتات الخارصين. تحدث هنا عملية الأكسدة:
   $$Zn_{(s)} \\rightarrow Zn^{2+}_{(aq)} + 2e^-$$
2. **الكاثود (القطب الموجب):** لوح من **النحاس ($Cu$)** مغمور في محلول كبريتات النحاس. تحدث هنا عملية الاختزال للكاتيونات:
   $$Cu^{2+}_{(aq)} + 2e^- \\rightarrow Cu_{(s)}$$
3. **القنطرة الملحية (Salt Bridge):** أنبوبة على شكل حرف U تحتوي على محلول إلكتروليتي (مثل كبريتات الصوديوم $Na_2SO_4$) لا يتفاعل مع محاليل نصفي الخلية.
   * **وظيفتها:** التوصيل بين محلولي نصفي الخلية دون اختلاطهما المباشر، ومعادلة الأيونات الزائدة المتراكمة in كلا النصفين لمنع توقف التيار الكهربائي.`
    },
    {
        keywords: [/صدأ.*الحديد|تآكل.*المعادن|عوامل.*الصدأ/i],
        title: "ميكانيكية صدأ الحديد وتآكل المعادن",
        subjectName: "الكيمياء الكهربية",
        content: `يُعد **تآكل المعادن (Corrosion)** وخاصة صدأ الحديد عملية كهروكيميائية تتطلب توفر أكسجين وماء محتوي على أملاح ذائبة (إلكتروليت).

### ميكانيكية التفاعل الكهروكيميائي للصدأ:
عند حدوث شرخ أو كسر في قطعة حديد تحتوي على شوائب من الكربون:
1. **الأنود (المصعد):** الحديد النقي يمثل الأنود ويتأكسد:
   $$2Fe_{(s)} \\rightarrow 2Fe^{2+}_{(aq)} + 4e^-$$
2. **الكاثود (المهبط):** شوائب الكربون تمثل الكاثود، وتحدث عنده عملية اختزال لأكسجين الهواء المذاب في الماء:
   $$O_{2(g)} + 2H_2O_{(l)} + 4e^- \\rightarrow 4OH^-_{(aq)}$$
3. **التفاعل الكلي للصدأ:** تتحد أيونات الحديد مع الهيدروكسيد لتكوين هيدروكسيد الحديد II، والذي يتأكسد بالأكسجين المذاب ليعطي هيدروكسيد الحديد III البني المحمر (الصدأ):
   $$2Fe^{2+}_{(aq)} + 4OH^-_{(aq)} \\rightarrow 2Fe(OH)_{2(s)}$$
   $$2Fe(OH)_{2(s)} + \\frac{1}{2}O_{2(g)} + H_2O_{(l)} \\rightarrow 2Fe(OH)_{3(s)} \\text{ (الصدأ)}$$`
    },
    {
        keywords: [/قانون.*فاراداي|فاراداي|كتلة.*مكافئة|التحليل.*الكهربي/i],
        title: "قوانين فاراداي للتحليل الكهربي",
        subjectName: "الكيمياء الكهربية",
        content: `تدرس **قوانين فاراداي للتحليل الكهربي** العلاقة الكمية بين كمية الكهرباء المارة في المحلول الإلكتروليتي وكتلة المواد المتكونة أو المستهلكة عند الأقطاب.

### 1. القانون الأول لفاراداي:
"تتناسب كتلة المادة المتكونة أو المستهلكة عند أي قطب طردياً مع كمية الكهرباء المارة في المحلول."
$$m \\propto Q \\quad (Q = I \\times t)$$

### 2. القانون الثاني لفاراداي:
"كتل المواد المختلفة المتكونة أو المستهلكة بمرور نفس كمية الكهرباء في عدة محاليل إلكتروليتية متصلة على التوالي تتناسب طردياً مع كتلها المكافئة."
$$\\text{الكتلة المكافئة} = \\frac{\\text{الكتلة الذرية الجرامية}}{\\text{التكافؤ (عدد الشحنات)}}$$

### كمية الكهرباء بالفراداي:
يلزم من الكهرباء لتحرير (كتلة مكافئة جرامية واحدة) من أي مادة كمية مقدارها **1 فراداي** ويساوي **96500 كولوم**.`
    },

    // Physics (الفيزياء)
    {
        keywords: [/قانون.*أوم.*دائرة.*مغلقة/i, /قوة.*دافعة.*كهربية|ق.د.ك/i, /مقاومة.*داخلية/i],
        title: "قانون أوم للدائرة المغلقة والعلاقة بين VB و V",
        subjectName: "الفيزياء الكهربية",
        content: `يحدد **قانون أوم للدائرة المغلقة** شدة التيار الكلي المار في دائرة كهربائية تحتوي على مصدر للجهد ذو مقاومة داخلية.

### الصيغة الرياضية:
$$I = \\frac{V_B}{R_{eq} + r}$$
حيث:
* $I$: شدة التيار الكلي في الدائرة (أمبير).
* $V_B$: القوة الدافعة الكهربية للبطارية (فولت).
* $R_{eq}$: المقاومة الخارجية المكافئة (أوم).
* $r$: المقاومة الداخلية للبطارية (أوم).

### العلاقة بين فرق الجهد بين طرفي البطارية (V) وقوتها الدافعة (VB):
يعبر عن فرق الجهد الخارجي بالمعادلة:
$$V = V_B - I r$$
* **حالة فتح الدائرة ($I=0$):** يصبح $V = V_B$. أي أن فرق الجهد يساوي القوة الدافعة الكهربية عند عدم سحب تيار.
* **حالة مرور تيار ($I > 0$):** يكون $V < V_B$ بسبب الجهد المفقود داخل المقاومة الداخلية للبطارية ويسمى الفقد في الجهد ($Ir$).
* **حالة شحن البطارية:** إذا كانت البطارية يتم شحنها بواسطة مصدر أكبر منها، يصبح القانون: $V = V_B + I r$.`
    },
    {
        keywords: [/كيرشوف/i, /قانون.*كيرشوف|قوانين.*كيرشوف/i, /حفظ.*شحنة|حفظ.*طاقة/i],
        title: "قوانين كيرشوف للدوائر الكهربية المعقدة",
        subjectName: "الفيزياء الكهربية",
        content: `نلجأ إلى **قوانين كيرشوف** لحل الدوائر الكهربية المعقدة التي لا يمكن تبسيطها باستخدام قانون أوم العادي (مثل الدوائر التي تحتوي على مسارات متعددة وبطاريات في فروع مختلفة).

### 1. قانون كيرشوف الأول (قانون التيار - حفظ الشحنة):
"مجموع التيارات الكهربية الداخلة عند أي نقطة تفرع في دائرة مغلقة يساوي مجموع التيارات الخارجة منها."
$$\\sum I_{in} = \\sum I_{out} \\quad \\text{أو} \\quad \\sum I = 0$$

### 2. قانون كيرشوف الثاني (قانون الجهد - حفظ الطاقة):
"المجموع الجبري للقوى الدافعة الكهربية في أي مسار مغلق يساوي المجموع الجبري لفروق الجهد في هذا المسار."
$$\\sum V_B = \\sum I R \\quad \\text{أو} \\quad \\sum V = 0$$`
    },
    {
        keywords: [/تأثير.*كهروضوئي|الظاهرة.*الكهروضوئية/i, /أينشتاين.*كهروضوئي/i, /دالة.*الشغل/i, /تردد.*حرج/i],
        title: "الظاهرة الكهروضوئية وتفسير أينشتاين",
        subjectName: "الفيزياء الحديثة",
        content: `**الظاهرة الكهروضوئية** هي انبعاث الإلكترونات من أسطح المعادن عند سقوط ضوء ذو تردد مناسب عليها.

### تفسير أينشتاين الحائز على جائزة نوبل:
1. الضوء يتكون من فوتونات، كل فوتون يحمل طاقة $E = h \\nu$.
2. يتفاعل الفوتون الواحد مع إلكترون واحد فقط في المعدن.
3. لكل معدن حد أدنى من الطاقة يكفي لتحرير الإلكترون دون إكسابه طاقة حركة، ويسمى **دالة الشغل للمعدن ($E_w$)**، وترددها المناسب يسمى **التردد الحرج ($\\nu_c$)**:
   $$E_w = h \\nu_c$$

### الاحتمالات الثلاثة للتفاعل:
* **إذا كان تردد الفوتون أقل من التردد الحرج ($\\nu < \\nu_c$):** لا تنبعث إلكترونات مهما كانت شدة الضوء أو زمن سقوطها.
* **إذا كان التردد مساوياً للتردد الحرج ($\\nu = \\nu_c$):** يتحرر الإلكترون بالكاد دون كسب طاقة حركة.
* **إذا كان التردد أكبر من التردد الحرج ($\\nu > \\nu_c$):** يتحرر الإلكترون ويكتسب طاقة حركة ($K.E$) تحسب بالمعادلة:
   $$K.E_{max} = E - E_w = h\\nu - h\\nu_c = \\frac{1}{2} m v^2$$`
    },
    {
        keywords: [/ليزر|الفعل.*العليزري|الانبعاث.*المستحث|هيليوم.*نيون/i],
        title: "شروط الفعل الليزري وخصائص أشعة الليزر",
        subjectName: "الفيزياء الحديثة",
        content: `كلمة **ليزر (LASER)** هي اختصار لتضخيم الضوء بواسطة الانبعاث المستحث للإشعاع.

### خصائص أشعة الليزر:
1. **النقاء الطيفي:** فوتوناتها لها طول موجي واحد تقريباً.
2. **توازي الحزمة الضوئية:** لا تنفرج أشعة الليزر بمسيرتها وتظل متوازية لمسافات طويلة.
3. **الترابط:** فوتوناتها تنطلق بفرق طور ثابت زمانياً ومكانياً.
4. **الشدة:** لا تخضع لقانون التربيع العكسي في الضوء، فتحتفظ بشدتها لمسافات طويلة جداً.

### شروط الفعل الليزري:
* **الإسكان المعكوس (Population Inversion):** أن يكون عدد الذرات في مستويات الإثارة العليا أكبر من عددها في المستوى الأرضي.
* **الانبعاث المستحث (Stimulated Emission):** اصطدام فوتون بذرة مثارة قبل انتهاء فترة العمر لها، فيحثها على الهبوط وتوليد فوتون ثانٍ متطابق تماماً مع الفوتون الأول.
* **التجويف الرنيني (Resonant Cavity):** الوعاء المنشط والمسؤول عن عملية التضخيم بالانعكاسات المتتالية (مرايا عاكسة وشبه عاكسة).`
    },

    // Languages (اللغة العربية والإنجليزية)
    {
        keywords: [/لا.*النافية.*جنس|لا.*نافية.*جنس/i, /اسم.*لا/i, /مفرد.*مضاف/i],
        title: "قواعد عمل 'لا النافية للجنس' في اللغة العربية",
        subjectName: "اللغة العربية",
        content: `تعمل **لا النافية للجنس** عمل "إنّ" وأخواتها (تنصب المبتدأ ويسمى اسمها، وترفع الخبر ويسمى خبرها)، ولكن بشروط صارمة وعلمية.

### شروط العمل الثلاثة:
1. **أن يكون اسمها وخبرها نكرتين:** فإذا جاء اسمها معرفة ألغي عملها ووجب تكرارها (مثل: لا الطلابُ غائبون ولا المدرسون).
2. **ألا يفصل بينها وبين اسمها فاصل:** فإذا فصل بينهما فاصل ألغي عملها ووجب تكرارها (مثل: لا بيننا خائنٌ ولا عميل).
3. **ألا تسبق بحرف جر:** فإذا سبقت بحرف جر ألغي عملها وأعرب ما بعدها اسماً مجروراً بالكسرة (مثل: المنافق معاقب بلا شكٍ - كلمة "شك" اسم مجرور بـ الباء).

### أحوال اسم لا النافية للجنس وإعرابه:
* **المفرد (ليس مضافاً ولا شبيهاً بالمضاف):** يُبنى على ما يُنصب به في محل نصب (مثل: لا رجلَ في الدار - "رجلَ": اسم لا مبني على الفتح في محل نصب).
* **المضاف (يأتي بعده مضاف إليه نكرة):** يكون معرباً منصوباً (مثل: لا طالبَ علمٍ خائبٌ - "طالبَ": اسم لا منصوب وعلامة نصبه الفتحة).
* **الشبيه بالمضاف (يأتي بعده ما يتمم معناه وغالباً يكون منوناً):** يكون معرباً منصوباً (مثل: لا طالعاً جبلاً مفقودٌ - "طالعاً": اسم لا منصوب بالفتحة).`
    },
    {
        keywords: [/إيجاز/i, /إطناب/i, /بلاغة/i, /إيجاز.*قصر|إيجاز.*حذف/i],
        title: "علم البلاغة: الإيجاز والإطناب وأسرار جمالهما",
        subjectName: "اللغة العربية",
        content: `يُعد **الإيجاز والإطناب** من الركائز الأساسية لعلم المعاني في البلاغة العربية، والهدف منهما مطابقة الكلام لمقتضى الحال.

### أولاً: الإيجاز (Conciseness)
هو التعبير عن الأفكار الواسعة والمعاني الغزيرة بألفاظ قليلة مع وفاء الغرض. وهو نوعان:
1. **إيجاز قصر:** عبارات قصيرة تحمل معاني ضخمة دون حذف أي كلمة (مثل قوله تعالى: "ولكم في القصاص حياة").
2. **إيجاز حذف:** حذف كلمة أو جملة من الكلام مع وجود قرينة تدل على المحذوف لإثارة الذهن، ومن صوره:
   * **حذف الفاعل:** عند بناء الفعل للمجهول (مثل: "خُلق الإنسان عجولا" - للعلم بالفاعل وهو الله).
   * **حذف المبتدأ:** للاهتمام بالخبر والتركيز عليه (مثل قول مطران: "متفردٌ بصبابتي..").

### ثانياً: الإطناب (Redundancy for Eloquence)
هو زيادة اللفظ على المعنى لفائدة وتوضيح، ومن صوره البديعة:
* **ذكر الخاص بعد العام:** للتنبيه على فضل الخاص (مثل: "حافظوا على الصلوات والصلاة الوسطى").
* **ذكر العام بعد الخاص:** لإفادة التعميم مع العناية بالخاص (مثل: "رب اغفر لي ولوالدي ولمن دخل بيتي مؤمناً وللمؤمنين والمؤمنات").
* **الاعتراض:** جملة اعتراضية للدعاء أو التنبيه (مثل: قال أستاذي - رحمه الله - العلم نور).
* **التعليل:** كأن تأتي جملة لتبين سبب ما قبلها.`
    },
    {
        keywords: [/present.*perfect|past.*simple|difference.*perfect.*simple/i, /have.*v3/i],
        title: "English Grammar: Present Perfect vs. Past Simple",
        subjectName: "اللغة الإنجليزية",
        content: `A critical distinction in English language exams is understanding when to use the **Present Perfect** and when to use the **Past Simple**.

### Comparative Breakdown:

| Aspect | Present Perfect (haves/has + V3) | Past Simple (V2) |
| :--- | :--- | :--- |
| **Concept** | Connects past actions to the **present**. | Completed action at a **specific past time**. |
| **Time Reference** | Unspecified or indefinite time. | Specific, finished time in the past. |
| **Keywords** | *already, yet, since, for, just, ever, never, so far.* | *yesterday, ago, last week, in 2020, once.* |
| **Example** | "I **have lost** my keys." (Result: I don't have them now). | "I **lost** my keys yesterday." (Fact: happened in the past). |
| **Life Experience** | Speaking of experience up to now ("She has traveled to Rome"). | Action at a finished period ("She traveled to Rome in 2018"). |`
    }
];

// Global App State
let chats = [];
let currentChatId = null;
let currentAttachment = null; // { name, size, type, text, isImage, dataURL }
let customFeeds = []; // Stored custom-loaded documents in LocalStorage

// DOM Elements - Selected safely to avoid null reference crashes
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const chatViewport = document.getElementById('chatViewport');
const welcomeView = document.getElementById('welcomeView');
const messagesContainer = document.getElementById('messagesContainer');
const studentInput = document.getElementById('studentInput');
const sendBtn = document.getElementById('sendBtn');
const textFilePicker = document.getElementById('textFilePicker');
const imageFilePicker = document.getElementById('imageFilePicker');
const attachmentStatusBar = document.getElementById('attachmentStatusBar');
const attachmentName = document.getElementById('attachmentName');
const attachmentSize = document.getElementById('attachmentSize');
const removeAttachmentBtn = document.getElementById('removeAttachmentBtn');
const chatSearch = document.getElementById('chatSearch');
const chatHistoryList = document.getElementById('chatHistoryList');
const newChatBtn = document.getElementById('newChatBtn');

// Modals
const loginModal = document.getElementById('loginModal');
const academicLoginBtn = document.getElementById('academicLoginBtn');
const loginBtnText = document.getElementById('loginBtnText');
const closeLoginModal = document.getElementById('closeLoginModal');
const saveLoginBtn = document.getElementById('saveLoginBtn');
const studentNameInput = document.getElementById('studentName');
const studentSchoolInput = document.getElementById('studentSchool');
const studentGovInput = document.getElementById('studentGov');

const feedsModal = document.getElementById('feedsModal');
const curriculumFeedsBtn = document.getElementById('curriculumFeedsBtn');
const closeFeedsModal = document.getElementById('closeFeedsModal');
const feedsList = document.getElementById('feedsList');
const clearAllFeedsBtn = document.getElementById('clearAllFeedsBtn');

const upgradeModal = document.getElementById('upgradeModal');
const upgradeBtn = document.getElementById('upgradeBtn');
const closeUpgradeModal = document.getElementById('closeUpgradeModal');
const upgradeConfirmBtn = document.getElementById('upgradeConfirmBtn');

// Professor Fahman Openers
const PROFESSOR_GREETINGS = [
    "أهلاً بك يا بني في مِحراب العلم والصرح الأكاديمي الشامخ. الأستاذ فهمان مستعد لبسط المعرفة، كيف يسير التحصيل اليوم؟",
    "وعليكم السلام ورحمة الله وبركاته يا بني البار وطالب العلم المجتهد. سل الأستاذ فهمان ما بدا لك في المنهج.",
    "سؤالٌ مبارك يدل على عقل يبتغي الرصانة والفهم. دعني أبسط لك هذه المسألة بلسان فهمان يا ولدي.",
    "مرحباً بك في صومعتي العلمية. أنا الأستاذ فهمان، ومجلدي مفتوح وذهني متقد، فما هي المعضلة التي تشغل فكرك؟",
    "يا بني، الطب والهندسة والعلوم ينتظرون عزمكم الصادق. اسأل الأستاذ فهمان ما يروق لك، وسنجلي لك ظلمة الحيرة بنور المعرفة."
];

// Initialize the Application with Safeties
document.addEventListener('DOMContentLoaded', () => {
    try {
        loadChatsFromStorage();
        loadCustomFeedsFromStorage();
        loadStudentProfile();
        setupEventListeners();
        renderChatHistory();
        initWelcomeScreen();
        console.log("Fahman Academic AI Engine fully initialized.");
    } catch (e) {
        console.error("Initialization failed:", e);
    }
});

// Event Listeners setup with safety checks
function setupEventListeners() {
    // Sidebar toggle
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }
    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Auto-resize textarea
    if (studentInput) {
        studentInput.addEventListener('input', () => {
            studentInput.style.height = 'auto';
            studentInput.style.height = `${studentInput.scrollHeight}px`;
        });
        
        // Enter key to send message
        studentInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });
    }

    // Send Button click
    if (sendBtn) {
        sendBtn.addEventListener('click', handleSendMessage);
    }

    // Custom Suggestions Cards Click
    document.querySelectorAll('.suggestion-card').forEach(card => {
        card.addEventListener('click', () => {
            const query = card.getAttribute('data-query');
            if (studentInput && query) {
                studentInput.value = query;
                studentInput.dispatchEvent(new Event('input'));
                handleSendMessage();
            }
        });
    });

    // New Chat Trigger
    if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
            startNewChat();
            if (sidebar && window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
    }

    // File Attachment handlers
    if (textFilePicker) {
        textFilePicker.addEventListener('change', handleTextFileSelection);
    }
    if (imageFilePicker) {
        imageFilePicker.addEventListener('change', handleImageFileSelection);
    }
    if (removeAttachmentBtn) {
        removeAttachmentBtn.addEventListener('click', clearAttachment);
    }

    // Chat Search filter
    if (chatSearch) {
        chatSearch.addEventListener('input', (e) => {
            renderChatHistory(e.target.value);
        });
    }

    // Modal Control: Academic Login
    if (academicLoginBtn && loginModal) {
        academicLoginBtn.addEventListener('click', () => loginModal.classList.add('open'));
    }
    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', () => loginModal.classList.remove('open'));
    }
    if (saveLoginBtn) {
        saveLoginBtn.addEventListener('click', saveStudentProfile);
    }

    // Modal Control: Custom Knowledge Feeds Manager
    if (curriculumFeedsBtn && feedsModal) {
        curriculumFeedsBtn.addEventListener('click', () => {
            renderFeedsModalList();
            feedsModal.classList.add('open');
        });
    }
    if (closeFeedsModal && feedsModal) {
        closeFeedsModal.addEventListener('click', () => feedsModal.classList.remove('open'));
    }
    if (clearAllFeedsBtn) {
        clearAllFeedsBtn.addEventListener('click', clearAllCustomFeeds);
    }

    // Modal Control: Upgrade Premium
    if (upgradeBtn && upgradeModal) {
        upgradeBtn.addEventListener('click', () => upgradeModal.classList.add('open'));
    }
    if (closeUpgradeModal && upgradeModal) {
        closeUpgradeModal.addEventListener('click', () => upgradeModal.classList.remove('open'));
    }
    if (upgradeConfirmBtn && upgradeModal) {
        upgradeConfirmBtn.addEventListener('click', () => {
            alert("مبارك يا ولدي! تم قبولك في المنحة الذهبية للأستاذ فهمان مجاناً تقديراً لهمتك العالية!");
            upgradeModal.classList.remove('open');
            if (upgradeBtn) {
                upgradeBtn.innerHTML = '👑 <span>المنحة الذهبية نشطة</span>';
                upgradeBtn.style.pointerEvents = 'none';
            }
        });
    }
}

// Local Storage Ingestion with Safeties
function loadChatsFromStorage() {
    const savedChats = safeStorage.getItem('academic_chats');
    chats = savedChats ? JSON.parse(savedChats) : [];
}

function saveChatsToStorage() {
    safeStorage.setItem('academic_chats', JSON.stringify(chats));
}

function loadCustomFeedsFromStorage() {
    const savedFeeds = safeStorage.getItem('academic_custom_knowledge');
    customFeeds = savedFeeds ? JSON.parse(savedFeeds) : [];
    updateFeedsBtnCounter();
}

function saveCustomFeedsToStorage() {
    safeStorage.setItem('academic_custom_knowledge', JSON.stringify(customFeeds));
    updateFeedsBtnCounter();
}

function updateFeedsBtnCounter() {
    if (curriculumFeedsBtn) {
        const count = customFeeds.length;
        curriculumFeedsBtn.innerHTML = `🧠 <span>تغذيته المعرفية (${count} ملفات)</span>`;
    }
}

// Student profile management
function loadStudentProfile() {
    const profile = safeStorage.getItem('academic_student_profile');
    if (profile && loginBtnText && academicLoginBtn) {
        const student = JSON.parse(profile);
        loginBtnText.textContent = student.name.split(' ')[0] || "الطالب المجد";
        academicLoginBtn.style.color = "var(--gold-primary)";
    }
}

function saveStudentProfile() {
    if (!studentNameInput || !studentSchoolInput || !studentGovInput) return;
    
    const name = studentNameInput.value.trim();
    const school = studentSchoolInput.value.trim();
    const gov = studentGovInput.value.trim();

    if (!name) {
        alert("يرجى كتابة اسمك يا بني ليتسنى لي مناداتك به.");
        return;
    }

    const student = { name, school, gov };
    safeStorage.setItem('academic_student_profile', JSON.stringify(student));
    loadStudentProfile();
    if (loginModal) loginModal.classList.remove('open');

    appendSystemMessage(`تشرف مجلس الأستاذ فهمان بدخول الطالب النجيب: ${name} من مدرسة (${school || 'عامة'}) محافظة (${gov || 'مصر'}).`);
}

// Text / Document Attachment Handler (Pure Browser FileReader without PDF.js)
async function handleTextFileSelection(e) {
    const file = e.target.files[0];
    if (!file) return;

    showAttachmentLoading(true, file.name);

    try {
        const extractedText = await readAsTextFile(file);

        if (!extractedText.trim()) {
            throw new Error("المستند فارغ أو تعذر استخلاص نصوصه.");
        }

        currentAttachment = {
            name: file.name,
            size: formatBytes(file.size),
            type: file.type || 'text/plain',
            text: extractedText,
            isImage: false
        };

        // Ingest file content to update Fahman's custom knowledge base in real-time
        ingestCustomKnowledge(currentAttachment.name, currentAttachment.size, currentAttachment.text);
        
        showAttachmentStatusBar(currentAttachment.name, currentAttachment.size);
        showAttachmentLoading(false);

    } catch (err) {
        alert(`عذراً يا ولدي: ${err.message}`);
        showAttachmentLoading(false);
        clearAttachment();
    }
}

// Image Selection Handler
function handleImageFileSelection(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        currentAttachment = {
            name: file.name,
            size: formatBytes(file.size),
            type: file.type,
            isImage: true,
            dataURL: event.target.result
        };
        showAttachmentStatusBar(currentAttachment.name, currentAttachment.size);
    };
    reader.readAsDataURL(file);
}

function clearAttachment() {
    currentAttachment = null;
    if (textFilePicker) textFilePicker.value = '';
    if (imageFilePicker) imageFilePicker.value = '';
    if (attachmentStatusBar) attachmentStatusBar.style.display = 'none';
}

// Show selected attachment status
function showAttachmentStatusBar(name, size) {
    if (attachmentStatusBar && attachmentName && attachmentSize) {
        attachmentName.textContent = name;
        attachmentSize.textContent = `(${size})`;
        attachmentStatusBar.style.display = 'flex';
    }
}

function showAttachmentLoading(show, filename = '') {
    if (!attachmentStatusBar || !attachmentName || !attachmentSize) return;
    if (show) {
        attachmentName.textContent = `جاري قراءة وتحليل: ${filename}...`;
        attachmentSize.textContent = '';
        attachmentStatusBar.style.display = 'flex';
    }
}

// Promisified Text Reader
function readAsTextFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("حدث خطأ أثناء قراءة الملف النصي."));
        reader.readAsText(file, "UTF-8");
    });
}

// Real-time custom knowledge base update
function ingestCustomKnowledge(name, size, text) {
    const newFeed = {
        id: 'feed_' + Date.now(),
        name: name,
        size: size,
        text: text,
        timestamp: new Date().toLocaleDateString('ar-EG')
    };
    customFeeds.push(newFeed);
    saveCustomFeedsToStorage();

    if (!currentChatId) {
        startNewChat("جلسة المذكرة المضافة: " + name);
    }

    setTimeout(() => {
        appendProfessorIngestConfirmation(name);
    }, 1000);
}

// Render Custom feeds list with Emojis
function renderFeedsModalList() {
    if (!feedsList) return;
    feedsList.innerHTML = '';
    
    if (customFeeds.length === 0) {
        feedsList.innerHTML = '<li class="no-feeds-msg">لا يوجد مستندات مضافة في قاعدة معرفتك الحالية يا بني. ارفع ملفات (TXT) وسيقوم الأستاذ فهمان بدراستها.</li>';
        return;
    }

    customFeeds.forEach(feed => {
        const li = document.createElement('li');
        li.className = 'feed-item';
        li.innerHTML = `
            <div class="feed-info">
                <span style="font-size: 1.2rem; margin-left: 8px;">📄</span>
                <div>
                    <div class="feed-name" title="${feed.name}">${feed.name}</div>
                    <div class="feed-size">${feed.size} • أُضيف في ${feed.timestamp}</div>
                </div>
            </div>
            <button class="delete-feed-btn" data-id="${feed.id}" title="حذف هذه المعرفة">
                🗑️
            </button>
        `;
        feedsList.appendChild(li);

        li.querySelector('.delete-feed-btn').addEventListener('click', (e) => {
            const feedId = e.currentTarget.getAttribute('data-id');
            deleteCustomFeed(feedId);
        });
    });
}

function deleteCustomFeed(id) {
    customFeeds = customFeeds.filter(f => f.id !== id);
    saveCustomFeedsToStorage();
    renderFeedsModalList();
}

function clearAllCustomFeeds() {
    if (confirm("هل أنت متأكد من رغبتك في مسح جميع المستندات المضافة وتفريغ الذاكرة المحلية للأستاذ فهمان؟")) {
        customFeeds = [];
        saveCustomFeedsToStorage();
        renderFeedsModalList();
    }
}

// Chat Session Handling
function startNewChat(title = '') {
    currentChatId = 'chat_' + Date.now();
    const chatTitle = title || 'حلقة دراسية جديدة ' + new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'});
    
    const newChat = {
        id: currentChatId,
        title: chatTitle,
        messages: []
    };
    
    chats.unshift(newChat);
    saveChatsToStorage();
    renderChatHistory();
    initWelcomeScreen();
    clearAttachment();
}

// Load Chat Session
function loadChatSession(id) {
    currentChatId = id;
    const chat = chats.find(c => c.id === id);
    if (!chat) return;

    if (welcomeView) welcomeView.style.display = 'none';
    if (messagesContainer) messagesContainer.innerHTML = '';
    
    chat.messages.forEach(msg => {
        appendMessageUI(msg.sender, msg.text, msg.attachment);
    });

    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;
    renderChatHistory();
}

// Delete Chat Session
function deleteChatSession(id, event) {
    if (event) event.stopPropagation();
    if (!confirm("هل تود حذف هذه الحلقة الدراسية من الأرشيف؟")) return;

    chats = chats.filter(c => c.id !== id);
    saveChatsToStorage();
    
    if (currentChatId === id) {
        currentChatId = null;
        initWelcomeScreen();
    }
    
    renderChatHistory();
}

// Render Chat History list with Emojis
function renderChatHistory(searchTerm = '') {
    if (!chatHistoryList) return;
    chatHistoryList.innerHTML = '';
    const filtered = chats.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filtered.length === 0) {
        chatHistoryList.innerHTML = '<li class="no-feeds-msg">لا يوجد حلقات متوافقة.</li>';
        return;
    }

    filtered.forEach(chat => {
        const li = document.createElement('li');
        li.className = `chat-history-item ${chat.id === currentChatId ? 'active' : ''}`;
        li.innerHTML = `
            <div class="history-item-content">
                <span style="margin-left: 8px;">🔖</span>
                <span class="history-title" title="${chat.title}">${chat.title}</span>
            </div>
            <button class="delete-history-btn" data-id="${chat.id}" title="حذف الدردشة">
                🗑️
            </button>
        `;
        
        li.addEventListener('click', () => loadChatSession(chat.id));
        li.querySelector('.delete-history-btn').addEventListener('click', (e) => deleteChatSession(chat.id, e));
        
        chatHistoryList.appendChild(li);
    });
}

function initWelcomeScreen() {
    if (welcomeView) welcomeView.style.display = 'flex';
    if (messagesContainer) messagesContainer.innerHTML = '';
    
    const portraitEl = document.getElementById('welcomeProfPortrait');
    if (portraitEl) {
        portraitEl.src = 'assets/professor.png';
    }
}

// Processing User Interactions
function handleSendMessage() {
    if (!studentInput) return;
    const text = studentInput.value.trim();
    
    if (!text && !currentAttachment) {
        studentInput.classList.add('shake-input');
        setTimeout(() => studentInput.classList.remove('shake-input'), 400);
        return;
    }

    if (!currentChatId) {
        const firstWords = text ? text.split(' ').slice(0, 4).join(' ') + '...' : 'مرفق علمي كلاسيكي';
        startNewChat(firstWords);
    }

    if (welcomeView) welcomeView.style.display = 'none';

    // Save Student message
    const studentMsg = {
        sender: 'student',
        text: text,
        attachment: currentAttachment ? { ...currentAttachment } : null
    };

    const chatIndex = chats.findIndex(c => c.id === currentChatId);
    if (chatIndex !== -1) {
        chats[chatIndex].messages.push(studentMsg);
        if (chats[chatIndex].title.startsWith('حلقة دراسية جديدة') && text) {
            chats[chatIndex].title = text.split(' ').slice(0, 4).join(' ') + '...';
        }
        saveChatsToStorage();
    }

    // Render Student bubble
    appendMessageUI('student', text, currentAttachment);
    
    // Clear Input Box
    studentInput.value = '';
    studentInput.style.height = 'auto';
    
    const activeAttachment = currentAttachment; // capture attachment
    clearAttachment();

    // Trigger Professor typing
    const typingIndicator = appendTypingIndicator();
    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        generateProfessorResponse(text, activeAttachment);
    }, 1500 + Math.random() * 1000);
}

// Append real-time data ingestion notification
function appendProfessorIngestConfirmation(filename) {
    const confirmationText = `أحسنتم صنعاً يا ولدي! لقد تلقيتُ مستندك المضاف **« ${filename} »** وتصفه بعيني الأستاذ فهمان. لقد أضفتُ هذه التغذية المعرفية لوعيي وللذاكرة الموضعية للمنصة. وسأستشعر نصوصه فوراً عند طرحك لأسئلة تتقاطع مع محتواه الدراسي. سدد الله خطاك وسهّل طريقك نحو كليات القمة!`;
    
    const professorMsg = {
        sender: 'professor',
        text: confirmationText,
        attachment: null
    };

    const chatIndex = chats.findIndex(c => c.id === currentChatId);
    if (chatIndex !== -1) {
        chats[chatIndex].messages.push(professorMsg);
        saveChatsToStorage();
    }

    appendMessageUI('professor', confirmationText);
    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;
}

// Generate Response by scanning knowledge base & custom documents
function generateProfessorResponse(query, attachment) {
    let responseText = "";
    
    // 1. Process Visual Analysis Simulation if Image is attached
    if (attachment && attachment.isImage) {
        responseText = simulateImageAnalysis(attachment, query);
    } 
    // 2. Search Student Uploaded Documents (LocalStorage Feeds)
    else if (customFeeds.length > 0 && query && (responseText = searchCustomFeedsText(query)) !== "") {
        // responseText built dynamically in matching method
    } 
    // 3. Match Built-in Curriculum Knowledge Base
    else {
        responseText = searchCurriculumKnowledgeBase(query);
    }

    // Save professor message to storage
    const profMsg = {
        sender: 'professor',
        text: responseText,
        attachment: null
    };

    const chatIndex = chats.findIndex(c => c.id === currentChatId);
    if (chatIndex !== -1) {
        chats[chatIndex].messages.push(profMsg);
        saveChatsToStorage();
    }

    // Show response in UI
    appendMessageUI('professor', responseText);
    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;
}

// Simulate Image Analysis based on keywords in query text
function simulateImageAnalysis(imageAttachment, textQuery) {
    const query = textQuery.toLowerCase();
    const greeting = PROFESSOR_GREETINGS[Math.floor(Math.random() * PROFESSOR_GREETINGS.length)];
    let analysisContent = "";

    if (/عضل|أحياء|جدار|خلية|نبات|منزلق|أكتين|ميوسين|مناعة|بائية|تائية|دعامة/i.test(query)) {
        // Biology
        analysisContent = `لقد نظرتُ عبر نظارتي الطبية الطاعنة في السن إلى الرسم التوضيحي المرفق يا ولدي. يبدو أن الصورة تمثل قطاعاً مجهرياً أو رسماً تخطيطياً في علم الأحياء (مثل تركيب الساركومير أو القطعة العضلية، أو بنية شريط الـ DNA).
        
* **المشاهدة المجهرية للأستاذ فهمان:**
  أرى خطين داكنين يمثلان خطي Z، وتتوسطهما منطقة داكنة A تحتوي خيوط الميوسين والأكتين معاً. كما تظهر الروابط المستعرضة بوضوح متجهة نحو خيوط الأكتين.
* **التحليل الأكاديمي:**
  تذكر جيداً يا ولدي أن انقباض هذا التركيب يعتمد كلياً على وجود **أيونات الكالسيوم ($Ca^{2+}$)** و**طاقة الـ ATP** لكي تنزلق الخيوط وتتقارب خطوط Z مما يؤدي لقصر طول الليفة العضلية.
* **نصيحتي في الامتحان:**
  في أسئلة القطاعات والرسومات، تأكد دائماً من معرفة البيانات المشير إليها بالأرقام، فغالباً ما يطلب تحديد دور الكالسيوم أو الطاقة في كل جزء.`;
    } else if (/فالق|صخر|جيولوجيا|طية|تراكيب|قشرة|زلزال|بركان/i.test(query)) {
        // Geology
        analysisContent = `أهلاً بك يا بني. لقد عاينتُ هذا الرسم التكتوني بتمعن. هذا يوضح قطاعاً رأسياً في طبقات القشرة الأرضية يوضح تراكيب جيولوجية ثانوية (تكتونية).
 
* **شرح الأستاذ فهمان للرسم:**
  الكسر الواضح في المنتصف يمثل **مستوى الفالق**. نلاحظ أن كتل الصخور الواقعة أعلى مستوى الفالق (الحائط العلوي) قد تحركت باتجاه الأسفل مقارنة بصخور الحائط السفلي.
* **التشخيص الجيولوجي:**
  بما أن الصخور تحركت لأسفل، فهذا كسر ناتج عن قوى **شد** تكتونية، وبالتالي فهو **فالق عادي (Normal Fault)**. تظهر كذلك طية محدبة في الطبقات السفلى مما يشير لتعرض المنطقة لضغوط تكتونية في عصور سابقة قبل حدوث الشد.
* **ملاحظة الأستاذ فهمان:**
  انتبه دائماً للميل في القطاعات! لا تجعل زاوية ميل الفالق تخدعك، ابحث عن الحائط العلوي أولاً ثم قارن حركته.`;
    } else if (/معادلة|إيثين|تحضير|جلفانية|أنود|كاثود|صدأ|تآكل|فاراداي|كيمياء/i.test(query)) {
        // Chemistry
        analysisContent = `تأمل معي هذا المخطط الكيميائي الذي أرسلته يا ولدي. يمثل المخطط خلية كهروكيميائية أو جهاز تفاعل متكامل الأركان.

* **بيانات الرسم والتوصيل:**
  نلاحظ وجود قطبين معدنيين مغمورين في محلولين إلكتروليتيين وبينهما أنبوبة منحنية تمثل **القنطرة الملحية**.
* **التحليل الكيميائي الأكاديمي:**
  هذه **خلية جلفانية (خلية دانيال)**. القطب الذي تتجه منه الإلكترونات عبر السلك الخارجي هو **الأنود (القطب السالب)** ويحدث عنده تفاعل أكسدة للفلز الأكثر نشاطاً. بينما القطب الآخر هو **الكاثود (القطب الموجب)** وتختزل عنده الكاتيونات.
* **نصيحة الأستاذ فهمان:**
  إذا سألك واضع الامتحان عن حركة الأيونات في القنطرة الملحية، فتذكر القاعدة الذهبية: **الأنيونات (الجسيمات السالبة) تتجه نحو نصف خلية الأنود** لتعديل الشحنات الموجبة الزائدة، بينما **الكاتيونات تتجه نحو الكاثود**.`;
    } else if (/تيار|أوم|كيرشوف|جهد|ليزر|كهرباء|حديثة|فيزياء/i.test(query)) {
        // Physics
        analysisContent = `أهلاً بك يا بني. تفحصتُ الدائرة الكهربائية أو المخطط الفيزيائي الموضح في الرسم بدقة.

* **قراءة مكونات الدائرة:**
  تحتوي الدائرة على مصدر لفرق الجهد (بطارية لها $V_B$ ومقاومة داخلية $r$)، ومجموعة من المقاومات المتصلة على التوازي والتوالي، بالإضافة إلى فولتميتر موضوع بين طرفي البطارية.
* **الاستنتاج الفيزيائي:**
  لقياس قراءة الفولتميتر والمفتاح مغلق، نطبق قانون أوم للدائرة المغلقة: $V = V_B - I r$. عند فتح المفتاح، ينعدم التيار ($I=0$) وتصبح قراءة الفولتميتر مساوية تماماً للقوة الدافعة الكهربية للبطارية ($V = V_B$).
* **توجيهات الامتحان:**
  احذر دائماً من المقاومة الداخلية $r$! ينسى الطلاب إدراجها في المقام عند حساب التيار الكلي $I = \\frac{V_B}{R_{eq} + r}$، وهذا خطأ فادح يضيع الدرجات.`;
    } else if (/نحو|بلاغة|أدب|إعراب|لغة|عربي|إنجليزي|english|grammar/i.test(query)) {
        // Languages
        analysisContent = `يا ولدي البار، تأملتُ المخطط اللغوي أو النص المصور في الصورة التي أرسلتها.

* **ملاحظات الأستاذ فهمان الأدبية:**
  يبدو المرفق نصاً شعرياً أو قطعة نحوية متكاملة تتطلب تفكيكاً إعرابياً وبلاغياً.
* **التحليل البلاغي والنحوي:**
  إن كان المرفق بيتاً شعرياً، فانظر في الصورة البيانية؛ إن كان اللفظ مجازياً لعلاقة المشابهة فهو استعارة، وإن كان لعلاقة غير المشابهة فهو مجاز مرسل. وإن كان إعراباً، فانتبه للروابط والحروف الناسخة وعملها.
* **وصية الأستاذ فهمان في البلاغة:**
  عليك أن تتذوق الكلام يا بني قبل إعرابه، فالنحو والبلاغة فرعان عن فهم المعنى الأدبي السليم.`;
    } else {
        analysisContent = `لقد تفحصتُ الصورة المرفقة بنظارتي العتيقة في مجلسنا الأكاديمي.
        
يبدو أنك أرفقت رسماً بيانياً أو مسألة علمية مصورة. لكي أقدم لك تحليلاً مجهرياً دقيقاً، يرجى كتابة الكلمات الدالة في سؤالك (مثل: "أحياء"، "جيولوجيا"، "كيمياء"، "فيزياء"، "نحو") ليتسنى لي مطابقة الصورة بالمنهج الدراسي الصحيح وتقديم الشرح الكافي لك يا بني.`;
    }

    return `${greeting}

---

### **[تقرير التحليل البصري للأستاذ فهمان]**

${analysisContent}`;
}

// Search student's local uploaded knowledge documents
function searchCustomFeedsText(query) {
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    if (queryWords.length === 0) return "";

    for (let feed of customFeeds) {
        const text = feed.text;
        const lowerText = text.toLowerCase();
        
        let matches = 0;
        let firstMatchIndex = -1;
        
        queryWords.forEach(word => {
            const idx = lowerText.indexOf(word);
            if (idx !== -1) {
                matches++;
                if (firstMatchIndex === -1) firstMatchIndex = idx;
            }
        });

        // Match threshold
        if (matches >= Math.min(2, queryWords.length)) {
            let start = Math.max(0, firstMatchIndex - 100);
            let end = Math.min(text.length, firstMatchIndex + 300);
            let excerpt = text.substring(start, end).replace(/\n/g, ' ').trim();
            
            if (start > 0) excerpt = '...' + excerpt;
            if (end < text.length) excerpt = excerpt + '...';

            const greeting = PROFESSOR_GREETINGS[Math.floor(Math.random() * PROFESSOR_GREETINGS.length)];
            return `${greeting}

> [!NOTE]
> **استخلاص معرفي من مستندك المرفوع [ ${feed.name} ]:**
>
> "${excerpt}"

---

### **[تفسير الأستاذ فهمان بناءً على مستندك المضاف]**

يا بني، بناءً على المادة والمستند التعليمي الذي قمتَ بحقنه في صرحنا سابقاً، أود أن أؤكد لك النقاط التالية بأسلوب علمي رصين:

1. يوضح مستندك سياقاً دراسياً دقيقاً يرتبط بسؤالك. ونستنبط منه أن المفهوم يركز على المحتوى المقتبس أعلاه.
2. تذكر دائماً أن فهمك المسبق لهذا المستند يسهل عليك ربط أجزاء المنهج ببعضها.
3. أوصيك يا ولدي بمراجعة الفصول المتطابقة مع هذا النص في كتاب الوزارة والمراجع لضمان التوافق التام مع صياغة أسئلة الامتحان النهائية.`;
        }
    }
    return "";
}

// Search built-in curriculum database
function searchCurriculumKnowledgeBase(query) {
    const greeting = PROFESSOR_GREETINGS[Math.floor(Math.random() * PROFESSOR_GREETINGS.length)];
    
    // Scan all unified articles directly
    for (let article of UNIFIED_CURRICULUM_KB) {
        for (let rx of article.keywords) {
            if (rx.test(query)) {
                return `${greeting}

---

### **[الشرح الأكاديمي: ${article.title} - مادة ${article.subjectName}]**

${article.content}

---

*أتمنى أن يكون هذا الشرح وافياً ومزيلاً للبس يا ولدي. أنا الأستاذ فهمان ومستعد لمزيد من التوضيح إن رغبت.*`;
            }
        }
    }

    // Pedagogical response when no direct match is found
    return `${greeting}

يا ولدي البار، بحثتُ في مجلداتي وفيما أرفقته لي من مستندات، ولم أجد ما يطابق كلمات سؤالك بدقة حرفية. 

بصفتي الأستاذ فهمان الخبير بالمنهج المصري، دعني أنصحك بالتالي:

1. **العودة للجذور:** تأكد من مراجعة الباب الدراسي المرتبط بهذا الاستفسار في المرجع الأساسي، فكل فكرة فرعية تدور حول مفاهيم أساسية.
2. **آلية التغذية المزدوجة:** للحصول على إجابة تفصيلية نموذجية ومباشرة من هذا السؤال، **قم برفع ملف نصي (TXT)** يحتوي على شرح هذا الجزء تحديداً عبر أيقونة رفع المستندات بالأسفل. سأقوم بقراءة نصوصه فوراً وحفظها والإجابة عليك بلسان علمي رصين ومطابق للمستند المرفوع.
3. **توضيح السؤال:** يمكنك إعادة كتابة السؤال بصياغة أبسط أو استخدام المصطلحات الدقيقة الواردة في المنهج (مثل: "الدعامة الفسيولوجية"، "قانون كيرشوف"، "تأثير أينشتاين"، "لا النافية للجنس"، إلخ) لأتعرف عليها وأجيبك فوراً.`;
}

// Append Chat Message HTML with Emojis instead of Font-Awesome
function appendMessageUI(sender, text, attachment = null) {
    if (!messagesContainer) return;
    
    const msgWrapper = document.createElement('div');
    msgWrapper.className = `message-wrapper ${sender}`;
    
    let avatarIcon = '🎓';
    if (sender === 'student') {
        avatarIcon = '👨‍🎓';
    }

    let attachmentHtml = '';
    if (attachment) {
        if (attachment.isImage) {
            attachmentHtml = `
                <div class="msg-attachment-box">
                    <span style="font-size: 1.1rem; margin-left: 5px;">📷</span>
                    <span>صورة مرفقة: ${attachment.name} (${attachment.size})</span>
                </div>
                <img src="${attachment.dataURL}" alt="صورة مرفقة" class="msg-image-attachment" onclick="zoomImage(this)">
            `;
        } else {
            attachmentHtml = `
                <div class="msg-attachment-box">
                    <span style="font-size: 1.1rem; margin-left: 5px;">📄</span>
                    <span>مستند دراسي: ${attachment.name} (${attachment.size})</span>
                </div>
            `;
        }
    }

    const senderTitle = sender === 'student' ? 'الطالب المجد' : 'الأستاذ فهمان';
    const formattedText = parseMarkdown(text);

    msgWrapper.innerHTML = `
        <div class="msg-avatar" style="${sender === 'professor' ? "background-image: url('assets/professor.png'); background-size: cover; background-position: center;" : ""}">
            ${sender === 'student' ? avatarIcon : ''}
        </div>
        <div class="msg-bubble">
            <div class="msg-sender-title">${senderTitle}</div>
            <div class="msg-body">
                ${formattedText}
                ${attachmentHtml}
            </div>
        </div>
    `;

    messagesContainer.appendChild(msgWrapper);
    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;
}

function appendSystemMessage(text) {
    if (!messagesContainer) return;
    const sysDiv = document.createElement('div');
    sysDiv.className = 'text-center gold-text';
    sysDiv.style.fontSize = '0.8rem';
    sysDiv.style.margin = '1rem 0';
    sysDiv.style.opacity = '0.8';
    sysDiv.innerHTML = `📜 ${text}`;
    messagesContainer.appendChild(sysDiv);
    if (chatViewport) chatViewport.scrollTop = chatViewport.scrollHeight;
}

function appendTypingIndicator() {
    if (!messagesContainer) return null;
    const indicator = document.createElement('div');
    indicator.className = 'message-wrapper professor';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <div class="msg-avatar" style="background-image: url('assets/professor.png'); background-size: cover; background-position: center;"></div>
        <div class="msg-bubble">
            <div class="msg-sender-title">الأستاذ فهمان يراجع دفاتره...</div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(indicator);
    return indicator;
}

function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

// Zoom Image Handler
window.zoomImage = function(img) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.cursor = 'zoom-out';
    
    const zoomedImg = document.createElement('img');
    zoomedImg.src = img.src;
    zoomedImg.style.maxWidth = '90%';
    zoomedImg.style.maxHeight = '90%';
    zoomedImg.style.borderRadius = '8px';
    zoomedImg.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
    
    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
};

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Simple Markdown Parser (With Emoji-based Alert Icons)
function parseMarkdown(md) {
    if (!md) return "";
    
    let html = md;
    
    // Escape HTML tags
    html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Convert Alerts
    html = html.replace(/&gt; \[!NOTE\]\s*\n&gt; (.*)/g, '<blockquote class="alert-note">📝 $1</blockquote>');
    html = html.replace(/&gt; \[!IMPORTANT\]\s*\n&gt; (.*)/g, '<blockquote class="alert-important">⚠️ $1</blockquote>');

    // Bold/Italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // LaTeX formulas
    html = html.replace(/\$\$(.*?)\$\$/g, '<code class="latex-equation block-latex">$1</code>');
    html = html.replace(/\$(.*?)\$/g, '<code class="latex-equation">$1</code>');

    // Basic tables
    const tableRegex = /\|([^\n]*)\|\r?\n\|[ :\-]*\|\r?\n((?:\|[^\n]*\|\r?\n?)*)/g;
    html = html.replace(tableRegex, (match, headerLine, bodyLines) => {
        const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
        const headerHtml = '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead>';
        
        const rows = bodyLines.trim().split('\n').map(row => {
            const cells = row.split('|').map(c => c.trim()).filter(c => c);
            return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
        });
        const bodyHtml = '<tbody>' + rows.join('') + '</tbody>';

        return '<table class="academic-table">' + headerHtml + bodyHtml + '</table>';
    });

    // Unordered lists
    html = html.replace(/^\*\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Ordered lists
    html = html.replace(/^\d+\.\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ol>$1</ol>');
    html = html.replace(/<\/ol>\s*<ol>/g, '');

    // Paragraph separation
    html = html.replace(/\r?\n\r?\n/g, '</p><p>');
    
    // Headers
    html = html.replace(/^###\s+(.*)$/gm, '<h4>$1</h4>');
    html = html.replace(/^##\s+(.*)$/gm, '<h3>$1</h3>');

    return `<p>${html}</p>`;
}
