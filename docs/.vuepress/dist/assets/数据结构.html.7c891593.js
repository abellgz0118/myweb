import{_ as n,o as a,c as s,a as e}from"./app.53c4fa75.js";var l="/images/\u53CC\u5411\u94FE\u8868.png",p="/images/\u9012\u5F52.png",t="/images/\u6811.png",i="/images/\u4E8C\u53C9\u6392\u5E8F\u6811.png",o="/images/\u904D\u5386\u4E8C\u53C9\u6811.png",c="/images/\u5931\u8861\u4E8C\u53C9\u6811.png",r="/images/avl\u6811.png",u="/images/\u7EA2\u9ED1\u6811.png",d="/images/\u6563\u5217\u8868.png";const k={},m=e('<h2 id="\u53CC\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CC\u5411\u94FE\u8868</h2><h3 id="\u4EC0\u4E48\u662F\u53CC\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u53CC\u5411\u94FE\u8868" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u53CC\u5411\u94FE\u8868</h3><blockquote><p>\u53CC\u5411\u94FE\u8868\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u7531\u8BFA\u5E72\u4E2A\u8282\u70B9\u6784\u6210\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u8282\u70B9\u5747\u6709\u4E09\u90E8\u5206\u6784\u6210\uFF0C\u5206\u522B\u662F\u524D\u9A71\u63A5\u8282\u70B9\uFF0C\u5143\u7D20\uFF0C\u540E\u7EE7\u8282\u70B9\u3002\u53CC\u5411\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u5728\u5185\u5B58\u4E2D\u662F\u6E38\u79BB\u72B6\u6001 {.is-info}</p></blockquote><p><img src="'+l+`" alt="\u53CC\u5411\u94FE\u8868.png"></p><ul><li><p>\u53CC\u5411\u94FE\u8868\u7684\u5E94\u7528\uFF1ALinkedList</p><blockquote><p>\u53CC\u5411\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u90E8\u5206\u4FDD\u5B58\u7684\u90FD\u662F\u5BF9\u8C61\uFF0C\u5B9E\u9645\u4E0A\u4FDD\u5B58\u7684\u662F\u5143\u7D20\u5BF9\u8C61\u7684\u5730\u5740\u3002</p></blockquote></li></ul><h3 id="\u5BF9\u53CC\u5411\u94FE\u8868\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u53CC\u5411\u94FE\u8868\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9\u53CC\u5411\u94FE\u8868\u7684\u64CD\u4F5C</h3><ul><li>\u6DFB\u52A0\u5143\u7D20 <ul><li>add(E) -- \u5728\u94FE\u8868\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20 \u5C06\u5143\u7D20\u5C01\u88C5\u5230\u8282\u70B9\u4E2D\uFF0C\u521B\u5EFA\u65B0\u8282\u70B9\uFF0C\u8BA9\u65B0\u8282\u70B9\u548C\u524D\u4E00\u4E2A\u8282\u70B9\u5EFA\u7ACB\u53CC\u5411\u94FE\u8868\u7684\u5173\u7CFB\u3002</li><li>add(int index,E e) -- \u5728\u6307\u5B9A\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20 \u5176\u8FC7\u7A0B\u5B9E\u9645\u4E0A\u5C31\u662F\u65AD\u5F00\u94FE\uFF0C\u91CD\u65B0\u6784\u5EFA\u94FE\u7684\u8FC7\u7A0B</li></ul></li><li>\u5220\u9664\u5143\u7D20 <ul><li>remove(int index) -- \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20 \u5176\u8FC7\u7A0B\u5B9E\u9645\u4E0A\u4F9D\u7136\u662F\u65AD\u5F00\u94FE\uFF0C\u91CD\u65B0\u6784\u5EFA\u94FE\u7684\u8FC7\u7A0B</li></ul></li><li>\u67E5\u8BE2\u5143\u7D20 <ul><li>get(int index) - E \u67E5\u8BE2\u65B9\u5F0F\uFF1A\u5BF9\u534A\u67E5\u627E \u82E5\u67E5\u627E\u7684\u4F4D\u7F6E\u5C0F\u4E8E\u94FE\u8868\u957F\u5EA6\u7684\u4E00\u534A\uFF0C\u5219\u4ECE\u5934\u8282\u70B9\u5F00\u59CB\u5FAA\u5E8F\u67E5\u627E\uFF1B\u5426\u5219\uFF0C\u4ECE\u672A\u63A5\u5730\u7231\u4F60\u5F00\u59CB\u9006\u5E8F\u67E5\u627E\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002</li></ul></li></ul><blockquote><p>\u6CE8\u610F\u70B9\uFF1A\u53CC\u5411\u94FE\u8868\u4E2D\u6CA1\u6709\u4E0B\u6807\uFF0Cindex\u8868\u793A\u7684\u662F\u8282\u70B9\u4ECE\u5934\u5F00\u59CB\u7684\u987A\u5E8F\u4F4D\u7F6E\uFF0Cindiex\u5E76\u662F\u4E0D\u53CC\u5411\u94FE\u8868\u4E2D\u7684\u5C5E\u6027 {.is-warning}</p></blockquote><ul><li>\u4FEE\u6539\u5143\u7D20 <ul><li>set(in index,E e) -- \u5C06\u65B0\u5143\u7D20\u66FF\u6362\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20</li></ul></li></ul><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><blockquote><p>\u9012\u5F52\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u5E94\u7528\u5728\u8FB9\u6052\u4E2D\u4F53\u73B0\u4E3A\u65B9\u6CD5\u8C03\u7528\u65B9\u6CD5\u672C\u8EAB\u3002{.is-info}</p></blockquote><h3 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h3><ul><li>\u5B9E\u73B0\u6C42\u67D0\u4E2A\u6570\u7684\u9636\u4E58</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token number">1</span>           
<span class="token number">2</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span>         <span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span><span class="token operator">!</span>
<span class="token number">3</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span>       <span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">!</span>
<span class="token number">4</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span>     <span class="token number">4</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">!</span>
<span class="token number">5</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">4</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span>   <span class="token number">5</span><span class="token operator">*</span><span class="token number">4</span><span class="token operator">!</span>
    
    
<span class="token comment">//f\u65B9\u6CD5\u7528\u4E8E\u6C42\u51FA\u67D0\u4E2A\u6570\u7684\u9636\u4E58   </span>
<span class="token keyword">long</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>
       <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> n<span class="token operator">*</span><span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="\u9012\u5F52.png"></p><ul><li>\u6590\u6CE2\u90A3\u5951\u6570\u5217</li></ul><blockquote><p>\u6590\u6CE2\u90A3\u5951\u6570\u5217\uFF08Fibonacci\uFF09\u662F\u8FD9\u6837\u4E00\u7EC4\u6570\u5217\uFF1A1 1 2 3 5 8 13 21 34 55... \u7B2C\u4E00\u4F4D\u548C\u7B2C\u4E8C\u4F4D\u4E3A1\uFF0C\u4ECE\u7B2C\u4E09\u4F4D\u5F00\u59CB\uFF0C\u6BCF\u4E00\u4F4D\u7684\u503C\u7B49\u4E8E\u524D\u4E24\u4F4D\u4E4B\u548C{.is-info}</p></blockquote><ol><li>\u6C42\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217\u4E2D\u7B2Cn\u4E2A\u4F4D\u7F6E\u7684\u503C\u662F\u591A\u5C11</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5C06\u6590\u6CE2\u90A3\u5951\u6570\u5217\u524Dn\u4E2A\u6570\u5B57\u8F93\u51FA</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u6CE8\u610F\u70B9" aria-hidden="true">#</a> \u9012\u5F52\u6CE8\u610F\u70B9</h3><ol><li>\u9012\u5F52\u5FC5\u987B\u6709\u51FA\u53E3\uFF0C\u5426\u5219\u4F1A\u6808\u5185\u5B58\u6EA2\u51FA\uFF08SOF\uFF09</li><li>\u9012\u5F52\u662F\u6709\u6DF1\u5EA6\u7684\uFF0C\u82E5\u6DF1\u5EA6\u592A\u6DF1\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210SOF</li></ol><p>\u6808\u5185\u5B58\u56DE\u987E\uFF1A \u7528\u6CD5\uFF1A\u5F53\u8C03\u7528\u67D0\u4E2A\u65B9\u5F0F\u65F6\uFF0C\u4F1A\u5728\u6808\u4E2D\u4E3A\u8FD9\u4E2A\u65B9\u6CD5\u5206\u914D\u5C5E\u4E8E\u8FD9\u4E2A\u65B9\u6CD5\u7684\u6808\u5E27\u533A\u57DF\uFF0C\u67D0\u4E2A\u65B9\u6CD5\u7684\u6808\u5E27\u4E2D\u4FDD\u5B58\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u7684\u6240\u6709\u5C40\u90E8\u53D8\u91CF</p><h2 id="\u6811-tree" tabindex="-1"><a class="header-anchor" href="#\u6811-tree" aria-hidden="true">#</a> \u6811 - tree</h2><ul><li>\u6811\u662F\u6570\u636E\u7ED3\u6784\uFF0C\u53C8\u82E5\u5E72\u4E2A\u8282\u70B9\u6784\u6210\uFF0C\u5176\u4E2D\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u6839\u8282\u70B9\u3002</li><li>\u6811\u7684\u672F\u8BED\uFF1A <ul><li>\u9AD8\u5EA6\uFF1A\u6811\u7684\u5C42\u6B21</li><li>\u6839\u8282\u70B9\uFF1A\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A</li><li>\u5EA6\uFF1A\u6811\u79CD\u8282\u70B9\u7684\u6700\u5927\u5B50\u8282\u70B9\u6570</li><li>\u53F6\u5B50\u8282\u70B9\uFF1A\u5EA6\u4E3A0\u7684\u8282\u70B9 <img src="`+t+'" alt="\u6811.png"></li></ul></li></ul><h2 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h2><ul><li>\u5EA6\u4E3A2\u7684\u6811\uFF0C\u5219\u4E3A\u4E8C\u53C9\u6811</li></ul><h3 id="\u4E8C\u53C9\u6392\u5E8F\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6392\u5E8F\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6392\u5E8F\u6811</h3><blockquote><p>\u4E8C\u53C9\u6392\u5E8F\u6811\uFF08Binary Sort Tree\uFF09,\u53C8\u79F0\u4E3A\u4E8C\u53C9\u67E5\u627E\u6811\uFF08Binary Search Tree\uFF09\uFF0C\u4EA6\u79F0\u4E8C\u53C9\u641C\u7D22\u6811\u3002 \u662F\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4E00\u7C7B\u3002\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u67E5\u8BE2\u6548\u7387\u6BD4\u94FE\u8868\u7ED3\u6784\u8981\u9AD8\u3002{.is-info}</p></blockquote><ul><li><p>\u7279\u70B9</p><ol><li>\u5143\u7D20\u4E0D\u80FD\u91CD\u590D</li><li>\u5DE6\u5B50\u6811\u4E2D\u7684\u8282\u70B9\u5747\u5C0F\u4E8E\u6839\u8282\u70B9</li><li>\u53F3\u5B50\u6811\u79CD\u7684\u8282\u70B9\u5747\u5927\u4E8E\u6839\u8282\u70B9 <img src="'+i+`" alt="\u4E8C\u53C9\u6392\u5E8F\u6811.png"></li></ol></li><li><p>\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\u67E5\u8BE2\u6548\u7387\u9AD8\u4E8E\u5355\u5411\u94FE\u8868 \u5355\u5411\u94FE\u8868\u4E2D\uFF0C\u67E5\u8BE2\u5143\u7D20\uFF0C\u6700\u5DEE\u7684\u60C5\u51B5\u8981\u67E5\u8BE2n\u6B21\uFF1B\u800C\u5728\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\uFF0C\u6BCF\u6B21\u6BD4\u8F83\uFF0C\u5747\u53EF\u4EE5\u6392\u9664\u5C06\u8FD1\u4E00\u534A\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u67E5\u8BE2\u6B21\u6570\u4F1A\u5927\u5927\u51CF\u5C11\u3002</p></li><li><p>\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20\u53EF\u4EE5\u662F\u5176\u4ED6\u5F15\u7528\u7C7B\u578B\uFF0C\u4F46\u8981\u6C42\u6539\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\u4E4B\u95F4\u662F\u53EF\u6BD4\u8F83\u5927\u5C0F\u7684\uFF0C\u5982\u4F55\u4FDD\u8BC1\u5BF9\u8C61\u4E4B\u95F4\u80FD\u6BD4\u8F83\u5927\u5C0F\uFF1F \u5B9E\u73B0Comparable\u63A5\u53E3\uFF0C\u5728\u7C7B\u4E2D\u5B9A\u4E49\u6BD4\u8F83\u89C4\u5219\uFF0C\u5219\u5BF9\u8C61\u4E4B\u95F4\u662F\u53EF\u6BD4\u8F83\u5927\u5C0F\u7684\u3002</p></li><li><p>\u5982\u4F55\u4FDD\u8BC1\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20\u662F\u53EF\u6BD4\u8F83\u5927\u5C0F\u7684</p><ul><li><p>\u8BA9\u5143\u7D20\u6240\u5C5E\u7684\u7C7B\u5B9E\u73B0\u63A5\u53E3Comparable</p></li><li><p>\u6BD4\u8F83\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Comparable</span>\uFF1A\u5185\u6BD4\u8F83\u5668\uFF0C\u7C7B\u5B9E\u73B0\u8BE5\u63A5\u53E3\u540E\uFF0C\u9700\u8981\u91CD\u5199\u5176\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5728\u7C7B\u7684\u5185\u90E8\u5B9A\u4E49\u6BD4\u8F83\u89C4\u5219
  \u89C2\u5BDF<span class="token class-name">String</span>\u5BF9\u8C61\u4E4B\u95F4\u7684\u6BD4\u8F83
<span class="token class-name">Comparator</span>\uFF1A\u5916\u6BD4\u8F83\u5668\uFF0C\u6BD4\u8F83\u89C4\u5219\u5B9A\u4E49\u5728\u7C7B\u7684\u5916\u90E8
  \u901A\u5E38\u7528\u4E8E\uFF1A\u4E0D\u6539\u53D8\u539F\u6709\u6BD4\u8F83\u89C4\u5219\uFF0C\u8981\u4F7F\u7528\u65B0\u7684\u3001\u4E34\u65F6\u7684\u6BD4\u8F83\u89C4\u5219\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u5728\u7C7B\u7684\u5916\u90E8\u5B9E\u73B0\u8BE5\u63A5\u53E3\uFF0C\u5B9A\u4E49\u65B0\u7684\u6BD4\u8F83\u89C4\u5219
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="\u5B9A\u4E49\u4E8C\u53C9\u6392\u5E8F\u6811" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E8C\u53C9\u6392\u5E8F\u6811" aria-hidden="true">#</a> \u5B9A\u4E49\u4E8C\u53C9\u6392\u5E8F\u6811</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BinarySearchTree</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u8282\u70B9</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> root<span class="token punctuation">;</span>
    
    <span class="token comment">// \u5B9A\u4E49\u5185\u90E8\u7C7B\u8868\u793A\u8282\u70B9</span>
    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">E</span> ele<span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u4E2D\u4FDD\u5B58\u7684\u5143\u7D20\u5BF9\u8C61</span>
        <span class="token keyword">private</span> <span class="token class-name">Node</span> left<span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u5B50\u6811\u6307\u5411\u7684\u8282\u70B9</span>
        <span class="token keyword">private</span> <span class="token class-name">Node</span> right<span class="token punctuation">;</span> <span class="token comment">// \u53F3\u5B50\u6811\u6307\u5411\u7684\u8282\u70B9</span>
        
        <span class="token comment">// \u5B9A\u4E49\u6709\u53C2\u6784\u9020\u65B9\u6CD5\uFF0C\u7528\u4E8E\u521B\u5EFA\u8282\u70B9</span>
        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">E</span> ele<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ele <span class="token operator">=</span> ele<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u6DFB\u52A0\u5143\u7D20 \u601D\u8DEF\uFF1A</p><ul><li>\u5224\u65ADroot\u662F\u5426\u4E3Anull <ul><li>\u4E3Anull\uFF0C\u5219\u5C06\u5143\u7D20\u5C01\u88C5\u6210\u8282\u70B9\uFF0C\u6210\u4E3Aroot\uFF0C\u8FD4\u56DEtrue</li><li>\u4E0D\u4E3Anull\uFF0C\u548Croot\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6BD4\u8F83\u7684\u76EE\u7684\u662F\u5C06\u5143\u7D20\u5C1D\u8BD5\u6DFB\u52A0\u4E3Aroot\u7684left/right\u5B50\u6811 <ul><li>\u548Croot\u76F8\u7B49\uFF0C\u6DFB\u52A0\u5931\u8D25\uFF0C\u8FD4\u56DEfalse\uFF0C\u7ED3\u675F</li><li>\u5927\u4E8Eroot\uFF0C\u5C1D\u8BD5\u6DFB\u52A0\u4E3Aroot\u7684right\uFF0C\u5224\u65ADright\u662F\u5426\u4E3Anull <ul><li>\u4E3Anull\uFF0C\u5219\u8BA9\u65B0\u5143\u7D20\u5C01\u88C5\u6210\u8282\u70B9\uFF0C\u6210\u4E3Aright\uFF0C\u6DFB\u52A0\u6210\u529F\uFF0C\u8FD4\u56DEtrue</li><li>\u4E0D\u4E3Anull\uFF0C\u7EE7\u7EED\u559Dright\u7684\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5C1D\u8BD5\u5C06\u5143\u7D20\u6DFB\u52A0\u4E3Aright\u7684left/right\u5B50\u6811</li></ul></li><li>\u5C0F\u4E8E\uFF0C\u540C\u7406</li></ul></li></ul></li></ul></li><li><p>\u67E5\u8BE2\u5143\u7D20</p><ul><li>\u5224\u65ADroot\u662F\u5426\u4E3Anull <ul><li>\u4E3Anull\uFF0C\u5219\u6811\u4E2D\u6CA1\u6709\u8282\u70B9\uFF0C\u8FD4\u56DEnull</li><li>\u4E0D\u4E3Anull\uFF0C\u4EE5root\u8282\u70B9\u4E3A\u57FA\u51C6\uFF0C\u5224\u65ADroot\u662F\u5426\u4E3A\u8981\u627E\u7684\u76EE\u6807\u8282\u70B9 <ul><li>\u5224\u65ADe\u662F\u5426\u548Croot\u7684ele\u76F8\u7B49 -- compareTo <ul><li>\u82E5\u76F8\u7B49\uFF0C\u8BF4\u660Eroot\u4E3A\u8981\u627E\u7684\u8282\u70B9\uFF0C\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\uFF0C\u7ED3\u675F</li><li>\u82E5e&gt;ele,\u5219\u5230\u8282\u70B9\u7684right\u53BB\u67E5\u627E\u76EE\u6807\u8282\u70B9 <ul><li>\u82E5right\u4E3Anull\uFF0C\u8BF4\u660E\u76EE\u6807\u5143\u7D20\u4E0D\u5B58\u5728\u4E8E\u6811\u4E2D\uFF0C\u8FD4\u56DEnull</li><li>\u82E5right\u4E0D\u4E3Anull\uFF0C\u5224\u65ADright\u7EB8\u7BB1\u7684\u63A5\u5730\u7231\u4F60\u662F\u5426\u4E3A\u8981\u627E\u7684\u76EE\u6807\u8282\u70B9\uFF0C\u91CD\u590D\u4E0A\u8FF0\u8FC7\u7A0B</li></ul></li><li>\u82E5e&lt;ele,\u540C\u7406</li></ul></li></ul></li></ul></li></ul></li><li><p>\u5220\u9664\u5143\u7D20</p><ol><li>\u5220\u9664\u53F6\u5B50\u8282\u70B9\uFF1A\u8BA9\u5176\u7236\u8282\u70B9\u6307\u5411\u5B83\u7684\u5F15\u7528\u4E3Anull</li><li>\u5220\u9664\u6709\u4E00\u9897\u5B50\u6811\u7684\u8282\u70B9\uFF1A\u8BA9\u7236\u8282\u70B9\u6307\u5411\u5B83\u7684\u5F15\u7528\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u5B50\u8282\u70B9</li><li>\u5220\u9664\u6709\u4E24\u68F5\u5B50\u6811\u7684\u8282\u70B9\uFF1A\u53EF\u4EE5\u9009\u62E9\u8BA9\u5220\u9664\u8282\u70B9\u7684\u524D\u9A71\u8282\u70B9\u6216\u540E\u7EE7\u8282\u70B9\u4E0A\u6765\u66FF\u6362\u8BE5\u8282\u70B9</li></ol></li></ul><h4 id="\u904D\u5386\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20" aria-hidden="true">#</a> \u904D\u5386\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20</h4><ul><li><p>\u4E8C\u53C9\u6811\u7684\u904D\u5386\uFF1A</p><ul><li>\u5148\u5E8F\u904D\u5386\uFF1A\u6839 \u5DE6 \u53F3</li><li>\u4E2D\u5E8F\u904D\u5386\uFF1A\u5DE6 \u6839 \u53F3 -- \u5F97\u5230\u5347\u5E8F\u6392\u5217\u7684\u7ED3\u679C</li><li>\u540E\u5E8F\u904D\u5386\uFF1A\u5DE6 \u53F3 \u6839 <img src="`+o+'" alt="\u904D\u5386\u4E8C\u53C9\u6811.png"></li></ul></li><li><p>\u91CD\u5199toString</p></li></ul><blockquote><p>\u76EE\u7684\uFF1A\u5B9E\u73B0\u8F93\u51FA\u5F15\u7528\uFF0C\u5C06\u4E8C\u53C9\u6392\u5E8F\u6811\u4E2D\u7684\u5143\u7D20\u904D\u5386\uFF0C\u5E76\u4EE5\u4EE5\u4E0B\u683C\u5F0F\u8FD4\u56DE\uFF1A \u82E5\u6811\u4E2D\u6CA1\u6709\u8282\u70B9\uFF0C\u8FD4\u56DE[]\uFF1B\u82E5\u6811\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE[1,2,3,45,78]</p></blockquote><ol><li>\u5B9A\u4E49\u65B9\u6CD5\u5B8C\u6210\u4E2D\u5E8F\u904D\u5386\uFF0C\u8981\u6C42\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u904D\u5386\u540E\u5143\u7D20\u62FC\u63A5\u6210\u7684\u5B57\u7B26\u4E32</li><li>\u91CD\u5199toString\u65B9\u6CD5\uFF0C\u5176\u4E2D\u8C03\u7528\u4E2D\u5E8F\u904D\u5386\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u6240\u6709\u5143\u7D20</li></ol><blockquote><p>\u6CE8\u610F\u70B9\uFF1A\u975Estatic\u6210\u5458\u53D8\u91CF\u5C5E\u4E8E\u5BF9\u8C61\u7684\uFF0C\u4F1A\u968F\u7740\u5BF9\u8C61\u7684\u91CD\u65B0\u521B\u5EFA\u800C\u91CD\u65B0\u521D\u59CB\u5316 {.is-warning}</p></blockquote><h4 id="\u4E8C\u53C9\u6392\u5E8F\u6811\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6392\u5E8F\u6811\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E8C\u53C9\u6392\u5E8F\u6811\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\u5B58\u5728\u7684\u95EE\u9898</h4><ul><li>\u4E8C\u53C9\u6392\u5E8F\u6811\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\u4F1A\u4EA7\u751F\u5931\u8861\u4E8C\u53C9\u6811 <img src="'+c+'" alt="\u5931\u8861\u4E8C\u53C9\u6811.png"></li><li>\u5931\u8861\u4E8C\u53C9\u6811\u5176\u5B9E\u662F\u4E0D\u5E0C\u671B\u5B58\u5728\u7684\uFF0C\u56E0\u4E3A\u5B83\u5931\u53BB\u4E86\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\u67E5\u8BE2\u4F18\u52BF\uFF0C\u73B0\u5728\u8FD9\u79CD\u5931\u8861\u4E8C\u53C9\u6811\u7684\u67E5\u8BE2\u6548\u7387\u548C\u5355\u5411\u94FE\u8868\u4E00\u6837\uFF0C\u6B64\u65F6\u5B83\u5C31\u662F\u5355\u5411\u94FE\u8868</li><li>\u6570\u636E\u7ED3\u6784\u5728\u8BBE\u8BA1\u65F6\u5DF2\u7ECF\u8003\u8651\u5230\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5\u51FA\u73B0\u4E86\u5BF9\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\u4F18\u5316\uFF0C\u4EA7\u751F\u4E86\u4E24\u79CD\u65B0\u7684\u6570\u636E\u7ED3\u6784\u3002\u8FD9\u4E24\u79CD\u6570\u636E\u7ED3\u6784\u662F\u57FA\u4E8E\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\uFF0C\u4FDD\u7559\u4E86\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\u4F18\u52BF\uFF0C\u4E14\u907F\u514D\u4E86\u7F3A\u9677\uFF0C\u5206\u522B\u662F\uFF1A <ul><li>AVL\u6811</li><li>\u7EA2\u9ED1\u6811</li></ul></li></ul><h3 id="avl\u6811" tabindex="-1"><a class="header-anchor" href="#avl\u6811" aria-hidden="true">#</a> AVL\u6811</h3><blockquote><p>\u5E73\u8861\u4E8C\u53C9\u6811 AVL\u6811\u901A\u8FC7\u65CB\u8F6C\uFF08\u5DE6\u65CB\u3001\u53F3\u65CB\uFF09\u6765\u4FDD\u8BC1\u4E8C\u53C9\u6392\u5E8F\u6811\u7684\u5E73\u8861\u72B6\u6001\uFF0CAVL\u6811\u4F1A\u4FDD\u8BC1\u6811\u7684\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u59CB\u7EC8\u662F\u22641\uFF0CAVL\u6811\u8FBE\u5230\u7684\u5E73\u8861\u72B6\u6001\u662F\u7EDD\u5BF9\u5E73\u8861\uFF08\u5DE6\u53F3\u5B57\u6570\u7684\u9AD8\u5EA6\u5DEE\u22641\uFF09 {.is-info}</p></blockquote><p><img src="'+r+'" alt="avl\u6811.png"></p><h3 id="\u7EA2\u9ED1\u6811" tabindex="-1"><a class="header-anchor" href="#\u7EA2\u9ED1\u6811" aria-hidden="true">#</a> \u7EA2\u9ED1\u6811</h3><blockquote><p>\u7EA2\u9ED1\u6811\u662F\u5B9E\u73B0\u4E86\u81EA\u5E73\u8861\u7684\u4E8C\u53C9\u6392\u5E8F\u6811\uFF0C\u7EA2\u9ED1\u6811\u8FBE\u5230\u7684\u662F\u76F8\u5BF9\u5E73\u8861\u72B6\u6001\uFF0C\u800C\u4E0D\u662F\u7EDD\u5BF9\u5E73\u8861\u72B6\u6001\u3002 \u76F8\u5BF9\u5E73\u8861\u72B6\u6001\u662F\u6307\u5DE6\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u53EF\u4EE5\u5927\u4E8E1\uFF0C\u7EA2\u9ED1\u6811\u4E2D\u6240\u6709\u8282\u70B9\u7684\u989C\u8272\u8981\u4E48\u662F\u9ED1\u8272\u8981\u4E48\u662F\u7EA2\u8272{.is-info}</p></blockquote><h4 id="\u7EA2\u9ED1\u6811\u662F\u600E\u4E48\u5B9E\u73B0\u5E73\u8861\u72B6\u6001\u7684" tabindex="-1"><a class="header-anchor" href="#\u7EA2\u9ED1\u6811\u662F\u600E\u4E48\u5B9E\u73B0\u5E73\u8861\u72B6\u6001\u7684" aria-hidden="true">#</a> \u7EA2\u9ED1\u6811\u662F\u600E\u4E48\u5B9E\u73B0\u5E73\u8861\u72B6\u6001\u7684</h4><p>\u901A\u8FC7\u65CB\u8F6C\u548C\u8C03\u8282\u8282\u70B9\u7684\u989C\u8272\uFF0C\u4E24\u79CD\u64CD\u4F5C\u6765\u4FDD\u8BC1\u4E66\u7684\u5E73\u8861\u72B6\u6001</p><h4 id="\u7EA2\u9ED1\u6811\u4E2D\u8282\u70B9\u7684\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u7EA2\u9ED1\u6811\u4E2D\u8282\u70B9\u7684\u989C\u8272" aria-hidden="true">#</a> \u7EA2\u9ED1\u6811\u4E2D\u8282\u70B9\u7684\u989C\u8272</h4><p>\u6709\u4E24\u79CD\u8282\u70B9\u989C\u8272\u56FA\u5B9A</p><ul><li>\u6839\u8282\u70B9\u5FC5\u7136\u662F\u9ED1\u8272\u7684</li><li>\u65B0\u6DFB\u52A0\u7684\u8282\u70B9\u989C\u8272\u5FC5\u7136\u662F\u7EA2\u8272\u7684\uFF0C\u4E0D\u8FC7\u6DFB\u52A0\u6210\u529F\u540E\uFF0C\u8282\u70B9\u7684\u989C\u8272\u53EF\u80FD\u88AB\u6539\u53D8</li></ul><h4 id="\u7EA2\u9ED1\u6811\u4FDD\u8BC1\u5E73\u8861\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7EA2\u9ED1\u6811\u4FDD\u8BC1\u5E73\u8861\u7684\u89C4\u5219" aria-hidden="true">#</a> \u7EA2\u9ED1\u6811\u4FDD\u8BC1\u5E73\u8861\u7684\u89C4\u5219</h4><p>\u7EA2\u9ED1\u6811\u662F\u901A\u8FC7\u65CB\u8F6C\uFF08\u5DE6\u65CB\u3001\u53F3\u65CB\uFF09\u548C\u6539\u53D8\u8282\u70B9\u7684\u989C\u8272\u6765\u4FDD\u6301\u6811\u7684\u5E73\u8861\u7684 \u7EA2\u9ED1\u6811\u6EE1\u8DB3\u4EE5\u4E0B5\u5927\u539F\u5219\uFF0C\u5219\u8BA4\u4E3A\u7EA2\u9ED1\u6811\u8FBE\u5230\u4E86\u5E73\u8861\u72B6\u6001</p><ol><li>\u8282\u70B9\u662F\u7EA2\u8272\u6216\u9ED1\u8272</li><li>\u6839\u8282\u70B9\u662F\u9ED1\u8272\u7684</li><li>\u6240\u6709\u53F6\u5B50\u8282\u70B9\u662F\u9ED1\u8272\uFF08\u53F6\u5B50\u8282\u70B9\u662FNIL\u8282\u70B9\uFF09</li><li>\u6BCF\u4E2A\u7EA2\u8272\u8282\u70B9\u7684\u4E24\u4E2A\u5B50\u8282\u70B9\u90FD\u662F\u9ED1\u8272\uFF08\u4ECE\u6BCF\u4E2A\u53F6\u5B50\u5230\u6839\u7684\u6240\u6709\u8DEF\u5F84\u4E0A\u4E0D\u80FD\u6709\u4E24\u4E2A\u8FDE\u7EED\u7684\u7EA2\u8272\u8282\u70B9\uFF09</li><li>\u4ECE\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u5230\u5176\u6BCF\u4E2A\u53F6\u5B50\u9501\u7ECF\u5386\u7684\u7B80\u5355\u8DEF\u5F84\u884C\u5305\u542B\u7684\u9ED1\u8272\u8282\u70B9\u7684\u4E2A\u6570\u76F8\u540C <img src="'+u+'" alt="\u7EA2\u9ED1\u6811.png"></li></ol><h4 id="\u5E94\u75281-treemap" tabindex="-1"><a class="header-anchor" href="#\u5E94\u75281-treemap" aria-hidden="true">#</a> \u5E94\u75281\uFF1ATreeMap</h4><p>TreeMap\u5176\u5B9E\u5C31\u662F\u7EA2\u9ED1\u6811\uFF0C\u5176\u5B9E\u73B0\u5373\u4E3A\u7EA2\u9ED1\u6811\u7684\u89C6\u7EBF</p><ol><li>\u901A\u8FC7debug\u89C2\u5BDF\u7EA2\u9ED1\u6811\u6570\u636E\u7ED3\u6784</li><li>\u8F93\u51FA\u5F15\u7528\uFF0C\u89C2\u5BDFtoString\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F \u7ED3\u679C\u662F\u6839\u636Ekey\u5347\u5E8F\u6392\u5E8F\u7684\u7ED3\u679C\uFF0C\u5373toString\u4E2D\u4F7F\u7528\u4E86\u4E2D\u5E8F\u6392\u5E8F</li></ol><h4 id="\u5E94\u75282-treeset" tabindex="-1"><a class="header-anchor" href="#\u5E94\u75282-treeset" aria-hidden="true">#</a> \u5E94\u75282\uFF1ATreeSet</h4><p>TreeSet\u5E95\u5C42\u8C03\u7528\u4E86TreeMap\uFF0C\u5176\u5B9E\u8D28\u4E3A\u60F3map\u4E2Dkey\u7684\u90A3\u4E00\u5217\u4FDD\u5B58\u5143\u7D20\uFF0C\u6240\u4EE5TreeSet\u4E5F\u662F\u7EA2\u9ED1\u6811\u7684\u5E94\u7528</p><h4 id="\u6240\u6709\u7684set\u548Cmap\u90FD\u6709\u8FD9\u6837\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u7684set\u548Cmap\u90FD\u6709\u8FD9\u6837\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u6240\u6709\u7684set\u548Cmap\u90FD\u6709\u8FD9\u6837\u7684\u5173\u7CFB</h4><ul><li>HashSet -- HashMap \u6570\u636E\u7ED3\u6784\u4E3A\u6563\u5217\u8868\uFF0C\u8F93\u51FA\u5F15\u7528\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u4E3A\u65E0\u5E8F\u7ED3\u679C</li><li>TreeSet -- TreeMap \u6570\u636E\u7ED3\u6784\u4E3A\u7EA2\u9ED1\u6811\uFF0C\u8F93\u51FA\u5F15\u7528\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u4E3A\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C</li><li>LinkedHashSet -- LinkedHashMap \u8F93\u51FA\u5F15\u7528\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u4E3A\u6709\u5E8F\u7ED3\u679C</li></ul><h3 id="\u6563\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6563\u5217\u8868" aria-hidden="true">#</a> \u6563\u5217\u8868</h3><ul><li><p>\u5E94\u7528\u7C7B\uFF1AHashMap</p></li><li><p>\u6563\u5217\u8868\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u7684\u5B9E\u73B0\uFF1A</p><ul><li>JDK1.8\u4E4B\u524D\uFF0C\u6563\u5217\u8868\u7684\u6570\u636E\u7ED3\u6784\u4E3A\uFF1A\u6570\u7EC4+\u94FE\u8868</li><li>JDK1.8\u5F00\u59CB\uFF0C\u6563\u5217\u8868\u7684\u6570\u636E\u7ED3\u6784\u4E3A\uFF1A\u6570\u7EC4+\u94FE\u8868+\u7EA2\u9ED1\u6811 <img src="'+d+'" alt="\u6563\u5217\u8868.png"></li></ul></li></ul>',63),v=[m];function b(h,g){return a(),s("div",null,v)}var y=n(k,[["render",b],["__file","\u6570\u636E\u7ED3\u6784.html.vue"]]);export{y as default};
