import{_ as n,o as a,c as s,a as p}from"./app.53c4fa75.js";var t="/images/nacos\u6CE8\u518C\u4E2D\u5FC3.png",e="/images/nacos-bin\u76EE\u5F55.png",c="/images/nacos\u6253\u5F00\u9875\u9762.png",o="/images/\u6CE8\u518C\u670D\u52A1.png",l="/images/nacos\u6570\u636E\u7ED3\u6784.png",i="/images/nacos\u4E2D\u521B\u5EFA\u547D\u540D\u7A7A\u95F4.png",u="/images/nacos\u6DFB\u52A0\u914D\u7F6E.png",d="/images/nacos\u6DFB\u52A0\u6A21\u5757\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E.png",r="/images/springcloud\u9879\u76EE\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u987A\u5E8F.png";const g={},k=p('<h1 id="nacos\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#nacos\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> Nacos\u6CE8\u518C\u4E2D\u5FC3</h1><h2 id="\u4EC0\u4E48nacos" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48nacos" aria-hidden="true">#</a> \u4EC0\u4E48Nacos</h2><p>Nacos\u662FSpring Cloud Alibaba\u63D0\u4F9B\u7684\u4E00\u4E2A\u8F6F\u4EF6</p><p>\u8FD9\u4E2A\u8F6F\u4EF6\u4E3B\u8981\u5177\u6709\u6CE8\u518C\u4E2D\u5FC3\u548C\u914D\u7F6E\u4E2D\u5FC3\u7684\u529F\u80FD</p><p>\u6211\u4EEC\u5148\u5B66\u4E60\u5B83\u6CE8\u518C\u4E2D\u5FC3\u7684\u529F\u80FD</p><p>\u5FAE\u670D\u52A1\u4E2D\u6240\u6709\u9879\u76EE\u90FD\u5FC5\u987B\u6CE8\u518C\u5230\u6CE8\u518C\u4E2D\u5FC3\u624D\u80FD\u6210\u4E3A\u5FAE\u670D\u52A1\u7684\u4E00\u90E8\u5206</p><p>\u6CE8\u518C\u4E2D\u5FC3\u548C\u4F01\u4E1A\u4E2D\u7684\u4EBA\u529B\u8D44\u6E90\u7BA1\u7406\u90E8\u95E8\u6709\u76F8\u4F3C</p><p><img src="'+t+'" alt="nacos\u6CE8\u518C\u4E2D\u5FC3.png"></p><h2 id="nacos\u7684\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#nacos\u7684\u542F\u52A8" aria-hidden="true">#</a> Nacos\u7684\u542F\u52A8</h2><p>\u6211\u4EEC\u8981\u542F\u52A8Nacos\u5FC5\u987B\u4FDD\u8BC1\u5F53\u524D\u7CFB\u7EDF\u914D\u7F6E\u4E86java\u73AF\u5883\u53D8\u91CF</p><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u8981\u73AF\u5883\u53D8\u91CF\u4E2D,\u6709JAVA_HOME\u7684\u914D\u7F6E,\u6307\u5411\u5B89\u88C5jdk\u7684\u8DEF\u5F84</p><p>\u786E\u5B9A\u4E86\u652F\u6301java\u540E,\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u8DEF\u5F84\u4E0B\u8F7D</p><p>https://github.com/alibaba/nacos/releases/download/1.4.3/nacos-server-1.4.3.zip</p><p>\u56FD\u5916\u7F51\u7AD9,\u4E0B\u8F7D\u56F0\u96BE\u53EF\u4EE5\u591A\u8BD5\u51E0\u6B21</p><p>\u6216\u76F4\u63A5\u5411\u9879\u76EE\u7ECF\u7406\u8001\u5E08\u7D22\u53D6</p><h2 id="\u5B89\u88C5\u542F\u52A8nacos" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u542F\u52A8nacos" aria-hidden="true">#</a> \u5B89\u88C5\u542F\u52A8Nacos</h2><p>\u5C06\u4E0B\u8F7D\u597D\u7684Nacos\u538B\u7F29\u5305\u89E3\u538B</p><p>\u5C06\u538B\u7F29\u5305\u89E3\u538B(\u6CE8\u610F\u4E0D\u8981\u6709\u4E2D\u6587\u8DEF\u5F84\u6216\u7A7A\u683C)</p><p>\u6253\u5F00\u89E3\u538B\u5F97\u5230\u7684\u6587\u4EF6\u5939\u540E\u6253\u5F00bin\u76EE\u5F55\u4F1A\u6709\u5982\u4E0B\u5185\u5BB9</p><p><img src="'+e+`" alt="nacos-bin\u76EE\u5F55.png"></p><p>cmd\u7ED3\u5C3E\u7684\u6587\u4EF6\u662Fwindows\u7248\u672C\u7684</p><p>sh\u7ED3\u5C3E\u7684\u6587\u4EF6\u662Flinux\u548Cmac\u7248\u672C\u7684</p><p>startup\u662F\u542F\u52A8\u6587\u4EF6,shutdown\u662F\u505C\u6B62\u6587\u4EF6</p><p><strong>Windows\u4E0B\u542F\u52A8Nacos\u4E0D\u80FD\u76F4\u63A5\u53CC\u51FBcmd\u6587\u4EF6</strong></p><p>\u9700\u8981\u8FDB\u5165dos\u547D\u4EE4\u8FD0\u884C</p><p>\u5728\u5F53\u524D\u8D44\u6E90\u7BA1\u7406\u5668\u5730\u5740\u680F\u8F93\u5165cmd</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>G:\\pgm\\nacos\\bin&gt;startup.cmd -m standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-m\u662F\u8BBE\u7F6E\u542F\u52A8\u65B9\u5F0F\u53C2\u6570</p><p>standalone\u7FFB\u8BD1\u4E3A\u6807\u51C6\u7684\u5B64\u72EC\u7684</p><p>\u610F\u601D\u662F\u5355\u673A\u6A21\u5F0F\u6807\u51C6\u8FD0\u884C</p><p>\u8FD0\u884C\u6210\u529F\u9ED8\u8BA4\u5360\u75288848\u7AEF\u53E3,\u5E76\u4E14\u5728\u4EE3\u7801\u4E2D\u63D0\u793A</p><p>\u5982\u679C\u4E0D\u8F93\u5165standalone\u8FD0\u884C\u4F1A\u5931\u8D25</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>startup.cmd -m standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9A8C\u8BC1Nacos\u7684\u8FD0\u884C\u72B6\u6001</p><p>\u6253\u5F00\u6D4F\u89C8\u5668\u8F93\u5165http://localhost:8848/nacos</p><p><img src="`+c+`" alt="nacos\u6253\u5F00\u9875\u9762.png"></p><p>\u5982\u679C\u662F\u9996\u6B21\u8BBF\u95EE,\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u754C\u9762</p><p>\u767B\u5F55\u7CFB\u7EDF</p><p>\u7528\u6237\u540D:nacos</p><p>\u5BC6\u7801:nacos</p><p>\u767B\u5F55\u4E4B\u540E\u53EF\u4EE5\u8FDB\u5165\u540E\u53F0\u5217\u8868 \u4E0D\u80FD\u5173\u95ED\u542F\u52A8nacos\u7684dos\u7A97\u53E3 \u6211\u4EEC\u8981\u8BA9\u6211\u4EEC\u7F16\u5199\u7684\u9879\u76EE\u6CE8\u518C\u5230Nacos,\u624D\u80FD\u771F\u6B63\u662F\u5FAE\u670D\u52A1\u9879\u76EE \u5728\u9879\u76EE\u7684pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4F9D\u8D56:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- Spring Cloud\u5BB6\u65CF --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-cloud.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Spring Cloud Alibaba --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-cloud-alibaba.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u5230nacos" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u5230nacos" aria-hidden="true">#</a> \u6CE8\u518C\u5230Nacos</h2><p>\u6211\u4EEC\u7684\u9879\u76EE\u8981\u60F3\u79F0\u4E3A\u5FAE\u670D\u52A1\u9879\u76EE\u5FC5\u987B\u6CE8\u518C\u5230nacos</p><ul><li>\u9996\u5148\u5728\u9879\u76EE\u7684pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4F9D\u8D56</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7136\u540E\u5728application.yml\u4E2D\u6DFB\u52A0\u5F53\u524D\u9879\u76EE\u5BF9nacos\u6CE8\u518C\u7684\u914D\u7F6E</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5F53\u524DSpringboot\u9879\u76EE\u7684\u540D\u79F0,\u7528\u4F5C\u6CE8\u518C\u4E2D\u5FC3\u670D\u52A1\u7684\u540D\u79F0</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>business
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5B9A\u4E49nacos\u8FD0\u884C\u7684\u8DEF\u5F84</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u505A\u5B8C\u4E0A\u9762\u7684\u914D\u7F6E</p><p>\u6211\u4EEC<strong>\u5728\u4FDD\u8BC1nacos\u5DF2\u7ECF\u542F\u52A8\u7684\u524D\u63D0\u4E0B</strong>,\u6211\u4EEC\u542F\u52A8\u9879\u76EE</p><p>\u542F\u52A8\u4E4B\u540E,business\u4E00\u5207\u529F\u80FD\u6B63\u5E38,\u800C\u4E14\u53EF\u4EE5\u5728nacos\u7684\u670D\u52A1\u5217\u8868\u4E2D\u770B\u5230nacos-business\u7684\u540D\u79F0 <img src="`+o+`" alt="\u6CE8\u518C\u670D\u52A1.png"></p><h2 id="nacos\u5FC3\u8DF3\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#nacos\u5FC3\u8DF3\u673A\u5236" aria-hidden="true">#</a> Nacos\u5FC3\u8DF3\u673A\u5236</h2><p>Nacos\u5185\u90E8\u6CE8\u518C\u7684\u670D\u52A1\u5206\u4E3A\u4E24\u5927\u7C7B:</p><ul><li>\u4E34\u65F6\u5B9E\u4F8B(\u9ED8\u8BA4)</li><li>\u6301\u4E45\u5316\u5B9E\u4F8B(\u6C38\u4E45\u5B9E\u4F8B)</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027\u6765\u786E\u5B9A\u5B83\u662F\u4E34\u65F6\u8FD8\u662F\u6C38\u4E45</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cloud</span><span class="token punctuation">:</span>
  <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
    <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
      <span class="token comment"># ephemeral\u8BBE\u7F6E\u5F53\u524D\u9879\u76EE\u542F\u52A8\u65F6\u6CE8\u518C\u5230nacos\u7684\u7C7B\u578B true(\u9ED8\u8BA4):\u4E34\u65F6\u5B9E\u4F8B false:\u6C38\u4E45\u5B9E\u4F8B</span>
      <span class="token key atrule">ephemeral</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E34\u65F6\u5B9E\u4F8B\u548C\u6C38\u4E45\u5B9E\u4F8B\u7684\u533A\u522B:</p><ul><li><strong>\u4E34\u65F6\u5B9E\u4F8B</strong> \u9ED8\u8BA4\u60C5\u51B5\u4E0B,\u542F\u52A8\u670D\u52A1\u540E,\u6BCF\u96945\u79D2\u4F1A\u5411nacos\u53D1\u9001\u4E00\u4E2A&quot;\u5FC3\u8DF3\u5305&quot;,\u8FD9\u4E2A\u5FC3\u8DF3\u5305\u4E2D\u5305\u542B\u4E86\u5F53\u524D\u670D\u52A1\u7684\u57FA\u672C\u4FE1\u606F,Nacos\u6536\u5230\u8FD9\u4E2A&quot;\u5FC3\u8DF3\u5305&quot;\u5982\u679C\u53D1\u73B0\u8FD9\u4E2A\u670D\u52A1\u7684\u4FE1\u606F\u4E0D\u5728\u6CE8\u518C\u5217\u8868\u4E2D,\u5C31\u8FDB\u884C\u6CE8\u518C,\u5982\u679C\u8FD9\u4E2A\u670D\u52A1\u7684\u4FE1\u606F\u5728\u6CE8\u518C\u5217\u8868\u4E2D\u5C31\u8868\u660E\u8FD9\u4E2A\u670D\u52A1\u8FD8\u662F\u5065\u5EB7\u7684,\u5982\u679CNacos15\u79D2\u5185\u6CA1\u63A5\u6536\u5230\u67D0\u4E2A\u670D\u52A1\u7684\u5FC3\u8DF3\u5305,Nacos\u4F1A\u5C06\u8FD9\u4E2A\u670D\u52A1\u6807\u8BB0\u4E3A\u4E0D\u5065\u5EB7\u7684\u72B6\u6001,\u5982\u679C30\u79D2\u5185\u6CA1\u6709\u63A5\u6536\u5230\u8FD9\u4E2A\u670D\u52A1\u7684\u5FC3\u8DF3\u5305,Nacos\u4F1A\u5C06\u8FD9\u4E2A\u670D\u52A1\u4ECE\u6CE8\u518C\u5217\u8868\u4E2D\u5254\u9664,\u8FD9\u4E9B\u65F6\u95F4\u90FD\u662F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4FEE\u6539\u7684.</li><li><strong>\u6301\u4E45\u5316\u5B9E\u4F8B(\u6C38\u4E45\u5B9E\u4F8B)</strong> \u6301\u4E45\u5316\u5B9E\u4F8B\u542F\u52A8\u65F6\u5411nacos\u6CE8\u518C,nacos\u4F1A\u5BF9\u8FD9\u4E2A\u5B9E\u4F8B\u8FDB\u884C\u6301\u4E45\u5316\u5904\u7406,\u5FC3\u8DF3\u5305\u7684\u89C4\u5219\u548C\u4E34\u65F6\u5B9E\u4F8B\u4E00\u81F4,\u53EA\u662F\u4E0D\u4F1A\u5C06\u8BE5\u670D\u52A1\u4ECE\u5217\u8868\u4E2D\u5254\u9664</li></ul><h3 id="\u5404\u7C7B\u578B\u4F7F\u7528\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u5404\u7C7B\u578B\u4F7F\u7528\u65F6\u673A" aria-hidden="true">#</a> \u5404\u7C7B\u578B\u4F7F\u7528\u65F6\u673A</h3><p>\u4E00\u822C\u60C5\u51B5\u4E0B,\u6211\u4EEC\u521B\u5EFA\u7684\u670D\u52A1\u90FD\u662F\u4E34\u65F6\u5B9E\u4F8B</p><p>\u53EA\u6709\u9879\u76EE\u7684\u4E3B\u5E72\u4E1A\u52A1\u624D\u4F1A\u8BBE\u7F6E\u4E3A\u6C38\u4E45\u5B9E\u4F8B</p><h1 id="\u914D\u7F6E\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E2D\u5FC3" aria-hidden="true">#</a> \u914D\u7F6E\u4E2D\u5FC3</h1><h2 id="\u4EC0\u4E48\u662F\u914D\u7F6E\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u914D\u7F6E\u4E2D\u5FC3" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u914D\u7F6E\u4E2D\u5FC3</h2><p>\u6240\u8C13\u914D\u7F6E\u4E2D\u5FC3:\u5C06\u9879\u76EE\u9700\u8981\u7684\u914D\u7F6E\u4FE1\u606F\u4FDD\u5B58\u5728\u914D\u7F6E\u4E2D\u5FC3,\u9700\u8981\u8BFB\u53D6\u65F6\u76F4\u63A5\u4ECE\u914D\u7F6E\u4E2D\u5FC3\u8BFB\u53D6,\u65B9\u4FBF\u914D\u7F6E\u7BA1\u7406\u7684\u5FAE\u670D\u52A1\u5DE5\u5177</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u90E8\u5206yml\u6587\u4EF6\u7684\u5185\u5BB9\u4FDD\u5B58\u5728\u914D\u7F6E\u4E2D\u5FC3</p><p>\u4E00\u4E2A\u5FAE\u670D\u52A1\u9879\u76EE\u6709\u5F88\u591A\u5B50\u6A21\u5757,\u8FD9\u4E9B\u5B50\u6A21\u5757\u53EF\u80FD\u5728\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A,\u5982\u679C\u6709\u4E00\u4E9B\u7EDF\u4E00\u7684\u4FEE\u6539,\u6211\u4EEC\u8981\u9010\u4E00\u4FEE\u6539\u8FD9\u4E9B\u5B50\u6A21\u5757\u7684\u914D\u7F6E,\u7531\u4E8E\u5B83\u4EEC\u662F\u4E0D\u540C\u7684\u670D\u52A1\u5668,\u6240\u4EE5\u4FEE\u6539\u8D77\u6765\u5F88\u9EBB\u70E6</p><p>\u5982\u679C\u5C06\u8FD9\u4E9B\u5B50\u6A21\u5757\u7684\u914D\u7F6E\u96C6\u4E2D\u5728\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A,\u6211\u4EEC\u4FEE\u6539\u8FD9\u4E2A\u670D\u52A1\u5668\u7684\u914D\u7F6E\u4FE1\u606F,\u5C31\u76F8\u5F53\u4E8E\u4FEE\u6539\u4E86\u6240\u6709\u5B50\u6A21\u5757\u7684\u4FE1\u606F,\u8FD9\u4E2A\u670D\u52A1\u5668\u5C31\u662F\u914D\u7F6E\u4E2D\u5FC3</p><p><strong>\u4F7F\u7528\u914D\u7F6E\u4E2D\u5FC3\u7684\u539F\u56E0\u5C31\u662F\u80FD\u591F\u8FBE\u5230\u9AD8\u6548\u7684\u4FEE\u6539\u5404\u6A21\u5757\u914D\u7F6E\u7684\u76EE\u7684</strong></p><h2 id="\u914D\u7F6E\u4E2D\u5FC3\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E2D\u5FC3\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u914D\u7F6E\u4E2D\u5FC3\u7684\u4F7F\u7528</h2><p>Nacos\u65E2\u53EF\u4EE5\u505A\u6CE8\u518C\u4E2D\u5FC3,\u4E5F\u53EF\u4EE5\u505A\u914D\u7F6E\u4E2D\u5FC3</p><p>Nacos\u505A\u914D\u7F6E\u4E2D\u5FC3,\u652F\u6301\u5404\u79CD\u683C\u5F0F\\\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6</p><p>properties\\yaml(yml)\\txt\\json\\xml\u7B49</p><h2 id="nacos\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#nacos\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> Nacos\u6570\u636E\u7ED3\u6784</h2><p><img src="`+l+'" alt="nacos\u6570\u636E\u7ED3\u6784.png"></p><p>namespace:\u547D\u540D\u7A7A\u95F4</p><p>group:\u5206\u7EC4</p><p>Service/DataId:\u5177\u4F53\u6570\u636E</p><p><strong>\u547D\u540D\u7A7A\u95F4</strong></p><p>namespace\u662FNacos\u63D0\u4F9B\u7684\u6700\u5927\u7684\u6570\u636E\u7ED3\u6784</p><p>\u4E00\u4E2ANacos\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u547D\u540D\u7A7A\u95F4</p><p>\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u80FD\u591F\u5305\u542B\u591A\u4E2Agroup</p><p>\u5728nacos\u4E2D\u521B\u5EFA\u547D\u540D\u7A7A\u95F4</p><p><img src="'+i+'" alt="nacos\u4E2D\u521B\u5EFA\u547D\u540D\u7A7A\u95F4.png"></p><p>\u5728\u4E0A\u56FE\u8FDE\u63A5\u7684\u4F4D\u7F6E\u53EF\u4EE5\u65B0\u589E\u547D\u540D\u7A7A\u95F4,\u586B\u5199\u547D\u540D\u7A7A\u95F4\u540D\u79F0\u548C\u63CF\u8FF0\u5373\u53EF</p><p>Nacos\u6709\u9ED8\u8BA4\u7684\u547D\u540D\u7A7A\u95F4public\u4E0D\u80FD\u5220\u9664\u548C\u4FEE\u6539</p><p>\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4\u540E,\u6211\u4EEC\u5728Nacos\u4E2D\u6CE8\u518C\u7684\u670D\u52A1\u6216\u6DFB\u52A0\u7684\u914D\u7F6E\u5C31\u53EF\u4EE5\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E86</p><p>\u56E0\u4E3A\u591A\u4E2A\u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u9694\u79BB\u9879\u76EE,\u6BCF\u4E2A\u9879\u76EE\u4F7F\u7528\u81EA\u5DF1\u7684\u547D\u540D\u7A7A\u95F4,\u4E92\u4E0D\u5E72\u6270</p><p><strong>\u5206\u7EC4</strong></p><p>\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u5206\u7EC4,\u8FDB\u884C\u8FDB\u4E00\u6B65\u5206\u79BB</p><p>\u6211\u4EEC\u4F7F\u7528\u65F6,\u5982\u679C\u4E0D\u9700\u8981\u8FDB\u4E00\u6B65\u5206\u7EC4,\u63A8\u8350\u4F7F\u7528group\u540D\u79F0:DEFAULF_GROUP</p><p><strong>\u670D\u52A1\u6216\u914D\u7F6E</strong></p><p>\u786E\u5B9A\u4E86\u547D\u540D\u7A7A\u95F4\u548C\u5206\u7EC4\u4E4B\u540E</p><p>\u6211\u4EEC\u5C31\u53EF\u4EE5\u6DFB\u52A0\u670D\u52A1\u6216\u914D\u7F6E\u4E86</p><p>\u4E4B\u524D\u6211\u4EEC\u542F\u52A8\u7684\u5404\u79CD\u6A21\u5757\u90FD\u662F\u670D\u52A1,\u4E4B\u524D\u90FD\u662F\u9ED8\u8BA4\u4FDD\u5B58\u5728public\u547D\u540D\u7A7A\u95F4\u4E2D</p><p>\u4E0B\u9762\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528\u914D\u7F6E\u4E2D\u5FC3\u7684\u529F\u80FD,\u5728\u547D\u540D\u7A7A\u95F4\u4E2D\u6DFB\u52A0\u914D\u7F6E</p><p>\u6DFB\u52A0\u914D\u7F6E\u5C31\u662F\u8BBE\u7F6EDataId</p><p>\u5B9E\u9645\u5728Nacos\u4E2D\u5B9A\u4F4D\u4E00\u4E2A\u914D\u7F6E\u7684\u7ED3\u6784\u4E3A</p><p>Namespace&gt;Group&gt;DataId</p><h2 id="nacos\u6DFB\u52A0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nacos\u6DFB\u52A0\u914D\u7F6E" aria-hidden="true">#</a> Nacos\u6DFB\u52A0\u914D\u7F6E</h2><p>Nacos\u9996\u9875-&gt;\u914D\u7F6E\u7BA1\u7406-&gt;\u914D\u7F6E\u5217\u8868-&gt;\u6DFB\u52A0\u914D\u7F6E(\u53F3\u4FA7\u7684\u5927&quot;\uFF0B&quot;\u53F7)</p><p><img src="'+u+'" alt="nacos\u6DFB\u52A0\u914D\u7F6E.png"></p><p>\u6DFB\u52A0cart\u6A21\u5757\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E</p><p><img src="'+d+`" alt="nacos\u6DFB\u52A0\u6A21\u5757\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E.png"></p><p>\u70B9\u51FB\u53D1\u5E03,nacos\u5C31\u4FDD\u5B58\u8FD9\u4E2A\u914D\u7F6E\u4E86</p><h2 id="\u9879\u76EE\u8BFB\u53D6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u8BFB\u53D6\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u8BFB\u53D6\u914D\u7F6E</h2><p>\u5982\u679C\u8981\u8BFB\u53D6\u914D\u7F6E\u4E2D\u5FC3\u7684\u4FE1\u5FC3,\u9996\u5148\u8981\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--  \u914D\u7F6E\u4E2D\u5FC3\u7684\u4F9D\u8D56  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--  \u652F\u6301SpringCloud\u52A0\u8F7D\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\u7684\u4F9D\u8D56   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u50CF\u5176\u4ED6\u7A0B\u5E8F\u4E00\u6837,\u5728\u6DFB\u52A0\u5B8C\u4F9D\u8D56\u4E4B\u540E,\u8FD8\u9700\u8981\u6DFB\u52A0yml\u6587\u4EF6\u7684\u914D\u7F6E</p><p>\u6211\u4EEC\u4F7F\u7528\u8FC7application.properties\u548Capplication.yml\u4E24\u79CD\u914D\u7F6E\u6587\u4EF6\u6DFB\u52A0\u914D\u7F6E</p><p>\u5B9E\u9645\u4E0A\u8FD9\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6\u52A0\u8F7D\u662F\u6709\u987A\u5E8F\u7684</p><p>\u5148\u52A0\u8F7Dyml</p><p>\u540E\u52A0\u8F7Dproperties</p><p>\u5982\u679C\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6\u540C\u65F6\u8BBE\u7F6E\u4E86\u540C\u4E00\u4E2A\u5C5E\u6027,\u540E\u52A0\u8F7D\u7684\u8986\u76D6\u6389\u5148\u52A0\u8F7D\u7684</p><p>\u5728SpringCloud\u73AF\u5883\u4E0B,\u5B9E\u9645\u4E0A\u53EF\u4EE5\u518D\u591A\u51FA\u4E00\u7EC4\u914D\u7F6E\u6587\u4EF6</p><p>\u5B83\u4EEC\u662Fbootstarp.yml\u548Cbootstarp.properties</p><p>\u8FD9\u4E00\u7EC4\u7684\u52A0\u8F7D\u65F6\u673A\u6574\u4F53\u65E9\u4E8Eapplication\u8FD9\u4E00\u7EC4</p><p>\u6240\u4EE5\u4E00\u4E2ASpringCloud\u9879\u76EE\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u987A\u5E8F\u6700\u7EC8\u53EF\u80FD\u5982\u4E0B\u56FE</p><p><img src="`+r+`" alt="springcloud\u9879\u76EE\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u987A\u5E8F.png"></p><p>bootstrap\u8FD9\u7EC4\u914D\u7F6E\u6587\u4EF6,\u4E00\u822C\u7528\u4E8E\u914D\u7F6E\u52A0\u8F7D\u4E00\u4E9B\u7CFB\u7EDF\u7EA7\u522B\u7684\u914D\u7F6E,\u8FD9\u4E9B\u914D\u7F6E\u7684\u7279\u5F81\u662F\u4E00\u822C\u4E0D\u4F1A\u8F7B\u6613\u4FEE\u6539</p><p>\u6211\u4EEC\u518D\u540E\u9762\u7684\u5B66\u4E60\u8FC7\u7A0B\u4E2D,\u4F1A\u5C06\u914D\u7F6E\u4E2D\u5FC3\u7684\u4FE1\u606F,\u52A0\u8F7D\u5230\u8FD9\u7EC4\u914D\u7F6E\u6587\u4EF6\u4E2D</p><p><strong>\u5FC5\u987B\u662FSpringCloud\u9879\u76EE,\u624D\u80FD\u652F\u6301bootstrap\u8FD9\u7EC4\u914D\u7F6E\u6587\u4EF6\u7684\u52A0\u8F7D</strong></p><p>\u652F\u6301\u8FD9\u7EC4\u914D\u7F6E\u7684\u4F9D\u8D56\u5C31\u662F\u4E0A\u9762\u6211\u4EEC\u6DFB\u52A0\u7684\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--  \u652F\u6301SpringCloud\u52A0\u8F7D\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\u7684\u4F9D\u8D56   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610FSpringCloud\u7248\u672C\u65E9\u4E8E2020\u4E4B\u524D,\u6DFB\u52A0\u7684\u4E0D\u662F\u8FD9\u4E2A\u4F9D\u8D56,\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2</p><p>\u4E0B\u9762\u6211\u4EEC\u5C31\u5728cart-webapi\u9879\u76EE\u4E2Dresources\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0bootstarp.yml\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token comment">#  \u6307\u5B9A\u914D\u7F6E\u4E2D\u5FC3\u7684\u4F4D\u7F6E</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 192.168.137.150<span class="token punctuation">:</span><span class="token number">8848</span>
        <span class="token comment"># \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u7684\u7EC4\u540D(\u547D\u540D\u7A7A\u95F4\u9ED8\u8BA4public\u4E0D\u9700\u8981\u6307\u5B9A)</span>
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
        <span class="token comment"># \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\u7684\u540E\u7F00\u540D</span>
        <span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u52A0\u8F7D[\u670D\u52A1\u5668\u540D].[\u540E\u7F00\u540D]\u4E3ADataId\u7684\u914D\u7F6E</span>
        <span class="token comment"># \u5F53\u524D\u9879\u76EE\u540D\u79F0\u4E3Anacos-cart\u6240\u4EE5\u9ED8\u8BA4\u52A0\u8F7D\u7684DataId\u4E3A:nacos-cart.yaml</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u5207\u987A\u5229,\u90A3\u4E48\u662F\u53EF\u4EE5\u901A\u8FC7knife4j\u6D4B\u8BD5\u64CD\u4F5C\u8FDE\u63A5\u6570\u636E\u5E93\u7684</p><p>\u6211\u4EEC\u53EF\u4EE5\u65B0\u589E\u8D2D\u7269\u8F66\u4FE1\u606F,\u6216\u5220\u9664\u8D2D\u7269\u8F66\u4FE1\u606F\u540E\u7B80\u5355\u6570\u636E\u5E93\u662F\u5426\u6709\u5BF9\u5E94\u64CD\u4F5C</p><p>\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u5220\u9664\u4E86\u672C\u5730yml\u6587\u4EF6\u4E2D\u6570\u636E\u5E93\u7684\u914D\u7F6E,\u6240\u4EE5,\u5B83\u80FD\u8FDE\u63A5\u64CD\u4F5C\u6570\u636E\u5E93\u4E00\u5B9A\u662F\u914D\u7F6E\u4E2D\u5FC3\u751F\u6548\u4E86!</p>`,129),m=[k];function v(b,h){return a(),s("div",null,m)}var x=n(g,[["render",v],["__file","Nacos.html.vue"]]);export{x as default};
