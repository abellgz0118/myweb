import{_ as n,o as a,c as s,a as t}from"./app.53c4fa75.js";var p="/images/seata\u8FD0\u884C\u539F\u7406\uFF08at\uFF09.png",e="/images/seata\u6A21\u578B.png",c="/images/seata\u7684bin\u76EE\u5F55.png",l="/images/seata\u5E38\u89C1\u9519\u8BEF1.png";const o={},i=t('<h1 id="seata\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#seata\u6982\u8FF0" aria-hidden="true">#</a> Seata\u6982\u8FF0</h1><h2 id="\u4EC0\u4E48\u662Fseata" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fseata" aria-hidden="true">#</a> \u4EC0\u4E48\u662FSeata</h2><p>Seata \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u63D0\u4F9B\u9AD8\u6027\u80FD\u548C\u7B80\u5355\u6613\u7528\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u670D\u52A1</p><p>\u4E5F\u662FSpring Cloud Alibaba\u63D0\u4F9B\u7684\u7EC4\u4EF6</p><p>Seata\u5B98\u65B9\u6587\u6863</p><p>https://seata.io/zh-cn/</p><p>\u66F4\u591A\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7\u5B98\u65B9\u6587\u6863\u83B7\u53D6</p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981seata" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981seata" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981Seata</h2><p>\u6211\u4EEC\u9996\u5148\u7B80\u5355\u590D\u4E60\u4E00\u4E0B\u4E8B\u52A1\u7684\u6982\u5FF5</p><blockquote><p>\u4E8B\u52A1\u76844\u4E2A\u7279\u6027:ACID\u7279\u6027</p><ul><li>\u539F\u5B50\u6027</li><li>\u4E00\u81F4\u6027</li><li>\u9694\u79BB\u6027</li><li>\u6C38\u4E45\u6027</li></ul></blockquote><p>\u6211\u4EEC\u518D\u4E1A\u52A1\u4E2D,\u5FC5\u987B\u4FDD\u8BC1\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u539F\u5B50\u6027,\u4E5F\u5C31\u662F\u5F53\u524D\u4E1A\u52A1\u7684\u6240\u6709\u6570\u636E\u5E93\u64CD\u4F5C\u8981\u4E48\u90FD\u6210\u529F,\u8981\u4E48\u90FD\u5931\u8D25</p><p>\u4E4B\u524D\u6211\u4EEC\u4F7F\u7528Spring\u58F0\u660E\u5F0F\u4E8B\u52A1\u6765\u89E3\u51B3\u672C\u5730\u7684\u4E8B\u52A1\u95EE\u9898</p><p>\u4F46\u662F\u73B0\u5728\u662F\u5FAE\u670D\u52A1\u73AF\u5883,\u4E00\u4E2A\u4E1A\u52A1\u53EF\u80FD\u6D89\u53CA\u591A\u4E2A\u6A21\u5757\u7684\u6570\u636E\u5E93\u64CD\u4F5C</p><p>\u8FD9\u79CD\u60C5\u51B5\u5C31\u9700\u8981\u4E13\u95E8\u7684\u5FAE\u670D\u52A1\u72B6\u6001\u4E0B\u89E3\u51B3\u4E8B\u52A1\u95EE\u9898\u7684&quot;\u5206\u5E03\u5F0F\u4E8B\u52A1&quot;\u89E3\u51B3\u65B9\u6848</p><p>\u6211\u4EEC\u5B66\u4E60\u7684Seata\u5C31\u662F\u8FD9\u6837\u7684\u4EA7\u54C1</p><p><strong>Seata\u5C06\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86 AT\u3001TCC\u3001SAGA \u548C XA \u4E8B\u52A1\u6A21\u5F0F,\u4E3A\u7528\u6237\u6253\u9020\u4E00\u7AD9\u5F0F\u7684\u5206\u5E03\u5F0F\u89E3\u51B3\u65B9\u6848\u3002</strong></p><h2 id="seata\u7684\u8FD0\u884C\u539F\u7406-at\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#seata\u7684\u8FD0\u884C\u539F\u7406-at\u6A21\u5F0F" aria-hidden="true">#</a> Seata\u7684\u8FD0\u884C\u539F\u7406(AT\u6A21\u5F0F)</h2><p>\u89C2\u5BDF\u4E0B\u9762\u4E8B\u52A1\u6A21\u578B</p><p><img src="'+p+'" alt="seata\u8FD0\u884C\u539F\u7406\uFF08at\uFF09.png"></p><p>\u4E0A\u9762\u7ED3\u6784\u662F\u6BD4\u8F83\u5178\u578B\u7684\u8FDC\u7A0B\u8C03\u7528\u7ED3\u6784</p><p>\u5982\u679Caccount\u64CD\u4F5C\u6570\u636E\u5E93\u5931\u8D25\u9700\u8981\u8BA9order\u6A21\u5757\u548Cstorage\u6A21\u5757\u64A4\u9500(\u56DE\u6EDA)\u64CD\u4F5C</p><p>\u58F0\u660E\u5F0F\u4E8B\u52A1\u4E0D\u80FD\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C</p><p>\u9700\u8981Seata\u6765\u89E3\u51B3</p><p>\u89E3\u51B3\u6A21\u578B\u5982\u4E0B</p><p><img src="'+e+`" alt="seata\u6A21\u578B.png"></p><p>Seata\u6784\u6210\u90E8\u5206\u5305\u542B</p><ul><li>\u4E8B\u52A1\u534F\u8C03\u5668TC</li><li>\u4E8B\u52A1\u7BA1\u7406\u5668TM</li><li>\u8D44\u6E90\u7BA1\u7406\u5668RM</li></ul><p>\u6211\u4EEC\u9879\u76EE\u4F7F\u7528AT(\u81EA\u52A8)\u6A21\u5F0F\u5B8C\u6210\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u89E3\u51B3</p><p>AT\u6A21\u5F0F\u8FD0\u884C\u8FC7\u7A0B</p><p>1.\u4E8B\u52A1\u7684\u53D1\u8D77\u65B9(TM)\u4F1A\u5411\u4E8B\u52A1\u534F\u8C03\u5668(TC)\u7533\u8BF7\u4E00\u4E2A\u5168\u5C40\u4E8B\u52A1id,\u5E76\u4FDD\u5B58</p><p>2.Seata\u4F1A\u7BA1\u7406\u4E8B\u52A1\u4E2D\u6240\u6709\u76F8\u5173\u7684\u53C2\u4E0E\u65B9\u7684\u6570\u636E\u6E90,\u5C06\u6570\u636E\u64CD\u4F5C\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u955C\u50CF\u90FD\u4FDD\u5B58\u5728undo_log\u8868\u4E2D,\u8FD9\u4E2A\u8868\u662Fseata\u6846\u67B6\u89C4\u5B9A\u7684,\u65B9\u4FBF\u63D0\u4EA4(commit)\u6216\u56DE\u6EDA(roll back)</p><p>3.\u4E8B\u52A1\u7684\u53D1\u8D77\u65B9(TM)\u4F1A\u8FDE\u540C\u5168\u5C40id\u4E00\u8D77\u901A\u8FC7\u8FDC\u7A0B\u8C03\u7528\u8FD0\u884C\u8D44\u6E90\u7BA1\u7406\u5668(RM)\u4E2D\u7684\u65B9\u6CD5</p><p>4.\u8D44\u6E90\u7BA1\u7406\u5668(RM)\u63A5\u6536\u5230\u5168\u5C40id,\u5E76\u8FD0\u884C\u6307\u5B9A\u7684\u65B9\u6CD5,\u5C06\u8FD0\u884C\u7684\u72B6\u6001\u540C\u6B65\u5230\u4E8B\u52A1\u534F\u8C03\u5668(TC)</p><p>5.\u5982\u679C\u8FD0\u884C\u6574\u4F53\u6CA1\u6709\u53D1\u751F\u5F02\u5E38,\u53D1\u8D77\u65B9(TM)\u4F1A\u901A\u8FC7\u4E8B\u52A1\u534F\u8C03\u5668\u901A\u77E5\u6240\u6709\u5206\u652F,\u5C06\u672C\u6B21\u4E8B\u52A1\u6240\u6709\u5BF9\u6570\u636E\u5E93\u7684\u5F71\u54CD\u771F\u6B63\u751F\u6548,\u53CD\u4E4B\u5982\u679C\u4EFB\u4F55\u4E00\u4E2ARM\u8FD0\u884C\u53D1\u751F\u5F02\u5E38,\u90A3\u4E48\u90FD\u4F1A\u901A\u77E5\u4E8B\u52A1\u534F\u8C03\u5668,\u518D\u7531\u4E8B\u52A1\u534F\u8C03\u5668\u901A\u77E5\u6240\u6709\u5206\u652F,\u56DE\u6EDA\u6570\u636E\u4E2D\u7684\u6570\u636E</p><p>\u56DE\u6EDA\u65F6\u53EF\u4EE5\u4F7F\u7528undo_log\u8868\u4E2D\u7684\u6570\u636E\u6765\u5B9E\u73B0\u56DE\u6EDA</p><h2 id="\u5176\u4ED6\u6A21\u5F0F\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6A21\u5F0F\u7B80\u4ECB" aria-hidden="true">#</a> \u5176\u4ED6\u6A21\u5F0F\u7B80\u4ECB</h2><p>AT\u6A21\u5F0F\u8FD0\u884C\u6709\u4E00\u4E2A\u975E\u5E38\u660E\u663E\u7684\u6761\u4EF6</p><p>\u5C31\u662F\u4E8B\u52A1\u5206\u652F\u90FD\u5FC5\u987B\u662F\u64CD\u4F5C\u5173\u7CFB\u578B\u6570\u636E\u5E93(mysql\\MariaDB\\Oracle)</p><p>\u4F46\u662F\u5982\u679C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u6709\u64CD\u4F5C\u4F8B\u5982Redis\u8FD9\u6837\u7684\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u65F6\u5C31\u4E0D\u80FD\u4F7F\u7528AT\u6A21\u5F0F\u4E86</p><p>\u9664\u4E86AT\u6A21\u5F0F\u4E4B\u5916\u8FD8\u6709TCC\u3001SAGA \u548C XA \u4E8B\u52A1\u6A21\u5F0F</p><p><strong>TCC\u6A21\u5F0F</strong></p><p>\u8FD9\u4E2A\u6A21\u5F0F\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u81EA\u5DF1\u7F16\u5199\u4EE3\u7801\u8FDB\u884C\u4E8B\u52A1\u7684\u63D0\u4EA4\u548C\u56DE\u6EDA</p><p>\u6211\u4EEC\u9700\u8981\u5728\u5404\u4E2A\u5206\u652F\u4E1A\u52A1\u903B\u8F91\u5C42\u4EE3\u7801\u4E2D\u7F16\u5199\u4E00\u7EC4\u4E09\u4E2A\u65B9\u6CD5(prepare\\commit\\rollback)</p><p>prepare:\u51C6\u5907 commit:\u63D0\u4EA4 rollback:\u56DE\u6EDA</p><p>prepare\u65B9\u6CD5\u662F\u65E0\u8BBA\u4E8B\u52A1\u6210\u529F\u4E0E\u5426\u90FD\u4F1A\u8FD0\u884C\u7684\u4EE3\u7801</p><p>commit\u5F53\u6574\u4F53\u4E8B\u52A1\u8FD0\u884C\u6210\u529F\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5</p><p>rollback\u5F53\u6574\u4F53\u4E8B\u52A1\u8FD0\u884C\u5931\u8D25\u662F\u8FD0\u884C\u7684\u65B9\u6CD5</p><p>\u4F18\u70B9:\u867D\u7136\u4EE3\u7801\u662F\u81EA\u5DF1\u5199\u7684,\u4F46\u662F\u4E8B\u52A1\u6574\u4F53\u63D0\u4EA4\u6216\u56DE\u6EDA\u7684\u673A\u5236\u4ECD\u7136\u53EF\u7528</p><p>\u7F3A\u70B9:\u6BCF\u4E2A\u4E1A\u52A1\u90FD\u8981\u7F16\u51993\u4E2A\u65B9\u6CD5\u6765\u5BF9\u5E94,\u4EE3\u7801\u5197\u4F59,\u800C\u4E14\u4E1A\u52A1\u5165\u4FB5\u91CF\u5927</p><p><strong>SAGA\u6A21\u5F0F</strong></p><p>SAGA\u6A21\u5F0F\u7684\u601D\u60F3\u662F\u7F16\u5199\u4E00\u4E2A\u7C7B,\u5F53\u6307\u5B9A\u7684\u4E8B\u52A1\u53D1\u751F\u95EE\u9898\u65F6,\u8FD0\u884CSAGA\u7F16\u5199\u7684\u56DE\u6EDA\u7C7B</p><p>\u8FD9\u6837\u7F16\u5199\u4EE3\u7801\u4E0D\u5F71\u54CD\u5DF2\u7ECF\u7F16\u5199\u597D\u7684\u4E1A\u52A1\u903B\u8F91\u4EE3\u7801</p><p>\u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u5DF2\u7ECF\u7F16\u5199\u5B8C\u6210\u7684\u8001\u4EE3\u7801</p><p>\u7F3A\u70B9\u662F\u6BCF\u4E2A\u4E8B\u52A1\u5206\u652F\u90FD\u8981\u7F16\u5199\u4E00\u4E2A\u7C7B\u6765\u56DE\u6EDA\u4E1A\u52A1,</p><p>\u7C7B\u6570\u91CF\u591A,\u5F00\u53D1\u91CF\u5927</p><p>XA\u6A21\u5F0F</p><p>\u652F\u6301XA\u534F\u8BAE\u7684\u6570\u636E\u5E93\u5206\u5E03\u5F0F\u4E8B\u52A1,\u4F7F\u7528\u6BD4\u8F83\u5C11</p><h1 id="\u4F7F\u7528seata" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528seata" aria-hidden="true">#</a> \u4F7F\u7528Seata</h1><h2 id="\u914D\u7F6Eseata" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eseata" aria-hidden="true">#</a> \u914D\u7F6ESeata</h2><p>cart\\stock\\order\u90FD\u662F\u5177\u5907\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u6A21\u5757\u914D\u7F6E\u8FC7\u7A0B\u5982\u4E0B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- seata\u548CSpringBoot\u6574\u5408\u4F9D\u8D56 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Seata\u5B8C\u6210\u5206\u5E03\u5F0F\u4E8B\u52A1\u9700\u8981\u7684\u4E24\u4E2A\u76F8\u5173\u4F9D\u8D56(Seata\u9700\u8981\u4E0B\u9762\u4E24\u4E2A\u4F9D\u8D56\u4E2D\u7684\u8D44\u6E90) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>pagehelper-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u4FEE\u6539application-dev.yml</p><p>\u4EE3\u7801\u5982\u4E0B</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> csmall_group <span class="token comment">#\u5B9A\u4E49\u5206\u7EC4\u540D\u79F0</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>
      <span class="token key atrule">csmall_group</span><span class="token punctuation">:</span> default  <span class="token comment"># \u4F7F\u7528seata\u9ED8\u8BA4\u4E8B\u52A1\u914D\u7F6E</span>
    <span class="token key atrule">grouplist</span><span class="token punctuation">:</span> 
      <span class="token key atrule">default</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8091</span> <span class="token comment"># 8091\u662Fseata\u9ED8\u8BA4\u7684\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u540C\u4E00\u4E2A\u4E8B\u52A1\u5FC5\u987B\u5728\u540C\u4E00\u4E2Atx-service-group\u4E2D</p><p>\u540C\u65F6\u6307\u5B9A\u76F8\u540C\u7684seata\u5730\u5740\u548C\u7AEF\u53E3</p><p>business\u6A21\u5757\u914D\u7F6E\u66F4\u7B80\u5355</p><p>\u56E0\u4E3A\u5B83\u662F\u670D\u52A1\u7684\u53D1\u8D77\u8005,\u4E0D\u9700\u8981\u6570\u636E\u5E93\u64CD\u4F5C,\u6240\u4EE5\u914D\u7F6E\u66F4\u7B80\u5355</p><p>\u4F46\u662F\u5B83\u662FTM\u7684\u89D2\u8272,\u4E0D\u914D\u7F6E\u80AF\u5B9A\u662F\u4E0D\u884C\u7684</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application-dev.yml\u662F\u4E00\u6837\u7684</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> csmall_group <span class="token comment">#\u5B9A\u4E49\u5206\u7EC4\u540D\u79F0</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>
      <span class="token key atrule">csmall_group</span><span class="token punctuation">:</span> default  <span class="token comment"># \u4F7F\u7528seata\u9ED8\u8BA4\u4E8B\u52A1\u914D\u7F6E</span>
    <span class="token key atrule">grouplist</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8091</span> <span class="token comment"># 8091\u662Fseata\u9ED8\u8BA4\u7684\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>seata\u6807\u8BB0\u4E8B\u52A1\u7684\u5F00\u59CB\u6709\u4E00\u4E2A\u4E13\u7528\u7684\u6CE8\u89E3</p><p>\u5728\u4E8B\u52A1\u6A21\u578B\u4E2D,TM(\u4E8B\u52A1\u7BA1\u7406\u5668)\u7684\u4E1A\u52A1\u903B\u8F91\u5C42\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u8FD9\u4E2A\u6CE8\u89E3\u5373\u53EF</p><p>business\u7684\u4E1A\u52A1\u903B\u8F91\u5C42buy\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BusinessServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">IBusinessService</span> <span class="token punctuation">{</span>

    <span class="token comment">// Dubbo\u5728\u83B7\u53D6order\u6A21\u5757\u7684\u4E1A\u52A1\u903B\u8F91\u5C42\u5B9E\u73B0\u7C7B</span>
    <span class="token annotation punctuation">@DubboReference</span>
    <span class="token keyword">private</span> <span class="token class-name">IOrderService</span> dubboOrderService<span class="token punctuation">;</span>

    <span class="token comment">// \u4E00\u65E6\u7F16\u5199\u8FD9\u4E2A\u6CE8\u89E3@GlobalTransactional</span>
    <span class="token comment">// seata\u5C31\u4F1A\u5C06\u8FD9\u4E2A\u65B9\u6CD5\u5F53\u505A\u4E00\u4E2A\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u8D77\u70B9</span>
    <span class="token comment">// \u4E4B\u540E\u6240\u6709\u8FDC\u7A0BDubbo\u8C03\u7528\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u8981\u4E48\u90FD\u6210\u529F,\u8981\u4E48\u90FD\u5931\u8D25</span>
    <span class="token annotation punctuation">@GlobalTransactional</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6682\u65F6\u6A21\u62DF\u4E00\u4E2A\u4E0B\u5355\u4E1A\u52A1</span>
        <span class="token comment">// \u521B\u5EFAOrderAddDTO\u7C7B,\u8D4B\u503C\u5E76\u8F93\u51FA\u4FE1\u606F</span>
        <span class="token class-name">OrderAddDTO</span> orderAddDTO<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">OrderAddDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderAddDTO<span class="token punctuation">.</span><span class="token function">setCommodityCode</span><span class="token punctuation">(</span><span class="token string">&quot;PC100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderAddDTO<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token string">&quot;UU100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderAddDTO<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderAddDTO<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u56E0\u4E3A\u6CA1\u6709\u6301\u4E45\u5C42,\u53EA\u80FD\u8F93\u51FA\u4E00\u4E0B,\u8868\u793A\u8FD0\u884C\u6B63\u5E38</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u65B0\u589E\u8BA2\u5355\u4FE1\u606F\u4E3A:{}&quot;</span><span class="token punctuation">,</span>orderAddDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// dubbo\u8C03\u7528\u751F\u6210\u8BA2\u5355\u65B9\u6CD5</span>
        dubboOrderService<span class="token punctuation">.</span><span class="token function">orderAdd</span><span class="token punctuation">(</span>orderAddDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4E3A\u4E86\u9A8C\u8BC1\u6211\u4EECseata\u662F\u6709\u6548\u679C\u7684</span>
        <span class="token comment">// \u5728\u5F53\u524D\u4E1A\u52A1\u903B\u8F91\u5C42\u65B9\u6CD5\u4E2D\u968F\u673A\u53D1\u751F\u5F02\u5E38</span>
        <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u89C2\u5BDF\u6B63\u5E38\u8FD0\u884C\u65F6\u6570\u636E\u662F\u5426\u63D0\u4EA4\u548C\u53D1\u751F\u5F02\u5E38\u662F\u6570\u636E\u662F\u5426\u56DE\u6EDA\u6765\u5224\u65ADseata\u662F\u5426\u5DE5\u4F5C</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CoolSharkServiceException</span><span class="token punctuation">(</span><span class="token class-name">ResponseCode</span><span class="token punctuation">.</span>INTERNAL_SERVER_ERROR<span class="token punctuation">,</span>
                                            <span class="token string">&quot;\u53D1\u751F\u968F\u673A\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8seata" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8seata" aria-hidden="true">#</a> \u542F\u52A8seata</h2><p>seata\u4E5F\u662Fjava\u5F00\u53D1\u7684,\u542F\u52A8\u65B9\u5F0F\u548Cnacos\u5F88\u50CF</p><p>\u53EA\u662F\u542F\u52A8\u547D\u4EE4\u4E0D\u540C</p><p>\u89E3\u538B\u540E\u8DEF\u5F84\u4E0D\u8981\u7528\u4E2D\u6587,\u4E0D\u8981\u7528\u7A7A\u683C</p><p>\u4E5F\u662F\u89E3\u538B\u4E4B\u540E\u7684bin\u76EE\u5F55\u4E0B</p><p><img src="`+c+`" alt="seata\u7684bin\u76EE\u5F55.png"></p><p>\u5728\u8DEF\u5F84\u4E0A\u8F93\u5165cmd\u8FDB\u5165dos\u7A97\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>G:\\pgm\\seata\\seata-server-1.4.2\\bin&gt;seata-server.bat -h 127.0.0.1 -m file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8981\u60F3\u542F\u52A8,\u9700\u8981\u542F\u52A8\u6240\u67094\u4E2A\u670D\u52A1cart\\stock\\order\\business</p><p>\u5229\u7528knife4j\u8BBF\u95EEbusiness\u6A21\u5757,\u5426\u5219\u65E0\u6CD5\u89E6\u53D1\u4E8B\u52A1\u6548\u679C,business\u6A21\u5757\u662Fseata\u4E8B\u52A1\u7684\u542F\u52A8</p><p><strong>\u5728windows\u7CFB\u7EDF\u4E2D\u8FD0\u884Cseata\u53EF\u80FD\u51FA\u73B0\u4E0D\u7A33\u5B9A\u7684\u60C5\u51B5,\u91CD\u542Fseata\u5373\u53EF\u89E3\u51B3</strong></p><p>\u6839\u636E\u662F\u5426\u53D1\u751F\u968F\u673A\u5F02\u5E38,\u6765\u5224\u65ADseata\u662F\u5426\u6709\u6548</p><h3 id="seata\u4F7F\u7528\u5E38\u89C1\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#seata\u4F7F\u7528\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a> Seata\u4F7F\u7528\u5E38\u89C1\u9519\u8BEF</h3><p>Seata\u5728\u5F00\u59CB\u5DE5\u4F5C\u65F6,\u4F1A\u5C06\u65B9\u6CD5\u76F8\u5173\u5BF9\u8C61\u5E8F\u5217\u5316\u540E\u4FDD\u5B58\u5728\u5BF9\u5E94\u6570\u636E\u5E93\u7684undo_log\u8868\u4E2D</p><p>\u4F46\u662FSeata\u6211\u4EEC\u5E8F\u5217\u5316\u7684\u65B9\u5F0F\u652F\u6301\u5F88\u591A\u4E2D,\u5E38\u89C1\u7684jackson\u683C\u5F0F\u5E8F\u5217\u5316\u7684\u60C5\u51B5\u4E0B,\u4E0D\u652F\u6301java\u5BF9\u8C61LocalDataTime\u7C7B\u578B\u7684\u5E8F\u5217\u5316,\u5E8F\u5217\u5316\u8FD0\u884C\u65F6\u4F1A\u53D1\u9001\u9519\u8BEF:</p><p><img src="`+l+`" alt="seata\u5E38\u89C1\u9519\u8BEF1.png"></p><p>\u5982\u679C\u89C1\u5230\u8FD9\u6837\u7684\u9519\u8BEF, \u5C31\u662F\u56E0\u4E3Ajackson\u4E0D\u80FD\u5E8F\u5217\u5316LocalDataTime\u5BFC\u81F4\u7684</p><p>\u8981\u60F3\u89E3\u51B3,\u4E24\u65B9\u9762\u601D\u8DEF,</p><p>1.\u5C06\u5E8F\u5217\u5316\u8FC7\u7A0B\u4E2DLocalDataTime\u7C7B\u578B\u8F6C\u6362\u4E3ADate</p><p>2.\u5C06Seata\u5E8F\u5217\u5316\u8F6C\u6362\u4E3Akryo\u7C7B\u578B,\u4F46\u662F\u9700\u8981\u5728pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4F9D\u8D56(\u6211\u4EEC\u7684\u9879\u76EE\u4E2D\u6709)</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u89E3\u51B3seata\u5E8F\u5217\u5316\u95EE\u9898--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-serializer-kryo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yml\u6587\u4EF6\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#seata\u670D\u52A1\u7AEF</span>
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> csmall_group
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>
      <span class="token key atrule">csmall_group</span><span class="token punctuation">:</span> default
    <span class="token key atrule">grouplist</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>my.server.addr<span class="token punctuation">}</span><span class="token punctuation">:</span><span class="token number">8091</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">undo</span><span class="token punctuation">:</span>
      <span class="token key atrule">log-serialization</span><span class="token punctuation">:</span> kryo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,99),u=[i];function d(r,k){return a(),s("div",null,u)}var v=n(o,[["render",d],["__file","Seata.html.vue"]]);export{v as default};
