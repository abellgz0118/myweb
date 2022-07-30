import{_ as n,o as s,c as a,a as e}from"./app.53c4fa75.js";var t="/images/\u6A21\u62DFbean\u6D4B\u8BD5.png";const p={},c=e(`<h1 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h1><h2 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B\uFF1A</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5355\u5143\u6D4B\u8BD5\uFF1A\u7528\u4E8E\u6D4B\u8BD5\u4E00\u4E2A\u529F\u80FD\u5355\u5143\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u4E1A\u52A1\u5C42\u7684<span class="token punctuation">(</span>\u4E0D\u5E26\u6301\u4E45\u5C42<span class="token punctuation">)</span>\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528<span class="token class-name">Spring</span>\u5BB9\u5668
\u96C6\u6210\u6D4B\u8BD5\uFF1A\u7528\u4E8E\u6D4B\u8BD5\u591A\u5C42\uFF0C\u6D4B\u8BD5\u4E1A\u52A1\u5C42<span class="token operator">+</span>\u6301\u4E45\u5C42\u5C5E\u4E8E\u96C6\u6210\uFF0C\u6D4B\u8BD5\u63A7\u5236\u5668<span class="token operator">+</span>\u4E1A\u52A1\u5C42<span class="token operator">+</span>\u6301\u4E45\u5C42\u4E5F\u662F\u5C5E\u4E8E\u96C6\u6210\u6D4B\u8BD5\u3002\u901A\u5E38\u96C6\u6210\u6D4B\u8BD5\u90FD\u9700\u8981\u4F7F\u7528<span class="token class-name">SPring</span>\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="junit5\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#junit5\u6D4B\u8BD5" aria-hidden="true">#</a> Junit5\u6D4B\u8BD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u4ECE<span class="token class-name">SpringBoot2</span><span class="token number">.2</span>\u7248\u672C\u5F00\u59CB\u7684\u9ED8\u8BA4<span class="token class-name">JUnit</span>
\u9700\u8981<span class="token class-name">Java8</span>\u73AF\u5883\uFF0C\u53EF\u4EE5\u4F7F\u7528lambda\u8868\u8FBE\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="junit5\u5E38\u7528\u6D4B\u8BD5\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#junit5\u5E38\u7528\u6D4B\u8BD5\u6CE8\u89E3" aria-hidden="true">#</a> Junit5\u5E38\u7528\u6D4B\u8BD5\u6CE8\u89E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span> <span class="token operator">-</span> \u653E\u5728\u6D4B\u8BD5\u65B9\u6CD5\u4E0A\u65B9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u542F\u52A8\u8BE5\u65B9\u6CD5
<span class="token annotation punctuation">@BeforeEach</span> <span class="token operator">--</span> \u4F5C\u7528\u4E8E\u6D4B\u8BD5\u65B9\u6CD5\u4E0A\u65B9\uFF0C\u8868\u793A\u5728\u6BCF\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u6267\u884C\u4E4B\u524D\u90FD\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5
<span class="token annotation punctuation">@AfterEach</span> <span class="token operator">--</span> \u4F5C\u7528\u4E8E\u6D4B\u8BD5\u65B9\u6CD5\u4E0A\u65B9\uFF0C\u8868\u793A\u5728\u6BCF\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u6267\u884C\u4E4B\u540E\u90FD\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5
<span class="token annotation punctuation">@BeforeAll</span>  <span class="token operator">--</span> \u4F5C\u7528\u4E8E\u65B9\u6CD5\u4E0A\u65B9\uFF0C\u8868\u793A\u5728\u6240\u6709\u6D4B\u8BD5\u65B9\u6CD5\u6267\u884C\u4E4B\u524D\u6267\u884C\uFF0C\u4E14\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u8981\u6C42\u8BE5\u65B9\u6CD5\u4E3A<span class="token keyword">static</span>
<span class="token annotation punctuation">@AfterAll</span>  <span class="token operator">--</span> \u4F5C\u7528\u4E8E\u65B9\u6CD5\u4E0A\u65B9\uFF0C\u8868\u793A\u5728\u6240\u6709\u6D4B\u8BD5\u65B9\u6CD5\u6267\u884C\u4E4B\u540E\u6267\u884C\uFF0C\u4E14\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u8981\u6C42\u8BE5\u65B9\u6CD5\u4E3A<span class="token keyword">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65AD\u8A00-\u81EA\u52A8\u5316\u6D4B\u8BD5\u4F1A\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u65AD\u8A00-\u81EA\u52A8\u5316\u6D4B\u8BD5\u4F1A\u4F7F\u7528" aria-hidden="true">#</a> \u65AD\u8A00 -- \u81EA\u52A8\u5316\u6D4B\u8BD5\u4F1A\u4F7F\u7528</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span> \u9759\u6001\u5BFC\u5165\u65AD\u8A00\u5E93
  <span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token number">2.</span> \u65B9\u6CD5\uFF1A
  <span class="token function">assertEquals</span><span class="token punctuation">(</span>expect<span class="token punctuation">,</span>actual<span class="token punctuation">)</span>
  <span class="token function">assertNull</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token function">assertNotNull</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token function">assertTrue</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token function">assertFalse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock\u6D4B\u8BD5-\u5E94\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u4E2D\u7684-\u6A21\u62DF\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#mock\u6D4B\u8BD5-\u5E94\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u4E2D\u7684-\u6A21\u62DF\u6D4B\u8BD5" aria-hidden="true">#</a> mock\u6D4B\u8BD5\uFF0C\u5E94\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u4E2D\u7684 -- \u6A21\u62DF\u6D4B\u8BD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5982\u679C\u4E0D\u60F3\u8BA9\u5BF9\u4E1A\u52A1\u5C42\u7684\u6D4B\u8BD5\u5BF9\u6570\u636E\u5E93\u7684\u771F\u5B9E\u6570\u636E\u9020\u6210\u5F71\u54CD\uFF0C\u6B64\u65F6\u53EF\u4EE5\u91C7\u7528mock\u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u5BF9\u6301\u4E45\u5C42\u5BF9\u8C61\u8FDB\u884C\u6A21\u62DF\u5E76\u8BAD\u7EC3\uFF0C\u4ECE\u800C\u89E3\u51B3\u5BF9\u6570\u636E\u5E93\u7684\u5F71\u54CD\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+t+`" alt="\u6A21\u62DFbean\u6D4B\u8BD5.png"></p><h3 id="mock\u6D4B\u8BD5\u4F7F\u7528\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#mock\u6D4B\u8BD5\u4F7F\u7528\u7684\u6B65\u9AA4" aria-hidden="true">#</a> mock\u6D4B\u8BD5\u4F7F\u7528\u7684\u6B65\u9AA4</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span> \u9759\u6001\u5BFC\u5165\u6A21\u62DF\u5E93
  <span class="token keyword">static</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>mockito<span class="token punctuation">.</span></span>Mockito</span><span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token number">2.</span> \u83B7\u53D6\u6A21\u62DF\u5BF9\u8C61
  <span class="token function">mock</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token punctuation">)</span> <span class="token operator">--</span> \u5F97\u5230\u5BF9\u5E94\u7684mockBean\u5BF9\u8C61
<span class="token number">3.</span> \u5BF9mock <span class="token class-name">Bean</span>\u8FDB\u884C\u8BAD\u7EC3
  <span class="token function">when</span><span class="token punctuation">(</span>userDao<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4.</span> \u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\uFF0C\u6839\u636E\u8BAD\u7EC3\u7684\u7ED3\u679C\u8FDB\u884C\u4E00\u4E9B\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF08\u65AD\u8A00\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring\u96C6\u6210\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#spring\u96C6\u6210\u6D4B\u8BD5" aria-hidden="true">#</a> Spring\u96C6\u6210\u6D4B\u8BD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5728\u6D4B\u8BD5\u7C7B\u4E0A\u653E\u6DFB\u52A0\u6CE8\u89E3
  <span class="token annotation punctuation">@ExtendWith</span><span class="token punctuation">(</span><span class="token class-name">SpringExtension</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
  
\u6216\u8005
  <span class="token annotation punctuation">@SpringJUnitConfig</span><span class="token punctuation">(</span><span class="token class-name">Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
  
\u5219\u53EF\u4EE5\u4F7F\u7528\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u6CE8\u5165\u5BF9\u8C61\uFF0C\u76F4\u63A5\u4F7F\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u6CE8\u610F\u70B9\uFF1A\u4E0A\u4E0B\u6587</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u9700\u8981\uFF0C\u53EF\u4EE5\u5728\u67D0\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0C\u9009\u62E9\u5173\u95ED\u4E0A\u4E0B\u6587\uFF0C\u4F7F\u7528\u6CE8\u89E3<span class="token annotation punctuation">@DirtiesContext</span>\u5373\u53EF\uFF0C\u5176\u4ED6\u6D4B\u8BD5\u65B9\u6CD5\u6267\u884C\u65F6\uFF0C\u4F1A\u91CD\u65B0\u83B7\u53D6\u65B0\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61
    
\u5982\u4F55\u6D4B\u8BD5\u4E0A\u4E0B\u6587\u5BF9\u8C61\u662F\u4E00\u4E2A\u8FD8\u662F\u4E24\u4E2A\uFF1F
    \u5199\u4E24\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u5206\u522B\u8F93\u51FA\u540C\u4E00\u4E2A<span class="token class-name">Bean</span>\u5BF9\u8C61\uFF0C\u89C2\u5BDF\u8F93\u51FA\u7684\u5F15\u7528
    	<span class="token operator">-</span> \u7ED3\u679C\u4E00\u81F4\uFF0C\u8BF4\u660E\u662F\u4ECE\u540C\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u83B7\u53D6
    	<span class="token operator">-</span> \u7ED3\u679C\u4E0D\u4E00\u81F4\uFF0C\u8BF4\u660E\u662F\u4ECE\u4E24\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u83B7\u53D6\u5230\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="springboot\u96C6\u6210\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#springboot\u96C6\u6210\u6D4B\u8BD5" aria-hidden="true">#</a> SpringBoot\u96C6\u6210\u6D4B\u8BD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SpringBoot</span>\u8FDB\u884C\u96C6\u6210\u6D4B\u8BD5\uFF0C\u4F7F\u7528\u6CE8\u89E3<span class="token annotation punctuation">@SpringBootTest</span>\u5373\u53EF\uFF0C\u65E0\u9700\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5176\u4ED6\u64CD\u4F5C\u548C<span class="token class-name">Spring</span>\u96C6\u6210\u6D4B\u8BD5\u4E00\u81F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u4E1A\u52A1\u5C42+\u6301\u4E45\u5C42\u7684\u96C6\u6210\u6D4B\u8BD5</p></li><li><p>web\u6D4B\u8BD5</p><ul><li>TestRestTemplate\u96C6\u6210\u6D4B\u8BD5 - \u542F\u52A8web\u5BB9\u5668</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span> <span class="token class-name">SpringBoot</span>\u6D4B\u8BD5\u6846\u67B6\u4F1A\u81EA\u52A8\u542F\u52A8\u5185\u5D4C\u670D\u52A1\u5668
<span class="token number">2.</span> \u901A\u8FC7<span class="token class-name">SpringBoot</span>\u81EA\u52A8\u914D\u7F6E\u7684<span class="token class-name">TestRestTemplate</span> <span class="token class-name">Bean</span>\u5BF9\u8C61\u6765\u53D1\u8D77\u8BF7\u6C42
    <span class="token operator">-</span> \u53D1\u9001get\u8BF7\u6C42\uFF0C\u8C03\u7528\u65B9\u6CD5 <span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token operator">-</span> \u53D1\u9001post\u8BF7\u6C42\uFF0C\u8C03\u7528<span class="token function">postForObject</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token number">3.</span> web\u96C6\u6210\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0CwebEnvironment\u652F\u6301\u4EE5\u4E0B\u6A21\u5F0F
    RANDOM_PORT<span class="token punctuation">,</span> DEFINED_PORT<span class="token punctuation">,</span> MOCK<span class="token punctuation">,</span> NONE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u6CE8\u610F\u70B9\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u53D1\u9001get\u8BF7\u6C42\uFF1A
    <span class="token comment">//get\u8BF7\u6C42\u4F20\u53C2\u662F\u5728\u8BF7\u6C42\u540E\u901A\u8FC7\uFF1F\u62FC\u63A5\u53C2\u6570</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;/users/login?userName={username}&amp;pwd={password}&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> mes <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;\u767B\u5F55\u6210\u529F\uFF01&quot;</span><span class="token punctuation">,</span>mes<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u53D1\u9001post\u8BF7\u6C42\uFF1A
     <span class="token comment">//\u5B9A\u4E49\u76F8\u5BF9\u8DEF\u5F84</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;/users/regist&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//post\u8BF7\u6C42\u4F20\u53C2\uFF0C\u53C2\u6570\u5FC5\u987B\u662FMultiValueMap\u7C7B\u578B</span>
        <span class="token class-name">MultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedMultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u53D1\u8D77post\u8BF7\u6C42</span>
        <span class="token class-name">String</span> mes <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>map<span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CE8\u518C\u6210\u529F\uFF01&quot;</span><span class="token punctuation">,</span>mes<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,20),o=[c];function i(l,u){return s(),a("div",null,o)}var d=n(p,[["render",i],["__file","Spring-Test.html.vue"]]);export{d as default};
