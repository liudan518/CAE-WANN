/* CAE-WANN: hand-authored multilingual interface, no third-party translation API. */
const TRANSLATIONS = {
  zh: {
    skip:'跳转到正文',brandSub:'科研成果 / 2022',navOverview:'研究概览',navMethod:'研究方法',navEvidence:'实验结果',navFigures:'科研图表',navCitation:'论文引用',languageLabel:'界面语言',
    heroEyebrow:'同行评审论文 · 燃气轮机健康监测',heroTitle:'拓展搜索空间，识别异常状态。',
    heroLead:'将卷积自编码器（CAE）与权重无关神经网络（WANN）搜索相结合，发现结构精简的分类器；再通过基于似然的阈值选择，在异常样本稀少时实现更均衡的判别。',
    readPaper:'阅读论文全文',exploreMethod:'了解研究方法',heroVisualLabel:'方法框架总览',heroVisualCaption:'离线 CAE–WANN 模型搜索与在线异常判别流程。',
    statAuc:'最佳平均 AUC',statSd:'AUC 标准差',statSamples:'真实监测样本',statInference:'155 个测试样本的推理时间',
    s1label:'01 / 研究背景',s1title:'样本量有限，不代表搜索空间必须受限。',
    s1text1:'燃气轮机异常检测是一个异常样本稀缺的二分类问题。依靠经验选择神经网络拓扑结构，容易导致模型对已有传感器数据欠拟合或过拟合。',
    s1text2:'CAE–WANN 先通过卷积自编码器扩展特征空间，再在学习到的表示中搜索合适的神经网络架构。最后，最大似然阈值根据不平衡的异常评分分布，自适应地确定分类边界。',
    feature1title:'更丰富的特征表示',feature1text:'CAE 将包含 30 个数值的时间窗口映射到更高维的潜在空间，为 WANN 提供更广泛的候选网络结构。',feature1tag:'搜索空间扩展',
    feature2title:'以搜索代替经验猜测',feature2text:'权重无关网络搜索利用共享权重与性能损失准则，对简洁的候选拓扑结构进行评价和排序，避免对每个网络重复完整训练。',feature2tag:'神经架构搜索',
    feature3title:'兼顾两类样本的决策',feature3text:'MLETS 对不同类别的异常评分分布建模，以似然估计确定阈值，而不是采用固定的 0.5 截断值。',feature3tag:'判别阈值选择',
    datasetLabel:'数据集概况',normalCount:'正常样本',abnormalCount:'异常样本',timeSteps:'每个窗口的时间步',datasetNote:'数据来自真实燃气轮机监测；受隐私限制，未公开发布。',
    s2label:'02 / 技术方法',s2title:'从原始传感器信号到异常判别。',s2intro:'可学习的特征表示、演化式网络结构搜索和统计决策规则共同构成完整的检测流程。',
    step1label:'数据输入',step1title:'传感器时间窗口',step1text:'DEGT、DN2 和 DFF 三类变量各取连续十个时间步，构成 30 维样本。',
    step2label:'特征编码',step2title:'卷积自编码器',step2text:'编码器学习特征，解码器重建原始时间窗口。',
    step3label:'空间扩展',step3title:'潜在向量 z',step3text:'高维潜在表示扩大了 WANN 可以探索的搜索空间。',
    step4label:'结构搜索',step4title:'WANN 演化',step4text:'利用共享权重评价、排序并变异候选网络结构。',
    step5label:'最终判别',step5title:'MLETS 阈值',step5text:'通过似然估计得到阈值 β，将窗口判为正常或异常。',
    trainingKicker:'模型学习策略',trainingTitle:'顺序训练与交替反馈，两种路径。',
    trainingText1:'顺序训练先完成 CAE 学习，再开展 WANN 网络搜索；交替训练则轮流更新特征表示与拓扑结构，使分类反馈持续塑造潜在特征。',
    trainingText2:'CAE 损失由重建项和 WANN 反馈项组成。网络搜索在预测损失与结构复杂度之间权衡，最终搜索到的网络约含 160 条连接，而 BPNN 基线约为 810 条。',
    formulaCaption:'重建损失 + 分类反馈损失',fig3heading:'训练流程',figure3:'图 3. 两种训练策略：先训练 CAE 再搜索 WANN，或交替更新 CAE 与 WANN。',
    fig4heading:'卷积自编码器',figure4:'图 4. 采用步长卷积与重建机制的 CAE 编码器和解码器。',
    fig5heading:'权重无关网络搜索',figure5:'图 5. 依次执行初始化、评价、排序和结构变异，持续迭代搜索。',
    s3label:'03 / 实验验证',s3title:'更高的 AUC，更均衡的判别阈值。',
    s3intro:'测试集包含 155 个窗口，其中正常 130 个、异常 25 个。由于类别不平衡，仅看总体准确率容易产生误导，因此研究同时评估 AUC、真正率（TPR）、真负率（TNR）和 Youden 指数。',
    score1label:'CAE–WANN 平均 AUC',score1note:'最佳共享权重（+1）',score2label:'最佳 WANN AUC',score2note:'独立 WANN 模型',score3label:'BPNN AUC',score3note:'神经网络基线',score4label:'AUC 波动程度',score4note:'CAE–WANN 标准差',
    table6heading:'模型性能比较',table6:'表 6. 基线方法、WANN 和 CAE–WANN 在不同配置下的 AUC 统计量及推理时间。',
    compKicker:'模型比较',compTitle:'提高性能，同时控制模型复杂度。',
    compText1:'在共享权重为 +1 时，CAE–WANN 的平均 AUC 达到 86.74%，比最佳 WANN 高 1.84 个百分点，比 BPNN 高 6.97 个百分点。',
    compText2:'搜索得到的网络约有 160 条连接，而 BPNN 为 810 条。155 个测试样本的整体推理时间为 2.81 ms；决策树基线为 0.07 ms。',
    gainWann:'相对 WANN 的 AUC 提升（百分点）',gainBpnn:'相对 BPNN 的 AUC 提升（百分点）',
    fig6heading:'模型收敛过程',figure6:'图 6. WANN 性能损失约在第 512 代趋于稳定，CAE 重建损失在不同通道配置下收敛。',
    convergenceKicker:'训练动态',convergenceTitle:'稳定的模型搜索过程。',
    convergenceText:'最佳 WANN 的损失在约 512 代后趋于平稳。不同通道宽度的 CAE 重建损失同样收敛；研究最终选用 2 通道和 4 通道的配置。',
    thresholdKicker:'运行阈值',thresholdTitle:'兼顾正常和异常样本的决策边界。',
    thresholdText1:'固定阈值更倾向于识别异常（TPR 为 91.54%），自适应阈值则更有利于识别正常状态（TNR 为 92.00%）。MLETS 在两者之间取得平衡，TPR 为 85.38%，TNR 为 84.00%。',
    thresholdText2:'在保留测试集上，MLETS 正确识别了 130 个正常窗口中的 111 个，以及 25 个异常窗口中的 21 个。',
    table9heading:'阈值策略比较',table9:'表 9. 固定阈值、自适应阈值和基于最大似然的阈值策略的混淆矩阵。',
    latentKicker:'潜在空间示例',latentTitle:'特征表示揭示了什么？',latentIntro:'对正常与异常样本，分别并列展示原始传感器时间窗口和 CAE 学习得到的潜在表示。',
    fig7heading:'正常样本',figure7:'图 7. 五个正常样本的原始表示（A）及潜在表示（B）。',
    fig8heading:'异常样本',figure8:'图 8. 五个异常样本在相同两种表示空间中的结果。',
    s4label:'04 / 论文与引用',s4title:'阅读原文，准确引用。',citationIntro:'完整方法与实验细节请查阅论文原文。下方 BibTeX 依据您提供的引文附件整理。',
    journalLabel:'发表期刊',publicationLabel:'出版信息',pdfButton:'论文 PDF',bibDownload:'下载 .bib',risDownload:'下载 .ris',copyButton:'复制 BibTeX',
    bibNote:'书目信息已与提供的引文附件核对；论文题名和作者姓名保留原始出版语言。',footerSuffix:' / 科研项目主页',footerText:'科研图表取自提供的原论文材料。页面支持五种界面语言。',backTop:'返回顶部 ↑',figureDialogTitle:'图表放大预览',
    copied:'已复制 BibTeX',copyFailed:'无法自动复制，请手动选中文本',menuOpen:'打开菜单',menuClose:'关闭菜单',dialogClose:'关闭图表预览',
    figure2:'图 2. CAE–WANN 框架：离线训练、网络搜索及基于 MLETS 的在线判别。',
    figure2alt:'CAE–WANN 方法框架：CAE 特征表示、WANN 搜索以及 MLETS 阈值',figure3alt:'CAE–WANN 的顺序训练与交替训练流程图',figure4alt:'CAE 编码器与解码器网络结构',figure5alt:'WANN 初始化、评价、排序及变异的搜索流程',table6alt:'表 6：不同算法的 AUC 和推理时间比较',figure6alt:'WANN 迭代损失和 CAE 重建损失的收敛曲线',table9alt:'表 9：固定阈值、自适应阈值与 MLETS 的混淆矩阵',figure7alt:'五个正常样本在原始空间和潜在空间中的传感器曲线',figure8alt:'五个异常样本在原始空间和潜在空间中的传感器曲线'
  },
  ru: {
    skip:'Перейти к содержанию',brandSub:'НАУЧНАЯ РАБОТА / 2022',navOverview:'Обзор',navMethod:'Метод',navEvidence:'Результаты',navFigures:'Иллюстрации',navCitation:'Цитирование',languageLabel:'Язык интерфейса',
    heroEyebrow:'РЕЦЕНЗИРУЕМОЕ ИССЛЕДОВАНИЕ · СОСТОЯНИЕ ГАЗОТУРБИННЫХ ДВИГАТЕЛЕЙ',heroTitle:'Выявление аномалий через расширение пространства поиска.',
    heroLead:'Сочетание свёрточного автоэнкодера (CAE) и поиска нейросетевых архитектур без обучения весов (WANN) позволяет найти компактный классификатор. Порог на основе правдоподобия обеспечивает более сбалансированные решения при дефиците аномальных примеров.',
    readPaper:'Читать статью',exploreMethod:'Изучить метод',heroVisualLabel:'СХЕМА МЕТОДА',heroVisualCaption:'Поиск модели CAE–WANN в автономном режиме и оперативное обнаружение аномалий.',
    statAuc:'Лучшая средняя AUC',statSd:'Стандартное отклонение AUC',statSamples:'Реальные измерения',statInference:'Время обработки 155 тестовых образцов',
    s1label:'01 / НАУЧНЫЙ КОНТЕКСТ',s1title:'Малый объём данных не должен ограничивать пространство поиска.',
    s1text1:'Обнаружение аномалий газотурбинных двигателей представляет собой задачу бинарной классификации с небольшим числом примеров неисправностей. Ручной выбор структуры сети может привести к переобучению или недообучению на имеющихся сигналах датчиков.',
    s1text2:'CAE–WANN расширяет пространство признаков с помощью свёрточного автоэнкодера и затем ищет подходящую архитектуру нейронной сети в полученном представлении. Порог максимального правдоподобия адаптирует итоговое решение к несбалансированным распределениям оценок аномальности.',
    feature1title:'Более информативные признаки',feature1text:'CAE преобразует окна из 30 значений в многомерное латентное пространство, расширяя набор возможных архитектур для WANN.',feature1tag:'РАСШИРЕНИЕ ПРОСТРАНСТВА ПОИСКА',
    feature2title:'Поиск вместо догадок',feature2text:'Поиск WANN оценивает и ранжирует компактные топологии с использованием общих весов и критериев ошибки, не требуя полного обучения каждого кандидата.',feature2tag:'ПОИСК НЕЙРОСЕТЕВОЙ АРХИТЕКТУРЫ',
    feature3title:'Баланс решений',feature3text:'MLETS моделирует распределения оценок по классам и выбирает порог по функции правдоподобия вместо фиксированного отсечения 0,5.',feature3tag:'ВЫБОР ПОРОГА',
    datasetLabel:'ХАРАКТЕРИСТИКИ ДАННЫХ',normalCount:'нормальных образцов',abnormalCount:'аномальных образцов',timeSteps:'временных шагов в окне',datasetNote:'Реальные данные мониторинга газотурбинных двигателей; не опубликованы из-за ограничений конфиденциальности.',
    s2label:'02 / МЕТОД',s2title:'От сигналов датчиков к решению.',s2intro:'Обучаемое представление, эволюционный поиск топологии и статистическое правило принятия решения образуют единый процесс.',
    step1label:'ВХОД',step1title:'Окна сигналов',step1text:'DEGT, DN2 и DFF за десять последовательных шагов образуют образец из 30 значений.',
    step2label:'КОДИРОВАНИЕ',step2title:'Свёрточный автоэнкодер',step2text:'Кодировщик выделяет признаки, а декодировщик восстанавливает исходное окно.',
    step3label:'РАСШИРЕНИЕ',step3title:'Латентный вектор z',step3text:'Многомерное представление увеличивает пространство поиска для WANN.',
    step4label:'ПОИСК',step4title:'Эволюция WANN',step4text:'Кандидатные архитектуры оцениваются, ранжируются и изменяются с общими весами.',
    step5label:'РЕШЕНИЕ',step5title:'Порог MLETS',step5text:'Подобранный по правдоподобию порог β определяет нормальное или аномальное состояние.',
    trainingKicker:'СТРАТЕГИЯ ОБУЧЕНИЯ',trainingTitle:'Последовательная схема и цикл обратной связи.',
    trainingText1:'В последовательной схеме сначала обучается CAE, затем выполняется поиск WANN. В чередующейся схеме представление и топология обновляются поочерёдно, поэтому обратная связь классификатора влияет на латентные признаки.',
    trainingText2:'Функция потерь CAE объединяет ошибку реконструкции и обратную связь WANN. Поиск архитектуры учитывает ошибку прогноза и сложность сети: найденная модель содержит около 160 соединений против 810 у базовой BPNN.',
    formulaCaption:'ошибка реконструкции + обратная связь классификатора',fig3heading:'ПРОЦЕДУРЫ ОБУЧЕНИЯ',figure3:'Рис. 3. Две стратегии: сначала CAE, затем WANN, либо попеременное обновление CAE и WANN.',
    fig4heading:'СВЁРТОЧНЫЙ АВТОЭНКОДЕР',figure4:'Рис. 4. Кодировщик и декодировщик CAE со свёртками с шагом и восстановлением сигнала.',
    fig5heading:'ПОИСК АРХИТЕКТУР WANN',figure5:'Рис. 5. Цикл поиска: инициализация, оценка, ранжирование и структурные изменения.',
    s3label:'03 / ЭКСПЕРИМЕНТАЛЬНЫЕ ДАННЫЕ',s3title:'Более высокая AUC и более сбалансированный порог.',
    s3intro:'Тестовая выборка содержит 155 окон: 130 нормальных и 25 аномальных. Из-за дисбаланса классов общая точность вводит в заблуждение; поэтому рассматриваются AUC, чувствительность (TPR), специфичность (TNR) и индекс Юдена.',
    score1label:'СРЕДНЯЯ AUC CAE–WANN',score1note:'лучший общий вес (+1)',score2label:'ЛУЧШАЯ AUC WANN',score2note:'отдельная модель WANN',score3label:'AUC BPNN',score3note:'базовая нейронная сеть',score4label:'РАЗБРОС AUC',score4note:'стандартное отклонение CAE–WANN',
    table6heading:'СРАВНЕНИЕ МОДЕЛЕЙ',table6:'Табл. 6. Статистика AUC и время вывода базовых моделей, WANN и различных конфигураций CAE–WANN.',
    compKicker:'СРАВНЕНИЕ МОДЕЛЕЙ',compTitle:'Более высокая эффективность без лишней сложности.',
    compText1:'При общем весе +1 средняя AUC CAE–WANN составляет 86,74%: на 1,84 процентного пункта выше лучшего варианта WANN и на 6,97 пункта выше BPNN.',
    compText2:'Найденная сеть содержит около 160 соединений, тогда как BPNN — 810. Обработка всех 155 тестовых образцов занимает 2,81 мс против 0,07 мс у базовых деревьев решений.',
    gainWann:'пункта AUC относительно WANN',gainBpnn:'пункта AUC относительно BPNN',
    fig6heading:'СХОДИМОСТЬ МОДЕЛИ',figure6:'Рис. 6. Потери WANN стабилизируются примерно к 512-му поколению; ошибка реконструкции CAE сходится при разных конфигурациях.',
    convergenceKicker:'ДИНАМИКА ОБУЧЕНИЯ',convergenceTitle:'Устойчивая траектория поиска.',
    convergenceText:'Потери лучшей архитектуры WANN стабилизируются приблизительно после 512 поколений. Ошибка реконструкции CAE сходится при разных ширинах каналов; в работе выбрана конфигурация с двумя и четырьмя каналами.',
    thresholdKicker:'РАБОЧИЙ ПОРОГ',thresholdTitle:'Граница решений с учётом обоих классов.',
    thresholdText1:'Фиксированный порог лучше обнаруживает аномалии (TPR 91,54%), а адаптивный лучше распознаёт нормальное состояние (TNR 92,00%). MLETS обеспечивает баланс: TPR 85,38% и TNR 84,00%.',
    thresholdText2:'На тестовой выборке MLETS правильно классифицирует 111 из 130 нормальных окон и 21 из 25 аномальных.',
    table9heading:'СРАВНЕНИЕ ПОРОГОВ',table9:'Табл. 9. Матрицы ошибок для фиксированного, адаптивного и основанного на правдоподобии порогов.',
    latentKicker:'ПРИМЕРЫ ЛАТЕНТНЫХ ПРИЗНАКОВ',latentTitle:'Что показывает новое представление?',latentIntro:'Для нормальных и аномальных случаев показаны исходные окна сигналов датчиков и соответствующие латентные представления, изученные CAE.',
    fig7heading:'НОРМАЛЬНЫЕ ОБРАЗЦЫ',figure7:'Рис. 7. Пять нормальных образцов в исходном пространстве (A) и в латентном пространстве (B).',
    fig8heading:'АНОМАЛЬНЫЕ ОБРАЗЦЫ',figure8:'Рис. 8. Пять аномальных образцов в тех же двух пространствах.',
    s4label:'04 / ПУБЛИКАЦИЯ И ЦИТИРОВАНИЕ',s4title:'Изучите статью. Сошлитесь на источник.',citationIntro:'Подробности метода и экспериментов приведены в оригинальной статье. Библиографическая запись сформирована по предоставленному файлу цитирования.',
    journalLabel:'ЖУРНАЛ',publicationLabel:'ДАННЫЕ ПУБЛИКАЦИИ',pdfButton:'Статья PDF',bibDownload:'Скачать .bib',risDownload:'Скачать .ris',copyButton:'Копировать BibTeX',
    bibNote:'Библиографические сведения проверены по предоставленной записи; название статьи и имена авторов сохранены на языке публикации.',footerSuffix:' / НАУЧНЫЙ ПРОЕКТ',footerText:'Оригинальные научные иллюстрации взяты из предоставленных материалов статьи. Интерфейс доступен на пяти языках.',backTop:'Наверх ↑',figureDialogTitle:'Увеличенное изображение',
    copied:'BibTeX скопирован',copyFailed:'Не удалось скопировать автоматически. Выделите текст вручную.',menuOpen:'Открыть меню',menuClose:'Закрыть меню',dialogClose:'Закрыть изображение',
    figure2:'Рис. 2. Архитектура CAE–WANN: обучение и поиск в автономном режиме, классификация с MLETS в реальном времени.',
    figure2alt:'Схема CAE–WANN: представление CAE, поиск WANN и порог MLETS',figure3alt:'Последовательное и чередующееся обучение CAE–WANN',figure4alt:'Архитектура кодировщика и декодировщика CAE',figure5alt:'Схема поиска WANN с оценкой, ранжированием и мутациями',table6alt:'Таблица 6: AUC и время вывода разных алгоритмов',figure6alt:'Графики сходимости WANN и ошибки реконструкции CAE',table9alt:'Таблица 9: матрицы ошибок разных пороговых методов',figure7alt:'Пять нормальных образцов в исходном и латентном пространстве',figure8alt:'Пять аномальных образцов в исходном и латентном пространстве'
  },
  fr: {
    skip:'Aller au contenu',brandSub:'RECHERCHE / 2022',navOverview:'Présentation',navMethod:'Méthode',navEvidence:'Résultats',navFigures:'Figures',navCitation:'Référence',languageLabel:"Langue de l'interface",
    heroEyebrow:'ARTICLE ÉVALUÉ PAR LES PAIRS · SANTÉ DES TURBINES À GAZ',heroTitle:"Détecter les anomalies en élargissant l’espace de recherche.",
    heroLead:"Un autoencodeur convolutif (CAE) associé à la recherche de réseaux neuronaux indépendante des poids (WANN) permet d’identifier un classifieur compact. Un seuil fondé sur la vraisemblance équilibre ensuite les décisions lorsque les observations anormales sont rares.",
    readPaper:"Lire l’article",exploreMethod:'Explorer la méthode',heroVisualLabel:'APERÇU DE LA MÉTHODE',heroVisualCaption:'Recherche hors ligne du modèle CAE–WANN et détection des anomalies en ligne.',
    statAuc:'Meilleure AUC moyenne',statSd:"Écart-type de l’AUC",statSamples:'Échantillons réels de surveillance',statInference:'Inférence sur 155 échantillons de test',
    s1label:'01 / CONTEXTE SCIENTIFIQUE',s1title:'Un petit jeu de données ne doit pas limiter la recherche.',
    s1text1:"La détection d’anomalies sur les turbines à gaz est une classification binaire où les exemples défaillants sont peu nombreux. Choisir manuellement la topologie d’un réseau risque de provoquer un sous-apprentissage ou un surapprentissage des signaux disponibles.",
    s1text2:"CAE–WANN enrichit l’espace des caractéristiques grâce à un autoencodeur convolutif, puis recherche une architecture neuronale adaptée dans cette représentation. Un seuil du maximum de vraisemblance ajuste la décision finale aux distributions de scores déséquilibrées.",
    feature1title:'Des représentations plus riches',feature1text:'Le CAE transforme des fenêtres de 30 valeurs en un espace latent de dimension supérieure, offrant au WANN davantage d’architectures candidates.',feature1tag:'EXTENSION DE L’ESPACE DE RECHERCHE',
    feature2title:'La recherche plutôt que l’intuition',feature2text:'La recherche WANN classe des topologies compactes à l’aide de poids partagés et de critères de perte, sans entraîner intégralement chaque candidat.',feature2tag:'RECHERCHE D’ARCHITECTURE NEURONALE',
    feature3title:'Des décisions équilibrées',feature3text:'MLETS modélise la distribution des scores de chaque classe et choisit un seuil par vraisemblance, au lieu d’utiliser un seuil fixe de 0,5.',feature3tag:'SÉLECTION DU SEUIL',
    datasetLabel:'JEU DE DONNÉES',normalCount:'échantillons normaux',abnormalCount:'échantillons anormaux',timeSteps:'pas de temps par fenêtre',datasetNote:'Données réelles de surveillance des turbines à gaz, non rendues publiques pour des raisons de confidentialité.',
    s2label:'02 / MÉTHODE',s2title:'Des signaux bruts à la décision.',s2intro:'Une représentation apprise, une recherche évolutive de topologie et une règle statistique de décision composent une chaîne cohérente.',
    step1label:'ENTRÉE',step1title:'Fenêtres de capteurs',step1text:'DEGT, DN2 et DFF sur dix pas consécutifs forment un échantillon de 30 valeurs.',
    step2label:'ENCODAGE',step2title:'Autoencodeur convolutif',step2text:'L’encodeur apprend des caractéristiques et le décodeur reconstruit la fenêtre d’origine.',
    step3label:'EXTENSION',step3title:'Vecteur latent z',step3text:'La représentation de dimension supérieure élargit l’espace de recherche du WANN.',
    step4label:'RECHERCHE',step4title:'Évolution WANN',step4text:'Les architectures candidates sont évaluées, classées et modifiées avec des poids partagés.',
    step5label:'DÉCISION',step5title:'Seuil MLETS',step5text:'Un seuil β ajusté par vraisemblance distingue les fenêtres normales et anormales.',
    trainingKicker:'STRATÉGIE D’APPRENTISSAGE',trainingTitle:'Une voie séquentielle et une boucle de rétroaction.',
    trainingText1:'Dans la procédure séquentielle, le CAE est entraîné avant la recherche WANN. La procédure alternée met à jour tour à tour la représentation et la topologie, pour que le retour du classifieur modifie les caractéristiques latentes.',
    trainingText2:'La perte du CAE associe reconstruction et rétroaction WANN. La recherche d’architecture arbitre entre erreur de prédiction et complexité : le réseau obtenu comporte environ 160 connexions, contre 810 pour le BPNN de référence.',
    formulaCaption:'reconstruction + rétroaction de classification',fig3heading:'PROCÉDURES D’APPRENTISSAGE',figure3:'Figure 3. Deux stratégies : CAE puis WANN, ou alternance des mises à jour du CAE et du WANN.',
    fig4heading:'AUTOENCODEUR CONVOLUTIF',figure4:'Figure 4. Encodeur et décodeur du CAE utilisant des convolutions à pas et la reconstruction.',
    fig5heading:'RECHERCHE DU RÉSEAU WANN',figure5:'Figure 5. Cycle de recherche : initialisation, évaluation, classement et variation structurelle.',
    s3label:'03 / VALIDATION EXPÉRIMENTALE',s3title:'Une meilleure AUC, un seuil plus équilibré.',
    s3intro:'Le test porte sur 155 fenêtres : 130 normales et 25 anormales. Avec ce déséquilibre, l’exactitude globale peut être trompeuse ; l’étude examine donc l’AUC, la sensibilité (TPR), la spécificité (TNR) et l’indice de Youden.',
    score1label:'AUC MOYENNE CAE–WANN',score1note:'meilleur poids partagé (+1)',score2label:'MEILLEURE AUC WANN',score2note:'WANN utilisé seul',score3label:'AUC BPNN',score3note:'référence neuronale',score4label:'VARIABILITÉ DE L’AUC',score4note:'écart-type de CAE–WANN',
    table6heading:'COMPARAISON DES MODÈLES',table6:'Tableau 6. Statistiques d’AUC et temps d’inférence des méthodes de référence, de WANN et des configurations CAE–WANN.',
    compKicker:'COMPARAISON DES MODÈLES',compTitle:'De meilleures performances, sans complexité excessive.',
    compText1:'Avec le poids partagé +1, CAE–WANN atteint 86,74 % d’AUC moyenne, soit 1,84 point de pourcentage de plus que le meilleur WANN et 6,97 points de plus que le BPNN.',
    compText2:'Le réseau recherché compte environ 160 connexions, contre 810 pour le BPNN. L’inférence sur les 155 échantillons prend 2,81 ms, contre 0,07 ms pour les arbres de décision de référence.',
    gainWann:'points d’AUC par rapport à WANN',gainBpnn:'points d’AUC par rapport à BPNN',
    fig6heading:'CONVERGENCE DU MODÈLE',figure6:'Figure 6. La perte du WANN se stabilise vers la 512e génération ; la reconstruction du CAE converge pour plusieurs configurations.',
    convergenceKicker:'DYNAMIQUE D’APPRENTISSAGE',convergenceTitle:'Une recherche qui se stabilise.',
    convergenceText:'Les pertes du meilleur WANN se stabilisent après environ 512 générations. La reconstruction du CAE converge également pour différentes largeurs de canaux ; la configuration choisie comporte deux puis quatre canaux.',
    thresholdKicker:'SEUIL OPÉRATIONNEL',thresholdTitle:'Une frontière de décision attentive aux deux classes.',
    thresholdText1:'Le seuil fixe favorise la détection des anomalies (TPR de 91,54 %), alors que le seuil adaptatif favorise les observations normales (TNR de 92,00 %). MLETS équilibre les deux, avec un TPR de 85,38 % et un TNR de 84,00 %.',
    thresholdText2:'Sur le jeu de test, MLETS classe correctement 111 des 130 fenêtres normales et 21 des 25 fenêtres anormales.',
    table9heading:'COMPARAISON DES SEUILS',table9:'Tableau 9. Matrices de confusion des seuils fixe, adaptatif et fondé sur le maximum de vraisemblance.',
    latentKicker:'EXEMPLES DE L’ESPACE LATENT',latentTitle:'Ce que révèle la représentation.',latentIntro:'Les fenêtres de capteurs brutes et leurs représentations latentes apprises sont présentées côte à côte pour des cas normaux et anormaux.',
    fig7heading:'ÉCHANTILLONS NORMAUX',figure7:'Figure 7. Cinq échantillons normaux dans l’espace brut (A) et l’espace latent (B).',
    fig8heading:'ÉCHANTILLONS ANORMAUX',figure8:'Figure 8. Cinq échantillons anormaux dans les mêmes représentations.',
    s4label:'04 / PUBLICATION ET CITATION',s4title:'Lire les travaux. Citer la source.',citationIntro:'Consultez l’article original pour les détails méthodologiques et expérimentaux. La référence ci-dessous provient du fichier bibliographique fourni.',
    journalLabel:'REVUE',publicationLabel:'INFORMATIONS DE PUBLICATION',pdfButton:'Article PDF',bibDownload:'Télécharger .bib',risDownload:'Télécharger .ris',copyButton:'Copier BibTeX',
    bibNote:'Les métadonnées ont été contrôlées à partir du fichier fourni ; le titre et les noms des auteurs restent dans leur langue de publication.',footerSuffix:' / PROJET DE RECHERCHE',footerText:'Figures scientifiques originales issues des documents de publication fournis. Interface disponible en cinq langues.',backTop:'Retour en haut ↑',figureDialogTitle:'Agrandissement de la figure',
    copied:'BibTeX copié',copyFailed:'Copie automatique impossible ; sélectionnez le texte manuellement.',menuOpen:'Ouvrir le menu',menuClose:'Fermer le menu',dialogClose:'Fermer la figure',
    figure2:'Figure 2. Cadre CAE–WANN : apprentissage hors ligne, recherche de réseau et décision en ligne par MLETS.',
    figure2alt:'Architecture CAE–WANN : représentation CAE, recherche WANN et seuil MLETS',figure3alt:'Schémas d’apprentissage séquentiel et alterné de CAE–WANN',figure4alt:'Architecture de l’encodeur et du décodeur CAE',figure5alt:'Recherche WANN : évaluation, classement et mutations',table6alt:'Tableau 6 : comparaison des AUC et temps d’inférence',figure6alt:'Courbes de convergence des pertes WANN et de reconstruction CAE',table9alt:'Tableau 9 : matrices de confusion pour trois seuils',figure7alt:'Cinq signaux normaux dans les espaces brut et latent',figure8alt:'Cinq signaux anormaux dans les espaces brut et latent'
  },
  ar: {
    skip:'الانتقال إلى المحتوى',brandSub:'بحث علمي / 2022',navOverview:'نظرة عامة',navMethod:'المنهجية',navEvidence:'النتائج',navFigures:'الأشكال',navCitation:'الاقتباس',languageLabel:'لغة الواجهة',
    heroEyebrow:'بحث محكّم · مراقبة الحالة الصحية للتوربينات الغازية',heroTitle:'اكتشاف الحالات الشاذة عبر توسيع فضاء البحث.',
    heroLead:'يجمع النهج بين المُرمِّز التلقائي الالتفافي (CAE) والبحث عن الشبكات العصبية المستقلة عن الأوزان (WANN) لاكتشاف مصنّف صغير البنية، ثم يستخدم عتبة قائمة على الاحتمال لتحقيق قرارات أكثر توازناً عند ندرة العينات غير الطبيعية.',
    readPaper:'قراءة البحث كاملاً',exploreMethod:'استكشاف المنهجية',heroVisualLabel:'لمحة عن المنهجية',heroVisualCaption:'البحث عن نموذج CAE–WANN دون اتصال، ثم اتخاذ قرار الكشف عن الشذوذ أثناء التشغيل.',
    statAuc:'أفضل متوسط AUC',statSd:'الانحراف المعياري لـ AUC',statSamples:'عينات مراقبة فعلية',statInference:'زمن الاستدلال على 155 عينة اختبار',
    s1label:'01 / خلفية البحث',s1title:'محدودية البيانات لا تعني تقييد فضاء البحث.',
    s1text1:'يُعد اكتشاف الحالات الشاذة في التوربينات الغازية مسألة تصنيف ثنائي تتوافر فيها أمثلة قليلة على الأعطال. وقد يؤدي الاختيار اليدوي لبنية الشبكة إلى فرط التعلّم أو قصوره عند استخدام بيانات المستشعرات المتاحة.',
    s1text2:'يوسّع CAE–WANN فضاء الخصائص باستخدام مُرمِّز تلقائي التفافي، ثم يبحث عن بنية شبكة عصبية ملائمة ضمن التمثيل الناتج. وتتكيف عتبة الاحتمال الأعظم مع التوزيع غير المتوازن لدرجات الشذوذ لتحديد القرار النهائي.',
    feature1title:'تمثيلات أغنى للخصائص',feature1text:'يحوّل CAE النوافذ التي تتضمن 30 قيمة إلى فضاء كامن أعلى بُعداً، مما يوسّع البنى المرشحة التي يمكن لـ WANN استكشافها.',feature1tag:'توسيع فضاء البحث',
    feature2title:'البحث بدلاً من التخمين',feature2text:'يقيّم بحث WANN البنى المدمجة ويرتبها باستخدام أوزان مشتركة ومعايير الخسارة، دون الحاجة إلى تدريب كل شبكة مرشحة من البداية.',feature2tag:'البحث عن البنية العصبية',
    feature3title:'قرارات متوازنة',feature3text:'ينمذج MLETS توزيعات درجات الشذوذ لكل فئة ويختار العتبة وفق الاحتمال، بدلاً من استخدام حد ثابت مقداره 0.5.',feature3tag:'اختيار عتبة القرار',
    datasetLabel:'لمحة عن مجموعة البيانات',normalCount:'عينة طبيعية',abnormalCount:'عينة غير طبيعية',timeSteps:'خطوات زمنية لكل نافذة',datasetNote:'بيانات مراقبة حقيقية لتوربينات غازية؛ لم تُنشر علناً بسبب قيود الخصوصية.',
    s2label:'02 / المنهجية',s2title:'من إشارات المستشعرات إلى قرار التصنيف.',s2intro:'يجمع مسار العمل بين تمثيل قابل للتعلّم، وبحث تطوري عن بنية الشبكة، وقاعدة إحصائية لاتخاذ القرار.',
    step1label:'الإدخال',step1title:'نوافذ المستشعرات',step1text:'تشكل متغيرات DEGT وDN2 وDFF عبر عشر خطوات زمنية متتالية عينة من 30 قيمة.',
    step2label:'الترميز',step2title:'المُرمِّز التلقائي الالتفافي',step2text:'يتعلم المُرمِّز الخصائص، فيما يعيد مفكك الترميز بناء النافذة الأصلية.',
    step3label:'التوسيع',step3title:'المتجه الكامن z',step3text:'يوسّع التمثيل الكامن عالي الأبعاد فضاء البحث المتاح لـ WANN.',
    step4label:'البحث',step4title:'التطور في WANN',step4text:'تُقيَّم البنى المرشحة وتُرتَّب وتُعدَّل بالاعتماد على أوزان مشتركة.',
    step5label:'القرار',step5title:'عتبة MLETS',step5text:'تحدد العتبة β الملائمة وفق الاحتمال ما إذا كانت النافذة طبيعية أم شاذة.',
    trainingKicker:'استراتيجية التعلّم',trainingTitle:'مسار تدريبي متسلسل وحلقة تغذية راجعة.',
    trainingText1:'في التدريب المتسلسل يُدرَّب CAE أولاً ثم يبدأ البحث باستخدام WANN. أما التدريب التبادلي فيحدّث التمثيل والبنية بالتناوب، لتؤثر التغذية الراجعة من المصنّف في الخصائص الكامنة.',
    trainingText2:'تجمع دالة خسارة CAE بين خطأ إعادة البناء وتغذية WANN الراجعة. ويوازن البحث بين خطأ التنبؤ وتعقيد الشبكة؛ وتحتوي الشبكة الناتجة على نحو 160 اتصالاً مقابل 810 اتصالات في نموذج BPNN المرجعي.',
    formulaCaption:'خسارة إعادة البناء + تغذية التصنيف الراجعة',fig3heading:'إجراءات التدريب',figure3:'الشكل 3. استراتيجيتان: تدريب CAE ثم بحث WANN، أو التحديث التبادلي لكل منهما.',
    fig4heading:'المُرمِّز التلقائي الالتفافي',figure4:'الشكل 4. بنية مُرمِّز CAE ومفكك الترميز باستخدام التفاف بخطوات وإعادة بناء الإشارة.',
    fig5heading:'البحث عن شبكات WANN',figure5:'الشكل 5. تكرار عمليات التهيئة والتقييم والترتيب والتعديل البنيوي أثناء البحث.',
    s3label:'03 / الأدلة التجريبية',s3title:'مساحة AUC أعلى وعتبة قرار أكثر توازناً.',
    s3intro:'تتكون مجموعة الاختبار من 155 نافذة: 130 طبيعية و25 غير طبيعية. وبسبب عدم توازن الفئات قد تكون الدقة الإجمالية مضللة؛ لذا يتناول البحث AUC والحساسية (TPR) والنوعية (TNR) ومؤشر يودن.',
    score1label:'متوسط AUC لنموذج CAE–WANN',score1note:'أفضل وزن مشترك (+1)',score2label:'أفضل AUC لنموذج WANN',score2note:'نموذج WANN المستقل',score3label:'AUC لنموذج BPNN',score3note:'شبكة عصبية مرجعية',score4label:'تباين قيم AUC',score4note:'الانحراف المعياري لنموذج CAE–WANN',
    table6heading:'مقارنة أداء النماذج',table6:'الجدول 6. إحصاءات AUC وزمن الاستدلال للنماذج المرجعية وWANN وإعدادات CAE–WANN المختلفة.',
    compKicker:'مقارنة النماذج',compTitle:'تحسين الأداء دون تعقيد غير ضروري.',
    compText1:'عند الوزن المشترك +1 يحقق CAE–WANN متوسط AUC قدره 86.74%، متقدماً بمقدار 1.84 نقطة مئوية على أفضل إعداد لـ WANN وبمقدار 6.97 نقطة على BPNN.',
    compText2:'تحتوي الشبكة المكتشفة على نحو 160 اتصالاً، مقارنةً بـ 810 في BPNN. ويستغرق الاستدلال على جميع عينات الاختبار البالغ عددها 155 نحو 2.81 مللي ثانية، مقابل 0.07 مللي ثانية للنماذج المرجعية القائمة على أشجار القرار.',
    gainWann:'نقطة AUC أعلى من WANN',gainBpnn:'نقطة AUC أعلى من BPNN',
    fig6heading:'تقارب النموذج',figure6:'الشكل 6. تستقر خسارة WANN قرابة الجيل 512، وتتقارب خسارة إعادة البناء في CAE عبر إعدادات متعددة.',
    convergenceKicker:'ديناميكيات التدريب',convergenceTitle:'مسار بحث يصل إلى الاستقرار.',
    convergenceText:'تستقر خسائر أفضل شبكة WANN بعد نحو 512 جيلاً. وتتقارب أيضاً خسارة إعادة البناء في CAE عند عروض قنوات مختلفة؛ واختير في الدراسة إعداد بقناتين ثم أربع قنوات.',
    thresholdKicker:'عتبة التشغيل',thresholdTitle:'حدّ قرار يراعي الفئتين معاً.',
    thresholdText1:'تُفضِّل العتبة الثابتة كشف الحالات غير الطبيعية (TPR بنسبة 91.54%)، بينما تُفضِّل العتبة التكيفية تصنيف الحالات الطبيعية (TNR بنسبة 92.00%). ويحقق MLETS توازناً بقيمتي TPR وTNR تبلغـان 85.38% و84.00% على الترتيب.',
    thresholdText2:'في مجموعة الاختبار، يصنّف MLETS بشكل صحيح 111 نافذة من أصل 130 طبيعية، و21 نافذة من أصل 25 غير طبيعية.',
    table9heading:'مقارنة استراتيجيات العتبة',table9:'الجدول 9. مصفوفات الالتباس للعتبة الثابتة والتكيفية والعتبة القائمة على الاحتمال الأعظم.',
    latentKicker:'أمثلة من الفضاء الكامن',latentTitle:'ما الذي يكشفه التمثيل المتعلَّم؟',latentIntro:'تُعرض نوافذ إشارات المستشعرات الأصلية جنباً إلى جنب مع تمثيلاتها الكامنة التي تعلمها CAE، لكل من العينات الطبيعية وغير الطبيعية.',
    fig7heading:'العينات الطبيعية',figure7:'الشكل 7. خمس عينات طبيعية في التمثيل الأصلي (A) والتمثيل الكامن (B).',
    fig8heading:'العينات غير الطبيعية',figure8:'الشكل 8. خمس عينات غير طبيعية في التمثيلين نفسيهما.',
    s4label:'04 / النشر والاقتباس',s4title:'اقرأ الدراسة واستشهد بالمصدر.',citationIntro:'يرجى الرجوع إلى الورقة الأصلية للاطلاع على تفاصيل المنهجية والتجارب. أُعدّ المرجع أدناه من ملف الاستشهاد المرفق.',
    journalLabel:'المجلة',publicationLabel:'بيانات النشر',pdfButton:'ملف البحث PDF',bibDownload:'تنزيل .bib',risDownload:'تنزيل .ris',copyButton:'نسخ BibTeX',
    bibNote:'تمت مراجعة البيانات الببليوغرافية وفق ملف الاستشهاد المقدم؛ ويظل عنوان المقال وأسماء المؤلفين بلغة النشر الأصلية.',footerSuffix:' / صفحة المشروع البحثي',footerText:'الأشكال العلمية الأصلية مأخوذة من مواد النشر المرفقة. الواجهة متاحة بخمس لغات.',backTop:'العودة إلى الأعلى ↑',figureDialogTitle:'عرض الشكل بحجم أكبر',
    copied:'تم نسخ BibTeX',copyFailed:'تعذر النسخ تلقائياً؛ يُرجى تحديد النص ونسخه يدوياً.',menuOpen:'فتح القائمة',menuClose:'إغلاق القائمة',dialogClose:'إغلاق معاينة الشكل',
    figure2:'الشكل 2. إطار CAE–WANN: التدريب والبحث دون اتصال، ثم القرار أثناء التشغيل باستخدام MLETS.',
    figure2alt:'بنية CAE–WANN: تمثيل CAE وبحث WANN وعتبة MLETS',figure3alt:'مخططا التدريب المتسلسل والتبادلي لـ CAE–WANN',figure4alt:'بنية مُرمِّز CAE ومفكك الترميز',figure5alt:'البحث في WANN عبر التقييم والترتيب والتعديل',table6alt:'الجدول 6: مقارنة AUC وزمن الاستدلال بين الخوارزميات',figure6alt:'منحنيات تقارب خسارة WANN وإعادة البناء في CAE',table9alt:'الجدول 9: مصفوفات الالتباس لاستراتيجيات العتبة',figure7alt:'خمس عينات طبيعية في فضاء الإشارات الأصلي والفضاء الكامن',figure8alt:'خمس عينات غير طبيعية في الفضاء الأصلي والفضاء الكامن'
  }
};

const translatableElements = [...document.querySelectorAll('[data-i18n]')];
const sourceEnglish = Object.fromEntries(translatableElements.map((el) => [el.dataset.i18n, el.textContent.trim()]));
const originalAlts = Object.fromEntries([...document.querySelectorAll('[data-alt]')].map(el => [el.dataset.alt,el.alt]));
const UI_EN = {copied:'BibTeX copied',copyFailed:'Automatic copy failed; please select the text manually',menuOpen:'Open menu',menuClose:'Close menu',dialogClose:'Close figure preview',figureDialogTitle:'Figure preview',figure2:'Figure 2. CAE-WANN framework: offline training and network search, followed by MLETS online decision.',...originalAlts};
const languagePicker = document.getElementById('language-select');
let currentLanguage = 'en';
const tr = (key) => (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || sourceEnglish[key] || UI_EN[key] || key;
const pickerLanguages = ['zh','en','ru','fr','ar'];
function setLanguage(code) {
  const language = pickerLanguages.includes(code) ? code : 'en';
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  translatableElements.forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-alt]').forEach(el => { el.alt = tr(el.dataset.alt); });
  languagePicker.value = language;
  document.getElementById('menu-toggle').setAttribute('aria-label', tr(document.getElementById('nav-links').classList.contains('open')?'menuClose':'menuOpen'));
  document.getElementById('dialog-close').setAttribute('aria-label',tr('dialogClose'));
  document.querySelectorAll('.figure-button').forEach(btn => btn.setAttribute('aria-label',tr(btn.dataset.captionKey)));
  document.title = language === 'zh' ? 'CAE–WANN | 燃气轮机异常检测研究' : language === 'ru' ? 'CAE–WANN | Обнаружение аномалий газовых турбин' : language === 'fr' ? 'CAE–WANN | Détection d’anomalies des turbines à gaz' : language === 'ar' ? 'CAE–WANN | كشف الشذوذ في التوربينات الغازية' : 'CAE–WANN | Gas Turbine Anomaly Detection';
  try { localStorage.setItem('caewann-language',language); } catch (e) { /* storage unavailable */ }
}
let savedLanguage;
try { savedLanguage = localStorage.getItem('caewann-language'); } catch (e) {}
const browserLanguage = (navigator.language || 'en').toLowerCase().split('-')[0];
setLanguage(pickerLanguages.includes(savedLanguage)?savedLanguage:(pickerLanguages.includes(browserLanguage)?browserLanguage:'en'));
languagePicker.addEventListener('change', (ev) => setLanguage(ev.target.value));

// Responsive navigation and active sections.
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');
function closeMenu() { navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label',tr('menuOpen')); }
menuToggle.addEventListener('click',()=>{const open=!navLinks.classList.contains('open');navLinks.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',tr(open?'menuClose':'menuOpen'));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.navigation'))closeMenu();});
const progressBar=document.getElementById('reading-progress');
let scrollScheduled=false;
function updateScroll(){const root=document.documentElement;const max=root.scrollHeight-root.clientHeight;progressBar.style.width=(max>0?(root.scrollTop/max*100):0)+'%';scrollScheduled=false;}
window.addEventListener('scroll',()=>{if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateScroll);}}, {passive:true});
window.addEventListener('resize',updateScroll);updateScroll();
if ('IntersectionObserver' in window) {const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-20% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));}

// Image lightbox with semantic <dialog>, keyboard escape and return focus.
const dialog=document.getElementById('image-dialog'), dialogImg=document.getElementById('dialog-img'), dialogCaption=document.getElementById('dialog-caption');
let lastFigureButton=null;
document.querySelectorAll('.figure-button').forEach(button=>button.addEventListener('click',()=>{
  lastFigureButton=button;
  dialogImg.src=button.dataset.image;
  const img=button.querySelector('img'); dialogImg.alt=img?.alt || '';
  dialogCaption.textContent=tr(button.dataset.captionKey);
  document.getElementById('dialog-title').textContent=tr('figureDialogTitle');
  if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
  document.body.classList.add('dialog-open');
}));
function closeDialog(){if(typeof dialog.close==='function' && dialog.open)dialog.close();else dialog.removeAttribute('open');document.body.classList.remove('dialog-open');lastFigureButton?.focus();}
document.getElementById('dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',ev=>{if(ev.target===dialog)closeDialog();});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastFigureButton?.focus();});

// BibTeX code box is a direct reflection of the downloadable citation file.
const bibText = document.getElementById('bib-code').textContent.trim();
let toastTimeout;
function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('show'),2200);}
document.getElementById('copy-bib').addEventListener('click',async()=>{
 let copied=false;
 try {if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(bibText);copied=true;}}catch(err){}
 if(!copied){const area=document.createElement('textarea');area.value=bibText;area.style.cssText='position:fixed;opacity:0;inset:0;z-index:-1';document.body.appendChild(area);area.select();try{copied=document.execCommand('copy');}catch(err){}area.remove();}
 showToast(tr(copied?'copied':'copyFailed'));
});
