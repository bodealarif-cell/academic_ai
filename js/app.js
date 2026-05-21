/*
   =========================================
   مِحراب العلم - محرك الدردشة للأستاذ فهمان
   js/app.js
   =========================================
*/

const uploadedFileContent = {
  name: '',
  text: ''
};

const customFeeds = [];
const chats = [];
let currentChatId = null;
let currentAttachment = null;

const EMOTIONAL_PATTERNS = [
  /\bأنا خايف\b|\bخايف\b|\bخايفة\b|\bقلقان\b|\bقلقة\b|\bمتحير\b|\bمضغوط\b|\bتعبت\b|\bمش قادر\b|\bنسيت\b|\bمحبط\b|\bمكسور\b|\bمتوتر\b/i,
  /\bقلق\b|\bتوتر\b|\bخوف\b|\bمتعب\b|\bملل\b|\bضغط\b/i
];

const EMOTIONAL_RESPONSES = [
  `يا بني الحبيب، واضح أن ثقل المذاكرة يؤثر عليك. الأستاذ فهمان هنا ليهدئ قلبك ويرتب لك الخطوات حتى تشعر أن الطريق أصبح أبسط.`,
  `أشعر بقلقك يا ولدي، وهذا طبيعي جداً. دعني أبدأ معك بالتشجيع قبل أن أغوص معك في التفاصيل العلمية، لكي تشعر بالراحة أولاً.`,
  `لا تخف يا بني، كل طالب مجتهد يمر بلحظة ارتباك. سأوضح لك نقاط المنهج بلغة سهلة حتى تعود ثقتك بنفسك بسرعة.`,
  `أنت في مكان آمن هنا داخل مِحراب العلم. دعني أطمئنك وأشرح لك كيف يمكن أن نتعامل مع السؤال خطوة بخطوة.`
];

const UNIFIED_KNOWLEDGE = [
  {
    title: 'نظرية الخيوط المنزلقة لهكسلي في انقباض العضلات',
    subject: 'الأحياء',
    keywords: ['انقباض العضلة', 'نظرية هكسلي', 'خيوط منزلقة', 'أكتين', 'ميوسين', 'ATP', 'Ca2+', 'كالسيوم'],
    content: `### آلية انقباض العضلة الهيكلية
تُفسر نظرية **الخيوط المنزلقة** أن خيوط الأكتين تنزلق بين خيوط الميوسين عندما تنقبض الليفة العضلية.

1. عند وصول الإشارة العصبية تُفرز مادة الأسيتيل كولين.
2. يرتفع تركيز **$Ca^{2+}$** داخل الليفة.
3. يُمكن للرؤوس البروتينية للميوسين أن تتصل بالأكتين وتشكل **روابط مستعرضة**.
4. تتحلل **ATP** فتمنح الطاقة اللازمة لسحب خيوط الأكتين نحو خط **Z**.

### ملاحظات مهمة
- لا يتغير طول خيوط الميوسين أثناء الانقباض.
- تقل مناطق **I** و**H**، بينما تظل منطقة **A** ثابتة الطول.
- دور الكالسيوم هو تفعيل الاتصال بين الأكتين والميوسين.
`
  },
  {
    title: 'الدعامة الفسيولوجية مقابل الدعامة التركيبية في النبات',
    subject: 'الأحياء',
    keywords: ['الدعامة الفسيولوجية', 'الدعامة التركيبية', 'سيليلوز', 'لجنين', 'كيوتين', 'نَبات', 'دعم النبات'],
    content: `### الدعامة الفسيولوجية
* تعتمد على امتلاء الفجوات العصارية بالماء.
* يؤدي ضغط العصارة إلى تشديد الجدار الخلوي وتهيئة الخلية للدعامة.
* تفقد هذه الدعامة فعاليتها عند الجفاف.

### الدعامة التركيبية
* تعتمد على مواد صلبة مثل **السيليلوز، اللجنين، الكيوتين**.
* توجد في جدران الخلايا الصلبة وفي الأنسجة الميتة.
* تمنح النبات ثباتاً دائماً وقوة ضد الجفاف والرياح.

### الفرق
- الفسيولوجية: دعامة مؤقتة تعتمد على الماء.
- التركيبية: دعامة دائمة تعتمد على بنية الخلية.
`
  },
  {
    title: 'تحضير الإيثين في المختبر من الإيثانول وحمض الكبريتيك',
    subject: 'الكيمياء',
    keywords: ['تحضير الإيثين', 'إيثين', 'C2H4', 'إيثانول', 'H2SO4', '180', 'كبريتات الإيثيل'],
    content: `### التحضير في المختبر
يُحضر غاز **الإيثين ($C_2H_4$)** بنزع الماء من **الكحول الإيثيلي** باستخدام حمض الكبريتيك المركز الساخن.

### المعادلة الإجمالية
$C_2H_5OH + H_2SO_4 \\xrightarrow{180^\\circ C} C_2H_4 + H_2O$

### خطوات التفاعل
1. عند $80^\\circ C$ يتشكل مركب **كبريتات الإيثيل الهيدروجينية**:
   $C_2H_5OH + H_2SO_4 \\xrightarrow{80^\\circ C} C_2H_5OSO_3H + H_2O$
2. عند $180^\\circ C$ يتحلل المركب لينتج الإيثين ويُعاد حمض الكبريتيك:
   $C_2H_5OSO_3H \\xrightarrow{180^\\circ C} C_2H_4 + H_2SO_4$

### ملاحظات مهمة
- يجمع الغاز بإزاحة الماء.
- حمض الكبريتيك يعمل كعامل مُجفف ومُحفز.
`
  },
  {
    title: 'خلية دانيال الجلفانية وتركيبها',
    subject: 'الكيمياء',
    keywords: ['خلية دانيال', 'خلية جلفانية', 'Zn', 'Cu', 'قنطرة ملحية', 'أكسدة', 'اختزال'],
    content: `### تركيب خلية دانيال
* **الأنود**: لوح **الزنك** في محلول كبريتات الزنك.
* **الكاثود**: لوح **النحاس** في محلول كبريتات النحاس.
* **القنطرة الملحية**: تربط نصفَي الخلية وتسمح بمرور الأيونات.

### التفاعلات
* عند الأنود: $Zn_{(s)} \\rightarrow Zn^{2+}_{(aq)} + 2e^-$
* عند الكاثود: $Cu^{2+}_{(aq)} + 2e^- \\rightarrow Cu_{(s)}$

### وظيفة القنطرة الملحية
توازن الشحنات بين نصفَي الخلية وتمنع توقف التيار.
`
  },
  {
    title: 'ميكانيكية صدأ الحديد وتآكل المعادن',
    subject: 'الكيمياء',
    keywords: ['صدأ الحديد', 'تآكل المعادن', 'Fe', 'أكسدة', 'اختزال', 'الماء', 'الأكسجين'],
    content: `### أسباب صدأ الحديد
الصّدأ عملية كهروكيميائية تحتاج إلى **حديد + ماء + أكسجين + إلكتروليت**.

### خطوات التفاعل
1. أكسدة الحديد عند الأنود:
   $2Fe_{(s)} \\rightarrow 2Fe^{2+}_{(aq)} + 4e^-$
2. اختزال الأكسجين عند الكاثود:
   $O_{2(g)} + 2H_2O_{(l)} + 4e^- \\rightarrow 4OH^-_{(aq)}$
3. تكوّن هيدروكسيد الحديد:
   $2Fe^{2+}_{(aq)} + 4OH^-_{(aq)} \\rightarrow 2Fe(OH)_{2(s)}$

### النتيجة
يتأكسد هيدروكسيد الحديد بسرعة إلى **Fe(OH)3** البني المعروف بالصدأ.
`
  },
  {
    title: 'قوانين فاراداي للتحليل الكهربي',
    subject: 'الكيمياء',
    keywords: ['فاراداي', 'قوانين فاراداي', 'التحليل الكهربي', 'كتلة مكافئة', 'Q = I t'],
    content: `### القانون الأول لفاراداي
"كتلة المادة المتكونة أو المستهلكة تتناسب طردياً مع كمية الكهرباء المارة."
$ m \propto Q $ حيث $ Q = I \times t $.

### القانون الثاني لفاراداي
كتل المواد المتكونة بمرور نفس كمية الشحنة تتناسب مع كتلها المكافئة.

### الكتلة المكافئة
$ \text{الكتلة المكافئة} = \frac{\text{الكتلة الذرية}}{\text{التكافؤ}} $.
`
  },
  {
    title: 'قانون أوم للدائرة المغلقة وفرق الجهد',
    subject: 'الالفيزياء',
    keywords: ['قانون أوم', 'دائرة مغلقة', 'VB', 'V = VB - I r', 'مقاومة داخلية', 'I = VB / (R + r)'],
    content: `### قانون أوم للدائرة المغلقة
$ I = \frac{V_B}{R_{eq} + r} $.

### الفرق بين V و VB
$ V = V_B - I r $.

### ملاحظات
* عندما $I = 0$، يصبح $V = V_B$.
* المقاومة الداخلية $r$ تقلل الجهد المتاح في الدائرة الخارجية.
`
  },
  {
    title: 'قوانين كيرشوف للتيار والجهد',
    subject: 'الالفيزياء',
    keywords: ['كيرشوف', 'قانون كيرشوف', 'حفظ الشحنة', 'حفظ الطاقة', 'مسار مغلق'],
    content: `### قانون كيرشوف الأول
مجموع التيارات الداخلة إلى أي نقطة يساوي مجموع التيارات الخارجة منها.

### قانون كيرشوف الثاني
المجموع الجبري للفروق الجهدية في مسار مغلق يساوي صفر.

### لماذا نستخدمها؟
عندما توجد دوائر متعددة الفروع والبطاريات المتعددة، لا يكفي قانون أوم وحده.
`
  },
  {
    title: 'الظاهرة الكهروضوئية ومعادلة أينشتاين',
    subject: 'الالفيزياء',
    keywords: ['الظاهرة الكهروضوئية', 'أينشتاين', 'دالة الشغل', 'hν', 'photoelectric'],
    content: `### تفسير أينشتاين
الضوء يتكون من فوتونات، وكل فوتون يحمل طاقة: $ E = h \nu $.\n
### دالة الشغل والتردد الحرج
$ E_w = h \nu_c $.\n* إذا كان $\nu < \nu_c$ لا ينطلق إلكترون.\n* إذا كان $\nu \geq \nu_c$ ينطلق إلكترون بطاقة الحركة: $ K.E_{max} = h \nu - h \nu_c $.`
  },
  {
    title: 'شروط عمل الليزر والانقلاب السكاني',
    subject: 'الالفيزياء',
    keywords: ['ليزر', 'Laser', 'population inversion', 'انبعاث مستحث', 'التجويف الرنيني'],
    content: `### شروط الفعل الليزري
1. **الإسكان المعكوس**: عدد الذرات المثارة أكبر من عددها في الحالة الأرضية.
2. **الانبعاث المستحث**: فوتون يثير ذرة مثارة فتصدر فوتوناً مطابقاً.
3. **التجويف الرنيني**: مرايا تعكس الفوتونات لتتكرر عملية التضخيم.

### النتيجة
* شعاع متوازي.
* طيف طاقة ضيق.
* تماسك زمني ومكاني.
`
  },
  {
    title: 'الفالق العادي مقابل الفالق المعكوس',
    subject: 'الجيولوجيا',
    keywords: ['فالق عادي', 'فالق معكوس', 'شد', 'ضغط', 'حائط علوي', 'حائط سفلي'],
    content: `### الفالق العادي
* يحدث بسبب قوى **الشد**.
* يتحرك الحائط العلوي **لأسفل** بالنسبة للحائط السفلي.
* يزيد مساحة القشرة الأرضية.

### الفالق المعكوس
* يحدث بسبب قوى **الضغط**.
* يتحرك الحائط العلوي **لأعلى** بالنسبة للحائط السفلي.
* يؤدي إلى انكماش القشرة الأرضية.

### قاعدة التفريق
حدد أولاً الحائط العلوي، ثم راقب اتجاه حركته.
`
  },
  {
    title: 'العائلات الثلاث للصخور',
    subject: 'الجيولوجيا',
    keywords: ['الصخور النارية', 'الصخور الرسوبية', 'الصخور المتحولة', 'دورة الصخور'],
    content: `### الصخور النارية
تنشأ من تبريد الصهارة أو اللافا.
* جوفية: تبريد بطيء داخل القشرة.
* سطحية: تبريد سريع على السطح.

### الصخور الرسوبية
تنشأ من ترسيب فتات الصخور والمعادن.
* فتاتية مثل الحجر الرملي.
* كيميائية مثل الجبس.
* بيوكيميائية مثل الحجر الجيري.

### الصخور المتحولة
تنشأ من صخور نارية أو رسوبية تحت حرارة وضغط.
* متورقة مثل النيس.
* كتلية مثل الرخام.
`
  }
];

const ELEMENTS = {
  sidebar: document.getElementById('sidebar'),
  menuToggle: document.getElementById('menuToggle'),
  closeSidebar: document.getElementById('closeSidebar'),
  chatViewport: document.getElementById('chatViewport'),
  welcomeView: document.getElementById('welcomeView'),
  messagesContainer: document.getElementById('messagesContainer'),
  studentInput: document.getElementById('studentInput'),
  sendBtn: document.getElementById('sendBtn'),
  textFilePicker: document.getElementById('textFilePicker'),
  imageFilePicker: document.getElementById('imageFilePicker'),
  attachmentStatusBar: document.getElementById('attachmentStatusBar'),
  attachmentName: document.getElementById('attachmentName'),
  attachmentSize: document.getElementById('attachmentSize'),
  removeAttachmentBtn: document.getElementById('removeAttachmentBtn'),
  chatSearch: document.getElementById('chatSearch'),
  chatHistoryList: document.getElementById('chatHistoryList'),
  newChatBtn: document.getElementById('newChatBtn'),
  academicLoginBtn: document.getElementById('academicLoginBtn'),
  loginModal: document.getElementById('loginModal'),
  closeLoginModal: document.getElementById('closeLoginModal'),
  saveLoginBtn: document.getElementById('saveLoginBtn'),
  studentNameInput: document.getElementById('studentName'),
  studentSchoolInput: document.getElementById('studentSchool'),
  studentGovInput: document.getElementById('studentGov'),
  loginBtnText: document.getElementById('loginBtnText'),
  curriculumFeedsBtn: document.getElementById('curriculumFeedsBtn'),
  feedsModal: document.getElementById('feedsModal'),
  closeFeedsModal: document.getElementById('closeFeedsModal'),
  feedsList: document.getElementById('feedsList'),
  clearAllFeedsBtn: document.getElementById('clearAllFeedsBtn'),
  upgradeBtn: document.getElementById('upgradeBtn'),
  upgradeModal: document.getElementById('upgradeModal'),
  closeUpgradeModal: document.getElementById('closeUpgradeModal'),
  upgradeConfirmBtn: document.getElementById('upgradeConfirmBtn')
};

const STORAGE_KEYS = {
  chats: 'academic_ai_chats',
  feeds: 'academic_ai_feeds',
  profile: 'academic_ai_profile'
};

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn('LocalStorage unavailable:', error);
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('LocalStorage unavailable:', error);
    return false;
  }
}

function normalizeArabic(text) {
  if (!text) return '';
  let normalized = text.normalize('NFC');
  normalized = normalized.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
  normalized = normalized.replace(/[أإآا]/g, 'ا');
  normalized = normalized.replace(/ى/g, 'ي');
  normalized = normalized.replace(/ة/g, 'ه');
  normalized = normalized.replace(/[ؤئ]/g, 'ء');
  normalized = normalized.replace(/ظ/g, 'ض');
  normalized = normalized.replace(/گ/g, 'ك');
  normalized = normalized.replace(/چ/g, 'ج');
  normalized = normalized.replace(/[^\w\sء-ي]/g, ' ');
  normalized = normalized.replace(/\s+/g, ' ').trim();
  return normalized;
}

function tokenize(text) {
  return normalizeArabic(text).split(' ').filter(Boolean);
}

function levenshteinDistance(a, b) {
  const matrix = [];
  const lenA = a.length;
  const lenB = b.length;
  if (!lenA) return lenB;
  if (!lenB) return lenA;
  for (let i = 0; i <= lenB; i += 1) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lenA; j += 1) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= lenB; i += 1) {
    for (let j = 1; j <= lenA; j += 1) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[lenB][lenA];
}

function getSimilarityScore(str1, str2) {
  const a = normalizeArabic(str1);
  const b = normalizeArabic(str2);
  if (!a || !b) return 0;
  if (a === b || a.includes(b) || b.includes(a)) return 1;
  const tokensA = tokenize(a);
  const tokensB = tokenize(b);
  const common = tokensA.filter(token => tokensB.includes(token)).length;
  const overlap = common * 2 / (tokensA.length + tokensB.length || 1);
  const editDistance = levenshteinDistance(a, b);
  const editScore = 1 - editDistance / Math.max(a.length, b.length, 1);
  return Math.max(overlap, editScore, 0);
}

function detectEmotionalTone(text) {
  const normalized = normalizeArabic(text);
  for (const pattern of EMOTIONAL_PATTERNS) {
    if (pattern.test(normalized)) {
      return EMOTIONAL_RESPONSES[Math.floor(Math.random() * EMOTIONAL_RESPONSES.length)];
    }
  }
  return '';
}

function formatMath(text) {
  let result = text;
  result = result.replace(/([A-Za-zء-ي]+)(\d+)([+-]?)/g, (match, letters, digits, charge) => {
    let rendered = `${letters}<sub>${digits}</sub>`;
    if (charge) rendered += `<sup>${charge}</sup>`;
    return rendered;
  });
  result = result.replace(/\^(\d+)/g, '<sup>$1</sup>');
  result = result.replace(/\\text\{(.*?)\}/g, '$1');
  return result;
}

function parseMarkdown(text) {
  if (!text) return '';
  let html = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/(^|\n)###\s+(.*?)(?=\n|$)/g, '$1<h3>$2</h3>');
  html = html.replace(/(^|\n)##\s+(.*?)(?=\n|$)/g, '$1<h2>$2</h2>');
  html = html.replace(/(^|\n)\*\s+(.*?)(?=\n|$)/g, '$1<li>$2</li>');
  html = html.replace(/(^|\n)\d+\.\s+(.*?)(?=\n|$)/g, '$1<li>$2</li>');
  html = html.replace(/<li>(.*?)<\/li>/gs, '<ul><li>$1</li></ul>');
  html = html.replace(/\n\n+/g, '<br><br>');
  return formatMath(html);
}

function appendMessageUI(sender, text, attachment = null) {
  if (!ELEMENTS.messagesContainer) return;
  const messageBlock = document.createElement('div');
  messageBlock.className = `message-${sender}`;

  if (sender === 'student') {
    messageBlock.innerHTML = `
      <div class="student-bubble">
        <div class="student-header">👨‍🎓 الطالب المجد</div>
        <div class="student-content">${parseMarkdown(text)}</div>
      </div>
    `;
  } else {
    messageBlock.innerHTML = `
      <div class="professor-flow">
        <div class="professor-heading">الأستاذ فهمان</div>
        <div class="professor-copy">${parseMarkdown(text)}</div>
      </div>
    `;
  }

  if (attachment) {
    const attachmentBox = document.createElement('div');
    attachmentBox.className = 'attachment-box';
    attachmentBox.innerHTML = attachment.isImage
      ? `<div>📷 صورة مرفقة: ${attachment.name} (${attachment.size})</div>`
      : `<div>📄 مستند مرفق: ${attachment.name} (${attachment.size})</div>`;
    messageBlock.appendChild(attachmentBox);
  }

  ELEMENTS.messagesContainer.appendChild(messageBlock);
  ELEMENTS.chatViewport.scrollTop = ELEMENTS.chatViewport.scrollHeight;
}

function appendSystemNote(text) {
  if (!ELEMENTS.messagesContainer) return;
  const note = document.createElement('div');
  note.className = 'system-note';
  note.innerHTML = `📌 ${text}`;
  ELEMENTS.messagesContainer.appendChild(note);
  ELEMENTS.chatViewport.scrollTop = ELEMENTS.chatViewport.scrollHeight;
}

function showAttachmentStatus(name, size) {
  if (!ELEMENTS.attachmentStatusBar || !ELEMENTS.attachmentName || !ELEMENTS.attachmentSize) return;
  ELEMENTS.attachmentName.textContent = name;
  ELEMENTS.attachmentSize.textContent = `(${size})`;
  ELEMENTS.attachmentStatusBar.style.display = 'flex';
}

function hideAttachmentStatus() {
  if (!ELEMENTS.attachmentStatusBar) return;
  ELEMENTS.attachmentStatusBar.style.display = 'none';
}

function clearAttachment() {
  currentAttachment = null;
  uploadedFileContent.name = '';
  uploadedFileContent.text = '';
  if (ELEMENTS.textFilePicker) ELEMENTS.textFilePicker.value = '';
  if (ELEMENTS.imageFilePicker) ELEMENTS.imageFilePicker.value = '';
  hideAttachmentStatus();
}

function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.toString());
    reader.onerror = () => reject(new Error('تعذر قراءة الملف النصي.'));
    reader.readAsText(file, 'UTF-8');
  });
}

async function handleTextFileSelection(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.name.toLowerCase().endsWith('.txt')) {
    alert('يرجى اختيار ملف TXT فقط.');
    event.target.value = '';
    return;
  }
  try {
    const text = await readTextFile(file);
    if (!text.trim()) throw new Error('الملف فارغ.');
    uploadedFileContent.name = file.name;
    uploadedFileContent.text = text;
    currentAttachment = {
      name: file.name,
      size: formatBytes(file.size),
      type: file.type || 'text/plain',
      text,
      isImage: false
    };
    ingestCustomFeed(file.name, text, formatBytes(file.size));
    showAttachmentStatus(file.name, formatBytes(file.size));
  } catch (error) {
    alert(`عذراً يا بني، ${error.message}`);
    clearAttachment();
  }
}

function handleImageFileSelection(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    currentAttachment = {
      name: file.name,
      size: formatBytes(file.size),
      type: file.type,
      dataURL: reader.result,
      isImage: true
    };
    showAttachmentStatus(file.name, formatBytes(file.size));
  };
  reader.onerror = () => {
    alert('تعذر قراءة الصورة. حاول مرة أخرى.');
    clearAttachment();
  };
  reader.readAsDataURL(file);
}

function ingestCustomFeed(name, text, size) {
  const exists = customFeeds.some(feed => feed.name === name && feed.text === text);
  if (exists) return;
  customFeeds.push({
    id: `feed_${Date.now()}`,
    name,
    size,
    text,
    createdAt: new Date().toLocaleString('ar-EG', { dateStyle: 'medium', timeStyle: 'short' })
  });
  saveFeeds();
  renderFeedsList();
}

function renderFeedsList() {
  if (!ELEMENTS.feedsList) return;
  ELEMENTS.feedsList.innerHTML = '';
  if (!customFeeds.length) {
    ELEMENTS.feedsList.innerHTML = '<li class="empty-entry">لا توجد مستندات مضافة.</li>';
    return;
  }
  customFeeds.forEach(feed => {
    const li = document.createElement('li');
    li.className = 'feed-entry';
    li.innerHTML = `
      <div class="feed-details">
        <strong>${feed.name}</strong><br>
        <small>${feed.size} • ${feed.createdAt}</small>
      </div>
      <button type="button" class="btn-delete-feed" data-id="${feed.id}">🗑️</button>
    `;
    li.querySelector('.btn-delete-feed').addEventListener('click', () => deleteCustomFeed(feed.id));
    ELEMENTS.feedsList.appendChild(li);
  });
}

function deleteCustomFeed(id) {
  const index = customFeeds.findIndex(feed => feed.id === id);
  if (index === -1) return;
  customFeeds.splice(index, 1);
  saveFeeds();
  renderFeedsList();
}

function clearAllCustomFeeds() {
  if (!confirm('هل تريد مسح جميع التغذية المعرفية المضافة؟')) return;
  customFeeds.length = 0;
  saveFeeds();
  renderFeedsList();
  clearAttachment();
}

function startNewChat() {
  currentChatId = `chat_${Date.now()}`;
  const title = `حلقة علمية جديدة ${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`;
  chats.unshift({ id: currentChatId, title, messages: [] });
  saveChats();
  renderChatHistory();
  clearMessages();
  if (ELEMENTS.welcomeView) ELEMENTS.welcomeView.style.display = 'flex';
}

function clearMessages() {
  if (ELEMENTS.messagesContainer) ELEMENTS.messagesContainer.innerHTML = '';
}

function saveChats() {
  safeSet(STORAGE_KEYS.chats, JSON.stringify(chats));
}

function saveFeeds() {
  safeSet(STORAGE_KEYS.feeds, JSON.stringify(customFeeds));
}

function saveProfile(profile) {
  safeSet(STORAGE_KEYS.profile, JSON.stringify(profile));
}

function loadChats() {
  const stored = safeGet(STORAGE_KEYS.chats);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      chats.push(...parsed);
    }
  } catch (error) {
    console.warn('فشل تحميل الحوارات من الذاكرة المحلية.', error);
  }
}

function loadFeeds() {
  const stored = safeGet(STORAGE_KEYS.feeds);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      customFeeds.push(...parsed);
    }
  } catch (error) {
    console.warn('فشل تحميل المستندات من الذاكرة المحلية.', error);
  }
}

function loadProfile() {
  const stored = safeGet(STORAGE_KEYS.profile);
  if (!stored) return;
  try {
    const profile = JSON.parse(stored);
    if (profile && profile.name && ELEMENTS.loginBtnText) {
      ELEMENTS.loginBtnText.textContent = profile.name.split(' ')[0] || 'الطالب المجد';
    }
  } catch (error) {
    console.warn('فشل تحميل ملف الطالب.', error);
  }
}

function renderChatHistory(filter = '') {
  if (!ELEMENTS.chatHistoryList) return;
  ELEMENTS.chatHistoryList.innerHTML = '';
  const query = filter.trim().toLowerCase();
  const matching = chats.filter(chat => chat.title.toLowerCase().includes(query));
  if (!matching.length) {
    ELEMENTS.chatHistoryList.innerHTML = '<li class="empty-entry">لا توجد حلقات مناسبة.</li>';
    return;
  }
  matching.forEach(chat => {
    const li = document.createElement('li');
    li.className = `history-item ${chat.id === currentChatId ? 'active' : ''}`;
    li.innerHTML = `
      <button type="button" class="history-link">🔖 ${chat.title}</button>
      <button type="button" class="history-delete" data-id="${chat.id}">🗑️</button>
    `;
    li.querySelector('.history-link').addEventListener('click', () => loadChatSession(chat.id));
    li.querySelector('.history-delete').addEventListener('click', event => {
      event.stopPropagation();
      deleteChat(chat.id);
    });
    ELEMENTS.chatHistoryList.appendChild(li);
  });
}

function loadChatSession(id) {
  const chat = chats.find(item => item.id === id);
  if (!chat) return;
  currentChatId = id;
  if (ELEMENTS.welcomeView) ELEMENTS.welcomeView.style.display = 'none';
  clearMessages();
  chat.messages.forEach(msg => appendMessageUI(msg.sender, msg.text, msg.attachment));
  renderChatHistory(ELEMENTS.chatSearch ? ELEMENTS.chatSearch.value : '');
}

function deleteChat(id) {
  const index = chats.findIndex(item => item.id === id);
  if (index === -1) return;
  chats.splice(index, 1);
  if (currentChatId === id) {
    currentChatId = null;
    clearMessages();
    if (ELEMENTS.welcomeView) ELEMENTS.welcomeView.style.display = 'flex';
  }
  saveChats();
  renderChatHistory(ELEMENTS.chatSearch ? ELEMENTS.chatSearch.value : '');
}

function answerFromFeeds(query) {
  const normalizedQuery = normalizeArabic(query);
  if (!normalizedQuery) return '';
  let best = { score: 0, text: '' };

  customFeeds.forEach(feed => {
    const paragraphs = feed.text.split(/\n\n+/);
    paragraphs.forEach(paragraph => {
      const score = getSimilarityScore(normalizeArabic(paragraph), normalizedQuery);
      if (score > best.score) {
        best = { score, text: paragraph.trim() };
      }
    });
  });

  if (best.score > 0.5) {
    return `### إجابة مستندية من: ${uploadedFileContent.name || 'المستند المضاف'}\n${best.text}\n\n### تعليق الأستاذ فهمان\nهذه المعلومة مأخوذة من المذكرة التي أضفتها، ولذلك تقترب من الإجابة النهائية المطلوبة في الامتحان.`;
  }
  return '';
}

function answerFromKnowledge(query) {
  const normalizedQuery = normalizeArabic(query);
  if (!normalizedQuery) return '';
  let bestArticle = null;
  let bestScore = 0;

  UNIFIED_KNOWLEDGE.forEach(article => {
    article.keywords.forEach(keyword => {
      const normalizedKeyword = normalizeArabic(keyword);
      let score = getSimilarityScore(normalizedQuery, normalizedKeyword);
      if (normalizedQuery.includes(normalizedKeyword) || normalizedKeyword.includes(normalizedQuery)) {
        score = Math.max(score, 0.9);
      }
      if (score > bestScore) {
        bestScore = score;
        bestArticle = article;
      }
    });
  });

  if (bestArticle && bestScore >= 0.45) {
    return `### ${bestArticle.title}\n${bestArticle.content}\n\n### ختام الأستاذ فهمان\nراجع هذه الأفكار مع الأمثلة في الكتاب المدرسي لرسوخ الفهم.`;
  }
  return '';
}

function buildResponse(query) {
  const emotionalPrefix = detectEmotionalTone(query);
  const feedAnswer = uploadedFileContent.text ? answerFromFeeds(query) : '';
  if (feedAnswer) {
    return `${emotionalPrefix ? emotionalPrefix + '\n\n' : ''}${feedAnswer}`;
  }
  const knowledgeAnswer = answerFromKnowledge(query);
  if (knowledgeAnswer) {
    return `${emotionalPrefix ? emotionalPrefix + '\n\n' : ''}${knowledgeAnswer}`;
  }
  return `${emotionalPrefix ? emotionalPrefix + '\n\n' : ''}يا ولدي، لقد تفحصت السؤال ولم أجد تطابقاً قوياً في قاعدة المعرفة المدمجة. أنصحك أن تعيد صياغة السؤال باستخدام كلمات مثل "دورة", "انقباض", "كيما", "كيرشوف", "ليزر", "فالق" أو أن ترفع ملفاً نصياً بسيطاً مرتبطاً بالمادة لأجيبك مباشرة بناء على سياقه.`;
}

function appendTypingIndicator() {
  if (!ELEMENTS.messagesContainer) return null;
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator';
  indicator.innerHTML = `<span>الأستاذ فهمان يكتب...</span>`;
  ELEMENTS.messagesContainer.appendChild(indicator);
  ELEMENTS.chatViewport.scrollTop = ELEMENTS.chatViewport.scrollHeight;
  return indicator;
}

function handleSend() {
  const text = ELEMENTS.studentInput ? ELEMENTS.studentInput.value.trim() : '';
  if (!text && !currentAttachment) {
    if (ELEMENTS.studentInput) {
      ELEMENTS.studentInput.classList.add('shake-input');
      setTimeout(() => ELEMENTS.studentInput.classList.remove('shake-input'), 400);
    }
    return;
  }

  if (!currentChatId) startNewChat();
  if (ELEMENTS.welcomeView) ELEMENTS.welcomeView.style.display = 'none';

  const message = {
    sender: 'student',
    text,
    attachment: currentAttachment ? { ...currentAttachment } : null,
    createdAt: new Date().toISOString()
  };
  const chat = chats.find(chatItem => chatItem.id === currentChatId);
  if (chat) {
    chat.messages.push(message);
    saveChats();
  }

  appendMessageUI('student', text, currentAttachment);
  if (ELEMENTS.studentInput) {
    ELEMENTS.studentInput.value = '';
    ELEMENTS.studentInput.style.height = 'auto';
  }

  const attachmentCopy = currentAttachment ? { ...currentAttachment } : null;
  clearAttachment();

  const indicator = appendTypingIndicator();
  setTimeout(() => {
    if (indicator && indicator.parentNode) indicator.parentNode.removeChild(indicator);
    const answer = buildResponse(text);
    const professorMessage = {
      sender: 'professor',
      text: answer,
      attachment: null,
      createdAt: new Date().toISOString()
    };
    const currentChat = chats.find(chatItem => chatItem.id === currentChatId);
    if (currentChat) {
      currentChat.messages.push(professorMessage);
      saveChats();
    }
    appendMessageUI('professor', answer);
  }, 1400 + Math.random() * 800);
}

function formatBytes(bytes) {
  if (!bytes) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}

function initApp() {
  loadChats();
  loadFeeds();
  loadProfile();
  renderChatHistory();
  renderFeedsList();

  if (ELEMENTS.menuToggle && ELEMENTS.sidebar) {
    ELEMENTS.menuToggle.addEventListener('click', () => ELEMENTS.sidebar.classList.toggle('open'));
  }
  if (ELEMENTS.closeSidebar && ELEMENTS.sidebar) {
    ELEMENTS.closeSidebar.addEventListener('click', () => ELEMENTS.sidebar.classList.remove('open'));
  }
  if (ELEMENTS.sendBtn) {
    ELEMENTS.sendBtn.addEventListener('click', handleSend);
  }
  if (ELEMENTS.studentInput) {
    ELEMENTS.studentInput.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSend();
      }
    });
    ELEMENTS.studentInput.addEventListener('input', () => {
      ELEMENTS.studentInput.style.height = 'auto';
      ELEMENTS.studentInput.style.height = `${ELEMENTS.studentInput.scrollHeight}px`;
    });
  }
  document.querySelectorAll('.suggestion-card').forEach(card => {
    card.addEventListener('click', () => {
      const query = card.getAttribute('data-query') || '';
      if (ELEMENTS.studentInput) {
        ELEMENTS.studentInput.value = query;
        ELEMENTS.studentInput.dispatchEvent(new Event('input'));
      }
      handleSend();
    });
  });
  if (ELEMENTS.newChatBtn) {
    ELEMENTS.newChatBtn.addEventListener('click', startNewChat);
  }
  if (ELEMENTS.textFilePicker) {
    ELEMENTS.textFilePicker.addEventListener('change', handleTextFileSelection);
  }
  if (ELEMENTS.imageFilePicker) {
    ELEMENTS.imageFilePicker.addEventListener('change', handleImageFileSelection);
  }
  if (ELEMENTS.removeAttachmentBtn) {
    ELEMENTS.removeAttachmentBtn.addEventListener('click', clearAttachment);
  }
  if (ELEMENTS.chatSearch) {
    ELEMENTS.chatSearch.addEventListener('input', event => renderChatHistory(event.target.value));
  }
  if (ELEMENTS.academicLoginBtn && ELEMENTS.loginModal) {
    ELEMENTS.academicLoginBtn.addEventListener('click', () => ELEMENTS.loginModal.classList.add('open'));
  }
  if (ELEMENTS.closeLoginModal && ELEMENTS.loginModal) {
    ELEMENTS.closeLoginModal.addEventListener('click', () => ELEMENTS.loginModal.classList.remove('open'));
  }
  if (ELEMENTS.saveLoginBtn) {
    ELEMENTS.saveLoginBtn.addEventListener('click', () => {
      const name = ELEMENTS.studentNameInput ? ELEMENTS.studentNameInput.value.trim() : '';
      const school = ELEMENTS.studentSchoolInput ? ELEMENTS.studentSchoolInput.value.trim() : '';
      const gov = ELEMENTS.studentGovInput ? ELEMENTS.studentGovInput.value.trim() : '';
      if (!name) {
        alert('يرجى كتابة اسم الطالب.');
        return;
      }
      saveProfile({ name, school, gov });
      if (ELEMENTS.loginBtnText) ELEMENTS.loginBtnText.textContent = name.split(' ')[0] || 'الطالب المجد';
      if (ELEMENTS.loginModal) ELEMENTS.loginModal.classList.remove('open');
    });
  }
  if (ELEMENTS.curriculumFeedsBtn && ELEMENTS.feedsModal) {
    ELEMENTS.curriculumFeedsBtn.addEventListener('click', () => ELEMENTS.feedsModal.classList.add('open'));
  }
  if (ELEMENTS.closeFeedsModal && ELEMENTS.feedsModal) {
    ELEMENTS.closeFeedsModal.addEventListener('click', () => ELEMENTS.feedsModal.classList.remove('open'));
  }
  if (ELEMENTS.clearAllFeedsBtn) {
    ELEMENTS.clearAllFeedsBtn.addEventListener('click', clearAllCustomFeeds);
  }
  if (ELEMENTS.upgradeBtn && ELEMENTS.upgradeModal) {
    ELEMENTS.upgradeBtn.addEventListener('click', () => ELEMENTS.upgradeModal.classList.add('open'));
  }
  if (ELEMENTS.closeUpgradeModal && ELEMENTS.upgradeModal) {
    ELEMENTS.closeUpgradeModal.addEventListener('click', () => ELEMENTS.upgradeModal.classList.remove('open'));
  }
  if (ELEMENTS.upgradeConfirmBtn) {
    ELEMENTS.upgradeConfirmBtn.addEventListener('click', () => {
      alert('مبروك يا بني! لقد تم تفعيل المنحة الذهبية للأستاذ فهمان.');
      if (ELEMENTS.upgradeModal) ELEMENTS.upgradeModal.classList.remove('open');
      if (ELEMENTS.upgradeBtn) {
        ELEMENTS.upgradeBtn.textContent = '👑 المنحة الذهبية نشطة';
        ELEMENTS.upgradeBtn.disabled = true;
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', initApp);